---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfades andere Teile überlappen, welche Pixel in einem Maskenrahmen innerhalb der durch einen [clip path](/de/docs/Web/CSS/clip-path) definierten Beschneidungsform liegen und welche außerhalb.

Die `clip-rule` Eigenschaft gilt nur für SVG-Elemente, die in einem {{SVGElement("clipPath")}} Element enthalten sind und überschreibt den Wert des `clip-rule` Attributs des Elements, falls vorhanden. Die `clip-rule` Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}} Eigenschaft, außer dass sie auf `<clipPath>` Definitionen angewendet wird. Sie hat keine Auswirkungen auf CSS {{cssxref("basic-shape")}}s.

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
  - : Für jeden Punkt im Maskenrahmen wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl mit einem Teil des Beschneidungsweges kreuzt, wird eine Zählung um eins erhöht, wenn sich der Teil des Beschneidungsweges von links nach rechts über den Strahl bewegt, wohingegen sie um eins verringert wird, wenn sich der Teil des Pfades von rechts nach links über den Strahl bewegt. Wenn die endgültige Gesamtzahl der Zählung null ist, liegt der Punkt außerhalb der Form des Pfades. Andernfalls liegt er innerhalb der Form des Pfades.

- `even-odd`
  - : Für jeden Punkt im Maskenrahmen wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl mit einem Teil des Beschneidungsweges kreuzt, wird eine Zählung um eins erhöht. Wenn die endgültige Gesamtzahl der Zählung gerade ist, liegt der Punkt außerhalb der Form des Pfades; andernfalls liegt er innerhalb der Form des Pfades. Null wird als gerade betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertevergleich

In diesem Beispiel werden wir verschiedene CSS `clip-rule` Werte auf ähnliche SVG {{SVGElement("path")}} Elemente anwenden, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>` Container, die jeweils ein `<clipPath>` Element enthalten, das eine Sternform definiert, und ein `<rect>` Element, um den Stern darin zu zeichnen. Die Sterne werden mit sich überschneidenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>` Element, das zeigt, wie sich die Linien des Pfades, die den Stern erstellt haben, überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; im zweiten SVG auf `nonzero`. Für das nur aus Pfaden bestehende SVG haben wir den Standardwert {{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}} Farbe als auch eine {{cssxref("stroke-width")}} definiert, um die sich überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb der Definitionen der Grundformen

Dieses Beispiel zeigt, dass, obwohl die `clip-rule` keinen Einfluss auf CSS {{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>` Elementen hinzu, die Sternformen definieren, die identisch sind, außer für ihre `id` Attributwerte. Wir fügen auch zwei `<div>` Elemente hinzu, die unsere Sternformen enthalten.

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

Wir verwenden die {{cssxref("clip-path")}} Eigenschaft, um die verschiedenen `<clipPath>` Elemente als den Beschneidungspfad für jedes `<div>` festzulegen:

```css
div:first-of-type {
  clip-path: url("#star1");
}
div:last-of-type {
  clip-path: url("#star2");
}
```

Schließlich setzen wir die verschiedenen `clip-rule` Werte für jedes `<clipPath>` Element's `<path>`s:

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

### Auswahl zwischen Regeln für einen Pfad mit allen im Uhrzeigersinn verlaufenden Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die mit jeder Beschneidungsregel beschnitten sind. Es gibt zwei {{SVGElement("clipPath")}} Elemente, so dass eines auf die non-zero Beschneidungsregel gesetzt werden kann und das andere die even-odd Regel verwendet. Beide Pfade werden im Uhrzeigersinn für sowohl ihre inneren als auch äußeren Teile gezeichnet.

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

Für die Beschneidungspfade, die auf die beschnittenen Rechtecke angewendet werden, wird die CSS `clip-rule` Eigenschaft verwendet, um einen Pfad auf die `nonzero` Regeln zu setzen und den anderen auf die `evenodd` Regel. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die entgegengesetzten Werte gesetzt wurden, wie es die CSS erzwingt.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sowohl die inneren als auch die äußeren Teile des Pfades im Uhrzeigersinn (von links nach rechts) verlaufen, wird die resultierende Clipform bei den beiden Beschneidungsregeln unterschiedlich sein. Für `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form auf einen Wert über null kommen, da er auf ein oder mehrere von links nach rechts verlaufende Path-Fragmente stoßen wird. Für `even-odd` werden Punkte zwischen den beiden Teilen des Pfades eine ungerade Anzahl in der Zählung haben, während jeder Punkt entweder innerhalb des inneren Pfades oder außerhalb des äußeren Teils eine gerade Anzahl haben wird.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlich gewundenen Pfaden

Dieses Beispiel verwendet dasselbe SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Beschneidungspfades in einer gegen den Uhrzeigersinn verlaufenden Richtung gewunden ist.

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

Wir wenden die gleiche CSS wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall, da der äußere Teil des Pfades im Uhrzeigersinn (von links nach rechts) verläuft und der innere Teil des Pfades in einer gegen den Uhrzeigersinn (von rechts nach links) verlaufenden Richtung, wird die resultierende Clipform unabhängig davon, welche Beschneidungsregel verwendet wird, gleich sein.

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
