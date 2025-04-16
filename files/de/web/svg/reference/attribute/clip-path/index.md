---
title: clip-path
slug: Web/SVG/Reference/Attribute/clip-path
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`clip-path`** Präsentationsattribut definiert oder verbindet einen Clipping-Pfad mit dem jeweiligen Element.

> [!NOTE]
> Als Präsentationsattribut hat `clip-path` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("clip-path")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Hinweise zur Verwendung

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
  - : Zusätzliche Information, um anzugeben, wie eine {{cssxref('basic-shape')}} auf ein Element angewendet wird: `fill-box` gibt an, die Objektbegrenzungsbox zu verwenden; `stroke-box` gibt an, die Objektbegrenzungsbox erweitert um den Strich zu verwenden; `view-box` gibt an, den nächstgelegenen SVG-Viewport als Referenzbox zu verwenden.

> [!NOTE]
> Für mehr Details zur clip-path Syntax siehe die CSS-Eigenschaftsreferenzseite {{cssxref('clip-path')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("clip-path")}} Eigenschaft
