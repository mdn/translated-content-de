---
title: radius
slug: Web/SVG/Attribute/radius
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`radius`** Attribut repräsentiert den Radius (oder die Radien) für die Operation auf einem gegebenen {{SVGElement("feMorphology")}} Filter-Primitive.

Wenn zwei Zahlen angegeben werden, repräsentiert die erste Zahl den x-Radius und die zweite den y-Radius. Wenn nur eine Zahl angegeben wird, wird dieser Wert sowohl für x als auch für y verwendet. Die Werte befinden sich im Koordinatensystem, das durch das {{SVGAttr("primitiveUnits")}} Attribut auf dem {{SVGElement("filter")}} Element festgelegt ist.

Ein negativer oder null Wert deaktiviert den Effekt des gegebenen Filter-Primitives (d.h. das Ergebnis ist das Filtereingabebild).

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feMorphology")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Content_type#number-optional-number"
          >&#x3C;number-optional-number></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
