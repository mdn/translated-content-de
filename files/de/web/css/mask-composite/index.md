---
title: mask-composite
slug: Web/CSS/mask-composite
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

Die **`mask-composite`**-Eigenschaft [CSS](/de/docs/Web/CSS) repräsentiert eine Kompositionsoperation, die auf die aktuelle Maskenebene mit den darunterliegenden Maskenebenen angewendet wird.

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

Eins oder mehrere der unten aufgeführten Schlüsselwortwerte, getrennt durch Kommas.

### Werte

Für die Komposition wird die aktuelle Maskenebene als _source_ bezeichnet, während alle darunterliegenden Ebenen als _destination_ bezeichnet werden.

- `add`
  - : Die _source_ wird über die _destination_ gelegt.
- `subtract`
  - : Die _source_ wird platziert, wo sie außerhalb der _destination_ liegt.
- `intersect`
  - : Die Teile der _source_, die die _destination_ überlappen, ersetzen die _destination_.
- `exclude`
  - : Die nicht überlappenden Bereiche von _source_ und _destination_ werden kombiniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kombinieren von Maskenebenen mit Addition

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

- [Ausschneiden und Maskieren in CSS](https://css-tricks.com/clipping-masking-css/)
