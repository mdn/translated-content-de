---
title: mask
slug: Web/SVG/Reference/Attribute/mask
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`mask`** Attribut ist ein Präsentationsattribut, das hauptsächlich verwendet wird, um ein gegebenes {{ SVGElement("mask") }} Element mit dem Element zu verbinden, zu dem das Attribut gehört.

> [!NOTE]
> Als Präsentationsattribut hat `mask` auch ein entsprechendes CSS-Property: {{cssxref("mask")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

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
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <mask id="myMask" maskContentUnits="objectBoundingBox">
    <rect fill="white" x="0" y="0" width="100%" height="100%" />
    <polygon
      fill="black"
      points="0.5,0.2 0.68,0.74 0.21,0.41 0.79,0.41 0.32,0.74" />
  </mask>

  <!--
  Punch a hole in a shape of a star inside the red circle,
  revealing the yellow circle underneath
  -->
  <circle cx="50" cy="50" r="20" fill="yellow" />
  <circle cx="50" cy="50" r="45" fill="red" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

Seit SVG2 wird das Attribut {{cssxref('mask')}} als CSS-Property definiert und ist eine Kurzform für viele andere Eigenschaften: {{cssxref('mask-image')}}, {{cssxref('mask-mode')}}, {{cssxref('mask-repeat')}}, {{cssxref('mask-position')}}, {{cssxref('mask-clip')}}, {{cssxref('mask-origin')}}, {{cssxref('mask-size')}} und {{cssxref('mask-composite')}}.

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe die CSS-Eigenschaft {{cssxref("mask")}}</td>
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("mask")}} Eigenschaft
