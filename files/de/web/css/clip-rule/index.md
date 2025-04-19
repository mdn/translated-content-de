---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: b2a42ac2abd6aef7bd711c22502c5a0cef174795
---

{{CSSRef}}

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfads andere Teile überlappen, welche Pixel in einem Maskenfeld innerhalb der durch einen [clip path](/de/docs/Web/CSS/clip-path) definierten Clipform liegen und welche außerhalb.

Die `clip-rule` Eigenschaft gilt nur für SVG-Elemente, die sich innerhalb eines {{SVGElement("clipPath")}} Elements befinden und überschreibt den Wert des {{SVGAttr("clip-rule")}} Attributs des Elements, falls vorhanden. Die `clip-rule` Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}} Eigenschaft, außer dass sie auf `<clipPath>` Definitionen angewendet wird. Sie hat keinen Effekt auf CSS {{cssxref("basic-shape")}}s.

## Syntax

```css
/* Keywords */
clip-rule: nonzero;
clip-rule: evenodd;

/* Global values */
clip-rule: inherit;
clip-rule: initial;
clip-rule: revert;
clip-rule: revert-layer;
clip-rule: unset;
```

### Werte

- `nonzero`

  - : Für jeden Punkt im Feld der Clipping-Maske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl mit einem Teil des Clipping-Pfads schneidet, wird ein Zähler um eins erhöht, wenn sich der Teil des Clipping-Pfads von links nach rechts über den Strahl bewegt, während er um eins verringert wird, wenn sich der Teil von rechts nach links bewegt. Wenn die endgültige Summe des Zählers null ist, liegt der Punkt außerhalb der Form des Pfads. Andernfalls befindet er sich innerhalb der Form des Pfads.

- `even-odd`

  - : Für jeden Punkt im Feld der Clipping-Maske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl mit einem Teil des Clipping-Pfads schneidet, wird ein Zähler um eins erhöht. Ist die endgültige Summe des Zählers gerade, liegt der Punkt außerhalb der Form des Pfads; andernfalls befindet er sich innerhalb der Form des Pfads. Null wird als gerade betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertevergleich

In diesem Beispiel wenden wir verschiedene CSS `clip-rule` Werte auf ähnliche SVG {{SVGElement("path")}} Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>` Container, die jeweils ein `<clipPath>` Element enthalten, das eine Sternform definiert, sowie ein `<rect>` Element, um den Stern innen zu zeichnen. Die Sterne werden mit sich überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG Elemente identisch. Das dritte SVG enthält nur das `<path>` Element, das zeigt, wie sich die Linien des Pfads, die den Stern erstellt haben, überlappen.

```html
<svg>
  <clipPath id="star1">
    <path d="M50,0 21,90 98,35 2,35 79,90z" />
  </clipPath>
  <rect clip-path="url(#star1)" width="95" height="95" />
</svg>

<svg>
  <clipPath id="star2">
    <path d="M50,0 21,90 98,35 2,35 79,90z" />
  </clipPath>
  <rect clip-path="url(#star2)" width="95" height="95" />
</svg>

<svg id="star3">
  <path d="M50,0 21,90 98,35 2,35 79,90z" />
</svg>
```

#### CSS

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; `nonzero` im zweiten SVG. Für das SVG mit nur Pfad haben wir den Standardwert {{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}} Farbe als auch {{cssxref("stroke-width")}} definiert, um die sich überlappenden Pfadlinien sichtbar zu machen:

```css hidden
body {
  display: flex;
  gap: 20px;
}
svg {
  width: 110px;
  height: 110px;
}
```

```css
#star1 path {
  clip-rule: evenodd;
}

#star2 path {
  clip-rule: nonzero;
}

#star3 path {
  fill: none;
  stroke: #000;
  stroke-width: 1;
}
```

#### Ergebnisse

{{EmbedLiveSample("Value comparison", "", "130")}}

### Innerhalb von Grundform-Definitionen

Dieses Beispiel zeigt, dass obwohl `clip-rule` keinen Effekt auf CSS {{cssxref("basic-shape")}}s hat, es einen `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>` Elementen ein, die Sternformen definieren, die bis auf ihre `id` Attributwerte identisch sind. Wir fügen auch zwei `<div>` Elemente ein, die unsere Sternformen enthalten werden.

```html
<svg height="0" width="0">
  <defs>
    <clipPath id="star1">
      <path d="M100,0 42,180 196,70 4,70 158,180z">
    </clipPath>
    <clipPath id="star2">
      <path d="M100,0 42,180 196,70 4,70 158,180z">
    </clipPath>
  </defs>
