---
title: stdDeviation
slug: Web/SVG/Attribute/stdDeviation
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`stdDeviation`** Attribut definiert die Standardabweichung für die Unschärfeoperation.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feGaussianBlur")}}

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
  <filter id="gaussianBlur1">
    <feGaussianBlur stdDeviation="1" />
  </filter>
  <filter id="gaussianBlur2">
    <feGaussianBlur stdDeviation="5" />
  </filter>
  <filter id="gaussianBlur3" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="10" />
  </filter>

  <circle cx="100" cy="100" r="50" style="filter: url(#gaussianBlur1);" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="filter: url(#gaussianBlur2); transform: translateX(140px);" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="filter: url(#gaussianBlur3); transform: translateX(280px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
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

- `<number-optional-number>`

  - : Wenn zwei Zahlen angegeben sind, stellt die erste Zahl eine Standardabweichung entlang der x-Achse dar. Der zweite Wert stellt eine Standardabweichung entlang der y-Achse dar. Wenn eine Zahl angegeben ist, wird dieser Wert sowohl für X als auch für Y verwendet.

    Ein negativer Wert ist verboten. Ein Wert von null deaktiviert den Effekt der angegebenen Filterprimitive (d. h. das Ergebnis ist das Filtereingabebild). Wenn `stdDeviation` nur in X oder Y auf 0 gesetzt ist, wird der Unschärfeeffekt nur in der Richtung angewendet, die einen Wert ungleich null hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
