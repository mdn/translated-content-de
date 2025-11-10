---
title: pointsAtX
slug: Web/SVG/Reference/Attribute/pointsAtX
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`pointsAtX`**-Attribut repräsentiert die x-Position im Koordinatensystem, welches durch das Attribut {{SVGAttr("primitiveUnits")}} auf dem {{SVGElement("filter")}}-Element festgelegt wird, an dem der Lichtpunkt ausgerichtet ist.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
      <feSpotLight x="60" y="60" z="50" pointsAtX="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="lighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic">
      <feSpotLight x="60" y="60" z="50" pointsAtX="400" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#lighting1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#lighting2)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Anwendungshinweise

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
