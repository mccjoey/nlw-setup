import { View, StyleSheet, ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <View style={loadingStyles.container}>
      <ActivityIndicator color="#7C3AED" size="large" />
    </View>
  );
}

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#09090A',
  },
});
