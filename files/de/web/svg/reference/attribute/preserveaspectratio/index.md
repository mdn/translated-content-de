---
title: preserveAspectRatio
slug: Web/SVG/Reference/Attribute/preserveAspectRatio
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`preserveAspectRatio`**-Attribut gibt an, wie ein Element mit einem viewBox und einem bestimmten {{Glossary("aspect_ratio", "Seitenverhältnis")}} in einen Anzeigebereich mit einem anderen Seitenverhältnis passen muss.

Das Seitenverhältnis eines SVG-Bildes wird durch das {{SVGAttr('viewBox')}}-Attribut definiert. Daher hat das `preserveAspectRatio`-Attribut keine Auswirkungen auf die Skalierung von SVGs, wenn `viewBox` nicht gesetzt ist (außer im Fall des {{SVGElement('image')}}-Elements, wo sich `preserveAspectRatio` anders verhält, wie unten beschrieben).

## Syntax

```plain
preserveAspectRatio="<align> [<meet or slice>]"
```

Der Wert des `preserveAspectRatio`-Attributs besteht aus bis zu zwei Schlüsselwörtern: einem erforderlichen Ausrichtungswert und einem optionalen `meet`- oder `slice`-Schlüsselwort.

Der Ausrichtungswert zeigt an, ob eine einheitliche Skalierung erzwungen werden soll und, falls ja, welche Ausrichtungsmethode zu verwenden ist, falls das Seitenverhältnis des {{ SVGAttr("viewBox") }} nicht dem Seitenverhältnis des Anzeigebereichs entspricht. `xMidYMid` ist der Standardwert. Der Ausrichtungswert muss einer der folgenden Schlüsselwortwerte sein:

- `none`

  - : Erzwingt keine einheitliche Skalierung. Skaliert den grafischen Inhalt des angegebenen Elements, falls nötig, nicht einheitlich, sodass die Begrenzungsbox des Elements genau dem Rechteck des Anzeigebereichs entspricht. Beachten Sie, dass, wenn `<align>` `none` ist, dann der optionale `<meetOrSlice>`-Wert ignoriert wird.

- `xMinYMin`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den `<min-x>` des Elements {{ SVGAttr("viewBox") }} am kleinsten X-Wert des Anzeigebereichs aus.
    Richten Sie den `<min-y>` des Elements {{ SVGAttr("viewBox") }} am kleinsten Y-Wert des Anzeigebereichs aus.

- `xMidYMin`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den Mittenwert X des Elements {{ SVGAttr("viewBox") }} am Mittenwert X des Anzeigebereichs aus.
    Richten Sie den `<min-y>` des Elements {{ SVGAttr("viewBox") }} am kleinsten Y-Wert des Anzeigebereichs aus.

- `xMaxYMin`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den `<min-x>+<width>` des Elements {{ SVGAttr("viewBox") }} am maximalen X-Wert des Anzeigebereichs aus.
    Richten Sie den `<min-y>` des Elements {{ SVGAttr("viewBox") }} am kleinsten Y-Wert des Anzeigebereichs aus.

- `xMinYMid`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den `<min-x>` des Elements {{ SVGAttr("viewBox") }} am kleinsten X-Wert des Anzeigebereichs aus.
    Richten Sie den Mittenwert Y des Elements {{ SVGAttr("viewBox") }} am Mittenwert Y des Anzeigebereichs aus.

- `xMidYMid`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den Mittenwert X des Elements {{ SVGAttr("viewBox") }} am Mittenwert X des Anzeigebereichs aus.
    Richten Sie den Mittenwert Y des Elements {{ SVGAttr("viewBox") }} am Mittenwert Y des Anzeigebereichs aus. Dies ist der Standardwert.

- `xMaxYMid`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den `<min-x>+<width>` des Elements {{ SVGAttr("viewBox") }} am maximalen X-Wert des Anzeigebereichs aus.
    Richten Sie den Mittenwert Y des Elements {{ SVGAttr("viewBox") }} am Mittenwert Y des Anzeigebereichs aus.

- `xMinYMax`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den `<min-x>` des Elements {{ SVGAttr("viewBox") }} am kleinsten X-Wert des Anzeigebereichs aus.
    Richten Sie den `<min-y>+<height>` des Elements {{ SVGAttr("viewBox") }} am maximalen Y-Wert des Anzeigebereichs aus.

- `xMidYMax`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den Mittenwert X des Elements {{ SVGAttr("viewBox") }} am Mittenwert X des Anzeigebereichs aus.
    Richten Sie den `<min-y>+<height>` des Elements {{ SVGAttr("viewBox") }} am maximalen Y-Wert des Anzeigebereichs aus.

- `xMaxYMax`
  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den `<min-x>+<width>` des Elements {{ SVGAttr("viewBox") }} am maximalen X-Wert des Anzeigebereichs aus.
    Richten Sie den `<min-y>+<height>` des Elements {{ SVGAttr("viewBox") }} am maximalen Y-Wert des Anzeigebereichs aus.

Die folgenden zwei Schlüsselwörter bestimmen, wie das SVG relativ zu den Begrenzungen des Containers skaliert werden soll. Die Angabe der `meet`- oder `slice`-Referenz ist optional, und falls angegeben, muss es sich um eines von zwei Schlüsselwörtern handeln. `meet` ist der Standardwert.

