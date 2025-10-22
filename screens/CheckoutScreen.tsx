import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
  const { starter, main, dessert, total } = route.params || {};

  const handlePayment = () => {
    Alert.alert('Payment Successful 💳', `You paid R${total}. Enjoy your meal!`);
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Checkout 🧾</Text>

        <View style={styles.card}>
          <Text style={styles.item}>Starter: {starter?.name}</Text>
          <Text style={styles.item}>Main: {main?.name}</Text>
          <Text style={styles.item}>Dessert: {dessert?.name}</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>💰 Total: R{total}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handlePayment}
        >
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>← Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.45)' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginBottom: 30 },
  card: { backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 15, padding: 20, width: '100%' },
  item: { fontSize: 18, marginVertical: 6 },
  totalContainer: { marginTop: 15, borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 10 },
  totalText: { fontSize: 20, fontWeight: '700', color: '#2E8B57' },
  button: { backgroundColor: '#ffb703', paddingVertical: 14, borderRadius: 30, width: '90%', alignItems: 'center', marginTop: 20 },
  secondaryButton: { backgroundColor: '#555' },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
});
