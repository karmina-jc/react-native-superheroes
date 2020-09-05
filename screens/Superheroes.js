import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class Superheroes extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        superheroes: [],
        url:'http://157.245.138.232:9091/api/v1/test/superheroes',
        error:null
      }
    }
  
    componentDidMount(){
        this.getData()
      }
    
    getData = () => {
      this.setState({ loading:true });
  
      fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          superheroes: res.data,
          loading: false
        })
        console.log(res.data)
      })
    }
  
    render(){
      if(this.state.loading){
        return (
          <View style={styles.container}>
            <Text>Downloading Superheroes...</Text>
          </View>
        )
      }
      return (
      <View style={styles.container}>
        <Text>Superhéroes</Text>
        <FlatList
        keyExtractor={item => item.id.toString()}
        data={this.state.superheroes}
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
    
  }
  
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
  