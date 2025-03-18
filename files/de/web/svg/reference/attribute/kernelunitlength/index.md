---
title: kernelUnitLength
slug: Web/SVG/Reference/Attribute/kernelUnitLength
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das Attribut **`kernelUnitLength`** hat zwei Bedeutungen, je nachdem, in welchem Kontext es verwendet wird. Bei Beleuchtungsfilter-Primitiven gibt es die beabsichtigte Entfernung für die x- und y-Koordinaten an, bei {{SVGElement("feConvolveMatrix")}} die beabsichtigte Entfernung zwischen aufeinanderfolgenden Spalten und Reihen der Kernmatrix.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}

## feConvolveMatrix

Für die {{SVGElement("feConvolveMatrix")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) zwischen aufeinanderfolgenden Spalten und Reihen in der {{SVGAttr("kernelMatrix")}}. Durch das Festlegen von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben ist, beträgt der Standardwert ein Pixel im Offscreen-Bitmap, was ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar ist.

Wenn ein negativer oder Nullwert angegeben wird, wird stattdessen der Standardwert verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Pixel im Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der x-Wert nicht angegeben ist, wird standardmäßig der gleiche Wert wie x verwendet.

## feDiffuseLighting

Für die {{SVGElement("feDiffuseLighting")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinate in den Formeln zur Berechnung der Oberflächennormalen.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird standardmäßig der gleiche Wert wie x verwendet. Durch das Festlegen von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben ist, stellen die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position dar, die in einigen Fällen als ein Pixel im Zwischenbild Offscreen-Bitmap implementiert werden können, was ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar ist.

Wenn ein negativer oder Nullwert angegeben wird, wird stattdessen der Standardwert verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Pixel im Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feSpecularLighting

Für die {{SVGElement("feSpecularLighting")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinate in den Formeln zur Berechnung der Oberflächennormalen.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird standardmäßig der gleiche Wert wie x verwendet. Durch das Festlegen von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben ist, stellen die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position dar, die in einigen Fällen als ein Pixel im Zwischenbild Offscreen-Bitmap implementiert werden können, was ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar ist.

Wenn ein negativer oder Nullwert angegeben wird, wird stattdessen der Standardwert verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Pixel im Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}
