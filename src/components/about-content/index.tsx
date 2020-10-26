import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

type Props = {
    onPress: () => void;
};

export const AboutContent = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Котировки</Text>
            <Text style={styles.desc}>Тестовое задание</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={styles.btn}>
                <Text style={styles.btn_text}>Посмотреть</Text>
            </TouchableOpacity>
        </View>
    );
};
