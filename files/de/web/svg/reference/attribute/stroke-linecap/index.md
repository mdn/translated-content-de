---
title: stroke-linecap
slug: Web/SVG/Reference/Attribute/stroke-linecap
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`stroke-linecap`**-Attribut ist ein Präsentationsattribut, das die Form definiert, die am Ende von offenen Unterpfaden verwendet wird, wenn sie gestrichen werden.

> [!NOTE]
> Als Präsentationsattribut hat `stroke-linecap` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("stroke-linecap")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement('path')}}
- {{SVGElement('polyline')}}
- {{SVGElement('line')}}
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

## Verwendungsnotizen

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

Der Wert `butt` zeigt an, dass der Strich für jeden Unterpfad sich nicht über seine zwei Endpunkte hinaus erstreckt. Bei einem Unterpfad mit der Länge null wird der Pfad überhaupt nicht gerendert.

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

Der Wert `round` zeigt an, dass am Ende jedes Unterpfades der Strich um einen Halbkreis mit einem Durchmesser, der der Strichbreite entspricht, verlängert wird. Bei einem Unterpfad mit der Länge null besteht der Strich aus einem vollen Kreis, der am Punkt des Unterpfades zentriert ist.

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

Der Wert `square` zeigt an, dass am Ende jedes Unterpfades der Strich um ein Rechteck verlängert wird, dessen Breite der Hälfte der Strichbreite und dessen Höhe der Strichbreite entspricht. Bei einem Unterpfad mit der Länge null besteht der Strich aus einem Quadrat, dessen Breite der Strichbreite entspricht und das am Punkt des Unterpfades zentriert ist.

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

- CSS {{cssxref("stroke-linecap")}}-Eigenschaft
