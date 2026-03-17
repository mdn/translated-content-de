---
title: z
slug: Web/SVG/Reference/Attribute/z
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Das **`z`**-Attribut definiert die Position entlang der z-Achse für eine Lichtquelle im Koordinatensystem, das durch das {{SVGAttr("primitiveUnits")}}-Attribut auf dem {{SVGElement("filter")}}-Element festgelegt ist, unter der Annahme, dass in diesem ursprünglichen Koordinatensystem die positive z-Achse auf die Person zugeht, die den Inhalt betrachtet, und dass eine Einheit entlang der z-Achse einer Einheit in x- und y-Richtung entspricht.

## Elemente

Sie können dieses Attribut mit den SVG-Elementen verwenden, die in den folgenden Abschnitten beschrieben werden.

### `<fePointLight>`

Für {{SVGElement("fePointLight")}} definiert `z` die Position entlang der z-Achse für die Lichtquelle im Koordinatensystem, das durch das {{SVGAttr("primitiveUnits")}}-Attribut auf dem {{SVGElement("filter")}}-Element festgelegt ist.

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

Für {{SVGElement("feSpotLight")}} definiert `z` die Position entlang der z-Achse für die Lichtquelle im Koordinatensystem, das durch das {{SVGAttr("primitiveUnits")}}-Attribut auf dem {{SVGElement("filter")}}-Element festgelegt ist.

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
