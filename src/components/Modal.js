import React, {Component, useState, useMemo} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native';
//redux
import {useSelector, useDispatch} from 'react-redux';
import {loadFollowers, loadUserInfo} from '../redux/actions';
//components
import Profile from './Profile';
//style
import styled from 'styled-components/native';
import {black} from 'color-name';
import Detail from './Detail';

function FollowModal({props}) {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const selectedFollowers = useSelector(state => state.followers);
  const userinfo = useSelector(state => state.userinfo);

  const followersInfo = text => dispatch(loadUserInfo(text));

  //Open Modal
  const handleClick = () => {
    setModalVisible(true);
  };

  //detay
  // const userInfo = info => dispatch(userInfo(info));

  const DetailPage = login => {
    followersInfo({user: login});
    setModalVisible(false);
  };
  return (
    <View style={styles.centeredView}>
      <TouchableHighlight style={styles.openButton} onPress={handleClick}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>{props}</Text> */}

            <ScrollView>
              {selectedFollowers != '' &&
                selectedFollowers.map(item => {
                  const {login, avatar_url} = item;
                  return (
                    <Box>
                      <Profile props={avatar_url} />
                      <Info>{login}</Info>
                      <Detay onPress={() => DetailPage(login)}>
                        <Label>Detay =></Label>
                      </Detay>
                    </Box>
                  );
                })}
            </ScrollView>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Gizle</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const Detay = styled.TouchableHighlight`
  background: #0098ff;
  margin-top: 15px;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Box = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #0098ff;
  border-radius: 10px;
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
export default FollowModal;
