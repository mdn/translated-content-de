---
title: vector-effect
slug: Web/SVG/Attribute/vector-effect
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Die **`vector-effect`**-Eigenschaft legt den Vektoreffekt fest, der beim Zeichnen eines Objekts verwendet werden soll. Vektoreffekte werden vor allen anderen Kompositionsoperationen angewendet, d. h. Filtern, Masken und Clips.

> [!NOTE]
> Als Präsentationsattribut hat `vector-effect` auch ein entsprechendes CSS-Property: {{cssxref("vector-effect")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Elemente

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Nutzungsnotizen

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
  - : Dieser Wert gibt an, dass kein Vektoreffekt angewendet wird, d. h. das Standard-Render-Verhalten wird verwendet, bei dem zuerst die Geometrie einer Form mit einer angegebenen Farbe gefüllt und anschließend die Kontur mit einer angegebenen Farbe gezeichnet wird.
- `non-scaling-stroke`
  - : Dieser Wert modifiziert die Art und Weise, wie ein Objekt gestrichen wird. Normalerweise beinhaltet das Streichen das Berechnen der Kontur des Pfads der Form im aktuellen Benutzerkoordinatensystem und das Füllen dieser Kontur mit der Streichfarbe (Farbe oder Gradient). Der visuelle Effekt dieses Wertes besteht darin, dass die Strichbreite nicht von den Transformationen des Elements (einschließlich nicht-uniformer Skalierungen und Schertransformationen) und dem Zoomlevel abhängt.
- `non-scaling-size`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das von dem Element und seinen Nachkommen verwendet wird. Der Maßstab dieses Benutzerkoordinatensystems ändert sich nicht trotz möglicher Transformationsänderungen im Hostkoordinatensystem. Es wird jedoch nicht die Unterdrückung von Rotation oder Schrägung angegeben. Außerdem wird der Ursprung des Benutzerkoordinatensystems nicht festgelegt. Da dieser Wert die Skalierung des Benutzerkoordinatensystems unterdrückt, hat er auch die Eigenschaften von `non-scaling-stroke`.
- `non-rotation`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das von dem Element und seinen Nachkommen verwendet wird. Die Rotation und Schrägung dieses Benutzerkoordinatensystems wird trotz möglicher Transformationsänderungen im Hostkoordinatensystem unterdrückt. Es wird jedoch nicht die Unterdrückung der Skalierung angegeben. Außerdem wird der Ursprung des Benutzerkoordinatensystems nicht festgelegt.
- `fixed-position`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das von dem Element und seinen Nachkommen verwendet wird. Die Position des Benutzerkoordinatensystems bleibt fixiert, unabhängig von möglichen Transformationsänderungen im Hostkoordinatensystem. Es wird jedoch nicht die Unterdrückung von Rotation, Schrägung und Skalierung angegeben. Wenn dieser Vektoreffekt und die {{SVGAttr("transform")}}-Eigenschaft gleichzeitig definiert sind, wird diese Eigenschaft für diesen Effekt verwendet.

## Beispiele

### Festlegen von `vector-effect` als `non-scaling-stroke`

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

- CSS-{{cssxref("vector-effect")}}-Eigenschaft
