---
title: color-interpolation
slug: Web/SVG/Attribute/color-interpolation
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`color-interpolation`**-Attribut legt den Farbraum für Farbverlaufsinterpolationen, Farbanimationen und Alphazusammenführungen fest.

> [!NOTE]
> Für Filtereffekte steuert die Eigenschaft {{SVGAttr("color-interpolation-filters")}}, welcher Farbraum verwendet wird.

Die `color-interpolation`-Eigenschaft wählt, ob Farbberechnungen im sRGB-Farbraum oder in einem linearisierten RGB-Farbraum (linear in Bezug auf die Lichtenergie) erfolgen. Nachdem der passende Farbraum ausgewählt wurde, wird eine komponentenweise lineare Interpolation durchgeführt.

Wenn ein Kindelement in einen Hintergrund gemischt wird, bestimmt der Wert der `color-interpolation`-Eigenschaft des Kindelements die Art der Mischung, nicht der Wert der `color-interpolation`-Eigenschaft des Elternelements. Bei Farbverläufen, die das {{SVGAttr("href")}}- oder das veraltete {{SVGAttr("xlink:href")}}-Attribut verwenden, um auf einen anderen Verlauf zu verweisen, verwendet der Verlauf den Eigenschaftswert des Gradientelements, das direkt von der {{SVGAttr("fill")}}- oder {{SVGAttr("stroke")}}-Eigenschaft referenziert wird. Beim Animieren von Farben wird die Farbinterpolation entsprechend dem Wert der `color-interpolation`-Eigenschaft des animierten Elements ausgeführt.

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

## Hinweise zur Verwendung

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
  - : Gibt an, dass der Benutzeragent entweder den `sRGB`- oder den `linearRGB`-Farbraum für die Farbinterpolation wählen kann. Diese Option gibt an, dass der Autor nicht vorschreibt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgen muss.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Beispiel

Dieses Beispiel zeigt vier SVGs, jedes mit einem {{SVGElement("rect")}}-Element und einem unterschiedlichen Farbverlauf, der als Füllung für das `<rect>` verwendet wird. Die ersten beiden SVGs verwenden {{SVGElement("linearGradient")}}, und die zweiten beiden verwenden {{SVGElement("radialGradient")}}. In nicht unterstützten Browsern sieht der Farbverlauf gleich aus.

Im ersten SVG ist das `color-interpolation`-Attribut nicht im `<linearGradient>`-Element enthalten und hat daher den Standardwert `sRGB`.

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

Im dritten SVG ist das `color-interpolation`-Attribut nicht im `<radialGradient>`-Element enthalten und hat daher den Standardwert `sRGB`.

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
- CSS {{cssxref("color-interpolation")}}-Eigenschaft
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
- {{SVGAttr("color-interpolation-filters")}}
- [Computer color is broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) - populäre Darstellung von linearRGB
