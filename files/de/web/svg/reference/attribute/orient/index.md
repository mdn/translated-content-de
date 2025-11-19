---
title: orient
slug: Web/SVG/Reference/Attribute/orient
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`orient`**-Attribut gibt an, wie ein Marker gedreht wird, wenn er an seiner Position auf der Form platziert wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("marker")}}

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
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <marker
      id="dataArrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="-65deg">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
    </marker>
  </defs>

  <polyline
    points="10,10 10,90 90,90"
    fill="none"
    stroke="black"
    marker-start="url(#arrow)"
    marker-end="url(#arrow)" />

  <polyline
    points="15,80 29,50 43,60 57,30 71,40 85,15"
    fill="none"
    stroke="grey"
    marker-start="url(#dataArrow)"
    marker-mid="url(#dataArrow)"
    marker-end="url(#dataArrow)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code> | <code>auto-start-reverse</code> |
        {{cssxref("angle")}} | {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animationsfähig</th>
      <td>Ja (nicht-additiv)</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Dieser Wert gibt an, dass der Marker so ausgerichtet ist, dass seine positive x-Achse in eine Richtung zeigt, die relativ zum Pfad an der Position des Markers ist.
- `auto-start-reverse`
  - : Wenn durch {{SVGAttr("marker-start")}} platziert, ist der Marker um 180° anders orientiert als bei der Verwendung von `auto`. Für alle anderen Marker bedeutet `auto-start-reverse` dasselbe wie `auto`.

    > [!NOTE]
    > Dies ermöglicht die Definition eines einzelnen Pfeilkopf-Markers, der sowohl für den Start als auch das Ende eines Pfads verwendet werden kann, d.h. der an beiden Enden nach außen zeigt.

- `<angle>`
  - : Dieser Wert gibt an, dass der Marker so ausgerichtet ist, dass der angegebene Winkel zwischen der positiven x-Achse der Form und der positiven x-Achse des Markers liegt.

    > [!NOTE]
    > Wenn zum Beispiel ein Wert von `45` angegeben wird, würde die positive x-Achse des Markers in das Koordinatensystem der Form unten und rechts zeigen.

- `<number>`
  - : Dieser Wert gibt einen Winkel in Grad an. Der Marker ist so ausgerichtet, dass der angegebene Winkel zwischen der positiven x-Achse der Form und der positiven x-Achse des Markers liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
