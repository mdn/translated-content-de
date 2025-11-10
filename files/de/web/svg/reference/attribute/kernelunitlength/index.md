---
title: kernelUnitLength
slug: Web/SVG/Reference/Attribute/kernelUnitLength
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

Das **`kernelUnitLength`** Attribut hat zwei Bedeutungen basierend auf dem Kontext, in dem es verwendet wird. Bei Beleuchtungsfilter-Primitiven gibt es die beabsichtigte Entfernung für die x- und y-Koordinaten an. Bei {{SVGElement("feConvolveMatrix")}} gibt es die beabsichtigte Entfernung zwischen aufeinanderfolgenden Spalten und Zeilen in der Kernel-Matrix an.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}

## feConvolveMatrix

Für die {{SVGElement("feConvolveMatrix")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) zwischen aufeinanderfolgenden Spalten bzw. Zeilen in der {{SVGAttr("kernelMatrix")}}. Durch die Angabe von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben wird, ist der Standardwert ein Pixel im Offscreen-Bitmap, welches ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar.

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
  - : Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der x-Wert nicht angegeben wird, wird der gleiche Wert wie x angenommen.

## feDiffuseLighting

Für die {{SVGElement("feDiffuseLighting")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinate in den Berechnungsformeln der Oberflächennormale.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben wird, wird der gleiche Wert wie x angenommen. Durch die Angabe von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben wird, stellen x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position dar, was in einigen Fällen als ein Pixel im Offscreen-Bitmap des Zwischenbildes implementiert werden kann, welches ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar.

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

Für die {{SVGElement("feSpecularLighting")}} gibt `kernelUnitLength` die beabsichtigte Entfernung in aktuellen Filtereinheiten an (d.h. Einheiten, wie sie durch den Wert des Attributs {{SVGAttr("primitiveUnits")}} bestimmt werden) für die x- und y-Koordinate in den Berechnungsformeln der Oberflächennormale.

Die erste Zahl ist der x-Wert. Die zweite Zahl ist der y-Wert. Wenn der y-Wert nicht angegeben wird, wird der gleiche Wert wie x angenommen. Durch die Angabe von Werten für `kernelUnitLength` wird der Kernel in einem skalierbaren, abstrakten Koordinatensystem definiert. Wenn das Attribut nicht angegeben wird, stellen x- und y-Werte sehr kleine Deltas relativ zu einer gegebenen Position dar, was in einigen Fällen als ein Pixel im Offscreen-Bitmap des Zwischenbildes implementiert werden kann, welches ein pixelbasiertes Koordinatensystem ist und daher möglicherweise nicht skalierbar.

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
