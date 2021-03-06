import React from "react";

import { ScrollView } from "react-native-gesture-handler";

import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from "./styles";
type Props = {
  categorySelected: string;
};
export function CategorySelect({ categorySelected }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={{ paddingRight: 40 }}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
        />
      ))}
    </ScrollView>
  );
}
