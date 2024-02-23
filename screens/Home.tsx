import { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import MyText from '../components/MyText';

import { Category, Transaction } from '../types';

export default function Home() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <View style={styles.container}>
        <MyText size="xxl">Budget</MyText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 70,
  },
});
