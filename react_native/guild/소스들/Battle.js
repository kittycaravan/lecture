import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';

import styles from './styles/style-main'; // 스타일 파일 가져오기

function Battle() {
  var [skillText, setSkillText] = useState('야옹'); // 초기 텍스트 설정
  var [j, setJ] = useState([{ job: '전사', grade: 'SSR' }]); // 초기 텍스트 설정

  function gachaApi() {
    setJ([{ job: '사제', grade: 'SSR' }]);
    // axios.get('http://localhost:8080/spring/api/gacha')
    // axios.get('http://10.0.2.2:8080/spring/api/gacha')
    // axios.get('http://210.97.87.236:8080/spring/api/gacha') //집
    axios.get('http://192.168.0.129:8080/spring/api/gacha') //학원
      .then(response => {
        console.log(response.data);  // 서버로부터 받은 데이터 출력	
        // 기존의 `my` 배열을 복사하고, 새 객체를 추가한 새로운 배열로 업데이트
        // setJ(response.data);
        // setJ('야옹');
        setJ([...j, response.data]);
      })
      .catch(error => {		
        setJ('에러다')
      });	      
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hr}>적</Text>
      <View style={styles.deck}>
        <View style={styles.cardArea}>
          <Image source={require('./assets/궁수.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
        <View style={styles.cardArea}>
          <Image source={require('./assets/도적.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
        <View style={styles.cardArea}>
          <Image source={require('./assets/마법사.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
        <View style={styles.cardArea}>
          <Image source={require('./assets/사제.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
        <View style={styles.cardArea}>
          <Image source={require('./assets/전사.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
      </View>
      <ImageBackground source={require('./assets/맵_001_001.webp')} style={{ flex: 1 }} imageStyle={{ opacity: 0.6 }}>
        {/* <View style={styles.mid}></View> */}
        {/*카드 스킬*/}
        <View style={styles.skillDeck}>
          <View style={styles.skill}>
            {j.map((item, index) => (
              <Text key={index}>{`${item.job} - ${item.grade}`}</Text>
            ))}
            <TouchableOpacity onPress={() => gachaApi()}>
              <Image source={require('./assets/궁극기_활.png')} style={styles.skillImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.skill}>
            <Text>{skillText}</Text>
            <TouchableOpacity onPress={() => console.log('단검 궁!!!')}>
              <Image source={require('./assets/궁극기_단검.png')} style={styles.skillImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.skill}>
            <Text>{skillText}</Text>
            <TouchableOpacity onPress={() => setSkillText('궁극기 사용!')}>
              <Image source={require('./assets/궁극기_법봉.png')} style={styles.skillImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.skill}>
            <Text>{skillText}</Text>
            <TouchableOpacity onPress={() => setSkillText('궁극기 사용!')}>
              <Image source={require('./assets/궁극기_성수.png')} style={styles.skillImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.skill}>
            <Text>{skillText}</Text>
            <TouchableOpacity onPress={() => setSkillText('궁극기 사용!')}>
              <Image source={require('./assets/궁극기_방패.png')} style={styles.skillImg} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      {/*유저 덱*/}
      <View style={styles.deck}>
        <View style={styles.cardArea}>
          <Image source={require('./assets/궁수.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
        <View style={styles.cardArea}>
          <Image source={require('./assets/도적.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
        <View style={styles.cardArea}>
          <Image source={require('./assets/마법사.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
        <View style={styles.cardArea}>
          <Image source={require('./assets/사제.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
        <View style={styles.cardArea}>
          <Image source={require('./assets/전사.webp')} style={styles.cardImg} />
          <View style={styles.point}>
            <View style={styles.hp} />
            <View style={styles.mp} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Battle;