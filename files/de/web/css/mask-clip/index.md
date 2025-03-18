---
title: mask-clip
slug: Web/CSS/mask-clip
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Die **`mask-clip`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt den Bereich, der von einer Maske betroffen ist. Der bemalte Inhalt eines Elements muss auf diesen Bereich beschränkt sein.

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

Einer oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommas.

### Werte

- `content-box`
  - : Der bemalte Inhalt wird auf die Inhaltsebene zugeschnitten.
- `padding-box`
  - : Der bemalte Inhalt wird auf die Polsterebene zugeschnitten.
- `border-box`
  - : Der bemalte Inhalt wird auf die Rahmenebene zugeschnitten.
- `fill-box`
  - : Der bemalte Inhalt wird auf die Objektumrahmungsbox zugeschnitten.
- `stroke-box`
  - : Der bemalte Inhalt wird auf die Umrandungsausdehnungsbox zugeschnitten.
- `view-box`
  - : Verwendet das nächstgelegene SVG-Viewport als Referenzbox. Wenn ein [`viewBox`](/de/docs/Web/SVG/Reference/Attribute/viewBox)-Attribut für das Element, das den SVG-Viewport erstellt, angegeben ist, wird die Referenzbox an den Ursprung des vom `viewBox`-Attribut festgelegten Koordinatensystems positioniert, und die Dimension der Referenzbox wird auf die Breite und Höhe des `viewBox`-Attributs gesetzt.
- `no-clip`
  - : Der bemalte Inhalt wird nicht zugeschnitten.
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

### Zuschneiden einer Maske auf die Rahmenebene

Klicken Sie auf "Abspielen" im Live-Beispiel, um den Code im MDN Playground zu öffnen und den Wert von `mask-clip` auf einen der oben beschriebenen zulässigen Werte zu ändern.

```html live-sample___mask-clip-example
<div class="masked"></div>
```

```css live-sample___mask-clip-example
.masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 20px;
  border: 20px solid #8ca0ff;
  padding: 20px;

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
  mask-size: 100% 100%;
  mask-clip: border-box;
}
```

{{EmbedLiveSample("mask-clip-example", "", "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
