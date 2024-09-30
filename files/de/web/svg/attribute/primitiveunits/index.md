---
title: primitiveUnits
slug: Web/SVG/Attribute/primitiveUnits
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`primitiveUnits`**-Attribut legt das Koordinatensystem für die verschiedenen Längenwerte innerhalb der Filterprimitive und für die Attribute fest, die die Filterprimitiv-Teilregion definieren.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("filter")}}

## Verwendungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>userSpaceOnUse</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- userSpaceOnUse
  - : Dieser Wert gibt an, dass die Längenwerte innerhalb der Filterdefinitionen Werte im aktuellen Benutzer-Koordinatensystem darstellen, das zum Zeitpunkt der Referenzierung des {{SVGElement("filter")}}-Elements vorhanden ist (d.h., das Benutzer-Koordinatensystem für das Element, das das {{SVGElement("filter")}}-Element durch ein {{SVGAttr("filter")}}-Attribut referenziert).
- objectBoundingBox
  - : Dieser Wert gibt an, dass die Längenwerte innerhalb der Filterdefinitionen Bruchteile oder Prozentsätze des Begrenzungsrahmens des referenzierenden Elements darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
