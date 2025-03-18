---
title: color-interpolation-filters
slug: Web/SVG/Reference/Attribute/color-interpolation-filters
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`color-interpolation-filters`** Attribut legt den Farbraum für Bildverarbeitungsoperationen fest, die über Filtereffekte durchgeführt werden.

> [!NOTE]
> Diese Eigenschaft wirkt sich nur auf Filteroperationen aus. Daher hat sie keinen Einfluss auf Filter-Primitiven wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} oder {{SVGElement("feFlood")}}.
>
> `color-interpolation-filters` hat einen anderen anfänglichen Wert als {{SVGAttr("color-interpolation")}}. `color-interpolation-filters` hat einen anfänglichen Wert von `linearRGB`, während `color-interpolation` einen anfänglichen Wert von `sRGB` hat. Daher finden standardmäßig Filtereffekte in dem Farbmodell linearRGB statt, während alle anderen Farbinterpolationen standardmäßig in dem sRGB-Farbraum erfolgen.
>
> Es hat keinen Einfluss auf Filterfunktionen, die im {{Glossary("RGB", "sRGB")}} Farbraum betrieben werden.

> [!NOTE]
> Als Präsentationsattribut hat `color-interpolation-filters` auch eine entsprechende CSS-Eigenschaft: {{cssxref("color-interpolation-filters")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Verwendungshinweise

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
  - : Gibt an, dass der Benutzeragent entweder die Farbräume `sRGB` oder `linearRGB` für die Farbinterpolation wählen kann. Diese Option signalisiert, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum stattfinden muss.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum stattfinden soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum gemäß [der sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) stattfinden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("color-interpolation")}}
- CSS-Eigenschaft {{cssxref('color-interpolation-filters')}}
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
