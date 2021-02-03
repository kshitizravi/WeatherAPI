import React from 'react';
import { SafeAreaView,StyleSheet, Text, View, Dimensions,Image,ImageBackground,TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'


const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
        city:"Pune",
        data:[],
        icon:"",
        city_display:"",
        desc:"",
        main:"",
        humidity:"",
        pressure:"",
        Wind:""
      }
    this.fetch_weather()
  }
  fetch_weather=()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid=a8da961d4f3fb1faeee70599f53e9e82&units=Metric")
    .then((response)=> response.json())
    .then((json=>{
      this.setState({data:json})
      this.setState({temp : (json.main.temp).toFixed(2)+"°C"})
      this.setState({desc : json.weather[0].description})
      this.setState({city_display : json.name})
      this.setState({icon : json.weather[0].icon})
      this.setState({main : json.weather[0].main})
      this.setState({humidity : json.main.humidity+ "%"})
      this.setState({pressure : json.main.pressure+ " hPa"})
      this.setState({Wind : (json.wind.speed).toFixed(2)+ " Km"})
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
          onChangeText={(text)=>this.setState({city:text})}></TextInput>
          <TouchableOpacity style={styles.button} onPress={this.fetch_weather()}>
            <Icon name="search1" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.appboxmain}>
          <View style={styles.HolderView}>
            <Image source={{uri:"http://openweathermap.org/img/wn"+this.state.icon+"@2x.png"} } style={styles.Weather_Image} />
            <View>
              <Text style={styles.temp_text}>{this.state.temp}</Text>
              <Text style={styles.city_text}>{this.state.city_display}</Text>
            </View>
          </View>
        </View>
          <View style={styles.Info_Box}>
          <View style={styles.Info_Holder}>
            <Text style={styles.weather_text}>{this.state.main}</Text>
            <Text style={styles.desc_text}>{this.state.desc}</Text>
            <Text style={styles.humidity_text}>Humidity: {this.state.humidity}</Text>
            <Text style={styles.other_text}>Wind: {this.state.Wind}</Text>
            <Text style={styles.other_text}>Atmospheric Pressure: {this.state.pressure}</Text>
          </View> 
          </View>
        
        </ImageBackground>
    </SafeAreaView>
   )   
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  Image_Background_Style:{
    height:"100%",
    width:"100%",
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
    marginLeft:"5%",
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
    height: "50%",
    width: "50%"
  },
  temperature_text:{
    fontSize: 30,
    color:"#FFF",
    marginLeft: "5%"
  },
  city_text: {
    fontSize: 20,
    color:"#FFF" ,
    marginLeft:"5%",
    marginTop: "3%"
  },

  Info_Box:{
    height:"45%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },

  Info_Holder:{
    height:"80%",
    width:"90%",
    backgroundColor:"rgba(255,255,255,0.92)",
    borderRadius:15
  },

  weather_text:{
    fontSize:28,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"8%"
  },
  desc_text: {
    fontSize:20,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"5%"
  },
  humidity_text:{
    fontSize: 18,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"8%"
  },
  other_text:{
    fontSize:18,
    color:"#121212",
    marginLeft:"8%",
    marginTop:"2%"
  }

})
