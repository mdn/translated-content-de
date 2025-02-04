---
title: r
slug: Web/SVG/Attribute/r
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`r`**-Attribut definiert den Radius eines Kreises.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("circle")}}
- {{SVGElement("radialGradient")}}

Prozentsätze beziehen sich auf die normierte Diagonale des aktuellen SVG-Ansichtsfensters, die wie folgt berechnet wird: <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <radialGradient r="0" id="myGradient000">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="50%" id="myGradient050">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="100%" id="myGradient100">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="0" />
  <circle cx="150" cy="50" r="25" />
  <circle cx="250" cy="50" r="50" />

  <rect x="20" y="120" width="60" height="60" fill="url(#myGradient000)" />
  <rect x="120" y="120" width="60" height="60" fill="url(#myGradient050)" />
  <rect x="220" y="120" width="60" height="60" fill="url(#myGradient100)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## circle

Für {{SVGElement('circle')}} definiert `r` den Radius des Kreises und somit seine Größe. Mit einem Wert kleiner oder gleich null wird der Kreis überhaupt nicht gezeichnet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
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

> [!NOTE]
> Die Radiusgröße eines `<circle>` kann auch mit der {{cssxref("r")}} _Geometrie-Eigenschaft_ definiert werden.

## radialGradient

Für {{ SVGElement("radialGradient") }} definiert `r` den Radius des Endkreises für den radialen Verlauf.

Der Verlauf wird so gezeichnet, dass der **100%**-Verlaufspunkt dem Umfang dieses Endkreises zugeordnet wird. Ein Wert kleiner oder gleich null führt dazu, dass der Bereich als einheitliche Farbe unter Verwendung der Farbe und Deckkraft des letzten Verlaufs-{{ SVGElement("stop") }} gemalt wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</
