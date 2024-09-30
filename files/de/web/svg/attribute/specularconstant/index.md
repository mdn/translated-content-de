---
title: specularConstant
slug: Web/SVG/Attribute/specularConstant
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das Attribut **`specularConstant`** steuert das Verhältnis der Reflexion der spekulären Beleuchtung. Es repräsentiert den k<sub>s</sub>-Wert im [Phong-Beleuchtungsmodell](https://en.wikipedia.org/wiki/Phong_reflection_model). Je größer der Wert, desto stärker die Reflexion.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feSpecularLighting")}}

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
  <filter id="specularLighting1" x="0" y="0" width="100%" height="100%">
    <feSpecularLighting in="SourceGraphic" specularConstant="1.2">
      <fePointLight x="60" y="60" z="20" />
    </feSpecularLighting>
  </filter>
  <filter id="specularLighting2" x="0" y="0" width="100%" height="100%">
    <feSpecularLighting in="SourceGraphic" specularConstant="0.8">
      <fePointLight x="60" y="60" z="20" />
    </feSpecularLighting>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#specularLighting1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#specularLighting2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Verwendungsnotizen

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
