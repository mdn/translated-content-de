---
title: orient
slug: Web/SVG/Attribute/orient
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{SVGRef}}

Das **`orient`** Attribut gibt an, wie ein `marker` bei seiner Positionierung auf der Form gedreht wird.

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
      <th scope="row">Animierbar</th>
      <td>Ja (nicht-additiv)</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : Dieser Wert gibt an, dass der `marker` so ausgerichtet ist, dass seine positive x-Achse relativ zu dem Pfad, an dem der `marker` platziert wird, zeigt.
- `auto-start-reverse`

  - : Wenn es durch {{SVGAttr("marker-start")}} platziert wird, ist der `marker` um 180° anders ausgerichtet als die Orientierung, die verwendet würde, wenn `auto` angegeben wäre. Für alle anderen Marker bedeutet `auto-start-reverse` dasselbe wie `auto`.

    > [!NOTE]
    > Dies ermöglicht es, einen einzigen Pfeilkopfmarker zu definieren, der sowohl für den Anfang als auch das Ende eines Pfades verwendet werden kann, d.h. der von beiden Enden nach außen zeigt.

- `<angle>`

  - : Dieser Wert gibt an, dass der `marker` so ausgerichtet ist, dass der angegebene Winkel der zwischen der positiven x-Achse der Form und der positiven x-Achse des `marker` gemessen wird.

    > [!NOTE]
    > Zum Beispiel, wenn ein Wert von `45` angegeben wird, würde die positive x-Achse des `marker` im Koordinatensystem der Form nach unten und rechts zeigen.

- `<number>`
  - : Dieser Wert gibt einen Winkel in Grad an. Der `marker` ist so ausgerichtet, dass der angegebene Winkel der zwischen der positiven x-Achse der Form und der positiven x-Achse des `marker` gemessen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
