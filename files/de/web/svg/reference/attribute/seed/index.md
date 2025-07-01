---
title: seed
slug: Web/SVG/Reference/Attribute/seed
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`seed`**-Attribut repräsentiert die Startzahl für den Pseudo-Zufallszahlengenerator der {{SVGElement("feTurbulence")}}-Filterprimitive.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feTurbulence")}}

## Beispiel

### Beispiel 1

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
    <feTurbulence baseFrequency="0.025" seed="0" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" seed="100" />
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#noise1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#noise2)" />
</svg>
```

{{EmbedLiveSample("Example 1", "220", "220")}}

### Beispiel 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence baseFrequency="0.05" seed="1000" result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Example 2", "220", "250")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
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
