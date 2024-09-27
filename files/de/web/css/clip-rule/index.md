---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 1c2518597c5a51ab47c1db94ae0ec61c028865a3
---

{{CSSRef}}

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, wie festgelegt wird, welche Pixel in einem Maskenkasten innerhalb der durch einen [clip path](/de/docs/Web/CSS/clip-path) definierten Schnittform und welche außerhalb liegen, wenn sich Teile des Pfades überlappen. Insbesondere wählt sie zwischen den Methoden "non-zero" und "even-odd" zur Bestimmung der Inklusion. `clip-rule` kann auf alle SVG-Elemente angewendet werden, hat jedoch nur Auswirkungen auf solche, die Teil eines Clip-Pfads sind. CSS-Werte der `clip-rule` Eigenschaft können SVG-Werte des {{SVGAttr("clip-rule")}} Attributs überschreiben.

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

  - : Für jeden Punkt in der Box der Clip-Maske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl mit einem Teil des Clip-Pfades schneidet, wird eine Zählung um eins erhöht, wenn sich der Pfadteil von links nach rechts über den Strahl bewegt, und sie wird um eins verringert, wenn sich der Pfadteil von rechts nach links über den Strahl bewegt. Wenn die endgültige Summe der Zählung null ist, liegt der Punkt außerhalb der Form des Pfades. Andernfalls liegt er innerhalb der Form des Pfades.

- `even-odd`

  - : Für jeden Punkt in der Box der Clip-Maske wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl mit einem Teil des Clip-Pfades schneidet, wird eine Zählung um eins erhöht. Wenn die endgültige Summe der Zählung gerade ist, liegt der Punkt außerhalb der Form des Pfades; andernfalls liegt er innerhalb der Form des Pfades. Null wird als gerade genommen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswahl zwischen Regeln für einen Pfad mit allen im Uhrzeigersinn verlaufenden Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die beschnitten sind, einmal mit jeder Schnittregel. Es gibt zwei {{SVGElement("clipPath")}} Elemente, sodass eines auf die Verwendung der "non-zero" Schnittregel eingestellt werden kann und das andere die "even-odd" Regel verwendet. Beide Pfade werden im Uhrzeigersinn sowohl für ihre inneren als auch äußeren Teile gezeichnet.

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

Bei den auf die beschnittenen Rechtecke angewandten Clip-Pfaden wird die CSS-Eigenschaft `clip-rule` verwendet, um einen Pfad auf die Verwendung der `nonzero` Regeln und den anderen auf die Verwendung der `evenodd` Regel einzustellen. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf die entgegengesetzten Werte wie die CSS festgelegt sind.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sich sowohl die inneren als auch die äußeren Teile des Pfades im Uhrzeigersinn (von links nach rechts) bewegen, wird die resultierende Clip-Form zwischen den beiden Schnittregeln unterschiedlich sein. Bei `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form zu einem Wert über null führen, da er auf ein oder mehrere von links nach rechts verlaufende Pfadfragmente stößt. Bei `even-odd` werden Punkte zwischen den beiden Teilen des Pfades eine ungerade Anzahl in der Zählung haben, während jeder Punkt, der entweder im inneren Pfad liegt oder außerhalb des äußeren Teils, eine gerade Anzahl in der Zählung haben wird.

{{EmbedLiveSample("Auswahl zwischen Regeln für einen Pfad mit allen im Uhrzeigersinn verlaufenden Pfaden", "500", "200")}}

### Auswahl zwischen Regeln für einen Pfad mit unterschiedlichen Wicklungen

Dieses Beispiel verwendet das gleiche SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Clip-Pfades in einer gegen den Uhrzeigersinn verlaufenden Richtung verläuft.

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

In diesem Fall wird die resultierende Clip-Form, weil sich der äußere Teil des Pfades im Uhrzeigersinn (von links nach rechts) und der innere Teil im Gegenuhrzeigersinn (von rechts nach links) bewegt, unabhängig davon, welche Schnittregel verwendet wird, gleich sein.

{{EmbedLiveSample("Auswahl zwischen Regeln für einen Pfad mit unterschiedlichen Wicklungen", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- CSS {{CSSxRef('clip-path')}} Eigenschaft
