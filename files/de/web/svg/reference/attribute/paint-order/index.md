---
title: paint-order
slug: Web/SVG/Reference/Attribute/paint-order
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`paint-order`** Attribut gibt die Reihenfolge an, in der die Füllung, der Umriss und die Markierungen eines bestimmten Form- oder Textelements gezeichnet werden.

> [!NOTE]
> Als Präsentationsattribut hat `paint-order` auch ein entsprechendes CSS-Eigenschaft: {{cssxref("paint-order")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Hinweise zur Verwendung

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
  - : Dieser Wert gibt an, dass zuerst die Füllung, dann der Umriss und zuletzt die Markierungen gezeichnet werden.
- \[ fill || stroke || markers ]
  - : Die Reihenfolge dieser drei Schlüsselwörter gibt die Reihenfolge an, in der das Zeichnen erfolgt, von links nach rechts. Wenn eines der drei Zeichnungskomponenten weggelassen wird, werden sie in der Standardreihenfolge nach den angegebenen Komponenten gezeichnet. Zum Beispiel entspricht die Verwendung von `stroke` der Reihenfolge `stroke fill markers`.

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

Das Beispiel würde folgendermaßen gerendert werden:

![Ein Bild, das zeigt, wie das paint-order Beispiel in einer Benutzerumgebung aussieht, die die paint-order Eigenschaft unterstützt.](paint-order-2.png)

Der Effekt von einem Umriss unter der Füllung könnte durch die folgende CSS-Eigenschaft erzielt werden:

```css
#stroke-under {
  paint-order: stroke;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
