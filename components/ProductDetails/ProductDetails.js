import { View, Text, Image, SafeAreaView, TouchableOpacity} from "react-native";
  import React, { useState, useEffect } from "react";
  import {
   container, title, image, titleProduct, description, button, buttonText, footer } from "./stitches.productsDetails";
  import { useRoute, useNavigation } from "@react-navigation/native";
  import { getProduct } from "../../Api.js";
  
  function ProductDetails() {
    const [product, setProduct] = useState({});
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await getProduct(route.params.productId);
          setProduct(response.data);
        } catch (err) {
          setProduct(null);
        }
      };
      fetchProduct();
    }, []);

    return (
        <SafeAreaView style={container}>
          <View>
            <Text style={title}>Details</Text>
          </View>
          {product && (
            <View>
              <View style={image}>
              <Image
                source={{ uri: product.image }}
                style={{ width: 341, height: 368 }}
              />
              </View>
              <View>
                <Text style={titleProduct}>{product.title}</Text>
                <Text style={description}>{product.description}</Text>
                
              </View>
              <View style={footer}>
                <Text>{product.price} $</Text>
              <View>
                <TouchableOpacity 
                  style={button}>
                  <Text style={buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
              </View>
            </View>
          )}
      </SafeAreaView>
      );
    }

  export default ProductDetails;