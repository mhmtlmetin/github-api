import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Profile from './Profile';
import styled from 'styled-components/native';
import Modal from './Modal';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {loadFollowers, loadUserInfo} from '../redux/actions';
function Detail({navigation}) {
  const [sendinfo, setsendinfo] = useState('');
  const userinfo = useSelector(state => state.userinfo);

  const dispatch = useDispatch();

  const followers = url => dispatch(loadFollowers(url));

  followers(userinfo.followers_url);

  return (
    <View>
      <Box>
        <Profile props={userinfo.avatar_url} />
        <Info> {userinfo.name}</Info>
        <Info onPress={() => followers(userinfo.login)}>
          takipçi: {userinfo.followers}
        </Info>
        <Modal />
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
