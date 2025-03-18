---
title: stdDeviation
slug: Web/SVG/Reference/Attribute/stdDeviation
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`stdDeviation`**-Attribut definiert die Standardabweichung für die Weichzeichner-Operation.

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

## Verwendungshinweise

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

  - : Wenn zwei Zahlen angegeben werden, repräsentiert die erste Zahl einen Standardabweichungswert entlang der x-Achse. Der zweite Wert repräsentiert eine Standardabweichung entlang der y-Achse. Wenn nur eine Zahl angegeben wird, wird dieser Wert sowohl für X als auch für Y verwendet.

    Ein negativer Wert ist verboten. Ein Wert von null deaktiviert die Wirkung der gegebenen Filter-Primitive (d.h. das Ergebnis ist das Eingangsbild des Filters). Wenn `stdDeviation` in nur einer der Richtungen X oder Y 0 ist, wird der Weichzeichner nur in der Richtung angewendet, die einen vom null verschiedenen Wert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
