---
title: mask-type
slug: Web/CSS/mask-type
l10n:
  sourceCommit: 759e230fb79ab6b333691262e089749d99104c25
---

{{CSSRef}}

Die **`mask-type`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein SVG-{{svgElement("mask")}}-Element als _Luminanz_ oder _Alpha_-Maske verwendet wird. Sie gilt für das `<mask>`-Element selbst.

Diese Eigenschaft kann durch die {{cssxref("mask-mode")}}-Eigenschaft außer Kraft gesetzt werden, die denselben Effekt hat, jedoch auf das Element angewendet wird, bei dem die Maske verwendet wird. Alpha-Masken werden im Allgemeinen schneller gerendert.

## Syntax

```css
/* Keyword values */
mask-type: luminance;
mask-type: alpha;

/* Global values */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

Die `mask-type`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `luminance`
  - : Ist ein Schlüsselwort, das angibt, dass das zugehörige Maskenbild eine Luminanzmaske ist, d. h., dass seine [relative Luminanz](https://en.wikipedia.org/wiki/Luminance_%28relative%29)-Werte beim Anwenden verwendet werden müssen.
- `alpha`
  - : Ist ein Schlüsselwort, das angibt, dass das zugehörige Maskenbild eine Alphamaske ist, d. h., dass seine [Alphakanal](https://en.wikipedia.org/wiki/Alpha_compositing)-Werte beim Anwenden verwendet werden müssen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen einer Alphamaske

#### HTML

```html live-sample___mask-type-alpha-example
<section>
  <div class="red-square"></div>
</section>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox">
      <rect
        x=".2"
        y=".1"
        width=".4"
        height=".8"
        fill="yellow"
        fill-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### CSS

```css live-sample___mask-type-alpha-example
* {
  margin: 0px;
  padding: 0px;
}

section {
  width: fit-content;
  border: 1px solid blue;
}

.red-square {
  height: 100px;
  width: 100px;
  background-color: red;
  border: solid 1px black;
  mask: url("#m");
}

mask {
  mask-type: alpha;
}
```

#### Ergebnis

{{EmbedLiveSample("mask-type-alpha-example", "", "150px")}}

### Einstellen einer Luminanzmaske

#### HTML

```html live-sample___mask-type-luminance-example
<section>
  <div class="red-square"></div>
</section>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox">
      <rect
        x=".2"
        y=".1"
        width=".4"
        height=".8"
        fill="yellow"
        fill-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### CSS

```css live-sample___mask-type-luminance-example
* {
  margin: 0px;
  padding: 0px;
}

section {
  width: fit-content;
  border: 1px solid blue;
}

.red-square {
  height: 100px;
  width: 100px;
  background-color: red;
  border: solid 1px black;
  mask: url("#m");
}

mask {
  mask-type: luminance;
}
```

#### Ergebnis

{{EmbedLiveSample("mask-type-luminance-example", "", "150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere maskenbezogene Eigenschaften: {{cssxref("mask")}}, {{cssxref("mask-mode")}}
