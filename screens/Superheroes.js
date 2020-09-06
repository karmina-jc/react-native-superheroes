import React, {useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { getDataHeroes } from '../Redux/SupersDuck';

 const Superheroes = () => {

   const dispatch = useDispatch()

   const superheroes = useSelector(store => store.Superheroes)

  useEffect(() => {
      const fetchData = () =>{
          dispatch(getDataHeroes())
          }
          return fetchData()
      }, [dispatch])

    return (
      <View>
        <Text>Superhéroes</Text>
        <FlatList
        data={superheroes}
        keyExtractor={item => item.id.toString()}
        renderItem={
          ({item}) => {
            return(
              <View>
                <Image 
                style={styles.avatar}
                source={{uri: item.avatarURL}}
                />
                <Text>{item.nombre}</Text>
                <Text>{item.nombreReal}</Text>
              </View>
            )
          }  
        }
        />
      </View>
    );
  }

  export default Superheroes
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
  });
  