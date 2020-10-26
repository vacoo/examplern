import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

export default StyleSheet.create<{ [key: string]: ViewStyle | TextStyle | ImageStyle }>({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    desc: {
        fontSize: 14,
        color: '#999',
        marginBottom: 10,
    },
    btn: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: '#000',
        borderRadius: 4,
    },
    btn_text: {
        fontSize: 14,
        color: '#FFF',
    },
});
