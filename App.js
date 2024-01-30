import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Home from "./src/Screens/Home";
import ItemListCategories from "./src/Screens/ItemListCategory";
import { ItemDetail } from "./src/Screens/ItemDetail";
import React, { useState } from "react";
import { Colors } from "./src/Global/Colors";

const App = () => {
  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(0);

  return (
    <>
      <StatusBar backgroundColor={Colors.blue1} />
      <SafeAreaView style={styles.container}>
        {categorySelected ? (
          productDetailId !== 0 ? (
            <ItemDetail
              productDetailId={productDetailId}
              setProductDetailId={setProductDetailId}
            />
          ) : (
            <ItemListCategories
              category={categorySelected}
              setCategorySelected={setCategorySelected}
              setProductDetailId={setProductDetailId}
            />
          )
        ) : (
          <Home setCategorySelected={setCategorySelected} />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
});
