import type React from "react";
import type { GestureResponderEvent, ViewStyle } from "react-native";

/*
  Why use bottom sheet:
  Grab user attention
  Simplify UI and save screen real estate
  Allow user easily access different subtask or view more
*/
export interface BottomSheetProps {
  isVisible: boolean;
  headerTitle: string;
  containerStyle?: ViewStyle;
  children: React.ReactNode | JSX.Element;
  headerLeftView?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  headerRightView?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  onCloseModal?: (() => void) | undefined;
  headerLeftOnPress?: ((event: GestureResponderEvent) => void) | undefined;
  headerRightOnPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export interface BottomSheetRef {}