---
title: numOctaves
slug: Web/SVG/Attribute/numOctaves
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`numOctaves`** Attribut definiert die Anzahl der Oktaven für die Rauschfunktion der {{SVGElement("feTurbulence")}} Primitive.

Eine Oktave ist eine Rauschfunktion, die durch ihre Frequenz und Amplitude definiert ist. Eine Turbulenz wird aufgebaut, indem mehrere Oktaven mit steigenden Frequenzen und abnehmenden Amplituden akkumuliert werden. Je höher die Anzahl der Oktaven, desto natürlicher sieht das Rauschen aus. Dennoch erfordern mehr Oktaven auch mehr Berechnungen, was sich negativ auf die Leistung auswirkt.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
    <feTurbulence baseFrequency="0.025" numOctaves="1" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" numOctaves="3" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#noise2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Beispiel 1", "420", "200")}}

### Beispiel 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence baseFrequency="0.05" numOctaves="3" result="turbulence" />
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

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("integer")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : Definiert die Anzahl der Oktaven. Negative Werte sind verboten.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Understanding Perlin Noise](https://adrianb.io/2014/08/09/perlinnoise.html)
- {{SVGAttr("baseFrequency")}}
