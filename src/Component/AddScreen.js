import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Pressable, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addXeMay } from '../redux/actions/motoActions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AddScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [tenXe, setTenXe] = useState('');
    const [mauSac, setMauSac] = useState('');
    const [giaBan, setGiaBan] = useState('');
    const [moTa, setMoTa] = useState('');
    const [hinhAnh, setHinhAnh] = useState('');

    const handleAdd = () => {
        dispatch(addXeMay({
            ten_xe_ph45308: tenXe,
            mau_sac_ph45308: mauSac,
            gia_ban_ph45308: Number(giaBan),
            mo_ta_ph45308: moTa,
            hinh_anh_ph45308: hinhAnh,
        }));
        navigation.goBack();
    };

    const handleCamera = () => {
        launchCamera({ mediaType: 'photo' }, response => {
            if (response.assets) {
                setHinhAnh(response.assets[0].uri);
            }
        });
    };

    const handleGallery = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (response.assets) {
                setHinhAnh(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Tên xe"
                value={tenXe}
                onChangeText={setTenXe}
                style={styles.input}
            />
            <TextInput
                placeholder="Màu sắc"
                value={mauSac}
                onChangeText={setMauSac}
                style={styles.input}
            />
            <TextInput
                placeholder="Giá bán"
                value={giaBan}
                onChangeText={setGiaBan}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                placeholder="Mô tả"
                value={moTa}
                onChangeText={setMoTa}
                style={styles.input}
            />
            <View style={styles.imageContainer}>
                {hinhAnh ? <Image source={{ uri: hinhAnh }} style={styles.image} /> : null}
                {/* <Button title="Chụp ảnh" onPress={handleCamera} />
                <Button title="Chọn ảnh từ thư viện" onPress={handleGallery} /> */}
                <View style={{ flexDirection: 'row', }}>
                    <Pressable onPress={handleCamera} style={{ backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 10, paddingVertical: 10, marginHorizontal: 2 }} >
                        <Text>Chụp ảnh</Text>
                    </Pressable>
                    <Pressable onPress={handleGallery} style={{ backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 10, paddingVertical: 10, marginHorizontal: 2 }} >
                        <Text>Chọn ảnh từ thư viện</Text>
                    </Pressable>
                </View>
            </View>
            <Pressable onPress={handleAdd} style={{ backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', borderRadius: 10, paddingVertical: 10, marginHorizontal: 2 }} >
                <Text>Thêm</Text>
            </Pressable>
            {/* <Button title="Thêm" onPress={handleAdd} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});

export default AddScreen;