- `meet`

  - : Skaliert die Grafik so, dass:

    - Das Seitenverhältnis erhalten bleibt.
    - Die gesamte {{ SVGAttr("viewBox") }} innerhalb des Anzeigebereichs sichtbar ist.
    - Die {{ SVGAttr("viewBox") }} so weit wie möglich vergrößert wird, während die anderen Kriterien eingehalten werden.

    In diesem Fall, wenn das Seitenverhältnis der Grafik nicht mit dem Anzeigebereich übereinstimmt, wird ein Teil des Anzeigebereichs über die Grenzen der {{ SVGAttr("viewBox") }} hinausgehen (d.h. der Bereich, in den die {{ SVGAttr("viewBox") }} zeichnen wird, ist kleiner als der Anzeigebereich).

- `slice`

  - : Skaliert die Grafik so, dass:

    - Das Seitenverhältnis erhalten bleibt.
    - Der gesamte Anzeigebereich von der {{ SVGAttr("viewBox") }} abgedeckt wird.
    - Die {{ SVGAttr("viewBox") }} so weit wie möglich verkleinert wird, während die anderen Kriterien eingehalten werden.

    In diesem Fall, wenn das Seitenverhältnis der {{ SVGAttr("viewBox") }} nicht dem Anzeigebereich entspricht, wird ein Teil der {{ SVGAttr("viewBox") }} über die Grenzen des Anzeigebereichs hinausgehen (d.h. der Bereich, in den die {{ SVGAttr("viewBox") }} zeichnen wird, ist größer als der Anzeigebereich).

## Beispiele

### Verwendung von `meet`, wenn Breite > Höhe

Dieses Beispiel zeigt die Verwendung von `meet`, wenn die `width` des Elements größer als seine `height` ist. Es zeigt drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMid`, `xMinYMid` und `xMaxYMid`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsiveness at different screen sizes */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 202 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<rect x="0" y="0" width="60" height="30">
  <title>xMidYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMid meet"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="0" width="60" height="30">
  <title>xMinYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMinYMid meet"
  x="70"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="140" y="0" width="60" height="30">
  <title>xMaxYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMaxYMid meet"
  x="140"
  y="0">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Using meet when width height', '100%', 200)}}

### Verwendung von `slice`, wenn Breite > Höhe

Dieses Beispiel zeigt die Verwendung von `slice`, wenn die `width` des Elements größer als seine `height` ist. Es zeigt drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMin`, `xMidYMid` und `xMidYMax`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsiveness at different screen sizes */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 202 57" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<rect x="0" y="15" width="60" height="30">
  <title>xMidYMin slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMin slice"
  x="0"
  y="15">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="15" width="60" height="30">
  <title>xMidYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMid slice"
  x="70"
  y="15">
  <use href="#smiley" />
</svg>
```

```html
<rect x="140" y="15" width="60" height="30">
  <title>xMidYMax slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMax slice"
  x="140"
  y="15">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Using slice when width height', '100%', 200)}}

### Verwendung von `meet`, wenn Höhe > Breite

Dieses Beispiel zeigt die Verwendung von `meet`, wenn die `height` des Elements größer als seine `width` ist. Es zeigt drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMin`, `xMidYMid` und `xMidYMax`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsiveness at different screen sizes */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<rect x="0" y="0" width="30" height="75">
  <title>xMidYMin meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMin meet"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="35" y="0" width="30" height="75">
  <title>xMidYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMid meet"
  x="35"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="0" width="30" height="75">
  <title>xMidYMax meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMax meet"
  x="70"
  y="0">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Using meet when height width', '100%', 200)}}

### Verwendung von `slice`, wenn Höhe > Breite

Dieses Beispiel zeigt die Verwendung von `slice`, wenn die `height` des Elements größer als seine `width` ist. Es zeigt drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMinYMid`, `xMidYMid` und `xMaxYMid`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsiveness at different screen sizes */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<rect x="0" y="0" width="30" height="75">
  <title>xMinYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMinYMid slice"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="35" y="0" width="30" height="75">
  <title>xMidYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMid slice"
  x="35"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="0" width="30" height="75">
  <title>xMaxYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMaxYMid slice"
  x="70"
  y="0">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Using slice height width', '100%', 200)}}

### Verwendung des `none` Ausrichtungswerts

Dieses Beispiel zeigt ein Element mit dem Ausrichtungswert auf `none` gesetzt.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsiveness at different screen sizes */
body {
  display: flex;
}
```

```html-nolint
<svg viewBox="-1 -1 192 62" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
```

```html
<!-- none -->
<rect x="0" y="0" width="160" height="60">
  <title>none</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="160"
  height="60"
  preserveAspectRatio="none"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html-nolint
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Using the none alignment value', '100%', 200)}}

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("svg")}}
- {{SVGElement("symbol")}}
- {{SVGElement("image")}}
- {{SVGElement("feImage")}}
- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("view")}}

### feImage

Für {{SVGElement('feImage')}}, definiert `preserveAspectRatio`, wie das referenzierte Bild in das durch das `<feImage>`-Element definierte Rechteck passen soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### image

Für {{SVGElement('image')}}, definiert `preserveAspectRatio`, wie das referenzierte Bild in das durch das `<image>`-Element definierte Rechteck passen soll.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### marker

Für {{SVGElement('marker')}}, gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um zum Anzeigebereich des Elements zu passen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### pattern

Für {{SVGElement('pattern')}}, gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um zum Anzeigebereich des Elements zu passen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### svg

Für {{SVGElement('svg')}}, gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um zum Anzeigebereich des Elements zu passen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### symbol

Für {{SVGElement('symbol')}}, gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um zum Anzeigebereich des Elements zu passen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### view

Für {{SVGElement('view')}}, gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um zum Anzeigebereich des Elements zu passen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}
