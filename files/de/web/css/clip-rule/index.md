---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfades andere Teile überlappen, welche Pixel in einem Maskenfeld innerhalb der durch einen [clip path](/de/docs/Web/CSS/clip-path) definierten Clipform sind und welche außerhalb.

Die `clip-rule` Eigenschaft gilt nur für SVG-Elemente, die in einem {{SVGElement("clipPath")}} Element enthalten sind und sie überschreibt den Wert des {{SVGAttr("clip-rule")}} Attributs des Elements, falls vorhanden. Die `clip-rule` Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}} Eigenschaft, außer dass sie auf `<clipPath>` Definitionen angewendet wird. Sie hat keine Auswirkungen auf CSS {{cssxref("basic-shape")}}s.

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
  - : Für jeden Punkt im Feld der Clipmaske wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl mit einem Teil des Clip-Pfades schneidet, wird ein Zähler um eins erhöht, wenn sich der betreffende Teil des Clip-Pfades von links nach rechts über den Strahl bewegt, und verringert um eins, wenn sich der Pfadteil von rechts nach links bewegt. Sollte die endgültige Höhe des Zählers null sein, befindet sich der Punkt außerhalb der Pfadform. Andernfalls ist er innerhalb der Pfadform.

- `even-odd`
  - : Für jeden Punkt im Feld der Clipmaske wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl mit einem Teil des Clip-Pfades schneidet, wird ein Zähler um eins erhöht. Ist die endgültige Summe des Zählers gerade, befindet sich der Punkt außerhalb der Pfadform; andernfalls ist er innerhalb der Pfadform. Null wird als gerade betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertvergleich

In diesem Beispiel wenden wir unterschiedliche CSS `clip-rule` Werte auf ähnliche SVG {{SVGElement("path")}}-Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>` Container, jeder mit einem `<clipPath>` Element, das eine Sternform definiert, und einem `<rect>` Element, das den Stern innerhalb zeichnet. Die Sterne werden mit überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>` Element, um zu zeigen, wie die Linien des Pfads, die den Stern erstellt haben, sich überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG wird auf `evenodd` gesetzt; `nonzero` im zweiten SVG. Für das SVG nur mit Pfad haben wir die Standard-{{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}} Farbe als auch {{cssxref("stroke-width")}} definiert, um die überlappenden Pfadlinien sichtbar zu machen:

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
  stroke: black;
  stroke-width: 1;
}
```

#### Ergebnisse

{{EmbedLiveSample("Value comparison", "", "130")}}

### Innerhalb von Basisformdefinitionen

Dieses Beispiel zeigt, dass die `clip-rule` zwar keine Wirkung auf CSS {{cssxref("basic-shape")}}s hat, sie jedoch ein `<clipPath>`, das als Quelle einer Form verwendet wird, beeinflussen kann.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>` Elementen ein, die Sternformen definieren, welche bis auf die Werte ihres `id` Attributs identisch sind. Wir fügen auch zwei `<div>` Elemente ein, die unsere Sternformen enthalten werden.

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

Wir geben den `<div>` Elementen eine festgelegte {{cssxref("width")}} und {{cssxref("height")}}, indem wir für den Wert ihrer {{cssxref("background-image")}} ein [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient) hinzufügen:

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

Wir verwenden die {{cssxref("clip-path")}} Eigenschaft, um die unterschiedlichen `<clipPath>` Elemente als Clip-Pfad für jedes `<div>` festzulegen:

```css
div:first-of-type {
  clip-path: url("#star1");
}
div:last-of-type {
  clip-path: url("#star2");
}
```

Schließlich setzen wir die unterschiedlichen `clip-rule` Werte für jedes der `<clipPath>` Element `<path>`s:

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

### Auswahl zwischen Regeln für einen Pfad mit allen im Uhrzeigersinn gerichteten Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Clip-Regel beschnitten werden. Es gibt zwei {{SVGElement("clipPath")}} Elemente, sodass eines auf die nicht-null Regel und das andere auf die gerade ungerade Regel gesetzt werden kann. Beide Pfade sind sowohl in den inneren als auch in den äußeren Teilen im Uhrzeigersinn gezeichnet.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#112233" fill="#bbccdd">
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

Für die Clip-Pfade, die auf die beschnittenen Rechtecke angewendet werden, wird die CSS `clip-rule` Eigenschaft verwendet, um einen Pfad auf die `nonzero` Regeln und den anderen auf die `evenodd` Regel zu setzen. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die entgegengesetzten Werte gesetzt wurden, wie sie durch das CSS auferlegt werden.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Weil sowohl die inneren als auch die äußeren Teile des Pfades im Uhrzeigersinn (von links nach rechts) verlaufen, wird die resultierende Clip-Form zwischen den beiden Clip-Regeln unterschiedlich sein. Bei `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form auf einen Wert über Null erhöhen, da er auf eins oder mehr linke zu rechte Pfadfragmente stößt. Bei `even-odd` haben Punkte zwischen den beiden Teilen des Pfades eine ungerade nummerierte Summe, während jeder Punkt entweder innerhalb des inneren Pfades oder außerhalb des äußeren Teils eine gerade nummerierte Summe hat.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlich gewundenen Pfaden

Dieses Beispiel verwendet das gleiche SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Clip-Pfades in gegen den Uhrzeigersinn windet.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#112233" fill="#bbccdd">
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

Wir wenden das gleiche CSS wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall, weil der äußere Teil des Pfades im Uhrzeigersinn (von links nach rechts) und der innere Teil des Pfades im Gegenuhrzeigersinn (von rechts nach links) verläuft, wird die resultierende Clip-Form unabhängig von der verwendeten Clip-Regel gleich sein.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [Einführung in CSS Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- SVG {{SVGAttr("fill-rule")}} Attribut
