---
title: mask-origin
slug: Web/CSS/mask-origin
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprungsort einer Maske fest.

Für Elemente, die als Einzelbox dargestellt werden, gibt diese Eigenschaft den Bereich zur Maskenpositionierung an. Mit anderen Worten, diese Eigenschaft spezifiziert die Ursprungsposition eines Bildes, das durch die {{cssxref("mask-image")}} CSS-Eigenschaft angegeben wird. Bei Elementen, die als mehrere Boxen dargestellt werden, wie beispielsweise Inline-Boxen auf mehreren Zeilen oder Boxen auf mehreren Seiten, gibt sie an, auf welche Boxen {{cssxref("box-decoration-break")}} wirkt, um den Bereich zur Maskenpositionierung zu bestimmen.

## Syntax

```css
/* Schlüsselwortwerte */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Mehrere Werte */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Nicht-standardmäßige Schlüsselwortwerte */
-webkit-mask-origin: content;
-webkit-mask-origin: padding;
-webkit-mask-origin: border;

/* Globale Werte */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

Eins oder mehrere der unten aufgeführten Schlüsselwortwerte, durch Kommata getrennt.

### Werte

- `content-box`
  - : Die Position ist relativ zur Inhaltsbox.
- `padding-box`
  - : Die Position ist relativ zur Polsterbox. Für Einzelboxen ist `0 0` die obere linke Ecke der Polsterkante, `100% 100%` ist die untere rechte Ecke.
- `border-box`
  - : Die Position ist relativ zur Rahmenbox.
- `fill-box`
  - : Die Position ist relativ zur Objektbegrenzungsbox.
- `stroke-box`
  - : Die Position ist relativ zur Strichbegrenzungsbox.
- `view-box`
  - : Verwendet den nächstgelegenen SVG-Ansichtsbereich als Referenzbox. Wenn ein {{svgattr("viewBox")}} Attribut für das Element, das den SVG-Ansichtsbereich erstellt, angegeben ist, wird die Referenzbox an der Ursprungsposition des durch das `viewBox` Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox` Attributs festgelegt.
- `content`
  - : Entspricht `content-box`.
- `padding`
  - : Entspricht `padding-box`.
- `border`
  - : Entspricht `border-box`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskenursprung auf border-box setzen

Versuchen Sie einige der anderen möglichen Werte, indem Sie das CSS in der Box unten aktualisieren.

{{EmbedGHLiveSample("css-examples/masking/mask-origin.html", '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
