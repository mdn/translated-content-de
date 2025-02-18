---
title: color-interpolation-filters
slug: Web/SVG/Attribute/color-interpolation-filters
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`color-interpolation-filters`** Attribut gibt den Farbraum für Bildoperationen an, die über Filtereffekte ausgeführt werden.

> [!NOTE]
> Diese Eigenschaft wirkt sich ausschließlich auf Filteroperationen aus. Daher hat sie keinen Einfluss auf Filterprimitiven wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} oder {{SVGElement("feFlood")}}.
>
> `color-interpolation-filters` hat einen anderen Standardwert als {{SVGAttr("color-interpolation")}}. `color-interpolation-filters` hat den Standardwert `linearRGB`, während `color-interpolation` den Standardwert `sRGB` besitzt. Daher finden Filtereffekt-Operationen standardmäßig im `linearRGB`-Farbraum statt, während alle anderen Farbinterpolationen standardmäßig im `sRGB`-Farbraum erfolgen.
>
> Es hat keine Wirkung auf Filterfunktionen, die im {{Glossary("RGB", "sRGB")}}-Farbraum ausgeführt werden.

> [!NOTE]
> Als Präsentationsattribut hat `color-interpolation-filters` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("color-interpolation-filters")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feSpotLight")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feDropShadow")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Gibt an, dass der Benutzeragent entweder den `sRGB`- oder den `linearRGB`-Farbraum für die Farbinterpolation auswählen kann. Diese Option zeigt an, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgen muss.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum stattfinden soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum stattfinden soll, wie in [der sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("color-interpolation")}}
- CSS {{cssxref('color-interpolation-filters')}} Eigenschaft
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
