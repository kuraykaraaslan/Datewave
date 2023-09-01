import React, { useState } from 'react';
import { Avatar } from 'react-native-elements';
import { Text, View, PanResponder, Dimensions, ImageBackground, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
    const [username, setUsername] = useState('JohnDoe');
    const [userFullName, setUserFullName] = useState('John Doe'); // You can use this to display the user's full name in the header
    const [email, setEmail] = useState('johndoe@example.com');
    const [bio, setBio] = useState('Hello, I am John Doe.');
    const avatarUrl = ''; // Set this to your actual avatar URL or leave it empty for the fallback color

    // Screen States
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

    const saveProfile = () => {
        // Handle saving profile changes to your backend or local storage
        console.log('Profile saved:', { username, email, bio });
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 16,
            outline: 1,
            width: '100%',
            height: '100%',
        },
        avatarContainer: {
            borderWidth: 4,
            borderColor: 'red',
            borderRadius: 75,
            marginBottom: 20,
            padding: 5,
            width: 150, // Adjust the width and height as needed
            height: 150,
            justifyContent: 'center', // Center the content vertically
            alignItems: 'center', // Center the content horizontally
        },
        header: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        settingCard: {
            width: '100%',
            padding: 16,
            borderRadius: 8,
            backgroundColor: 'white',
            marginBottom: 4,
            width: screenWidth - 32,
        },
        settingItem: {
            marginBottom: 20,
            alignItems: 'left',
        },
        label: {
            fontSize: 18,
            marginBottom: 4,
            fontWeight: 'bold',
        },
        value: {
            fontSize: 16,
        },
        editButton: {
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 8,
        },
        editButtonText: {
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
        },
    });


    return (
        <View style={styles.container}>
            {avatarUrl ? (
                <Avatar
                    rounded
                    size="large"
                    source={{ uri: avatarUrl }}
                    containerStyle={styles.avatarContainer}
                />
            ) : (
                <View style={[styles.avatarContainer, { backgroundColor: 'white' }]} />
            )}
            <Text style={styles.header}>{userFullName}</Text>
            <View style={styles.settingItem}>
                <View style={styles.settingCard}>
                    <Text style={styles.label}>Username:</Text>
                    <Text style={styles.value}>{username}</Text>
                </View>
            </View>
            <View style={styles.settingItem}>
                <View style={styles.settingCard}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{email}</Text>
                </View>
            </View>
            <View style={styles.settingItem}>
                <View style={styles.settingCard}>
                <Text style={styles.label}>Bio:</Text>
                <Text style={styles.value}>{bio}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.editButton}
                onPress={saveProfile}
            >
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};



export default ProfilePage;
