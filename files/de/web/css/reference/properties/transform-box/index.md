---
title: transform-box
slug: Web/CSS/Reference/Properties/transform-box
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`transform-box`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Layout-Box, auf die sich die {{cssxref("transform")}}, einzelne Transformations-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}, sowie {{cssxref("transform-origin")}} beziehen.

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

Die `transform-box` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `content-box`
  - : Die Inhaltsbox wird als Referenzbox verwendet. Die Referenzbox eines {{htmlElement("table")}} ist die Rahmenbox ihrer {{Glossary("Table_Wrapper_Box", "Tisch-Wrapper-Box")}}, nicht ihre Tabellenbox.
- `border-box`
  - : Die Rahmenbox wird als Referenzbox verwendet. Die Referenzbox eines {{htmlElement("table")}} ist die Rahmenbox ihrer {{Glossary("Table_Wrapper_Box", "Tisch-Wrapper-Box")}}, nicht ihre Tabellenbox.
- `fill-box`
  - : Die Begrenzungsbox des Objekts wird als Referenzbox verwendet. Für Elemente mit zugehöriger CSS-Layout-Box fungiert sie als `content-box`.
- `stroke-box`
  - : Die Begrenzungsbox des Strichs wird als Referenzbox verwendet. Für Elemente mit zugehöriger CSS-Layout-Box fungiert sie als `border-box`.
- `view-box`
  - : Das nächste {{Glossary("SVG", "SVG")}} Viewport wird als Referenzbox verwendet. Wenn ein {{SVGAttr("viewBox")}} Attribut für das SVG-Viewport-erzeugende Element angegeben ist, wird die Referenzbox am Ursprung des Koordinatensystems positioniert, das durch das `viewBox` Attribut etabliert wird, und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox` Attributs gesetzt. Für Elemente mit zugehöriger CSS-Layout-Box fungiert sie als `border-box`.

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

Im CSS haben wir eine Animation, die eine Transformation verwendet, um das Rechteck unendlich zu drehen. `transform-box: fill-box` wird verwendet, um den `transform-origin` zum Mittelpunkt der Begrenzungsbox zu machen, sodass sich das Rechteck an Ort und Stelle dreht. Ohne dies ist der Transformationsursprung der Mittelpunkt der SVG-Leinwand, und so erhalten Sie einen ganz anderen Effekt.

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
- Einzelne Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
