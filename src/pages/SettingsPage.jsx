// Import necessary dependencies
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

// Define your settings screen component
const SettingsPage = () => {
  // Define state variables for settings
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLocationEnabled, setIsLocationEnabled] = useState(false);
    const [isPushEnabled, setIsPushEnabled] = useState(false);

    // Define a function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    // Define a function to toggle location
    const toggleLocation = () => {
        setIsLocationEnabled(!isLocationEnabled);
    }
    
    // Define a function to toggle push notifications
    const togglePush = () => {
        setIsPushEnabled(!isPushEnabled);
    }

    // Return JSX to render settings screen
    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
            </View>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Location</Text>
                <Switch value={isLocationEnabled} onValueChange={toggleLocation} />
            </View>
            <View style={styles.setting}>
                <Text style={styles.settingText}>Push Notifications</Text>
                <Switch value={isPushEnabled} onValueChange={togglePush} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}

// Define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d4d4d4',
        padding: 20
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
    settingText: {
        fontSize: 18
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18
    }
});

// Export your settings screen component
export default SettingsPage;
