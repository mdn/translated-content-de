---
title: "`color-interpolation-filters` CSS property"
short-title: color-interpolation-filters
slug: Web/CSS/Reference/Properties/color-interpolation-filters
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`color-interpolation-filters`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Farbraum für Bildoperationen an, die über SVG-Filtereffekte durchgeführt werden. Wenn sie explizit deklariert wird, überschreibt der Wert der CSS-Eigenschaft jeden Wert, der im {{SVGAttr("color-interpolation-filters")}} Attribut des Elements angegeben ist.

> [!NOTE]
> Die {{SVGAttr("color-interpolation-filters")}} Eigenschaft bezieht sich nur auf SVG-Filteroperationen. Sie hat _keinen_ Einfluss auf Filterprimitive wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} und {{SVGElement("feFlood")}}, sondern gilt für die verschiedenen Filtereffekt-Elemente (z. B. {{SVGElement('feBlend')}}); siehe die SVG {{SVGAttr('color-interpolation-filters')}} Seite für eine vollständige Liste.

> [!NOTE]
> Es ist wichtig zu beachten, dass das SVG {{SVGAttr('color-interpolation')}} Attribut einen Anfangswert von `sRGB` hat, während `color-interpolation-filters` einen Anfangswert von `linearRGB` hat. Das bedeutet, dass im Standardfall Filtereffekt-Interpolationen in einem anderen Farbraum stattfinden als alle anderen Farbinterpolationen.

## Syntax

```css
color-interpolation-filters: auto;
color-interpolation-filters: linearRGB;
color-interpolation-filters: sRGB;

/* Global values */
color-interpolation-filters: inherit;
color-interpolation-filters: initial;
color-interpolation-filters: revert;
color-interpolation-filters: revert-layer;
color-interpolation-filters: unset;
```

### Werte

- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum gemäß der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) erfolgen soll. Dies ist der Standardwert der Eigenschaft.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im gamma-codierten sRGB-Farbraum erfolgen soll.
- `auto`
  - : Gibt an, dass der Benutzeragent entweder den `sRGB` oder den `linearRGB` Raum für die Farbinterpolation auswählen kann. Diese Option deutet darauf hin, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-interpolation")}}
- SVG {{SVGAttr("color-interpolation-filters")}} Attribut
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
