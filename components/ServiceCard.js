import React from 'react';
import {View, Text} from 'react-native';

const ServiceCard = ({service}) => {
  const {id, name, serviceDate, location, numberOfPersons} = service;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Service ID</Text>
          <Text style={styles.data}>{id}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.data}>{name}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Service Date</Text>
          <Text style={styles.data}>{serviceDate}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Location</Text>
          <Text style={styles.data}>{location}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>No. of Person</Text>
          <Text style={styles.data}>{numberOfPersons}</Text>
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
