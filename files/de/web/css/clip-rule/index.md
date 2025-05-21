---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{CSSRef}}

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfads andere Teile überlappen, welche Pixel in einer Maske innerhalb der durch einen [clip path](/de/docs/Web/CSS/clip-path) definierten Form liegen und welche außerhalb.

Die `clip-rule` Eigenschaft gilt nur für SVG-Elemente, die sich innerhalb eines {{SVGElement("clipPath")}} Elements befinden, und überschreibt den Wert des {{SVGAttr("clip-rule")}} Attributs des Elements, falls vorhanden. Die `clip-rule` Eigenschaft funktioniert im Wesentlichen wie die {{cssxref("fill-rule")}} Eigenschaft, außer dass sie auf `<clipPath>` Definitionen angewendet wird. Sie hat keine Auswirkungen auf CSS {{cssxref("basic-shape")}}s.

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

  - : Für jeden Punkt im Maskenrahmen wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl mit einem Teil des Clip-Pfads schneidet, wird ein Strich um eins erhöht, wenn der Teil des Clip-Pfads von links nach rechts über den Strahl verläuft, und um eins verringert, wenn der Pfadteil von rechts nach links verläuft. Ist die Endsumme der Striche null, liegt der Punkt außerhalb der Form des Pfads. Andernfalls liegt er innerhalb der Form des Pfads.

- `even-odd`

  - : Für jeden Punkt im Maskenrahmen wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl mit einem Teil des Clip-Pfads schneidet, wird ein Strich um eins erhöht. Ist die Endsumme der Striche gerade, liegt der Punkt außerhalb der Form des Pfads; andernfalls liegt er innerhalb der Form des Pfads. Null wird als gerade angesehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wertvergleich

In diesem Beispiel werden wir verschiedene CSS `clip-rule` Werte auf ähnliche SVG {{SVGElement("path")}} Elemente anwenden, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>` Container, von denen jeder ein `<clipPath>` Element enthält, das eine Sternform definiert, und ein `<rect>` Element, um den Stern darin zu zeichnen. Die Sterne werden mit sich überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>` Element, das zeigt, wie die Linien des Pfads, der den Stern erstellt hat, sich überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; `nonzero` im zweiten SVG. Für das pfad-only SVG haben wir die Standard-{{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}} Farbe als auch eine {{cssxref("stroke-width")}} definiert, um die sich überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb von Basic-Shape-Definitionen

Dieses Beispiel zeigt, dass, obwohl die `clip-rule` keinen Effekt auf CSS {{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>` Elementen ein, die Sternformen definieren, die bis auf ihre `id` Attributswerte identisch sind. Außerdem fügen wir zwei `<div>` Elemente ein, die unsere Sternformen enthalten.

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

Wir definieren den `<div>` Elementen eine feste {{cssxref("width")}} und {{cssxref("height")}} und fügen ihren {{cssxref("background-image")}} Werte einen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient) hinzu:

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

Wir verwenden die {{cssxref("clip-path")}} Eigenschaft, um die verschiedenen `<clipPath>` Elemente als Clip-Pfad für jedes `<div>` festzulegen:

```css
div:first-of-type {
  clip-path: url(#star1);
}
div:last-of-type {
  clip-path: url(#star2);
}
```

Zuletzt setzen wir die verschiedenen `clip-rule` Werte für jede der `<clipPath>` Elemente `<path>`s:

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

### Auswahl zwischen Regeln für einen Pfad mit nur im Uhrzeigersinn gezeichneten Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Clipping-Regel ausgeschnitten werden. Es gibt zwei {{SVGElement("clipPath")}} Elemente, so dass eines die non-zero Clipping-Regel verwenden kann und das andere die even-odd Regel. Beide Pfade werden im Uhrzeigersinn sowohl für ihre inneren als auch äußeren Teile gezeichnet.

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

Für die angewendeten Clip-Pfade, die auf die ausgeschnittenen Rechtecke angewendet werden, wird die CSS `clip-rule` Eigenschaft genutzt, um einen Pfad die `nonzero` Regeln verwenden zu lassen und der andere die `evenodd` Regel. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die entgegengesetzten Werte festgelegt wurden, wie es CSS auferlegt.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sowohl die inneren als auch äußeren Teile des Pfads im Uhrzeigersinn (von links nach rechts) verlaufen, wird die resultierende Clip-Form zwischen den beiden Clipping-Regeln unterschiedlich sein. Bei `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form eine Summe über Null aufweisen, da er auf einen oder mehrere von links nach rechts verlaufende Pfadfragmente trifft. Bei `even-odd` werden Punkte zwischen den beiden Teilen des Pfades eine ungerade Summe haben, während jeder Punkt innerhalb des inneren Pfades oder außerhalb des äußeren Teils eine gerade Summe hat.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Wahl zwischen Regeln für einen Pfad mit verschiedenen Wicklungen

Dieses Beispiel verwendet das gleiche SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Clipping-Pfads in einer gegen den Uhrzeigersinn gerichteten Wicklung verläuft.

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

Wir wenden die gleiche CSS an wie zuvor.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall, da der äußere Teil des Pfads im Uhrzeigersinn (von links nach rechts) verläuft und der innenliegende Teil des Pfads in einer gegen den Uhrzeigersinn (von rechts nach links) Richtung verläuft, wird die resultierende Clip-Form unabhängig von der verwendeten Clipping-Regel gleich sein.

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
