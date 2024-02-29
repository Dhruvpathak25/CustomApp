import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardComponent = ({
  imageUrl,
  title,
  stateName,
  countryName,
  locationIcon,
  adminName,
  adminIcon,
  date,
}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.image}></ImageBackground>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText} numberOfLines={1}>
          {stateName}, {countryName}
        </Text>
        <Icon name={locationIcon} size={20} color="black" />
      </View>
      <View style={styles.adminContainer}>
        <Icon name={adminIcon} size={20} color="black" />
        <Text style={styles.adminName} numberOfLines={1}>
          {adminName}
        </Text>
      </View>
      <View style={styles.dateContainer}>
        <Icon name="date-range" size={20} color="black" />
        <Text style={styles.dateText} numberOfLines={1}>
          {date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
    width: '23%',
    marginHorizontal: 10,
    height: '41%',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 16,
    marginRight: 5,
    overflow: 'scroll',
  },
  adminContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  adminName: {
    fontSize: 16,
    fontWeight: '500',
    flexWrap: 'wrap',
    flex: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,

    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
  },
});

export default CardComponent;
