---
title: maskUnits
slug: Web/SVG/Attribute/maskUnits
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

Das Attribut **`maskUnits`** gibt an, welches Koordinatensystem für die Geometrieeigenschaften des {{ SVGElement("mask") }}-Elements verwendet werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('mask')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <mask
    id="myMask1"
    maskUnits="userSpaceOnUse"
    x="20%"
    y="20%"
    width="60%"
    height="60%">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx="50" cy="50" r="35" />
  </mask>

  <mask
    id="myMask2"
    maskUnits="objectBoundingBox"
    x="20%"
    y="20%"
    width="60%"
    height="60%">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx="50" cy="50" r="35" />
  </mask>

  <!-- Some reference rect to materialized the mask -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- The first 3 rect are masked with useSpaceOnUse units -->
  <use mask="url(#myMask1)" href="#r1" fill="red" />
  <use mask="url(#myMask1)" href="#r2" fill="red" />
  <use mask="url(#myMask1)" href="#r3" fill="red" />

  <!-- The last rect is masked with objectBoundingBox units -->
  <use mask="url(#myMask2)" href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Maske

Für {{SVGElement('mask')}} definiert `maskUnits` das Koordinatensystem, das für die Geometrieattribute ({{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} und {{ SVGAttr("height") }}) des Elements verwendet wird.

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
  - : Dieser Wert gibt an, dass sich alle Koordinaten für die Geometrieattribute auf das Benutzerkoordinatensystem beziehen, wie es bei der Erstellung der Maske definiert wurde.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten für die Geometrieattribute Bruchteile oder Prozentsätze des Begrenzungsrahmens des Elements darstellen, auf das die Maske angewendet wird. Ein Begrenzungsrahmen könnte als äquivalent betrachtet werden, als ob der Inhalt der {{ SVGElement("mask") }} an eine `"0 0 1 1"` {{ SVGAttr("viewBox") }} gebunden wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
