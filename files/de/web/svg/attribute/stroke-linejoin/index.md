---
title: stroke-linejoin
slug: Web/SVG/Attribute/stroke-linejoin
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{SVGRef}}

Das **`stroke-linejoin`** Attribut ist ein Präsentationsattribut, das die Form definiert, die an den Ecken von Pfaden verwendet wird, wenn diese gestrichen werden.

> [!NOTE]
> Als Präsentationsattribut kann `stroke-linejoin` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('stroke-linejoin')}} für mehr.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('path')}}
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
<svg viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
  <!--
  Obere linke Pfad:
  Effekt des "miter"-Wertes
  -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!--
  Mitte Pfad:
  Effekt des "round"-Wertes
  -->
  <path
    d="M7,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  Obere rechte Pfad:
  Effekt des "bevel"-Wertes
  -->
  <path
    d="M13,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  Untere linke Pfad:
  Effekt des "miter-clip"-Wertes
  mit Fallback zu "miter", wenn nicht unterstützt.
  -->
  <path
    d="M3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!--
  Untere rechte Pfad:
  Effekt des "arcs"-Wertes
  mit Fallback zu "miter", wenn nicht unterstützt.
  -->
  <path
    d="M9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  die folgenden rosa Linien heben die
  Position des Pfades für jeden Strich hervor
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

## Nutzungskontext

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>arcs</code> | <code>bevel</code> |<code>miter</code> |
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
> Der `arcs`-Wert wurde in SVG2 eingeführt und wird noch nicht weit verbreitet unterstützt. Siehe unten [Browserkompatibilität](#browser-kompatibilität) für Details.

Der `arcs`-Wert gibt an, dass eine Bogenverbindung verwendet werden soll, um Pfadsegmente zu verbinden. Die Bogenform entsteht, indem die äußeren Kanten des Strichs an der Verbindungsstelle mit Bögen verlängert werden, die dieselbe Krümmung haben wie die äußeren Kanten an der Verbindungsstelle.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des "arcs"-Wertes -->
  <path
    d="M1,5 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="arcs" />

  <!--
  die folgenden rosa Linien heben die
  Position des Pfades für jeden Strich hervor
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

Der `bevel`-Wert gibt an, dass eine abgeschrägte Ecke verwendet werden soll, um Pfadsegmente zu verbinden.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des "bevel"-Wertes -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="bevel" />

  <!--
  die folgenden rosa Linien heben die
  Position des Pfades für jeden Strich hervor
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

Der `miter`-Wert gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke wird gebildet, indem die äußeren Kanten des Strichs an den Tangenten der Pfadsegmente verlängert werden, bis sie sich schneiden.

> [!NOTE]
> Wenn das {{SVGAttr('stroke-miterlimit')}} überschritten wird, fällt die Linienecke auf `bevel` zurück.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des "miter"-Wertes -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- Effekt des "miter"-Wertes bei einem scharfen Winkel
       wo das standardmäßige miter-Limit überschritten wird -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter" />

  <!-- die folgende rote gepunktete Linie zeigt, wo
       der miter-Wert auf den bevel-Wert zurückfällt -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- die folgenden rosa Linien heben die Position des Pfades für jeden Strich hervor -->
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
> Der `miter-clip`-Wert wurde in SVG2 eingeführt und wird noch nicht weit verbreitet unterstützt. Siehe unten [Browserkompatibilität](#browser-kompatibilität) für Details.

Der `miter-clip`-Wert gibt an, dass eine scharfe Ecke verwendet werden soll, um Pfadsegmente zu verbinden. Die Ecke wird gebildet, indem die äußeren Kanten des Strichs an den Tangenten der Pfadsegmente verlängert werden, bis sie sich schneiden.

Wenn das {{SVGAttr('stroke-miterlimit')}} überschritten wird, wird der miter an einer Entfernung abgeschnitten, die der Hälfte des {{SVGAttr('stroke-miterlimit')}}-Wertes multipliziert mit der Strichbreite vom Schnittpunkt der Pfadsegmente entspricht. Dies bietet eine bessere Darstellung als `miter` bei sehr scharfen Verbindungen oder im Fall einer Animation.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 10 7" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des "miter-clip"-Wertes -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- Effekt des "miter-clip"-Wertes bei einem scharfen Winkel
       wo das standardmäßige miter-Limit überschritten wird -->
  <path
    d="M7,5 l0.75,-3 l0.75,3"
    stroke="black"
    fill="none"
    stroke-linejoin="miter-clip" />

  <!-- die folgende rote gepunktete Linie zeigt, wo der Schnitt erfolgen sollte -->
  <path
    d="M0,0 h10"
    stroke="red"
    stroke-dasharray="0.05"
    stroke-width="0.025" />

  <!-- die folgenden rosa Linien heben die Position des Pfades für jeden Strich hervor -->
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

Der `round`-Wert gibt an, dass eine abgerundete Ecke verwendet werden soll, um Pfadsegmente zu verbinden.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des "round"-Wertes -->
  <path
    d="M1,5 l2,-3 l2,3"
    stroke="black"
    fill="none"
    stroke-linejoin="round" />

  <!--
  die folgenden rosa Linien heben die
  Position des Pfades für jeden Strich hervor
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
