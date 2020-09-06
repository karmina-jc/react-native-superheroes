import React, {useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { getDataHeroes } from '../Redux/SupersDuck';

 const Superheroes = () => {

   const dispatch = useDispatch()

   const superheroes = useSelector(store => store.Superheroes.supers.data)

    useEffect(() => {
      const fetchData = () =>{
          dispatch(getDataHeroes())
          }
          return fetchData()
      }, [dispatch])

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Superhéroes</Text>
        <FlatList
          data={superheroes}
          keyExtractor={item => item.id.toString()}
          renderItem={
            ({item}) => {
              return(
                <View style={styles.heroCard}>
                  <Image 
                  style={styles.avatar}
                  source={{uri: item.avatarURL}}
                  />
                  <View style={styles.infoCard}>
                    <Text 
                    style={styles.heroName}
                    >
                      {item.nombre}
                    </Text>
                    <Text>{item.nombreReal}</Text>
                  </View>
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
    title: {
      width:'100%',
      fontSize: 25,
      alignSelf: 'flex-start',
      padding: 5,
      backgroundColor: "#e8ecf0"
    },
    heroCard: {
      flex: 1, 
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 60,
      borderWidth: 1,

    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 50,
      marginRight: 20,
    },
    heroName: {
      fontWeight: 'bold',
      fontSize: 20,
    }
  });
  