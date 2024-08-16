import type { ThemeToken } from "@yamada-ui/react"
import type { CSSProperties, UIProperties } from "."

type Tokens = Partial<Record<ThemeToken, (CSSProperties | UIProperties)[]>>

export const tokens: Tokens = {
  animations: ["animation"],
  blurs: ["blur", "backdropBlur"],
  borders: [
    "border",
    "borderTop",
    "borderLeft",
    "borderBottom",
    "borderRight",
    "borderY",
    "borderX",
    "borderInline",
    "borderInlineStart",
    "borderInlineEnd",
    "borderBlock",
    "borderBlockStart",
    "borderBlockEnd",
    "borderImage",
  ],
  colors: [
    "color",
    "fill",
    "floodColor",
    "lightingColor",
    "stroke",
    "background",
    "backgroundColor",
    "caretColor",
    "accentColor",
    "outlineColor",
    "textDecorationColor",
    "textEmphasisColor",
    "outlineColor",
    "scrollbarColor",
    "borderColor",
    "borderTopColor",
    "borderLeftColor",
    "borderBottomColor",
    "borderRightColor",
    "borderInlineColor",
    "borderInlineStartColor",
    "borderInlineEndColor",
    "borderBlockColor",
    "borderBlockStartColor",
    "borderBlockEndColor",
    "columnRuleColor",
  ],
  fontSizes: ["fontSize"],
  fontWeights: ["fontWeight"],
  fonts: ["fontFamily"],
  gradients: [
    "backgroundImage",
    "borderImageSource",
    "listStyleImage",
    "maskImage",
  ],
  letterSpacings: ["letterSpacing"],
  lineHeights: ["lineHeight"],
  radii: [
    "borderRadius",
    "borderTopRightRadius",
    "borderTopLeftRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderTopRadius",
    "borderBottomRadius",
    "borderRightRadius",
    "borderLeftRadius",
    "borderStartStartRadius",
    "borderStartEndRadius",
    "borderEndStartRadius",
    "borderEndEndRadius",
    "borderInlineStartRadius",
    "borderInlineEndRadius",
  ],
  shadows: ["boxShadow", "textShadow", "dropShadow", "backdropDropShadow"],
  sizes: [
    "width",
    "inlineSize",
    "height",
    "backfaceVisibility",
    "blockSize",
    "minWidth",
    "minInlineSize",
    "minHeight",
    "minBlockSize",
    "maxWidth",
    "maxInlineSize",
    "maxHeight",
    "maxBlockSize",
    "boxSize",
    "minBoxSize",
    "minBoxSize",
    "flexBasis",
    "columnWidth",
    "containIntrinsicWidth",
  ],
  spaces: [
    "margin",
    "marginTop",
    "marginBlockStart",
    "marginRight",
    "marginInlineEnd",
    "marginBottom",
    "marginBlockEnd",
    "marginLeft",
    "marginInlineStart",
    "marginInline",
    "marginBlock",
    "padding",
    "paddingTop",
    "paddingBlockStart",
    "paddingRight",
    "paddingBottom",
    "paddingBlockEnd",
    "paddingLeft",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingInline",
    "paddingBlock",
    "marginY",
    "marginX",
    "paddingY",
    "paddingX",
    "gap",
    "rowGap",
    "columnGap",
    "scrollMargin",
    "scrollMarginTop",
    "scrollMarginBottom",
    "scrollMarginLeft",
    "scrollMarginRight",
    "scrollMarginX",
    "scrollMarginY",
    "scrollPadding",
    "scrollPaddingTop",
    "scrollPaddingBottom",
    "scrollPaddingLeft",
    "scrollPaddingRight",
    "scrollPaddingX",
    "scrollPaddingY",
    "inset",
    "insetX",
    "insetInline",
    "insetY",
    "insetBlock",
    "top",
    "insetBlockStart",
    "bottom",
    "insetBlockEnd",
    "left",
    "insetInlineStart",
    "right",
    "insetInlineEnd",
    "translateX",
    "translateY",
  ],
  "transitions.property": ["transitionProperty"],
  "transitions.easing": ["transitionTimingFunction", "animationTimingFunction"],
  "transitions.duration": ["animationDuration", "transitionDuration"],
  zIndices: ["zIndex"],
}

export const tokenMap = Object.entries(tokens).reduce(
  (prev, [key, list]) => {
    list.forEach((item) => {
      prev[item] = key as ThemeToken
    })

    return prev
  },
  {} as Record<CSSProperties | UIProperties, ThemeToken>,
)
