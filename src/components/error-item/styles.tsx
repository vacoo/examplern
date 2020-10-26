import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

export default StyleSheet.create<{ [key: string]: ViewStyle | TextStyle | ImageStyle }>({
    container: {
        backgroundColor: 'red',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    err_title: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    err_text: {
        color: '#FFF',
        fontSize: 13,
    },
});
