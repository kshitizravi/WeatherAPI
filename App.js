import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, Dimensions,Image,ImageBackground,TouchableOpacity, TextInput } from 'react-native';

const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width

export default class App extends React.Component{
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri:"https://pngimage.net/wp-content/uploads/2018/05/app-background-png-1.png"}}
      style={styles.Image_Background_Style}>

        <View>
          <TextInput placeholder="Search"/>
        </View>

      </ImageBackground>
    </SafeAreaView>
   )   
  }
}

const styles = StyleSheet.create({
  container: {
    height:Dev_Height,
    width:Dev_Width
  },
  Image_Background_Style:{
    height:100,
    width:100
  }
})
