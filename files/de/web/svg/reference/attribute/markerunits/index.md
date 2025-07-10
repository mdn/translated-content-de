---
title: markerUnits
slug: Web/SVG/Reference/Attribute/markerUnits
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Das **`markerUnits`** Attribut legt das Koordinatensystem für die Attribute {{SVGAttr("markerWidth")}} und {{SVGAttr("markerHeight")}} sowie den Inhalt des {{SVGElement("marker")}} fest.

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
  - : Dieser Wert gibt an, dass die `markerWidth`- und `markerHeight`-Attribute sowie der Inhalt des `<marker>`-Elements Werte im aktuellen Benutzerkoordinatensystem darstellen, das für das grafische Objekt gilt, das den Marker referenziert (d.h. das Benutzerkoordinatensystem für das Element, das das `<marker>`-Element über eine der Eigenschaften `marker`, `marker-start`, `marker-mid` oder `marker-end` referenziert).
- `strokeWidth`
  - : Dieser Wert gibt an, dass die `markerWidth`- und `markerHeight`-Attribute sowie der Inhalt des `<marker>`-Elements Werte in einem Koordinatensystem darstellen, bei dem eine Einheit der Größe in Benutzereinheiten der aktuellen Strichbreite entspricht (siehe das Attribut {{SVGAttr("stroke-width")}}), das für das grafische Objekt gilt, das den Marker referenziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("markerWidth")}}
- {{SVGAttr("markerHeight")}}
- {{SVGAttr("stroke-width")}}
