---
title: stroke-width
slug: Web/SVG/Attribute/stroke-width
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SVGRef}}

Das **`stroke-width`** Attribut ist ein Präsentationsattribut, das die Breite des Strichs definiert, der auf die Form angewendet werden soll. Es gilt für jedes SVG-Form- oder Textinhaltselement (siehe {{SVGAttr("stroke-width")}} für eine vollständige Liste), kann jedoch als vererbte Eigenschaft auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch den beabsichtigten Effekt auf Striche nachfolgender Elemente.

> [!NOTE]
> Als Präsentationsattribut kann `stroke-width` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('stroke-width')}} für mehr Informationen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
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
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Default stroke width: 1 -->
  <circle cx="5" cy="5" r="3" stroke="green" />

  <!-- Stroke width as a number -->
  <circle cx="15" cy="5" r="3" stroke="green" stroke-width="3" />

  <!-- Stroke width as a percentage -->
  <circle cx="25" cy="5" r="3" stroke="green" stroke-width="2%" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        > |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Ein prozentualer Wert wird immer als Prozentsatz der normalisierten Diagonallänge des {{SVGAttr('viewBox')}} berechnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
