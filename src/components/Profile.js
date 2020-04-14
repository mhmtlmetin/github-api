import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';

const Profile = ({props}) => {
  return <Profil source={{uri: props}} />;
};
const Profil = styled.Image`
  margin-top: 10px;
  width: 150;
  height: 150;
  border-radius: 75;
`;
export default Profile;
