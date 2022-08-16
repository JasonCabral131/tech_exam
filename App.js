import React, { useCallback, useMemo, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { CalculatorContext } from "./config/context";
import Keyboard from "./component/Keyboard";



const width = Dimensions.get("window").width;
const App = () => {
  const [value, setValue] = useState({
    firstVal: 0,
    secondVal: 0,
    operation: "",
    result: ""
  });
  const providerMemoized = useMemo(() => ({value, setValue}), []);
  return (
    <CalculatorContext.Provider value={{value, setValue}}>
    <SafeAreaView style={{flex: 1, width, backgroundColor:  '#1C191C'}}>
        <Keyboard />  
    </SafeAreaView>
    </CalculatorContext.Provider>
  );
};


export default App;
