import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  time2: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#00B5F1',
    
  },
  navbar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopColor: '#F0F2F5',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    height: 100,
  },
  background: {
    height: 100,
    alignItems: 'center',
    width:'100%'
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    top: 51,
    right: 11,
  },
  headerText2: {
    color: '#fff',
    fontSize: 24,
    top: 52,
    right: 93,
  },
  formGroup: {
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  formGroup2: {
    marginBottom: 130,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  asterisk: {
    color: '#1B77E3', // Set color of asterisk to blue
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row', // Align the icon and input horizontally
    alignItems: 'center',
    
  },
  input: {
    width: '100%',
    paddingLeft: 35, // Add padding on the left to make space for the icon
    padding: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  input2: {
    width: '100%',
    padding: 12,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    height:100
  },
  icon: {
    position: 'absolute',
    left: 10, 
    alignContent:'center', 
    top: '50%',
    transform: [{ translateY: -10 }], 
    zIndex: 2,
  },
  icon2: {
    position: 'absolute',
    left: 343, 
    top: '50%', // Center the icon vertically
    transform: [{ translateY: -10 }], 
    zIndex: 2,
  },
  button: {
    height: 45,
    paddingHorizontal: 30,
    backgroundColor: '#E2F4FD',
    borderWidth:1.5,
    borderColor:'#00B5F1',
    borderRadius: 5,
    width: '90%',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#00B5F1',
    textAlign: 'center', // Align text horizontally
    lineHeight: 43, // Adjust line height to match button height for vertical centering
    textAlignVertical: 'center', // This is useful on Android to center vertically
  },
});

export default styles;