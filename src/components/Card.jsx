import React, { useEffect, useState, createRef, useRef} from 'react';
import { Text, View, PanResponder, Dimensions, ImageBackground, Image, Pressable, StyleSheet } from 'react-native';

// Image Data
interface ImageData {
  id: number,
  url: string
}

// User Data
interface UserData {
  name: string,
  age: number,
  location: string,
  description: string,
  images: Array<ImageData>,
  imagesIndex: number
}

// Card States
interface CardState {
  stackPosition: string
}


// CardProps
interface CardProps {
  props: {
    userData: UserData,
    cardState: CardState
  }
}


const Card = ({ props }: CardProps) => {

  // user data from props
  const userData = props.userData;
  // card states from props
  const cardState = props?.cardState;

  // phisical card states
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [likedBoxOpacity, setLikedBoxOpacity] = useState(0);
  const [dislikedBoxOpacity, setDislikedBoxOpacity] = useState(0);
  const [superLikedBoxOpacity, setSuperLikedBoxOpacity] = useState(0);

  // stack position states
  const [stackPosition, setStackPosition] = useState(cardState?.stackPosition ? cardState?.stackPosition : 'top');

  // user data states
  const [userName, setUserName] = useState(userData.name);
  const [userAge, setUserAge] = useState(userData.age);
  const [userLocation, setUserLocation] = useState(userData.location);
  const [userDescription, setUserDescription] = useState(userData.description);
  const [userImages, setUserImages] = useState(userData.images);
  let [userImagesIndex, setUserImagesIndex] = useState(userData.imagesIndex);

  // Image States
  const [activeImage, setActiveImage] = useState({
    uri: userImages[userImagesIndex].url
  });

  // Screen States
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  const [cardWidth, setCardWidth] = useState(screenWidth - 40);
  const [cardHeight, setCardHeight] = useState(screenHeight - 200);

  // reset card position
  const resetPosition = () => {
    setLikedBoxOpacity(0);
    setDislikedBoxOpacity(0);
    setSuperLikedBoxOpacity(0);
    setPosition({ x: 0, y: 0 });
    setRotation(0);
  };

  // PanResponder
  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      // Called when responder grant is released
      onPanResponderRelease: (e, gestureState) => {
        let moving = false;
        if (gestureState.dx > 100) {
          moving = true;
          console.log('Liked');
        } else if (gestureState.dx < -100) {
          moving = true;
          console.log('Disliked');
        } else if (-30 < gestureState.dx && gestureState.dx < 30 && gestureState.dy < -100) {
          moving = true;
          console.log('SuperLiked');
        } else if (gestureState.dx == 0 && gestureState.dy == 0) {
          if (moving == false) {
            // get position of press
            console.log('Pressed');
            let x = e.nativeEvent.locationX;
            let y = e.nativeEvent.locationY;
            // if press more then card body
            if (y > style.CardHeader.height) {
              // if pressed left side
              if (x < (style.CardHeader.width / 2)) {
                console.log('Pressed on left side');
                CardImage_prev();              
              } else {
                console.log('Pressed on right side');
                CardImage_next();
              }
            } else {
              console.log('Pressed on header');
            }
            
          } else {
            console.log('Nothing');
          }
        } else {
          console.log('Nothing');
        }
      
        resetPosition();



      },

      // Called when responder is moved
      onPanResponderMove: (e, gestureState) => {
        console.log(gestureState.dx, gestureState.dy);
        setPosition({ x: gestureState.dx, y: gestureState.dy });
        setRotation(-gestureState.dx / 30);

        if (gestureState.dx >= 50) {
          setLikedBoxOpacity(Math.abs(gestureState.dx / 30));
          setDislikedBoxOpacity(0);
          setSuperLikedBoxOpacity(0);

          if (gestureState.dx > 100) {
            console.log('Liked');
          }

          return;

        } else if (gestureState.dx <= -50) {
          setLikedBoxOpacity(0);
          setSuperLikedBoxOpacity(0);
          setDislikedBoxOpacity(Math.abs(gestureState.dy / 30));

          if (gestureState.dx < -100) {
            console.log('Disliked');
          }

          return;

        } else {

         if (-30 < gestureState.dx && gestureState.dx < 30) {

          if (gestureState.dy < -50) {
            setLikedBoxOpacity(0);
            setDislikedBoxOpacity(0);
            setSuperLikedBoxOpacity(Math.abs(gestureState.dx / 5));

            if (gestureState.dy < -100) {
              console.log('SuperLiked');
            }

            return;

          } else {
            setLikedBoxOpacity(0);
            setDislikedBoxOpacity(0);
            setSuperLikedBoxOpacity(0);
          }

         } else {

          setLikedBoxOpacity(0);
          setDislikedBoxOpacity(0);
          setSuperLikedBoxOpacity(0);

         }

        }

      },
    }),
  ).current;

  //create styleSheet
  const style = StyleSheet.create({
    Card: {
      position: 'absolute',
      width: cardWidth,
      height: cardHeight,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 0,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      borderRadius: 10,
      zIndex: stackPosition == 'top' ? 10 : 9,
      alignItems: 'center',
      transform: [
        { translateX: position.x },
        { translateY: position.y },
        { rotate: rotation + 'deg' }],
    },
    CardHeader: {
      width: cardWidth,
      height: 150,
      backgroundColor: 'grey',
      opacity: 0.9,
    },
    CardBody: {
      width: cardWidth,
      height: cardHeight - 150,
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
    CardTitleLocation: {
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
      top: (cardHeight / 2) + 50,
      left: (cardWidth / 2) - 80,
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
  });


  function CardTitle() {

    function CardHearderAge() {
      if (userAge) {
        return <Text style={style.CardTitleAge}>, {userAge}</Text>;
      } else {
        return null;
      }

    }

    function CardHearderLocation() {
      if (userLocation) {
        return <Text style={style.CardTitleAge}>, {userLocation}</Text>;
      } else { return null; }

    }

    return (
      <Text style={style.CardTitleName}>{userName}<CardHearderAge /><CardHearderLocation /></Text>
    );
  }

  function CarHeaderDescription() {
    if (userDescription) {
      if (userDescription.length > 100) {
        return <Text style={style.CardTitleAge}>{userDescription.substring(0, 100)}...</Text>;
      } else {
        return <Text style={style.CardTitleAge}>{userDescription}</Text>;
      }
    } else { return null; }

  }

  const CardImage_next = () => {
    console.log('next');
    if ( userImagesIndex < userImages.length - 1) {
      userImagesIndex++;
    }
    setActiveImage({ uri: userImages[userImagesIndex].url });
  };

  const CardImage_prev = () => {
    console.log('prev');
    if ( userImagesIndex > 0) {
      userImagesIndex--;
    }
    setActiveImage({ uri: userImages[userImagesIndex].url });
  };
  



  return (
    <View
      style={style.Card} // Attach the panResponder handlers
      {...panResponder.panHandlers} >
      <View style={style.CardBody}>
      <ImageBackground source={activeImage} style={{ width: '100%', height: '100%' }} />
      </View>
      <View style={style.LikedBox}><Text style={style.LikedText}>Like</Text></View>
      <View style={style.DislikedBox}><Text style={style.DislikedText}>Dislike</Text></View>
      <View style={style.SuperLikedBox}><Text style={style.SuperLikedText}>Superlike</Text></View>
      <View style={style.CardHeader}>
        <CardTitle />
        <CarHeaderDescription />
      </View>
    </View>
  );
};

export default Card;
