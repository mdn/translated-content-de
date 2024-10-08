---
title: targetY
slug: Web/SVG/Attribute/targetY
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`targetY`**-Attribut bestimmt die Positionierung in vertikaler Richtung der Faltungs-Matrix relativ zu einem gegebenen Zielpixel im Eingabebild. Die oberste Zeile der Matrix ist Zeile Nummer null. Der Wert muss so sein, dass: `0` <= `targetY` < {{SVGAttr("order")}} `Y`.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}

## Hinweise zur Verwendung

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
  - : Dieser Wert gibt die Positionierung in vertikaler Richtung der Faltungs-Matrix relativ zu einem gegebenen Zielpixel im Eingabebild an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("targetX")}}
