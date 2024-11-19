import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import styles from './styles/style-main'; // 스타일 파일 가져오기
import Intro from './Intro';
import Battle from './Battle';

function App() {
  const [showIntro, setShowIntro] = useState(true); // 초기 상태: Intro 표시

  useEffect(() => {
    // 3초 후 Intro를 숨기고 Battle을 표시
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {showIntro ? <Intro /> : <Battle />}
    </View>
  );
}

export default App;
