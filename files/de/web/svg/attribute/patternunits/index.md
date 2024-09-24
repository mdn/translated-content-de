---
title: patternUnits
slug: Web/SVG/Attribute/patternUnits
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`patternUnits`**-Attribut gibt an, welches Koordinatensystem für die Geometrieeigenschaften des {{ SVGElement("pattern") }}-Elements verwendet werden soll.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('pattern')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Alle Geometrieeigenschaften sind relativ zum aktuellen Benutzerkoordinatensystem -->
  <pattern
    id="p1"
    x="12.5"
    y="12.5"
    width="25"
    height="25"
    patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Alle Geometrieeigenschaften sind relativ zum Zielbegrenzungsrahmen -->
  <pattern
    id="p2"
    x=".125"
    y=".125"
    width=".25"
    height=".25"
    patternUnits="objectBoundingBox">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Linkes Quadrat mit Benutzerkoordinatensystem-Kacheln -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />

  <!-- Rechtes Quadrat mit Begrenzungsrahmen-Kacheln -->
  <rect x="110" y="10" width="80" height="80" fill="url(#p2)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## pattern

Für {{SVGElement('pattern')}} definiert `patternUnits` das verwendete Koordinatensystem für die Geometrieeigenschaften ({{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} und {{ SVGAttr("height") }}) des Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : Dieser Wert gibt an, dass alle Koordinaten für die Geometrieeigenschaften sich auf das Benutzerkoordinatensystem beziehen, wie es definiert wurde, als das Muster angewendet wurde.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten für die Geometrieeigenschaften Brüche oder Prozentsätze des Begrenzungsrahmens des Elements darstellen, auf das das Muster angewendet wird. Ein Begrenzungsrahmen könnte als identisch betrachtet werden, als ob der Inhalt des {{ SVGElement("pattern") }} an eine "`0 0 1 1`" {{ SVGAttr("viewBox") }} gebunden wäre.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
