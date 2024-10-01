---
title: color-interpolation-filters
slug: Web/SVG/Attribute/color-interpolation-filters
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{SVGRef}}

Das Attribut **`color-interpolation-filters`** spezifiziert den Farbraum für Bildoperationen, die über Filtereffekte durchgeführt werden.

> [!NOTE]
> Diese Eigenschaft wirkt sich nur auf Filteroperationen aus. Daher hat sie keinen Effekt auf Filterprimitive wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} oder {{SVGElement("feFlood")}}.
>
> `color-interpolation-filters` hat einen anderen Anfangswert als {{SVGAttr("color-interpolation")}}. `color-interpolation-filters` hat einen Anfangswert von `linearRGB`, während `color-interpolation` einen Anfangswert von `sRGB` hat. In der Standardeinstellung erfolgen Filtereffekt-Operationen somit im linearRGB-Farbraum, während alle anderen Farbinterpolationen standardmäßig im sRGB-Farbraum erfolgen.
>
> Es hat keinen Effekt auf Filterfunktionen, die im {{Glossary("RGB", "sRGB")}} Farbraum arbeiten.

> [!NOTE]
> Als Präsentationsattribut kann `color-interpolation-filters` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('color-interpolation-filters')}} für weitere Informationen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Gibt an, dass der Benutzeragent entweder die `sRGB`- oder `linearRGB`-Farbräume für die Farbinterpolation wählen kann. Diese Option gibt an, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("color-interpolation")}}
- CSS-Eigenschaft {{cssxref('color-interpolation-filters')}}
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
