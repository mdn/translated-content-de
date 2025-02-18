---
title: clip-path
slug: Web/SVG/Attribute/clip-path
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das Präsentationsattribut **`clip-path`** definiert oder verknüpft einen Clipping-Pfad mit dem zugehörigen Element.

> [!NOTE]
> Als Präsentationsattribut hat `clip-path` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("clip-path")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Zusätzliche Information, wie eine {{cssxref('basic-shape')}} auf ein Element angewendet wird: `fill-box` gibt an, dass die Objektumrahungsbox verwendet wird; `stroke-box` gibt an, dass die Objektumrahungsbox inklusive der Kontur verwendet wird; `view-box` gibt an, dass die nächstgelegene SVG-Ansichtsbox als Referenz verwendet wird.

> [!NOTE]
> Weitere Informationen zur `clip-path`-Syntax finden Sie auf der Referenzseite der CSS-Eigenschaft {{cssxref('clip-path')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{cssxref("clip-path")}}-Eigenschaft
