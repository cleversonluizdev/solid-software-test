import { useState } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { generateRandomColor } from './helpers/generateRandomColor';
import ColorInfo from './components/ColorInfo';
import InstructionsBadge from './components/InstructionsBadge';

export default function App() {
  const [bgColor, setBgColor] = useState(generateRandomColor());
  const [textColor, setTextColor] = useState(generateRandomColor());

  const handlePress = () => {
    setBgColor(generateRandomColor());
    setTextColor(generateRandomColor());
  }

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>Hello there</Text>
      <ColorInfo bgColor={bgColor} textColor={textColor} />
      <InstructionsBadge />
    </Pressable>

  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    rowGap: 24
  },
});
