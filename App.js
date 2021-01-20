import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, Dimensions,Image,ImageBackground,TouchableOpacity, TextInput } from 'react-native';

import Icon from "react-native-vector-icons/ant"

const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
        city:"",
        data:[],
        icon:"",
        city_display:"",
        desc:"",
        main:"",
        humidity:"",
        pressure:"",
        visibility:""
      }
  }
  fetch_weather=()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=a8da961d4f3fb1faeee70599f53e9e82")
    .then((responce)=> responce.json())
    .then((json=>{
      this.setState({data:json})
      this.setState({ temp : (json.main.temp-303.58).toFixed(2)+" c"})
      this.setState({city_display : json.name})
      this.setState({icon : json.weather[0].icon})
      this.setState({main : json.weather[0].main})
      this.setState({humidity : json.main.humidity+ "%"})
      this.setState({pressure : json.main.pressure+ "hPa"})
      this.setState({visibility : (json.main.visibility/1000).toFixed(2)+ "Km"})
    })).catch((error)=> console.error(error))
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
          <TouchableOpacity style={styles.button}>
            <Icon name="search1" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.appboxmain}>
          <View style={styles.HolderView}>
            <Image source={{uri:"http://openweathermap.org/img/wn"+this.state.icon+"@2x.png"}} style={styles.Weather_Image}/>
          </View>
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
  },
  button:{
    marginLeft:"%5",
    height:"35%",
    width:"8%",
    justifyContent:"center",
    alignItems:"center"
  },
  appboxmain:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  HolderView:{
    height:"80%",
    width:"90%",
    backgroundColor:"rgba(255,255,255,0.3)",
    borderRadius:15,
    alignItems:"center",
    flexDirection:"row"
  },
  Weather_Image:{
    height: "80%",
    width: "50%"
  }
})
