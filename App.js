import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';
import {StatusBar} from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [weight,setWeight] = useState('')
  const [time,setTime] = useState(1)
  const [bottle,setBottle] = useState(1)
  const [gender,setGender] = useState('male')
  const [promille,setPromille] = useState('0')
  const [grams,setGrams] = useState('0')
  const [litres,setLitres] = useState('0')
  const [burning,setBurning] = useState('0')
  const [lgrams,setLgrams] = useState('0')


  
  const bottles = Array();
  bottles.push({ label: '1 bottle', value: 1 });
  bottles.push({ label: '2 bottle', value: 2 });
  bottles.push({ label: '3 bottle', value: 3 });
  bottles.push({ label: '4 bottle', value: 4 });
  bottles.push({ label: '5 bottle', value: 5 });
  bottles.push({ label: '6 bottle', value: 6 });
  bottles.push({ label: '7 bottle', value: 7 });
  bottles.push({ label: '8 bottle', value: 8 });
  bottles.push({ label: '9 bottle', value: 9 });


  const times = Array();
  times.push({ label: '1 hour', value: 1 });
  times.push({ label: '2 hour', value: 2 });
  times.push({ label: '3 hour', value: 3 });
  times.push({ label: '4 hour', value: 4 });
  times.push({ label: '5 hour', value: 5 });
  times.push({ label: '6 hour', value: 6 });
  times.push({ label: '7 hour', value: 7 });
  times.push({ label: '8 hour', value: 8 });
  times.push({ label: '9 hour', value: 9 });




  const genders = [
    { label: 'Male', value: 'male'},
    { label: 'Female', value: 'female'}

  ];

  return ( 
     <View style={styles.container}>
    <View style={styles.field}>
      <Text>Weight</Text>
      <TextInput 
      style={styles.input}
      onChangeText={text => setWeight(text)}
      placeholder='in kilograms'
      keyboardType='numeric'></TextInput>
    </View>
    <View style={styles.field}>
      <Text>Bottles</Text>
      <Picker style={styles.bottle}
      onValueChange={(itemValue) => setBottle(itemValue)}
      selectedValue={bottle}
      >
        {bottles.map((bottle,index) => (
        <Picker.Item key={index} label={bottle.label} value={bottle.value}/>   
        ))
        }
      </Picker>
  </View>
  <View style={styles.field}>
      <Text>Time</Text>
      <Picker style={styles.time}
      onValueChange={(itemValue) => setTime(itemValue)}
      selectedValue={time}
      >
        {times.map((time,index) => (
        <Picker.Item key={index} label={time.label} value={time.value}/>   
        ))
        }
      </Picker>
  </View>

  <View style={styles.field}>
    <Text>Gender</Text>
    <RadioForm 
    style={styles.radio}
    buttonSize = {10}
    radio_props={genders}
    initial={0}
    onPress={(value) => {setGender(value)}}
    />
    <Text>Promilles {promille}</Text>
    </View>
    <Button onPress={calculate}title='calculate'></Button>
  </View>
  );

  function calculate() {
    let result = 0;

    const litres = (bottle * 0.33);
    const grams = ( litres * 8 * 4.5);
    const burning = (weight / 10);
    const lgrams = (grams - burning * time);
    if (gender === 'male') {
      result = (lgrams / (weight * 0.7));
    }
    else {result = (lgrams / (weight * 0.6));;
    }
    setPromille(result.toFixed(2));
  }

 
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,

  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft:10,
  },
  radio: {
    marginTop:10,
    marginBottom: 10,

  }
});
