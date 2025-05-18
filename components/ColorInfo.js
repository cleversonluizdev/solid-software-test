import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function ColorInfo({ bgColor, textColor }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current colors:</Text>
      <Text>Background color:
        <Text style={styles.colorName}>{bgColor}</Text> / Text color: <Text style={styles.colorName}>{textColor}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 12
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  colorName: {
    fontWeight: 'bold'
  },
});
