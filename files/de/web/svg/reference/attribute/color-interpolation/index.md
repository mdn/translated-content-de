---
title: color-interpolation
slug: Web/SVG/Reference/Attribute/color-interpolation
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`color-interpolation`** legt den Farbraum für die Interpolation von Farbverläufen, Farbanimationen und Alpha-Compositing fest.

> [!NOTE]
> Bei Filtereffekten steuert die Eigenschaft {{SVGAttr("color-interpolation-filters")}}, welcher Farbraum verwendet wird.

Die Eigenschaft `color-interpolation` legt fest, ob Farboperationen im sRGB-Farbraum oder in einem linearisierten RGB-Farbraum (linear in Bezug auf die Lichtenergie) stattfinden. Im gewählten Farbraum wird für jede Komponente eine lineare Interpolation verwendet.

Wenn ein Kindelement mit einem Hintergrund gemischt wird, bestimmt der Wert der Eigenschaft `color-interpolation` auf dem Kindelement die Art der Mischung, nicht der Wert auf dem Elternelement. Bei Farbverläufen, die über das Attribut {{SVGAttr("href")}} oder das veraltete Attribut {{SVGAttr("xlink:href")}} auf einen anderen Farbverlauf verweisen, wird der Eigenschaftswert des Farbverlaufelements verwendet, auf das die Eigenschaft {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} direkt verweist. Bei Farbanimationen richtet sich die Farbinterpolation nach dem Wert der Eigenschaft `color-interpolation` auf dem animierten Element.

> [!NOTE]
> Als Präsentationsattribut hat `color-interpolation` auch eine entsprechende CSS-Eigenschaft: {{cssxref("color-interpolation")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("marker")}}
- {{SVGElement("mask")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Beispiel

Dieses Beispiel zeigt vier SVGs, die jeweils ein {{SVGElement("rect")}}-Element enthalten und einen anderen Farbverlauf als Füllung für das `<rect>` verwenden. Die ersten beiden SVGs verwenden {{SVGElement("linearGradient")}}-Elemente, die letzten beiden {{SVGElement("radialGradient")}}-Elemente. In Browsern ohne Unterstützung sehen die Farbverläufe gleich aus.

Im ersten SVG ist das Attribut `color-interpolation` nicht auf dem `<linearGradient>`-Element angegeben. Daher gilt der Standardwert `sRGB`.

```css hidden
svg {
  display: block;
}
```

```html
<svg width="450" height="70">
  <title>
    Example of linearGradient excluding the color-interpolation attribute
  </title>
  <defs>
    <linearGradient id="gradientDefault">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#gradientDefault)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation not set
  </text>
</svg>
```

Im zweiten SVG ist das Attribut `color-interpolation` auf dem `<linearGradient>`-Element angegeben und auf `linearRGB` gesetzt.

```html
<svg width="450" height="70">
  <title>
    Example of linearGradient using the color-interpolation attribute
  </title>
  <defs>
    <linearGradient id="gradientLinearRGB" color-interpolation="linearRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#gradientLinearRGB)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation="linearRGB"
  </text>
</svg>
```

Im dritten SVG ist das Attribut `color-interpolation` nicht auf dem `<radialGradient>`-Element angegeben. Daher gilt der Standardwert `sRGB`.

```html
<svg width="450" height="70">
  <title>
    Example of radialGradient excluding the color-interpolation attribute
  </title>
  <defs>
    <radialGradient id="none">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="gold" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="400" height="40" fill="url(#none)" stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation not set
  </text>
</svg>
```

Im vierten SVG ist das Attribut `color-interpolation` auf dem `<radialGradient>`-Element angegeben und auf `linearRGB` gesetzt.

```html
<svg width="450" height="70">
  <title>
    Example of radialGradient using the color-interpolation attribute
  </title>
  <defs>
    <radialGradient id="radLinearRGB" color-interpolation="linearRGB">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="gold" />
    </radialGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#radLinearRGB)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation="linearRGB" (SVG attr)
  </text>
</svg>
```

{{EmbedLiveSample("Example", "100%", "280")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>sRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Gibt an, dass der User Agent für die Farbinterpolation entweder den Farbraum `sRGB` oder `linearRGB` wählen kann. Diese Option bedeutet, dass keine Interpolation in einem bestimmten Farbraum erforderlich ist.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
- CSS-Eigenschaft {{cssxref("color-interpolation")}}
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
- {{SVGAttr("color-interpolation-filters")}}
- [Computer color is broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) – eine anschauliche Demonstration von linearRGB
