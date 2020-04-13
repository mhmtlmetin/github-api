import React, {Fragment, useState} from 'react';
import {Text, TextInput, SafeAreaView, TouchableHighlight} from 'react-native';
import Button from './Button';
import styled from 'styled-components';
import Result from './Result';
import Detail from './Detail';

//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadUsers, loadUserSuccess} from '../redux/actions';
function Search({navigation}) {
  const [value, onChangeText] = useState('kullanıcı ara');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const user = text => dispatch(loadUsers(text));

  const handleChange = e => {
    setText(e);
  };

  const handleClick = () => {
    if (text.trim() === '') return;

    user({
      user: text,
    });
  };
  const users = useSelector(state => state.user);
  return (
    <SafeAreaView>
      <Txt onChangeText={e => handleChange(e)}></Txt>
      <Button outline onPress={handleClick}>
        Ara
      </Button>
      <Result navigation={navigation} />
    </SafeAreaView>
  );
}

const Txt = styled.TextInput`
  margin-left: 20px;
  margin-top: 20px;
  color: black;
  border: 1px;
  border-radius: 5px;
  width: 90%;
  height: 50px;
  font-size: 20px;
  padding: 10px;
`;

export default Search;
