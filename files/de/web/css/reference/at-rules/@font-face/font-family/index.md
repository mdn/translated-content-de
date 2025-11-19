---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-face/font-family
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Der **`font-family`** [CSS](/de/docs/Web/CSS) Deskriptor legt die Schriftfamilie für eine im {{cssxref("@font-face")}} At-Regel angegebene Schriftart fest.

Der Wert wird für die Namensübereinstimmung verwendet, wenn Elemente mit der [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family) Eigenschaft gestylt werden.
Jeder Name kann verwendet werden, und dieser überschreibt jeden in den zugrunde liegenden Schriftartdaten angegebenen Namen.

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
  - : Gibt den Namen der Schriftfamilie an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Namen der Schriftfamilie festlegen

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
