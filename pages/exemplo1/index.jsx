import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Entypo, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

export default function Exemplo1() {
    const [imageG, setImageG] = useState('https://static.diverseui.com/male-10.jpg')
    const [imageC, setImageC] = useState('')

    const gallery = async () => {
        const result = ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log((await result).assets[0].uri)

        if (!(await result).canceled) {
            setImageG((await result).assets[0].uri)
        }
    }
    const webcam = async () => {
        const result = ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log((await result).assets[0].uri)

        if (!(await result).canceled) {
            setImageC((await result).assets[0].uri)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Galeria</Text>
            <View style={styles.img}>
                <Image source={{ uri: (imageG) }} style={styles.img} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={gallery}
            >
                <AntDesign
                    name="picture"
                    size={100}
                    color={'#1d9fdb'}
                />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Câmera</Text>
            <View style={styles.img}>
                <Image source={{ uri: (imageC) }} style={styles.img} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={webcam}
            >
                <Entypo
                    name="camera"
                    size={100}
                    color={'#1d9fdb'}
                />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#BBB',
    },
    img: {
        width: 200,
        height: 200,
        backgroundColor: '#999',
        borderRadius: 10,
    },
    btn: {
        width: '60%',
        height: 110,
        borderRadius: 10,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '100%',
        height: 120,
        backgroundColor: '#999',
    },
}) 