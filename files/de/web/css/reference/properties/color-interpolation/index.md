---
title: "`color-interpolation` CSS property"
short-title: color-interpolation
slug: Web/CSS/Reference/Properties/color-interpolation
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die `color-interpolation` CSS-Eigenschaft wird in SVG verwendet, um anzugeben, welcher Farbraum für die {{SVGElement("linearGradient")}} und {{SVGElement("radialGradient")}} SVG-Elemente verwendet werden soll.

## Syntax

```css
/* Keyword values */
color-interpolation: auto;
color-interpolation: sRGB;
color-interpolation: linearRGB;
```

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwörter angegeben:

- `auto`
  - : Gibt an, dass der Benutzeragent entweder den `sRGB`- oder `linearRGB`-Raum für die Farbinterpolation wählen kann. Diese Option zeigt an, dass der Autor nicht verlangt, dass die Farbinterpolation in einem bestimmten Farbraum erfolgt.
- `sRGB`
  - : Gibt an, dass die Farbinterpolation im sRGB-Farbraum erfolgen soll. Dies ist der Standardwert, wenn keine `color-interpolation`-Eigenschaft gesetzt ist.
- `linearRGB`
  - : Gibt an, dass die Farbinterpolation im linearen RGB-Farbraum erfolgen soll, wie in der [sRGB-Spezifikation](https://webstore.iec.ch/en/publication/6169) beschrieben.

## Formale Definition

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">Gilt für</th>
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

Im ersten SVG ist die `color-interpolation`-Eigenschaft nicht im `<linearGradient>`-Element enthalten und die Farbinterpolation erfolgt standardmäßig im `sRGB`-Raum. Das zweite Beispiel zeigt die Farbinterpolation mit dem Wert `linearRGB`.

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

{{EmbedLiveSample("Beispiel", "100%", "140")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
- SVG-{{SVGAttr("color-interpolation")}}-Attribut
