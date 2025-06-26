import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";


const Chat = ({route, navigation}) => {

  const {name} = route.params

  useEffect(() => {
    navigation.setOptions({title: name})
  }, [])
  return (
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'yellow'
  }
})
export default Chat