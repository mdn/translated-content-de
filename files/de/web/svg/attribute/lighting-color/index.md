---
title: lighting-color
slug: Web/SVG/Attribute/lighting-color
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`lighting-color`**-Attribut definiert die Farbe der Lichtquelle für Beleuchtungs-Filter-Primitives.

> [!NOTE]
> Als Präsentationsattribut hat `lighting-color` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("lighting-color")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

{{EmbedLiveSample("Example", "420", "200")}}

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
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("lighting-color")}}-Eigenschaft
- [Beschreibung des Phong-Reflexionsmodells auf Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
