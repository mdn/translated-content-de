---
title: color-interpolation
slug: Web/CSS/color-interpolation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die `color-interpolation` CSS-Eigenschaft wird in SVG verwendet, um festzulegen, welcher Farbraum für {{SVGElement("linearGradient")}} und {{SVGElement("radialGradient")}} SVG-Elemente verwendet werden soll.

## Syntax

```css
/* Keyword values */
color-interpolation: auto;
color-interpolation: sRGB;
color-interpolation: linearRGB;
```

### Werte

- `auto`
  - : Gibt an, dass der Benutzeragent entweder die Farbräume `sRGB` oder `linearRGB` für die Farbmischung wählen kann. Diese Option zeigt an, dass der Autor nicht erfordert, dass die Farbmischung in einem bestimmten Farbraum stattfindet.
- `sRGB`
  - : Gibt an, dass die Farbmischung im sRGB-Farbraum erfolgen soll.
    Dies ist der voreingestellte Anfangswert, wenn keine `color-interpolation` Eigenschaft festgelegt ist.
- `linearRGB`
  - : Gibt an, dass die Farbmischung im linearisierten RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Formale Definition

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Anwendbar auf</th>
      <td>{{SVGElement("linearGradient")}} und {{SVGElement("radialGradient")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

## Formale Syntax

{{csssyntax}}

## Beispiel

Im ersten SVG ist die `color-interpolation` Eigenschaft nicht im `<linearGradient>` Element enthalten, und die Farbmischung erfolgt standardmäßig im `sRGB`. Das zweite Beispiel zeigt die Farbmischung mit dem `linearRGB` Wert.

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
