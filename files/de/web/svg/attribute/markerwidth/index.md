---
title: markerWidth
slug: Web/SVG/Attribute/markerWidth
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`markerWidth`** Attribut repräsentiert die Breite des Ansichtsfensters, in das der {{SVGElement("marker")}} eingefügt werden soll, wenn er gemäß den Attributen {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} gerendert wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("marker")}}

## Anwendungsnotizen

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
    Relative Werte beziehen sich auf die Breite, die über die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angegeben ist.
- `<number>`
  - : Dieser Wert definiert die Breite des Markers in den Einheiten, die durch das Attribut {{SVGAttr("markerUnits")}} definiert sind.

Ein Wert von null deaktiviert die Darstellung des Elements und negative Werte sind ein Fehler.

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
