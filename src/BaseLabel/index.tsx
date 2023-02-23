import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TextStyle, View } from "react-native";
import { Color, ScreenUtils, ConstantStyles, TextStyles } from "../Themes";

/** Label is a non-interactive component to mark a label for an item or a screen */

export declare type LabelType = "INFO" | "GREEN" | "BLUE" | "RED" | "ORANGE";
export enum LabelTypes {
  INFO = "INFO",
  GREEN = "GREEN",
  BLUE = "BLUE",
  RED = "RED",
  ORANGE = "ORANGE",
}

export interface LabelProps {
  /** property using custom Icon View/Image View in the left */
  children?: React.ReactNode;
  /** property using custom Icon View/Image View in the left */
  labelType?: LabelType;
  /** property using show Value of label (*required)*/
  content: string;
  /** property using custom content Style */
  textStyles?: TextStyle;
}

const styles = StyleSheet.create({
  container: {
    height: ScreenUtils.scale(24),
    maxWidth: ScreenUtils.WIDTH_SCREEN,
    paddingHorizontal: ConstantStyles.spacing8,
    borderRadius: ConstantStyles.borderRadius4,
    borderWidth: 2 * StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
  },
  childrenView: {
    width: ConstantStyles.iconSizeSmall,
    height: ConstantStyles.iconSizeSmall,
    alignItems: "center",
    justifyContent: "center",
    marginRight: ConstantStyles.spacing4,
  },
  contentStyle: {
    maxWidth: (ScreenUtils.WIDTH_SCREEN / 10) * 8,
    ...TextStyles.text14,
    color: Color.white6,
  },
});

export const BaseLabel: FunctionComponent<LabelProps> = ({
  children,
  content,
  textStyles,
  labelType,
}) => {
  const getLabelColorType =
    labelType === LabelTypes.INFO
      ? Color.primary5s
      : labelType === LabelTypes.BLUE
      ? Color.blue5s
      : labelType === LabelTypes.GREEN
      ? Color.green5s
      : labelType === LabelTypes.ORANGE
      ? Color.orange5s
      : Color.red5s;
  return (
    <View
      style={{
        ...styles.container,
        borderColor: getLabelColorType,
        backgroundColor: getLabelColorType,
      }}
    >
      {children && <View style={styles.childrenView}>{children}</View>}
      <Text style={[styles.contentStyle, textStyles]} numberOfLines={1}>
        {content}
      </Text>
    </View>
  );
};

BaseLabel.defaultProps = {
  labelType: LabelTypes.INFO,
};