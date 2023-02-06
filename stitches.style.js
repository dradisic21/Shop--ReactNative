import { css } from "stitches-native";

export const button = css({
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  elevation: 3,
  backgroundColor: "black",
  width: 341,
  height: 58,
});

export const text = css({
  variants: {
    color: {
      primary: {
        color: "#000",
        fontSize: 64,
        lineHeight: 49,
        fontWeight: '600',
        paddingTop: 15,
      },
      secondary: {
        color: "green",
      },
    },
  },
});
