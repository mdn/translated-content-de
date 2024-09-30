---
title: mask-origin
slug: Web/CSS/mask-origin
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung einer Maske fest.

Für Elemente, die als einzelne Box gerendert werden, gibt diese Eigenschaft den Maskierungspositionierungsbereich an. Mit anderen Worten, sie legt die Ursprungsposition eines Bildes fest, das durch die {{cssxref("mask-image")}} CSS-Eigenschaft angegeben wird. Für Elemente, die als mehrere Boxen gerendert werden, wie Inline-Boxen auf mehreren Zeilen oder Boxen auf mehreren Seiten, gibt sie an, auf welche Boxen {{cssxref("box-decoration-break")}} angewendet wird, um den Maskierungspositionierungsbereich zu bestimmen.

## Syntax

```css
/* Keyword values */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Multiple values */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Non-standard keyword values */
-webkit-mask-origin: content;
-webkit-mask-origin: padding;
-webkit-mask-origin: border;

/* Global values */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: revert-layer;
mask-origin: unset;
```

Eines oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommas.

### Werte

- `content-box`
  - : Die Position ist relativ zur Inhaltsbox.
- `padding-box`
  - : Die Position ist relativ zur Polsterbox. Für Einzelboxen ist `0 0` die obere linke Ecke des Polsterrandes, `100% 100%` ist die untere rechte Ecke.
- `border-box`
  - : Die Position ist relativ zur Rahmenbox.
- `fill-box`
  - : Die Position ist relativ zur Objektbegrenzungsbox.
- `stroke-box`
  - : Die Position ist relativ zur Strichbegrenzungsbox.
- `view-box`
  - : Verwendet das nächste SVG-Ansichtsfenster als Referenzbox. Falls ein {{svgattr("viewBox")}} Attribut für das Element, das das SVG-Ansichtsfenster erstellt, angegeben ist, wird die Referenzbox am Ursprung des durch das `viewBox` Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox auf die Breite und Höhe der `viewBox` Werte eingestellt.
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

### Ursprung der Maske auf border-box setzen

Probieren Sie einige der anderen möglichen Werte aus, indem Sie das CSS in der Box unten aktualisieren.

{{EmbedGHLiveSample("css-examples/masking/mask-origin.html", '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
