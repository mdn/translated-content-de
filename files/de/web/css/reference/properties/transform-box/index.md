---
title: "`transform-box` CSS property"
short-title: transform-box
slug: Web/CSS/Reference/Properties/transform-box
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`transform-box`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Layout-Box, auf die sich die {{cssxref("transform")}}-Eigenschaft, die individuellen Transformations-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, {{cssxref("rotate")}} und die {{cssxref("transform-origin")}}-Eigenschaften beziehen.

## Syntax

```css
/* Keyword values */
transform-box: content-box;
transform-box: border-box;
transform-box: fill-box;
transform-box: stroke-box;
transform-box: view-box;

/* Global values */
transform-box: inherit;
transform-box: initial;
transform-box: revert;
transform-box: revert-layer;
transform-box: unset;
```

Die `transform-box`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `content-box`
  - : Die Content-Box wird als Referenzbox verwendet. Die Referenzbox einer {{htmlElement("table")}} ist die Border-Box ihres {{Glossary("Table_Wrapper_Box", "Table-Wrapper-Box")}}, nicht ihrer Table-Box.
- `border-box`
  - : Die Border-Box wird als Referenzbox verwendet. Die Referenzbox einer {{htmlElement("table")}} ist die Border-Box ihres {{Glossary("Table_Wrapper_Box", "Table-Wrapper-Box")}}, nicht ihrer Table-Box.
- `fill-box`
  - : Die Objektumrandungs-Box wird als Referenzbox verwendet. Für Elemente mit zugeordnetem CSS-Layout-Box fungiert dies als `content-box`.
- `stroke-box`
  - : Die Strichbegrenzungs-Box wird als Referenzbox verwendet. Für Elemente mit zugeordnetem CSS-Layout-Box fungiert dies als `border-box`.
- `view-box`
  - : Der nächste {{Glossary("SVG", "SVG")}}-Viewport wird als Referenzbox verwendet. Wenn ein {{SVGAttr("viewBox")}}-Attribut für das SVG-Viewport-erzeugende Element angegeben ist, wird die Referenzbox am Ursprung des Koordinatensystems platziert, das durch das `viewBox`-Attribut festgelegt wird, und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox`-Attributs gesetzt. Für Elemente mit zugeordnetem CSS-Layout-Box fungiert dies als `border-box`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### SVG transform-origin Eingrenzung

In diesem Beispiel haben wir ein SVG:

```html
<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <g>
    <circle id="center" fill="red" r="1" transform="translate(25 25)" />
    <circle id="boxcenter" fill="blue" r=".5" transform="translate(15 15)" />
    <rect
      id="box"
      x="10"
      y="10"
      width="10"
      height="10"
      rx="1"
      ry="1"
      stroke="black"
      fill="none" />
  </g>
</svg>
```

In dem CSS haben wir eine Animation, die eine Transformation verwendet, um das Rechteck unendlich zu drehen. `transform-box: fill-box` wird verwendet, um das `transform-origin` das Zentrum der Begrenzungs-Box zu machen, damit sich das Rechteck an Ort und Stelle dreht. Ohne diese Einstellung ist das Transformationsursprung das Zentrum der SVG-Leinwand, was zu einem sehr unterschiedlichen Effekt führt.

```css
svg {
  width: 80vh;
  border: 1px solid #d9d9d9;
  position: absolute;
  margin: auto;
  inset: 0;
}

#box {
  transform-origin: 50% 50%; /* anything other than `0 0` to see the effect */
  transform-box: fill-box;
  animation: rotate-box 3s linear infinite;
}

@keyframes rotate-box {
  to {
    transform: rotate(360deg);
  }
}
```

{{EmbedLiveSample("SVG transform-origin scoping", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("transform")}}, {{cssxref("transform-origin")}}
- Individuelle Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
