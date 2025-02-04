---
title: clip-path
slug: Web/SVG/Attribute/clip-path
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das Präsentationsattribut **`clip-path`** definiert oder verbindet einen Clipping-Pfad mit dem Element, auf das es sich bezieht.

> [!NOTE]
> Als Präsentationsattribut kann `clip-path` als CSS-Eigenschaft verwendet werden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('g')}}
- {{SVGElement('glyph')}}
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

## Anwendungshinweise

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
  - : Zusätzliche Informationen, um anzugeben, wie eine {{cssxref('basic-shape')}} auf ein Element angewendet wird: `fill-box` gibt an, dass die Begrenzungsbox des Objekts verwendet wird; `stroke-box` gibt an, dass die Begrenzungsbox des Objekts, erweitert um den Strich, verwendet wird; `view-box` gibt an, dass der nächstgelegene SVG-Ansichtsbereich als Referenzbox verwendet wird.

> [!NOTE]
> Weitere Details zur clip-path-Syntax finden Sie auf der CSS-Eigenschaftsreferenzseite {{cssxref('clip-path')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("clip-path")}} Eigenschaft
