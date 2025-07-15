---
title: color-interpolation-filters
slug: Web/CSS/color-interpolation-filters
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`color-interpolation-filters`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Farbraum für Bildoperationen an, die über SVG-Filtereffekte durchgeführt werden. Wenn explizit deklariert, überschreibt der Wert der CSS-Eigenschaft jeden im Attribut {{SVGAttr("color-interpolation-filters")}} angegebenen Wert des Elements.

> [!NOTE]
> Die Eigenschaft {{SVGAttr("color-interpolation-filters")}} ist nur für SVG-Filteroperationen relevant. Sie hat _keine_ Auswirkung auf Filterprimitiven wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}}, und {{SVGElement("feFlood")}}, sondern wird auf die verschiedenen Filtereffektelemente angewendet (z.B. {{SVGElement('feBlend')}}); siehe die SVG {{SVGAttr('color-interpolation-filters')}} Seite für eine vollständige Liste.

> [!NOTE]
> Es ist wichtig zu beachten, dass das SVG-Attribut {{SVGAttr('color-interpolation')}} einen Anfangswert von `sRGB` hat, während `color-interpolation-filters` einen Anfangswert von `linearRGB` hat. Das bedeutet, dass im Standardfall Filtereffekt-Interpolationen in einem anderen Farbraum als alle anderen Farbinterpolationen durchgeführt werden.

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
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum wie in [der sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben erfolgen soll. Dies ist der Standardwert der Eigenschaft.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im gamma-kodierten sRGB-Farbraum erfolgen soll.
- `auto`
  - : Gibt an, dass der Benutzeragent entweder die `sRGB`- oder die `linearRGB`-Räume für die Farbinterpolation wählen kann. Diese Option weist darauf hin, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.

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
- SVG-Attribut {{SVGAttr("color-interpolation-filters")}}
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
