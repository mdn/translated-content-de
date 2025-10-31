---
title: -webkit-text-stroke-color
slug: Web/CSS/Reference/Properties/-webkit-text-stroke-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`-webkit-text-stroke-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Strichfarbe der Textzeichen fest. Wenn diese Eigenschaft nicht gesetzt ist, wird der Wert der {{cssxref("color")}} Eigenschaft verwendet.

## Syntax

```css
/* <color> values */
-webkit-text-stroke-color: red;
-webkit-text-stroke-color: #e08ab4;
-webkit-text-stroke-color: rgb(200 100 0);

/* Global values */
-webkit-text-stroke-color: inherit;
-webkit-text-stroke-color: initial;
-webkit-text-stroke-color: revert;
-webkit-text-stroke-color: revert-layer;
-webkit-text-stroke-color: unset;
```

### Werte

- `<color>`
  - : Die Farbe der Umrandung.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Variierende Strichfarbe

#### HTML

```html
<p>Text with stroke</p>
<input type="color" value="#ff0000" />
```

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: red; /* Can be changed in the live sample */
}
```

```js hidden
const colorPicker = document.querySelector("input");
colorPicker.addEventListener("change", (evt) => {
  document.querySelector("p").style.webkitTextStrokeColor = evt.target.value;
});
```

#### Ergebnisse

{{EmbedLiveSample("Varying_the_stroke_color", "500px", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Introducing Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) auf webkit.org (2006)
- [CSS-Tricks Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-fill-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
