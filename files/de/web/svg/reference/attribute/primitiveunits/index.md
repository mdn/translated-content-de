---
title: primitiveUnits
slug: Web/SVG/Reference/Attribute/primitiveUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`primitiveUnits`** gibt das Koordinatensystem für die verschiedenen Längenwerte innerhalb der Filter-Primitiven und für die Attribute an, die die Subregion der Filter-Primitiven definieren.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("filter")}}

## Verwendungshinweise

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
  - : Dieser Wert bedeutet, dass alle Längenwerte innerhalb der Filterdefinitionen Werte im aktuellen Benutzerkoordinatensystem darstellen, das zum Zeitpunkt der Referenzierung des {{SVGElement("filter")}}-Elements in Kraft ist (d.h. das Benutzerkoordinatensystem für das Element, das auf das {{SVGElement("filter")}}-Element über ein {{SVGAttr("filter")}}-Attribut verweist).
- objectBoundingBox
  - : Dieser Wert bedeutet, dass alle Längenwerte innerhalb der Filterdefinitionen Bruchteile oder Prozentsätze des Begrenzungsrahmens des referenzierenden Elements darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
