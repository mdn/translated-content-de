---
title: patternContentUnits
slug: Web/SVG/Attribute/patternContentUnits
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das Attribut **`patternContentUnits`** gibt an, welches Koordinatensystem für den Inhalt des {{ SVGElement("pattern") }}-Elements verwendet werden soll.

> [!NOTE]
> Dieses Attribut hat keine Wirkung, wenn das Attribut {{ SVGAttr("viewBox") }} auf dem {{ SVGElement("pattern") }}-Element angegeben ist.

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
  <!--
  Ein Kachelmuster, dessen Inhaltskoordinaten und Werte
  im aktuellen Benutzerkoordinatenraum berechnet werden.
  Beachten Sie, dass die Größe der Kachel im Verhältnis
  zum Begrenzungsrahmen des Zielelements berechnet wird.
  -->
  <pattern
    id="p1"
    width="20%"
    height="20%"
    patternContentUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!--
  Ein Kachelmuster, dessen Inhaltskoordinaten und Werte
  im Verhältnis zum Begrenzungsrahmen des Zielelements berechnet werden.
  Beachten Sie, dass die Größe der Kachel ebenfalls im Verhältnis
  zum Begrenzungsrahmen des Zielelements berechnet wird.
  -->
  <pattern
    id="p2"
    width="20%"
    height="20%"
    patternContentUnits="objectBoundingBox">
    <circle cx=".1" cy=".1" r=".1" />
  </pattern>

  <!-- Linkes Quadrat mit Kacheln im Benutzerkoordinatenraum -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />

  <!-- Rechtes Quadrat mit Kacheln im Begrenzungsrahmen -->
  <rect x="110" y="10" width="80" height="80" fill="url(#p2)" />
</svg>
```

{{EmbedLiveSample('Beispiel', 150, '100%')}}

## pattern

Für {{SVGElement('pattern')}} definiert `patternContentUnits` das verwendete Koordinatensystem für den Inhalt des Elements.

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
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des {{SVGElement('pattern')}}-Elements sich auf das Benutzerkoordinatensystem beziehen, wie es definiert war, als die Kachel erstellt wurde.
- `objectBoundingBox`
  - : Dieser Wert gibt an, dass alle Koordinaten innerhalb des {{SVGElement('pattern')}}-Elements relativ zum Begrenzungsrahmen des Elements sind, auf das das Muster angewendet wird. Ein Begrenzungsrahmen könnte als dasselbe betrachtet werden, als ob der Inhalt des {{ SVGElement("pattern") }} dasselbe wie ein "`0 0 1 1`" {{ SVGAttr("viewBox") }} für ein Musterkachel von 100% Breite und Höhe gebunden wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
