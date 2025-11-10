---
title: elevation
slug: Web/SVG/Reference/Attribute/elevation
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`elevation`**-Attribut gibt den Winkel der Richtung für die Lichtquelle von der XY-Ebene zur Z-Achse in Grad an. Beachten Sie, dass die positive Z-Achse in Richtung des Betrachters des Inhalts zeigt.

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
      <feDistantLight elevation="0" />
    </feDiffuseLighting>
  </filter>
  <filter id="distantLight2">
    <feDiffuseLighting>
      <feDistantLight elevation="45" />
    </feDiffuseLighting>
  </filter>

  <circle cx="100" cy="100" r="80" filter="url(#distantLight1)" />
  <circle cx="340" cy="100" r="80" filter="url(#distantLight2)" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Anwendungshinweise

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
