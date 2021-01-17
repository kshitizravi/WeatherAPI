import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, Dimensions,Image,ImageBackground,TouchableOpacity, TextInput } from 'react-native';

import Icon from "react-native-vector-icons/ant"

const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
        city:""
    }
  }

  render(){
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri:"https://pngimage.net/wp-content/uploads/2018/05/app-background-png-1.png"}}
      style={styles.Image_Background_Style}>
      
        <View style={styles.searchboxview}>
          <TextInput 
          placeholder="Search" 
          placeholderTextColor="#FFF" 
          styles={styles.searchbox} 
          onChangeText={(text)=>this.setState({city:text})}/>
          <TouchableOpacity>
            <Icon name="search1" size={24} color="#FFF" />
          </TouchableOpacity>
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
  },
  searchbox:{
    height:"35%",
    width:"80%",
    borderColor:"#FFF",
    borderWidth:1,
    borderRadius:15,
    color:"#FFF",
    paddingHorizontal:15

  },
  searchboxview:{
    height:"20%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  }
})
