---
title: color-interpolation
slug: Web/SVG/Attribute/color-interpolation
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{SVGRef}}

Das **`color-interpolation`** Attribut gibt den Farbraum für Farbverlaufs-Interpolationen, Farbanimationen und Alpha-Zusammensetzung an.

> [!NOTE]
> Für Filtereffekte steuert die Eigenschaft {{SVGAttr("color-interpolation-filters")}}, welcher Farbraum verwendet wird.

Die `color-interpolation` Eigenschaft wählt, ob Farboperationen im sRGB-Farbraum oder im (lichtenergie-linearen) linearen RGB-Farbraum erfolgen. Nachdem der geeignete Farbraum ausgewählt ist, wird eine komponentenweise lineare Interpolation verwendet.

Wenn ein Kindelement in einen Hintergrund eingeblendet wird, bestimmt der Wert der `color-interpolation` Eigenschaft auf dem Kindelement den Blendtyp, nicht der Wert der `color-interpolation` beim Elternelement. Für Farbverläufe, die das {{SVGAttr("href")}} oder das veraltete {{SVGAttr("xlink:href")}} Attribut verwenden, um auf einen anderen Farbverlauf zu verweisen, verwendet der Farbverlauf den Eigenschaftswert des Farbverlaufselements, das direkt durch die {{SVGAttr("fill")}} oder {{SVGAttr("stroke")}} Eigenschaft referenziert wird. Bei der Animation von Farben erfolgt die Farbinterpolation gemäß dem Wert der `color-interpolation` Eigenschaft auf dem animierten Element.

> [!NOTE]
> Als Präsentationsattribut kann {{CSSXref("color-interpolation")}} als CSS-Eigenschaft verwendet werden.

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
  - : Bezeichnet, dass der Benutzeragent entweder die `sRGB`- oder `linearRGB`-Farbräume für die Farbinterpolation wählen kann. Diese Option zeigt an, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Beispiel

Dieses Beispiel zeigt vier SVGs, jedes mit einem {{SVGElement("rect")}} Element und einem unterschiedlichen Farbverlauf, der als Füllung für das `<rect>` verwendet wird. Die ersten beiden SVGs verwenden {{SVGElement("linearGradient")}} und die zweiten beiden verwenden {{SVGElement("radialGradient")}} Elemente. In nicht unterstützten Browsern sieht der Verlauf gleich aus.

Im ersten SVG ist das `color-interpolation` Attribut nicht im `<linearGradient>` Element enthalten, es wird also `sRGB` als Standardwert verwendet.

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

Im zweiten SVG ist das `color-interpolation` Attribut im `<linearGradient>` Element enthalten und auf `linearRGB` gesetzt.

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

Im dritten SVG ist das `color-interpolation` Attribut nicht im `<radialGradient>` Element enthalten, es wird also `sRGB` als Standardwert verwendet.

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

Im vierten SVG ist das `color-interpolation` Attribut im `<radialGradient>` Element enthalten und auf `linearRGB` gesetzt.

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
- [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169)
- {{SVGAttr("color-interpolation-filters")}}
- [Computer color is broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) - populäre Demonstration von linearRGB
