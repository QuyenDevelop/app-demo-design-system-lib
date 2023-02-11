import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Color, StylesConstant, TextStyles } from "../Themes";
import { Images } from "../assets/Images";
import { styles } from "./styles";
import { ButtonProps, ButtonSizes, ButtonTypes, IconColor } from "./types";

const Button: React.FunctionComponent<ButtonProps> = ({
  width,
  isLoading,
  isDisabled,
  name,
  contentStyles,
  containerStyle,
  children,
  buttonLeftView,
  buttonRightView,
  onPress,
  onBlur,
  onFocus,
  buttonStyle = ButtonTypes.PRIMARY,
  buttonSize = ButtonSizes.LARGE,
}) => {
  /** get Button Height size */
  const getSize =
    buttonSize === ButtonSizes.SMALL_SPECIAL ||
    buttonSize === ButtonSizes.SMALL ||
    width === StylesConstant.sizeSmall
      ? StylesConstant.sizeSmall
      : buttonSize === ButtonSizes.MEDIUM
      ? StylesConstant.sizeMedium
      : StylesConstant.sizeLarge;

  /** get Button background color */
  const getBackgroundColor =
    buttonStyle === ButtonTypes.SECONDARY_ONE
      ? Color.primary1s
      : buttonStyle === ButtonTypes.SECONDARY_TWO
      ? Color.red1s
      : Color.primary6s;

  /** get Button icon background color */
  const getButtonRightBGColor =
    buttonStyle === ButtonTypes.SECONDARY_ONE
      ? Color.primary6s
      : buttonStyle === ButtonTypes.SECONDARY_TWO
      ? Color.red6s
      : Color.white6;

  /** get Button icon styles */
  const getButtonRightStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled ? Color.black5s : getButtonRightBGColor,
          borderRadius: StylesConstant.borderRadius4,
          width: StylesConstant.iconSizeSmall,
          height: StylesConstant.iconSizeSmall,
        }
      : {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled ? Color.black5s : getButtonRightBGColor,
          borderRadius: StylesConstant.borderRadius8,
          width: StylesConstant.iconSizeMedium,
          height: StylesConstant.iconSizeMedium,
        };

  /** get Button Loading styles */
  const getButtonLoadingStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.ButtonLeftStyles,
          width: StylesConstant.iconSizeSmall,
          height: StylesConstant.iconSizeSmall,
        }
      : {
          ...styles.ButtonLeftStyles,
          width: StylesConstant.iconSizeMedium,
          height: StylesConstant.iconSizeMedium,
        };

  /** get Button Content Text styles */
  const getButtonContentStyle =
    buttonSize === ButtonSizes.SMALL_SPECIAL
      ? {
          ...styles.textStyle,
          ...TextStyles.text14,
          color: isDisabled ? Color.black5s : getButtonRightBGColor,
          maxWidth: (width && width - StylesConstant.spacing12) || undefined,
        }
      : {
          ...styles.textStyle,
          ...TextStyles.text16,
          color: isDisabled ? Color.black5s : getButtonRightBGColor,
          maxWidth: (width && width - StylesConstant.spacing12) || undefined,
        };

  return (
    <TouchableOpacity
      style={
        isDisabled
          ? {
              ...styles.disableStyle,
              maxHeight: getSize,
              height: getSize,
              minHeight: getSize,
              minWidth: getSize,
              width: width,
              maxWidth: width,
            }
          : {
              ...styles.enableStyle,
              maxHeight: getSize,
              height: getSize,
              minHeight: getSize,
              backgroundColor: getBackgroundColor,
              minWidth: getSize,
              width: width,
              maxWidth: width,
            }
      }
      activeOpacity={1}
      onPress={onPress}
      disabled={isDisabled}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <View style={[styles.contentStyle, containerStyle]}>
        {buttonLeftView && !isLoading && (
          <View style={getButtonRightStyle}>{buttonLeftView}</View>
        )}
        {isLoading && (
          <Image
            source={Images.loading}
            style={getButtonLoadingStyle}
            resizeMode="cover"
          />
        )}
        {children
          ? children
          : name && (
              <Text
                style={[getButtonContentStyle, contentStyles]}
                numberOfLines={1}
              >
                {name}
              </Text>
            )}
        {buttonRightView && (
          <View style={getButtonRightStyle}>{buttonRightView}</View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const IconButton: React.FunctionComponent<ButtonProps> = ({
  children,
  onPress,
  width = StylesConstant.iconSizeLarge,
  iconColor = IconColor.LIGHT,
}) => {
  // const iconSize =
  //   width > StylesConstant.iconSizeLarge
  //     ? StylesConstant.iconSizeMedium
  //     : StylesConstant.iconSizeSmall;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: width,
        height: width,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: width / 2,
        backgroundColor: Color.black3s,
        overflow: "hidden",
      }}
    >
      {children || (
        <Image
          source={
            iconColor === IconColor.LIGHT ? Images.icCloseWhite : Images.icClose
          }
          resizeMode="center"
        />
      )}
    </TouchableOpacity>
  );
};

const IconButtonClear: React.FunctionComponent<ButtonProps> = ({
  onPress,
  iconColor = IconColor.LIGHT,
}) => {
  return (
    <IconButton width={StylesConstant.iconSizeSmall} onPress={onPress}>
      <Image
        source={
          iconColor === IconColor.LIGHT
            ? Images.icCloseWhite2
            : Images.icCloseDark2
        }
        resizeMode="center"
      />
    </IconButton>
  );
};

export {
  Button,
  ButtonProps,
  IconButton,
  IconButtonClear,
  ButtonTypes,
  ButtonSizes,
  IconColor,
};
