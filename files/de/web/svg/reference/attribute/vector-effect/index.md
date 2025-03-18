---
title: vector-effect
slug: Web/SVG/Reference/Attribute/vector-effect
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Die **`vector-effect`** Eigenschaft gibt den Vektoreffekt an, der beim Zeichnen eines Objekts verwendet werden soll. Vektoreffekte werden angewendet, bevor andere Kompositionsoperationen durchgeführt werden, d.h. Filter, Masken und Clips.

> [!NOTE]
> Als Präsentationsattribut hat `vector-effect` auch ein entsprechendes CSS-Attribut: {{cssxref("vector-effect")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

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
  - : Dieser Wert gibt an, dass kein Vektoreffekt angewendet wird, d.h. es wird das Standard-Renditionsverhalten verwendet, das darin besteht, die Geometrie einer Form zuerst mit einer angegebenen Farbe zu füllen und dann die Umrandung mit einer angegebenen Farbe zu überstreichen.
- `non-scaling-stroke`
  - : Dieser Wert ändert die Art und Weise, wie ein Objekt überstrichen wird. Normalerweise beinhaltet das Überstreichen die Berechnung der Umrandung der Form im aktuellen Benutzerkoordinatensystem und das Füllen dieser Umrandung mit der Überstreichfarbe (Farbe oder Verlauf). Der visuelle Effekt dieses Wertes ist, dass die Linienstärke nicht von den Transformationen des Elements (einschließlich nicht-uniformer Skalierungen und Schertransformationen) und dem Zoomlevel abhängt.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation` und `fixed-position`, aber diese sind nicht implementiert und gelten als riskant.

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

{{EmbedLiveSample("Festlegen von vector-effect als non-scaling-stroke", 550, 330)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("vector-effect")}} Eigenschaft
