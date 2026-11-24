---
title: "`color-interpolation` CSS property"
short-title: color-interpolation
slug: Web/CSS/Reference/Properties/color-interpolation
l10n:
  sourceCommit: 3015b5592d84953a24676609c58bb756caea504f
---

Die CSS-Eigenschaft `color-interpolation` wird in SVG verwendet, um festzulegen, welcher Farbraum für die SVG-Elemente {{SVGElement("linearGradient")}} und {{SVGElement("radialGradient")}} verwendet wird.

## Syntax

```css
/* Keyword values */
color-interpolation: auto;
color-interpolation: sRGB;
color-interpolation: linearRGB;
```

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Gibt an, dass der User Agent für die Farbinterpolation entweder den Farbraum `sRGB` oder `linearRGB` wählen kann. Diese Option bedeutet, dass keine Farbinterpolation in einem bestimmten Farbraum erforderlich ist.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll.
    Wenn keine `color-interpolation`-Eigenschaft festgelegt ist, gilt dieser Anfangswert.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

Im ersten SVG ist die Eigenschaft `color-interpolation` nicht für das Element `<linearGradient>` festgelegt. Daher wird für die Farbinterpolation standardmäßig `sRGB` verwendet.
Das zweite Beispiel zeigt die Farbinterpolation mit dem Wert `linearRGB`.

```html
<svg width="450" height="70">
  <title>Example of using the color-interpolation CSS Property</title>
  <defs>
    <linearGradient id="sRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="400" height="40" fill="url(#sRGB)" stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    no color-interpolation (CSS property)
  </text>
</svg>
```

```html
<svg width="450" height="70">
  <title>Example of using the color-interpolation CSS Property</title>
  <defs>
    <linearGradient id="linearRGB">
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
    fill="url(#linearRGB)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation: linearRGB; (CSS property)
  </text>
</svg>
```

```css
svg {
  display: block;
}

#linearRGB {
  color-interpolation: linearRGB;
}
```

{{EmbedLiveSample("Example", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
- SVG-Attribut {{SVGAttr("color-interpolation")}}
