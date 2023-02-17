import { css } from "stitches-native";

export const container = css({
  backgroundColor: "#fff",
  height: '100%',
  
});

export const title = css({ 
    fontSize: 24,
    lineHeight: 49,
    fontWeight: "600",
    textAlign: 'center',
});

export const titleProduct = css({ 
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600",
    marginHorizontal: 24,
});

export const description = css({ 
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    marginHorizontal: 24,
});

export const image = css({
    justifyContent: 'center',
    alignItems: 'center'
})

export const button = css({
    backgroundColor: '#000000',
    borderRadius: 10,
    width: 191,
    height: 58,
})

export const buttonText = css({
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    
})

export const footer = css({
    justifyContent: 'flex-end'
})
