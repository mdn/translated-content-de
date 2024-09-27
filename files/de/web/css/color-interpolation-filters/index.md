---
title: color-interpolation-filters
slug: Web/CSS/color-interpolation-filters
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{CSSRef}}

Die **`color-interpolation-filters`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Farbraum für Bildgebungsoperationen an, die über SVG-Filtereffekte durchgeführt werden. Wenn sie explizit deklariert wird, überschreibt der Wert der CSS-Eigenschaft jeden Wert, der im {{SVGAttr("color-interpolation-filters")}} Attribut des Elements angegeben ist.

> [!NOTE]
> Die {{SVGAttr("color-interpolation-filters")}} Eigenschaft ist nur für SVG-Filteroperationen relevant. Sie hat _keinen_ Einfluss auf Filterprimitiven wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} und {{SVGElement("feFlood")}}, sondern gilt stattdessen für die verschiedenen Filtereffektelemente (z. B. {{SVGElement('feBlend')}}); siehe die SVG {{SVGAttr('color-interpolation-filters')}} Seite für eine vollständige Liste.

> [!NOTE]
> Es ist wichtig zu beachten, dass das SVG {{SVGAttr('color-interpolation')}} Attribut einen Anfangswert von `sRGB` hat, während `color-interpolation-filters` einen Anfangswert von `linearRGB` hat. Dies bedeutet, dass Filtereffekt-Interpolationen im Standardfall in einem anderen Farbraum stattfinden als alle anderen Farbinterpolationen.

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
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben. Dies ist der Standardwert der Eigenschaft.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im gamma-kodierten sRGB-Farbraum erfolgen soll.
- `auto`
  - : Gibt an, dass der Benutzeragent entweder den `sRGB`- oder den `linearRGB`-Farbraum für die Farbinterpolation wählen kann. Diese Option deutet darauf hin, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("color-interpolation-filters")}} Attribut
- SVG {{SVGAttr("color-interpolation")}} Attribut
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
