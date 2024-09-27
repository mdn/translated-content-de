---
title: patternContentUnits
slug: Web/SVG/Attribute/patternContentUnits
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

Das Attribut **`patternContentUnits`** gibt an, welches Koordinatensystem für den Inhalt des {{ SVGElement("pattern") }}-Elements verwendet werden soll.

> [!NOTE]
> Dieses Attribut hat keine Wirkung, wenn das Attribut {{ SVGAttr("viewBox") }} auf dem {{ SVGElement("pattern") }}-Element spezifiziert ist.

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
  <!--
  A pattern tile that content coordinates and values are
  computed against the current coordinate user space.
  Note that the size of the tile is computed against
  the bounding box of the target element
  -->
  <pattern
    id="p1"
    width="20%"
    height="20%"
    patternContentUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!--
  A pattern tile that content coordinates and values are
  computed against the bounding box of the target element.
  Note that the size of the tile is also computed against
  the bounding box of the target element
  -->
  <pattern
    id="p2"
    width="20%"
    height="20%"
    patternContentUnits="objectBoundingBox">
    <circle cx=".1" cy=".1" r=".1" />
  </pattern>

  <!-- Left square with user space tiles -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />

  <!-- Right square with bounding box tiles -->
  <rect x="110" y="10" width="80" height="80" fill="url(#p2)" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## pattern

Für {{SVGElement('pattern')}} definiert `patternContentUnits` das Koordinatensystem, das für den Inhalt des Elements verwendet wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>userSpaceOnUse</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des {{SVGElement('pattern')}}-Elements sich auf das Benutzerkoordinatensystem beziehen, das definiert wurde, als die Kachel des Musters erstellt wurde.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des {{SVGElement('pattern')}}-Elements relativ zum Begrenzungsrahmen des Elements sind, auf das das Muster angewendet wird. Ein Begrenzungsrahmen könnte als dasselbe angesehen werden, als ob der Inhalt des {{ SVGElement("pattern") }} an ein `"0 0 1 1"` {{ SVGAttr("viewBox") }} für eine Mustekachel mit einer Breite und Höhe von 100% gebunden wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
