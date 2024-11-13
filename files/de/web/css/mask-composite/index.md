---
title: mask-composite
slug: Web/CSS/mask-composite
l10n:
  sourceCommit: 759e230fb79ab6b333691262e089749d99104c25
---

{{CSSRef}}

Die **`mask-composite`** [CSS](/de/docs/Web/CSS) Eigenschaft stellt eine Kompositionsoperation dar, die auf die aktuelle Maskierungsschicht mit den darunterliegenden Maskierungsschichten angewendet wird.

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

Eines oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommas.

### Werte

Für die Komposition wird die aktuelle Maskenschicht als _source_ bezeichnet, während alle darunter liegenden Schichten als _destination_ bezeichnet werden.

- `add`
  - : Die Quelle wird über das Ziel gelegt.
- `subtract`
  - : Die Quelle wird platziert, wo sie außerhalb des Ziels fällt.
- `intersect`
  - : Die Teile der Quelle, die das Ziel überlappen, ersetzen das Ziel.
- `exclude`
  - : Die nicht überlappenden Regionen von Quelle und Ziel werden kombiniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskenschichten mit Addition komponieren

```html live-sample___mask-composite-example
<div class="masked"></div>
```

```css live-sample___mask-composite-example
.masked {
  width: 100px;
  height: 100px;
  background-color: red;

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100% 100%;
  mask-composite: subtract;
}
```

{{EmbedLiveSample("mask-composite-example", "", "150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
