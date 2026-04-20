---
title: "`font-family` CSS At-Regel Deskriptor"
short-title: font-family
slug: Web/CSS/Reference/At-rules/@font-face/font-family
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`font-family`** [CSS](/de/docs/Web/CSS) Deskriptor legt die Schriftfamilie für eine in einer {{cssxref("@font-face")}} At-Regel angegebene Schriftart fest.

Der Wert wird für die Namensübereinstimmung mit einer bestimmten `@font-face` verwendet, wenn Elemente mit der {{cssxref("font-family")}} Eigenschaft gestaltet werden. Jeder Name kann verwendet werden und überschreibt jeden im zugrunde liegenden Schriftartdaten angegebener Name.

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
