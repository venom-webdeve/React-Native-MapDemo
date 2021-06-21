import React, { useState } from 'react';
import { View,SafeAreaView,TouchableOpacity,ActivityIndicator,ToastAndroid,Text,StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation})=> {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    // const userEmail = 'pankaj12@gmail.com';
    // const userPassword = 'pankaj123456';
    const [isLoading,setIsloading] = useState(false);
    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword] = useState('');

    const logInBtn = () => {
        if(userEmail == email && userPassword == password){
            navigation.navigate('MapScreen');
            // setEmail('')
            // setPassword('')
        }else{
            console.log("error in login");
        }
    }
    const getData = async () => {
        try {
            await AsyncStorage.getItem('userEmail').then((res) => {
                setUserEmail(res);
               // alert('data get',value);
                console.log('userEmail',res);
            });
            await AsyncStorage.getItem('userPassword').then((res)=>{
                setUserPassword(res);
                console.log('paswword',res);
            });
        } catch (err) {
            console.log('errror',err);
        }
    }

    const validateLogInBtn = () => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //   if (userName.length == 0) {
        //     setError('userName')
        //     ToastAndroid.show('Username cannot be Empty', ToastAndroid.SHORT);
        //     return
        // }
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
        //   if (cfmPassword.length == 0) {
        //     setError('confirm password');
        //     ToastAndroid.show('Confirm Password cannot be Empty.', ToastAndroid.SHORT);
        //     return
        // }
        // if (cfmPassword !== password) {
        //     setError('both');
        //     ToastAndroid.show('Password & Confirm Password does not match.', ToastAndroid.SHORT);
        //     return
        // }
          setError('');
        //   setEmail('');
        //   setPassword('');
          // Actions.push("Login")
         // this.updateLogin()
         getData();
         setIsloading(true);
         setTimeout(() => {
            logInBtn();
            setIsloading(false);
         }, 8000);
    }
    const clearStorgeData = () => {
        AsyncStorage.clear();
        console.log('data clear');
    }
    return (
       <SafeAreaView style={styles.container}>
              <Text style={styles.headingTitle}>LogIn</Text>
              <TextInput 
              autoCapitalize="none"
              placeholder={'Email'}
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              style={styles.inputStyle}
              onChangeText={(text)=> setEmail(text)}
               />
               <TextInput 
              autoCapitalize="none"
              placeholder={'Password'}
              placeholderTextColor="#aaa"
              style={styles.inputStyle}
              secureTextEntry
              onChangeText={(text)=> setPassword(text)}
               />
               <TouchableOpacity 
               onPress={validateLogInBtn}
               style={styles.loginBtnStyle}>
                {isLoading == true?
                <ActivityIndicator
                size="large"
                color="#FFFFFF"
                style={styles.activityStyle}
                />
                :
                <Text style={styles.loginTxt}>Login</Text>
               }
                   
               </TouchableOpacity>
              
               {/* <TouchableOpacity 
               onPress={getData}
               style={styles.loginBtnStyle}>
                   <Text style={styles.loginTxt}>show Data</Text>
               </TouchableOpacity> */}
               <View style={styles.linkStyle}>
                 <Text style={{fontSize:15,fontWeight:"300",color:"#ffff"}}>Don't have a account?</Text>
                 <TouchableOpacity 
                 onPress={() =>{clearStorgeData,navigation.navigate('SignUpScreen')} }
                  >
                     <Text style={{fontSize:18,fontWeight:"bold",color:"#ffff"}}>Sign Up</Text>
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
    loginBtnStyle:{
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
    loginTxt:{
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
    activityStyle:{
        justifyContent: 'center',
        textAlign: 'center',
        alignItems:"center",
        alignSelf:"center",
        //paddingTop: 30,
        //position:"absolute",
    },
    
})

export default LoginScreen;