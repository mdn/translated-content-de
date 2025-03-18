---
title: markerUnits
slug: Web/SVG/Reference/Attribute/markerUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`markerUnits`**-Attribut definiert das Koordinatensystem für die {{SVGAttr("markerWidth")}}- und {{SVGAttr("markerHeight")}}-Attribute sowie den Inhalt des {{SVGElement("marker")}}.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("marker")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>userSpaceOnUse</code> | <code>strokeWidth</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>strokeWidth</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : Dieser Wert gibt an, dass die `markerWidth`- und `markerHeight`-Attribute sowie der Inhalt des `<marker>`-Elements Werte im aktuellen Benutzerkoordinatensystem darstellen, das für das Grafikelement gilt, das den Marker referenziert (d.h. das Benutzerkoordinatensystem für das Element, das das `<marker>`-Element via einem {{SVGAttr("marker")}}, `marker-start`, `marker-mid` oder `marker-end`-Eigenschaft referenziert).
- `strokeWidth`
  - : Dieser Wert gibt an, dass die `markerWidth`- und `markerHeight`-Attribute sowie der Inhalt des `<marker>`-Elements Werte in einem Koordinatensystem darstellen, bei dem eine Einheit gleich der Größe in Benutzereinheiten der aktuellen Strichbreite (siehe das {{SVGAttr("stroke-width")}}-Attribut) ist, die für das Grafikelement gilt, das den Marker referenziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("markerWidth")}}
- {{SVGAttr("markerHeight")}}
- {{SVGAttr("stroke-width")}}
