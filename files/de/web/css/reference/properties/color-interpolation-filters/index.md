---
title: color-interpolation-filters
slug: Web/CSS/Reference/Properties/color-interpolation-filters
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`color-interpolation-filters`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt den Farbraum für Bildbearbeitungsoperationen an, die über SVG-Filtereffekte durchgeführt werden. Wenn sie explizit deklariert ist, überschreibt der Wert der CSS-Eigenschaft jeden im {{SVGAttr("color-interpolation-filters")}}-Attribut des Elements angegebenen Wert.

> [!NOTE]
> Die {{SVGAttr("color-interpolation-filters")}}-Eigenschaft ist nur für SVG-Filteroperationen relevant. Sie hat _keinen_ Effekt auf Filterprimitiven wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}}, und {{SVGElement("feFlood")}}, sondern gilt stattdessen für die verschiedenen Filtereffekt-Elemente (z. B. {{SVGElement('feBlend')}}); siehe die SVG-Seite {{SVGAttr('color-interpolation-filters')}} für eine vollständige Liste.

> [!NOTE]
> Es ist wichtig zu beachten, dass das SVG-Attribut {{SVGAttr('color-interpolation')}} einen Anfangswert von `sRGB` hat, während `color-interpolation-filters` einen Anfangswert von `linearRGB` hat. Das bedeutet, dass im Standardfall Interpolationen von Filtereffekten in einem anderen Farbraum als alle anderen Farbinterpolationen stattfinden.

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
  - : Gibt an, dass der Benutzeragent entweder den `sRGB`- oder den `linearRGB`-Raum für die Farbinterpolation auswählen kann. Diese Option zeigt an, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.

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
