import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Profile from './Profile';
import styled from 'styled-components/native';
//redux
import {useSelector} from 'react-redux';
function Detail({navigation}) {
  const userinfo = useSelector(state => state.userinfo);

  console.log(userinfo);
  return (
    <View>
      <Box>
        <Profile props={userinfo.avatar_url} />
        <Info> {userinfo.name}</Info>
        <Info>takipçi: {userinfo.followers}</Info>
        <Info>takip: {userinfo.following}</Info>
      </Box>
      <Text>login: {userinfo.login}</Text>
      <Text>bio: {userinfo.bio}</Text>
      <Text>şirket: {userinfo.company}</Text>
      <Text>oluşturulma tarihi: {userinfo.created_at}</Text>
    </View>
  );
}
const Box = styled.View`
  display: flex;
  align-items: center;
  padding: 50px;
  background: #0fcad8;
`;
const Info = styled.Text`
  color: white;
  margin: 20px;
  font-size: 30px;
`;
export default Detail;
