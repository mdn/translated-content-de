---
title: xChannelSelector
slug: Web/SVG/Attribute/xChannelSelector
l10n:
  sourceCommit: 00252e3d53b06d0d517a093ba5a3f53335dbc0d8
---

{{SVGRef}}

Das **`xChannelSelector`**-Attribut gibt an, welcher Farbkanal von {{SVGAttr("in2")}} verwendet werden soll, um die Pixel in {{SVGAttr("in")}} entlang der x-Achse zu verschieben.

## Elemente

Sie können dieses Attribut mit dem SVG-Element {{SVGElement("feDisplacementMap")}} verwenden.

## Nutzungshinweise

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
  - : Dieses Schlüsselwort gibt an, dass der rote Farbkanal des Eingabebildes, das in {{SVGAttr("in2")}} definiert ist, verwendet wird, um die Pixel des Eingabebildes, das in {{SVGAttr("in")}} definiert ist, entlang der x-Achse zu verschieben.
- `G`
  - : Dieses Schlüsselwort gibt an, dass der grüne Farbkanal des Eingabebildes, das in {{SVGAttr("in2")}} definiert ist, verwendet wird, um die Pixel des Eingabebildes, das in {{SVGAttr("in")}} definiert ist, entlang der x-Achse zu verschieben.
- `B`
  - : Dieses Schlüsselwort gibt an, dass der blaue Farbkanal des Eingabebildes, das in {{SVGAttr("in2")}} definiert ist, verwendet wird, um die Pixel des Eingabebildes, das in {{SVGAttr("in")}} definiert ist, entlang der x-Achse zu verschieben.
- `A`
  - : Dieses Schlüsselwort gibt an, dass der Alpha-Kanal des Eingabebildes, das in {{SVGAttr("in2")}} definiert ist, verwendet wird, um die Pixel des Eingabebildes, das in {{SVGAttr("in")}} definiert ist, entlang der x-Achse zu verschieben.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
