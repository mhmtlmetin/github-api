import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';

const colors = {
  accent: '#911',
  highlight: '#D22',
  contrast: '#FFF',
};

const Label = styled.Text`
  color: ${props => (!props.outline ? colors.contrast : colors.accent)};
  font-weight: 700;
  align-self: center;
  padding: 10px;
`;

const ButtonContainer = styled.TouchableHighlight`
  background-color: ${props =>
    props.outline ? colors.contrast : colors.accent};
  width: 91%;
  margin-top: 5px;
  margin-left: 17px;
  margin-bottom: 20px;
  border-color: ${colors.accent};
  border-radius: 5px;
  border-width: 2px;
`;

const Button = props => {
  return (
    <ButtonContainer onPress={props.onPress} underlayColor={colors.highlight}>
      <Label>{props.children}</Label>
    </ButtonContainer>
  );
};

export default Button;
