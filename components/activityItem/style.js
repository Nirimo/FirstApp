import { StyleSheet } from 'react-native';
import { PADDING } from '../../outils/constantes';

const styles = StyleSheet.create({
    scrollableListItem: {
        flexDirection: 'column',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
        marginRight: 15,
        elevation: 1,
    },
    scrollableListItemLast: {
        flexDirection: 'column',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
        marginRight: 30,
        elevation: 1,
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    subText: {
        marginTop: 10,
        fontSize: 13
    },
})

export default styles;