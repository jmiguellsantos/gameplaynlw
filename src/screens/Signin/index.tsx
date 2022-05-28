import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { style } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { BackGround } from "../../components/Background";

export function Signin() {
  const navigation = useNavigation<any>();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <BackGround>
      <View style={style.container}>
        <Image
          source={IllustrationImg}
          style={style.image}
          resizeMode="stretch"
        />
        <View style={style.content}>
          <Text style={style.title}>
            Conecte-se{"\n"}e organize suas {"\n"}jogatinas
          </Text>
          <Text style={style.subtitle}>
            Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com o Discord" onPress={handleSignIn} />
        </View>
      </View>
    </BackGround>
  );
}
