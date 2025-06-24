---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfades andere Teile überlappen, welche Pixel in einem Maskenfeld innerhalb der durch einen [clip path](/de/docs/Web/CSS/clip-path) definierten Form liegen und welche außerhalb.

Die `clip-rule` Eigenschaft gilt nur für SVG-Elemente, die sich in einem {{SVGElement("clipPath")}} Element befinden, und überschreibt den {{SVGAttr("clip-rule")}} Attributwert des Elements, falls vorhanden. Die `clip-rule` Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}} Eigenschaft, mit dem Unterschied, dass sie auf `<clipPath>` Definitionen angewendet wird. Sie hat keinen Einfluss auf CSS {{cssxref("basic-shape")}}s.

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

  - : Für jeden Punkt im Feld der Clipping-Maske wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl einen Teil des Clipping-Pfades schneidet, wird die Zählung um eins erhöht, wenn der Teil des Pfades von links nach rechts über den Strahl verläuft, und um eins verringert, wenn der Teil des Pfades von rechts nach links über den Strahl verläuft. Wenn die endgültige Zählung null ist, liegt der Punkt außerhalb der Pfadform. Andernfalls liegt er innerhalb der Pfadform.

- `even-odd`
  - : Für jeden Punkt im Feld der Clipping-Maske wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl einen Teil des Clipping-Pfades schneidet, wird die Zählung um eins erhöht. Wenn die endgültige Zählung gerade ist, liegt der Punkt außerhalb der Pfadform; andernfalls liegt er innerhalb der Pfadform. Null gilt als gerade.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertvergleich

In diesem Beispiel werden wir verschiedene CSS `clip-rule` Werte auf ähnliche SVG {{SVGElement("path")}} Elemente anwenden, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>` Container, von denen jeder ein `<clipPath>` Element enthält, das eine Sternform definiert, und ein `<rect>` Element, um den Stern darin zu zeichnen. Die Sterne werden mit überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>` Element und zeigt, wie die Linien des Pfades, der den Stern erzeugt hat, überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; `nonzero` im zweiten SVG. Für das SVG nur mit Pfad haben wir die Standard-{{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}} Farbe als auch {{cssxref("stroke-width")}} definiert, um die überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb von grundlegenden Formdefinitionen

Dieses Beispiel zeigt, dass, obwohl die `clip-rule` keinen Einfluss auf CSS {{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>` Elementen hinzu, die Sternformen definieren, die sich nur durch ihre `id` Attributwerte unterscheiden. Wir fügen auch zwei `<div>` Elemente hinzu, die unsere Sternformen enthalten werden.

```html
<svg height="0" width="0">
  <defs>
    <clipPath id="star1">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
    <clipPath id="star2">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
  </defs>
</svg>

<div></div>
<div></div>
```

#### CSS

Wir geben den `<div>` Elementen eine festgelegte {{cssxref("width")}} und {{cssxref("height")}}, und fügen einen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient) für ihren {{cssxref("background-image")}} Wert hinzu:

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

Wir verwenden die {{cssxref("clip-path")}} Eigenschaft, um die verschiedenen `<clipPath>` Elemente als Clipping-Pfad für jedes `<div>` festzulegen:

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

### Wahl zwischen Regeln für einen Pfad mit allen Uhrzeiger-Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Clipping-Regel zugeschnitten werden. Es gibt zwei {{SVGElement("clipPath")}} Elemente, sodass eines die non-zero Clipping-Regel verwenden kann und das andere die even-odd Regel. Beide Pfade werden im Uhrzeigersinn sowohl für ihre inneren als auch äußeren Teile gezeichnet.

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

Die CSS `clip-rule` Eigenschaft wird verwendet, um für die angewendeten Clipping-Pfade die nonzero Regel für einen Pfad festzulegen und die evenodd Regel für den anderen. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die entgegengesetzten Werte zu denen gesetzt wurden, die das CSS erzwingt.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sowohl die inneren als auch die äußeren Teile des Pfades in eine im Uhrzeigersinn gerichtete (von links nach rechts) Richtung verlaufen, wird die resultierende Clip-Form sich zwischen den beiden Clipping-Regeln unterscheiden. Für `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form auf einen Wert oberhalb von null bringen, da er auf eines oder mehrere links-nach-rechts verlaufende Pfadfragmente trifft. Für `even-odd` haben Punkte zwischen den beiden Teilen des Pfades eine ungerade, während jeder Punkt entweder innerhalb des inneren Pfades oder außerhalb des äußeren Teils eine gerade Anzahl aufweisen wird.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Wahl zwischen Regeln für einen Pfad mit unterschiedlichen Wicklungsrichtungen

Dieses Beispiel verwendet dasselbe SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Clipping-Pfades in einer gegen den Uhrzeigersinn verlaufenden Richtung verläuft.

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

Wir wenden dasselbe CSS wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall, da der äußere Teil des Pfades im Uhrzeigersinn (von links nach rechts) verläuft und der innere Teil des Pfades gegen den Uhrzeigersinn (von rechts nach links) verläuft, wird die resultierende Clip-Form unabhängig davon, welche Clipping-Regel verwendet wird, die gleiche sein.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [Einführung in CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS Masking](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- SVG {{SVGAttr("fill-rule")}} Attribut
