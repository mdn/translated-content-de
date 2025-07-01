---
title: stitchTiles
slug: Web/SVG/Reference/Attribute/stitchTiles
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`stitchTiles`**-Attribut definiert, wie sich die Perlin-Noise-Kacheln am Rand verhalten.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feTurbulence")}}

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
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" stitchTiles="noStitch" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" stitchTiles="stitch" />
  </filter>

  <rect x="0" y="0" width="100" height="100" filter="url(#noise1)" />
  <rect x="100" y="0" width="100" height="100" filter="url(#noise1)" />
  <rect x="0" y="100" width="100" height="100" filter="url(#noise1)" />
  <rect x="100" y="100" width="100" height="100" filter="url(#noise1)" />

  <rect x="220" y="0" width="100" height="100" filter="url(#noise2)" />
  <rect x="320" y="0" width="100" height="100" filter="url(#noise2)" />
  <rect x="220" y="100" width="100" height="100" filter="url(#noise2)" />
  <rect x="320" y="100" width="100" height="100" filter="url(#noise2)" />
</svg>
```

{{EmbedLiveSample("Beispiel", "420", "220")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>noStitch</code> | <code>stitch</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>noStitch</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `noStitch`
  - : Dieser Wert zeigt an, dass kein Versuch unternommen wird, um glatte Übergänge an den Rändern der Kacheln, die eine Turbulenzfunktion enthalten, zu erreichen. Manchmal zeigt das Ergebnis deutliche Diskontinuitäten an den Kachelrändern.
- `stitch`
  - : Dieser Wert zeigt an, dass der Benutzeragent die x- und y-Werte der Basisfrequenz automatisch so anpasst, dass die Breite und Höhe des {{SVGElement("feTurbulence")}}-Knotens (d.h. die Breite und Höhe der aktuellen Subregion) eine ganze Zahl der Kachelbreite und -höhe für die erste Oktave enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
