import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Octicons';
import styles from './NotificationCardStyles'; // Importing styles from the new file

const NotificationCard = ({
  notificationLabel,
  notificationTime,
  description,
  showBlueDot,
}) => {
  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Icon name="trash" size={23} color="white" />
      </TouchableOpacity>
    </View>
  );

  const renderNotification = () => (
    <View style={styles.rowFront}>
      <View style={styles.iconContainer}>
        <View style={styles.blueCircle}>
          <Icon name="bell" size={20} color="#087FFE" />
          {showBlueDot && <View style={styles.blueDot} />}
        </View>
      </View>
      <View style={styles.notificationDetails}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationLabel}>{notificationLabel}</Text>
          <Text style={styles.notificationTime}>{notificationTime}</Text>
        </View>
        <Text numberOfLines={1} style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );

  return (
    <SwipeListView
      data={[{key: 'notification'}]}
      renderItem={() => renderNotification()}
      renderHiddenItem={() => renderHiddenItem()}
      leftOpenValue={75}
      rightOpenValue={-75}
      disableLeftSwipe={false}
      disableRightSwipe={true}
    />
  );
};

export default NotificationCard;
