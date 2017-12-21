import React,{Component} from 'react'
import {View,Text, Image} from  'react-native'

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            done:false,
        }
    }
    timer(){
        setTimeout(()=>{
            this.setState({
                done:true,
            });
        },3000)
    }
    componentDidMount(){
        this.timer();
}
    render(){
        return(
            this.state.done ? 
            ({...this.props.children}) :
            (
                <View style={{ flex: 1 }}>
                   <Image style={{ flex: 1 }} source={require('../src/h1.jpg')}/>
                </View>
            )
        );
    }

}