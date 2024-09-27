---
title: color-interpolation
slug: Web/SVG/Attribute/color-interpolation
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{SVGRef}}

Das **`color-interpolation`**-Attribut gibt den Farbraum für Farbverläufe, Farbanimationen und Alphakompositionen an.

> [!NOTE]
> Für Filtereffekte steuert die Eigenschaft {{SVGAttr("color-interpolation-filters")}}, welcher Farbraum verwendet wird.

Die Eigenschaft `color-interpolation` bestimmt, ob Farboperationen im sRGB-Farbraum oder in einem (lichtenergetisch linearen) linearisierten RGB-Farbraum stattfinden. Nachdem der geeignete Farbraum ausgewählt wurde, wird eine komponentenweise lineare Interpolation verwendet.

Wenn ein Kindelement in einen Hintergrund überblendet wird, bestimmt der Wert der `color-interpolation`-Eigenschaft des Kindelements den Mischtyp, nicht der Wert der `color-interpolation` des Elternelements. Für Farbverläufe, die das {{SVGAttr("href")}} oder das veraltete {{SVGAttr("xlink:href")}}-Attribut verwenden, um auf einen anderen Farbverlauf zu verweisen, verwendet der Farbverlauf den Eigenschaftswert des Farbverlaufselements, das direkt durch die Eigenschaft {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} referenziert wird. Bei der Animation von Farben erfolgt die Farbinterpolation gemäß dem Wert der `color-interpolation`-Eigenschaft des animierten Elements.

> [!NOTE]
> Als Präsentationseigenschaft kann {{CSSXref("color-interpolation")}} als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Gibt an, dass der Benutzeragent entweder die `sRGB`- oder `linearRGB`-Farbräume zur Farbinterpolation wählen kann. Diese Option weist darauf hin, dass der Autor nicht erfordert, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Beispiel

Dieses Beispiel zeigt vier SVGs, jedes mit einem {{SVGElement("rect")}}-Element und einem anderen Farbverlauf, der als Füllung für das `<rect>` verwendet wird. Die ersten beiden SVGs verwenden {{SVGElement("linearGradient")}} und die zweiten beiden verwenden {{SVGElement("radialGradient")}}-Elemente. In nicht unterstützten Browsern sieht der Farbverlauf gleich aus.

In diesem ersten SVG ist das `color-interpolation`-Attribut nicht im `<linearGradient>`-Element enthalten, was standardmäßig auf `sRGB` zurückfällt.

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

In diesem zweiten SVG ist das `color-interpolation`-Attribut im `<linearGradient>`-Element enthalten und auf `linearRGB` gesetzt.

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

In diesem dritten SVG ist das `color-interpolation`-Attribut nicht im `<radialGradient>`-Element enthalten, was standardmäßig auf `sRGB` zurückfällt.

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

In diesem vierten SVG ist das `color-interpolation`-Attribut im `<radialGradient>`-Element enthalten und auf `linearRGB` gesetzt.

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
