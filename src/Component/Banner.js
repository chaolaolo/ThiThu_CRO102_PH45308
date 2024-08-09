import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Banner = () => {
    return (
            <ImageBackground source={require('./image.png')} style={styles.banner}>
            <Text style={styles.text}>Brand Banner</Text>
            </ImageBackground>
    );
};

const styles = StyleSheet.create({
    banner: {
        height: 150,
        backgroundColor: '#ffa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'pink',
    },
});

export default Banner;
