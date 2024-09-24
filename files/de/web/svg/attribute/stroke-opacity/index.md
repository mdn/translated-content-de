---
title: Strich-undurchsichtigkeit
slug: Web/SVG/Attribute/stroke-opacity
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{SVGRef}}

Das **`stroke-opacity`**-Attribut ist ein Präsentationsattribut, das die Deckkraft des Farbservers (_Farbe_, _Verlauf_, _Muster_ usw.) definiert, der auf den Strich einer Form angewendet wird.

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
  <!-- Standard Strich-undurchsichtigkeit: 1 -->
  <circle cx="5" cy="5" r="4" stroke="green" />

  <!-- Strich-undurchsichtigkeit als Zahl -->
  <circle cx="15" cy="5" r="4" stroke="green" stroke-opacity="0.7" />

  <!-- Strich-undurchsichtigkeit als Prozentsatz -->
  <circle cx="25" cy="5" r="4" stroke="green" stroke-opacity="50%" />

  <!-- Strich-undurchsichtigkeit als CSS-Eigenschaft -->
  <circle cx="35" cy="5" r="4" stroke="green" style="stroke-opacity: .3;" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Verwendungshinweise

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

Es ist wichtig zu wissen, dass der Strich teilweise die Füllung einer Form überdeckt. Ein Strich mit einer Undurchsichtigkeit ungleich `1` wird die darunterliegende Füllung teilweise sichtbar machen. Um diesen Effekt zu vermeiden, ist es möglich, eine globale Undurchsichtigkeit mit dem {{SVGAttr('opacity')}}-Attribut anzuwenden oder den Strich hinter der Füllung mit dem {{SVGAttr('paint-order')}}-Attribut anzuordnen.

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
