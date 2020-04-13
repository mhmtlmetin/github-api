import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

//redux
import {useSelector} from 'react-redux';
function Detail({navigation}) {
  const userinfo = useSelector(state => state.userinfo);

  console.log(userinfo);
  return (
    <View>
      {userinfo !== '' &&
        Object.entries(userinfo).map((key, id) => {
          return <Text>{key}</Text>;
        })}
    </View>
  );
}

export default Detail;
