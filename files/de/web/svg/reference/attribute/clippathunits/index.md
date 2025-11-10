---
title: clipPathUnits
slug: Web/SVG/Reference/Attribute/clipPathUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`clipPathUnits`**-Attribut gibt an, welches Koordinatensystem für die Inhalte des {{ SVGElement("clipPath") }}-Elements verwendet werden soll.

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

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
  <rect id="r2" x="0" y="55" width="45" height="45" />
  <rect id="r3" x="55" y="55" width="45" height="45" />
  <rect id="r4" x="55" y="0" width="45" height="45" />

  <!-- The first 3 rect are clipped with userSpaceOnUse units -->
  <use clip-path="url(#myClip1)" href="#r1" fill="red" />
  <use clip-path="url(#myClip1)" href="#r2" fill="red" />
  <use clip-path="url(#myClip1)" href="#r3" fill="red" />

  <!-- The last rect is clipped with objectBoundingBox units -->
  <use clip-path="url(#myClip2)" href="#r4" fill="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## clipPath

Für {{SVGElement('clipPath')}} definieren `clipPathUnits` das verwendete Koordinatensystem für den Inhalt des Elements.

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
  - : Dieser Wert gibt an, dass alle Koordinaten im Inneren des {{SVGElement('clipPath')}}-Elements sich auf das Benutzerkoordinatensystem beziehen, wie es bei der Erstellung des Clipping-Pfades definiert wurde.
- objectBoundingBox
  - : Dieser Wert gibt an, dass alle Koordinaten im Inneren des {{SVGElement('clipPath')}}-Elements relativ zur Begrenzungsbox des Elements sind, auf das der Clipping-Pfad angewendet wird. Das bedeutet, dass der Ursprung des Koordinatensystems die obere linke Ecke der Objektbegrenzungsbox ist und die Breite und Höhe der Objektbegrenzungsbox als Länge von 1 Einheit betrachtet werden.

## Spezifikationen

{{Specifications}}
