---
title: fill
slug: Web/SVG/Reference/Attribute/fill
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Das **`fill`**-Attribut hat zwei verschiedene Bedeutungen. Für Formen und Text ist es ein Präsentationsattribut, das die Farbe (_oder andere SVG-Farbgeber wie Verlaufsfarben oder Muster_) definiert, die verwendet wird, um das Element zu färben; für Animationen definiert es den Endzustand der Animation.

> [!NOTE]
> Wenn `fill` als Präsentationsattribut verwendet wird, gibt es auch ein entsprechendes CSS-Eigenschaft: {{cssxref("fill")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Das SVG-Präsentationsattribut `fill` und die CSS-Eigenschaft {{cssxref("fill")}} können mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tspan')}}

Das SVG `fill`-Attribut kann verwendet werden, um den finalen Animationszustand mit den folgenden SVG-Elementen zu definieren:

- {{SVGElement('animate')}}
- {{SVGElement('animateMotion')}}
- {{SVGElement('animateTransform')}}
- {{SVGElement('set')}}.

## Beispiele

### Grundlegende Farb- und Verlaufsfüllungen sowie Animation

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Basic color fill -->
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

{{EmbedLiveSample("Basic color and gradient fills, and animation", '100%', 200)}}

### `context-fill` Beispiel

In diesem Beispiel definieren wir drei Formen mit {{SVGElement('path')}}-Elementen, die jeweils eine unterschiedliche [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke) und `fill`-Farbe haben. Wir definieren auch ein {{SVGElement('circle')}}-Element als Marker über das {{SVGElement('marker')}}-Element. Jede Form hat den Marker über die `marker` CSS-Eigenschaft angewendet.

Das {{SVGElement('circle')}}-Element hat `stroke="context-stroke"` und `fill="context-fill"` darauf gesetzt. Da es im Kontext der Formen als Marker gesetzt wird, bewirken diese Attribute, dass es die `fill` und `stroke`, die auf das {{SVGElement('path')}}-Element gesetzt sind, in jedem Fall erbt.

```html-nolint
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <style>
    path {
      stroke-width: 2px;
      marker: url("#circle");
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

{{EmbedLiveSample("`context-stroke` example", '100%', 220)}}

> [!NOTE]
> Elemente können auch `context-stroke` und `context-fill` verwenden, um `stroke`- und `fill`-Werte zu erben, wenn sie von {{SVGElement('use')}}-Elementen referenziert werden.

## animate

Für {{SVGElement('animate')}} definiert `fill` den finalen Zustand der Animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Behält den Zustand des letzten Animationsbilds bei</em
        >) | <code>remove</code> (<em
          >Behält den Zustand des ersten Animationsbilds bei</em
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

Für {{SVGElement('animateMotion')}} definiert `fill` den finalen Zustand der Animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Behält den Zustand des letzten Animationsbilds bei</em
        >) | <code>remove</code> (<em
          >Behält den Zustand des ersten Animationsbilds bei</em
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

Für {{SVGElement('animateTransform')}} definiert `fill` den finalen Zustand der Animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Behält den Zustand des letzten Animationsbilds bei</em
        >) | <code>remove</code> (<em
          >Behält den Zustand des ersten Animationsbilds bei</em
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
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## ellipse

Für {{SVGElement('ellipse')}} ist `fill` ein Präsentationsattribut, das die Farbe der Ellipse definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## path

Für {{SVGElement('path')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form definiert. (_Das Innere wird durch das {{SVGAttr('fill-rule')}}-Attribut oder die {{cssxref("fill-rule")}}-Eigenschaft definiert._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## polygon

Für {{SVGElement('polygon')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form definiert. (_Das Innere wird durch das {{SVGAttr('fill-rule')}}-Attribut oder die {{cssxref("fill-rule")}}-Eigenschaft definiert._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## polyline

Für {{SVGElement('polyline')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form definiert. (_Das Innere wird durch das {{SVGAttr('fill-rule')}}-Attribut oder die {{cssxref("fill-rule")}}-Eigenschaft definiert._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## rect

Für {{SVGElement('rect')}} ist `fill` ein Präsentationsattribut, das die Farbe des Rechtecks definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## set

Für {{SVGElement('set')}} definiert `fill` den finalen Zustand der Animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Behält den Zustand des letzten Animationsbilds bei</em
        >) | <code>remove</code> (<em
          >Behält den Zustand des ersten Animationsbilds bei</em
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
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## textPath

Für {{SVGElement('textPath')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## tspan

Für {{SVGElement('tspan')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes definiert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#paint">&#x3C;paint></a></strong
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("fill")}} Eigenschaft
