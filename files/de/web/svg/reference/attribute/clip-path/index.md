---
title: clip-path
slug: Web/SVG/Reference/Attribute/clip-path
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`clip-path`** Präsentationsattribut definiert oder verknüpft einen Schnittpfad mit dem zugehörigen Element.

> [!NOTE]
> Als Präsentationsattribut hat `clip-path` auch ein entsprechendes CSS-Eigenschaft: {{cssxref("clip-path")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('g')}}
- {{SVGElement('image')}}
- {{SVGElement('line')}}
- {{SVGElement('marker')}}
- {{SVGElement('mask')}}
- {{SVGElement('path')}}
- {{SVGElement('pattern')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('symbol')}}
- {{SVGElement('text')}}
- {{SVGElement('use')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="myClip" clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".5" />
  </clipPath>

  <!-- Top-left: Apply a custom defined clipping path -->
  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="url(#myClip)" />

  <!-- Top-right: Apply a CSS basic shape on a fill-box
       geometry. This is the same as having a custom clipping
       path with a clipPathUnits set to objectBoundingBox -->
  <rect
    x="11"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() fill-box" />

  <!-- Bottom-left -->
  <rect
    x="1"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() stroke-box" />

  <!-- Bottom-right: Apply a CSS basic shape on a view-box
       geometry. This is the same as having a custom clipping
       path with a clipPathUnits set to userSpaceOnUse -->
  <rect
    x="11"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() view-box" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{CSSXref("url_value", "&lt;url&gt;")}} | [ {{cssxref('basic-shape')}} ||
        <code>&#x3C;geometry-box></code> ] | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- \<geometry-box>
  - : Eine zusätzliche Information, um festzulegen, wie eine {{cssxref('basic-shape')}} auf ein Element angewendet wird: `fill-box` gibt an, dass die Objektbegrenzungsbox verwendet werden soll; `stroke-box` weist darauf hin, dass die Objektbegrenzungsbox mit dem Strich erweitert verwendet wird; `view-box` gibt an, dass der nächste SVG-Ansichtsbereich als Referenzbox verwendet wird.

> [!NOTE]
> Für weitere Details zur `clip-path` Syntax, siehe die CSS-Eigenschaft {{cssxref('clip-path')}} Referenzseite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("clip-path")}} Eigenschaft
- [Einführung in CSS Clipping](/de/docs/Web/CSS/Guides/Masking/Clipping)
