---
title: vector-effect
slug: Web/SVG/Attribute/vector-effect
l10n:
  sourceCommit: 448c98d691400174814c4666afdc52e022f428ef
---

{{SVGRef}}

Die **`vector-effect`** Eigenschaft gibt den Vektoreffekt an, der beim Zeichnen eines Objekts verwendet werden soll. Vektoreffekte werden vor allen anderen Zusammensetzungsoperationen angewendet, d.h. Filtern, Masken und Clips.

> [!NOTE]
> Als Präsentationsattribut kann `vector-effect` als CSS-Eigenschaft verwendet werden.

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
  - : Dieser Wert gibt an, dass kein Vektoreffekt angewendet wird, d.h. das Standard-Renditionverhalten wird verwendet, das darin besteht, zuerst die Geometrie einer Form mit einer angegebenen Farbe zu füllen und dann die Umrisse mit einer angegebenen Farbe zu konturieren.
- `non-scaling-stroke`
  - : Dieser Wert ändert die Art und Weise, wie ein Objekt konturiert wird. Normalerweise bedeutet das Konturieren das Berechnen der Konturpfade der Form im aktuellen Benutzerkoordinatensystem und das Füllen dieser Konturen mit der Konturlackierung (Farbe oder Gradient). Der resultierende visuelle Effekt dieses Wertes besteht darin, dass die Strichbreite nicht von den Transformationen des Elements (einschließlich nicht-uniformer Skalierung und Schertransformationen) und vom Zoomlevel abhängt.
- `non-scaling-size`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Der Maßstab dieses Benutzerkoordinatensystems ändert sich nicht trotz etwaiger Transformationsänderungen aus einem übergeordneten Koordinatenraum. Es spezifiziert jedoch nicht die Unterdrückung von Rotation und Scherung. Zudem spezifiziert es nicht den Ursprung des Benutzerkoordinatensystems. Da dieser Wert die Skalierung des Benutzerkoordinatensystems unterdrückt, hat es auch die Eigenschaften von `non-scaling-stroke`.
- `non-rotation`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Die Rotation und Scherung dieses Benutzerkoordinatensystems wird unterdrückt trotz etwaiger Transformationsänderungen aus einem übergeordneten Koordinatenraum. Es spezifiziert jedoch nicht die Unterdrückung der Skalierung. Zudem spezifiziert es nicht den Ursprung des Benutzerkoordinatensystems.
- `fixed-position`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Die Position des Benutzerkoordinatensystems ist festgelegt trotz etwaiger Transformationsänderungen aus einem übergeordneten Koordinatenraum. Es spezifiziert jedoch nicht die Unterdrückung von Rotation, Scherung und Skalierung. Wenn dieser Vektoreffekt und die {{SVGAttr("transform")}} Eigenschaft gleichzeitig definiert sind, wird diese Eigenschaft für diesen Effekt konsumiert.

## Beispiele

### Festlegung von `vector-effect` als `non-scaling-stroke`

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("vector-effect")}} Eigenschaft
