---
title: fill
slug: Web/SVG/Reference/Attribute/fill
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Attribut **`fill`** hat zwei unterschiedliche Bedeutungen. Bei Formen und Text ist es ein Präsentationsattribut, das die Farbe (_oder eine andere SVG-Farbquelle wie einen Farbverlauf oder ein Muster_) festlegt, mit der das Element gezeichnet wird. Bei Animationen legt es den Endzustand der Animation fest.

> [!NOTE]
> Wenn `fill` als Präsentationsattribut verwendet wird, gibt es auch eine entsprechende CSS-Eigenschaft: {{cssxref("fill")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

Mit dem SVG-Attribut `fill` kann der Endzustand einer Animation für die folgenden SVG-Elemente festgelegt werden:

- {{SVGElement('animate')}}
- {{SVGElement('animateMotion')}}
- {{SVGElement('animateTransform')}}
- {{SVGElement('set')}}.

## Beispiele

### Einfache Farb- und Verlaufsfüllungen sowie Animation

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

### Beispiel für `context-fill`

In diesem Beispiel definieren wir drei Formen mit {{SVGElement('path')}}-Elementen, für die jeweils unterschiedliche Farben für [`stroke`](/de/docs/Web/SVG/Reference/Attribute/stroke) und `fill` festgelegt sind. Außerdem definieren wir mithilfe des {{SVGElement('marker')}}-Elements ein {{SVGElement('circle')}}-Element als Markierung. Die Markierung wird über die CSS-Eigenschaft `marker` auf jede Form angewendet.

Für das {{SVGElement('circle')}}-Element sind `stroke="context-stroke"` und `fill="context-fill"` festgelegt. Da es als Markierung im Kontext der Formen verwendet wird, bewirken diese Attribute, dass es jeweils die für das {{SVGElement('path')}}-Element festgelegten Werte für `fill` und `stroke` übernimmt.

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

Die Ausgabe sieht wie folgt aus:

{{EmbedLiveSample("context-fill_example", '100%', 220)}}

> [!NOTE]
> Elemente können auch `context-stroke` und `context-fill` verwenden, um Werte für `stroke` und `fill` zu übernehmen, wenn sie von {{SVGElement('use')}}-Elementen referenziert werden.

## animate

Für {{SVGElement('animate')}} legt `fill` den Endzustand der Animation fest.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Zustand des letzten Animationsframes beibehalten</em
        >) | <code>remove</code> (<em
          >Zustand des ersten Animationsframes beibehalten</em
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

Für {{SVGElement('animateMotion')}} legt `fill` den Endzustand der Animation fest.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Zustand des letzten Animationsframes beibehalten</em
        >) | <code>remove</code> (<em
          >Zustand des ersten Animationsframes beibehalten</em
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

Für {{SVGElement('animateTransform')}} legt `fill` den Endzustand der Animation fest.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Zustand des letzten Animationsframes beibehalten</em
        >) | <code>remove</code> (<em
          >Zustand des ersten Animationsframes beibehalten</em
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

Für {{SVGElement('circle')}} ist `fill` ein Präsentationsattribut, das die Farbe des Kreises festlegt.

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

Für {{SVGElement('ellipse')}} ist `fill` ein Präsentationsattribut, das die Farbe der Ellipse festlegt.

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

Für {{SVGElement('path')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form festlegt. (_Das Innere wird durch das Attribut {{SVGAttr('fill-rule')}} oder die Eigenschaft {{cssxref("fill-rule")}} bestimmt._)

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

Für {{SVGElement('polygon')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form festlegt. (_Das Innere wird durch das Attribut {{SVGAttr('fill-rule')}} oder die Eigenschaft {{cssxref("fill-rule")}} bestimmt._)

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

Für {{SVGElement('polyline')}} ist `fill` ein Präsentationsattribut, das die Farbe des Inneren der Form festlegt. (_Das Innere wird durch das Attribut {{SVGAttr('fill-rule')}} oder die Eigenschaft {{cssxref("fill-rule")}} bestimmt._)

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

Für {{SVGElement('rect')}} ist `fill` ein Präsentationsattribut, das die Farbe des Rechtecks festlegt.

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

Für {{SVGElement('set')}} legt `fill` den Endzustand der Animation fest.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>freeze</code> (<em>Zustand des letzten Animationsframes beibehalten</em
        >) | <code>remove</code> (<em
          >Zustand des ersten Animationsframes beibehalten</em
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

Für {{SVGElement('text')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes festlegt.

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

Für {{SVGElement('textPath')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes festlegt.

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

Für {{SVGElement('tspan')}} ist `fill` ein Präsentationsattribut, das die Farbe des Textes festlegt.

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

- CSS-Eigenschaft {{cssxref("fill")}}
