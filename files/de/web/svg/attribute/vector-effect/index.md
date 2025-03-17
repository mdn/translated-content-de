---
title: vector-effect
slug: Web/SVG/Attribute/vector-effect
l10n:
  sourceCommit: 7ff7c5c9df45a707b616ae3c3ab1ba7ae7c249ec
---

{{SVGRef}}

Die **`vector-effect`**-Eigenschaft legt den Vektoreffekt fest, der beim Zeichnen eines Objekts verwendet werden soll. Vektoreffekte werden angewendet, bevor andere Compositing-Operationen wie Filter, Masken und Clips ausgeführt werden.

> [!NOTE]
> Als Präsentationsattribut hat `vector-effect` auch ein entsprechendes CSS-Attribut: {{cssxref("vector-effect")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
  - : Dieser Wert gibt an, dass kein Vektoreffekt angewendet werden soll, d.h. das Standard-Rendierungsverhalten wird verwendet, bei dem zunächst die Geometrie einer Form mit einer angegebenen Farbe gefüllt und dann die Umrisse mit einer angegebenen Farbe umrandet werden.
- `non-scaling-stroke`
  - : Dieser Wert ändert die Art und Weise, wie ein Objekt umrandet wird. Normalerweise umfasst das Umranden das Berechnen der Umrisse des Pfades der Form im aktuellen Benutzerkoordinatensystem und das Füllen dieser Umrisse mit der Umrandungsfarbe (Farbe oder Verlauf). Der resultierende visuelle Effekt dieses Wertes ist, dass die Strichbreite nicht von den Transformationen des Elements (einschließlich nicht-uniformer Skalierung und Scherung) und dem Zoomlevel abhängt.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`, aber diese haben keine Implementierungen und gelten als risikobehaftet.

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

- CSS {{cssxref("vector-effect")}}-Eigenschaft
