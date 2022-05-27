import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { style } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { StatusBar } from "expo-status-bar";
import { ButtonIcon } from "../../components/ButtonIcon";

export function Signin() {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <Image
        source={IllustrationImg}
        style={style.image}
        resizeMode="stretch"
      />
      <View style={style.content}>
        <Text style={style.title}>
          Organize {`\n`} suas jogatinas{`\n`} facilmente!
        </Text>
        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
