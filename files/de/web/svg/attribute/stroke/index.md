---
title: stroke
slug: Web/SVG/Attribute/stroke
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`stroke`** Attribut ist ein Präsentationsattribut, das die Farbe (_oder alle SVG-Farbserver wie Verlaufs- oder Musterfüllungen_) definiert, mit der die Kontur der Form gemalt wird.

> [!NOTE]
> Als Präsentationsattribut kann `stroke` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('stroke')}} für mehr Informationen.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Beispiele

### Grundlegender Farb- und Verlaufskontur

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Basic color stroke -->
  <circle cx="5" cy="5" r="4" fill="none" stroke="green" />

  <!-- Stroke a circle with a gradient -->
  <defs>
    <linearGradient id="myGradient">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>

  <circle cx="15" cy="5" r="4" fill="none" stroke="url(#myGradient)" />
</svg>
```

Die Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample("Basic color and gradient stroke", '100%', 200)}}

### `context-stroke` Beispiel

In diesem Beispiel definieren wir drei Formen mittels {{SVGElement('path')}}-Elementen, jeweils mit einer unterschiedlichen `stroke`- und [`fill`](/de/docs/Web/SVG/Attribute/fill)-Farbe. Wir definieren auch ein {{SVGElement('circle')}}-Element als Marker über das {{SVGElement('marker')}}-Element. Jede Form hat den Marker über die `marker` CSS-Eigenschaft angewendet.

Das {{SVGElement('circle')}}-Element hat `stroke="context-stroke"` und `fill="context-fill"` gesetzt. Da es als Marker im Kontext der Formen gesetzt wird, bewirken diese Attribute, dass es die `fill`- und `stroke`-Werte von dem {{SVGElement('path')}} Element erbt.

```html-nolint
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <style>
    path {
      stroke-width: 2px;
      marker: url(#circle);
    }
  </style>
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z"
        stroke="red" fill="orange" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z"
        stroke="green" fill="lightgreen" />
  <path d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z"
        stroke="blue" fill="lightblue" />
  <marker id="circle" markerWidth="12" markerHeight="12"
          refX="6" refY="6" markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2"
            stroke="context-stroke" fill="context-fill"  />
  </marker>
</svg>
```

Die Ausgabe sieht folgendermaßen aus:

{{EmbedLiveSample("`context-stroke` example", '100%', 220)}}

> [!NOTE]
> Elemente können auch `context-stroke` und `context-fill` verwenden, um `stroke`- und `fill`-Werte zu erben, wenn sie durch {{SVGElement('use')}}-Elemente referenziert werden.

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint"
            >&#x3C;paint></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stroke")}} Eigenschaft
