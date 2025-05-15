---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 1c24dd81053cd34f393ce2c4b2ac071886007625
---

{{CSSRef}}

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfads andere Teile überlappen, welche Pixel in einem Maskenfeld innerhalb der durch einen [clip path](/de/docs/Web/CSS/clip-path) definierten Beschneidungsform sind und welche außerhalb liegen.

Die `clip-rule` Eigenschaft gilt nur für SVG-Elemente, die innerhalb eines {{SVGElement("clipPath")}} Elements enthalten sind und überschreibt den Wert des {{SVGAttr("clip-rule")}} Attributs des Elements, falls vorhanden. Die `clip-rule` Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}} Eigenschaft, mit dem Unterschied, dass sie auf `<clipPath>` Definitionen angewendet wird. Sie hat keine Auswirkungen auf CSS {{cssxref("basic-shape")}}s.

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

  - : Für jeden Punkt im Clip-Maskenfeld wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl einen Teil des Beschneidungspfads schneidet, wird eine Zählung erhöht, wenn sich der Teil des Beschneidungspfads von links nach rechts über den Strahl bewegt, und sie wird verringert, wenn sich der Pfadteil von rechts nach links bewegt. Ist die endgültige Summe der Zählung Null, liegt der Punkt außerhalb der Pfadform. Andernfalls liegt er innerhalb der Pfadform.

- `even-odd`

  - : Für jeden Punkt im Clip-Maskenfeld wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl einen Teil des Beschneidungspfads schneidet, wird eine Zählung um eins erhöht. Ist die endgültige Summe der Zählung gerade, liegt der Punkt außerhalb der Pfadform; andernfalls liegt er innerhalb der Pfadform. Null wird als gerade angesehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertvergleich

In diesem Beispiel wenden wir unterschiedliche CSS `clip-rule` Werte auf ähnliche SVG {{SVGElement("path")}} Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>` Container, von denen jeder ein `<clipPath>` Element enthält, das eine Sternform definiert, sowie ein `<rect>` Element, um den Stern darin einzubetten. Die Sterne werden mit sich überlappenden Linien erstellt. Bis auf die `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>` Element und zeigt, wie die Linien des Pfades, die den Stern erstellt haben, sich überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; im zweiten SVG auf `nonzero`. Für das SVG mit nur Pfad haben wir die Standard-{{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}} Farbe als auch eine {{cssxref("stroke-width")}} definiert, um die überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb der Definitionen von Grundformen

Dieses Beispiel zeigt, dass, obwohl die `clip-rule` keine Auswirkung auf CSS {{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>` Elementen ein, die Sternformen definieren, die bis auf ihre `id` Attributwerte identisch sind. Wir enthalten auch zwei `<div>` Elemente, die unsere Sternformen enthalten werden.

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

Wir geben den `<div>` Elementen eine festgelegte {{cssxref("width")}} und {{cssxref("height")}} und fügen einen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient) für deren {{cssxref("background-image")}} Wert hinzu:

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

Wir verwenden die {{cssxref("clip-path")}} Eigenschaft, um die verschiedenen `<clipPath>` Elemente als Beschneidungspfad für jedes `<div>` zu setzen:

```css
div:first-of-type {
  clip-path: url(#star1);
}
div:last-of-type {
  clip-path: url(#star2);
}
```

Zuletzt setzen wir die unterschiedlichen `clip-rule` Werte für jedes der `<clipPath>` Elemente's `<path>`:

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

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Beschneidungsregel beschnitten werden. Es gibt zwei {{SVGElement("clipPath")}} Elemente, so dass eines auf die non-zero Regel und das andere auf die even-odd Regel gesetzt werden kann. Beide Pfade werden im Uhrzeigersinn für sowohl den inneren als auch den äußeren Teil gezeichnet.

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

Bei den auf die beschnittenen Rechtecke angewendeten Beschneidungspfaden wird die CSS `clip-rule` Eigenschaft verwendet, um einen Pfad so zu setzen, dass die `nonzero` Regeln und der andere die `evenodd` Regel verwendet. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die entgegengesetzten Werte gesetzt wurden, wie durch CSS vorgegeben.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sowohl der innere als auch der äußere Teil des Pfads im Uhrzeigersinn (von links nach rechts) verläuft, wird die resultierende Beschneidungsform zwischen den beiden Beschneidungsregeln unterschiedlich sein. Bei `nonzero` wird jeder Strahl, der innerhalb des äußeren Teils der Form liegt, auf einen Wert größer als Null addieren, da er auf einen oder mehrere von links nach rechts gerichtete Pfadsegmente treffen wird. Bei `even-odd` haben Punkte zwischen den beiden Teilen des Pfads eine ungerade Zahl, während jeder Punkt entweder innerhalb des inneren Pfads oder außerhalb des äußeren Teils eine gerade Zahl hat.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlichen Wickelpfaden

Dieses Beispiel verwendet dasselbe SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Beschneidungspfads gegen den Uhrzeigersinn verläuft.

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

Wir wenden denselben CSS wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall wird, da der äußere Teil des Pfads im Uhrzeigersinn (von links nach rechts) und der innere Teil des Pfads gegen den Uhrzeigersinn (von rechts nach links) verläuft, die resultierende Beschneidungsform unabhängig davon, welche Beschneidungsregel verwendet wird, identisch sein.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [Einführung in CSS-Beschneidung](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- SVG {{SVGAttr("fill-rule")}} Attribut
