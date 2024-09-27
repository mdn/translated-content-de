---
title: color-interpolation-filters
slug: Web/SVG/Attribute/color-interpolation-filters
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{SVGRef}}

Das Attribut **`color-interpolation-filters`** gibt den Farbraum für Bildgebungsoperationen an, die über Filtereffekte durchgeführt werden.

> [!NOTE]
> Diese Eigenschaft hat nur Auswirkungen auf Filteroperationen. Daher hat sie keinen Einfluss auf Filterprimitiven wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} oder {{SVGElement("feFlood")}}.
>
> `color-interpolation-filters` hat einen anderen Initialwert als {{SVGAttr("color-interpolation")}}. `color-interpolation-filters` hat einen Initialwert von `linearRGB`, während `color-interpolation` einen Initialwert von `sRGB` hat. Somit erfolgen standardmäßig Filtereffektoperationen im linearRGB-Farbraum, während alle anderen Farbinterpolationen standardmäßig im sRGB-Farbraum stattfinden.
>
> Es hat keinen Einfluss auf Filterfunktionen, die im [sRGB](/de/docs/Glossary/RGB)-Farbraum arbeiten.

> [!NOTE]
> Als Präsentationsattribut kann `color-interpolation-filters` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('color-interpolation-filters')}} für mehr.

Man kann dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Gibt an, dass der Benutzeragent entweder die `sRGB`- oder `linearRGB`-Farbräume für die Farbinterpolation wählen kann. Diese Option zeigt an, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in [der sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("color-interpolation")}}
- CSS-Eigenschaft {{cssxref('color-interpolation-filters')}}
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
