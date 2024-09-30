---
title: kernelUnitLength
slug: Web/SVG/Attribute/kernelUnitLength
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das **`kernelUnitLength`**-Attribut hat zwei Bedeutungen, basierend auf dem Kontext, in dem es verwendet wird. Für Lichtfilter-Primitiven gibt es die beabsichtigte Entfernung für die x- und y-Koordinaten an, während es für {{SVGElement("feConvolveMatrix")}} die beabsichtigte Entfernung zwischen aufeinanderfolgenden Spalten und Reihen in der Kernel-Matrix angibt.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}

## feConvolveMatrix

Für das {{SVGElement("feConvolveMatrix")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filter-Einheiten an (d.h. Einheiten, die durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) zwischen aufeinanderfolgenden Spalten und Reihen in der {{SVGAttr("kernelMatrix")}}. Durch das Festlegen von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben ist, ist der Standardwert ein Pixel in der Offscreen-Bitmap, welches ein pixelbasiertes Koordinatensystem darstellt und daher möglicherweise nicht skalierbar ist.

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
      <td><em>Pixel in der Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der x-Wert nicht angegeben ist, wird er standardmäßig auf den gleichen Wert wie x gesetzt.

## feDiffuseLighting

Für das {{SVGElement("feDiffuseLighting")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filter-Einheiten an (d.h. Einheiten, die durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinaten in den Formeln zur Berechnung der Oberflächennormalen.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird er standardmäßig auf den gleichen Wert wie x gesetzt. Durch das Festlegen von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben ist, repräsentieren die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position, die in manchen Fällen als ein Pixel in der zwischengeschalteten Bild-Offscreen-Bitmap implementiert werden könnten, welches ein pixelbasiertes Koordinatensystem darstellt und daher möglicherweise nicht skalierbar ist.

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
      <td><em>Pixel in der Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feSpecularLighting

Für das {{SVGElement("feSpecularLighting")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filter-Einheiten an (d.h. Einheiten, die durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinaten in den Formeln zur Berechnung der Oberflächennormalen.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird er standardmäßig auf den gleichen Wert wie x gesetzt. Durch das Festlegen von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben ist, repräsentieren die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position, die in manchen Fällen als ein Pixel in der zwischengeschalteten Bild-Offscreen-Bitmap implementiert werden könnten, welches ein pixelbasiertes Koordinatensystem darstellt und daher möglicherweise nicht skalierbar ist.

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
      <td><em>Pixel in der Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}
