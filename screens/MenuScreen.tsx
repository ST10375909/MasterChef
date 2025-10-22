import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function MenuScreen({ navigation }) {
  // Starters
  const [starterOpen, setStarterOpen] = useState(false);
  const [starter, setStarter] = useState(null);
  const [starters, setStarters] = useState([
    { label: 'Soup of the Day 🥣 - R40', value: { name: 'Soup of the Day', price: 40 } },
    { label: 'Garlic Bread 🥖 - R35', value: { name: 'Garlic Bread', price: 35 } },
    { label: 'Chicken Wings 🍗 - R55', value: { name: 'Chicken Wings', price: 55 } },
    { label: 'Ox Livers - R45', value: { name: 'Ox Livers', price: 45 } },
  ]);

  // Mains
  const [mainOpen, setMainOpen] = useState(false);
  const [main, setMain] = useState(null);
  const [mains, setMains] = useState([
    { label: 'Grilled Steak 🥩 - R120', value: { name: 'Grilled Steak', price: 120 } },
    { label: 'Chicken Alfredo 🍝 - R100', value: { name: 'Chicken Alfredo', price: 100 } },
    { label: 'Vegan Burger 🌱 - R90', value: { name: 'Vegan Burger', price: 90 } },
    { label: 'Pasta - R105', value: { name: 'Pasta', price: 105 } },
  ]);

  // Desserts
  const [dessertOpen, setDessertOpen] = useState(false);
  const [dessert, setDessert] = useState(null);
  const [desserts, setDesserts] = useState([
    { label: 'Chocolate Cake 🍫 - R45', value: { name: 'Chocolate Cake', price: 45 } },
    { label: 'Ice Cream 🍦 - R40', value: { name: 'Ice Cream', price: 40 } },
    { label: 'Fruit Salad 🍓 - R35', value: { name: 'Fruit Salad', price: 35 } },
  ]);

  const closeAll = () => {
    setStarterOpen(false);
    setMainOpen(false);
    setDessertOpen(false);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>🍴 Build Your Meal</Text>

        {/* Back to Home Button */}
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>← Back to Home</Text>
        </TouchableOpacity>

        {/* Starters */}
        <Text style={styles.label}>Starter</Text>
        <DropDownPicker
          open={starterOpen}
          value={starter}
          items={starters}
          setOpen={(open) => {
            closeAll();
            setStarterOpen(open);
          }}
          setValue={setStarter}
          setItems={setStarters}
          placeholder="Select a starter"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          zIndex={3000}
          zIndexInverse={1000}
        />

        {/* Mains */}
        <Text style={styles.label}>Main Course</Text>
        <DropDownPicker
          open={mainOpen}
          value={main}
          items={mains}
          setOpen={(open) => {
            closeAll();
            setMainOpen(open);
          }}
          setValue={setMain}
          setItems={setMains}
          placeholder="Select a main course"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          zIndex={2000}
          zIndexInverse={2000}
        />

        {/* Desserts */}
        <Text style={styles.label}>Dessert</Text>
        <DropDownPicker
          open={dessertOpen}
          value={dessert}
          items={desserts}
          setOpen={(open) => {
            closeAll();
            setDessertOpen(open);
          }}
          setValue={setDessert}
          setItems={setDesserts}
          placeholder="Select a dessert"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          zIndex={1000}
          zIndexInverse={3000}
        />

        {/* View Selection Button */}
        <TouchableOpacity
          style={[
            styles.button,
            (!starter || !main || !dessert) && styles.disabledButton,
          ]}
          onPress={() =>
            navigation.navigate('Display', { starter, main, dessert })
          }
          disabled={!starter || !main || !dessert}
        >
          <Text style={styles.buttonText}>View Selection</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 50 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 25 },
  label: { fontSize: 18, fontWeight: '600', color: '#fff', marginTop: 15, marginBottom: 5 },
  dropdown: { backgroundColor: '#f9f9f9', borderRadius: 10 },
  dropdownContainer: { borderRadius: 10 },
  button: {
    backgroundColor: '#ffb703',
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 25,
    alignItems: 'center',
  },
  secondaryButton: { backgroundColor: '#555', marginBottom: 20 },
  disabledButton: { backgroundColor: '#888' },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '600' },
});
