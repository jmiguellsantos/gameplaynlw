import React from "react";

import { View } from "react-native";
import { BackGround } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home() {
  return (
    <BackGround>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
        <View>
          <CategorySelect />
        </View>
      </View>
    </BackGround>
  );
}
