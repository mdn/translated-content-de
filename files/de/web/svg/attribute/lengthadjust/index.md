---
title: lengthAdjust
slug: Web/SVG/Attribute/lengthAdjust
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das `lengthAdjust`-Attribut steuert, wie der Text in die durch das {{SVGAttr("textLength")}}-Attribut definierte Länge gestreckt wird.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <g font-face="sans-serif">
    <text x="0" y="20" textLength="300" lengthAdjust="spacing">
      Stretched using spacing only.
    </text>
    <text x="0" y="50" textLength="300" lengthAdjust="spacingAndGlyphs">
      Stretched using spacing and glyphs.
    </text>
    <text x="0" y="80" textLength="100" lengthAdjust="spacing">
      Shrunk using spacing only.
    </text>
    <text x="0" y="110" textLength="100" lengthAdjust="spacingAndGlyphs">
      Shrunk using spacing and glyphs.
    </text>
  </g>
</svg>
```

{{EmbedLiveSample("Example", "420", "150")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>spacing</code> | <code>spacingAndGlyphs</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>spacing</code></td>
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
