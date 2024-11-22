import "react-navigation";

export type RootStackParamList = {
    Register: undefined;
    Login: undefined;
    Home: { email: string };
  };


  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }