---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 1c2518597c5a51ab47c1db94ae0ec61c028865a3
---

{{CSSRef}}

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, wie bestimmt wird, welche Pixel in einem Maskenkasten innerhalb der durch einen [Clip-Pfad](/de/docs/Web/CSS/clip-path) definierten Schnittform und welche außerhalb liegen, wenn Teile des Pfades andere Teile überlappen. Insbesondere wählt sie zwischen den Methoden "non-zero" und "even-odd", um die Einbeziehung zu bestimmen. `clip-rule` kann auf alle SVG-Elemente angewendet werden, hat jedoch nur Auswirkungen auf diejenigen, die Teil eines Clip-Pfades sind. CSS-Werte der `clip-rule` Eigenschaft können SVG-Werte des {{SVGAttr("clip-rule")}} Attributs überschreiben.

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

  - : Für jeden Punkt im Schnittmaskenkasten wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl mit einem Teil des Clip-Pfades kreuzt, wird der Zähler um eins erhöht, wenn der Teil des Clip-Pfades von links nach rechts über den Strahl verläuft, und um eins verringert, wenn der Pfadteil von rechts nach links über den Strahl verläuft. Ist der endgültige Gesamtwert des Zählers null, liegt der Punkt außerhalb der Form des Pfades. Andernfalls liegt er innerhalb der Form des Pfades.

- `even-odd`

  - : Für jeden Punkt im Schnittmaskenkasten wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl mit einem Teil des Clip-Pfades kreuzt, wird der Zähler um eins erhöht. Ist der endgültige Gesamtwert des Zählers gerade, liegt der Punkt außerhalb der Form des Pfades; andernfalls liegt er innerhalb der Form des Pfades. Null wird als gerade betrachtet.

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Wahl zwischen Regeln für einen Pfad mit ausschließlich im Uhrzeigersinn gezeichneten Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die jeweils mit einer der Schnittregeln zugeschnitten werden. Es gibt zwei {{SVGElement("clipPath")}} Elemente, sodass eines auf die non-zero Schnittregel eingestellt werden kann und das andere die even-odd Regel verwendet. Beide Pfade werden im Uhrzeigersinn sowohl für ihre inneren als auch äußeren Teile gezeichnet.

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

Für die auf die zugeschnittenen Rechtecke angewandten Clip-Pfade wird die CSS `clip-rule` Eigenschaft verwendet, um einen Pfad so einzustellen, dass er die `nonzero` Regeln verwendet, und den anderen, dass er die `evenodd` Regel verwendet. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf entgegengesetzte Werte gesetzt wurden, wie sie die CSS vorschreibt.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sowohl die inneren als auch äußeren Teile des Pfades im Uhrzeigersinn (von links nach rechts) verlaufen, wird sich die resultierende Schnittform zwischen den beiden Schnittregeln unterscheiden. Bei `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form auf einen Wert über null gezählt, da er auf einen oder mehrere von links nach rechts verlaufende Teile des Pfades trifft. Bei `even-odd` haben Punkte zwischen den beiden Teilen des Pfades eine ungerade Nummer im Zähler, während jeder Punkt sowohl innerhalb des inneren Pfades als auch außerhalb des äußeren Teils eine gerade Nummer im Zähler aufweist.

{{EmbedLiveSample("Wahl zwischen Regeln für einen Pfad mit ausschließlich im Uhrzeigersinn gezeichneten Pfaden", "500", "200")}}

### Wahl zwischen Regeln für einen Pfad mit unterschiedlichen Wickelrichtungen

Dieses Beispiel verwendet das gleiche SVG wie das vorhergehende Beispiel, mit der Änderung, dass der innere Teil des Clip-Pfades in eine gegen den Uhrzeigersinn verlaufende Richtung geht.

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

Wir wenden dasselbe CSS wie zuvor an.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

In diesem Fall wird die resultierende Schnittform unabhängig davon, welche Schnittregel verwendet wird, gleich sein, da der äußere Teil des Pfades im Uhrzeigersinn (von links nach rechts) und der innere Teil des Pfades gegen den Uhrzeigersinn (von rechts nach links) verläuft.

{{EmbedLiveSample("Wahl zwischen Regeln für einen Pfad mit unterschiedlichen Wickelrichtungen", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- CSS {{CSSxRef('clip-path')}} Eigenschaft
