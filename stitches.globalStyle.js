import { css } from "stitches-native";


export const textFont = css({ 
  style: { 
    fontFamily: 'OpenSans-Regular',
  }
});

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
        fontWeight: "600",
        paddingTop: 15,
      },
      secondary: {
        color: "#000",
        fontSize: 32,
        lineHeight: 49,
        fontWeight: "600",
        paddingTop: 15,
      },
      link: {
        color: "#000",
        fontSize: 16,
        lineHeight: 49,
        fontWeight: "700",
      }
    },
  },
});

export const input = css({
  width: 341,
  height: 53,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  backgroundColor: "#fff",
  borderRadius: 10,
  borderColor: 'none',
  color: "#000",
  fontSize: 16,
  lineHeight: 22,
  fontWeight: "400",
});
