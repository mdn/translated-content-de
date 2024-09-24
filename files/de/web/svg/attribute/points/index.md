---
title: Punkte
slug: Web/SVG/Attribute/points
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`points`**-Attribut definiert eine Liste von Punkten. Jeder Punkt wird durch ein Zahlenpaar definiert, das eine X- und eine Y-Koordinate im Benutzerkoordinatensystem darstellt. Wenn das Attribut eine ungerade Anzahl von Koordinaten enthält, wird die letzte ignoriert.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("polyline")}}
- {{SVGElement("polygon")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline ist eine offene Form -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />

  <!-- polygon ist eine geschlossene Form -->
  <polygon
    stroke="black"
    fill="none"
    transform="translate(100,0)"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Es wird normalerweise als Best Practice angesehen, eine X- und Y-Koordinate
  durch ein Komma und eine Gruppe von Koordinaten durch ein Leerzeichen zu trennen.
  Das macht es für Menschen lesbarer.
  -->
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## polyline

Für {{SVGElement('polyline')}} definiert `points` eine Liste von Punkten, die jeweils einen Scheitelpunkt der Linie darstellen, die gezeichnet werden soll. Jeder Punkt wird durch eine X- und Y-Koordinate im Benutzerkoordinatensystem bestimmt.

> [!NOTE]
> Eine Polyline ist eine offene Form, was bedeutet, dass der letzte Punkt nicht mit dem ersten Punkt verbunden ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
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
  <!-- polyline ist eine offene Form -->
  <polyline stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polyline', '100%', 200)}}

## polygon

Für {{SVGElement('polygon')}} definiert `points` eine Liste von Punkten, die jeweils einen Scheitelpunkt der Form darstellen, die gezeichnet werden soll. Jeder Punkt wird durch eine X- und Y-Koordinate im Benutzerkoordinatensystem bestimmt.

> [!NOTE]
> Ein Polygon ist eine geschlossene Form, was bedeutet, dass der letzte Punkt mit dem ersten Punkt verbunden ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
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
  <!-- polygon ist eine geschlossene Form -->
  <polygon stroke="black" fill="none" points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polygon', '100%', 200)}}

## Spezifikationen

{{Specifications}}
