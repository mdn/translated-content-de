---
title: stroke
slug: Web/SVG/Reference/Attribute/stroke
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`stroke`**-Attribut ist ein Präsentationsattribut, das die Farbe (_oder SVG-Malserver wie Verläufe oder Muster_) definiert, die zum Zeichnen der Kontur der Form verwendet wird.

> [!NOTE]
> Als Präsentationsattribut hat `stroke` auch ein entsprechendes CSS-Attribut: {{cssxref("stroke")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Beispiele

### Einfache Farb- und Gradientenkontur

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

Das Ergebnis ist wie folgt:

{{EmbedLiveSample("Basic color and gradient stroke", '100%', 200)}}

### `context-stroke` Beispiel

In diesem Beispiel definieren wir drei Formen mit {{SVGElement('path')}}-Elementen, die jeweils unterschiedliche `stroke`- und [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Farben haben. Wir definieren auch ein {{SVGElement('circle')}}-Element als Marker über das {{SVGElement('marker')}}-Element. Jede Form hat den Marker über die CSS-Eigenschaft `marker` angewendet.

Das {{SVGElement('circle')}}-Element hat `stroke="context-stroke"` und `fill="context-fill"` gesetzt. Da es als Marker im Kontext der Formen verwendet wird, bewirken diese Attribute, dass es die `fill`- und `stroke`-Werte des {{SVGElement('path')}}-Elements in jedem Fall erbt.

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

Das Ergebnis ist wie folgt:

{{EmbedLiveSample("`context-stroke` example", '100%', 220)}}

> [!NOTE]
> Elemente können auch `context-stroke` und `context-fill` verwenden, um `stroke`- und `fill`-Werte zu erben, wenn sie von {{SVGElement('use')}}-Elementen referenziert werden.

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint"
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
