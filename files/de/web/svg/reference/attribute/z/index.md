---
title: z
slug: Web/SVG/Reference/Attribute/z
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`z`**-Attribut definiert die Position entlang der z-Achse für eine Lichtquelle im Koordinatensystem, das durch das {{SVGAttr("primitiveUnits")}}-Attribut auf dem {{SVGElement("filter")}}-Element festgelegt wird. Es wird angenommen, dass in diesem anfänglichen Koordinatensystem die positive z-Achse zur betrachtenden Person hin herausragt und dass eine Einheit entlang der z-Achse einer Einheit in x und y entspricht.

## Elemente

Sie können dieses Attribut mit den in den folgenden Abschnitten beschriebenen SVG-Elementen verwenden.

### `<fePointLight>`

Für {{SVGElement("fePointLight")}} definiert `z` die Position entlang der z-Achse für die Lichtquelle im Koordinatensystem, das durch das {{SVGAttr("primitiveUnits")}}-Attribut auf dem {{SVGElement("filter")}}-Element festgelegt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### `<feSpotLight>`

Für {{SVGElement("feSpotLight")}} definiert `z` die Position entlang der z-Achse für die Lichtquelle im Koordinatensystem, das durch das {{SVGAttr("primitiveUnits")}}-Attribut auf dem {{SVGElement("filter")}}-Element festgelegt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="diffuseLighting1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <fePointLight x="60" y="60" z="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <fePointLight x="340" y="60" z="50" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#diffuseLighting1)" />
  <rect
    x="200"
    y="0"
    width="200"
    height="200"
    filter="url(#diffuseLighting2)" />
</svg>
```

{{EmbedLiveSample("Examples", "420", "200")}}

## Spezifikationen

{{Specifications}}
