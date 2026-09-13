---
title: "`-webkit-text-stroke-width` CSS property"
short-title: -webkit-text-stroke-width
slug: Web/CSS/Reference/Properties/-webkit-text-stroke-width
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`-webkit-text-stroke-width`** legt die Breite der Kontur für Text fest.

## Syntax

```css
/* Keyword values */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* <length> values */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-width: 0.1em;
-webkit-text-stroke-width: 1mm;
-webkit-text-stroke-width: 5pt;

/* Global values */
-webkit-text-stroke-width: inherit;
-webkit-text-stroke-width: initial;
-webkit-text-stroke-width: revert;
-webkit-text-stroke-width: revert-layer;
-webkit-text-stroke-width: unset;
```

### Werte

Diese Eigenschaft wird als folgender Wert angegeben:

- `<line-width>`
  - : Die Breite der Kontur.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Variierende Konturbreiten

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-color: red;
}

#thin {
  -webkit-text-stroke-width: thin;
}

#medium {
  -webkit-text-stroke-width: 3px;
}

#thick {
  -webkit-text-stroke-width: 1.5mm;
}
```

#### HTML

```html
<p id="thin">Thin stroke</p>
<p id="medium">Medium stroke</p>
<p id="thick">Thick stroke</p>
```

#### Ergebnisse

{{EmbedLiveSample("Varying_stroke_widths", "450px", "230px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) auf webkit.org (2006)
- [CSS-Tricks-Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-text-fill-color")}}
