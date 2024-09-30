---
title: markerHeight
slug: Web/SVG/Attribute/markerHeight
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`markerHeight`**-Attribut repräsentiert die Höhe des Ansichtsbereichs, in den das {{SVGElement("marker")}} eingefügt werden soll, wenn es gemäß den Attributen {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} gerendert wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("marker")}}

## Anmerkungen zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>3</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : Dieser Wert definiert entweder eine absolute oder eine relative Höhe des Markers.
    Relative Werte beziehen sich auf die über die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angegebene Höhe.
- `<number>`
  - : Dieser Wert definiert die Höhe des Markers in den durch das Attribut {{SVGAttr("markerUnits")}} definierten Einheiten.

Ein Wert von null deaktiviert das Rendering des Elements und negative Werte sind ein Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("markerWidth")}}
- {{SVGAttr("markerUnits")}}
- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
