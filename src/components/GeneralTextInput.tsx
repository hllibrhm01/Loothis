import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';

import styled from 'styled-components/native';
import {Button, SocialIcon} from '@rneui/themed';

const ContainerView = styled.SafeAreaView`
  width: 90%;
  height: 22%;
  justify-content: center;
  border-radius: 5px;
  border-width: 0.3;
  margin: 10px;
  background-color: white;
`;

const GeneralInput = styled.TextInput`
  justify-content: center;
  margin-left: 3%;
`;

interface Props {
  placeholderText: string;
  handleValue: any;
  handleOnChangeText: any;
  idName: any;
}

const GeneralTextInput: FC<Props> = ({
  placeholderText,
  handleValue,
  handleOnChangeText,
  idName,
}) => {
  // const [usernameOrEmail, setUsernameOrEmail] = useState('');

  return (
    <ContainerView>
      <GeneralInput
        // onChangeText={onChangeNumber}
        name={idName}
        value={handleValue}
        placeholder={placeholderText}
        onChangeText={handleOnChangeText}
      />
    </ContainerView>
  );
};

export default GeneralTextInput;
