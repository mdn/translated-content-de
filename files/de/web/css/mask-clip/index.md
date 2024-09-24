---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`mask-clip`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Bereich, der von einer Maske beeinflusst wird. Der bemalte Inhalt eines Elements muss auf diesen Bereich beschränkt sein.

## Syntax

```css
/* <coord-box> Werte */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Schlüsselwortwerte */
mask-clip: no-clip;

/* Nicht-standardisierte Schlüsselwortwerte */
-webkit-mask-clip: border;
-webkit-mask-clip: padding;
-webkit-mask-clip: content;
-webkit-mask-clip: text;

/* Mehrere Werte */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* Globale Werte */
mask-clip: inherit;
mask-clip: initial;
mask-clip: revert;
mask-clip: revert-layer;
mask-clip: unset;
```

Eins oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommata.

### Werte

- `content-box`
  - : Der bemalte Inhalt wird auf die Inhaltbox begrenzt.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Polsterungsbox begrenzt.
- `border-box`
  - : Der bemalte Inhalt wird auf die Rahmenbox begrenzt.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektbegrenzungsbox begrenzt.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Strichbegrenzungsbox begrenzt.
- `view-box`
  - : Verwendet den nächsten SVG-Viewport als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Attribute/viewBox) Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird die Referenzbox am Ursprung des durch das `viewBox`-Attribut festgelegten Koordinatensystems positioniert, und die Dimension der Referenzbox wird auf die Breiten- und Höhenwerte des `viewBox`-Attributs festgelegt.
- `no-clip`
  - : Der bemalte Inhalt wird nicht begrenzt.
- `border`
  - : Dieses Schlüsselwort verhält sich wie `border-box`.
- `padding`
  - : Dieses Schlüsselwort verhält sich wie `padding-box`.
- `content`
  - : Dieses Schlüsselwort verhält sich wie `content-box`.
- `text`
  - : Dieses Schlüsselwort begrenzt das Maskenbild auf den Text des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zuschneiden einer Maske auf die Rahmenbox

Ändern Sie den Wert von `mask-clip` in einen der oben angegebenen zulässigen Werte. Wenn Sie das Beispiel in einem auf Chromium basierenden Browser ansehen, ändern Sie den Wert von `-webkit-mask-clip`.

{{EmbedGHLiveSample("css-examples/masking/mask-clip.html", '100%', 800)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
