---
title: patternContentUnits
slug: Web/SVG/Reference/Attribute/patternContentUnits
l10n:
  sourceCommit: 04a0e78cf3119afe2a99e6449f6b74976654d69d
---

Das Attribut **`patternContentUnits`** gibt an, welches Koordinatensystem für den Inhalt des Elements {{ SVGElement("pattern") }} verwendet wird.

> [!NOTE]
> Dieses Attribut hat keine Wirkung, wenn für das Element {{ SVGElement("pattern") }} das Attribut {{ SVGAttr("viewBox") }} angegeben ist.

Sie können dieses Attribut mit dem folgenden SVG-Element verwenden:

- {{SVGElement('pattern')}}

## Elemente

Sie können dieses Attribut mit dem SVG-Element verwenden, das im folgenden Abschnitt beschrieben wird.

### `<pattern>`

Für {{SVGElement('pattern')}} legt `patternContentUnits` das Koordinatensystem für den Inhalt des Elements fest.

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
  - : Dieser Wert gibt an, dass sich alle Koordinaten innerhalb des Elements {{SVGElement('pattern')}} auf das Benutzerkoordinatensystem beziehen, wie es beim Erstellen der Musterkachel festgelegt wurde.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des Elements {{SVGElement('pattern')}} relativ zur Bounding Box des Elements sind, auf das das Muster angewendet wird. Die Bounding Box kann so betrachtet werden, als wäre der Inhalt von {{ SVGElement("pattern") }} für eine Musterkachel mit einer Breite und Höhe von jeweils 100 % an eine {{ SVGAttr("viewBox") }} mit dem Wert `"0 0 1 1"` gebunden.

## Beispiele

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

{{EmbedLiveSample('Examples', 150, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
