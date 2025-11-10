---
title: diffuseConstant
slug: Web/SVG/Reference/Attribute/diffuseConstant
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`diffuseConstant`** Attribut repräsentiert den k<sub>d</sub>-Wert im [Phong-Beleuchtungsmodell](https://en.wikipedia.org/wiki/Phong_reflection_model). In SVG kann dies jede nicht-negative Zahl sein.

Es wird verwendet, um den endgültigen RGB-Wert eines bestimmten Pixels zu bestimmen. Je heller die Beleuchtungsfarbe, desto kleiner sollte dieser Wert sein.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feDiffuseLighting")}}

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
    <feDiffuseLighting in="SourceGraphic" diffuseConstant="1">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
  </filter>
  <filter id="diffuseLighting2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting in="SourceGraphic" diffuseConstant="2">
      <fePointLight x="60" y="60" z="20" />
    </feDiffuseLighting>
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

{{EmbedLiveSample("Example", "420", "200")}}

## Verwendungshinweise

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beschreibung des Phong-Reflexionsmodells auf Wikipedia](https://en.wikipedia.org/wiki/Phong_reflection_model)
