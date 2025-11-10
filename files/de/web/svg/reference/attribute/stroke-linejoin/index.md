---
title: stroke-linejoin
slug: Web/SVG/Reference/Attribute/stroke-linejoin
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`stroke-linejoin`** Attribut ist ein Präsentationsattribut, das die Form definiert, die an den Ecken von Pfaden verwendet wird, wenn diese gestrichen werden.

> [!NOTE]
> Als Präsentationsattribut hat `stroke-linejoin` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("stroke-linejoin")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
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
<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
  <!--
  Upper left path:
  Effect of the "miter" value
  -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!--
  Center path:
  Effect of the "round" value
  -->
  <path
    d="M7,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  Upper right path:
  Effect of the "bevel" value
  -->
  <path
    d="M13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  Bottom left path:
  Effect of the "miter-clip" value
  with fallback to "miter" if not supported.
  -->
  <path
    d="M3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!--
  Bottom right path:
  Effect of the "arcs" value
  with fallback to "miter" if not supported.
  -->
  <path
    d="M9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <g id="highlight">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5.5" r="0.05" fill="pink" />
  </g>
  <use href="#highlight" x="6" />
  <use href="#highlight" x="12" />
  <use href="#highlight" x="2" y="6" />
  <use href="#highlight" x="8" y="6" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 400)}}

## Verwendungskontext

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>arcs</code> | <code>bevel</code> | <code>miter</code> |
        <code>miter-clip</code> | <code>round</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>miter</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

### arcs

> [!NOTE]
> Der `arcs` Wert wird noch nicht weitgehend unterstützt.

Der `arcs` Wert besagt, dass eine Bogenform verwendet wird, um Pfadsegmente zu verbinden. Die Bogenform entsteht, indem die äußeren Kanten des Strichs an der Verbindungsstelle mit Bögen verlängert werden, die die gleiche Krümmung wie die äußeren Kanten an der Verbindungsstelle aufweisen.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "arcs" value -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <g id="p">
    <path
      d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('arcs', '100%', 200)}}

### bevel

Der `bevel` Wert besagt, dass eine abgeschrägte Ecke verwendet wird, um Pfadsegmente zu verbinden.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "bevel" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('bevel', '100%', 200)}}

### miter

Der `miter` Wert besagt, dass eine scharfe Ecke verwendet wird, um Pfadsegmente zu verbinden. Die Ecke entsteht, indem die äußeren Kanten des Strichs an den Tangenten der Pfadsegmente verlängert werden, bis sie sich schneiden.

> [!NOTE]
> Wenn das {{SVGAttr('stroke-miterlimit')}} überschritten wird, fällt die Linienverbindung auf `bevel` zurück.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "miter" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- Effect of the "miter" value on a sharp angle
       where de default miter limit is exceeded -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- the following red dotted line show where
       the miter value falls back to the bevel value -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- the following pink lines highlight the position of the path for each stroke -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter', '100%', 200)}}

### miter-clip

> [!NOTE]
> Der `miter-clip` Wert wird noch nicht weitgehend unterstützt.

Der `miter-clip` Wert besagt, dass eine scharfe Ecke verwendet wird, um Pfadsegmente zu verbinden. Die Ecke entsteht, indem die äußeren Kanten des Strichs an den Tangenten der Pfadsegmente verlängert werden, bis sie sich schneiden.

Wird das {{SVGAttr('stroke-miterlimit')}} überschritten, wird das Gehrungsglied in einem Abstand abgeschnitten, der der Hälfte des Wertes von {{SVGAttr('stroke-miterlimit')}} multipliziert mit der Strichbreite vom Schnittpunkt der Pfadsegmente entspricht. Dies bietet eine bessere Darstellung als `miter` bei sehr scharfen Verbindungen oder im Falle einer Animation.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "miter-clip" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- Effect of the "miter-clip" value on a sharp angle
       where de default miter limit is exceeded -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- the following red dotted line show where the clip should happen -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- the following pink lines highlight the position of the path for each stroke -->
  <g>
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />

    <path
      d="M7,5 l0.75,-3 l0.75,3"
      stroke="pink"
      fill="none"
      stroke-width="0.025" />
    <circle cx="7" cy="5" r="0.05" fill="pink" />
    <circle cx="7.75" cy="2" r="0.05" fill="pink" />
    <circle cx="8.5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('miter-clip', '100%', 200)}}

### round

Der `round` Wert besagt, dass eine runde Ecke verwendet wird, um Pfadsegmente zu verbinden.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "round" value -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <g id="p">
    <path d="M1,5 l2,-3 l2,3" stroke="pink" fill="none" stroke-width="0.025" />
    <circle cx="1" cy="5" r="0.05" fill="pink" />
    <circle cx="3" cy="2" r="0.05" fill="pink" />
    <circle cx="5" cy="5" r="0.05" fill="pink" />
  </g>
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("stroke-linejoin")}} Eigenschaft
