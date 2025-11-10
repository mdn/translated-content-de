---
title: specularExponent
slug: Web/SVG/Reference/Attribute/specularExponent
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`specularExponent`** Attribut steuert den Fokus für die Lichtquelle. Je größer der Wert, desto heller das Licht.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feSpecularLighting")}}
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
  <filter id="diffuseLighting1" x="0" y="0" width="100%" height="100%">
    <feSpecularLighting in="SourceGraphic" specularExponent="1">
      <fePointLight x="60" y="60" z="20" />
    </feSpecularLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feSpecularLighting in="SourceGraphic" specularExponent="5">
      <fePointLight x="60" y="60" z="20" />
    </feSpecularLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#diffuseLighting1)" />
  <rect
    x="220"
    y="0"
    width="200"
    height="200"
    filter="url(#diffuseLighting2)" />
</svg>
```

{{EmbedLiveSample("Beispiel", "420", "200")}}

## feSpecularLighting

Für {{SVGElement("feSpecularLighting")}} definiert `specularExponent` den Exponentenwert für den spekulären Term.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
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

## feSpotLight

Für {{SVGElement("feSpotLight")}} definiert `specularExponent` den Exponentenwert, der den Fokus für die Lichtquelle steuert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>{{cssxref("number")}}</td>
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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Beschreibung des Phong-Reflexionsmodells auf Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
