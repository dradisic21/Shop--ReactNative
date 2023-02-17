import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  container,
  category,
  title,
  itemTitle,
  list,
  product,
  button,
  buttonActive,
  buttonText,
  buttonTextActive,
} from "./stitches.products";
import { useNavigation } from "@react-navigation/native";
import { getAllProducts } from "../../Api";

function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const showProduct = (productId) => {
    navigation.navigate("ProductDetails", { productId });
  };
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products && products.filter((p) => p.category === activeCategory);

  return (
    <View style={container}>
      <View>
        <Text style={title}>Discover</Text>
      </View>
      <View style={category}>
        <TouchableOpacity
          onPress={() => handleCategoryClick("All")}
          style={activeCategory === "All" ? buttonActive : button}
        >
          <Text
            style={activeCategory === "All" ? buttonTextActive : buttonText}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategoryClick("men's clothing")}
          style={activeCategory === "men's clothing" ? buttonActive : button}
        >
          <Text
            style={
              activeCategory === "men's clothing"
                ? buttonTextActive
                : buttonText
            }
          >
            Men
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategoryClick("women's clothing")}
          style={activeCategory === "women's clothing" ? buttonActive : button}
        >
          <Text
            style={
              activeCategory === "women's clothing"
                ? buttonTextActive
                : buttonText
            }
          >
            Woman
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCategoryClick("electronics")}
          style={activeCategory === "electronics" ? buttonActive : button}
        >
          <Text
            style={
              activeCategory === "electronics" ? buttonTextActive : buttonText
            }
          >
            Kids
          </Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={list}>
        <FlatList
          style={{ alignSelf: "center" }}
          data={filteredProducts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => showProduct(item.id)}
              style={product}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 161, height: 174 }}
              />
              <View>
                <Text style={itemTitle}>{item.title}</Text>
                <Text>{item.price} $</Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
}

export default Products;
