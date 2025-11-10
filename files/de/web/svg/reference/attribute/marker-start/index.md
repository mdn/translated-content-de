---
title: marker-start
slug: Web/SVG/Reference/Attribute/marker-start
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`marker-start`** Attribut definiert den Pfeilkopf oder Polymarker, der am ersten Scheitelpunkt der angegebenen [Form](/de/docs/Web/SVG/Reference/Element#shape_elements) gezeichnet wird.

Bei allen Formelementen, außer {{SVGElement("polyline")}} und {{SVGElement("path")}}, ist der letzte Scheitelpunkt derselbe wie der erste Scheitelpunkt. In diesem Fall werden, wenn der Wert von `marker-start` und {{SVGAttr("marker-end")}} beide nicht `none` sind, zwei Marker an diesem letzten Scheitelpunkt gerendert. Bei `<path>` Elementen gilt, dass für jeden geschlossenen Teilpfad der letzte Scheitelpunkt derselbe wie der erste Scheitelpunkt ist. `marker-start` wird nur am ersten Scheitelpunkt der [Pfaddaten](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) gerendert.

> [!NOTE]
> Als Präsentationsattribut hat `marker-start` auch ein entsprechendes CSS-Property: {{cssxref("marker-start")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="triangle"
      viewBox="0 0 10 10"
      refX="1"
      refY="5"
      markerUnits="strokeWidth"
      markerWidth="10"
      markerHeight="10"
      orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
    </marker>
  </defs>
  <polyline
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20"
    marker-start="url(#triangle)" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Nutzungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>none</code> | <code>&#x3C;marker-ref></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

- `none`
  - : Gibt an, dass kein Markersymbol am ersten Scheitelpunkt gezeichnet wird.
- `<marker-ref>`
  - : Dieser Wert ist ein Verweis auf ein {{SVGElement("marker")}} Element, das am ersten Scheitelpunkt gezeichnet wird. Wenn der Verweis nicht gültig ist, wird kein Marker gezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("marker-end")}}
- {{SVGAttr("marker-mid")}}
- CSS {{cssxref('marker-start')}}-Eigenschaft
