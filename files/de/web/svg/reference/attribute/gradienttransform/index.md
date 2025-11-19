---
title: gradientTransform
slug: Web/SVG/Reference/Attribute/gradientTransform
l10n:
  sourceCommit: bb3478393fbb30212a6aeb33235dadf2d627fd4a
---

Das **`gradientTransform`** Attribut enthält die Definition einer optionalen zusätzlichen Transformation vom Gradientenkoordinatensystem auf das Zielkoordinatensystem (d.h. userSpaceOnUse oder objectBoundingBox). Dies ermöglicht beispielsweise das Verzerren des Gradienten. Diese zusätzliche Transformationsmatrix wird nachmultipliziert (d.h. rechts eingefügt) zu allen zuvor definierten Transformationen, einschließlich der impliziten Transformation, die notwendig ist, um von Einheiten des Objektrahmens in den Benutzerraum zu konvertieren.

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
    gradientTransform="skewX(20) translate(185, 0)">
    <stop offset="0%" stop-color="darkblue" />
    <stop offset="50%" stop-color="skyblue" />
    <stop offset="100%" stop-color="darkblue" />
  </radialGradient>

  <rect x="0" y="0" width="200" height="200" fill="url(#gradient1)" />
  <rect x="220" y="0" width="200" height="200" fill="url(#gradient2)" />
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
  - : Eine Liste von [Transformation functions](/de/docs/Web/CSS/Reference/Values/transform-function), die einige zusätzliche Transformationen vom Gradientenkoordinatensystem auf das Zielkoordinatensystem angeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform-function")}}
