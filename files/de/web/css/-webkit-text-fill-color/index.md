---
title: -webkit-text-fill-color
slug: Web/CSS/-webkit-text-fill-color
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Die **`-webkit-text-fill-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Füll-[Farbe](/de/docs/Web/CSS/color_value) der Zeichen von Text fest. Wenn diese Eigenschaft nicht gesetzt ist, wird der Wert der {{cssxref("color")}}-Eigenschaft verwendet.

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

- `<color>`
  - : Die Vordergrundfarbe des Textinhalts des Elements.

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
- [CSS-Tricks-Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
