import { Overlay } from '@components/overlay';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface Row {
    name: string;
    last: string;
    highestBid: string;
    percentChange: string;
}

export const initialRow: Row = {
    name: '',
    last: '',
    highestBid: '',
    percentChange: '',
};

export const Exchanges = (props: any) => {
    const [rows, setRows] = React.useState<Row[]>([]);
    const [load, setLoad] = React.useState<boolean>(false);

    // Запрос на получение котировок
    const getExchanges = () => {
        if (!rows.length) {
            setLoad(true);
        }

        fetch('https://poloniex.com/public?command=returnTicker', {})
            .then(async (response) => {
                try {
                    let json = await response.json();

                    let rowsRaw: Row[] = [];

                    for (let key in json) {
                        let row: Row = {
                            ...initialRow,
                            name: key,
                            last: json[key].last,
                            highestBid: json[key].highestBid,
                            percentChange: json[key].percentChange,
                        };
                        rowsRaw = [...rowsRaw, row];
                    }

                    setRows(rowsRaw);
                } catch (e) {
                    console.error(e);
                }
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                setLoad(false);
            });
    };

    // Периодическое получение котировок
    React.useEffect(() => {
        const ticker = setInterval(getExchanges, 5000);
        getExchanges();

        return () => {
            clearInterval(ticker);
        };
    }, []);

    return (
        <SafeAreaView>
            <Overlay isLoading={load}>
                <Text>{load ? 'y' : 'n'}</Text>
                <FlatList
                    data={rows}
                    keyExtractor={(item, index) => {
                        return String(index);
                    }}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                />
            </Overlay>
        </SafeAreaView>
    );
};
