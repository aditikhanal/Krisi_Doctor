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
import Colors from "../../constants/colors"

var radio_props = [
    { value: 0 },
    { value: 1 },
    { value: 2 }
];




export default class Intro2 extends React.Component {

    nextscreen=(value1)=>{
      
        if(value1===0)
        {
            this.props.navigation.navigate('Intro1')
    
        }
        else if(value1==2)
        {
            this.props.navigation.navigate('Intro3')
            
        }
    
    }

    render() {
      return (
        <View style={styles.container}>
    
            <View style={styles.firstView}>
            <Image source={require("../../images/intro2.png")} style={{width:300,height:400,marginTop:0}}>
              </Image>
            <Text style={styles.headerText}>तस्वीरको नजिकबाट दृश्य लिन नबिर्सिनुहोला!!</Text>
            <RadioForm
                        radio_props={radio_props}
                        initial={1}
                        onPress={(value1) => { this.setState({ value1: value1 }) }}
                        buttonColor={'#efefef'}
                        disabled={true}
                        // backgroundColor={'green'}
                        // labelHorizontal={true}
                        // buttonInnerColor={'blue'}
                        borderWidth={1}
                        // onPress={{}}
                        buttonInnerColor={'black'}
                        formHorizontal={true}
                        buttonSize={10}
                        style={{ alignSelf: 'center', marginTop: 20 }}
                    />
                     <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.skip}>
                        छोड्नुहोस्
                    </Text>
                    </TouchableOpacity>
           
           
            </View>
   </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
     // flex: 1,
      backgroundColor:Colors.lightGreen,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      fontSize: 30,
      //textAlign: "center",
      paddingTop:30,
      margin: 20,
      color: 'black',
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
     // flex:1,
      width: deviceWidth,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    image: {
      //flex: 1,
     // resizeMode: "cover",
     // width: wp("100%"),
    },
    image1: {
     // flex: 1,
      //resizeMode: "cover",
     // width: 362,
    },
    image2: {
      //flex: 1,
     // resizeMode: "cover",
     // width: 362,
    },
    skip: {
        color: "black",
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20,
        textDecorationLine: 'underline',
    }
  
  });
