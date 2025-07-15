---
title: -webkit-text-fill-color
slug: Web/CSS/-webkit-text-fill-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`-webkit-text-fill-color`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Füll-[Farbe](/de/docs/Web/CSS/color_value) der Zeichen eines Textes. Wenn diese Eigenschaft nicht gesetzt ist, wird der Wert der {{cssxref("color")}} Eigenschaft verwendet.

## Syntax

```css
/* <color> values */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #000000;
-webkit-text-fill-color: rgb(100 200 0);

/* Global values */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: revert;
-webkit-text-fill-color: revert-layer;
-webkit-text-fill-color: unset;
```

### Werte

- `<color>`
  - : Die Vordergrundfarbe der Füllung des Textinhalts des Elements.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ändern der Füllfarbe

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  -webkit-text-fill-color: green;
}
```

#### HTML

```html
<p>This text is green.</p>
```

#### Ergebnisse

{{EmbedLiveSample("Changing_the_fill_color", "380px", "60px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Introducing Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) auf webkit.org (2006)
- [CSS-Tricks Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
