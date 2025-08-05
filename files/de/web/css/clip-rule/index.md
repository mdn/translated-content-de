---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wenn Teile des Pfades andere Teile überlappen, welche Pixel in einem Maskenrahmen innerhalb der durch einen [Clip-Pfad](/de/docs/Web/CSS/clip-path) definierten Schnittform liegen und welche außerhalb.

Die `clip-rule` Eigenschaft gilt nur für SVG-Elemente, die innerhalb eines {{SVGElement("clipPath")}} Elements enthalten sind und überschreibt den `{{SVGAttr("clip-rule")}}` Attributwert des Elements, falls vorhanden. Die `clip-rule` Eigenschaft funktioniert im Wesentlichen wie die Eigenschaft {{cssxref("fill-rule")}}, jedoch gilt sie für `<clipPath>` Definitionen. Sie hat keinerlei Effekt auf CSS {{cssxref("basic-shape")}}s.

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
  - : Für jeden Punkt in der Box der Schnittmaske wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl mit einem Teil des Schnittpfads kreuzt, wird eine Zählung um eins erhöht, wenn der Teil des Schnittpfads von links nach rechts über den Strahl verläuft, und um eins verringert, wenn der Teil des Pfads von rechts nach links über den Strahl verläuft. Ist der endgültige Wert der Zählung Null, liegt der Punkt außerhalb der Form des Pfads. Andernfalls liegt er innerhalb der Form des Pfads.

- `even-odd`
  - : Für jeden Punkt in der Box der Schnittmaske wird ein Strahl in eine zufällige Richtung gezogen. Jedes Mal, wenn der Strahl mit einem Teil des Schnittpfads kreuzt, wird eine Zählung um eins erhöht. Ist der endgültige Wert der Zählung gerade, liegt der Punkt außerhalb der Form des Pfads; andernfalls liegt er innerhalb der Form des Pfads. Null wird als gerade betrachtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Werte

In diesem Beispiel wenden wir unterschiedliche CSS `clip-rule` Werte auf ähnliche SVG {{SVGElement("path")}} Elemente an, um den Unterschied zwischen `evenodd` und `non-zero` zu demonstrieren.

#### HTML

Das Markup enthält mehrere `<svg>` Container, die jeweils ein `<clipPath>` Element enthalten, das eine Sternform definiert, und ein `<rect>` Element, um den Stern darin zu zeichnen. Die Sterne werden mit sich überlappenden Linien erstellt. Abgesehen von der `id` ist das Markup der ersten beiden SVG-Elemente identisch. Das dritte SVG enthält nur das `<path>` Element und zeigt, wie sich die Pfadlinien, die den Stern erstellt haben, überlappen.

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

Die `clip-rule` für das `<path>` im ersten SVG ist auf `evenodd` gesetzt; `nonzero` im zweiten SVG. Für das pfad-only SVG haben wir die Standard-{{cssxref("fill")}} entfernt und sowohl eine {{cssxref("stroke")}} Farbe als auch {{cssxref("stroke-width")}} definiert, um die sich überlappenden Pfadlinien sichtbar zu machen:

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

### Innerhalb von Grundform-Definitionen

Dieses Beispiel zeigt, dass, während die `clip-rule` keinen Effekt auf CSS {{cssxref("basic-shape")}}s hat, sie ein `<clipPath>` beeinflussen kann, das als Quelle einer Form verwendet wird.

#### HTML

Wir fügen ein SVG mit zwei `<clipPath>` Elementen hinzu, die Sternformen definieren, die bis auf ihre `id` Attributwerte identisch sind. Wir fügen auch zwei `<div>` Elemente hinzu, die unsere Sternformen enthalten werden.

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

Wir geben den `<div>` Elementen eine festgelegte {{cssxref("width")}} und {{cssxref("height")}}, und fügen einen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient) für ihren {{cssxref("background-image")}} Wert hinzu:

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

Wir verwenden die {{cssxref("clip-path")}} Eigenschaft, um die unterschiedlichen `<clipPath>` Elemente als Schnittpfad für jedes `<div>` zu setzen:

```css
div:first-of-type {
  clip-path: url("#star1");
}
div:last-of-type {
  clip-path: url("#star2");
}
```

Schließlich setzen wir die unterschiedlichen `clip-rule` Werte für jedes der `<clipPath>` Element's `<path>`s:

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

### Wahl zwischen Regeln für einen Pfad mit nur im Uhrzeigersinn gezeichneten Wegen

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Schnittregel beschnitten werden. Es gibt zwei {{SVGElement("clipPath")}} Elemente, sodass eines die Nonzero-Schnittregel und das andere die Even-Odd-Regel verwendet. Beide Pfade werden im Uhrzeigersinn sowohl für ihre inneren als auch äußeren Teile gezeichnet.

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

Auf die Schnittpfade, die auf die beschnittenen Rechtecke angewendet werden, wird die CSS `clip-rule` Eigenschaft verwendet, um einen Pfad auf die `nonzero` Regeln zu setzen und den anderen auf die `evenodd` Regel. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die gegenüberliegenden Werte der von CSS auferlegten Werte gesetzt wurden.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sich sowohl die inneren als auch die äußeren Teile des Pfads im Uhrzeigersinn (von links nach rechts) bewegen, wird sich die resultierende Schnittform zwischen den zwei Schnittregeln unterscheiden. Bei `nonzero` wird ein beliebiger Strahl innerhalb des äußeren Teils der Form zu einem Wert über Null führen, da er auf ein oder mehrere links-nach-rechts verlaufende Pfadfragmente treffen wird. Bei `even-odd` haben Punkte zwischen den beiden Teilen des Pfades eine ungerade nummerierte Zählung, während jeder Punkt entweder innerhalb des inneren Pfades oder außerhalb des äußeren Teils eine gerade Nummer haben wird.

{{EmbedLiveSample("Choosing between rules for a path with all clockwise paths", "500", "200")}}

### Wahl zwischen Regeln für einen Pfad mit unterschiedlichen Windungen

Dieses Beispiel verwendet dasselbe SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Schnittpfads in eine gegen den Uhrzeigersinn gerichtete Richtung verläuft.

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

Wir verwenden dasselbe CSS wie zuvor.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall wird aufgrund der Tatsache, dass sich der äußere Teil des Pfades im Uhrzeigersinn (von links nach rechts) und der innere Teil des Pfades gegen den Uhrzeigersinn (von rechts nach links) bewegt, die resultierende Schnittform unabhängig davon, welche Schnittregel verwendet wird, dieselbe sein.

{{EmbedLiveSample("Choosing between rules for a path with different winding paths", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("fill-rule")}}
- {{cssxref("clip-path")}}
- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- SVG {{SVGAttr("fill-rule")}} Attribut
