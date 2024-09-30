---
title: vector-effect
slug: Web/SVG/Attribute/vector-effect
l10n:
  sourceCommit: 448c98d691400174814c4666afdc52e022f428ef
---

{{SVGRef}}

Die **`vector-effect`** Eigenschaft legt den Vektoreffekt fest, der beim Zeichnen eines Objekts verwendet werden soll. Vektoreffekte werden vor allen anderen Kompositionsoperationen angewendet, d.h. vor Filtern, Masken und Ausschnitten.

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

## Anwendungshinweise

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
  - : Dieser Wert gibt an, dass kein Vektoreffekt angewendet wird, d.h. das Standardanzeigeverhalten wird verwendet, welches darin besteht, zuerst die Geometrie einer Form mit einer angegebenen Farbe zu füllen und dann die Kontur mit einer angegebenen Farbe zu umranden.
- `non-scaling-stroke`
  - : Dieser Wert modifiziert die Art und Weise, wie ein Objekt umrandet wird. Normalerweise beinhaltet das Umrandung das Berechnen der Umrisslinie des Pfades der Form im aktuellen Benutzerkoordinatensystem und das Füllen dieser Umrisslinie mit der Umrandungsfarbe (Farbe oder Verlauf). Der resultierende visuelle Effekt dieses Wertes ist, dass die Strichbreite nicht von den Transformationen des Elements (einschließlich nicht-uniformer Skalierung und Schertransformationen) und dem Zoomlevel abhängt.
- `non-scaling-size`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Der Maßstab dieses Benutzerkoordinatensystems ändert sich trotz aller Transformationsänderungen eines übergeordneten Koordinatenraums nicht. Es gibt jedoch keine Unterdrückung der Drehung und Scherung an. Außerdem wird der Ursprung des Benutzerkoordinatensystems nicht angegeben. Da dieser Wert die Skalierung des Benutzerkoordinatensystems unterdrückt, hat er auch die Eigenschaften von `non-scaling-stroke`.
- `non-rotation`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Die Drehung und Scherung dieses Benutzerkoordinatensystems wird trotz aller Transformationsänderungen eines übergeordneten Koordinatenraums unterdrückt. Es gibt jedoch keine Unterdrückung der Skalierung. Außerdem wird der Ursprung des Benutzerkoordinatensystems nicht angegeben.
- `fixed-position`
  - : Dieser Wert gibt ein spezielles Benutzerkoordinatensystem an, das vom Element und seinen Nachkommen verwendet wird. Die Position des Benutzerkoordinatensystems bleibt fest, trotz aller Transformationsänderungen eines übergeordneten Koordinatenraums. Es gibt jedoch keine Unterdrückung der Drehung, Scherung und Skalierung. Wenn dieser Vektoreffekt und die {{SVGAttr("transform")}} Eigenschaft gleichzeitig definiert sind, wird diese Eigenschaft für diesen Effekt verwendet.

## Beispiele

### Setzen von `vector-effect` auf `non-scaling-stroke`

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
