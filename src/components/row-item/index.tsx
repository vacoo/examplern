import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import { Row } from '@containers/exchanges';

type Props = {
    row: Row;
};

export const RowItem = React.memo(
    (props: Props) => {
        const { row } = props;

        let direction = Number(row.percentChange) > 0 ? true : false;

        return (
            <View style={styles.container}>
                <View style={styles.col_name}>
                    <Text style={styles.name_text}>{row.name}</Text>
                    <Text style={[styles.data_text, direction ? styles.is_up : styles.is_down]}>
                        {row.percentChange}
                    </Text>
                </View>
                <View style={styles.col_data}>
                    <Text style={styles.data_text}>Посл. цена: {row.last}</Text>
                    <Text style={styles.data_text}>Макс. цена: {row.highestBid}</Text>
                </View>
            </View>
        );
    },
    (prev, next) => {
        return (
            prev.row.highestBid === next.row.highestBid ||
            prev.row.last === next.row.last ||
            prev.row.percentChange === next.row.percentChange
        );
    },
);
