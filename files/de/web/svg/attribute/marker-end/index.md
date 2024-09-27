---
title: marker-end
slug: Web/SVG/Attribute/marker-end
l10n:
  sourceCommit: f1b6d2b8e68aaf767adaa86edcc261490c07f14d
---

{{SVGRef}}

Das **`marker-end`** Attribut definiert den Pfeilkopf oder das Polymarker, das am letzten Scheitelpunkt der angegebenen [Shape](/de/docs/Web/SVG/Element#shape_elements) gezeichnet wird.

Für alle Shape-Elemente, außer {{SVGElement("polyline")}} und {{SVGElement("path")}}, ist der letzte Scheitelpunkt derselbe wie der erste Scheitelpunkt. In diesem Fall, wenn der Wert von {{SVGAttr("marker-start")}} und `marker-end` beide nicht `none` sind, dann werden zwei Marker an diesem letzten Scheitelpunkt gerendert. Für `<path>`-Elemente, bei jedem geschlossenen Unterpfad, ist der letzte Scheitelpunkt derselbe wie der erste Scheitelpunkt. `marker-end` wird nur am letzten Scheitelpunkt der [Pfad-Daten](/de/docs/Web/SVG/Attribute/d#path_commands) gerendert.

> [!NOTE]
> Als Präsentationsattribut kann `marker-end` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('marker-end')}} für mehr.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f00" />
    </marker>
  </defs>
  <polyline
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20"
    marker-end="url(#triangle)" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Verwendungshinweise

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
  - : Gibt an, dass kein Markersymbol am letzten Scheitelpunkt gezeichnet wird.
- `<marker-ref>`
  - : Dieser Wert ist eine Referenz auf ein {{SVGElement("marker")}}-Element, das am letzten Scheitelpunkt gezeichnet wird. Wenn die Referenz ungültig ist, wird kein Marker gezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("marker-start")}}
- {{SVGAttr("marker-mid")}}
- CSS {{cssxref('marker-end')}}-Eigenschaft
