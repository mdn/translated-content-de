---
title: lengthAdjust
slug: Web/SVG/Reference/Attribute/lengthAdjust
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das `lengthAdjust`-Attribut steuert, wie der Text in die durch das Attribut {{SVGAttr("textLength")}} definierte Länge gestreckt wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
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

## Verwendungshinweise

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
