---
title: "-webkit-text-stroke-color"
slug: Web/CSS/-webkit-text-stroke-color
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`-webkit-text-stroke-color`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Konturfarbe der Zeichen eines Textes an. Wenn diese Eigenschaft nicht gesetzt ist, wird der Wert der {{cssxref("color")}} Eigenschaft verwendet.

## Syntax

```css
/* <color> Werte */
-webkit-text-stroke-color: red;
-webkit-text-stroke-color: #e08ab4;
-webkit-text-stroke-color: rgb(200 100 0);

/* Globale Werte */
-webkit-text-stroke-color: inherit;
-webkit-text-stroke-color: initial;
-webkit-text-stroke-color: revert;
-webkit-text-stroke-color: revert-layer;
-webkit-text-stroke-color: unset;
```

### Werte

- `<color>`
  - : Die Farbe der Kontur.

## Offizielle Definition

{{CSSInfo}}

## Offizielles Syntax

{{csssyntax}}

## Beispiele

### Variieren der Konturfarbe

#### HTML

```html
<p>Text mit Kontur</p>
<input type="color" value="#ff0000" />
```

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ff0000; /* Kann im Live-Beispiel geändert werden */
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

- [Surfin' Safari Blogbeitrag, der diese Funktion ankündigt](https://webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-fill-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
