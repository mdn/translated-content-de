---
title: patternUnits
slug: Web/SVG/Reference/Attribute/patternUnits
l10n:
  sourceCommit: 04a0e78cf3119afe2a99e6449f6b74976654d69d
---

Das Attribut **`patternUnits`** gibt an, welches Koordinatensystem für die Geometrieeigenschaften des {{ SVGElement("pattern") }}-Elements verwendet wird.

Sie können dieses Attribut mit dem folgenden SVG-Element verwenden:

- {{SVGElement('pattern')}}

## Elemente

Sie können dieses Attribut mit den in den folgenden Abschnitten beschriebenen SVG-Elementen verwenden.

### `<pattern>`

Für {{SVGElement('pattern')}} legt `patternUnits` das Koordinatensystem für die Geometrieeigenschaften ({{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} und {{ SVGAttr("height") }}) des Elements fest.

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
  - : Dieser Wert gibt an, dass sich alle Koordinaten der Geometrieeigenschaften auf das Benutzerkoordinatensystem beziehen, wie es zum Zeitpunkt der Anwendung des Musters definiert war.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten der Geometrieeigenschaften Bruchteile oder Prozentwerte des Begrenzungsrahmens des Elements darstellen, auf das das Muster angewendet wird. Der Begrenzungsrahmen kann so betrachtet werden, als wäre der Inhalt von {{ SVGElement("pattern") }} an eine {{ SVGAttr("viewBox") }} mit dem Wert `"0 0 1 1"` gebunden.

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

{{EmbedLiveSample("Examples", '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
