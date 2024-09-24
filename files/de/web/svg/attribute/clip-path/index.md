---
title: clip-path
slug: Web/SVG/Attribute/clip-path
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`clip-path`** Präsentationsattribut definiert oder verknüpft einen Clipping-Pfad mit dem damit verbundenen Element.

> [!NOTE]
> Als Präsentationsattribut kann `clip-path` als CSS-Eigenschaft verwendet werden.

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

  <!-- Oben links: Ein benutzerdefinierter Clipping-Pfad anwenden -->
  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="url(#myClip)" />

  <!-- Oben rechts: Eine CSS-Basisform auf eine Füllbox-Geometrie anwenden. Dies entspricht einem benutzerdefinierten Clipping-Pfad mit clipPathUnits auf objectBoundingBox-->
  <rect
    x="11"
    y="1"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() fill-box" />

  <!-- Unten links -->
  <rect
    x="1"
    y="11"
    width="8"
    height="8"
    stroke="green"
    clip-path="circle() stroke-box" />

  <!-- Unten rechts: Eine CSS-Basisform auf eine Ansichtsbox-Geometrie anwenden. Dies entspricht einem benutzerdefinierten Clipping-Pfad mit clipPathUnits auf userSpaceOnUse-->
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
        {{cssxref('url')}} | [ {{cssxref('basic-shape')}} ||
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
  - : Zusätzliche Information, wie eine {{cssxref('basic-shape')}} auf ein Element angewendet wird: `fill-box` weist darauf hin, die Objektbegrenzungsbox zu verwenden; `stroke-box` weist darauf hin, die der Objektbegrenzungsbox mit der Umrandung zu verwenden; `view-box` weist darauf hin, die nächstgelegene SVG-Ansichtsbox als Referenzbox zu verwenden.

> [!NOTE]
> Weitere Details zur clip-path-Syntax finden Sie auf der CSS-Eigenschaftsseite {{cssxref('clip-path')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS {{cssxref("clip-path")}} Eigenschaft
