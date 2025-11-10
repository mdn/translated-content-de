---
title: markerHeight
slug: Web/SVG/Reference/Attribute/markerHeight
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`markerHeight`** repräsentiert die Höhe des Ansichtsfensters, in das das {{SVGElement("marker")}} eingefügt wird, wenn es entsprechend den Attributen {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} dargestellt wird.

Sie können dieses Attribut mit folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}

## Verwendungshinweise

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
    Relative Werte beziehen sich auf die Höhe, die über die Attribute {{SVGAttr("viewBox")}} und {{SVGAttr("preserveAspectRatio")}} angegeben wird.
- `<number>`
  - : Dieser Wert definiert die Höhe des Markers in den durch das Attribut {{SVGAttr("markerUnits")}} definierten Einheiten.

Ein Wert von Null deaktiviert die Darstellung des Elements und negative Werte sind ein Fehler.

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
