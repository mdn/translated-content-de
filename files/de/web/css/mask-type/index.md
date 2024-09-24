---
title: mask-type
slug: Web/CSS/mask-type
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{CSSRef}}

Die **`mask-type`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein SVG {{svgElement("mask")}}-Element als _Luminanz_- oder _Alpha_-Maske verwendet wird. Sie gilt für das `<mask>`-Element selbst.

Diese Eigenschaft kann durch die {{cssxref("mask-mode")}}-Eigenschaft überschrieben werden, die denselben Effekt hat, aber auf das Element angewendet wird, auf dem die Maske benutzt wird. Alpha-Masken werden im Allgemeinen schneller gerendert.

## Syntax

```css
/* Schlüsselwortwerte */
mask-type: luminance;
mask-type: alpha;

/* Globale Werte */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

Die `mask-type`-Eigenschaft wird als eines der unten aufgeführten Schlüsselwortwerte angegeben.

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

### Eine Alphamaske einstellen

#### HTML

```html
<div class="redsquare"></div>
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox" style="mask-type:alpha">
      <rect
        x=".1"
        y=".1"
        width=".8"
        height=".8"
        fill="red"
        fill-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### CSS

```css
.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128 128 128);
  border: solid 1px black;
  mask: url("#m");
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_an_alpha_mask', '100%', '102')}}

### Eine Luminanzmaske einstellen

#### HTML

```html
<div class="redsquare"></div>
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0">
  <defs>
    <mask
      id="m"
      maskContentUnits="objectBoundingBox"
      style="mask-type:luminance">
      <rect
        x=".1"
        y=".1"
        width=".8"
        height=".8"
        fill="red"
        fill-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### CSS

```css
.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128 128 128);
  border: solid 1px black;
  mask: url("#m");
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_a_luminance_mask', '100%', '102')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere maskenbezogene Eigenschaften: {{cssxref("mask")}}, {{cssxref("mask-mode")}}
