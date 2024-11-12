import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boats = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.parent}>
            <View style={styles.header}>
                <Icon name={icon_name} size={24} color="#B23B23" style={styles.icon} />
                <Text style={styles.title}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={typeof poster === 'string' ? { uri: poster } : poster} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginVertical: 15,
        marginHorizontal: 20,
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginVertical: 10,
    },
    image: {
        width: 300,
        height: 120,
        borderRadius: 8,
        marginTop: 15,
    },
});

export default Boats;
