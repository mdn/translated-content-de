---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-face/font-family
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Der **`font-family`** [CSS](/de/docs/Web/CSS) Deskriptor legt die Schriftfamilie für eine Schriftart fest, die in einer {{cssxref("@font-face")}} At-Regel angegeben ist.

Der Wert wird für das Namensabgleich mit einem bestimmten `@font-face` verwendet, wenn Elemente unter Verwendung der {{cssxref("font-family")}} Eigenschaft gestylt werden.
Jeder Name kann verwendet werden und überschreibt jeden Namen, der in den zugrunde liegenden Schriftdaten angegeben ist.

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
