---
title: clip-rule
slug: Web/CSS/Reference/Properties/clip-rule
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`clip-rule`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bestimmt, wenn Teile des Pfads andere Teile überlappen, welche Pixel in einem Maskenrahmen innerhalb der durch einen [clip path](/de/docs/Web/CSS/Reference/Properties/clip-path) definierten Form liegen und welche außerhalb.

Die `clip-rule`-Eigenschaft gilt nur für SVG-Elemente, die in einem {{SVGElement("clipPath")}}-Element enthalten sind, und überschreibt gegebenenfalls den `clip-rule`-Attributwert des Elements. Die `clip-rule`-Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}}-Eigenschaft, außer dass sie für `<clipPath>`-Definitionen gilt. Sie hat keine Auswirkungen auf CSS-{{cssxref("basic-shape")}}s.

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
  - : Für jeden Punkt im Maskenrahmen wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Pfads schneidet, wird ein Zähler um eins erhöht, wenn der Teil des Pfads sich von links nach rechts über den Strahl bewegt, und verringert sich um eins, wenn der Teil des Pfads sich von rechts nach links über den Strahl bewegt. Ist das Endergebnis des Zählers null, liegt der Punkt außerhalb der Form des Pfads. Andernfalls liegt er innerhalb der Form des Pfads.

- `even-odd`
  - : Für jeden Punkt im Maskenrahmen wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Pfads schneidet, wird ein Zähler um eins erhöht. Ist das Endergebnis des Zählers gerade, liegt der Punkt außerhalb der Form des Pfads; andernfalls liegt er innerhalb der Form des Pfads. Null wird als gerade betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertvergleich

In diesem Beispiel wenden wir verschiedene CSS `clip-rule`-Werte auf ähnliche SVG {{SVGElement("path")}}-Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>`-Container, von denen jeder ein `<clipPath>`-Element zur Definition einer Sternform sowie ein `<rect>`-Element zum Zeichnen des Sterns enthält. Die Sterne werden mit sich überschneidenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>`-Element, um zu zeigen, wie die Linien des Pfads, die den Stern erstellt haben, sich überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG wird auf `evenodd` gesetzt; `nonzero` im zweiten SVG. Für das SVG mit nur dem Pfad haben wir die Standard-{{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}}-Farbe als auch eine {{cssxref("stroke-width")}} definiert, um die sich überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb von Basic-Shape-Definitionen

Dieses Beispiel zeigt, dass während die `clip-rule` keine Auswirkungen auf CSS-{{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>`-Elementen ein, die Sternformen definieren, die bis auf ihre `id`-Attributwerte identisch sind. Außerdem fügen wir zwei `<div>`-Elemente ein, die unsere Sternformen enthalten werden.

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

Wir geben den `<div>`-Elementen eine festgelegte {{cssxref("width")}} und {{cssxref("height")}} und fügen einen [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient) für den {{cssxref("background-image")}}-Wert hinzu:

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

Wir verwenden die {{cssxref("clip-path")}}-Eigenschaft, um die verschiedenen `<clipPath>`-Elemente als Schnittpfad für jedes `<div>` zu setzen:

```css
div:first-of-type {
  clip-path: url("#star1");
}
div:last-of-type {
  clip-path: url("#star2");
}
```

Schließlich setzen wir die verschiedenen `clip-rule`-Werte für die `<path>`s der einzelnen `<clipPath>`-Elemente:

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

### Auswahl zwischen Regeln für einen Pfad mit ausschließlich im Uhrzeigersinn verlaufenden Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die jeweils mit einer der beiden Schnittregeln beschnitten sind. Es gibt zwei {{SVGElement("clipPath")}}-Elemente, von denen eines auf die Non-Zero-Schnittregel und das andere auf die Even-Odd-Regel eingestellt wird. Beide Pfade werden im Uhrzeigersinn für sowohl den inneren als auch den äußeren Teil gezeichnet.

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

Auf die Schnittpfade, die auf die beschnittenen Rechtecke angewandt werden, wird die CSS `clip-rule`-Eigenschaft genutzt, um einen Pfad auf die `nonzero`-Regeln und den anderen auf die `evenodd`-Regel festzulegen. Diese überschreiben die Werte der `clip-path`-Attribute im SVG, die absichtlich auf entgegengesetzte Werte gesetzt wurden, als die CSS sie auferlegt.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sowohl die inneren als auch die äußeren Teile des Pfads im Uhrzeigersinn (von links nach rechts) verlaufen, wird die resultierende Schnittform zwischen den beiden Schneidregeln unterschiedlich sein. Für `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form zu einem Wert über null summiert, da er auf ein oder mehrere von links nach rechts verlaufende Pfadfragmente treffen wird. Für `even-odd` haben Punkte zwischen den beiden Teilen des Pfads eine ungerade Zahl an Zählern, während jeder Punkt entweder innerhalb des inneren Pfads oder außerhalb des äußeren Teils eine gerade Zahl an Zählern haben wird.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlichen Wicklungspfaden

Dieses Beispiel verwendet dasselbe SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Pfads in umgekehrter Richtung im Uhrzeigersinn verläuft.

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

Wir wenden dieselbe CSS wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall wird, da der äußere Teil des Pfads im Uhrzeigersinn (von links nach rechts) und der innere Teil des Pfads gegen den Uhrzeigersinn (von rechts nach links) verläuft, die resultierende Schnittform unabhängig von der verwendeten Schneidregel gleich sein.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking)-Modul
- SVG-Attribut {{SVGAttr("clip-rule")}}
- SVG-Element {{SVGElement("clipPath")}}
- SVG-Attribut {{SVGAttr("fill-rule")}}
