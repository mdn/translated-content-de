---
title: stroke-width
slug: Web/SVG/Reference/Attribute/stroke-width
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`stroke-width`** Attribut ist ein Präsentationsattribut, das die Breite des Striches definiert, der auf die Form angewendet wird. Es gilt für jedes SVG-Form- oder Textinhaltselement, aber als vererbbares Attribut kann es auf Elemente wie {{SVGElement("g")}} angewendet werden und hat dennoch den gewünschten Effekt auf die Striche der untergeordneten Elemente.

> [!NOTE]
> Als Präsentationsattribut hat `stroke-width` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("stroke-width")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Hinweise zur Nutzung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        > |
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#percentage"
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
> Ein Prozentwert wird immer als Prozentsatz der normalisierten Diagonallänge des {{SVGAttr('viewBox')}} berechnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stroke-width")}} Eigenschaft
