---
title: side
slug: Web/SVG/Reference/Attribute/side
l10n:
  sourceCommit: 73f93cb9449dc42059d2f8835338e8674b3d8bdd
---

{{SeeCompatTable}}

Das **`side`** Attribut bestimmt die Seite eines Pfades, auf der der Text platziert wird (relativ zur Pfadrichtung).

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("textPath")}}

## Beispiel

### Grundlegende Verwendung

Das folgende Beispiel zeichnet zwei kreisförmige Textpfade und zeigt den Text auf der linken und der rechten Seite an.

#### HTML

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
    <textPath href="#circle1" side="left">Text on left of path</textPath>
  </text>
  <text>
    <textPath href="#circle2" side="right">Text on right of path</textPath>
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

#### Ergebnis

Browser, die die Einstellung des `side` Attributs unterstützen, werden den Text links (außen) und rechts (innen) des kreisförmigen Textpfades unten anzeigen.

{{EmbedLiveSample("Basic usage", "420", "220")}}

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
  - : Dieser Wert platziert den Text auf der linken Seite des Pfades (relativ zur Pfadrichtung).
- `right`
  - : Dieser Wert platziert den Text auf der rechten Seite des Pfades (relativ zur Pfadrichtung). Dies kehrt effektiv die Pfadrichtung um.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side)
