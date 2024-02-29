import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Menu from 'react-native-vector-icons/MaterialIcons';

const WeatherComponent = ({imageUrl, temperature, stateName, countryName}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.imageContainer}>
        <View style={styles.imageShadow}>
          <Image source={{uri: imageUrl}} style={styles.image} />
        </View>
        <View style={styles.bookmarkContainer}>
          <TouchableOpacity
            onPress={toggleBookmark}
            style={styles.bookmarkButton}>
            <Icon
              name={isBookmarked ? 'bookmark-check' : 'bookmark-minus-outline'}
              size={30}
              color={isBookmarked ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.weatherInfo}>
          <Feather
            name="cloud"
            size={25}
            color="white"
            style={{marginRight: 5, fontWeight: 'semibold'}}
          />
          <Text style={styles.temperature}>{temperature}</Text>
          <Text style={styles.temperatureUnit}>°C</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', marginVertical: 10}}>
          {stateName}, {countryName}
        </Text>
        <TouchableOpacity>
          <Menu name="more-vert" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: -150,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'red',
            borderRadius: 5,
            marginRight: 10,
          }}
        />
        <Text style={{fontSize: 18, fontWeight: '400', color: 'grey'}}>
          {stateName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: 240,
    height: 160,
  },
  imageShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bookmarkContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
  },
  bookmarkButton: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  weatherInfo: {
    position: 'absolute',
    bottom: 4,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  temperature: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  temperatureUnit: {
    fontSize: 12,
    fontWeight: '800',
    color: 'white',
    marginLeft: 1,
    marginTop: -10,
  },
});

export default WeatherComponent;
