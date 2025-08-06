---
title: marker-mid
slug: Web/SVG/Reference/Attribute/marker-mid
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`marker-mid`** Attribut definiert die Pfeilspitze oder den Polymarker, der an allen inneren Ecken der gegebenen [Form](/de/docs/Web/SVG/Reference/Element#shape_elements) gezeichnet wird.

Der Marker wird an jedem Eckpunkt mit Ausnahme des ersten und letzten Eckpunkts der [Pfad-Daten](/de/docs/Web/SVG/Reference/Attribute/d#path_commands) gerendert.

> [!NOTE]
> Als Präsentationsattribut hat `marker-mid` auch eine entsprechende CSS-Eigenschaft: {{cssxref("marker-mid")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
      <circle cx="4" cy="4" r="4" stroke="none" fill="red" />
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
  - : Gibt an, dass an den angegebenen Eckpunkten kein Markersymbol gezeichnet wird.
- `<marker-ref>`
  - : Dieser Wert ist ein Verweis auf ein {{SVGElement("marker")}} Element, das an den angegebenen Eckpunkten gezeichnet wird. Ist der Verweis ungültig, wird kein Marker gezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("marker")}}
- {{SVGAttr("marker-start")}}
- {{SVGAttr("marker-end")}}
- CSS {{cssxref('marker-mid')}} Eigenschaft
