---
title: filterUnits
slug: Web/SVG/Attribute/filterUnits
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das Attribut **`filterUnits`** definiert das Koordinatensystem für die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}}.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}} repräsentieren Werte im aktuellen Koordinatensystem, das sich aus dem aktuellen Benutzerkoordinatensystem ergibt, das zum Zeitpunkt des Referenzierens des {{SVGElement("filter")}}-Elements in Kraft ist (d.h. das Benutzerkoordinatensystem für das Element, welches das {{SVGElement("filter")}}-Element über ein {{SVGAttr("filter")}}-Attribut referenziert).
- `objectBoundingBox`
  - : In diesem Fall repräsentieren {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}} Bruchteile oder Prozentsätze des Begrenzungsrahmens des referenzierenden Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
