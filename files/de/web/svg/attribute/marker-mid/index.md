---
title: marker-mid
slug: Web/SVG/Attribute/marker-mid
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`marker-mid`**-Attribut definiert den Pfeilkopf oder Polymarker, der an allen inneren Eckpunkten der angegebenen [Form](/de/docs/Web/SVG/Element#shape_elements) gezeichnet wird.

Der Marker wird auf jedem Eckpunkt außer dem ersten und letzten Eckpunkt der [Path-Daten](/de/docs/Web/SVG/Attribute/d#path_commands) gerendert.

> [!NOTE]
> Als Präsentationsattribut hat `marker-mid` auch ein entsprechendes CSS-Property: {{cssxref("marker-mid")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
  - : Zeigt an, dass kein Markersymbol an den angegebenen Eckpunkten gezeichnet wird.
- `<marker-ref>`
  - : Dieser Wert ist eine Referenz auf ein {{SVGElement("marker")}}-Element, das an den angegebenen Eckpunkten gezeichnet wird. Wenn die Referenz ungültig ist, wird kein Marker gezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("marker-start")}}
- {{SVGAttr("marker-end")}}
- CSS {{cssxref('marker-mid')}} Eigenschaft
