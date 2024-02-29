import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rowFront: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: 'white',
  },
  iconContainer: {
    marginRight: 15,
  },
  blueCircle: {
    position: 'relative',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#E6F2FF',
    borderColor: '#087FFE',
  },
  blueDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#087FFE',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  notificationLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationTime: {
    color: 'grey',
  },
  description: {
    fontSize: 14,
  },
  rowBack: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backRightBtnRight: {
    backgroundColor: '#FF6666',
    paddingHorizontal: 14,
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 10,
    marginRight: 10,
  },
});

export default styles;
