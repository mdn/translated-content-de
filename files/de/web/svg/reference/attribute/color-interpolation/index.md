---
title: color-interpolation
slug: Web/SVG/Reference/Attribute/color-interpolation
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`color-interpolation`** legt den Farbraum für Farbverlaufsinterpolationen, Farbanimationen und Alphakompositionen fest.

> [!NOTE]
> Bei Filtereffekten steuert die Eigenschaft {{SVGAttr("color-interpolation-filters")}}, welcher Farbraum verwendet wird.

Die Eigenschaft `color-interpolation` wählt zwischen Farboperationen im sRGB-Farbraum oder in einem linearisierten RGB-Farbraum (lichtenergetisch linear). Nachdem der passende Farbraum gewählt wurde, wird eine komponentenweise lineare Interpolation verwendet.

Wenn ein Kindelement in einen Hintergrund eingeblendet wird, bestimmt der Wert der Eigenschaft `color-interpolation` des Kindelements die Art der Überblendung, nicht der Wert der `color-interpolation` des Elternelements. Für Farbverläufe, die das {{SVGAttr("href")}}-Attribut oder das veraltete {{SVGAttr("xlink:href")}}-Attribut verwenden, um auf einen anderen Verlauf zu verweisen, verwendet der Verlauf den Eigenschaftswert des Verlaufselements, das direkt von der {{SVGAttr("fill")}}- oder {{SVGAttr("stroke")}}-Eigenschaft referenziert wird. Bei der Animation von Farben erfolgt die Farbdurchmischung gemäß dem Wert der `color-interpolation`-Eigenschaft auf dem Element, das animiert wird.

> [!NOTE]
> Als Präsentationsattribut hat `color-interpolation` auch ein entsprechendes CSS-Attribut: {{cssxref("color-interpolation")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("glyph")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("marker")}}
- {{SVGElement("mask")}}
- {{SVGElement("missing-glyph")}}
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
  - : Gibt an, dass der User-Agent entweder den `sRGB`- oder `linearRGB`-Farbraum für die Farbdurchmischung wählen kann. Diese Option bedeutet, dass der Autor nicht verlangt, dass die Farbdurchmischung in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbdurchmischung im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbdurchmischung im linearisierten RGB-Farbraum gemäß [der sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) erfolgen soll.

## Beispiel

Dieses Beispiel zeigt vier SVGs, jedes mit einem {{SVGElement("rect")}}-Element und einem unterschiedlichen Verlauf, der als Füllung für das `<rect>` verwendet wird. Die ersten beiden SVGs verwenden {{SVGElement("linearGradient")}} und die zweiten beiden verwenden {{SVGElement("radialGradient")}}-Elemente. In nicht unterstützten Browsern sieht der Verlauf gleich aus.

In diesem ersten SVG ist das Attribut `color-interpolation` nicht im `<linearGradient>`-Element enthalten, welches standardmäßig auf `sRGB` gesetzt ist.

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

In diesem zweiten SVG ist das Attribut `color-interpolation` im `<linearGradient>`-Element enthalten und auf `linearRGB` gesetzt.

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

In diesem dritten SVG ist das Attribut `color-interpolation` nicht im `<radialGradient>`-Element enthalten, welches standardmäßig auf `sRGB` gesetzt ist.

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

In diesem vierten SVG ist das Attribut `color-interpolation` im `<radialGradient>`-Element enthalten und auf `linearRGB` gesetzt.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
- CSS {{cssxref("color-interpolation")}}-Eigenschaft
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
- {{SVGAttr("color-interpolation-filters")}}
- [Computer color is broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) - populäre Demonstration von linearRGB
