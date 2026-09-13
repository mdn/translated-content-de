---
title: "`clip-rule` CSS property"
short-title: clip-rule
slug: Web/CSS/Reference/Properties/clip-rule
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfades andere Teile überlappen, welche Pixel in der Maske innerhalb der durch einen [Clip-Pfad](/de/docs/Web/CSS/Reference/Properties/clip-path) definierten Form liegen und welche außerhalb.

Die `clip-rule`-Eigenschaft gilt nur für SVG-Elemente, die innerhalb eines {{SVGElement("clipPath")}}-Elements enthalten sind, und überschreibt den Wert des {{SVGAttr("clip-rule")}}-Attributs des Elements, falls vorhanden. Die `clip-rule`-Eigenschaft funktioniert im Grunde wie die {{cssxref("fill-rule")}}-Eigenschaft, außer dass sie auf `<clipPath>`-Definitionen angewendet wird. Sie hat keinen Einfluss auf CSS-{{cssxref("basic-shape")}}s.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `nonzero`
  - : Für jeden Punkt im Kasten der Clipping-Maske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Clip-Pfades schneidet, wird der Zähler um eins erhöht, wenn sich der Teil des Clip-Pfades von links nach rechts über den Strahl bewegt, und um eins verringert, wenn sich der Teil des Pfades von rechts nach links über den Strahl bewegt. Wenn das endgültige Ergebnis des Zählers null ist, liegt der Punkt außerhalb der Pfadform. Andernfalls liegt er innerhalb der Pfadform.

- `even-odd`
  - : Für jeden Punkt im Kasten der Clipping-Maske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Clip-Pfades schneidet, wird der Zähler um eins erhöht. Ist das endgültige Ergebnis des Zählers gerade, liegt der Punkt außerhalb der Pfadform, andernfalls innerhalb. Null wird als gerade betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertvergleich

In diesem Beispiel werden wir verschiedene CSS-`clip-rule`-Werte auf ähnliche SVG-{{SVGElement("path")}}-Elemente anwenden, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Die Markup enthält mehrere `<svg>`-Container, jeder enthält ein `<clipPath>`-Element, das eine Sternform definiert, und ein `<rect>`-Element, um den Stern darin zu zeichnen. Die Sterne werden mit überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>`-Element, welches zeigt, wie die Linien des Pfades, die den Stern erstellt haben, sich überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; `nonzero` im zweiten SVG. Für das SVG nur mit Pfad haben wir die Standard-{{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}}-Farbe als auch eine {{cssxref("stroke-width")}} definiert, um die überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb von Grundformen-Definitionen

Dieses Beispiel zeigt, dass obwohl die `clip-rule` keinen Effekt auf CSS-{{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>`-Elementen ein, die Sternformen definieren, welche bis auf die `id`-Attributwerte identisch sind. Wir fügen auch zwei `<div>`-Elemente ein, die unsere Sternformen enthalten werden.

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

Wir geben den `<div>`-Elementen eine feste {{cssxref("width")}} und {{cssxref("height")}}, und fügen einen [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient) für ihren {{cssxref("background-image")}}-Wert hinzu:

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

Wir verwenden die {{cssxref("clip-path")}}-Eigenschaft, um die verschiedenen `<clipPath>`-Elemente als Clipping-Pfad für jedes `<div>` festzulegen:

```css
div:first-of-type {
  clip-path: url("#star1");
}
div:last-of-type {
  clip-path: url("#star2");
}
```

Schließlich setzen wir die verschiedenen `clip-rule`-Werte für jede der `<clipPath>`-Element-`<path>`s:

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

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Clipping-Regel ausgeschnitten sind. Es gibt zwei {{SVGElement("clipPath")}}-Elemente, sodass eines so eingestellt werden kann, dass es die Non-Zero-Clipping-Regel und das andere die Even-Odd-Regel verwendet. Beide Pfade werden im Uhrzeigersinn für ihre inneren und äußeren Teile gezeichnet.

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

Auf die Clipping-Pfade, die auf die ausgeschnittenen Rechtecke angewendet werden, wird die CSS-`clip-rule`-Eigenschaft verwendet, um einen Pfad so einzustellen, dass er die `nonzero`-Regeln und der andere die `evenodd`-Regel verwendet. Diese überschreiben die Werte der `clip-path`-Attribute im SVG, die absichtlich auf die entgegengesetzten Werte gesetzt wurden, als es das CSS vorschreibt.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sich sowohl die inneren als auch die äußeren Teile des Pfades im Uhrzeigersinn (von links nach rechts) bewegen, wird die resultierende Clip-Form zwischen den beiden Clipping-Regeln unterschiedlich sein. Für `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form auf einen Wert über null kommen, weil er ein oder mehrere von links nach rechts verlaufende Pfadfragmente trifft. Für `even-odd` werden Punkte zwischen den beiden Teilen des Pfades eine ungerade Zahl als Ergebnis haben, während jeder Punkt entweder innerhalb des inneren Pfades oder außerhalb des äußeren Teils eine gerade Zahl haben wird.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlich verlaufenden Pfaden

Dieses Beispiel verwendet das gleiche SVG wie das vorherige, mit der Änderung, dass der innere Teil des Clipping-Pfades im Gegenuhrzeigersinn verläuft.

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

Wir wenden dieselben CSS-Richtlinien wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall, da der äußere Teil des Pfades sich im Uhrzeigersinn (von links nach rechts) bewegt und der innere Teil des Pfades sich im Gegenuhrzeigersinn (von rechts nach links) bewegt, wird die resultierende Clip-Form unabhängig davon, welche Clipping-Regel verwendet wird, dieselbe sein.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [Einführung in CSS Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
- SVG-{{SVGAttr("clip-rule")}}-Attribut
- SVG-{{SVGElement("clipPath")}}-Element
- SVG-{{SVGAttr("fill-rule")}}-Attribut
