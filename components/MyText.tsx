import React, { ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface MyTextProps {
  children: ReactNode;
  size?: string;
}

const MyText: React.FC<MyTextProps> = ({ children, size }) => {

  let content;
  
  switch (size) {
    case 's':
      content = <Text style={styles.s}>{children}</Text>;
      break;
    case 'm':
      content = <Text style={styles.m}>{children}</Text>;
      break;
    case 'l':
      content = <Text style={styles.l}>{children}</Text>;
      break;
      case 'xl':
        content = <Text style={styles.xl}>{children}</Text>;
        break;
      case 'xxl':
        content = <Text style={styles.xxl}>{children}</Text>;
        break;
    default:
      content = <Text style={styles.s}>{children}</Text>;
      break;
  }
  
  return (
    <View>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  s: {
    fontSize: 12,
  },
  m: {
    fontSize: 16,
  },
  l: {
    fontSize: 20,
  },
  xl: {
    fontSize: 32,
    fontWeight: '900',
  },
  xxl: {
    fontSize: 64,
    fontWeight: '900',
  },
});
export default MyText;