---
title: stroke-linecap
slug: Web/SVG/Attribute/stroke-linecap
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`stroke-linecap`** Attribut ist ein Präsentationsattribut, das die Form definiert, die am Ende von offenen Unterpfaden verwendet werden soll, wenn sie gestrichen werden.

> [!NOTE]
> Als Präsentationsattribut kann `stroke-linecap` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie unter {{cssxref('stroke-linecap')}}.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  <!-- Effect of the (default) "butt" value -->
  <line x1="1" y1="1" x2="5" y2="1" stroke="black" stroke-linecap="butt" />

  <!-- Effect of the "round" value -->
  <line x1="1" y1="3" x2="5" y2="3" stroke="black" stroke-linecap="round" />

  <!-- Effect of the "square" value -->
  <line x1="1" y1="5" x2="5" y2="5" stroke="black" stroke-linecap="square" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
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

Der Wert `butt` zeigt an, dass der Strich für jeden Unterpfad nicht über seine beiden Endpunkte hinausreicht. Bei einem Unterpfad mit null Länge wird der Pfad überhaupt nicht dargestellt.

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
  <!-- Effect of the "butt" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="butt" />

  <!-- Effect of the "butt" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="butt" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('butt', '100%', 200)}}

### round

Der Wert `round` zeigt an, dass der Strich am Ende jedes Unterpfads um einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, verlängert wird. Bei einem Unterpfad mit null Länge besteht der Strich aus einem vollständigen Kreis, der auf den Punkt des Unterpfads zentriert ist.

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
  <!-- Effect of the "round" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="round" />

  <!-- Effect of the "round" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="round" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

### square

Der Wert `square` zeigt an, dass der Strich am Ende jedes Unterpfads um ein Rechteck mit einer Breite, die der halben Breite des Strichs entspricht, und einer Höhe, die der Breite des Strichs entspricht, verlängert wird. Bei einem Unterpfad mit null Länge besteht der Strich aus einem Quadrat mit einer Breite, die der Strichbreite entspricht, zentriert auf den Punkt des Unterpfads.

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
  <!-- Effect of the "square" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="square" />

  <!-- Effect of the "square" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="square" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
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

## Siehe auch

- CSS {{cssxref("stroke-linecap")}} Eigenschaft
