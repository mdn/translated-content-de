---
title: xChannelSelector
slug: Web/SVG/Reference/Attribute/xChannelSelector
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`xChannelSelector`**-Attribut gibt an, welcher Farbkanal von {{SVGAttr("in2")}} verwendet werden soll, um die Pixel in {{SVGAttr("in")}} entlang der x-Achse zu verschieben.

## Elemente

Sie können dieses Attribut mit dem {{SVGElement("feDisplacementMap")}} SVG-Element verwenden.

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
  - : Dieses Schlüsselwort gibt an, dass der rote Farbkanal des im {{SVGAttr("in2")}} definierten Eingabebildes verwendet wird, um die Pixel des im {{SVGAttr("in")}} definierten Eingabebildes entlang der x-Achse zu verschieben.
- `G`
  - : Dieses Schlüsselwort gibt an, dass der grüne Farbkanal des im {{SVGAttr("in2")}} definierten Eingabebildes verwendet wird, um die Pixel des im {{SVGAttr("in")}} definierten Eingabebildes entlang der x-Achse zu verschieben.
- `B`
  - : Dieses Schlüsselwort gibt an, dass der blaue Farbkanal des im {{SVGAttr("in2")}} definierten Eingabebildes verwendet wird, um die Pixel des im {{SVGAttr("in")}} definierten Eingabebildes entlang der x-Achse zu verschieben.
- `A`
  - : Dieses Schlüsselwort gibt an, dass der Alphakanal des im {{SVGAttr("in2")}} definierten Eingabebildes verwendet wird, um die Pixel des im {{SVGAttr("in")}} definierten Eingabebildes entlang der x-Achse zu verschieben.

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
