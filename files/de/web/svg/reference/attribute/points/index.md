---
title: points
slug: Web/SVG/Reference/Attribute/points
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`points`** definiert eine Liste von Punkten. Jeder Punkt wird durch ein Zahlenpaar definiert, das eine X- und eine Y-Koordinate im Benutzerkoordinatensystem angibt. Enthält das Attribut eine ungerade Anzahl von Koordinaten, wird die letzte ignoriert.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("polyline")}}
- {{SVGElement("polygon")}}

## polygon

Für {{SVGElement('polygon')}} definiert `points` eine Liste von Punkten, die jeweils einen Eckpunkt der zu zeichnenden Form darstellen. Jeder Punkt wird durch eine X- und eine Y-Koordinate im Benutzerkoordinatensystem definiert.

> [!NOTE]
> Ein Polygon ist eine geschlossene Form. Das bedeutet, dass der letzte Punkt mit dem ersten verbunden ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## polyline

Für {{SVGElement('polyline')}} definiert `points` eine Liste von Punkten, die jeweils einen Eckpunkt der zu zeichnenden Linie darstellen. Jeder Punkt wird durch eine X- und eine Y-Koordinate im Benutzerkoordinatensystem definiert.

> [!NOTE]
> Eine Polylinie ist eine offene Form. Das bedeutet, dass der letzte Punkt nicht mit dem ersten verbunden ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline is an open shape -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polyline', '100%', 200)}}

## Beispiele

### Verwendung mit polyline

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline is an open shape -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />

  <!-- polygon is a closed shape -->
  <polygon
    stroke="black"
    fill="none"
    transform="translate(100,0)"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  It is usually considered best practices to separate a X and Y
  coordinate with a comma and a group of coordinates by a space.
  It makes things more readable for human beings.
  -->
</svg>
```

{{EmbedLiveSample("Usage with polyline", '100%', 200)}}

### Verwendung mit polygon

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polygon is a closed shape -->
  <polygon stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('Usage with polygon', '100%', 200)}}

## Spezifikationen

{{Specifications}}
