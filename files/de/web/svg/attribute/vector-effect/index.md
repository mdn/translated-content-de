---
title: Vektoreffekt
slug: Web/SVG/Attribute/vector-effect
l10n:
  sourceCommit: 448c98d691400174814c4666afdc52e022f428ef
---

{{SVGRef}}

Die **`vector-effect`**-Eigenschaft bestimmt den anzuwendenden Vektoreffekt beim Zeichnen eines Objekts. Vektoreffekte werden vor allen anderen Kompositionsvorgängen angewendet, d.h. Filtern, Masken und Clips.

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
  - : Dieser Wert gibt an, dass kein Vektoreffekt angewendet wird, d.h. das Standardrendieverhalten wird verwendet, welches darin besteht, zuerst die Geometrie einer Form mit einer angegebenen Farbe zu füllen und dann die Umrisse mit einer angegebenen Farbe zu umranden.
- `non-scaling-stroke`
  - : Dieser Wert ändert die Art und Weise, wie ein Objekt umrandet wird. Normalerweise beinhaltet das Umranden die Berechnung der Umrisse des Pfads der Form im aktuellen Benutzerkoordinatensystem und das Füllen dieses Umrisses mit der Umrandungsfarbe (Farbe oder Verlauf). Der resultierende visuelle Effekt dieses Wertes ist, dass die Strichbreite unabhängig von den Transformationen des Elements (einschließlich nicht-uniformer Skalierung und Schertransformationen) und dem Zoomlevel ist.
- `non-scaling-size`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Der Maßstab dieses Benutzerkoordinatensystems ändert sich trotz jeder Transformationsänderung von einem übergeordneten Koordinatenraum nicht. Er gibt jedoch nicht die Unterdrückung von Drehung und Schräglage an. Auch wird nicht der Ursprung des Benutzerkoordinatensystems angegeben. Da dieser Wert die Skalierung des Benutzerkoordinatensystems unterdrückt, weist er auch die Eigenschaften von `non-scaling-stroke` auf.
- `non-rotation`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Die Drehung und Schräglage dieses Benutzerkoordinatensystems wird trotz jeder Transformationsänderung von einem übergeordneten Koordinatenraum unterdrückt. Er gibt jedoch nicht die Unterdrückung der Skalierung an. Auch wird nicht der Ursprung des Benutzerkoordinatensystems angegeben.
- `fixed-position`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Die Position des Benutzerkoordinatensystems ist fest, trotz jeder Transformationsänderung von einem übergeordneten Koordinatenraum. Jedoch gibt es nicht die Unterdrückung von Drehung, Schräglage und Skalierung an. Wenn dieser Vektoreffekt und die {{SVGAttr("transform")}}-Eigenschaft gleichzeitig definiert sind, wird diese Eigenschaft für diesen Effekt verwendet.

## Beispiele

### `vector-effect` als `non-scaling-stroke` setzen

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

- CSS {{cssxref("vector-effect")}}-Eigenschaft
