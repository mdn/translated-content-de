---
title: font-family
slug: Web/CSS/@font-face/font-family
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`font-family`** CSS-Deskriptor legt die Schriftfamilie für eine Schriftart fest, die in einer {{cssxref("@font-face")}} At-Regel angegeben ist.

Der Wert wird zum Namensabgleich mit einem bestimmten `@font-face` verwendet, wenn Elemente mit der [`font-family`](/de/docs/Web/CSS/font-family) Eigenschaft gestaltet werden. Jeder Name kann verwendet werden und überschreibt jeden im zugrunde liegenden Schriftartendaten angegebenen Namen.

## Syntax

```css
/* <string> values */
font-family: "font family";
font-family: "another font family";

/* <custom-ident> value */
font-family: example-font;
```

### Werte

- `<family-name>`
  - : Legt den Namen der Schriftfamilie fest.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Schriftfamiliennamens

```css
@font-face {
  font-family: "Some font family";
  src: url("some_font_name.ttf");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
