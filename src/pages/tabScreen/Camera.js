import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Tflite from 'tflite-react-native';

import ImagePicker from 'react-native-image-picker';
import Colors from "../../constants/colors.js"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from "react-native-responsive-screen"

let tflite = new Tflite();

const height = 200;
const width = 350;
const blue = "#25d5fd";
const mobile = "MobileNet";
const ssd = "SSD MobileNet";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      source: null,
      imageHeight: height,
      imageWidth: width,
      recognitions: [],
      disease: null
    };
  }

  onSelectModel() {
    this.setState("MobileNet");
    switch (model) {


      default:
        var modelFile = 'models/plant_disease.tflite';
        var labelsFile = 'models/plant_labels.txt';
    }
    tflite.loadModel({
      model: modelFile,
      labels: labelsFile,
    },
      (err, res) => {
        if (err)
          console.log(err);
        else
          console.log(res);
      });
  }

  onSelectImage(model) {

    this.setState({ model });




    var modelFile = 'models/plant_disease.tflite';
    var labelsFile = 'models/plant_labels.txt';

    tflite.loadModel({
      model: modelFile,
      labels: labelsFile,
    },
      (err, res) => {
        if (err)
          console.log(err);
        else
          console.log(res);
      });
    const options = {

    };





    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        var path = Platform.OS === 'ios' ? response.uri : 'file://' + response.path;
        var w = response.width;
        var h = response.height;
        this.setState({
          source: { uri: path },
          imageHeight: h * width / w,
          imageWidth: width
        });

        tflite.runModelOnImage({
          path,
          imageMean: 128.0,
          imageStd: 128.0,
          numResults: 1,
          threshold: 0.05
        },
          (err, res) => {
            if (err)
              console.log(err);
            else
              this.setState({ recognitions: res });

          });

      }
    });
  }

  titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

  healthyClasses(str) {

    if (str.search("healthy") != -1) {
      return false

    }
    else {
      return true
    }

  }
  cornTest(str) {
    if (str.search("corn maize common rust") != -1) {
      return true

    }
    else {
      return false
    }

  }
  renderResults() {
    const { model, recognitions, imageHeight, imageWidth } = this.state;
    switch (model) {
      case ssd:


      default:
        return recognitions.map((res, id) => {
          return (
            <View>
              {this.cornTest(res["label"]) && (res["confidence"]) <= 0.9 ?
                <Text style={{ fontSize: 14, fontWeight: "600", marginTop: 20 }}>माफ गर्नुहोस्, हामी यो बाली पहिचान गर्न सक्दैनौं।</Text>
                :
                <View>

                  {(res["confidence"]) >= 0.5 ?
                    <View>
                      <Text key={id} style={{ fontSize: 20, fontWeight: "700", marginTop: 10, color: Colors.darkGreen, alignSelf: "center" }}>

                        {this.titleCase(res["label"]) + "-" + (res["confidence"] * 100).toFixed(0) + "%"}


                      </Text>
                      {this.healthyClasses(res["label"]) ?
                        <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate("Details", { disease: res["label"] })}>
                          <Text style={styles.buttonText}>थप विवरण हेर्नुहोस्</Text>
                        </TouchableOpacity>
                        : <Text style={{ marginTop: 10, fontSize: 17, fontWeight: "800", color: "black", alignSelf: "center" }}> तपाईंको बालीमा कुनै प्रकारको रोग छैन।</Text>}
                    </View>
                    : <Text style={{ fontSize: 14, fontWeight: "600", marginTop: 20 }}>माफ गर्नुहोस्, हामी यो बाली पहिचान गर्न सक्दैनौं।</Text>

                  }
                </View>
              }
            </View>
          )

        });
    }
  }

  render() {
    const { model, source, imageHeight, imageWidth } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={{ backgroundColor: Colors.tab, marginTop: 30, width: wp("90%"), marginLeft: wp("5%"), borderRadius: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../images/picture.png")} style={{ width: wp("13%"), height: 60, marginTop: 20, marginLeft: wp("25%") }}></Image>
            <Image source={require("../../images/arrow.png")} style={{ width: 50, height: 50, marginTop: 20, marginLeft: 20 }}></Image>
            <Image source={require("../../images/details.png")} style={{ width: 40, height: 50, marginTop: 20, marginLeft: 20 }}></Image>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 45, marginBottom: 20 }}>पातको चित्र चयन गर्नुहोस्</Text>
            <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 40 }}>विवरण हेर्नुहोस्</Text>
          </View>
        </View>
        {
          source ?
            <TouchableOpacity style={
              [styles.imageContainer, {




              }]} onPress={this.onSelectImage.bind(this)}>

              <Image source={source} style={{
                height: 350, width: 350, marginTop: 40
              }} resizeMode="contain" />
            </TouchableOpacity> :
            <TouchableOpacity onPress={this.onSelectImage.bind(this)} style={styles.button} >
              <Text style={styles.buttonText}>चित्र चयन गर्नुहोस्</Text>
            </TouchableOpacity>
        }
        <View style={styles.boxes}>
          {this.renderResults()}
        </View>


        <View>


        </View>
        {/* {source?
        
         
  } */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: Colors.lightGreen
  },
  imageContainer: {
    borderColor: blue,
    borderRadius: 5,
    alignItems: "center"
  },
  text: {
    color: blue
  },
  button: {
    width: 200,
    backgroundColor: Colors.tab,
    borderRadius: 10,
    height: 40,
    alignSelf: 'center',
    alignItems: "center",
    marginTop: 200,
    justifyContent: 'center',
    marginBottom: 10
  },
  button2: {
    width: 200,
    backgroundColor: Colors.tab,
    borderRadius: 10,
    height: 40,
    alignSelf: 'center',
    alignItems: "center",
    marginTop: 20,
    justifyContent: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  box: {
    position: 'absolute',
    borderColor: blue,
    borderWidth: 2,
  },
  boxes: {
    alignSelf: "center"
  }
});
