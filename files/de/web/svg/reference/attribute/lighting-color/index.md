---
title: lighting-color
slug: Web/SVG/Reference/Attribute/lighting-color
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das Attribut **`lighting-color`** definiert die Farbe der Lichtquelle für Beleuchtungsfilter-Primitiven.

> [!NOTE]
> Als Präsentationsattribut hat `lighting-color` auch ein entsprechendes CSS-Property: {{cssxref("lighting-color")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

  <rect x="0" y="0" width="200" height="200" filter="url(#diffuseLighting1)" />
  <rect
    x="220"
    y="0"
    width="200"
    height="200"
    filter="url(#diffuseLighting2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Anwendungshinweise

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

- CSS-Attribut {{cssxref("lighting-color")}}
- [Beschreibung des Phong-Beleuchtungsmodells auf Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
