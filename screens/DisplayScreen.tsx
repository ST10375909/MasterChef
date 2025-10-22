import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function DisplayScreen({ route, navigation }) {
  const { starter, main, dessert } = route.params || {};
  const total = (starter?.price || 0) + (main?.price || 0) + (dessert?.price || 0);

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Your Meal Summary 🍽️</Text>

        <View style={styles.card}>
          <Text style={styles.item}>Starter: {starter?.name || 'None selected'}</Text>
          <Text style={styles.item}>Main: {main?.name || 'None selected'}</Text>
          <Text style={styles.item}>Dessert: {dessert?.name || 'None selected'}</Text>

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>💰 Total: R{total}</Text>
          </View>
        </View>

        {/* ✅ NEW BUTTON: Navigate to Checkout */}
        <TouchableOpacity
          style={[styles.button, styles.checkoutButton]}
          onPress={() =>
            navigation.navigate('Checkout', {
              starter,
              main,
              dessert,
              total,
            })
          }
        >
          <Text style={styles.buttonText}>🛒 Proceed to Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.buttonText}>← Back to Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CheckoutScreen', { starter, main, dessert, total })}
>
          <Text style={styles.buttonText}>💳 Proceed to Checkout</Text>
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
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    padding: 20,
    width: '100%',
  },
  item: { fontSize: 18, marginVertical: 6 },
  totalContainer: { marginTop: 15, borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 10 },
  totalText: { fontSize: 20, fontWeight: '700', color: '#2E8B57' },
  button: {
    paddingVertical: 14,
    borderRadius: 30,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButton: { backgroundColor: '#2E8B57' },
  secondaryButton: { backgroundColor: '#555' },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
});
