---
title: "`-webkit-text-fill-color` CSS property"
short-title: -webkit-text-fill-color
slug: Web/CSS/Reference/Properties/-webkit-text-fill-color
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die **`-webkit-text-fill-color`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die Füllfarbe ([color](/de/docs/Web/CSS/Reference/Values/color_value)) von Textzeichen fest. Wenn diese Eigenschaft nicht gesetzt ist, wird der Wert der Eigenschaft {{cssxref("color")}} verwendet.

## Syntax

```css
/* <color> values */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #123456;
-webkit-text-fill-color: rgb(100 200 0);

/* Global values */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: revert;
-webkit-text-fill-color: revert-layer;
-webkit-text-fill-color: unset;
```

### Werte

Diese Eigenschaft wird durch einen einzelnen `<color>`-Wert angegeben:

- `<color>`
  - : Die Füllfarbe des Textinhalts im Vordergrund des Elements.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Füllfarbe ändern

#### HTML

```html
<p>This text is green.</p>
```

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  -webkit-text-fill-color: green;
}
```

#### Ergebnis

{{EmbedLiveSample("Changing_the_fill_color", "380px", "60px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) auf webkit.org (2006)
- [CSS-Tricks-Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
