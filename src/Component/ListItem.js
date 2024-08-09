import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Animated } from 'react-native';

const ListItem = ({ xe, onDelete, onEdit }) => {

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [opacity]);

    const handleDelete = (id) => {
        Alert.alert(
            "Xác nhận xóa",
            "Bạn có chắc chắn muốn xóa xe này?",
            [
                {
                    text: "Hủy",
                    style: "cancel"
                },
                {
                    text: "Xóa",
                    onPress: () => onDelete(id),
                    style: "destructive"
                }
            ]
        );
    };
    return (
        <View style={styles.item}>
            <Image source={{ uri: xe.hinh_anh_ph45308 }} style={styles.image} />
            <View style={{ marginHorizontal: 10, width: '100%', justifyContent: 'center',flex:1 }}>
                <Text style={styles.title}>{xe.ten_xe_ph45308}</Text>
                <Text>{xe.mau_sac_ph45308}</Text>
                <Text>{xe.gia_ban_ph45308}</Text>
                <Text>{xe.mo_ta_ph45308}</Text>
                <View style={{ flexDirection: 'row',marginTop:10 }}>
                    <TouchableOpacity onPress={() => onEdit(xe)} style={{ backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 10, paddingVertical: 10,marginHorizontal:2 }} >
                        <Text style={styles.button}>Sửa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete(xe.id)}  style={{ backgroundColor: 'lightpink', justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 10, paddingVertical: 10,marginHorizontal:2 }}>
                        <Text style={styles.button}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    button: {
        color: 'blue',
    },
    image: {
        width: '40%',
        height: 150,
        borderRadius: 10,
    },
});

export default ListItem;
