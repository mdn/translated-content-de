---
title: side
slug: Web/SVG/Reference/Attribute/side
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{SeeCompatTable}}

Das **`side`** Attribut bestimmt die Seite eines Pfades, auf der der Text platziert wird (relativ zur Pfadrichtung).

Sie können dieses Attribut mit folgenden SVG-Elementen verwenden:

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
    25px Arial,
    Helvetica,
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

## Nutzungshinweise

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
  - : Dieser Wert platziert den Text auf der linken Seite des Pfades (relativ zur Pfadrichtung).
- `right`
  - : Dieser Wert platziert den Text auf der rechten Seite des Pfades (relativ zur Pfadrichtung). Dies kehrt effektiv die Pfadrichtung um.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
