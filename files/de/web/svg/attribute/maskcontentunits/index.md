---
title: maskContentUnits
slug: Web/SVG/Attribute/maskContentUnits
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

Das Attribut **`maskContentUnits`** gibt an, welches Koordinatensystem für den Inhalt des {{ SVGElement("mask") }}-Elements verwendet werden soll.

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
  <mask id="myMask1" maskContentUnits="userSpaceOnUse">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx="50" cy="50" r="35" />
  </mask>

  <mask id="myMask2" maskContentUnits="objectBoundingBox">
    <rect fill="black" x="0" y="0" width="100%" height="100%" />
    <circle fill="white" cx=".5" cy=".5" r=".35" />
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

Für {{SVGElement("mask")}} definiert `maskContentUnits` das Koordinatensystem, das für den Inhalt des Elements verwendet wird.

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
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des {{SVGElement('mask')}}-Elements auf das Benutzerkoordinatensystem bezogen sind, wie es definiert wurde, als die Maske erstellt wurde.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des {{SVGElement('mask')}}-Elements relativ zur Begrenzungsbox des Elements sind, auf das die Maske angewendet wird. Eine Begrenzungsbox könnte als identisch betrachtet werden, als ob der Inhalt der {{ SVGElement("mask") }} an eine `"0 0 1 1"` {{ SVGAttr("viewBox") }} gebunden wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
