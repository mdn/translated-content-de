---
title: color-interpolation
slug: Web/SVG/Reference/Attribute/color-interpolation
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`color-interpolation`** Attribut spezifiziert den Farbraum für Farbverlaufsinterpolationen, Farbanimationen und Alphakomposition.

> [!NOTE]
> Für Filtereffekte kontrolliert die {{SVGAttr("color-interpolation-filters")}} Eigenschaft, welcher Farbraum verwendet wird.

Die `color-interpolation` Eigenschaft wählt, ob Farboperationen im sRGB-Farbraum oder in einem (lichtenergetisch linearen) linearen RGB-Farbraum erfolgen. Nachdem der passende Farbraum gewählt wurde, wird eine komponentenweise lineare Interpolation verwendet.

Wenn ein Kindelement in einen Hintergrund integriert wird, bestimmt der Wert der `color-interpolation` Eigenschaft des Kindelements die Art der Mischung, nicht der Wert der `color-interpolation` Eigenschaft des Elternteils. Bei Farbverläufen, die das {{SVGAttr("href")}} Attribut oder das veraltete {{SVGAttr("xlink:href")}} Attribut verwenden, um auf einen anderen Verlauf zu verweisen, verwendet der Farbverlauf den Eigenschaftswert von dem Verlaufselement, das direkt durch die {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} Eigenschaft referenziert wird. Bei der Animation von Farben wird die Farbinteprolation gemäß dem Wert der `color-interpolation` Eigenschaft des animierten Elements durchgeführt.

> [!NOTE]
> Als Präsentationsattribut hat `color-interpolation` auch ein entsprechendes CSS-Attribut: {{cssxref("color-interpolation")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Nutzungshinweise

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
  - : Zeigt an, dass der Benutzeragent entweder die `sRGB` oder `linearRGB` Räume für die Farbinterpolation wählen kann. Diese Option zeigt an, dass der Autor nicht erfordert, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Beispiel

Dieses Beispiel zeigt vier SVGs, jedes mit einem {{SVGElement("rect")}} Element und einem unterschiedlichen Farbverlauf als Füllung für das `<rect>`. Die ersten beiden SVGs verwenden {{SVGElement("linearGradient")}} und die zweiten beiden verwenden {{SVGElement("radialGradient")}} Elemente. In nicht unterstützten Browsern sieht der Farbverlauf gleich aus.

In diesem ersten SVG ist das `color-interpolation` Attribut auf dem `<linearGradient>` Element nicht eingeschlossen, was standardmäßig auf `sRGB` gesetzt ist.

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

In diesem zweiten SVG ist das `color-interpolation` Attribut auf dem `<linearGradient>` Element eingeschlossen und auf `linearRGB` gesetzt.

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

In diesem dritten SVG ist das `color-interpolation` Attribut auf dem `<radialGradient>` Element nicht eingeschlossen, was standardmäßig auf `sRGB` gesetzt ist.

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

In diesem vierten SVG ist das `color-interpolation` Attribut auf dem `<radialGradient>` Element eingeschlossen und auf `linearRGB` gesetzt.

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

{{EmbedLiveSample("Beispiel", "100%", "280")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
- CSS {{cssxref("color-interpolation")}} Eigenschaft
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
- {{SVGAttr("color-interpolation-filters")}}
- [Computer color is broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) - populäre Demonstration von linearRGB
