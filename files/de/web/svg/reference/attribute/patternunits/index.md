---
title: patternUnits
slug: Web/SVG/Reference/Attribute/patternUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`patternUnits`** gibt an, welches Koordinatensystem für die geometrischen Eigenschaften des {{ SVGElement("pattern") }}-Elements verwendet werden soll.

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

{{EmbedLiveSample("Examples", '100%', 200)}}

## Elemente

Dieses Attribut kann mit den im Folgenden beschriebenen SVG-Elementen verwendet werden.

### `<pattern>`

Für {{SVGElement('pattern')}} definiert `patternUnits` das verwendete Koordinatensystem für die geometrischen Eigenschaften ({{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} und {{ SVGAttr("height") }}) des Elements.

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
  - : Dieser Wert zeigt an, dass sich alle Koordinaten für die geometrischen Eigenschaften auf das Nutzerkoordinatensystem beziehen, wie es definiert wurde, als das Muster angewendet wurde.
- `objectBoundingBox`
  - : Dieser Wert zeigt an, dass alle Koordinaten für die geometrischen Eigenschaften Brüche oder Prozentsätze der Begrenzungsbox des Elements darstellen, auf das das Muster angewendet wird. Eine Begrenzungsbox könnte als dasselbe betrachtet werden, als wäre der Inhalt des {{ SVGElement("pattern") }} an eine `"0 0 1 1"` {{ SVGAttr("viewBox") }} gebunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
