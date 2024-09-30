---
title: azimuth
slug: Web/SVG/Attribute/azimuth
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`azimuth`**-Attribut gibt den Richtungswinkel für die Lichtquelle auf der XY-Ebene (im Uhrzeigersinn) in Grad von der x-Achse an.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feDistantLight")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="distantLight1">
    <feDiffuseLighting>
      <feDistantLight azimuth="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="distantLight2">
    <feDiffuseLighting>
      <feDistantLight azimuth="240" />
    </feDiffuseLighting>
  </filter>

  <circle cx="100" cy="100" r="80" style="filter: url(#distantLight1);" />
  <circle
    cx="100"
    cy="100"
    r="80"
    style="filter: url(#distantLight2); transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td>0</td>
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
