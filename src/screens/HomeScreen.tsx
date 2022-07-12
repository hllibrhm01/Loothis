import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

interface Props {
  navigation: string;
}

const HomeScreen: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
