---
title: vector-effect
slug: Web/SVG/Reference/Attribute/vector-effect
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die **`vector-effect`**-Eigenschaft legt den Vektoreffekt fest, der beim Zeichnen eines Objekts verwendet wird. Vektoreffekte werden vor allen anderen Kompositionsoperationen angewendet, d.h. vor Filtern, Masken und Clips.

> [!NOTE]
> Als Präsentationsattribut hat `vector-effect` auch ein CSS-Eigenschaftsgegenstück: {{cssxref("vector-effect")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
  - : Dieser Wert legt fest, dass kein Vektoreffekt angewendet wird, d.h. das Standard-Rendeverhalten wird verwendet. Dies bedeutet, dass die Geometrie einer Form zunächst mit einer angegebenen Farbe gefüllt und dann der Umriss mit einer angegebenen Farbe gestrichen wird.
- `non-scaling-stroke`
  - : Dieser Wert ändert die Art und Weise, wie ein Objekt gestrichen wird. Normalerweise umfasst das Streichen das Berechnen des Umrisses einer Form im aktuellen Benutzerkoordinatensystem und das Füllen dieses Umrisses mit der Strichfarbe (Farbe oder Verlauf). Der resultierende visuelle Effekt dieses Wertes ist, dass die Strichbreite nicht von den Transformationen des Elements (einschließlich nicht-uniformem Skalieren und Schertransformationen) und vom Zoom-Level abhängt.

> [!NOTE]
> Die Spezifikation definiert drei weitere Werte, `non-scaling-size`, `non-rotation`, und `fixed-position`, aber diese haben keine Implementierungen und werden als gefährdet betrachtet.

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
