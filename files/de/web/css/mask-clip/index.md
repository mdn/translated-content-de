---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`mask-clip`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt den Bereich, der von einer Maske betroffen ist. Der gemalte Inhalt eines Elements muss auf diesen Bereich beschränkt werden.

## Syntax

```css
/* <coord-box> values */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Keyword values */
mask-clip: no-clip;

/* Non-standard keyword values */
-webkit-mask-clip: border;
-webkit-mask-clip: padding;
-webkit-mask-clip: content;
-webkit-mask-clip: text;

/* Multiple values */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* Global values */
mask-clip: inherit;
mask-clip: initial;
mask-clip: revert;
mask-clip: revert-layer;
mask-clip: unset;
```

Eines oder mehrere der unten aufgelisteten Schlüsselwörter, getrennt durch Kommas.

### Werte

- `content-box`
  - : Der gemalte Inhalt wird auf die Content-Box beschnitten.
- `padding-box`
  - : Der gemalte Inhalt wird auf die Padding-Box beschnitten.
- `border-box`
  - : Der gemalte Inhalt wird auf die Border-Box beschnitten.
- `fill-box`
  - : Der gemalte Inhalt wird auf die Umgrenzungsbox des Objekts beschnitten.
- `stroke-box`
  - : Der gemalte Inhalt wird auf die Begrenzungsbox des Strichs beschnitten.
- `view-box`
  - : Verwendet das nächste SVG-Viewport als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox)-Attribut für das Element festgelegt ist, das das SVG-Viewport erstellt, wird die Referenzbox am Ursprung des durch das `viewBox`-Attribut etablierten Koordinatensystems positioniert und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox`-Attributs gesetzt.
- `no-clip`
  - : Der gemalte Inhalt wird nicht beschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich wie `content-box`.
- `text`
  - : Dieses Schlüsselwort schneidet das Maskenbild auf den Text des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Maske auf die Border-Box zuschneiden

Ändern Sie den `mask-clip`-Wert auf einen der oben detailliert erlaubten Werte. Wenn Sie das Beispiel in einem Browser auf Chromium-Basis anzeigen, ändern Sie den Wert von `-webkit-mask-clip`.

{{EmbedGHLiveSample("css-examples/masking/mask-clip.html", '100%', 800)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
