---
title: fill-rule
slug: Web/SVG/Attribute/fill-rule
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`fill-rule`**-Attribut ist ein Präsentationsattribut, das den Algorithmus definiert, der verwendet wird, um den _inneren_ Teil einer Form zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut kann `fill-rule` als CSS-Eigenschaft verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Verwendungshinweise

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

Das `fill-rule`-Attribut bietet zwei Optionen, wie das Innere (d.h., der zu füllende Bereich) einer Form bestimmt wird:

### nonzero

Der Wert `nonzero` bestimmt das "Innersein" eines Punktes in der Form, indem ein Strahl von diesem Punkt aus in eine beliebige Richtung bis ins Unendliche gezogen wird und dann die Stellen untersucht werden, an denen ein Segment der Form den Strahl schneidet. Beginnend mit einem Zähler von Null, wird jedes Mal eins addiert, wenn ein Pfadsegment den Strahl von links nach rechts kreuzt, und jedes Mal eins subtrahiert, wenn ein Pfadsegment den Strahl von rechts nach links kreuzt. Nach dem Zählen der Kreuzungen, wenn das Ergebnis null ist, befindet sich der Punkt außerhalb des Pfades. Andernfalls liegt er innerhalb.

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

Der Wert `evenodd` bestimmt das "Innersein" eines Punktes in der Form, indem ein Strahl von diesem Punkt in eine beliebige Richtung bis ins Unendliche gezogen wird und die Anzahl der Pfadsegmente gezählt wird, die der Strahl von der gegebenen Form kreuzt. Wenn diese Zahl ungerade ist, liegt der Punkt innen; wenn gerade, liegt er außen.

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

## Siehe auch

- CSS {{cssxref("fill-rule")}} Eigenschaft
