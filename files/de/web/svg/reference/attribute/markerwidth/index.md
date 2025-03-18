---
title: markerWidth
slug: Web/SVG/Reference/Attribute/markerWidth
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`markerWidth`**-Attribut repräsentiert die Breite des Ansichtsfensters, in das das {{SVGElement("marker")}} eingefügt werden soll, wenn es gemäß den Attributen {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} dargestellt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}

## Nutzungshinweise

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
    Relative Werte beziehen sich auf die Breite, die durch die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} festgelegt wird.
- `<number>`
  - : Dieser Wert definiert die Breite des Markers in den durch das Attribut {{SVGAttr("markerUnits")}} definierten Einheiten.

Ein Wert von Null deaktiviert die Darstellung des Elements, und negative Werte sind ein Fehler.

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
