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
/* Schlüsselwort-Werte */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Mehrere Werte */
mask-mode: alpha, match-source;

/* Globale Werte */
mask-mode: inherit;
mask-mode: initial;
mask-mode: revert;
mask-mode: revert-layer;
mask-mode: unset;
```

Die `mask-mode` Eigenschaft wird als eines oder mehrere der unten aufgeführten Schlüsselwort-Werte angegeben, getrennt durch Kommas.

### Werte

- `alpha`
  - : Dieses Schlüsselwort gibt an, dass die Transparenzwerte (Alpha-Kanal) des Maskenebenenbildes als Maskenwerte verwendet werden sollen.
- `luminance`
  - : Dieses Schlüsselwort gibt an, dass die Luminanzwerte des Maskenebenenbildes als Maskenwerte verwendet werden sollen.
- `match-source`

  - : Wenn die {{cssxref("mask-image")}} Eigenschaft vom Typ `<mask-source>` ist, sollen die Luminanzwerte des Maskenebenenbildes als Maskenwerte verwendet werden.

    Ist sie vom Typ {{cssxref("&lt;image&gt;")}}, sollen die Alphawerte des Maskenebenenbildes als Maskenwerte verwendet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung des Alpha-Maskenmodus

{{EmbedGHLiveSample("css-examples/masking/mask-mode.html", '100%', 760)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
