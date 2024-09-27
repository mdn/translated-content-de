---
title: kernelUnitLength
slug: Web/SVG/Attribute/kernelUnitLength
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{SVGRef}}{{Deprecated_Header}}

Das **`kernelUnitLength`** Attribut hat zwei Bedeutungen, je nach Kontext, in dem es verwendet wird. Bei Lichtfilter-Primitives gibt es die beabsichtigte Distanz für die x- und y-Koordinaten an, für {{SVGElement("feConvolveMatrix")}} die beabsichtigte Distanz zwischen aufeinanderfolgenden Spalten und Zeilen in der Kernelmatrix.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}

## feConvolveMatrix

Für die {{SVGElement("feConvolveMatrix")}} gibt `kernelUnitLength` die beabsichtigte Distanz in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) zwischen aufeinanderfolgenden Spalten und Zeilen in der {{SVGAttr("kernelMatrix")}}. Durch die Angabe von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht spezifiziert wird, beträgt der Standardwert ein Pixel im Offscreen-Bitmap, welches ein pixelbasiertes Koordinatensystem ist, und somit potenziell nicht skalierbar.

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
      <td><em>Pixel im Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben wird, wird er standardmäßig mit dem gleichen Wert wie x belegt.

## feDiffuseLighting

Für die {{SVGElement("feDiffuseLighting")}} gibt `kernelUnitLength` die beabsichtigte Distanz in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinate in den Oberflächennormalenberechnungsformeln.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben wird, wird er standardmäßig mit dem gleichen Wert wie x belegt. Durch die Angabe von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht spezifiziert wird, repräsentieren die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position, was gegebenenfalls als ein Pixel im Zwischenbild-Offscreen-Bitmap implementiert werden könnte, welches ein pixelbasiertes Koordinatensystem ist, und somit potenziell nicht skalierbar.

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
      <td><em>Pixel im Offscreen-Bitmap</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## feSpecularLighting

Für die {{SVGElement("feSpecularLighting")}} gibt `kernelUnitLength` die beabsichtigte Distanz in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinate in den Oberflächennormalenberechnungsformeln.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben wird, wird er standardmäßig mit dem gleichen Wert wie x belegt. Durch die Angabe von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht spezifiziert wird, repräsentieren die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position, was gegebenenfalls als ein Pixel im Zwischenbild-Offscreen-Bitmap implementiert werden könnte, welches ein pixelbasiertes Koordinatensystem ist, und somit potenziell nicht skalierbar.

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
