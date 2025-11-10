---
title: filterUnits
slug: Web/SVG/Reference/Attribute/filterUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`filterUnits`**-Attribut definiert das Koordinatensystem für die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}}.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("filter")}}

## Nutzungshinweise

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
  - : {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}} repräsentieren Werte im aktuellen Koordinatensystem, das aus dem aktuellen Benutzerkoordinatensystem resultiert, das zum Zeitpunkt referenziert wird, wenn das {{SVGElement("filter")}}-Element referenziert wird (d.h. das Benutzerkoordinatensystem für das Element, das das {{SVGElement("filter")}}-Element über ein {{SVGAttr("filter")}}-Attribut referenziert).
- `objectBoundingBox`
  - : In diesem Fall repräsentieren {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}} Brüche oder Prozentsätze des Begrenzungsrahmens des referenzierenden Elements.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
