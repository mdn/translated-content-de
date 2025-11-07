---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-face/font-family
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`font-family`** [CSS](/de/docs/Web/CSS) Deskriptor setzt die Schriftfamilie für eine Schrift, die in einem {{cssxref("@font-face")}} At-Regel angegeben ist.

Der Wert wird für das Namensmatching gegen ein bestimmtes `@font-face` verwendet, wenn Elemente mit der [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family) Eigenschaft gestylt werden. Jeder Name kann verwendet werden, und dies überschreibt jeden Namen, der in den zugrundeliegenden Schriftdaten angegeben ist.

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
