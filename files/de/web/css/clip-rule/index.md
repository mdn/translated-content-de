---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`clip-rule`**-Eigenschaft von [CSS](/de/docs/Web/CSS) bestimmt, wenn Teile des Pfades andere Teile überlappen, welche Pixel in der Box einer Maske innerhalb der vom [clip path](/de/docs/Web/CSS/clip-path) definierten Schnittform liegen und welche außerhalb.

Die `clip-rule`-Eigenschaft gilt nur für SVG-Elemente, die in einem {{SVGElement("clipPath")}}-Element enthalten sind und überschreibt den Wert des {{SVGAttr("clip-rule")}}-Attributs des Elements, falls vorhanden. Die `clip-rule`-Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}}-Eigenschaft, außer dass sie auf `<clipPath>`-Definitionen angewendet wird. Sie hat keine Auswirkungen auf CSS-{{cssxref("basic-shape")}}s.

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
  - : Für jeden Punkt in der Box der Schnittmaske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl mit einem Teil des Schnittpfades kreuzt, wird ein Zähler um eins erhöht, wenn sich der Teil des Schnittpfades von links nach rechts über den Strahl bewegt, während er um eins vermindert wird, wenn sich der Pfadteil von rechts nach links bewegt. Ist die endgültige Summe des Zählers null, liegt der Punkt außerhalb der Form des Pfades. Andernfalls liegt er innerhalb der Form des Pfades.

- `even-odd`
  - : Für jeden Punkt in der Box der Schnittmaske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl mit einem Teil des Schnittpfades kreuzt, wird ein Zähler um eins erhöht. Ist die endgültige Summe des Zählers gerade, liegt der Punkt außerhalb der Form des Pfades; andernfalls liegt er innerhalb. Null wird als gerade betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertevergleich

In diesem Beispiel wenden wir verschiedene `clip-rule`-Werte in CSS auf ähnliche SVG-{{SVGElement("path")}}-Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>`-Container, die jeweils ein `<clipPath>`-Element enthalten, das eine Sternform definiert, und ein `<rect>`-Element, um den Stern drinnen zu zeichnen. Die Sterne werden mit sich überlappenden Linien erstellt. Abgesehen vom `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>`-Element, welches zeigt, wie die Linien des Pfads, die den Stern erstellt haben, sich überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; auf `nonzero` im zweiten SVG. Für das Pfad-Only-SVG, haben wir die standardmäßige {{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}}-Farbe als auch eine {{cssxref("stroke-width")}} definiert, um die sich überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb von Basisform-Definitionen

Dieses Beispiel zeigt, dass, obwohl die `clip-rule`-Eigenschaft keine Auswirkungen auf CSS-{{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>`-Elementen ein, die Sternformen definieren, die bis auf Ihre `id`-Attributwerte identisch sind. Wir fügen auch zwei `<div>`-Elemente ein, die unsere Sternformen enthalten werden.

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

Wir stellen den `<div>`-Elementen eine feste {{cssxref("width")}} und {{cssxref("height")}} zur Verfügung, indem wir für ihren {{cssxref("background-image")}}-Wert einen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient) hinzufügen:

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

Wir verwenden die {{cssxref("clip-path")}}-Eigenschaft, um die verschiedenen `<clipPath>`-Elemente als Clip-Pfad für jedes `<div>` zu setzen:

```css
div:first-of-type {
  clip-path: url(#star1);
}
div:last-of-type {
  clip-path: url(#star2);
}
```

Schließlich setzen wir die verschiedenen `clip-rule`-Werte für jedes `<clipPath>`-Element `<path>`s:

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

### Auswahl zwischen Regeln für einen Pfad mit nur im Uhrzeigersinn verlaufenden Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Schneidregel ausgeschnitten werden. Es gibt zwei {{SVGElement("clipPath")}}-Elemente, sodass eines auf die nonzero-Schneidregel und das andere auf die even-odd-Regel gesetzt werden kann. Beide Pfade sind sowohl für ihre inneren als auch äußeren Teile im Uhrzeigersinn gezeichnet.

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

Für die Schnittpfade, die auf die geschnittenen Rechtecke angewendet werden, wird die CSS-`clip-rule`-Eigenschaft verwendet, um einen Pfad so einzustellen, dass er die `nonzero`-Regeln verwendet, und den anderen, um die `evenodd`-Regel zu verwenden. Diese überschreiben die Werte der `clip-path`-Attribute im SVG, die bewusst auf die entgegengesetzten Werte eingestellt wurden, wie durch die CSS auferlegt.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sich sowohl die inneren als auch äußeren Teile des Pfades im Uhrzeigersinn (von links nach rechts) bewegen, wird die resultierende Schnittform zwischen den beiden Schneidregeln unterschiedlich sein. Für `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form auf einen Wert über null zählen, da er auf ein oder mehrere Pfadfragmente von links nach rechts trifft. Für `even-odd` werden Punkte zwischen den beiden Teilen des Pfades eine ungerade Zählung haben, während jeder Punkt entweder innerhalb des inneren Pfades oder außerhalb des äußeren Teils eine gerade Zählung hat.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlichen Wicklungspfaden

Dieses Beispiel verwendet dasselbe SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Schneidpfades sich gegen den Uhrzeigersinn bewegt.

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

Wir wenden dieselbe CSS wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall, da sich der äußere Teil des Pfades im Uhrzeigersinn (von links nach rechts) bewegt und der innere Teil des Pfades gegen den Uhrzeigersinn (von rechts nach links) bewegt, wird die resultierende Schnittform dieselbe sein, unabhängig davon, welche Schneidregel verwendet wird.

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
- SVG-{{SVGAttr("clip-rule")}}-Attribut
- SVG-{{SVGElement("clipPath")}}-Element
- SVG-{{SVGAttr("fill-rule")}}-Attribut
