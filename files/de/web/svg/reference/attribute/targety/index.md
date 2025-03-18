---
title: targetY
slug: Web/SVG/Reference/Attribute/targetY
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`targetY`**-Attribut bestimmt die Positionierung der Faltungsmatrix in vertikaler Richtung relativ zu einem gegebenen Zielpixel im Eingabebild. Die oberste Zeile der Matrix ist die Zeilennummer Null. Der Wert muss so sein, dass: `0` <= `targetY` < {{SVGAttr("order")}} `Y`.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feConvolveMatrix")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("integer")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>floor({{SVGAttr("order")}}Y / 2)</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : Dieser Wert gibt die Positionierung der Faltungsmatrix in vertikaler Richtung relativ zu einem gegebenen Zielpixel im Eingabebild an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("targetX")}}
