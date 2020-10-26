import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type Props = {
    text: string;
};

export const ErrorItem = React.memo((props: Props) => {
    const { text } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.err_title}>Ошибка приложения</Text>
            <Text style={styles.err_text}>{text}</Text>
        </View>
    );
});
