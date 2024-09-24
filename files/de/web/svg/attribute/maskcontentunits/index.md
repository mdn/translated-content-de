---
title: maskContentUnits
slug: Web/SVG/Attribute/maskContentUnits
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{SVGRef}}

Das **`maskContentUnits`**-Attribut gibt an, welches Koordinatensystem für den Inhalt des {{ SVGElement("mask") }}-Elements verwendet werden soll.

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

  <!-- Einige Referenzrechtecke, um die Maske zu materialisieren -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- Die ersten 3 Rechtecke sind mit useSpaceOnUse-Einheiten maskiert -->
  <use mask="url(#myMask1)" href="#r1" fill="red" />
  <use mask="url(#myMask1)" href="#r2" fill="red" />
  <use mask="url(#myMask1)" href="#r3" fill="red" />

  <!-- Das letzte Rechteck ist mit objectBoundingBox-Einheiten maskiert -->
  <use mask="url(#myMask2)" href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## mask

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
  - : Dieser Wert zeigt an, dass sich alle Koordinaten innerhalb des {{SVGElement('mask')}}-Elements auf das Benutzerkoordinatensystem beziehen, wie es bei der Erstellung der Maske definiert wurde.
- `objectBoundingBox`
  - : Dieser Wert zeigt an, dass sich alle Koordinaten innerhalb des {{SVGElement('mask')}}-Elements relativ zur Begrenzungsbox des Elements verhalten, auf das die Maske angewendet wird. Eine Begrenzungsbox könnte als ähnlich betrachtet werden, als wäre der Inhalt der {{ SVGElement("mask") }} an eine "`0 0 1 1`" {{ SVGAttr("viewBox") }} gebunden.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
