---
title: "`clip-rule` CSS property"
short-title: clip-rule
slug: Web/CSS/Reference/Properties/clip-rule
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`clip-rule`** bestimmt, welche Pixel innerhalb der Box einer Maske innerhalb der durch einen [Beschneidungspfad](/de/docs/Web/CSS/Reference/Properties/clip-path) definierten Beschneidungsform liegen und welche außerhalb, wenn sich Teile des Pfads mit anderen Teilen überschneiden.

Die Eigenschaft `clip-rule` gilt nur für SVG-Elemente, die in einem {{SVGElement("clipPath")}}-Element enthalten sind, und überschreibt gegebenenfalls den Wert des Attributs {{SVGAttr("clip-rule")}} des Elements. Die Eigenschaft `clip-rule` funktioniert grundsätzlich wie die Eigenschaft {{cssxref("fill-rule")}}, mit dem Unterschied, dass sie auf `<clipPath>`-Definitionen angewendet wird. Sie hat keine Auswirkung auf CSS-{{cssxref("basic-shape")}}s.

## Syntax

```css
/* Keyword values */
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
  - : Für jeden Punkt in der Box der Beschneidungsmaske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Beschneidungspfads schneidet, wird ein Zähler um eins erhöht, wenn sich der Teil des Beschneidungspfads über den Strahl von links nach rechts bewegt. Er wird hingegen um eins verringert, wenn sich der Pfadteil über den Strahl von rechts nach links bewegt. Wenn der Endwert des Zählers null ist, liegt der Punkt außerhalb der Form des Pfads. Andernfalls liegt er innerhalb der Form des Pfads.

- `even-odd`
  - : Für jeden Punkt in der Box der Beschneidungsmaske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Beschneidungspfads schneidet, wird ein Zähler um eins erhöht. Wenn der Endwert des Zählers gerade ist, liegt der Punkt außerhalb der Form des Pfads; andernfalls liegt er innerhalb der Form des Pfads. Null wird als gerade betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Werte

In diesem Beispiel wenden wir verschiedene CSS-`clip-rule`-Werte auf ähnliche SVG-{{SVGElement("path")}}-Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu veranschaulichen.

#### HTML

Das Markup enthält mehrere `<svg>`-Container, die jeweils ein `<clipPath>`-Element zur Definition einer Sternform und ein `<rect>`-Element zum Zeichnen des Sterns enthalten. Die Sterne werden mit überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>`-Element und zeigt, wie die Linien des Pfads, aus denen der Stern erstellt wurde, überlappen.

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

Die `clip-rule` für den `<path>` im ersten SVG ist auf `evenodd` gesetzt, im zweiten SVG auf `nonzero`. Für das SVG, das nur den Pfad enthält, haben wir das standardmäßige {{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}}-Farbe als auch {{cssxref("stroke-width")}} definiert, um die überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb von basic-shape-Definitionen

Dieses Beispiel zeigt, dass `clip-rule` zwar keine Auswirkung auf CSS-{{cssxref("basic-shape")}}s hat, aber einen `<clipPath>` beeinflussen kann, der als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>`-Elementen ein, die Sternformen definieren und bis auf ihre `id`-Attributwerte identisch sind. Außerdem fügen wir zwei `<div>`-Elemente ein, die unsere Sternformen enthalten werden.

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

Wir versehen die `<div>`-Elemente mit einer festgelegten {{cssxref("width")}} und {{cssxref("height")}} und fügen einen [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient) für ihren Wert von {{cssxref("background-image")}} hinzu:

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

Wir verwenden die Eigenschaft {{cssxref("clip-path")}}, um die verschiedenen `<clipPath>`-Elemente als Beschneidungspfad für jedes `<div>` festzulegen:

```css
div:first-of-type {
  clip-path: url("#star1");
}
div:last-of-type {
  clip-path: url("#star2");
}
```

Abschließend setzen wir für die `<path>`s jedes `<clipPath>`-Elements die unterschiedlichen `clip-rule`-Werte:

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

In diesem SVG-Bild haben wir zwei Rechtecke, die jeweils mit einer der Beschneidungsregeln beschnitten werden. Es gibt zwei {{SVGElement("clipPath")}}-Elemente, sodass eines auf die Nicht-Null-Beschneidungsregel und das andere auf die Gerade-Ungerade-Regel gesetzt werden kann. Beide Pfade werden sowohl für ihren inneren als auch ihren äußeren Teil im Uhrzeigersinn gezeichnet.

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

Für die Beschneidungspfade, die auf die beschnittenen Rechtecke angewendet werden, wird die CSS-Eigenschaft `clip-rule` verwendet, um einen Pfad auf die Regel `nonzero` und den anderen auf die Regel `evenodd` zu setzen. Diese überschreiben die Werte der `clip-path`-Attribute im SVG, die absichtlich auf die entgegengesetzten Werte gesetzt wurden, als die von CSS vorgegebenen.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sich sowohl der innere als auch der äußere Teil des Pfads im Uhrzeigersinn, also von links nach rechts, bewegen, unterscheidet sich die resultierende Beschneidungsform zwischen den beiden Beschneidungsregeln. Bei `nonzero` ergibt jeder Strahl innerhalb des äußeren Teils der Form einen Zählerwert über null, da er auf ein oder mehrere Pfadfragmente von links nach rechts trifft. Bei `even-odd` haben Punkte zwischen den beiden Teilen des Pfads einen ungeraden Zählerwert, während jeder Punkt entweder innerhalb des inneren Pfads oder außerhalb des äußeren Teils einen geraden Zählerwert hat.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlich verlaufenden Pfaden

Dieses Beispiel verwendet dasselbe SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Beschneidungspfads gegen den Uhrzeigersinn verläuft.

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

In diesem Fall ist die resultierende Beschneidungsform unabhängig von der verwendeten Beschneidungsregel gleich, da sich der äußere Teil des Pfads im Uhrzeigersinn (von links nach rechts) und der innere Teil des Pfads gegen den Uhrzeigersinn (von rechts nach links) bewegt.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [Einführung in das CSS-Beschneiden](/de/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/Guides/Masking)-Modul
- SVG-Attribut {{SVGAttr("clip-rule")}}
- SVG-Element {{SVGElement("clipPath")}}
- SVG-Attribut {{SVGAttr("fill-rule")}}
