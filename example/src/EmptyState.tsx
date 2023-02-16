import * as React from "react";

import { StyleSheet, View } from "react-native";
import { EmptyState, SnackBar } from "rn-janbox-design-system-v2";

export default function EmptyStateTab() {
  const [message, setMessage] = React.useState<string>("showSnackBar");
  return (
    <View style={styles.container}>
      <EmptyState
        title={"Title"}
        message={"Message"}
        buttonTitle={"Button"}
        buttonHandler={() => setMessage(message + "r")}
      />
      <SnackBar message={message} buttonName="Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});