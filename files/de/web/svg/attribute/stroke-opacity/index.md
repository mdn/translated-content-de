---
title: stroke-opacity
slug: Web/SVG/Attribute/stroke-opacity
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`stroke-opacity`**-Attribut ist ein Präsentationsattribut, das die Deckkraft des Farbsystems (_color_, _gradient_, _pattern_ etc.) definiert, das auf den Umriss einer Form angewendet wird.

> [!NOTE]
> Als Präsentationsattribut hat `stroke-opacity` auch ein entsprechendes CSS-Attribut: {{cssxref("stroke-opacity")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

Es ist wichtig zu wissen, dass der Umriss (stroke) teilweise die Füllung einer Form überdeckt. Ein Umriss mit einer Deckkraft ungleich `1` zeigt daher teilweise die darunterliegende Füllung. Um diesen Effekt zu vermeiden, kann entweder eine globale Deckkraft mit dem {{SVGAttr('opacity')}}-Attribut angewendet werden oder der Umriss hinter der Füllung angeordnet werden, indem das Attribut {{SVGAttr('paint-order')}} verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stroke-opacity")}}-Eigenschaft
