import React from 'react'
// eslint-disable-next-line
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'

import CircleButton from '../components/CircleButton'
// import KeyboardSafeView from '../components/KeyboardSafeView'

export default function MemoCreateScreen(props) {
  const { navigation } = props
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      {/* <KeyboardSafeView style={styles.container}> */}
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack()
        }}
      />
      {/* </KeyboardSafeView> */}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
})
