---
title: stroke-opacity
slug: Web/SVG/Reference/Attribute/stroke-opacity
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das Attribut **`stroke-opacity`** ist ein Präsentationsattribut, das die Opazität des Farbsensors (_Farbe_, _Verlauf_, _Muster_ usw.) definiert, der auf den Umriss einer Form angewendet wird.

> [!NOTE]
> Als Präsentationsattribut hat `stroke-opacity` auch ein entsprechendes CSS-Attribut: {{cssxref("stroke-opacity")}}. Wenn beide angegeben sind, hat das CSS-Attribut Vorrang.

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

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>[0-1]</code> |
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint"
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

Es ist wichtig zu wissen, dass der Umriss teilweise die Füllung einer Form überdeckt. Ein Umriss mit einer Opazität ungleich `1` wird die darunterliegende Füllung teilweise sichtbar machen. Um diesen Effekt zu vermeiden, kann eine globale Opazität mit dem {{SVGAttr('opacity')}}-Attribut angewendet werden oder der Umriss hinter der Füllung mit dem {{SVGAttr('paint-order')}}-Attribut platziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stroke-opacity")}} Eigenschaft
