---
title: fill
slug: Web/SVG/Attribute/fill
l10n:
  sourceCommit: 2f79d932a2ce13bf728462491c44ef13c299f390
---

{{SVGRef}}

Das **`fill`**-Attribut hat zwei unterschiedliche Bedeutungen. Für Formen und Text ist es ein Präsentationsattribut, das die Farbe (_oder jeden SVG-Malfarbspeicher wie Verlaufsfarben oder Muster_) definiert, mit der das Element gefärbt wird; für Animationen definiert es den Endzustand der Animation.

Das SVG-Präsentationsattribut `fill` und die CSS-{{cssxref("fill")}}-Eigenschaft können mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

Das SVG-`fill`-Attribut kann verwendet werden, um den finalen Animationszustand bei den folgenden SVG-Elementen zu definieren:

- {{SVGElement('animate')}}
- {{SVGElement('animateMotion')}}
- {{SVGElement('animateTransform')}}
- {{SVGElement('set')}}.

## Beispiele

### Grundlegende Farb- und Verlaufsfüllungen sowie Animationen

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple color fill -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- Fill circle with a gradient -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!--
  Keeping the final state of an animated circle
  which is a circle with a radius of 40.
  -->
  <circle cx="250" cy="50" r="20">
    <animate
      attributeType="XML"
      attributeName="r"
      from="0"
      to="40"
      dur="5s"
      fill="freeze" />
  </circle>
</svg>
```

{{EmbedLiveSample("Grundlegende Farb- und Verlaufsfüllungen sowie Animationen", '100%', 200)}}

### `context-fill` Beispiel

In diesem Beispiel definieren wir drei Formen mit {{SVGElement('path')}}-Elementen, jedes mit einem unterschiedlichen [`stroke`](/de/docs/Web/SVG/Attribute/stroke)- und `fill`-Farbensatz. Wir definieren auch ein {{SVGElement('circle')}}-Element als Marker über das {{SVGElement('marker')}}-Element. Jede Form hat den Marker über die `marker`-CSS-Eigenschaft angewendet.

Das {{SVGElement('circle')}} hat `stroke="context-stroke"` und `fill="context-fill"` auf sich gesetzt. Da es im Kontext der Formen als Marker gesetzt wird, bewirken diese Attribute, dass es den `fill` und `stroke` übernimmt, die auf dem jeweiligen {{SVGElement('path')}}-Element gesetzt sind.

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

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("`context-stroke` Beispiel", '100%', 220)}}

> [!NOTE]
> Elemente können auch `context-stroke` und `context-fill` verwenden, um `stroke`- und `fill`-Werte zu erben, wenn sie von {{SVGElement('use')}}-Elementen referenziert werden.

## animate

Für {{SVGElement('animate')}} definiert `fill` den Endzustand der Animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Halten Sie den Zustand des letzten Animationsrahmens</em
        >) | <code>remove</code> (<em
          >Halten Sie den Zustand des ersten Animationsrahmens</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## animateMotion

Für {{SVGElement('animateMotion')}} definiert `fill` den Endzustand der Animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Halten Sie den Zustand des letzten Animationsrahmens</em
        >) | <code>remove</code> (<em
          >Halten Sie den Zustand des ersten Animationsrahmens</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## animateTransform

Für {{SVGElement('animateTransform')}} definiert `fill` den Endzustand der Animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Halten Sie den Zustand des letzten Animationsrahmens</em
        >) | <code>remove</code> (<em
          >Halten Sie den Zustand des ersten Animationsrahmens</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## circle

Für {{SVGElement('circle')}} ist `fill` ein Präsentationsattribut, das die Farbe des Kreises definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## ellipse

Für {{SVGElement('ellipse')}} ist `fill` ein Präsentationsattribut, das die Farbe der Ellipse definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## path

Für {{SVGElement('path')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form definiert. (_Das Innere wird durch das {{SVGAttr('fill-rule')}}-Attribut oder die {{cssxref("fill-rule")}}-Eigenschaft definiert._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## polygon

Für {{SVGElement('polygon')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form definiert. (_Das Innere wird durch das {{SVGAttr('fill-rule')}}-Attribut oder die {{cssxref("fill-rule")}}-Eigenschaft definiert._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## polyline

Für {{SVGElement('polyline')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form definiert. (_Das Innere wird durch das {{SVGAttr('fill-rule')}}-Attribut oder die {{cssxref("fill-rule")}}-Eigenschaft definiert._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## rect

Für {{SVGElement('rect')}} ist `fill` ein Präsentationsattribut, das die Farbe des Rechtecks definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## set

Für {{SVGElement('set')}} definiert `fill` den Endzustand der Animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Halten Sie den Zustand des letzten Animationsrahmens</em
        >) | <code>remove</code> (<em
          >Halten Sie den Zustand des ersten Animationsrahmens</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## text

Für {{SVGElement('text')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## textPath

Für {{SVGElement('textPath')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## tref

> [!WARNING]
> Ab SVG2 ist {{SVGElement('tref')}} veraltet und sollte nicht verwendet werden.

Für {{SVGElement('tref')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## tspan

Für {{SVGElement('tspan')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Als Präsentationsattribut kann `fill` als CSS-Eigenschaft genutzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
