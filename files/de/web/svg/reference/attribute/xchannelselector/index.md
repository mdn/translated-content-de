---
title: xChannelSelector
slug: Web/SVG/Reference/Attribute/xChannelSelector
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`xChannelSelector`** gibt an, welcher Farbkanal aus {{SVGAttr("in2")}} verwendet wird, um die Pixel in {{SVGAttr("in")}} entlang der x-Achse zu verschieben.

## Elemente

Sie können dieses Attribut mit dem SVG-Element {{SVGElement("feDisplacementMap")}} verwenden.

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feImage
      href="mdn.svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      result="abc" />
    <feDisplacementMap
      in2="abc"
      in="SourceGraphic"
      scale="30"
      xChannelSelector="R" />
  </filter>
  <filter id="displacementFilter2">
    <feImage
      href="mdn.svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      result="abc" />
    <feDisplacementMap
      in2="abc"
      in="SourceGraphic"
      scale="30"
      xChannelSelector="B" />
  </filter>

  <text x="10" y="60" font-size="50" filter="url(#displacementFilter)">
    Some displaced text
  </text>
  <text x="10" y="120" font-size="50" filter="url(#displacementFilter2)">
    Some displaced text
  </text>
</svg>
```

{{EmbedLiveSample("Examples", "480", "200")}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>R</code> | <code>G</code> | <code>B</code> | <code>A</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>A</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `R`
  - : Dieses Schlüsselwort legt fest, dass der rote Farbkanal des durch {{SVGAttr("in2")}} definierten Eingabebilds verwendet wird, um die Pixel des durch {{SVGAttr("in")}} definierten Eingabebilds entlang der x-Achse zu verschieben.
- `G`
  - : Dieses Schlüsselwort legt fest, dass der grüne Farbkanal des durch {{SVGAttr("in2")}} definierten Eingabebilds verwendet wird, um die Pixel des durch {{SVGAttr("in")}} definierten Eingabebilds entlang der x-Achse zu verschieben.
- `B`
  - : Dieses Schlüsselwort legt fest, dass der blaue Farbkanal des durch {{SVGAttr("in2")}} definierten Eingabebilds verwendet wird, um die Pixel des durch {{SVGAttr("in")}} definierten Eingabebilds entlang der x-Achse zu verschieben.
- `A`
  - : Dieses Schlüsselwort legt fest, dass der Alphakanal des durch {{SVGAttr("in2")}} definierten Eingabebilds verwendet wird, um die Pixel des durch {{SVGAttr("in")}} definierten Eingabebilds entlang der x-Achse zu verschieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
