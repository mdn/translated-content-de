---
title: yChannelSelector
slug: Web/SVG/Reference/Attribute/yChannelSelector
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`yChannelSelector`** gibt an, welcher Farbkanal aus {{SVGAttr("in2")}} verwendet wird, um die Pixel in {{SVGAttr("in")}} entlang der y-Achse zu verschieben.

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
      yChannelSelector="R" />
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
      yChannelSelector="B" />
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

## Verwendungshinweise

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
  - : Dieses Schlüsselwort gibt an, dass der rote Farbkanal des in {{SVGAttr("in2")}} angegebenen Eingabebilds verwendet wird, um die Pixel des in {{SVGAttr("in")}} angegebenen Eingabebilds entlang der y-Achse zu verschieben.
- `G`
  - : Dieses Schlüsselwort gibt an, dass der grüne Farbkanal des in {{SVGAttr("in2")}} angegebenen Eingabebilds verwendet wird, um die Pixel des in {{SVGAttr("in")}} angegebenen Eingabebilds entlang der y-Achse zu verschieben.
- `B`
  - : Dieses Schlüsselwort gibt an, dass der blaue Farbkanal des in {{SVGAttr("in2")}} angegebenen Eingabebilds verwendet wird, um die Pixel des in {{SVGAttr("in")}} angegebenen Eingabebilds entlang der y-Achse zu verschieben.
- `A`
  - : Dieses Schlüsselwort gibt an, dass der Alphakanal des in {{SVGAttr("in2")}} angegebenen Eingabebilds verwendet wird, um die Pixel des in {{SVGAttr("in")}} angegebenen Eingabebilds entlang der y-Achse zu verschieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
