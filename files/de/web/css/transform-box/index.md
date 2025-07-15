---
title: transform-box
slug: Web/CSS/transform-box
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`transform-box`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Layout-Box, auf die sich die {{cssxref("transform")}}-Eigenschaft, die individuellen Transformations-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}, sowie die {{cssxref("transform-origin")}}-Eigenschaften beziehen.

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

Die `transform-box`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `content-box`
  - : Die Content-Box wird als Referenz-Box verwendet. Die Referenz-Box eines {{htmlElement("table")}} ist die Rahmen-Box ihres {{Glossary("Table_Wrapper_Box", "Tabellenumschlags")}}, nicht ihre Tabellen-Box.
- `border-box`
  - : Die Rahmen-Box wird als Referenz-Box verwendet. Die Referenz-Box eines {{htmlElement("table")}} ist die Rahmen-Box ihres {{Glossary("Table_Wrapper_Box", "Tabellenumschlags")}}, nicht ihre Tabellen-Box.
- `fill-box`
  - : Die Objektbegrenzungsbox wird als Referenz-Box verwendet. Für Elemente mit zugeordnetem CSS-Layout-Box verhält sie sich wie `content-box`.
- `stroke-box`
  - : Die Umrissbegrenzungsbox wird als Referenz-Box verwendet. Für Elemente mit zugeordnetem CSS-Layout-Box verhält sie sich wie `border-box`.
- `view-box`
  - : Der nächstgelegene {{Glossary("SVG", "SVG")}}-Viewport wird als Referenz-Box verwendet. Wenn ein {{SVGAttr("viewBox")}}-Attribut für das SVG-Viewport-erstellende Element angegeben ist, wird die Referenz-Box am Ursprung des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenz-Box auf die Breite und Höhe des `viewBox`-Attributs eingestellt. Für Elemente mit zugeordnetem CSS-Layout-Box verhält sie sich wie `border-box`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### SVG transform-origin Bereich

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

Im CSS haben wir eine Animation, die eine Transformation verwendet, um das Rechteck unendlich zu drehen. `transform-box: fill-box` wird verwendet, um den `transform-origin` auf das Zentrum der Begrenzungsbox zu setzen, sodass das Rechteck an Ort und Stelle rotiert. Ohne diese Einstellung ist der Transformationsursprung das Zentrum der SVG-Leinwand, was einen ganz anderen Effekt ergibt.

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

{{EmbedLiveSample("SVG transform-origin Bereich", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("transform")}}, {{cssxref("transform-origin")}}
- Individuelle Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
