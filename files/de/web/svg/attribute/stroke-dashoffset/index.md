---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`stroke-dashoffset`**-Attribut ist ein Präsentationsattribut, das einen Versatz bei der Darstellung des verbundenen Strichmusters definiert.

> [!NOTE]
> Als Präsentationsattribut hat `stroke-dashoffset` auch ein CSS-Entsprechung: {{cssxref("stroke-dashoffset")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- No dash array -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- No dash offset -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!--
  The start of the dash array computation
  is pulled by 3 user units
  -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!--
  The start of the dash array computation
  is pushed by 3 user units
  -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!--
  The start of the dash array computation
  is pulled by 1 user units which ends up
  in the same rendering as the previous example
  -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!--
  the following red lines highlight the
  offset of the dash array for each line
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgb(255 0 0 / 50%)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Der Versatz wird normalerweise in Benutzereinheiten ausgedrückt, die sich auf die {{SVGAttr('pathLength')}} beziehen. Wenn jedoch ein [\<percentage>](/de/docs/Web/SVG/Content_type#percentage) verwendet wird, wird der Wert als Prozentsatz des aktuellen Ansichtsfensters berechnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stroke-dashoffset")}} Eigenschaft
