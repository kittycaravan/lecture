import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    text: {
      color: 'pink'
    },
    deck: {
      flexDirection: 'row',
      height: 160
    },
    skillDeck: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      flexDirection: 'row',
      height: 100,
      width: '100%'
    },
    skill: {
      flex: 1,
      opacity: 0.6,
      backgroundColor: 'pink',
      height: 100,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    skillImg: {
      // opacity: 0.8,
      // position: 'absolute',
      // flex: 1,
      width: 40,
      height: 40,
      // height:50
    },
    cardArea: {
      flex: 1,
      height: 160,
      position: 'relative'
    },
    cardImg: {
      // opacity: 0.8,
      // position: 'absolute',
      flex: 1,
      width: '100%',
      // height:50
    },
    hr: {
      opacity: 0.8,
      backgroundColor: '#EDD3ED',
      textAlign: 'center'
    },
    mid: {
      flex: 1,
      opacity: 0.3,
      backgroundColor: '#EDD3ED',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    point: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      flex: 1,
      width: '100%',
      paddingLeft: 6,
      paddingRight: 6,
      paddingBottom: 2,
    },
    hp: {
      backgroundColor: '#ED1C24',
      height: 6,
    },
    mp: {
      backgroundColor: '#60C5F1',
      height: 6,
      width: '80%'
    },
  });
  
  export default styles;