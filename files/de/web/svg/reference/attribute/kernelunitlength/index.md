---
title: kernelUnitLength
slug: Web/SVG/Reference/Attribute/kernelUnitLength
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Das Attribut **`kernelUnitLength`** hat zwei Bedeutungen, basierend auf dem Kontext, in dem es verwendet wird. Für Lichtfilter-Primitiven gibt es die beabsichtigte Entfernung für die x- und y-Koordinaten an, für {{SVGElement("feConvolveMatrix")}} gibt es die beabsichtigte Entfernung zwischen aufeinanderfolgenden Spalten und Zeilen in der Kernel-Matrix an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}

## feConvolveMatrix

Für das {{SVGElement("feConvolveMatrix")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten (d.h. Einheiten, die durch den Wert des Attributes {{SVGAttr("primitiveUnits")}} bestimmt werden) zwischen aufeinanderfolgenden Spalten und Zeilen in der {{SVGAttr("kernelMatrix")}} an. Durch das Festlegen von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht spezifiziert wird, ist der Standardwert ein Pixel im Offscreen-Bitmap, welches ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar.

Wird ein negativer oder Nullwert angegeben, wird stattdessen der Standardwert verwendet.

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
  - : Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird er standardmäßig als derselbe Wert wie x verwendet.

## feDiffuseLighting

Für das {{SVGElement("feDiffuseLighting")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten (d.h. Einheiten, die durch den Wert des Attributes {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinaten in den Formeln zur Oberflächennormalenberechnung an.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird er standardmäßig als derselbe Wert wie x verwendet. Durch das Festlegen von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht spezifiziert wird, stellen die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position dar, was in einigen Fällen als ein Pixel im intermediären Bild im Offscreen-Bitmap implementiert sein könnte, welches ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar.

Wird ein negativer oder Nullwert angegeben, wird stattdessen der Standardwert verwendet.

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

Für das {{SVGElement("feSpecularLighting")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten (d.h. Einheiten, die durch den Wert des Attributes {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinaten in den Formeln zur Oberflächennormalenberechnung an.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben ist, wird er standardmäßig als derselbe Wert wie x verwendet. Durch das Festlegen von Wert(en) für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht spezifiziert wird, stellen die x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position dar, was in einigen Fällen als ein Pixel im intermediären Bild im Offscreen-Bitmap implementiert sein könnte, welches ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar.

Wird ein negativer oder Nullwert angegeben, wird stattdessen der Standardwert verwendet.

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
