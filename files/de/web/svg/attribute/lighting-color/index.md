---
title: lighting-color
slug: Web/SVG/Attribute/lighting-color
l10n:
  sourceCommit: cd840e78b6027a391fe1f11b745564cf3ebfb8e7
---

{{SVGRef}}

Das Attribut **`lighting-color`** definiert die Farbe der Lichtquelle für Lichtfilter-Primitiven.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feSpecularLighting")}}

## Beispiel

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
    <feDiffuseLighting in="SourceGraphic" lighting-color="white">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" lighting-color="blue">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#diffuseLighting1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#diffuseLighting2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Beispiel", "420", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("color")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>white</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beschreibung des Phong-Reflektionsmodells auf Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
