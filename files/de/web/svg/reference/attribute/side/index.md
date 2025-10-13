---
title: side
slug: Web/SVG/Reference/Attribute/side
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{SeeCompatTable}}

Das **`side`** Attribut bestimmt die Seite eines Pfades, auf der der Text platziert wird (relativ zur Richtung des Pfades).

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  font:
    25px "Helvetica",
    "Arial",
    sans-serif;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <text>
    <textPath href="#circle1" side="left">Text left from the path</textPath>
  </text>
  <text>
    <textPath href="#circle2" side="right">Text right from the path</textPath>
  </text>

  <circle
    id="circle1"
    cx="100"
    cy="100"
    r="70"
    fill="transparent"
    stroke="silver" />
  <circle
    id="circle2"
    cx="320"
    cy="100"
    r="70"
    fill="transparent"
    stroke="silver" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>left</code> | <code>right</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>left</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `left`
  - : Dieser Wert platziert den Text auf der linken Seite des Pfades (relativ zur Richtung des Pfades).
- `right`
  - : Dieser Wert platziert den Text auf der rechten Seite des Pfades (relativ zur Richtung des Pfades). Dies kehrt die Pfadrichtung effektiv um.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
