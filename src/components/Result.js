import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  ScrollView,
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Detail from './Detail';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {loadUserInfo} from '../redux/actions';
//Style
import styled from 'styled-components/native';
function Result({navigation}) {
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userInfo = info => dispatch(loadUserInfo(info));
  const handleClilk = login => {
    userInfo({user: login});
    navigation.navigate('Detail');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {users != '' &&
          users.map(item => {
            const {login, avatar_url} = item;
            return (
              <Box>
                <Profile
                  source={{
                    uri: avatar_url,
                  }}
                />
                <Info>{login}</Info>
                <Detay onPress={() => handleClilk(login)}>
                  <Label>Detay =></Label>
                </Detay>
              </Box>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}

const Box = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: 3px solid #a2a2a2;
`;
const Profile = styled.Image`
  margin-top: 10px;
  width: 100;
  height: 100;
  border-radius: 50;
`;
const Info = styled.Text`
  font-size: 25px;
  color: red;
  margin-top: 15px;
`;
const Label = styled.Text`
  font-size: 18px;
  color: white;
  margin-top: 15px;
`;
const Detay = styled.TouchableHighlight`
  background: red;
  margin-top: 15px;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export default Result;
