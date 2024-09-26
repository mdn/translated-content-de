---
title: targetX
slug: Web/SVG/Attribute/targetX
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`targetX`**-Attribut bestimmt die Positionierung in horizontaler Richtung der Faltungs-Matrix relativ zu einem gegebenen Zielpixel im Eingabebild. Die äußerste linke Spalte der Matrix ist die Spalte Nummer null. Der Wert muss so sein, dass: `0` <= `targetX` < {{SVGAttr("order")}} `X`.

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
  - : Dieser Wert gibt die Positionierung in horizontaler Richtung der Faltungs-Matrix relativ zu einem gegebenen Zielpixel im Eingabebild an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("targetY")}}