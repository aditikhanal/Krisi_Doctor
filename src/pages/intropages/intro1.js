import React from 'react';
import { Platform, ImageBackground, TouchableOpacity, StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';

var deviceWidth = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen"
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { value: 0 },
    { value: 1 },
    { value: 2 }
];


const image = { uri: "https://image.winudf.com/v2/image1/Y29tLkdyZWVuU3ByaW5nTGl2ZVdhbGxwYXBlckhRX3NjcmVlbl8wXzE1NjcwMDA2NTJfMDg4/screen-0.jpg?fakeurl=1&type=.jpg" };
const image1 = { uri: "https://reusegrowenjoy.com/wp-content/uploads/Best-Apps-to-Help-You-Identify-Plants.jpg" };
const image2 = { uri: "https://api.pestnet.org/media_store/submissions/2018/7/3b8d37f9-3072-4e70-b646-bf5780139335/ec-1_13_291_large.jpg" };

export default class Intro1 extends React.Component {

   
    render() {
      return (
        <View style={styles.container}>
    
            <View style={styles.firstView}>
            <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}> WELCOME TO KRISI DOCTOR!!!!</Text>
              <Text style={styles.text1}> Android app that detects diseases of</Text>
  
              <Text style={styles.text2}>Plants</Text>
  
              <Text style={styles.text3}>Identify problems in your fields in a snap..</Text>
  
              <Text style={styles.text4}>(Classify 14 species of crops including: apple, blueberry, cherry, grape, orange, peach, pepper, potato, raspberry, soy, squash, strawberry and tomato.)</Text>
              <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => { this.setState({ value: value }) }}
                        buttonColor={'#efefef'}
                        disabled={true}
              
                        borderWidth={1}
                   
                        buttonInnerColor={'black'}
                        formHorizontal={true}
                        buttonSize={10}
                        style={{ alignSelf: 'center', marginTop: 150 }}
                    />
                     <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.skip}>
                            SKIP
                    </Text>
                    </TouchableOpacity>
            </ImageBackground>
            </View>
   </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      fontSize: 30,
      textAlign: "center",
      paddingTop:30,
      margin: 20,
      color: 'white',
      fontWeight: "bold"
    },
    text: {
      fontSize:32,
      textAlign: "center",
      paddingTop:30,
      margin: 20,
      color: 'black',
      fontWeight: "bold"
    },
    text1: {
      fontSize:25,
      paddingTop: 55,
      paddingLeft:18,
      paddingRight:124,
      paddingBottom:0,
      fontWeight: "bold",
      color: "black",
      alignItems: "center", 
    },
    text2: {
      fontSize:65,
      paddingLeft:28,
      paddingRight:140,
      fontWeight: "bold",
      color: "black",
      fontStyle:"italic",
      textDecorationLine: 'underline',
    },
    text3: {
      fontSize:20,
      paddingTop:0,
      paddingLeft:20,
      paddingRight:110,
      color: "black",
      margin:5,
    },
    text4: {
      fontSize:12,
      paddingTop:0,
      paddingLeft:20,
      paddingRight:110,
      color: "black",
      margin:5,
    },
    
    firstView: {
      flex:1,
      width: deviceWidth,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    secondView: {
      width: deviceWidth,
      justifyContent: 'center',
      alignItems: 'center',
    },
    thirdView: {
      width: deviceWidth,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      width: wp("100%"),
    },
    image1: {
      flex: 1,
      resizeMode: "cover",
      width: 362,
    },
    image2: {
      flex: 1,
      resizeMode: "cover",
      width: 362,
    },
    skip: {
        color: "black",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: "ProximaNova-Semibold",
        marginTop: 25,
        textDecorationLine: 'underline',
    }
  
  });
