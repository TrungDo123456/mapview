import React, { Component } from 'react';
import { Image,View,StyleSheet } from 'react-native';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: '2',
    image: require('../src/h1.jpg'),
  },
  {
    text: 'Card One',
    name: '3',
    image: require('../src/h2.jpg'),
  },
  {
    text: 'Card One',
    name: '4',
    image: require('../src/h3.jpg'),
  },
  {
    text: 'Card One',
    name: '5',
    image: require('../src/h4.jpg'),
  },
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
        
      <View >
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={styles.card}>
                <CardItem  style={styles.card_item} onPress={()=>{alert('i love you')}}>
                    <Image style={styles.image} source={item.image} />
                </CardItem>
              </Card>
            }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card:{
    elevation: 2000 ,
     backgroundColor:'#f5f5f510'
  },
  card_item:{
    backgroundColor:'#f5f5f510',
  },
  image:{
    height: 150,
    width:250 ,
  },
});
