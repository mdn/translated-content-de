---
title: stroke-linecap
slug: Web/SVG/Attribute/stroke-linecap
l10n:
  sourceCommit: 4d2346118b6ef233ce9a2b91b95a0295ebe145e2
---

{{SVGRef}}

Das **`stroke-linecap`** Attribut ist ein Präsentationsattribut, das die Form definiert, die am Ende von offenen Unterpfaden verwendet werden soll, wenn diese gestrichen sind.

> [!NOTE]
> Als Präsentationsattribut kann `stroke-linecap` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('stroke-linecap')}} für mehr Informationen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement('path')}}
- {{SVGElement('polyline')}}
- {{SVGElement('line')}}
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
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des (Standard-)Werts "butt" -->
  <line x1="1" y1="1" x2="5" y2="1" stroke="black" stroke-linecap="butt" />

  <!-- Effekt des Werts "round" -->
  <line x1="1" y1="3" x2="5" y2="3" stroke="black" stroke-linecap="round" />

  <!-- Effekt des Werts "square" -->
  <line x1="1" y1="5" x2="5" y2="5" stroke="black" stroke-linecap="square" />

  <!--
  die folgenden pinkfarbenen Linien heben
  die Position des Pfades für jeden Strich hervor
  -->
  <path d="M1,1 h4 M1,3 h4 M1,5 h4" stroke="pink" stroke-width="0.025" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>butt</code> | <code>round</code> | <code>square</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>butt</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

### butt

Der Wert `butt` gibt an, dass der Strich für jeden Unterpfad nicht über seine beiden Endpunkte hinausgeht. Bei einem Unterpfad mit null Länge wird der Pfad überhaupt nicht gerendert.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des Werts "butt" -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="butt" />

  <!-- Effekt des Werts "butt" bei einem Pfad mit null Länge -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="butt" />

  <!--
  die folgenden pinkfarbenen Linien heben
  die Position des Pfades für jeden Strich hervor
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('butt', '100%', 200)}}

### round

Der Wert `round` gibt an, dass am Ende jedes Unterpfades der Strich um einen Halbkreis mit einem Durchmesser erweitert wird, der der Strichbreite entspricht. Bei einem Unterpfad mit null Länge besteht der Strich aus einem Vollkreis, der am Punkt des Unterpfades zentriert ist.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des Werts "round" -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="round" />

  <!-- Effekt des Werts "round" bei einem Pfad mit null Länge -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="round" />

  <!--
  die folgenden pinkfarbenen Linien heben
  die Position des Pfades für jeden Strich hervor
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

### square

Der Wert `square` gibt an, dass am Ende jedes Unterpfades der Strich um ein Rechteck mit einer Breite von der Hälfte der Strichbreite und einer Höhe, die der Strichbreite entspricht, erweitert wird. Bei einem Unterpfad mit null Länge besteht der Strich aus einem Quadrat mit einer Breite, die der Strichbreite entspricht und am Punkt des Unterpfades zentriert ist.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effekt des Werts "square" -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="square" />

  <!-- Effekt des Werts "square" bei einem Pfad mit null Länge -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="square" />

  <!--
  die folgenden pinkfarbenen Linien heben
  die Position des Pfades für jeden Strich hervor
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('square', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
