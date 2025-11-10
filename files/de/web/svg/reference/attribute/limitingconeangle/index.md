---
title: limitingConeAngle
slug: Web/SVG/Reference/Attribute/limitingConeAngle
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`limitingConeAngle`**-Attribut repräsentiert den Winkel in Grad zwischen der Spotlichtachse (d.h. der Achse zwischen der Lichtquelle und dem Punkt, auf den sie gerichtet ist) und dem Spotlichtkegel. Es definiert somit einen begrenzenden Kegel, der den Bereich einschränkt, in dem das Licht projiziert wird. Außerhalb des Kegels wird kein Licht projiziert.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="spotLight1" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting diffuseConstant="2">
      <feSpotLight
        x="10"
        y="10"
        z="50"
        pointsAtX="100"
        pointsAtY="100"
        limitingConeAngle="10" />
    </feDiffuseLighting>
  </filter>
  <filter id="spotLight2" x="0" y="0" width="100%" height="100%">
    <feDiffuseLighting diffuseConstant="2">
      <feSpotLight
        x="10"
        y="10"
        z="50"
        pointsAtX="100"
        pointsAtY="100"
        limitingConeAngle="40" />
    </feDiffuseLighting>
  </filter>

  <rect x="0" y="0" width="200" height="200" filter="url(#spotLight1)" />
  <rect x="220" y="0" width="200" height="200" filter="url(#spotLight2)" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Nutzungshinweise

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
