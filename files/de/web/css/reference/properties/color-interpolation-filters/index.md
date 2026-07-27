---
title: "`color-interpolation-filters` CSS property"
short-title: color-interpolation-filters
slug: Web/CSS/Reference/Properties/color-interpolation-filters
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`color-interpolation-filters`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den Farbraum für Bildoperationen fest, die über SVG-Filtereffekte durchgeführt werden. Wenn sie explizit deklariert wird, überschreibt der Wert der CSS-Eigenschaft jeden Wert, der im {{SVGAttr("color-interpolation-filters")}}-Attribut des Elements angegeben ist.

> [!NOTE]
> Die {{SVGAttr("color-interpolation-filters")}}-Eigenschaft ist nur für SVG-Filteroperationen relevant. Sie hat _keine_ Wirkung auf Filterprimitiven wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} und {{SVGElement("feFlood")}}, sondern gilt stattdessen für die verschiedenen Filtereffektelemente (z.B. {{SVGElement('feBlend')}}); sehen Sie auf der SVG-{{SVGAttr('color-interpolation-filters')}}-Seite für eine vollständige Liste.

> [!NOTE]
> Es ist wichtig zu beachten, dass das SVG-{{SVGAttr('color-interpolation')}}-Attribut einen Anfangswert von `sRGB` hat, während `color-interpolation-filters` einen Anfangswert von `linearRGB` hat. Das bedeutet, dass im Standardfall Filtereffekt-Interpolationen in einem anderen Farbraum stattfinden als alle anderen Farbinterpolation.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwörter angegeben:

- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearen RGB-Farbraum stattfinden soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben. Dies ist der Standardwert der Eigenschaft.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im gamma-kodierten sRGB-Farbraum stattfinden soll.
- `auto`
  - : Gibt an, dass der User Agent entweder den `sRGB`- oder `linearRGB`-Raum für die Farbinterpolation wählen kann. Diese Option zeigt an, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.

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
- SVG {{SVGAttr("color-interpolation-filters")}}-Attribut
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
