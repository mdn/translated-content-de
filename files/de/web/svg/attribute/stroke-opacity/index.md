---
title: stroke-opacity
slug: Web/SVG/Attribute/stroke-opacity
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{SVGRef}}

Das **`stroke-opacity`** Attribut ist ein Präsentationsattribut, das die Deckkraft des Farbgebers (_Farbe_, _Verlauf_, _Muster_ usw.) definiert, der auf den Rand einer Form angewendet wird.

> [!NOTE]
> Als Präsentationsattribut kann `stroke-opacity` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('stroke-opacity')}} für mehr Informationen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 40 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Default stroke opacity: 1 -->
  <circle cx="5" cy="5" r="4" stroke="green" />

  <!-- Stroke opacity as a number -->
  <circle cx="15" cy="5" r="4" stroke="green" stroke-opacity="0.7" />

  <!-- Stroke opacity as a percentage -->
  <circle cx="25" cy="5" r="4" stroke="green" stroke-opacity="50%" />

  <!-- Stroke opacity as a CSS property -->
  <circle cx="35" cy="5" r="4" stroke="green" style="stroke-opacity: .3;" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Hinweise zur Nutzung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Es ist wichtig zu wissen, dass der Rand teilweise die Füllung einer Form überdeckt. Ein Rand mit einer Deckkraft ungleich `1` wird die darunterliegende Füllung teilweise sichtbar machen. Um diesen Effekt zu vermeiden, kann eine globale Deckkraft mit dem {{SVGAttr('opacity')}} Attribut angewendet oder der Rand hinter die Füllung mit dem {{SVGAttr('paint-order')}} Attribut verschoben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS Eigenschaften:

- {{cssxref('stroke-opacity')}}
- {{cssxref('stroke')}}
- {{cssxref('opacity')}}
- {{cssxref('fill-opacity')}}

SVG Attribute:

- {{SVGAttr("stroke")}}
- {{SVGAttr("opacity")}}
- {{SVGAttr("fill-opacity")}}
- {{SVGAttr("stop-opacity")}}
