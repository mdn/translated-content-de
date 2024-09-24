---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{SVGRef}}

Das **`stroke-dashoffset`** Attribut ist ein Präsentationsattribut, das einen Versatz bei der Darstellung des zugehörigen Strichmusters definiert.

> [!NOTE]
> Als Präsentationsattribut kann `stroke-dashoffset` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('stroke-dashoffset')}} für mehr Informationen.

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
  <!-- Kein Strichmuster -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- Kein Strich-Versatz -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!--
  Der Beginn der Berechnung des Strichmusters
  wird um 3 Benutzereinheiten gezogen
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
  Der Beginn der Berechnung des Strichmusters
  wird um 3 Benutzereinheiten verschoben
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
  Der Beginn der Berechnung des Strichmusters
  wird um 1 Benutzereinheit gezogen, was
  zur gleichen Darstellung wie im vorherigen Beispiel führt
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
  Die folgenden roten Linien heben den
  Versatz des Strichmusters für jede Linie hervor
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgb(255 0 0 / 50%)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Nutzungs-hinweise

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

Der Versatz wird normalerweise in Benutzereinheiten ausgedrückt, die in Bezug auf die {{SVGAttr('pathLength')}} aufgelöst werden. Wird jedoch ein [\<percentage>](/de/docs/Web/SVG/Content_type#percentage) verwendet, wird der Wert als Prozentsatz des aktuellen Ansichtsfensters aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
