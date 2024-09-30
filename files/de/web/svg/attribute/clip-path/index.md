---
title: clip-path
slug: Web/SVG/Attribute/clip-path
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das Präsentationsattribut **`clip-path`** definiert oder verknüpft einen Clipping-Pfad mit dem damit verbundenen Element.

> [!NOTE]
> Als Präsentationsattribut kann `clip-path` auch als CSS-Eigenschaft verwendet werden.

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

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref('url')}} | [{{cssxref('basic-shape')}} ||
        <code>&#x3C;geometry-box></code>] | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- \<geometry-box>
  - : Eine zusätzliche Information, wie eine {{cssxref('basic-shape')}} auf ein Element angewendet wird: `fill-box` gibt an, den Objektbegrenzungsrahmen zu verwenden; `stroke-box` gibt an, den mit dem Rand erweiterten Objektbegrenzungsrahmen zu verwenden; `view-box` gibt an, den nächstgelegenen SVG-Viewport als Referenzrahmen zu verwenden.

> [!NOTE]
> Für weitere Details zur clip-path-Syntax, siehe die CSS-Eigenschaftsreferenzseite {{cssxref('clip-path')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS-Eigenschaft {{cssxref("clip-path")}}
