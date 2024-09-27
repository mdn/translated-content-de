---
title: "-webkit-text-fill-color"
slug: Web/CSS/-webkit-text-fill-color
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`-webkit-text-fill-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Füll-[Farbe](/de/docs/Web/CSS/color_value) der Zeichen eines Textes fest. Wenn diese Eigenschaft nicht gesetzt ist, wird der Wert der {{cssxref("color")}} Eigenschaft verwendet.

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
  - : Die Vordergrundfüllfarbe des Textinhalts des Elements.

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

- [Surfin' Safari Blogbeitrag zur Ankündigung dieses Features](https://webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks Artikel, der dieses Feature erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
