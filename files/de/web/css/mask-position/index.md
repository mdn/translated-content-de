---
title: mask-position
slug: Web/CSS/mask-position
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`mask-position`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt die anfängliche Position relativ zur Maskenpositionsebene fest, die durch {{cssxref("mask-origin")}} festgelegt wird, für jedes definierte Maskenbild.

## Syntax

```css
/* Keyword values */
mask-position: top;
mask-position: bottom;
mask-position: left;
mask-position: right;
mask-position: center;

/* <position> values */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* Multiple values */
mask-position: top right;
mask-position:
  1rem 1rem,
  center;

/* Global values */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: revert-layer;
mask-position: unset;
```

Ein oder mehrere `<position>`-Werte, getrennt durch Kommata.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Ein bis vier Werte, die eine 2D-Position in Bezug auf die Ränder des Elementrahmens darstellen. Relative oder absolute Versätze können angegeben werden. Beachten Sie, dass die Position außerhalb des Elementrahmens festgelegt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskenposition festlegen

Ändern Sie den `mask-position`-Wert in einen der oben beschriebenen zulässigen Werte.
Wenn Sie das Beispiel in einem auf Chromium basierenden Browser ansehen, ändern Sie den Wert von `-webkit-mask-position`.

{{EmbedGHLiveSample("css-examples/masking/mask-position.html", '100%', 760)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
