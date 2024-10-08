---
title: gradientTransform
slug: Web/SVG/Attribute/gradientTransform
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das `gradientTransform`-Attribut enthält die Definition einer optionalen zusätzlichen Transformation vom Gradienten-Koordinatensystem auf das Ziel-Koordinatensystem (z. B. userSpaceOnUse oder objectBoundingBox). Dies ermöglicht beispielsweise das Schrägstellen des Gradienten. Diese zusätzliche Transformationsmatrix wird nachträglich in die (d. h. rechts von) zuvor definierten Transformationen eingefügt, einschließlich der impliziten Transformation, die erforderlich ist, um von Einheiten des Objektumrandungsrahmens in den Benutzerbereich überzugehen.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

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
  <radialGradient
    id="gradient1"
    gradientUnits="userSpaceOnUse"
    cx="100"
    cy="100"
    r="100"
    fx="100"
    fy="100">
    <stop offset="0%" stop-color="darkblue" />
    <stop offset="50%" stop-color="skyblue" />
    <stop offset="100%" stop-color="darkblue" />
  </radialGradient>
  <radialGradient
    id="gradient2"
    gradientUnits="userSpaceOnUse"
    cx="100"
    cy="100"
    r="100"
    fx="100"
    fy="100"
    gradientTransform="skewX(20) translate(-35, 0)">
    <stop offset="0%" stop-color="darkblue" />
    <stop offset="50%" stop-color="skyblue" />
    <stop offset="100%" stop-color="darkblue" />
  </radialGradient>

  <rect x="0" y="0" width="200" height="200" fill="url(#gradient1)" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient2)"
    style="transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Identitätstransformation</em></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;transform-list></code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<transform-list>`
  -: Eine Liste von [Transformationsfunktionen](/de/docs/Web/CSS/transform-function), die eine zusätzliche Transformation vom Gradienten-Koordinatensystem auf das Ziel-Koordinatensystem spezifizieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform-function")}}
