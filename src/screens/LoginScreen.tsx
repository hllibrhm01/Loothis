import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, Alert} from 'react-native';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/fontawesome-free-solid';

import {Input, Button, SocialIcon} from '@rneui/themed';

// components
import GeneralTextInput from '../components/GeneralTextInput';
import GeneralButton from '../components/GeneralButton';

Icon.loadFont();

interface Props {}

const ContainerFlex = styled.View`
  flex: 1;
  height: ${Platform.OS === 'ios' ? 18 : 0};
  background-color: white;
  justify-content: center;
  flex-direction: column;
`;

const FlexOne = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #5851dc;
`;

const FlexTwo = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  background-color: #5851dc;
`;

const FlexThree = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #5851dc;
`;

const FlexOneInsideFlexOne = styled.View`
  justify-content: center;
  align-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const FlexTwoInsideFlexOne = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FlexForForgotPasswordText = styled.View`
  align-self: flex-end;
  margin-right: 10px;
`;

const AppNameFontCustomize = styled.Text`
  font-size: 50px;
  color: white;
`;

const LogoText = styled.Text`
  font-size: 30px;
  color: white;
`;

const LoginScreen: React.FC<Props> = () => {
  const {t} = useTranslation();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const handleusernameOrEmail = usernameOrEmail => {
    setUsernameOrEmail(usernameOrEmail);
    console.log(usernameOrEmail);
  };

  const handlePassword = passwordText => {
    setPasswordText(passwordText);
    console.log(passwordText);
  };

  const handleOnPress = () => {
    setPasswordText('');
    Alert.alert('asdsad');
  };

  return (
    <ContainerFlex>
      <FlexOne>
        <FlexOneInsideFlexOne>
          <AppNameFontCustomize>{t('appName')}</AppNameFontCustomize>
        </FlexOneInsideFlexOne>
        <FlexOneInsideFlexOne>
          <LogoText style={{color: 'white'}}>Aramıza sende</LogoText>
          <LogoText style={{color: 'white'}}>katıl.</LogoText>
        </FlexOneInsideFlexOne>
      </FlexOne>
      <FlexTwo>
        <FlexTwoInsideFlexOne>
          <GeneralTextInput
            idName={'username'}
            placeholderText={'Username or email'}
            handleValue={usernameOrEmail}
            handleOnChangeText={handleusernameOrEmail}
          />
          <GeneralTextInput
            idName={'password'}
            placeholderText={'Password'}
            handleValue={passwordText}
            handleOnChangeText={handlePassword}
          />
          <FlexForForgotPasswordText>
            <Text style={{color: 'white'}}>Forgot Password ?</Text>
          </FlexForForgotPasswordText>
        </FlexTwoInsideFlexOne>
        <FlexTwoInsideFlexOne />
      </FlexTwo>
      <FlexThree>
        <Text style={{color: 'white'}}>with</Text>
        <SocialIcon title="Sign In With Facebook" button type="facebook" />
        <GeneralButton />
        <Text style={{color: 'white'}}>Don't have a account ? Sign Up</Text>
      </FlexThree>
    </ContainerFlex>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
