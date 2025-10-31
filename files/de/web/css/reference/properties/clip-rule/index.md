---
title: clip-rule
slug: Web/CSS/Reference/Properties/clip-rule
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`clip-rule`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt, wenn Teile des Pfads andere Teile überlappen, welche Pixel in einer Maske innerhalb der durch einen [clip path](/de/docs/Web/CSS/Reference/Properties/clip-path) definierten Form befinden und welche außerhalb.

Die `clip-rule`-Eigenschaft gilt nur für SVG-Elemente, die sich innerhalb eines {{SVGElement("clipPath")}}-Elements befinden, und überschreibt den Wert des {{SVGAttr("clip-rule")}}-Attributs des Elements, falls vorhanden. Die `clip-rule`-Eigenschaft funktioniert im Grunde wie die {{cssxref("fill-rule")}}-Eigenschaft, außer dass sie auf `<clipPath>`-Definitionen angewendet wird. Sie hat keinen Effekt auf CSS-{{cssxref("basic-shape")}}s.

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
  - : Für jeden Punkt im Kasten der Clipping-Maske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Clip-Pfads schneidet, wird ein Zähler um eins erhöht, wenn sich der Teil des Clip-Pfads von links nach rechts über den Strahl bewegt, und um eins verringert, wenn sich der Teil von rechts nach links über den Strahl bewegt. Wenn das letztendliche Total des Zählers null ist, befindet sich der Punkt außerhalb der Form des Pfads. Andernfalls befindet er sich innerhalb der Form des Pfads.

- `even-odd`
  - : Für jeden Punkt im Kasten der Clipping-Maske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Clip-Pfads schneidet, wird ein Zähler um eins erhöht. Wenn das endgültige Total des Zählers gerade ist, befindet sich der Punkt außerhalb der Form des Pfads; andernfalls befindet er sich innerhalb der Form des Pfads. Null wird als gerade angesehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertevergleich

In diesem Beispiel wenden wir verschiedene CSS-`clip-rule`-Werte auf ähnliche SVG-{{SVGElement("path")}}-Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>`-Container, die jeweils ein `<clipPath>`-Element enthalten, das eine Sternform definiert, und ein `<rect>`-Element, um den Stern darzustellen. Die Sterne werden mit sich überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>`-Element, um zu zeigen, wie die Linien des Pfads, die den Stern erstellt haben, sich überlappen.

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

Das `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; `nonzero` im zweiten SVG. Für das SVG mit nur dem Pfad haben wir den Standardwert {{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}}-Farbe als auch {{cssxref("stroke-width")}} definiert, um die sich überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb grundlegender Formdefinitionen

Dieses Beispiel zeigt, dass, obwohl die `clip-rule` keinen Effekt auf CSS-{{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>`-Elementen ein, die Sternformen definieren, die sich nur in ihren `id`-Attributwerten unterscheiden. Wir fügen auch zwei `<div>`-Elemente hinzu, die unsere Sternformen enthalten werden.

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

Wir versehen die `<div>`-Elemente mit einer festgelegten {{cssxref("width")}} und {{cssxref("height")}}, indem wir ein [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient) für ihren {{cssxref("background-image")}}-Wert hinzufügen:

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

Schließlich setzen wir die unterschiedlichen `clip-rule`-Werte für jedes `<clipPath>`-Element's `<path>`:

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

### Auswahl zwischen Regeln für einen Pfad mit ausschließlich im Uhrzeigersinn gezeichneten Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die jeweils mit einer der Clipping-Regeln geschnitten werden. Es gibt zwei {{SVGElement("clipPath")}}-Elemente, sodass eines auf die "non-zero"-Clipping-Regel und das andere auf die "even-odd"-Regel gesetzt werden kann. Beide Pfade werden für sowohl ihre inneren als auch äußeren Teile im Uhrzeigersinn gezeichnet.

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

Für die auf die geschnittenen Rechtecke angewendeten Clipping-Pfade wird die CSS-`clip-rule`-Eigenschaft verwendet, um einen Pfad so einzustellen, dass er die `nonzero`-Regeln verwendet, und den anderen, dass er die `evenodd`-Regel verwendet. Diese übersteuern die Werte der `clip-path`-Attribute im SVG, die absichtlich auf die entgegengesetzten Werte der von CSS erzwungenen gesetzt wurden.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sowohl die inneren als auch äußeren Teile des Pfades im Uhrzeigersinn (von links nach rechts) verlaufen, wird sich die resultierende Clipform zwischen den beiden Clipping-Regeln unterscheiden. Für `nonzero` wird jeder Strahl im äußeren Teil der Form auf einen Wert über null gelangen, da er auf einen oder mehrere von links nach rechts verlaufende Pfadfragmente trifft. Für `even-odd` werden Punkte zwischen den beiden Teilen des Pfades eine ungerade Zählung haben, während jeder Punkt entweder innerhalb des inneren Pfades oder außerhalb des äußeren Teils eine gerade Zählung haben wird.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlich windenden Pfaden

Dieses Beispiel verwendet das gleiche SVG wie im vorherigen Beispiel, mit der Änderung, dass sich der innere Teil des Clipping-Pfades in eine gegen den Uhrzeigersinn laufende Richtung windet.

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

Wir wenden das gleiche CSS an wie zuvor.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall, da der äußere Teil des Pfades sich im Uhrzeigersinn (von links nach rechts) bewegt und der innere Teil des Pfades sich gegen den Uhrzeigersinn (von rechts nach links) bewegt, wird die resultierende Clipform unabhängig von der verwendeten Clipping-Regel gleich sein.

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
