import { css } from "stitches-native";

export const container = css({
  backgroundColor: "#fff",
  height: '100%',
});

export const category = css({
  flexDirection: "row",
  justifyContent: "space-evenly",
});

export const title = css({ 
    fontSize: 32,
    lineHeight: 49,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 50,
    marginLeft: 24,
});
export const itemTitle = css({
  fontSize: 16,
  lineHeight: 22,
  fontWeight: "bold",
  justifyContent: 'flex-start'
});

export const button = css({
  paddingHorizontal: 24,
  paddingVertical: 8,
  backgroundColor: '#F2F2F2',
  borderRadius: 10,
});

export const buttonActive = css({
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: 10,
  });


export const buttonText = css({
  color: "#000000",
  fontWeight: "400",
  fontSize: 16,
  lineHeight: 22,
  alignItems: 'center',
});

export const buttonTextActive = css({
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
    alignItems: 'center',
  });

  export const list = css({
    flex: 1,
    marginTop: 15,
    justifyContent: "center"
});

  export const product = css({

    margin: 10,
    width: 161,
   
    alignItems: 'center',
});