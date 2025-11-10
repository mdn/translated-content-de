---
title: targetX
slug: Web/SVG/Reference/Attribute/targetX
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

Das Attribut **`targetX`** bestimmt die Positionierung in horizontaler Richtung der Faltungsmatrix relativ zu einem gegebenen Zielpixel im Eingabebild. Die äußerste linke Spalte der Matrix ist Spalte Nummer null. Der Wert muss so sein, dass: `0` <= `targetX` < `x` von {{SVGAttr("order")}}.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("integer")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>floor(<code>x</code> von {{SVGAttr("order")}} / 2)</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : Dieser Wert gibt die Positionierung in horizontaler Richtung der Faltungsmatrix relativ zu einem gegebenen Zielpixel im Eingabebild an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("targetY")}}
