---
title: transform-box
slug: Web/CSS/transform-box
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`transform-box`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Layout-Box, auf die sich die {{cssxref("transform")}}, individuelle Transform-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}, sowie die {{cssxref("transform-origin")}} Eigenschaften beziehen.

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

Die `transform-box` Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `content-box`
  - : Die Inhaltsbox wird als Referenzbox verwendet. Die Referenzbox eines {{htmlElement("table")}} ist die Rahmenbox seiner [Tabellenrahmenbox](/de/docs/Glossary/Table_Wrapper_Box), nicht seiner Tabellenbox.
- `border-box`
  - : Die Rahmenbox wird als Referenzbox verwendet. Die Referenzbox eines {{htmlElement("table")}} ist die Rahmenbox seiner [Tabellenrahmenbox](/de/docs/Glossary/Table_Wrapper_Box), nicht seiner Tabellenbox.
- `fill-box`
  - : Die Objektbegrenzungsbox wird als Referenzbox verwendet. Für Elemente mit einer zugehörigen CSS-Layout-Box wirkt sie wie `content-box`.
- `stroke-box`
  - : Die Strichbegrenzungsbox wird als Referenzbox verwendet. Für Elemente mit einer zugehörigen CSS-Layout-Box wirkt sie wie `border-box`.
- `view-box`
  - : Der nächste [SVG](/de/docs/Glossary/SVG) Viewport wird als Referenzbox verwendet. Wenn ein {{SVGAttr("viewBox")}} Attribut für das den SVG Viewport erzeugende Element angegeben ist, wird die Referenzbox am Ursprung des vom `viewBox` Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox auf die Breite und Höhe des `viewBox` Attributs gesetzt. Für Elemente mit einer zugehörigen CSS-Layout-Box wirkt sie wie `border-box`.

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

Im CSS haben wir eine Animation, die ein Transform verwendet, um das Rechteck unendlich zu drehen. `transform-box: fill-box` wird verwendet, um die `transform-origin` zum Zentrum der Begrenzungsbox zu machen, sodass sich das Rechteck an Ort und Stelle dreht. Ohne diese Einstellung ist der Transform-Ursprung das Zentrum der SVG-Leinwand, was zu einem sehr unterschiedlichen Effekt führt.

```css
svg {
  width: 80vh;
  border: 1px solid #d9d9d9;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#box {
  transform-origin: 50% 50%; /* anything other than `0 0` to see the effect */
  transform-box: fill-box;
  animation: rotateBox 3s linear infinite;
}

@keyframes rotateBox {
  to {
    transform: rotate(360deg);
  }
}
```

Vollständiger Dank für dieses Beispiel geht an [Pogany](https://codepen.io/giaco); sehen Sie sich [diesen Codepen](https://codepen.io/giaco/pen/OwowJQ) für eine Live-Version an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("transform")}}, {{cssxref("transform-origin")}}
- Individuelle Transform-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
