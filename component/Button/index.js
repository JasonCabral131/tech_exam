import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React , {useContext} from 'react';
import { CalculatorContext } from '../../config/context';

const Button = (props) => {
    const  {value} = useContext(CalculatorContext);
  const {bgColor ="#E0E0E7", text = "", width ="25%", OnPress = () => {}, textColor = '#1C191C', isClearable = false} = props;
  return (
    <TouchableOpacity style={{...style.btn, backgroundColor: bgColor, width}} onPress={OnPress}>
      <Text style={{...style.btnText, color: textColor}}>{isClearable ? (value.firstVal || value.secondVal) ? 'AC': text: text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const style = StyleSheet.create({
  btn: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .3,
    borderColor: '#1C191C',
  },
  btnText: {

    fontSize: 50,
  },
});
