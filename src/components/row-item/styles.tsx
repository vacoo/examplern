import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

export default StyleSheet.create<{ [key: string]: ViewStyle | TextStyle | ImageStyle }>({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#999',
        padding: 5,
    },
    name_text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    data_text: {
        fontSize: 14,
    },
    col_name: {
        width: '35%',
    },
    col_data: {
        width: '65%',
    },
    is_up: {
        color: 'green',
    },
    is_down: {
        color: 'red',
    },
});
