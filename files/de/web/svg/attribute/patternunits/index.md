---
title: patternUnits
slug: Web/SVG/Attribute/patternUnits
l10n:
  sourceCommit: 98af8543778b4116e97f301644b102ecfee3cf0d
---

{{SVGRef}}

Das Attribut **`patternUnits`** gibt an, welches Koordinatensystem für die Geometrieeigenschaften des {{ SVGElement("pattern") }}-Elements verwendet werden soll.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('pattern')}}

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

{{EmbedLiveSample("Beispiele", '100%', 200)}}

## Elemente

Dieses Attribut kann mit den unten beschriebenen SVG-Elementen verwendet werden.

### `<pattern>`

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
  - : Dieser Wert gibt an, dass sich alle Koordinaten für die Geometrieeigenschaften auf das Benutzerkoordinatensystem beziehen, das definiert ist, wenn das Muster angewendet wird.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten für die Geometrieeigenschaften Brüche oder Prozentsätze der Begrenzungsbox des Elements darstellen, auf das das Muster angewendet wird. Eine Begrenzungsbox könnte als identisch mit der Betrachtung des Inhalts des {{ SVGElement("pattern") }}-Elements in einem `"0 0 1 1"` {{ SVGAttr("viewBox") }} betrachtet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
