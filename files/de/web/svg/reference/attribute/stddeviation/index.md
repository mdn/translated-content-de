---
title: stdDeviation
slug: Web/SVG/Reference/Attribute/stdDeviation
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

Das **`stdDeviation`** Attribut definiert die Standardabweichung für die Unschärfeoperation.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

  <circle cx="100" cy="100" r="50" filter="url(#gaussianBlur1)" />
  <circle cx="240" cy="100" r="50" filter="url(#gaussianBlur2)" />
  <circle cx="380" cy="100" r="50" filter="url(#gaussianBlur3)" />
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
  - : Wenn zwei Zahlen angegeben werden, repräsentiert die erste Zahl einen Standardabweichungswert entlang der x-Achse. Der zweite Wert repräsentiert eine Standardabweichung entlang der y-Achse. Wenn eine Zahl angegeben wird, wird dieser Wert sowohl für X als auch für Y verwendet.

    Ein negativer Wert ist verboten. Ein Wert von null deaktiviert die Wirkung des angegebenen Filterprimitives (d.h. das Ergebnis ist das Filtereingabebild). Wenn `stdDeviation` nur in einer der Achsen X oder Y null ist, dann wird der Effekt nur in der Richtung angewendet, die einen von null verschiedenen Wert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
