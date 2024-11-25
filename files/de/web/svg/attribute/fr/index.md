---
title: fr
slug: Web/SVG/Attribute/fr
l10n:
  sourceCommit: fceea994be5c930065bb1f2b45bee9ac38de491c
---

{{SVGRef}}

Das **`fr`**-Attribut definiert den Radius des Brennpunkts für den radialen Verlauf.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("radialGradient")}}

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

### Ändern des Werts von `fr`

Das folgende Beispiel zeigt zwei Kreise: Der erste hat `fr` auf `5%` gesetzt, während der andere Kreis `fr` auf `25%` gesetzt hat.

```html
<svg
  viewBox="0 0 480 200"
  width="420"
  height="160"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="gradient1"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
    <radialGradient
      id="gradient2"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="25%">
      <stop offset="0%" stop-color="white" />
      <stop offset="100%" stop-color="darkseagreen" />
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
  <circle
    cx="100"
    cy="100"
    r="100"
    fill="url(#gradient2)"
    style="transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("changing_the_value_of_fr", "480", "200")}}

### Die Beziehung des Brennpunkts zu `(fx, fy)`

Dieses Beispiel hat `fr` gleich `5%` und zeigt, wie die Attribute `fx` und `fy` (die im SVG entsprechend benannten Punkte) als Ursprung für den Brennpunkt des radialen Verlaufs fungieren. Dieser Brennpunkt ist ein Kreis, dessen Radius (der Wert von `fr`) definiert, wann der erste Farbverlauf, in diesem Fall die Farbe Rot, in den anderen Farbverlauf übergehen soll, der in diesem Fall die Farbe Blau ist.

```html
<svg
  viewBox="0 0 120 120"
  width="165"
  height="165"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="Gradient"
      cx="0.5"
      cy="0.5"
      r="0.5"
      fx="0.35"
      fy="0.35"
      fr="5%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="45" cy="45" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{EmbedLiveSample("the_focal_points_relationship_to_fx_fy", "200", "200")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong><a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>None</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
