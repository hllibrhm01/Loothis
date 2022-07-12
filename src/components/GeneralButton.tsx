import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';

import styled from 'styled-components/native';

const ContainerView = styled.TouchableOpacity`
  width: 90%;
  height: 15%;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border-color: white;
  border-width: 0.5;
  margin: 10px;
  background-color: #5851dc;
`;

const GeneralButtonInsideText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

interface Props {}

const GeneralButton: FC<Props> = ({
  placeholderText,
  handleValue,
  handleOnChangeText,
  idName,
}) => {
  // const [usernameOrEmail, setUsernameOrEmail] = useState('');

  return (
    <ContainerView>
      <GeneralButtonInsideText>Log In</GeneralButtonInsideText>
    </ContainerView>
  );
};

export default GeneralButton;
