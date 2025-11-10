---
title: radius
slug: Web/SVG/Reference/Attribute/radius
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`radius`**-Attribut repräsentiert den Radius (oder die Radien) für die Operation auf einem gegebenen {{SVGElement("feMorphology")}} Filter-Primitivelement.

Wenn zwei Zahlen angegeben sind, repräsentiert die erste Zahl den x-Radius und die zweite den y-Radius. Wenn eine Zahl angegeben ist, wird dieser Wert sowohl für x als auch für y verwendet. Die Werte befinden sich im Koordinatensystem, das durch das {{SVGAttr("primitiveUnits")}}-Attribut am {{SVGElement("filter")}}-Element festgelegt wird.

Ein negativer oder nuller Wert deaktiviert die Wirkung des angegebenen Filter-Primitivelements (d.h. das Ergebnis ist das Eingabebild des Filters).

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feMorphology")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <a href="/de/docs/Web/SVG/Guides/Content_type#number-optional-number"
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
