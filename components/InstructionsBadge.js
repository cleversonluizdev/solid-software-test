import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function InstructionsBadge() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Click anywhere on the screen to change colors</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
