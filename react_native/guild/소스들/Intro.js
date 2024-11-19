import { StyleSheet, Text, View } from 'react-native';
import { Image, ImageBackground } from 'react-native';

import styles from './styles/style-main'; // 스타일 파일 가져오기

function Intro() {
  return (
    // <View>
      <ImageBackground source={require('./assets/배경_인트로.webp')} style={{ flex: 1 }} imageStyle={{ opacity: 1 }}>
        <Text>길드</Text>
      </ImageBackground>
    // </View>
  );
}

export default Intro;