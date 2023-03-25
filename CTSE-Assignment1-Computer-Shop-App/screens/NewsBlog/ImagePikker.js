import { View, Text, Button, Image } from 'react-native'
import React, { useEffect, useState }  from 'react'
import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';
const ImagePikker = () => {
    const [hasGalleryPermission, setGallryPermission] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(()=>{
        (async()=>{
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setGallryPermission(galleryStatus.status === 'granted')
        })();
    },[]);

    const pickImage = async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,
        });
        console.log(result);
        // methana aru dala thiyenne if (!result.cancelled) double L
        if (!result.canceled){
            setImage(result.uri);
        }
    };

    const SubmitPost =async()=>{
        const uplordUri= image;
        let filename = uplordUri.substring(uplordUri.lastIndexOf('/') + 1);
        console.log("hi hi 22")
         try {
            await storage().ref(filename).putFile(uplordUri);
         }catch(e){
            console.log(e);
         }
    }

    if (hasGalleryPermission===false){
        return <Text>No Access To Internal Storage</Text>
    }

  return (
    <View style = {{flex:1, justifyContent:'center'}}>
      <Button title='Pick Image' onPress={()=>pickImage()} style ={{marginTop:30}}
      
      ></Button>
      {image && <Image source={{uri:image}} style={{flex:1/2}}/>}
      <Button title='submit' onPress={()=>SubmitPost()} 
    //   style ={{marginTop:30}}
      
      ></Button>
    </View>
  )
}

export default ImagePikker