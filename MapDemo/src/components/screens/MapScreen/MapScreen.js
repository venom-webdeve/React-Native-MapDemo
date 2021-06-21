import React, { useEffect, useState } from 'react';
import { SafeAreaView,StyleSheet,View,Button,Text } from 'react-native';
import MapView, {Marker ,PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = ({props,navigation}) =>{
  const [dataList,setDataList] = useState([]);

  useEffect(()=>{
    console.log('route data',props);
    getListOfCourses();
  },[])

 const getListOfCourses = () => {
    //console.log("id check only",this.props.route.params.course_id);
    fetch('http://irisinformatics.com/edcater/wb/modules',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
                'Content-Type': 'application/json',
             },
         body: JSON.stringify({
         course_id:4,// this.props.route.params.course_id,
         s_id:5//DataStore.s_id,
    }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status === '200') {
        console.log('response data',responseJson.data);
        //   this.setState({
        //    dataList:responseJson.data,
        //  })
        setDataList(responseJson.data);
       } else {
        //  this.setState({
        //    error_Message:responseJson.message,
        //  })
        //ToastAndroid.show(this.state.error_Message, ToastAndroid.SHORT);
       }
     })
     .catch((err) => {
       console.log({...err});
     });
  }

    return (
        <SafeAreaView style={styles.container}>
             <View style={{height:"45%"}} >
             <MapView
                    provider={PROVIDER_GOOGLE}
                   // mapType={Platform.OS == "android" ? "none" : "standard"}
                    style={{flex:1}}
                    //ref={ref => {this.map = ref;}}
                    minZoomLevel={4}  // default => 0
                    maxZoomLevel={10} // default => 20
                    enableZoomControl={true}
                    showsUserLocation = {true}
                    showsMyLocationButton = {true}
                    zoomEnabled = {true}
                    initialRegion={{
                      latitude: 42.882004,
                      longitude: 74.582748,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                     //mapStyle
                    }}
                    //  customMapStyle={mapStyle}
                    >
                <Marker coordinate={{latitude: 42.882004,longitude: 74.582748,}}
                  pinColor="#FBA51C"
                 >
                    {/* // <Image source={cycleIcon} style={{height: 40, width:40 ,tintColor:"#FBA51C"}} /> */}
                 </Marker>
                    </MapView>
                  <Button title="showRealApp" onPress={() => setShowRealApp(false)} />
                  <Text>heloo</Text>
             </View>
               
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

export default MapScreen;