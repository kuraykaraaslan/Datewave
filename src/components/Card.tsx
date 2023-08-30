import React, { useEffect, useState } from 'react';
import { Text, View, PanResponder, Dimensions } from 'react-native';

const Card = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [likedBoxOpacity, setLikedBoxOpacity] = useState(0);
  const [dislikedBoxOpacity, setDislikedBoxOpacity] = useState(0);
  const [superLikedBoxOpacity, setSuperLikedBoxOpacity] = useState(0);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const cardSize = () => {
    const x = screenWidth - 40;
    const y = screenHeight - 200;
    return { x, y };
  };



  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      // Called when responder grant is released
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > 100) {
          console.log('Liked');
        }   else if (gestureState.dx < -100) {
          console.log('Disliked');
        } else if (-30 < gestureState.dx && gestureState.dx < 30 && gestureState.dy < -100) {
          console.log('SuperLiked');
        } else {
          console.log('Nothing');
        }


        setLikedBoxOpacity(0);
        setDislikedBoxOpacity(0);
        setSuperLikedBoxOpacity(0);
        setPosition({ x: 0, y: 0 });
        setRotation(0);
        

      },

      // Called when responder is moved
      onPanResponderMove: (e, gestureState) => {
        console.log(gestureState.dx, gestureState.dy);
        setPosition({ x: gestureState.dx, y: gestureState.dy });
        if (gestureState.dx > 50) {
          setLikedBoxOpacity(Math.abs(gestureState.dx / 30));
          setDislikedBoxOpacity(0);     
          setSuperLikedBoxOpacity(0);  

          if (gestureState.dx > 100) {
            console.log('Liked');  
          } 
          

        } else if (gestureState.dx < -50) {
          setLikedBoxOpacity(0);
          setSuperLikedBoxOpacity(0);
          setDislikedBoxOpacity(Math.abs(gestureState.dy / 30));

          if (gestureState.dx < -100) {
            console.log('Disliked');
          } 

        }  else  if (-30 < gestureState.dx && gestureState.dx < 30 && gestureState.dy < -20) {
          setLikedBoxOpacity(0);
          setDislikedBoxOpacity(0);
          setSuperLikedBoxOpacity(Math.abs(gestureState.dx / 5));

          if (-30 < gestureState.dx && gestureState.dx < 30 && gestureState.dy < -100) {
            console.log('SuperLiked');
          } 

        } else {
          setLikedBoxOpacity(0);
          setDislikedBoxOpacity(0);
          setSuperLikedBoxOpacity(0);
        }

        if (gestureState.dx > 0) {
          setRotation(-gestureState.dx / 10);
        } else {
          setRotation(-gestureState.dx / 10);
        }

      },
    }),
  ).current;



  const style = {
    Card: {
      width: cardSize().x,
      height: cardSize().y,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 0,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 10,
      zIndex: 100,
      alignItems: 'center',
      transform: [
        { translateX: position.x }, 
        { translateY: position.y },
        { rotate: rotation + 'deg' }],
    },
    CardHeader: {
      width: cardSize().x,
      height: 150,
      backgroundColor: 'grey',
    },
    CardBody: {
      width: cardSize().x,
      height: cardSize().y - 150,
    },
    CardTitleName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      padding: 10,
    },
    CardTitleAge: {
      fontSize: 18,
      fontWeight: 'light',
      color: 'white',
      padding: 10,
    },
    LikedBox: {
      position: 'absolute',
      top: 30,
      left: 30,
      borderColor: 'green',
      borderStyle: 'dashed',
      paddingX: 10,
      borderWidth: 1,
      opacity: likedBoxOpacity,
      transform: [{ rotate: '-15deg' }],
    },
    LikedText: {
      fontSize: 40,
      fontWeight: 'light',
      color: 'green',
    },
    DislikedBox: {
      position: 'absolute',
      top: 30,
      right: 30,
      borderColor: 'red',
      borderStyle: 'dashed',
      paddingX: 10,
      borderWidth: 1,
      opacity: dislikedBoxOpacity,
      transform: [{ rotate: '15deg' }],
    },
    DislikedText: {
      fontSize: 40,
      fontWeight: 'light',
      color: 'red',
    },
    SuperLikedBox: {
      position: 'absolute',
      top: 30,
      left: (cardSize().x  / 2) - 80,
      borderColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'dashed',
      paddingX: 10,
      borderWidth: 1,
      opacity: superLikedBoxOpacity,
    },
    SuperLikedText: {
      fontSize: 40,
      fontWeight: 'light',
      color: 'blue',
    },


  };



  return (
    <View
      style={style.Card} // Attach the panResponder handlers
     {...panResponder.panHandlers}> 

      <View style={style.CardBody}></View>
      <View style={style.LikedBox}><Text style={style.LikedText}>Like</Text></View>
      <View style={style.DislikedBox}><Text style={style.DislikedText}>Dislike</Text></View>
      <View style={style.SuperLikedBox}><Text style={style.SuperLikedText}>Superlike</Text></View>
      <View style={style.CardHeader}>
        <Text style={style.CardTitleName}>Kuray Karaaslan<Text style={style.CardTitleAge}>, 24</Text></Text>
      </View>
    </View>
  );
};

export default Card;
