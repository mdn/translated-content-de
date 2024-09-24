---
title: clipPathUnits
slug: Web/SVG/Attribute/clipPathUnits
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{SVGRef}}

Das **`clipPathUnits`**-Attribut gibt an, welches Koordinatensystem für den Inhalt des {{SVGElement("clipPath")}}-Elements verwendet werden soll.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('clipPath')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <clipPath id="myClip2" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".35" />
  </clipPath>

  <!-- Ein Referenzrechteck, um den Clip-Pfad zu materialisieren -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- Die ersten 3 Rechtecke werden mit userSpaceOnUse-Einheiten beschnitten -->
  <use clip-path="url(#myClip1)" href="#r1" fill="red" />
  <use clip-path="url(#myClip1)" href="#r2" fill="red" />
  <use clip-path="url(#myClip1)" href="#r3" fill="red" />

  <!-- Das letzte Rechteck wird mit objectBoundingBox-Einheiten beschnitten -->
  <use clip-path="url(#myClip2)" href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Beispiel", '100%', 200)}}

## clipPath

Für {{SVGElement('clipPath')}} definiert `clipPathUnits` das verwendete Koordinatensystem für den Inhalt des Elements.

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

- userSpaceOnUse
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des {{SVGElement('clipPath')}}-Elements sich auf das Benutzerräumliche Koordinatensystem beziehen, wie es beim Erstellen des Clip-Pfads definiert wurde.
- objectBoundingBox
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des {{SVGElement('clipPath')}}-Elements relativ zum Begrenzungsrahmen des Elements sind, auf das der Clip-Pfad angewendet wird. Das bedeutet, dass der Ursprung des Koordinatensystems die obere linke Ecke des Begrenzungsrahmens des Objekts ist und die Breite und Höhe des Begrenzungsrahmens des Objekts als Länge von 1 Einheit betrachtet werden.

## Spezifikationen

{{Specifications}}
