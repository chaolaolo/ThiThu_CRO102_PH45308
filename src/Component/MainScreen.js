import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchXeMay, deleteXeMay } from '../redux/actions/motoActions';
import ListItem from '../Component/ListItem';
import Banner from '../Component/Banner';

const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const xeMays = useSelector(state => state.xeMay.items);
    const loading = useSelector(state => state.xeMay.loading);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        dispatch(fetchXeMay());
    }, [dispatch]);

    const handleRefresh = async () => {
        setRefreshing(true);
        await dispatch(fetchXeMay());
        setRefreshing(false);
    };

    const handleDelete = id => {
        dispatch(deleteXeMay(id));
    };

    const handleEdit = xe => {
        navigation.navigate('EditScreen', { xe });
    };

    
    return (
        <View style={styles.container}>
            <Banner />
            <FlatList
                data={xeMays}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ListItem xe={item} onDelete={handleDelete} onEdit={handleEdit} />
                )}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                ListEmptyComponent={<Text style={{flex:1,textAlign:'center'}}>Không có dữ liệu</Text>}
                ListFooterComponent={loading && 
                <Text style={{flex:1,textAlign:'center'}}>Đang tải dữ liệu...</Text>}
            />
            <View style={{ position: 'absolute', backgroundColor: 'lightblue', padding: 20, bottom: 10, right: 10, borderRadius: 100,width:80,height:80,justifyContent:'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('AddScreen')} >
                    <Text>Thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
});

export default MainScreen;
