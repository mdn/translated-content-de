---
title: clip-rule
slug: Web/CSS/clip-rule
l10n:
  sourceCommit: 1c2518597c5a51ab47c1db94ae0ec61c028865a3
---

{{CSSRef}}

Die **`clip-rule`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert, wie bestimmt wird, welche Pixel in der Box einer Maske innerhalb der durch einen [clip path](/de/docs/Web/CSS/clip-path) definierten Ausschnittform liegen und welche außerhalb liegen, wenn Teile des Pfades andere Teile überlappen. Insbesondere wird zwischen den Methoden "non-zero" und "even-odd" zur Bestimmung der Inklusion gewählt. Die `clip-rule` kann auf alle SVG-Elemente angewendet werden, hat jedoch nur Auswirkungen auf diejenigen, die Teil eines Clipping-Pfades sind. CSS-Werte der `clip-rule`-Eigenschaft können SVG-Werte des {{SVGAttr("clip-rule")}} Attributs überschreiben.

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

  - : Für jeden Punkt in der Box der Maskierung wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Clipping-Pfades schneidet, wird eine Zählung um eins erhöht, wenn der Teil des Clipping-Pfades von links nach rechts über den Strahl verläuft, oder um eins verringert, wenn der Teil des Pfades von rechts nach links über den Strahl verläuft. Wenn die endgültige Summe der Zählung null ist, liegt der Punkt außerhalb der Form des Pfades. Andernfalls liegt er innerhalb der Form des Pfades.

- `even-odd`

  - : Für jeden Punkt in der Box der Maskierung wird ein Strahl in eine zufällige Richtung gezeichnet. Jedes Mal, wenn der Strahl einen Teil des Clipping-Pfades schneidet, wird eine Zählung um eins erhöht. Wenn die endgültige Summe der Zählung gerade ist, liegt der Punkt außerhalb der Form des Pfades; andernfalls liegt er innerhalb der Form des Pfades. Null wird als gerade angesehen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wahl zwischen Regeln für einen Pfad mit ausschließlich im Uhrzeigersinn verlaufenden Pfaden

In diesem SVG-Bild haben wir zwei Rechtecke, die einmal mit jeder Clipping-Regel ausgeschnitten sind. Es gibt zwei {{SVGElement("clipPath")}} Elemente, sodass eines auf die non-zero Clipping-Regel gesetzt werden kann und das andere die even-odd Regel verwendet. Beide Pfade werden im Uhrzeigersinn für sowohl die inneren als auch die äußeren Teile gezeichnet.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#123" fill="#BCD">
    <!-- Visualisierung des grundlegenden Rechtecks und des Clipping-Pfades folgt -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- Zu ausschneidende Rechtecke folgen -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- Clipping-Pfade folgen -->
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

Für die Clipping-Pfade, die auf die ausgeschnittenen Rechtecke angewendet werden, wird die CSS `clip-rule` Eigenschaft verwendet, um einen Pfad so einzustellen, dass er die `nonzero` Regeln verwendet, und den anderen so, dass er die `evenodd` Regel verwendet. Diese überschreiben die Werte der `clip-path` Attribute im SVG, die absichtlich auf entgegengesetzte Werte gesetzt wurden, als das CSS vorgibt.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Da sowohl die inneren als auch die äußeren Teile des Pfades im Uhrzeigersinn (von links nach rechts) verlaufen, wird die resultierende Clipping-Form zwischen den beiden Clipping-Regeln unterschiedlich sein. Bei `nonzero` wird jeder Strahl innerhalb des äußeren Teils der Form einen Zählwert oberhalb von null ergeben, da er auf ein oder mehrere von links nach rechts gerichtete Pfadfragmente trifft. Bei `even-odd` haben Punkte zwischen den beiden Teilen des Pfades einen ungeradzahligen Zählwert, während jeder Punkt entweder innerhalb des inneren Pfades oder außerhalb des äußeren Teils einen geradzahligen Zählwert hat.

{{EmbedLiveSample("Wahl zwischen Regeln für einen Pfad mit ausschließlich im Uhrzeigersinn verlaufenden Pfaden", "500", "200")}}

### Wahl zwischen Regeln für einen Pfad mit unterschiedlichen Wickelrichtungen

Dieses Beispiel verwendet dasselbe SVG wie das vorherige Beispiel, mit der Änderung, dass der innere Teil des Clipping-Pfades in einer gegen den Uhrzeigersinn verlaufenden Richtung windet.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#123" fill="#BCD">
    <!-- Visualisierung des grundlegenden Rechtecks und des Clipping-Pfades folgt -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- Zu ausschneidende Rechtecke folgen -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- Clipping-Pfade folgen -->
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

In diesem Fall wird die resultierende Clipping-Form gleich sein, unabhängig davon, welche Clipping-Regel verwendet wird, da der äußere Teil des Pfades im Uhrzeigersinn (von links nach rechts) verläuft und der innere Teil des Pfades gegen den Uhrzeigersinn (von rechts nach links) verläuft.

{{EmbedLiveSample("Wahl zwischen Regeln für einen Pfad mit unterschiedlichen Wickelrichtungen", "500", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("clip-rule")}} Attribut
- SVG {{SVGElement("clipPath")}} Element
- CSS {{CSSxRef('clip-path')}} Eigenschaft
