---
title: targetX
slug: Web/SVG/Reference/Attribute/targetX
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`targetX`**-Attribut bestimmt die Positionierung in horizontaler Richtung der Faltungsmatrix relativ zu einem gegebenen Zielpixel im Eingangsbild. Die linkeste Spalte der Matrix ist die Spaltennummer null. Der Wert muss so sein, dass: `0` <= `targetX` < {{SVGAttr("order")}} `X`.

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
      <td><code>floor({{SVGAttr("order")}}X / 2)</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : Dieser Wert gibt die Positionierung in horizontaler Richtung der Faltungsmatrix relativ zu einem gegebenen Zielpixel im Eingangsbild an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("targetY")}}
