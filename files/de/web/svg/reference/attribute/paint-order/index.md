---
title: paint-order
slug: Web/SVG/Reference/Attribute/paint-order
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`paint-order`** legt die Reihenfolge fest, in der die Füllung, die Kontur und die Marker eines Form- oder Textelements gezeichnet werden.

> [!NOTE]
> Als Präsentationsattribut hat `paint-order` auch ein entsprechendes CSS-Property: {{cssxref("paint-order")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Beispiel

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop stop-color="#888888" />
    <stop stop-color="#cccccc" offset="1" />
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

Das Beispiel würde wie folgt dargestellt:

![Ein Bild, das zeigt, wie das paint-order-Beispiel in einem User Agent aussieht, der das paint-order-Property unterstützt.](paint-order-2.png)

Der Effekt, bei dem die Kontur unter der Füllung liegt, lässt sich mit dem folgenden CSS-Property erzielen:

```css
#stroke-under {
  paint-order: stroke;
}
```

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
  - : Dieser Wert gibt an, dass zuerst die Füllung, dann die Kontur und zuletzt die Marker gezeichnet werden.
- \[ fill || stroke || markers ]
  - : Die Reihenfolge dieser drei Schlüsselwörter bestimmt von links nach rechts, in welcher Reihenfolge die Komponenten gezeichnet werden. Wenn eine der drei Komponenten weggelassen wird, wird sie nach den angegebenen Komponenten in ihrer Standardreihenfolge gezeichnet. Beispielsweise ist `stroke` gleichbedeutend mit `stroke fill markers`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
