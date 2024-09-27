---
title: seed
slug: Web/SVG/Attribute/seed
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`seed`**-Attribut repräsentiert die Startnummer für den Pseudozufallszahlengenerator der {{SVGElement("feTurbulence")}}-Filterprimitive.

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

  <rect x="0" y="0" width="200" height="200" style="filter:url(#noise1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter:url(#noise2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Beispiel 1", "220", "220")}}

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

  <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("Beispiel 2", "220", "250")}}

## Anwendungshinweise

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
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
