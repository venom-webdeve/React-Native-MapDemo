import React,{useState,useEffect} from 'react';
import { View,SafeAreaView,ToastAndroid,
TouchableOpacity,Text,StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({navigation}) => {
const [userName,setUserName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [cfmPassword,setCfmPassword] = useState('');
const [error,setError] = useState('');

const saveSignUPData = async () =>{
    if (userName) {
        try {
            await AsyncStorage.setItem('userName',userName)
            setUserName('')
            //alert('data save');
        } catch (error) {
            console.log('error show',error)
        }
    }
    if (email) {
        try {
            await AsyncStorage.setItem('userEmail',email)
        } catch (error) {
            console.log('error show',error)
        }
    }
    if (password) {
        try {
            await AsyncStorage.setItem('userPassword',password)
        } catch (error) {
            console.log('error show',error)
        }
    }
    if (cfmPassword) {
        try {
            await AsyncStorage.setItem('userCfMPassword',cfmPassword)
        } catch (error) {
            console.log('error show',error)
        }
    }
    navigation.navigate('LoginScreen');

}
const validateSignUpBtn = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (userName.length == 0) {
        setError('userName')
        ToastAndroid.show('Username cannot be Empty', ToastAndroid.SHORT);
        return
    }
      if (email.length == 0) {
          setError('email');
          ToastAndroid.show('Email cannot be Empty', ToastAndroid.SHORT);
          return
      }
      if (!regex.test(email.trim())) {
         setError('email')
          ToastAndroid.show('Email not valid', ToastAndroid.SHORT);
          return
      }
      if (password.length == 0) {
          setError('password');
          ToastAndroid.show('Password cannot be Empty', ToastAndroid.SHORT);
          return
      }
      // if (password.length < 6) {
      //     this.setState({ error: "password" })
      //     ToastAndroid.show('Password must be more then 6 words', ToastAndroid.SHORT);
      //     return
      // }
      if (cfmPassword.length == 0) {
        setError('confirm password');
        ToastAndroid.show('Confirm Password cannot be Empty.', ToastAndroid.SHORT);
        return
    }
    if (cfmPassword !== password) {
        setError('both');
        ToastAndroid.show('Password & Confirm Password does not match.', ToastAndroid.SHORT);
        return
    }
      setError('');
      // Actions.push("Login")
     // this.updateLogin()
     saveSignUPData()
      
}

    return (
        <SafeAreaView style={styles.container}>
              <Text style={styles.headingTitle}>Sign Up</Text>
              
              <TextInput 
              //autoCapitalize="none"
              placeholder={'User Name'}
              placeholderTextColor="#aaa"
              keyboardType="default"
              style={[styles.inputStyle,{borderColor:error == 'userName'? "#800" : "transparent",borderWidth:0.5}]}
              onChangeText={(text) => setUserName(text)}
              returnKeyType={'next'}
            //   ref={(input) => { userName = input }}
            //   onSubmitEditing={(event) => { email.focus() }}
              
               />
              <TextInput 
              autoCapitalize="none"
              placeholder={'Email'}
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              style={[styles.inputStyle,{borderColor:error == 'email'? "#800" : "transparent",borderWidth:1}]}
              onChangeText={(text)=> setEmail(text)}
              returnKeyType={'next'}
            //   ref={(input) => { email = input }}
            //   onSubmitEditing={(event) => { password.focus() }}
               />
               <TextInput 
              //autoCapitalize="none"
              placeholder={'Password'}
              placeholderTextColor="#aaa"
              style={styles.inputStyle}
              onChangeText={(text)=> setPassword(text)}
              returnKeyType={'next'}
              secureTextEntry
            //   ref={(input) => { password = input }}
            //   onSubmitEditing={(event) => { cfmPassword.focus() }}
               />
                 <TextInput 
              //autoCapitalize="none"
              placeholder={'Confirm Password'}
              placeholderTextColor="#aaa"
              style={styles.inputStyle}
              onChangeText={(text)=> setCfmPassword(text)}
              secureTextEntry
               />
               <TouchableOpacity 
               onPress={validateSignUpBtn}
               style={styles.signUpBtnStyle}>
                   <Text style={styles.signUpTxt}>Sign Up</Text>
               </TouchableOpacity>
               <View style={styles.linkStyle}>
               <TouchableOpacity style={[styles.socialStyle,]}>
                     <Text style={{fontSize:20,fontWeight:"bold",color:"#3b5998"}}>F</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.socialStyle}>
                     <Text style={{fontSize:20,fontWeight:"bold",color:"#4285F4"}}>G</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.socialStyle}>
                     <Text style={{fontSize:20,fontWeight:"bold",color:"#1C1C1E"}}>A</Text>
                 </TouchableOpacity>
               </View>
       </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#689898"
    },
    headingTitle:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:30,
        color:"#ffff"
    },
    inputStyle:{
       height:55,
       paddingLeft:20,
       marginTop:20,
       fontSize:18,
       width:"80%",
       borderRadius:10,
       backgroundColor:"#FFFFFF",
       shadowColor:"#000",
       justifyContent:"center",
       alignItems:"center",
       shadowOpacity: 0.5,
       shadowOffset: { 
         height: 10, 
         width: 0 
       },
       shadowRadius: 15,
    },
    signUpBtnStyle:{
        height:55,
        marginTop:20,
        width:"80%",
        borderRadius:10,
        backgroundColor:"#2AC062",
        shadowColor:"#2AC062",
        justifyContent:"center",
        alignItems:"center",
        shadowOpacity: 0.5,
        shadowOffset: { 
          height: 10, 
          width: 0 
        },
        shadowRadius: 15,
    },
    signUpTxt:{
        fontSize:18,
        fontWeight:"bold",
        color:"#ffff",
        textAlign:"center",
    },
    linkStyle:{
        width:"80%",
        justifyContent:"space-around",
        flexDirection:"row",
        marginTop:60,
        alignItems:"center",
    },
    socialStyle:{
        height:45,
        width:50,
        borderRadius:10,
        backgroundColor:"#FFFFFF",
        shadowColor:"#000",
        justifyContent:"center",
        alignItems:"center",
        shadowOpacity: 0.3,
        shadowOffset: { 
          height: 10, 
          width: 0 
        },
        shadowRadius: 15,

    }
})

export default SignUpScreen;