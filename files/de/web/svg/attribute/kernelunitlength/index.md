---
title: kernelUnitLength
slug: Web/SVG/Attribute/kernelUnitLength
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das **`kernelUnitLength`** Attribut hat zwei Bedeutungen, abhängig vom Kontext, in dem es verwendet wird. Für Beleuchtungsfilter-Primitiven zeigt es die beabsichtigte Entfernung für die x- und y-Koordinaten an, für {{SVGElement("feConvolveMatrix")}} gibt es die beabsichtigte Entfernung zwischen aufeinanderfolgenden Spalten und Zeilen in der Kernel-Matrix an.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}

## feConvolveMatrix

Für das {{SVGElement("feConvolveMatrix")}} zeigt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d. h. Einheiten, die durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) zwischen aufeinanderfolgenden Spalten und Zeilen in der {{SVGAttr("kernelMatrix")}}. Durch Angabe von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben wird, ist der Standardwert ein Pixel in der Offscreen-Bitmap, was ein pixelbasiertes Koordinatensystem ist und damit möglicherweise nicht skalierbar.

Wenn ein negativer oder Nullwert angegeben wird, wird stattdessen der Standardwert verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Pixel in Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : Die erste Zahl ist der x-Wert. Der zweite Wert ist der y-Wert. Wenn der x-Wert nicht angegeben ist, wird standardmäßig derselbe Wert wie x verwendet.

## feDiffuseLighting

Für das {{SVGElement("feDiffuseLighting")}} zeigt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d. h. Einheiten, die durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinate in den Formeln zur Berechnung der Oberflächennormalen.

Die erste Zahl ist der x-Wert. Der zweite Wert ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird standardmäßig derselbe Wert wie x verwendet. Durch Angabe von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben wird, stellen die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position dar, die in einigen Fällen als ein Pixel in der Zwischenbild-Offscreen-Bitmap implementiert sein könnten, was ein pixelbasiertes Koordinatensystem ist und damit möglicherweise nicht skalierbar.

Wenn ein negativer oder Nullwert angegeben wird, wird stattdessen der Standardwert verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Pixel in Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feSpecularLighting

Für das {{SVGElement("feSpecularLighting")}} zeigt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d. h. Einheiten, die durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinate in den Formeln zur Berechnung der Oberflächennormalen.

Die erste Zahl ist der x-Wert. Der zweite Wert ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird standardmäßig derselbe Wert wie x verwendet. Durch Angabe von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben wird, stellen die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position dar, die in einigen Fällen als ein Pixel in der Zwischenbild-Offscreen-Bitmap implementiert sein könnten, was ein pixelbasiertes Koordinatensystem ist und damit möglicherweise nicht skalierbar.

Wenn ein negativer oder Nullwert angegeben wird, wird stattdessen der Standardwert verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Pixel in Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}
