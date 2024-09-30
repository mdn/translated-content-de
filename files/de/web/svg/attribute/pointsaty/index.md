---
title: pointsAtY
slug: Web/SVG/Attribute/pointsAtY
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`pointsAtY`**-Attribut gibt die y-Position im Koordinatensystem an, das durch das Attribut {{SVGAttr("primitiveUnits")}} auf dem {{SVGElement("filter")}}-Element festgelegt wird, an dem die Lichtquelle ausgerichtet ist.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feSpotLight")}}

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
  <filter id="lighting1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="60" y="60" z="50" pointsAtY="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="lighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="60" y="60" z="50" pointsAtY="400" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#lighting1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#lighting2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Beispiel", "220", "220")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
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
