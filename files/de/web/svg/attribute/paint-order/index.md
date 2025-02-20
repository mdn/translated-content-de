---
title: paint-order
slug: Web/SVG/Attribute/paint-order
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`paint-order`**-Attribut legt die Reihenfolge fest, in der die Füllung (fill), der Rahmen (stroke) und die Markierungen (markers) eines bestimmten Shapes oder Textelements gezeichnet werden.

> [!NOTE]
> Als Präsentationsattribut hat `paint-order` auch ein entsprechendes CSS-Property: {{cssxref("paint-order")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th>Wert</th>
      <td>
        <code>normal</code> | [ <code>fill</code> || <code>stroke</code> ||
        <code>markers</code> ]
      </td>
    </tr>
    <tr>
      <th>Standardwert</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th>Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

- normal
  - : Dieser Wert gibt an, dass zuerst die Füllung gezeichnet wird, dann der Rahmen und schließlich die Markierungen.
- \[ fill || stroke || markers ]
  - : Die Reihenfolge dieser drei Schlüsselwörter gibt die Reihenfolge an, in der das Zeichnen geschieht, von links nach rechts. Wenn eine der drei Mal-Komponenten weggelassen wird, werden sie in ihrer Standardreihenfolge nach den angegebenen Komponenten gezeichnet. Zum Beispiel entspricht die Verwendung von `stroke` dem Wert `stroke fill markers`.

## Beispiel

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop stop-color="#888" />
    <stop stop-color="#ccc" offset="1" />
  </linearGradient>
  <rect width="400" height="200" fill="url(#g)" />
  <g
    fill="crimson"
    stroke="white"
    stroke-width="6"
    stroke-linejoin="round"
    text-anchor="middle"
    font-family="sans-serif"
    font-size="50px"
    font-weight="bold">
    <text x="200" y="75">stroke over</text>
    <text x="200" y="150" paint-order="stroke" id="stroke-under">
      stroke under
    </text>
  </g>
</svg>
```

Das Beispiel wird wie folgt dargestellt:

![Ein Bild, das zeigt, wie das paint-order-Beispiel in einem Benutzeragent aussieht, der die paint-order-Eigenschaft unterstützt.](paint-order-2.png)

Der Effekt "Rahmen unter der Füllung" könnte mit der folgenden CSS-Eigenschaft erreicht werden:

```css
#stroke-under {
  paint-order: stroke;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
