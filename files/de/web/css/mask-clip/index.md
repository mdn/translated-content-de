---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`mask-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Bereich, der von einer Maske betroffen ist. Der gemalte Inhalt eines Elements muss auf diesen Bereich beschränkt sein.

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

Einer oder mehrere der unten aufgeführten Schlüsselwortwerte, durch Kommas getrennt.

### Werte

- `content-box`
  - : Der gemalte Inhalt wird auf die Inhalt-Box zugeschnitten.
- `padding-box`
  - : Der gemalte Inhalt wird auf die Polster-Box zugeschnitten.
- `border-box`
  - : Der gemalte Inhalt wird auf die Rand-Box zugeschnitten.
- `fill-box`
  - : Der gemalte Inhalt wird auf die Objekt-Begrenzungsbox zugeschnitten.
- `stroke-box`
  - : Der gemalte Inhalt wird auf die Linien-Begrenzungsbox zugeschnitten.
- `view-box`
  - : Verwendet den nächsten SVG-Viewport als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox) Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird die Referenzbox am Ursprung des Koordinatensystems positioniert, das durch das `viewBox` Attribut festgelegt wird, und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox` Attributs eingestellt.
- `no-clip`
  - : Der gemalte Inhalt wird nicht ausgeschnitten.
- `border`
  - : Dieses Schlüsselwort verhält sich wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich wie `content-box`.
- `text`
  - : Dieses Schlüsselwort schneidet das Maskenbild auf den Text des Elements zu.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zuschneiden einer Maske auf die Rand-Box

Ändern Sie den Wert von `mask-clip` zu einem der oben beschriebenen zulässigen Werte. Wenn Sie das Beispiel in einem Chromium-basierten Browser betrachten, ändern Sie den Wert von `-webkit-mask-clip`.

{{EmbedGHLiveSample("css-examples/masking/mask-clip.html", '100%', 800)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
