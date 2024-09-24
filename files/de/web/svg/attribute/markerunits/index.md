---
title: markerUnits
slug: Web/SVG/Attribute/markerUnits
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`markerUnits`**-Attribut definiert das Koordinatensystem für die {{SVGAttr("markerWidth")}}- und {{SVGAttr("markerHeight")}}-Attribute und den Inhalt des {{SVGElement("marker")}}.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}

## Verwendungshinweise

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
  - : Dieser Wert gibt an, dass die Attribute `markerWidth` und `markerHeight` sowie der Inhalt des `<marker>`-Elements Werte im aktuellen Benutzerkoordinatensystem darstellen, das für das grafische Objekt gilt, das den Marker referenziert (d.h. das Benutzerkoordinatensystem für das Element, das das `<marker>`-Element über eine {{SVGAttr("marker")}}, `marker-start`, `marker-mid` oder `marker-end`-Eigenschaft referenziert).
- `strokeWidth`
  - : Dieser Wert gibt an, dass die Attribute `markerWidth` und `markerHeight` sowie der Inhalt des `<marker>`-Elements Werte in einem Koordinatensystem darstellen, in dem eine Einheit gleich der Größe in Benutzereinheiten der aktuellen Strichbreite ist (siehe das {{SVGAttr("stroke-width")}}-Attribut), das für das grafische Objekt gilt, das den Marker referenziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("markerWidth")}}
- {{SVGAttr("markerHeight")}}
- {{SVGAttr("stroke-width")}}
