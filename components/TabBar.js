import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TabBar = ({onSelectTab}) => {
  const [selectedTab, setSelectedTab] = useState('current');
  const handleTabClick = tab => {
    setSelectedTab(tab);
    onSelectTab(tab);
  };

  return (
    <View
      style={{
        backgroundColor: '#F4F4F4',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        width: '80%',
        paddingRight: 10,
        gap: 1,
        alignSelf: 'center',
      }}>
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 10,
          paddingHorizontal: 30,
          marginRight: 10,
          backgroundColor: selectedTab === 'current' ? '#087FFE' : '#F4F4F4',
        }}
        onPress={() => handleTabClick('current')}>
        <Text
          style={{
            color: selectedTab === 'current' ? 'white' : 'black',
            fontWeight: 'bold',
          }}>
          Current Requests
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          marginRight: -9,

          borderRadius: 10,
          paddingHorizontal: 30,

          backgroundColor: selectedTab === 'past' ? '#087FFE' : '#F4F4F4',
        }}
        onPress={() => handleTabClick('past')}>
        <Text
          style={{
            color: selectedTab === 'past' ? 'white' : 'black',
            fontWeight: 'bold',
          }}>
          Past Requests
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
