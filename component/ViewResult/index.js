import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useContext} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {CalculatorContext} from '../../config/context';
const {width} = Dimensions.get('window');
const ViewResult = () => {
  const {value} = useContext(CalculatorContext);
  
  return (
    <View style={styles.container}>
      <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.text}>
        {value.operation ? value.secondVal : value.firstVal}
      </Text>
    </View>
  );
};

export default ViewResult;

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#1C191C',
  },
  text: {
    paddingRight: 20,
    marginBottom: 20,
    width,
    fontSize: RFValue(50, width),
    color: '#fff',
    textAlign: 'right',
  },
});
