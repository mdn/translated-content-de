---
title: transform-box
slug: Web/CSS/transform-box
l10n:
  sourceCommit: c1d49528ebc8d41dd9b99251c92ef112d00a9a5c
---

{{CSSRef}}

Die **`transform-box`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Layout-Box, auf die sich die {{cssxref("transform")}}, individuelle Transformations-Eigenschaften wie {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}, sowie die {{cssxref("transform-origin")}} Eigenschaften beziehen.

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

Die `transform-box` Eigenschaft wird als einer der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `content-box`
  - : Die Inhaltsbox wird als Referenzbox verwendet. Die Referenzbox eines {{htmlElement("table")}} ist die Rahmenbox ihrer {{Glossary("Table_Wrapper_Box", "Tabellen-Wrapper-Box")}}, nicht ihre Tabellenbox.
- `border-box`
  - : Die Rahmenbox wird als Referenzbox verwendet. Die Referenzbox eines {{htmlElement("table")}} ist die Rahmenbox ihrer {{Glossary("Table_Wrapper_Box", "Tabellen-Wrapper-Box")}}, nicht ihre Tabellenbox.
- `fill-box`
  - : Die Objekt-Begrenzungsbox wird als Referenzbox verwendet. Für Elemente mit zugehöriger CSS-Layout-Box fungiert dies als `content-box`.
- `stroke-box`
  - : Die Stroke-Begrenzungsbox wird als Referenzbox verwendet. Für Elemente mit zugehöriger CSS-Layout-Box fungiert dies als `border-box`.
- `view-box`
  - : Der nächste {{Glossary("SVG", "SVG")}} Viewport wird als Referenzbox verwendet. Wenn ein {{SVGAttr("viewBox")}} Attribut für das SVG Viewport erstellende Element angegeben ist, wird die Referenzbox am Ursprung des durch das `viewBox` Attribut festgelegten Koordinatensystems positioniert, und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox` Attributs gesetzt. Für Elemente mit zugehöriger CSS-Layout-Box fungiert dies als `border-box`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### SVG transform-origin Begrenzung

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

Im CSS haben wir eine Animation, die ein Transform verwendet, um das Rechteck unendlich zu rotieren. `transform-box: fill-box` wird verwendet, um den `transform-origin` auf die Mitte der Begrenzungsbox zu setzen, sodass sich das Rechteck an Ort und Stelle dreht. Ohne diese Einstellung ist der Transformationsursprung die Mitte der SVG-Leinwand, was einen sehr unterschiedlichen Effekt ergibt.

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

{{EmbedLiveSample("SVG transform-origin Begrenzung", "", 400)}}

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
