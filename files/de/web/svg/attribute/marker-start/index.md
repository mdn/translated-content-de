---
title: marker-start
slug: Web/SVG/Attribute/marker-start
l10n:
  sourceCommit: f1b6d2b8e68aaf767adaa86edcc261490c07f14d
---

{{SVGRef}}

Das **`marker-start`** Attribut definiert die Pfeilspitze oder das Polymarker, das an dem ersten Scheitelpunkt der angegebenen [Form](/de/docs/Web/SVG/Element#shape_elements) gezeichnet wird.

Für alle Formelemente, außer {{SVGElement("polyline")}} und {{SVGElement("path")}}, ist der letzte Scheitelpunkt derselbe wie der erste. In diesem Fall, wenn der Wert von `marker-start` und {{SVGAttr("marker-end")}} beide nicht `none` sind, werden zwei Markierungen an diesem letzten Scheitelpunkt gerendert. Bei `<path>` Elementen, für jeden geschlossenen Unterpfad, ist der letzte Scheitelpunkt derselbe wie der erste. `marker-start` wird nur am ersten Scheitelpunkt der [Pfaddaten](/de/docs/Web/SVG/Attribute/d#path_commands) gerendert. 

> [!NOTE]
> Als Präsentationsattribut kann `marker-start` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('marker-start')}} für mehr Informationen.

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
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f00" />
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

## Nutzungshinweise

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
      <td>disko</td>
    </tr>
  </tbody>
</table>

- `none`
  - : Gibt an, dass kein Markersymbol am ersten Scheitelpunkt gezeichnet wird.
- `<marker-ref>`
  - : Dieser Wert ist eine Referenz zu einem {{SVGElement("marker")}} Element, das am ersten Scheitelpunkt gezeichnet wird. Wenn die Referenz ungültig ist, wird kein Marker gezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("marker-end")}}
- {{SVGAttr("marker-mid")}}
- CSS {{cssxref('marker-start')}} Eigenschaft
