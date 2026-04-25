---
title: "`clip-rule` CSS property"
short-title: clip-rule
slug: Web/CSS/Reference/Properties/clip-rule
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfads andere Teile überlappen, welche Pixel in einer Maske innerhalb der durch einen [clip path](/de/docs/Web/CSS/Reference/Properties/clip-path) definierten Schnittform und welche außerhalb sind.

Die `clip-rule` Eigenschaft gilt nur für SVG-Elemente, die in einem {{SVGElement("clipPath")}} Element enthalten sind und überschreibt den Wert des {{SVGAttr("clip-rule")}} Attributs des Elements, falls vorhanden. Die `clip-rule` Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}} Eigenschaft, mit dem Unterschied, dass sie auf `<clipPath>` Definitionen angewendet wird. Sie hat keine Auswirkung auf CSS {{cssxref("basic-shape")}}s.

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
  - : Für jeden Punkt im Kasten der Schnittmaske wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl einen Teil des Schnittpfads schneidet, wird eine Zählung um eins erhöht, wenn sich der Teil des Schnittpfads von links nach rechts über den Strahl bewegt, und um eins verringert, wenn sich der Pfadteil von rechts nach links über den Strahl bewegt. Wenn das endgültige Gesamtergebnis der Zählung null ist, liegt der Punkt außerhalb der Form des Pfads. Andernfalls liegt er innerhalb der Form des Pfads.

- `even-odd`
  - : Für jeden Punkt im Kasten der Schnittmaske wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl einen Teil des Schnittpfads schneidet, wird eine Zählung um eins erhöht. Wenn das endgültige Gesamtergebnis der Zählung gerade ist, liegt der Punkt außerhalb der Form des Pfads; andernfalls liegt er innerhalb der Form des Pfads. Null wird als gerade angesehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertvergleich

In diesem Beispiel wenden wir unterschiedliche CSS `clip-rule` Werte auf ähnliche SVG {{SVGElement("path")}} Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>` Container, von denen jeder ein `<clipPath>` Element enthält, das eine Sternform definiert, und ein `<rect>` Element, um den Stern innerhalb zu zeichnen. Die Sterne werden mit sich überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>` Element und zeigt, wie die Linien des Pfads, die den Stern erstellt haben, sich überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; im zweiten SVG auf `nonzero`. Für das nur-Pfad-SVG haben wir die Standard-{{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}} Farbe als auch eine {{cssxref("stroke-width")}} definiert, um die überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb von Basic Shape Definitionen

Dieses Beispiel zeigt, dass, obwohl die `clip-rule` keine Wirkung auf CSS {{cssxref("basic-shape")}}s hat, sie einen `<clipPath>` beeinflussen kann, der als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>` Elementen ein, die Sternformen definieren, die bis auf ihre `id` Attributwerte identisch sind. Wir fügen auch zwei `<div>` Elemente ein, die unsere Sternformen enthalten werden.

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

Wir geben den `<div>` Elementen eine festgelegte {{cssxref("width")}} und {{cssxref("height")}} und fügen einen [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient) für ihren {{cssxref("background-image")}} Wert hinzu:

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

Wir verwenden die {{cssxref("clip-path")}} Eigenschaft, um die verschiedenen `<clipPath>` Elemente als den Schnittpfad für jedes `<div>` festzulegen:

```css
div:first-of-type {
  clip-path: url("#star1");
}
div:last-of-type {
  clip-path: url("#star2");
}
```

Abschließend legen wir die unterschiedlichen `clip-rule` Werte für jedes `<clipPath>` Element's `<path>`s fest:

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

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Schnittregel ausgeschnitten werden. Es gibt zwei {{SVGElement("clipPath")}} Elemente, sodass eines auf die non-zero Schnittregel eingestellt werden kann und das andere die even-odd Regel verwendet. Beide Pfade werden sowohl für ihre inneren als auch äußeren Teile in Uhrzeigerrichtung gezeichnet.

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

Für die Schnittpfade, die auf die ausgeschnittenen Rechtecke angewendet werden, wird die CSS `clip-rule` Eigenschaft verwendet, um einen Pfad zur Verwendung der `nonzero` Regeln einzustellen, und den anderen zur Verwendung der `evenodd` Regel. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die entgegengesetzten Werte der CSS gesetzt wurden.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sich sowohl die inneren als auch die äußeren Teile des Pfads in Uhrzeigerrichtung (von links nach rechts) bewegen, wird sich die resultierende Schnittform zwischen den beiden Schnittregeln unterscheiden. Für `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form einen Wert über null ergeben, da er ein oder mehrere von links nach rechts verlaufende Pfadfragmente trifft. Für `even-odd` werden Punkte zwischen den beiden Teilen des Pfads eine ungerade Anzahl an Zähler haben, während jeder Punkt entweder innerhalb des inneren Pfads oder außerhalb des äußeren Teils eine gerade Anzahl an Zähler haben wird.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlichen Wickelpfaden

Dieses Beispiel verwendet das gleiche SVG wie das vorherige Beispiel, mit der Änderung, dass sich der innere Teil des Schnittweges in gegen den Uhrzeigersinn dreht.

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

Wir wenden die gleiche CSS wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall wird die resultierende Schnittform dieselbe sein, unabhängig davon, welche Schnittregel verwendet wird, da sich der äußere Teil des Pfads in Uhrzeigerrichtung (von links nach rechts) bewegt und der innere Teil des Pfads in gegen den Uhrzeigersinn (von rechts nach links) bewegt.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [Einführung in CSS-Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- SVG {{SVGAttr("fill-rule")}} Attribut
