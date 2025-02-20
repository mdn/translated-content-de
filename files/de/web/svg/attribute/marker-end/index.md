---
title: marker-end
slug: Web/SVG/Attribute/marker-end
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`marker-end`**-Attribut definiert den Pfeilkopf oder Mehrfach-Markierer, der am letzten Scheitelpunkt der angegebenen [Form](/de/docs/Web/SVG/Element#shape_elements) gezeichnet wird.

Für alle Form-Elemente außer {{SVGElement("polyline")}} und {{SVGElement("path")}} ist der letzte Scheitelpunkt identisch mit dem ersten Scheitelpunkt. In diesem Fall, wenn der Wert von {{SVGAttr("marker-start")}} und `marker-end` beide nicht `none` sind, werden zwei Markierer an diesem letzten Scheitelpunkt gerendert. Für `<path>`-Elemente ist bei jedem geschlossenen Teilpfad der letzte Scheitelpunkt identisch mit dem ersten Scheitelpunkt. `marker-end` wird nur auf dem finalen Scheitelpunkt der [Pfad-Daten](/de/docs/Web/SVG/Attribute/d#path_commands) gerendert.

> [!NOTE]
> Als Präsentationsattribut hat `marker-end` auch ein entsprechendes CSS-Property: {{cssxref("marker-end")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
    marker-end="url(#triangle)" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Hinweise zur Verwendung

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
  - : Gibt an, dass kein Markiersymbol am letzten Scheitelpunkt gezeichnet wird.
- `<marker-ref>`
  - : Dieser Wert ist ein Verweis auf ein {{SVGElement("marker")}}-Element, das am letzten Scheitelpunkt gezeichnet wird. Wenn der Verweis nicht gültig ist, wird kein Marker gezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("marker-start")}}
- {{SVGAttr("marker-mid")}}
- CSS {{cssxref('marker-end')}}-Eigenschaft
