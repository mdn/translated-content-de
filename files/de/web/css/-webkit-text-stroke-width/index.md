---
title: "-webkit-text-stroke-width"
slug: Web/CSS/-webkit-text-stroke-width
l10n:
  sourceCommit: 6524cd024fcf544635f8dfb63102c669d4666cbd
---

{{CSSRef}}

Die **`-webkit-text-stroke-width`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Breite des Strichs für Text an.

## Syntax

```css
/* Schlüsselwortwerte */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* <length> Werte */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-width: 0.1em;
-webkit-text-stroke-width: 1mm;
-webkit-text-stroke-width: 5pt;

/* Globale Werte */
-webkit-text-stroke-width: inherit;
-webkit-text-stroke-width: initial;
-webkit-text-stroke-width: revert;
-webkit-text-stroke-width: revert-layer;
-webkit-text-stroke-width: unset;
```

### Werte

- `<line-width>`
  - : Die Breite des Strichs.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Unterschiedliche Strichstärken

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
<p id="thin">Dünner Strich</p>
<p id="medium">Mittlerer Strich</p>
<p id="thick">Dicker Strich</p>
```

#### Ergebnisse

{{EmbedLiveSample("Varying_stroke_widths", "450px", "230px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Surfin' Safari Blogpost, der diese Funktion ankündigt](https://webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks Artikel, der diese Funktion erklärt](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-text-fill-color")}}
