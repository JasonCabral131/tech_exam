import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useContext} from 'react';
import Button from '../Button';
import ViewResult from './../ViewResult';
import {CalculatorContext, CalculatorOperations} from '../../config/context';
const width = Dimensions.get('window').width;
const Keyboard = () => {
  const {value, setValue} = useContext(CalculatorContext);
  const buttomRow = [
    [
      {
        text: 'C',
        bgColor: '#C5C3CC',
        isClearable: true,
        OnPress: () => {
          clear();
        },
      },
      {text: '±', bgColor: '#C5C3CC',OnPress: () => {
        handleOperation('±');
      }},
      {
        text: '%',
        bgColor: '#C5C3CC',
        OnPress: () => {
          handleOperation('%');
        },
      },
      {
        text: '÷',
        bgColor: '#FB9A17',
        textColor: '#fff',
        OnPress: () => handleOperation('÷'),
      },
    ],
    [
      {
        text: '7',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('7');
        },
      },
      {
        text: '8',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('8');
        },
      },
      {
        text: '9',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('9');
        },
      },
      {
        text: '×',
        bgColor: '#FB9A17',
        textColor: '#fff',
        OnPress: () => handleOperation('×'),
      },
    ],
    [
      {
        text: '4',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('4');
        },
      },
      {
        text: '5',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('5');
        },
      },
      {
        text: '6',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('6');
        },
      },
      {
        text: '−',
        bgColor: '#FB9A17',
        textColor: '#fff',
        OnPress: () => handleOperation('−'),
      },
    ],
    [
      {
        text: '1',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('1');
        },
      },
      {
        text: '2',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('2');
        },
      },
      {
        text: '3',
        bgColor: '#E0E0E7',
        OnPress: () => {
          handleConCatenate('3');
        },
      },
      {
        text: '+',
        bgColor: '#FB9A17',
        textColor: '#fff',
        OnPress: () => handleOperation('+'),
      },
    ],
    [
      {text: '0', bgColor: '#E0E0E7', width: '50%', OnPress: () => {
        handleConCatenate('0');
      },},
      {text: '.', bgColor: '#E0E0E7', OnPress: () => handleDot()},
      {
        text: '=',
        bgColor: '#FB9A17',
        textColor: '#fff',
        OnPress: () => handleOperation('='),
      },
    ],
  ];

  const clear = () => {
    setValue({
      firstVal: 0,
      secondVal: 0,
      operation: '',
    });
  };

  const handleConCatenate = val => {
    setValue(prev => {
      if (prev.operation) {
        return {
          ...prev,
          secondVal: prev.secondVal == 0 ? val : (prev.secondVal += val),
        };
      }
      return {
        ...prev,
        firstVal: prev.firstVal == 0 ? val : (prev.firstVal += val),
      };
    });
  };
  const handleOperation = type => {
    switch (type) {
      case '±':
      return  setValue(prev => {
          if (prev.operation) {
            return {
              ...prev,
              secondVal:
                prev.secondVal == 0
                  ? 0
                  : prev.secondVal > 0
                  ? -Math.abs(prev.secondVal)
                  : Math.abs(prev.secondVal),
            };
          }
          return {
            ...prev,
            firstVal:
              prev.firstVal == 0
                ? 0
                : prev.firstVal > 0
                ? -Math.abs(prev.firstVal)
                : Math.abs(prev.firstVal),
          };
        });
      case '=':
        return setValue(prev => {
          if (prev.operation) {
            return {
              ...prev,
              firstVal: CalculatorOperations[prev.operation](
                prev.firstVal,
                prev.secondVal,
              ),
              operation: '',
              secondVal: 0,
            };
          }
          return {...prev};
        });
        
      
      default:
        return  setValue(prev => {
          return {...prev, operation: type};
        });
     
    }
  };
  const handleDot = () => {
    setValue(prev => {
      if (prev.operation) {
        if (!/\./.test(prev.secondVal)) {
          return {...prev, secondVal: prev.secondVal + '.'};
        }
      }
      if (!/\./.test(prev.firstVal)) {
        return {...prev, firstVal: prev.firstVal + '.'};
      }
      return {...prev};
    });
  };
  return (
    <View style={style.container}>
      <ViewResult />
      {buttomRow.map((column, key) => {
        return (
          <View style={style.row} key={key}>
            {column.map((row, key1) => {
              return <Button {...row} key={key1} />;
            })}
          </View>
        );
      })}
    </View>
  );
};
const clear = () => {};
const handleOperation = () => {};
export default Keyboard;

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width,
    backgroundColor: '#fff',
  },
  row: {
    width,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
