import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text} from 'react-native';
import CardComponent from './components/CardComponent';
import WeatherComponent from './components/WeatherCard';
import NotificationCard from './components/NotificationCard'; // Import the NotificationCard component
import TabBar from './components/TabBar'; // Import the TabBar component
import ServiceCard from './components/ServiceCard'; // Import the ServiceCard component

const App = () => {
  const [selectedTab, setSelectedTab] = useState('current'); // State to track the selected tab

  const cardsData = [
    {
      id: 1,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/KITLV_377921_-_Clifton_and_Co._-_The_Qutab_Minar_in_Mehrauli_in_Delhi_-_Around_1890.tif/lossy-page1-440px-KITLV_377921_-_Clifton_and_Co._-_The_Qutab_Minar_in_Mehrauli_in_Delhi_-_Around_1890.tif.jpg',
      title: 'Qutb Minar',
      stateName: 'Delhi',
      countryName: 'India',
      locationIcon: 'location-on',
      adminName: 'Raj Patel',
      adminIcon: 'person',
      date: 'Jan 12-50, 2023',
    },
    {
      id: 2,
      imageUrl: 'https://unciatrails.com/wp-content/uploads/2020/07/Taj2-1.jpg',
      title: 'Taj Mahal',
      stateName: 'Agra',
      countryName: 'India',
      locationIcon: 'location-on',
      adminName: 'Sifra Tanwar',
      adminIcon: 'person',
      date: 'Feb 20-30, 2023',
    },
    {
      id: 3,
      imageUrl:
        'https://wanderon.in/_next/image?url=https%3A%2F%2Fdr7f10k1l6bnm.cloudfront.net%2Fwp-content%2Fuploads%2F2023%2F08%2F1-min-26.jpg&w=3840&q=75',
      title: 'Goa Beach',
      stateName: 'Goa',
      countryName: 'India',
      locationIcon: 'location-on',
      adminName: 'Dhruvesh Rana',
      adminIcon: 'person',
      date: 'Mar 1-15, 2023',
    },
    {
      id: 4,
      imageUrl:
        'https://static.theprint.in/wp-content/uploads/2020/08/Untitled-design-2020-08-09T193331.340.jpg',
      title: 'Andaman Nikobar Island',
      stateName: 'Andaman Nikobar',
      countryName: 'India',
      locationIcon: 'location-on',
      adminName: 'Meet sabhani',
      adminIcon: 'person',
      date: 'Apr 5-25, 2023',
    },
  ];
  const currentRequests = [
    {
      id: 'SRV 001',
      name: 'Alexander Awail',
      serviceDate: 'Dec 12-14, 2023',
      location: 'Los Angeles',
      numberOfPersons: 3,
    },
    {
      id: 'SRV 002',
      name: 'John Doe',
      serviceDate: 'Dec 15-17, 2023',
      location: 'New York',
      numberOfPersons: 2,
    },
    {
      id: 'SRV 003',
      name: 'Emma Watson',
      serviceDate: 'Dec 18-20, 2023',
      location: 'Chicago',
      numberOfPersons: 1,
    },
  ];

  const pastRequests = [
    {
      id: 'SRV 004',
      name: 'Michael Smith',
      serviceDate: 'Dec 5-7, 2023',
      location: 'San Francisco',
      numberOfPersons: 4,
    },
    {
      id: 'SRV 005',
      name: 'Emily Johnson',
      serviceDate: 'Dec 1-3, 2023',
      location: 'Miami',
      numberOfPersons: 2,
    },
    {
      id: 'SRV 006',
      name: 'William Anderson',
      serviceDate: 'Nov 28-30, 2023',
      location: 'Seattle',
      numberOfPersons: 3,
    },
  ];

  const handleTabChange = tab => {
    setSelectedTab(tab);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Travel To Your Dreams!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {cardsData.map(card => (
            <CardComponent
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              stateName={card.stateName}
              countryName={card.countryName}
              locationIcon={card.locationIcon}
              adminName={card.adminName}
              adminIcon={card.adminIcon}
              date={card.date}
            />
          ))}
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.weatherContainer}>
            <WeatherComponent
              imageUrl="https://mediaim.expedia.com/destination/1/2d75301e5fa5840846672492693f1fb3.jpg"
              temperature="20"
              stateName="Delhi"
              countryName="India"
            />
            <WeatherComponent
              imageUrl="https://www.moneytap.com/blog/wp-content/uploads/2023/04/cost-of-living-in-goa-1024x683.jpeg"
              temperature="25"
              stateName="Goa"
              countryName="India"
            />
          </View>
        </ScrollView>
        <ScrollView>
          <View style={styles.notificationContainer}>
            <Text style={{fontWeight: '800', marginLeft: 10, fontSize: 18}}>
              Today
            </Text>
            <NotificationCard
              notificationLabel="password changed"
              notificationTime="10:00"
              description="Your password has been changed for ID:dhfuvpathak25"
              showBlueDot={true}
            />
            <NotificationCard
              notificationLabel="Payment Successfull"
              notificationTime="11:00"
              description="Payment for $399.00 is successfull and the Transection ID:97346428346192"
              showBlueDot={true}
            />
          </View>
        </ScrollView>
        <ScrollView>
          <View style={styles.notificationContainer}>
            <Text style={{fontWeight: '800', marginLeft: 10, fontSize: 18}}>
              Yesterday
            </Text>
            <NotificationCard
              notificationLabel="account created"
              notificationTime="12:00"
              description="account successfully created for dhruvpathak25"
              showBlueDot={false}
            />
            <NotificationCard
              notificationLabel="account creation failed"
              notificationTime="13:00"
              description="account creation rejected due to password mismatch"
              showBlueDot={false}
            />
          </View>
        </ScrollView>
        <View style={{marginTop: 800}}></View>
        <TabBar onSelectTab={handleTabChange} />
        {selectedTab === 'current' ? (
          <ScrollView>
            <View style={styles.serviceContainer}>
              {/* <Text style={styles.tabTitle}>Current Requests</Text> */}
              {currentRequests.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </View>
          </ScrollView>
        ) : (
          <ScrollView>
            <View style={styles.serviceContainer}>
              {/* <Text style={styles.tabTitle}>Past Requests</Text> */}
              {pastRequests.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </View>
          </ScrollView>
        )}
        <View style={{marginTop: 800}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 20,
  },
  notificationContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  serviceContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default App;
