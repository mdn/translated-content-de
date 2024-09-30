---
title: stitchTiles
slug: Web/SVG/Attribute/stitchTiles
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`stitchTiles`**-Attribut definiert, wie die Perlin-Rauschen-Kacheln an den Rändern verhalten.

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

  <rect x="0" y="0" width="100" height="100" style="filter: url(#noise1);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise1); transform: translate(100px, 0);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise1); transform: translate(0, 100px);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise1); transform: translate(100px, 100px);" />

  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise2); transform: translate(220px, 0);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise2); transform: translate(320px, 0);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise2); transform: translate(220px, 100px);" />
  <rect
    x="0"
    y="0"
    width="100"
    height="100"
    style="filter: url(#noise2); transform: translate(320px, 100px);" />
</svg>
```

{{EmbedLiveSample("Beispiel", "420", "220")}}

## Anwendungshinweise

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
  - : Dieser Wert gibt an, dass kein Versuch unternommen wird, glatte Übergänge an den Rändern der Kacheln zu erreichen, die eine Turbulenzfunktion enthalten. Manchmal zeigen die Ergebnisse deutliche Diskontinuitäten an den Kachelrändern.
- `stitch`
  - : Dieser Wert gibt an, dass der Benutzeragent die x- und y-Werte der Basisfrequenz automatisch anpasst, sodass die Breite und Höhe des {{SVGElement("feTurbulence")}}-Knotens (d.h. die Breite und Höhe der aktuellen Subregion) eine ganzzahlige Anzahl der Kachelbreite und -höhe für die erste Oktave enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
