---
title: patternUnits
slug: Web/SVG/Attribute/patternUnits
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

Das Attribut **`patternUnits`** gibt an, welches Koordinatensystem für die geometrischen Eigenschaften des {{ SVGElement("pattern") }}-Elements verwendet werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  <!-- All geometry properties are relative to the current user space -->
  <pattern
    id="p1"
    x="12.5"
    y="12.5"
    width="25"
    height="25"
    patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- All geometry properties are relative to the target bounding box -->
  <pattern
    id="p2"
    x=".125"
    y=".125"
    width=".25"
    height=".25"
    patternUnits="objectBoundingBox">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Left square with user space tiles -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />

  <!-- Right square with bounding box tiles -->
  <rect x="110" y="10" width="80" height="80" fill="url(#p2)" />
</svg>
```

{{EmbedLiveSample("Beispiel", '100%', 200)}}

## pattern

Für {{SVGElement('pattern')}} definiert `patternUnits` das Koordinatensystem, das für die geometrischen Eigenschaften ({{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} und {{ SVGAttr("height") }}) des Elements verwendet wird.

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
  - : Dieser Wert gibt an, dass alle Koordinaten für die geometrischen Eigenschaften sich auf das Benutzerkoordinatensystem beziehen, wie es definiert wurde, als das Muster angewendet wurde.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten für die geometrischen Eigenschaften Brüche oder Prozentsätze des Begrenzungsrahmens des Elements repräsentieren, auf das das Muster angewendet wird. Ein Begrenzungsrahmen kann als dasselbe angesehen werden, als ob der Inhalt des {{ SVGElement("pattern") }} an ein `"0 0 1 1"` {{ SVGAttr("viewBox") }} gebunden wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
