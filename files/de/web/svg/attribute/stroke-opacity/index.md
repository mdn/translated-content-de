---
title: stroke-opacity
slug: Web/SVG/Attribute/stroke-opacity
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{SVGRef}}

Das Attribut **`stroke-opacity`** ist ein Präsentationsattribut, das die Opazität des Mal-Servers (_Farbe_, _Gradient_, _Muster_ usw.) definiert, der auf den Umriss einer Form angewendet wird.

> [!NOTE]
> Als Präsentationsattribut kann `stroke-opacity` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('stroke-opacity')}} für mehr Informationen.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Nutzungshinweise

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

Es ist wichtig zu wissen, dass der Umriss teilweise die Füllung einer Form überdeckt. Ein Umriss mit einer Opazität, die von `1` abweicht, zeigt teilweise die darunterliegende Füllung. Um diesen Effekt zu vermeiden, kann eine globale Opazität mit dem Attribut {{SVGAttr('opacity')}} angewendet werden oder der Umriss kann hinter die Füllung mit dem Attribut {{SVGAttr('paint-order')}} gelegt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

CSS-Eigenschaften:

- {{cssxref('stroke-opacity')}}
- {{cssxref('stroke')}}
- {{cssxref('opacity')}}
- {{cssxref('fill-opacity')}}

SVG-Attribute:

- {{SVGAttr("stroke")}}
- {{SVGAttr("opacity")}}
- {{SVGAttr("fill-opacity")}}
- {{SVGAttr("stop-opacity")}}
