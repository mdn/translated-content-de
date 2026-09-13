---
title: color-interpolation-filters
slug: Web/SVG/Reference/Attribute/color-interpolation-filters
l10n:
  sourceCommit: 5fbc600ce5903c85daac8ec7408527a2b2ea81da
---

Das Attribut **`color-interpolation-filters`** gibt den Farbraum für Bildgebungsoperationen an, die über Filtereffekte durchgeführt werden.

> [!NOTE]
> Diese Eigenschaft hat nur Auswirkungen auf Filteroperationen. Daher hat sie keinen Effekt auf Filter-Primitiven wie {{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}} oder {{SVGElement("feFlood")}}.
>
> `color-interpolation-filters` hat einen anderen Anfangswert als {{SVGAttr("color-interpolation")}}. `color-interpolation-filters` hat den Anfangswert `linearRGB`, während `color-interpolation` den Anfangswert `sRGB` hat. Im Standardfall erfolgen daher Filtereffekt-Operationen im `linearRGB`-Farbraum, während alle anderen Farbinterpolationen standardmäßig im `sRGB`-Farbraum erfolgen.
>
> Es hat keinen Effekt auf Filterfunktionen, die im {{Glossary("RGB", "sRGB")}} Farbraum arbeiten.

> [!NOTE]
> Als Präsentationsattribut gibt es auch ein entsprechendes CSS-Attribut: {{cssxref("color-interpolation-filters")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Anmerkungen zur Verwendung

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
  - : Gibt an, dass der Benutzeragent entweder den `sRGB`- oder `linearRGB`-Farbraum für die Farbinterpolation wählen kann. Diese Option zeigt an, dass der Autor nicht erfordert, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im `sRGB`-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("color-interpolation")}} Attribut
- CSS {{cssxref('color-interpolation-filters')}} Eigenschaft
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
