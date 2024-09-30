---
title: color-interpolation
slug: Web/SVG/Attribute/color-interpolation
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{SVGRef}}

Das Attribut **`color-interpolation`** gibt den Farbraum für Farbverlaufsinterpolationen, Farbanimationen und Alpha-Compositing an.

> [!NOTE]
> Für Filtereffekte steuert die Eigenschaft {{SVGAttr("color-interpolation-filters")}}, welcher Farbraum verwendet wird.

Die Eigenschaft `color-interpolation` wählt zwischen Farroperationen, die im sRGB-Farbraum oder in einem (Lichtenergie linearen) linearisierten RGB-Farbraum stattfinden. Nachdem der entsprechende Farbraum gewählt wurde, wird eine komponentenweise lineare Interpolation verwendet.

Wenn ein Kindelement in einen Hintergrund eingemischt wird, bestimmt der Wert der Eigenschaft `color-interpolation` des Kindes den Mischtyp, nicht der Wert der `color-interpolation` des Elternteils. Für Farbverläufe, die das Attribut {{SVGAttr("href")}} oder das veraltete {{SVGAttr("xlink:href")}} verwenden, um auf einen anderen Farbverlauf zu verweisen, verwendet der Farbverlauf den Wert der Eigenschaft von dem Farbverlaufselement, das direkt durch die Eigenschaft {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} referenziert wird. Bei der Animation von Farben wird die Farbintepolation nach dem Wert der `color-interpolation`-Eigenschaft auf dem animierten Element durchgeführt.

> [!NOTE]
> Als Präsentationsattribut kann {{CSSXref("color-interpolation")}} als CSS-Eigenschaft verwendet werden.

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

## Hinweise zur Nutzung

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
  - : Gibt an, dass der Benutzeragent entweder den `sRGB`- oder den `linearRGB`-Raum für die Farbintepolation wählen kann. Diese Option gibt an, dass der Autor nicht erfordert, dass die Farbintepolation in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbintepolation im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbintepolation im linearisierten RGB-Farbraum gemäß [der sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) erfolgen soll.

## Beispiel

Dieses Beispiel zeigt vier SVGs, die jeweils ein {{SVGElement("rect")}}-Element enthalten und mit einem unterschiedlichen Gradienten als Füllung für das `<rect>` versehen sind. Die ersten beiden SVGs verwenden {{SVGElement("linearGradient")}}, und die zweiten beiden verwenden {{SVGElement("radialGradient")}}-Elemente. In nicht unterstützten Browsern sieht der Gradient gleich aus.

Im ersten SVG ist das `color-interpolation`-Attribut nicht im `<linearGradient>`-Element enthalten, was standardmäßig auf `sRGB` gesetzt ist.

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

Im zweiten SVG ist das `color-interpolation`-Attribut im `<linearGradient>`-Element enthalten und auf `linearRGB` gesetzt.

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

Im dritten SVG ist das `color-interpolation`-Attribut nicht im `<radialGradient>`-Element enthalten, was standardmäßig auf `sRGB` gesetzt ist.

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

Im vierten SVG ist das `color-interpolation`-Attribut im `<radialGradient>`-Element enthalten und auf `linearRGB` gesetzt.

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
- {{CSSXref("color-interpolation")}}
- [sRGB specification](https://webstore.iec.ch/en/publication/6169)
- {{SVGAttr("color-interpolation-filters")}}
- [Computer color is broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) - populäre Demonstration von linearRGB
