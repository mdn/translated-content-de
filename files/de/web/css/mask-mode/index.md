---
title: mask-mode
slug: Web/CSS/mask-mode
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`mask-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob die durch {{cssxref("mask-image")}} definierte Maske als Luminanz- oder Alphamaske behandelt wird.

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

Die `mask-mode` Eigenschaft wird als eines oder mehrere der unten aufgeführten Schlüsselwortwerte angegeben, getrennt durch Kommas.

### Werte

- `alpha`
  - : Dieses Schlüsselwort gibt an, dass die Transparenzwerte (Alpha-Kanal) des Maskenschichtbildes als Maskenwerte verwendet werden sollen.
- `luminance`
  - : Dieses Schlüsselwort gibt an, dass die Luminanzwerte des Maskenschichtbildes als Maskenwerte verwendet werden sollen.
- `match-source`

  - : Wenn die Eigenschaft {{cssxref("mask-image")}} vom Typ `<mask-source>` ist, sollten die Luminanzwerte des Maskenschichtbildes als Maskenwerte verwendet werden.

    Handelt es sich um den Typ {{cssxref("&lt;image&gt;")}}, sollten die Alphawerte des Maskenschichtbildes als Maskenwerte verwendet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Alphamaskenmodus

{{EmbedGHLiveSample("css-examples/masking/mask-mode.html", '100%', 760)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
