---
title: mask-mode
slug: Web/CSS/mask-mode
l10n:
  sourceCommit: 759e230fb79ab6b333691262e089749d99104c25
---

{{CSSRef}}

Die **`mask-mode`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob die durch {{cssxref("mask-image")}} definierte Maskenreferenz als Luminanz- oder Alphamaske behandelt wird.

## Syntax

```css
/* Keyword values */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Multiple values */
mask-mode: alpha, match-source;

/* Global values */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: revert-layer;
mask-mode: unset;
```

Die `mask-mode`-Eigenschaft wird als eines oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommata, angegeben.

### Werte

- `alpha`
  - : Dieses Schlüsselwort gibt an, dass die Transparenzwerte (Alphakanal) des Maskenbildebenen verwendet werden sollen.
- `luminance`
  - : Dieses Schlüsselwort gibt an, dass die Luminanzwerte des Maskenbildebenen verwendet werden sollen.
- `match-source`

  - : Wenn die {{cssxref("mask-image")}}-Eigenschaft vom Typ `<mask-source>` ist, sollen die Luminanzwerte des Maskenbildebenen verwendet werden.

    Wenn sie vom Typ {{cssxref("&lt;image&gt;")}} ist, sollen die Alphawerte des Maskenbildebenen verwendet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung des Alpha-Maskenmodus

```html live-sample___mask-mode-example
<div class="masked"></div>
```

```css live-sample___mask-mode-example
.masked {
  width: 227px;
  height: 200px;
  background: blue linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
  mask-mode: alpha;
}
```

{{EmbedLiveSample("mask-mode-example", "", "250px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