</svg>

<div></div>
<div></div>
```

#### CSS

Wir geben den `<div>` Elementen eine festgelegte {{cssxref("width")}} und {{cssxref("height")}} und fügen einen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient) für ihren {{cssxref("background-image")}} Wert hinzu:

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

```css
div {
  height: 200px;
  width: 200px;
  background-image: conic-gradient(
    at center,
    rebeccapurple,
    green,
    lightblue,
    rebeccapurple
  );
}
```

Wir verwenden die {{cssxref("clip-path")}} Eigenschaft, um die verschiedenen `<clipPath>` Elemente als den Clipping-Pfad für jedes `<div>` festzulegen:

```css
div:first-of-type {
  clip-path: url(#star1);
}
div:last-of-type {
  clip-path: url(#star2);
}
```

Schließlich setzen wir die verschiedenen `clip-rule` Werte für jedes `<path>` der `<clipPath>` Elemente:

```css
#star1 path {
  clip-rule: evenodd;
}
#star2 path {
  clip-rule: nonzero;
}
```

#### Ergebnisse

{{EmbedLiveSample("Within basic shape definitions", "", "200")}}

### Wahl zwischen Regeln für einen Pfad mit allen im Uhrzeigersinn gerichteten Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die durch Clipping mit jeweils einer Clipping-Regel geschnitten werden. Es gibt zwei {{SVGElement("clipPath")}} Elemente, sodass eins für die Verwendung der non-zero Clipping-Regel festgelegt werden kann und das andere die even-odd Regel nutzt. Beide Pfade werden im Uhrzeigersinn sowohl für ihre inneren als auch äußeren Teile gezeichnet.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#123" fill="#BCD">
    <!-- basic rectangle and clipping path visualization follow -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- rectangles to be clipped follow -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- clipping paths follow -->
  <clipPath id="clipper1" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z"
      clip-rule="evenodd" />
  </clipPath>
  <clipPath id="clipper2" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z"
      clip-rule="nonzero" />
  </clipPath>
</svg>
```

Für die Clipping-Pfade, die auf die geschnittenen Rechtecke angewendet werden, wird die CSS `clip-rule` Eigenschaft verwendet, um einen Pfad auf die `nonzero` Regeln zu setzen und den anderen auf die `evenodd` Regel. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die entgegengesetzten Werte gesetzt wurden, wie sie durch CSS aufgezwungen werden.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sich sowohl die inneren als auch die äußeren Teile des Pfads im Uhrzeigersinn (von links nach rechts) bewegen, wird die resultierende Clipping-Form zwischen den beiden Clipping-Regeln unterschiedlich sein. Für `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form auf einen Wert über null summiert, da er ein oder mehrere von links nach rechts gerichtete Pfadfragmente begegnen wird. Für `even-odd` werden Punkte zwischen den beiden Teilen des Pfads eine ungerade Anzahl von Zählern haben, während jeder Punkt entweder innerhalb des inneren Pfads oder außerhalb des äußeren Teils eine gerade Anzahl von Zählern haben wird.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Wahl zwischen Regeln für einen Pfad mit unterschiedlichen Richtungspfaden

Dieses Beispiel verwendet das gleiche SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Clipping-Pfads in einer gegen den Uhrzeigersinn gerichteten Richtung verläuft.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#123" fill="#BCD">
    <!-- basic rectangle and clipping path visualization follow -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- rectangles to be clipped follow -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- clipping paths follow -->
  <clipPath id="clipper1" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l -0.33,0.33 0.33,0.33 0.33,-0.33 -0.33,-0.33 z" />
  </clipPath>
  <clipPath id="clipper2" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z" />
  </clipPath>
</svg>
```

Wir wenden dieselbe CSS an wie zuvor.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall wird die resultierende Clipping-Form wegen des äußeren Teils des Pfads, der sich im Uhrzeigersinn (von links nach rechts) und des inneren Teils des Pfads, der sich gegen den Uhrzeigersinn (von rechts nach links) bewegt, unabhängig davon, welche Clipping-Regel verwendet wird, gleich sein.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [CSS masking](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- SVG {{SVGAttr("fill-rule")}} Attribut
