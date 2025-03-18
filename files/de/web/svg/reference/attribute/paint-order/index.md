---
title: paint-order
slug: Web/SVG/Reference/Attribute/paint-order
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`paint-order`** Attribut legt die Reihenfolge fest, in der die Füllung (fill), der Strich (stroke) und die Markierungen (markers) eines bestimmten Form- oder Textelements gezeichnet werden.

> [!NOTE]
> Als Präsentationsattribut hat `paint-order` auch ein entsprechendes CSS-Attribut: {{cssxref("paint-order")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

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
  - : Dieser Wert gibt an, dass zuerst die Füllung, dann der Strich und schließlich die Markierungen gezeichnet werden.
- \[ fill || stroke || markers ]
  - : Die Reihenfolge dieser drei Schlüsselwörter gibt die Reihenfolge an, in der gezeichnet wird, von links nach rechts. Wenn eine der drei Zeichenkomponenten weggelassen wird, werden sie in ihrer Standardreihenfolge nach den angegebenen Komponenten gezeichnet. Zum Beispiel ist `stroke` äquivalent zu `stroke fill markers`.

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

Das Beispiel würde wie folgt gerendert:

![Ein Bild, das zeigt, wie das paint-order-Beispiel in einem UA aussieht, der die paint-order-Eigenschaft unterstützt.](paint-order-2.png)

Der Effekt des darunterliegenden Strichs könnte durch die folgende CSS-Eigenschaft erreicht werden:

```css
#stroke-under {
  paint-order: stroke;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
