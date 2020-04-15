import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Profile from './Profile';
import styled from 'styled-components/native';
import Modal from './Modal';
//redux
import {useSelector} from 'react-redux';
function Detail({navigation}) {
  const userinfo = useSelector(state => state.userinfo);

  console.log(userinfo);
  const followers = login => {};
  return (
    <View>
      <Box>
        <Profile props={userinfo.avatar_url} />
        <Info> {userinfo.name}</Info>
        <Info onPress={() => followers(userinfo.login)}>
          takipçi: {userinfo.followers}
        </Info>
        <Modal props={userinfo.followers_url} />
        <Info>takip: {userinfo.following}</Info>
      </Box>
      <About>
        <Text>login: {userinfo.login}</Text>
        <Text>bio: {userinfo.bio}</Text>
        <Text>şirket: {userinfo.company}</Text>
        <Text>oluşturulma tarihi: {userinfo.created_at}</Text>
      </About>
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
const About = styled.Text`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 20px;
  font-size: 20px;
`;
export default Detail;
