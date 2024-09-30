---
title: fill-rule
slug: Web/SVG/Attribute/fill-rule
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`fill-rule`**-Attribut ist ein Präsentationsattribut, das den Algorithmus definiert, der verwendet wird, um den _innen_ liegenden Teil einer Form zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut kann `fill-rule` als CSS-Eigenschaft verwendet werden.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
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
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Default value for fill-rule -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  The center of the shape has two
  path segments (shown by the red stroke)
  between it and infinity. It is therefore
  considered outside the shape, and not filled.
  -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>nonzero</code> | <code>evenodd</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>nonzero</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

Das `fill-rule`-Attribut bietet zwei Optionen, um zu bestimmen, wie das Innere (d. h. der zu füllende Bereich) einer Form ermittelt wird:

### nonzero

Der Wert `nonzero` bestimmt die „Innigkeit“ eines Punktes in der Form, indem von diesem Punkt aus ein Strahl in unendliche Richtung gezeichnet und die Stellen untersucht werden, an denen ein Segment der Form den Strahl kreuzt. Beginnend mit einem Zählwert von null, wird eins hinzugefügt, jedes Mal wenn ein Pfadsegment den Strahl von links nach rechts kreuzt und eins abgezogen, jedes Mal wenn ein Pfadsegment den Strahl von rechts nach links kreuzt. Nach dem Zählen der Kreuzungen, wenn das Ergebnis null ist, liegt der Punkt außerhalb des Pfades. Andernfalls liegt er innerhalb.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of nonzero fill rule on crossing path segments -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Effect of nonzero fill rule on a shape inside a shape
  with the path segment moving in the same direction
  (both squares drawn clockwise, to the "right")
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  Effect of nonzero fill rule on a shape inside a shape
  with the path segment moving in the opposite direction
  (one square drawn clockwise, the other anti-clockwise)
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('nonzero', '100%', 200)}}

### evenodd

Der Wert `evenodd` bestimmt die „Innigkeit“ eines Punktes in der Form, indem von diesem Punkt aus ein Strahl in unendliche Richtung gezeichnet wird und die Anzahl der Pfadsegmente der gegebenen Form gezählt wird, die der Strahl kreuzt. Ist diese Anzahl ungerade, liegt der Punkt innerhalb; ist sie gerade, liegt der Punkt außerhalb.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of evenodd fill rule on crossing path segments -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  Effect of evenodd fill rule on a shape inside a shape
  with the path segment moving in the same direction
  (both squares drawn clockwise, to the "right")
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  Effect of evenodd fill rule on a shape inside a shape
  with the path segment moving in opposite direction
  (one square drawn clockwise, the other anti-clockwise)
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('evenodd', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
