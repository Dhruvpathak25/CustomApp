import React from 'react';
import {View, Text} from 'react-native';

const ServiceCard = ({service}) => {
  const {id, name, serviceDate, location, numberOfPersons} = service;

  return (
    <View style={styles.container}>
      {/* First line: Service ID, Name, and Service Date */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Service ID:</Text>
          <Text numberOfLines={1} style={styles.data}>
            {id}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Name:</Text>
          <Text numberOfLines={1} style={styles.data}>
            {name}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Service Date:</Text>
          <Text numberOfLines={1} style={styles.data}>
            {serviceDate}
          </Text>
        </View>
      </View>
      {/* Second line: Location and Number of Persons */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Location:</Text>
          <Text numberOfLines={1} style={styles.data}>
            {location}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>No. of Person:</Text>
          <Text numberOfLines={1} style={styles.data}>
            {numberOfPersons}
          </Text>
        </View>
        <View style={styles.column} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  data: {
    paddingBottom: 10,
  },
};

export default ServiceCard;
