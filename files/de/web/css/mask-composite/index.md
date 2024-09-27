---
title: mask-composite
slug: Web/CSS/mask-composite
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`mask-composite`** [CSS](/de/docs/Web/CSS) Eigenschaft stellt eine Compositing-Operation dar, die auf die aktuelle Maskenschicht mit den darunterliegenden Maskenschichten angewendet wird.

## Syntax

```css
/* Keyword values */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Global values */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

Einer oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommata.

### Werte

Für die Komposition wird die aktuelle Maskenschicht als _Quelle_ bezeichnet, während alle darunterliegenden Schichten als _Ziel_ bezeichnet werden.

- `add`
  - : Die Quelle wird über das Ziel gelegt.
- `subtract`
  - : Die Quelle wird dort platziert, wo sie außerhalb des Ziels fällt.
- `intersect`
  - : Die Teile der Quelle, die sich mit dem Ziel überlappen, ersetzen das Ziel.
- `exclude`
  - : Die nicht überlappenden Bereiche von Quelle und Ziel werden kombiniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskenschichten mit Addition kombinieren

{{EmbedGHLiveSample("css-examples/masking/mask-composite.html", '100%', 550)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
