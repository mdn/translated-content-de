---
title: mask-origin
slug: Web/CSS/mask-origin
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`mask-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung einer Maske fest.

Für Elemente, die als ein einzelnes Feld gerendert werden, gibt diese Eigenschaft den Maskierungspositionierungsbereich an. Mit anderen Worten spezifiziert diese Eigenschaft die Ursprungsposition eines Bildes, das durch die {{cssxref("mask-image")}} CSS-Eigenschaft angegeben ist. Für Elemente, die als mehrere Felder gerendert werden, wie Inline-Felder auf mehreren Zeilen oder Felder auf mehreren Seiten, spezifiziert sie, auf welche Felder {{cssxref("box-decoration-break")}} anwendbar ist, um den Maskierungspositionierungsbereich zu bestimmen.

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

Eines oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommata.

### Werte

- `content-box`
  - : Die Position ist relativ zur Content-Box.
- `padding-box`
  - : Die Position ist relativ zur Padding-Box. Für einzelne Felder ist `0 0` die obere linke Ecke des Padding-Randes, `100% 100%` ist die untere rechte Ecke.
- `border-box`
  - : Die Position ist relativ zur Border-Box.
- `fill-box`
  - : Die Position ist relativ zur Begrenzungsbox des Objekts.
- `stroke-box`
  - : Die Position ist relativ zur Begrenzungsbox des Strichs.
- `view-box`
  - : Verwendet den nächstgelegenen SVG-Viewport als Referenzbox. Wenn ein {{svgattr("viewBox")}}-Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird die Referenzbox am Ursprung des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox`-Attributs gesetzt.
- `content`
  - : Identisch mit `content-box`.
- `padding`
  - : Identisch mit `padding-box`.
- `border`
  - : Identisch mit `border-box`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskenursprung auf border-box setzen

Versuchen Sie einige der anderen möglichen Werte, indem Sie das CSS im folgenden Feld aktualisieren.

{{EmbedGHLiveSample("css-examples/masking/mask-origin.html", '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ausschnitt und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
