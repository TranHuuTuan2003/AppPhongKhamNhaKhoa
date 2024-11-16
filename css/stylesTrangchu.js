import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  background: {
    flex: 1,
    height: '40%',
  },
  logo_plus: {
    height: 43,
    marginBottom: 25,
    marginTop: 80,
    width: 240,
    marginLeft: '22%',
  },
  doctor: {
    marginTop: 30,
    paddingHorizontal: 21,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 534,
    zIndex: 0,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
    marginTop: 50,
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  title3: {
    fontSize: 13,
    fontWeight: 'bold',
    zIndex: 2,
    textAlign: 'center',
    paddingVertical: 10,
  },
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    margin: 20,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
    zIndex: 2,
  },
  serviceItem: {
    alignItems: 'center',
    width: '25%',
    marginVertical: 10,
  },
  serviceText: {
    marginTop: 10,
    fontSize: 13,
    textAlign: 'center',
    color: '#333',
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  partners: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    flexWrap: 'wrap',
  },
  partner: {
    marginHorizontal: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  partnerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  partnerName: {
    marginTop: 10,
    fontSize: 13,
    textAlign: 'center',
    width: 90,
  },
  horizontalScrollContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  horizontalScrollContainer2: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 170,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 50,
  },
  imageIcon: {
    width: 45,
    height: 45,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#00B5F1',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },


  // Navigation bar styles
  navbar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: '#F0F2F5',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 23,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.40,
    shadowRadius: 5,
    borderRadius:20
  },
  navbarItem: {
    alignItems: 'center',
  },
  navbarText: {
    fontSize: 14,
    color: '#2F363D',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 58,
    left: '50%',
    transform: [{ translateX: -30 }],
    backgroundColor: '#00B5F1',
    borderRadius: 50,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#00B5F1',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 4,
  },

  // Additional styles
  cardNew: {
    width: 170,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 15,
  },
  cardImage: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginTop: 7,
    paddingHorizontal: 10,
    fontSize: 12,
    color: '#666',
  },
  oldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FE7E49',
    padding: 5,
    borderRadius: 5,
    zIndex: 12,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  chatIcon: {
    position: 'absolute',
    width: 55,
    height: 55,
    bottom: 60,
    right: 7,
    borderRadius: 50,
    borderColor: 'red',
    shadowColor: '#64B9E5',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
  },

  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 130,
    marginTop: 5,
  },
  serviceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 180,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 15,
    padding: 12,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 50,
  },
  textservice: {
    fontSize: 15,
    color: '#333333',
    width: 100,
  },
  banner: {
    position: 'absolute',
    top: 22,
    right: -95,
    backgroundColor: '#FE7E49',
    color: '#fff',
    padding: 8,
    width: 210,
    transform: [{ rotate: '45deg' }],
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
    zIndex: 2,
    height: 1,
  },
  bannerText: {
    position: 'absolute',
    marginTop: 2,
    color: '#ffffff',
    fontSize: 9,
    fontWeight: 'bold',
    width: '100%',
    zIndex: 3,
    textAlign: 'center',
    right: 22,
  },

  // Chat navigation bar styles
  navbarchat: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: '#F0F2F5',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    height: 310,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex:2
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    width: '100%',
  },
  iconImage: {
    width: 35,
    height: 35,
    marginRight: 13,
  },
  text: {
    flexGrow: 1,
    textAlign: 'left',
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#00aaff',
  },
  chevronIcon: {
    color: '#00aaff',
  },
  footer: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlayBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    zIndex: 1, // Make sure it's on top of the content
  },
});

export default styles;
