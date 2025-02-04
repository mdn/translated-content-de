---
title: color-interpolation-filters
slug: Web/CSS/color-interpolation-filters
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`color-interpolation-filters`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert den Farbraum für Bildgebungsoperationen, die über SVG-Filtereffekte durchgeführt werden. Wenn explizit deklariert, überschreibt der Wert der CSS-Eigenschaft jeden Wert, der im Attribut {{SVGAttr("color-interpolation-filters")}} des Elements angegeben ist.

> [!NOTE]
> Die {{SVGAttr("color-interpolation-filters")}}-Eigenschaft bezieht sich nur auf SVG-Filteroperationen. Sie hat _keine_ Auswirkung auf Filterprimitive wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} und {{SVGElement("feFlood")}}, sondern gilt stattdessen für die verschiedenen Filtereffektelemente (z.B. {{SVGElement('feBlend')}}); siehe die SVG-{{SVGAttr('color-interpolation-filters')}}-Seite für eine vollständige Liste.

> [!NOTE]
> Es ist wichtig zu beachten, dass das SVG-Attribut {{SVGAttr('color-interpolation')}} einen Anfangswert von `sRGB` hat, während `color-interpolation-filters` einen Anfangswert von `linearRGB` hat. Das bedeutet, dass im Standardfall Filtereffektinterpolationen in einem anderen Farbraum stattfinden als alle anderen Farbinterpolationen.

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
  - : Gibt an, dass die Farbintepolation im linearisierten RGB-Farbraum erfolgen sollte, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben. Dies ist der Standardwert der Eigenschaft.
- `sRGB`
  - : Gibt an, dass die Farbintepolation im gamma-kodierten sRGB-Farbraum erfolgen sollte.
- `auto`
  - : Gibt an, dass der Benutzeragent entweder die `sRGB`- oder `linearRGB`-Räume für die Farbintepolation wählen kann. Diese Option zeigt an, dass der Autor nicht verlangt, dass die Farbintepolation in einem bestimmten Farbraum erfolgt.

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
