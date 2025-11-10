---
title: targetY
slug: Web/SVG/Reference/Attribute/targetY
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

Das **`targetY`**-Attribut bestimmt die vertikale Positionierung der Faltungsmatrix relativ zu einem bestimmten Zielpixel im Eingabebild. Die oberste Zeile der Matrix ist Zeile Nummer null. Der Wert muss so sein, dass: `0` <= `targetY` < `y` von {{SVGAttr("order")}}.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("integer")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>floor(<code>y</code> von {{SVGAttr("order")}} / 2)</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : Dieser Wert gibt die vertikale Positionierung der Faltungsmatrix relativ zu einem bestimmten Zielpixel im Eingabebild an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("targetX")}}
