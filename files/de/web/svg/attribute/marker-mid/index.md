---
title: marker-mid
slug: Web/SVG/Attribute/marker-mid
l10n:
  sourceCommit: f1b6d2b8e68aaf767adaa86edcc261490c07f14d
---

{{SVGRef}}

Das **`marker-mid`** Attribut definiert den Pfeilspitzen- oder Polymarker, der an allen inneren Scheitelpunkten der angegebenen [Form](/de/docs/Web/SVG/Element#shape_elements) gezeichnet wird.

Der Marker wird an jedem Scheitelpunkt gerendert, mit Ausnahme des ersten und letzten Scheitelpunkts der [Pfaddaten](/de/docs/Web/SVG/Attribute/d#path_commands).

> [!NOTE]
> Als Präsentationsattribut kann `marker-mid` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('marker-mid')}} für mehr Informationen.

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
    <marker id="circle" markerWidth="8" markerHeight="8" refX="4" refY="4">
      <circle cx="4" cy="4" r="4" stroke="none" fill="#f00" />
    </marker>
  </defs>
  <polyline
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20"
    marker-mid="url(#circle)" />
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
  - : Zeigt an, dass kein Markersymbol an den angegebenen Scheitelpunkten gezeichnet wird.
- `<marker-ref>`
  - : Dieser Wert ist ein Verweis auf ein {{SVGElement("marker")}} Element, welches an den angegebenen Scheitelpunkten gezeichnet wird. Falls der Verweis ungültig ist, wird kein Marker gezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("marker-start")}}
- {{SVGAttr("marker-end")}}
- CSS {{cssxref('marker-mid')}} Eigenschaft
