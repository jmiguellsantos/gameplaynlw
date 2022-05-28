import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { BackGround } from "../components/Background";

import AuthRoutes from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
