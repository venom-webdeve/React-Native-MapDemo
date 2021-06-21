/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginScreen from './src/components/screens/loginScreen/LoginScreen';
import MapScreen from './src/components/screens/MapScreen/MapScreen';
import SignUpScreen from './src/components/screens/signUpScreen/SignUpScreen';

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_mobile_recharge.png',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_discount.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_best_deals.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_bus_ticket_booking.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_train_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
];
const Stack = createStackNavigator();
const App = () => {
  const [showRealApp,setShowRealApp] = React.useState(false);
   const onDone = () => {
     setShowRealApp(true);
   }
   const onSkip = () => {
     setShowRealApp(true);
   }
  const renderItem = ({item}) => {
    return (
          <View style={{flex:1,
          backgroundColor:item.backgroundColor,
          alignItems:"center",
          justifyContent:"space-around",
          paddingBottom:100,
          }}>
          <Text style={styles.introTitleStyle}>
             {item.title}
          </Text>
          <Image source={item.image} style={styles.introImgStyle} />
          <Text style={styles.introTextStyle}>
            {item.text}
          </Text>
          </View>
    )
  }
  return (
    <>
     {showRealApp?(
      <NavigationContainer>
      <Stack.Navigator 
      headerMode="none"
      initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
      </NavigationContainer>
     ):(
<AppIntroSlider 
  data={slides}
  renderItem={renderItem}
  onDone={onDone}
  onSkip={onSkip}
  showSkipButton={true}
  bottomButton
 />
     )}
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
  introTitleStyle:{
      fontSize:25,
      textAlign:"center",
      color:"white",
      fontWeight:"bold",
      marginBottom:16,
  },
  introImgStyle:{
      height:200,
      width:200,
  },
  introTextStyle:{
      fontSize:18,
      textAlign:"center",
      color:"white",
      paddingVertical:30,
  },
});

export default App;
