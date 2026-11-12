---
title: vector-effect
slug: Web/SVG/Reference/Attribute/vector-effect
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Die Eigenschaft **`vector-effect`** legt fest, welcher Vektoreffekt beim Zeichnen eines Objekts verwendet wird. Vektoreffekte werden vor allen anderen Compositing-Vorgängen angewendet, also vor Filtern, Masken und Clipping.

> [!NOTE]
> Als Präsentationsattribut hat `vector-effect` auch eine entsprechende CSS-Eigenschaft: {{cssxref("vector-effect")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Beispiele

### `vector-effect` auf `non-scaling-stroke` setzen

```html
<svg viewBox="0 0 500 240">
  <!-- normal -->
  <path
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- scaled -->
  <path
    transform="translate(100,0) scale(4,1)"
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- fixed-->
  <path
    vector-effect="non-scaling-stroke"
    transform="translate(300, 0) scale(4, 1)"
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>
</svg>
```

#### Ergebnis

{{EmbedLiveSample("Setting vector-effect as non-scaling-stroke", 550, 330)}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>none</code> | <code>non-scaling-stroke</code> |
        <code>non-scaling-size</code> | <code>non-rotation</code> |
        <code>fixed-position</code>
      </td>
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
  - : Dieser Wert legt fest, dass kein Vektoreffekt angewendet wird. Stattdessen wird das standardmäßige Rendering-Verhalten verwendet: Zuerst wird die Geometrie einer Form mit der angegebenen Füllung ausgefüllt, anschließend wird ihre Kontur mit der angegebenen Farbe oder einem Farbverlauf gezeichnet.
- `non-scaling-stroke`
  - : Dieser Wert ändert, wie die Kontur eines Objekts gezeichnet wird. Normalerweise wird dazu der Umriss der Kontur anhand des Pfads der Form im aktuellen Benutzerkoordinatensystem berechnet und mit der Konturfarbe oder einem Farbverlauf ausgefüllt. Der sichtbare Effekt dieses Werts besteht darin, dass die Konturbreite nicht von den Transformationen des Elements (einschließlich ungleichmäßiger Skalierung und Scherung) oder der Zoomstufe abhängt.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`. Diese sind jedoch nicht implementiert und gelten als gefährdet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("vector-effect")}}
