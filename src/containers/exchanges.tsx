import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Overlay } from '@components/overlay';
import { RowItem } from '@components/row-item';
import { ErrorItem } from '@components/error-item';

import { StackNavigationProps } from '@containers/index';

export interface Row {
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

export const Exchanges = (props: StackNavigationProps<any>) => {
    const [rows, setRows] = React.useState<Row[]>([]);
    const [load, setLoad] = React.useState<boolean>(false);
    const [err, setErr] = React.useState<string>('');

    // Запрос на получение котировок
    const getExchanges = () => {
        setLoad(true);

        fetch('https://poloniex.com/public?command=returnTicker', {})
            .then(async (response) => {
                try {
                    let json = await response.json();

                    if (json.error) {
                        throw new Error(json.error);
                    }

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
                    setErr('');
                } catch (e) {
                    console.error(e);
                    setErr(e.message);
                }
            })
            .catch((e) => {
                console.error(e);
                setErr(e.message);
            })
            .finally(() => {
                setLoad(false);
            });
    };

    // Периодическое получение котировок
    React.useEffect(() => {
        getExchanges();
        const ticker = setInterval(() => {
            getExchanges();
        }, 2500);

        return () => {
            clearInterval(ticker);
        };
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#FFF' }}>
            <Overlay isLoading={load && !rows.length}>
                <FlatList
                    data={rows}
                    maxToRenderPerBatch={20}
                    initialNumToRender={20}
                    ListHeaderComponent={err ? <ErrorItem text={err} /> : <React.Fragment />}
                    keyExtractor={(item, index) => {
                        return item.name;
                    }}
                    renderItem={({ item }) => <RowItem row={item} />}
                />
            </Overlay>
        </SafeAreaView>
    );
};
