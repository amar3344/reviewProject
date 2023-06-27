import { Text, TouchableOpacity, View,StyleSheet,TextInput } from 'react-native'
import React, { Component } from 'react'

interface IProps{
  navigation:{
    navigate:(arg:string) => void
  }
}

interface IState{
  usernameInput:string,
  passwordInput:string,
}

export class Login extends Component<IProps,IState> {

  state:IState = {usernameInput:'',passwordInput:''}

  handleLoginPage=()=>{
    this.props.navigation.navigate("Home")
  }

  getUserName=(name:string)=>{
    this.setState({usernameInput:name})
  }

  getInputPassword=(password:string)=>{
    this.setState({passwordInput:password})
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.loginContainer}>
          <Text style={styles.adminText}>Admin</Text>
          <View style={styles.formCont}>
            <View>
              <Text style={styles.userNameText}>Username</Text>
              <TextInput inputMode='email' style={styles.usernameInput} placeholder='UserName' placeholderTextColor={'grey'} onChangeText={(name)=>this.getUserName(name)}/>
            </View>
            <View>
              <Text style={styles.userNameText}>Password</Text>
              <TextInput inputMode='text' style={styles.usernameInput} placeholder='Password' placeholderTextColor={'grey'} onChangeText={(password)=>this.getInputPassword(password)}/>
            </View>
          </View>
            <TouchableOpacity onPress={this.handleLoginPage} style={styles.btnCont}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Login

const styles = StyleSheet.create({

  loginContainer:{
    borderWidth:2,
    borderColor:'#000',
    gap:10,
    padding:20,
    borderRadius:20,
  },

  adminText:{
    fontSize:18,
    fontFamily:"Roboto",
    color:"#000",
    fontStyle:"normal",
    fontWeight:'800',
    textAlign:'center',
  },

  userNameText:{
    fontSize:18,
    fontFamily:"Roboto",
    color:"#000",
    fontStyle:"normal",
    fontWeight:'500',
  },

  formCont:{
    width:300,
    textAlign:'center',
    gap:10,
  },

  usernameInput:{
    borderWidth:1,
    borderColor:'#000',
    borderRadius:10,
    color:"#000"
  },

  btnCont:{
    backgroundColor:'blue',
    padding:10,
    borderRadius:5,
    marginTop:30,
  },

  loginText:{
    fontSize:18,
    fontWeight:'600',
    fontStyle:'normal',
    color:'#fff',
    fontFamily:'Roboto',
    textAlign:'center',
  },

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
})