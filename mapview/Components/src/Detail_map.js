import React,{Component} from 'react'
import {View,Text, Image,StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import call from 'react-native-phone-call'
import Communications from 'react-native-communications'
var numberPhone = '000';


export default class Detail_Map extends Component{
    CallMe(number){
        numberPhone = number;
        const args = {
            number:numberPhone,
            prompt:true,
        }
       call(args).catch(console.error);
    }
   render(){
    const {params} = this.props.navigation.state;
       return (
           <View style={styles.container}>
               <View style={styles.bg_image}>
                 <Image source={params.m_image} style={styles.image}/>
               </View>
               <View style={styles.bg_gongcha}>
                        <Image style={styles.image_gongcha} source={require('../src/icon/logo.png')}/>
                        <View style={{backgroundColor:'gray',height:0.05,width:300,alignItems:'center'}}></View>
                </View>
               <View style={styles.bg_information}>
                    <View style={styles.icon}>
                        <Image source={require('../src/icon/location_i.png')} style={styles.m_icon}/>
                        <Image source={require('../src/icon/phone.png')} style={styles.m_icon}/>
                        <Image source={require('../src/icon/time.png')} style={styles.m_icon}/>
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.m_text_address}>{params.m_address}</Text>
                        <Text style={styles.m_text_phone}>{params.m_phone}</Text>
                        <Text style={styles.m_text_time}>{params.m_time}</Text>
                    </View>
                    <Image style={{position:'absolute',height:150,width:100,right:20,bottom:5}} source={require('../src/icon/gongcha7.png')}/>
               </View>
               <TouchableOpacity style={styles.btn_lienhe} onPress={()=>{this.CallMe(params.m_phone)}}>
                     <Image  source={require('../src/icon/paper.png')}/>
               </TouchableOpacity>
              
           </View>
       );
   }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bg_image:{
        flex:0.5,
        backgroundColor:'white',
    },
    image:{
        resizeMode:'cover',
        height:350,
        width:Dimensions.get('window').width,
    },
    bg_gongcha:{
        flex:0.1,
        justifyContent:'center',
        backgroundColor:'white',
        paddingLeft:25,
        
    },
    image_gongcha:{
        height:50,
        width:200,
        resizeMode:'cover',
    },
    bg_information:{
        flex:0.4,
        flexDirection:'row',
        backgroundColor:'white',
    },
    icon:{
        flex:0.2,
        backgroundColor:'white',
        alignItems:'center',
    },
    m_icon:{
       margin:10,
    },

    information:{
        flex:0.8,
        backgroundColor:'white',
    },
    m_text_address:{
        color:'black',
        margin:10,
        fontSize:14,
    },
    m_text_phone:{
        color:'black',
        margin:10,
        marginTop:12,
        fontSize:14,
    },
    m_text_time:{
        color:'black',
        margin:10,
        marginTop:25,
        fontSize:14,
    },
    btn_lienhe:{
        height:80,
        width:80,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:250,
        left: Dimensions.get('window').width - 80,
        zIndex: 100,
    },
});