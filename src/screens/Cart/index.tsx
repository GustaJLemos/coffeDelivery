import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { CoffeCardAddedToCart } from '../../components/CoffeCardAddedToCart';
import { Trash } from 'phosphor-react-native'
import { THEME } from '../../theme';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '../../routes/types/AppRoutesNavigationProps';
import { useCartStore } from '../../store/cartStore';
import { calculateItemPrices } from '../../utils/calculateItemPrices';

export function Cart() {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const coffeAddedToCart = useCartStore((state) => state.coffeAddedToCart);

  function handleNavigateToFinishPurchase() {
    navigation.navigate('FinishPurchaseScreen')
  }

  useEffect(() => {
    setTotalPrice(calculateItemPrices(coffeAddedToCart));
  }, [coffeAddedToCart])

  // TODO terminar função de deletar itens

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        goBack
        title='Carrinho'
        showCart={false}
      />
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {coffeAddedToCart.map((item) => (
          <CoffeCardAddedToCart
            key={item.id}
            coffe={item}
          />
        ))}
      </ScrollView>
      {/* TODO fazer função de deletar */}
      {/* <View style={styles.excludeContainer}>
        <Trash size={28} color={THEME.colors.feedback.red_dark} />
      </View> */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomText}>
          <Text style={styles.finalValue}>
            Valor total
          </Text>
          <Text style={styles.finalPrice}>
            R$ {totalPrice ? totalPrice : '**.**'}
          </Text>
        </View>

        <Button
          title='Confirmar pedido'
          type='yellow'
          onPress={handleNavigateToFinishPurchase}
        />
      </View>
    </View>
  );
} 