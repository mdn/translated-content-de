---
title: markerWidth
slug: Web/SVG/Attribute/markerWidth
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das Attribut **`markerWidth`** repräsentiert die Breite des Ansichtsbereichs, in den das {{SVGElement("marker")}} eingefügt werden soll, wenn es gemäß den Attributen {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} gerendert wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("marker")}}

## Anwendungshinweise

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
  - : Dieser Wert definiert entweder eine absolute oder eine relative Breite des Markers.
    Relative Werte beziehen sich auf die Breite, die durch die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angegeben wird.
- `<number>`
  - : Dieser Wert definiert die Breite des Markers in den Einheiten, die durch das Attribut {{SVGAttr("markerUnits")}} festgelegt sind.

Ein Wert von null deaktiviert das Rendern des Elements, und negative Werte sind ein Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("markerHeight")}}
- {{SVGAttr("markerUnits")}}
- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
