import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, Image, View } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type ButtonProps = RectButtonProps & {
  title: string;
};
export function ButtonIcon({ title, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}></Image>
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
