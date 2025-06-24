---
title: stdDeviation
slug: Web/SVG/Reference/Attribute/stdDeviation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`stdDeviation`**-Attribut definiert die Standardabweichung für die Unschärfeoperation.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("feDropShadow")}}
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
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number-optional-number"
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

  - : Wenn zwei Zahlen angegeben sind, repräsentiert die erste Zahl den Standardabweichungswert entlang der x-Achse. Die zweite Zahl repräsentiert die Standardabweichung entlang der y-Achse. Wenn nur eine Zahl angegeben ist, wird dieser Wert für sowohl X als auch Y verwendet.

    Ein negativer Wert ist verboten. Ein Wert von null deaktiviert den Effekt des angegebenen Filterprimitives (d.h. das Ergebnis ist das Filtereingangsbild). Wenn `stdDeviation` nur in einer Richtung von X oder Y null ist, dann wird die Unschärfe nur in der Richtung angewendet, die einen nicht-null Wert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
