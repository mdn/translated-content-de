---
title: preserveAspectRatio
slug: Web/SVG/Attribute/preserveAspectRatio
l10n:
  sourceCommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{SVGRef}}

Das Attribut **`preserveAspectRatio`** gibt an, wie ein Element mit einem `viewBox`, das ein gegebenes {{Glossary("aspect_ratio", "Aspektverhältnis")}} bereitstellt, in einen Viewport mit einem anderen Aspektverhältnis passen muss.

Das Aspektverhältnis eines SVG-Bildes wird durch das {{SVGAttr('viewBox')}}-Attribut definiert. Daher hat das `preserveAspectRatio`-Attribut keinen Einfluss auf die Skalierung von SVG, wenn `viewBox` nicht gesetzt ist (außer im Fall des {{SVGElement('image')}}-Elements, wo sich `preserveAspectRatio` anders verhält, wie unten beschrieben).

## Syntax

```plain
preserveAspectRatio="<align> [<meet or slice>]"
```

Der Wert des `preserveAspectRatio`-Attributs besteht aus bis zu zwei Schlüsselwörtern: einem erforderlichen Ausrichtungswert und einem optionalen `meet` oder `slice` Schlüsselwort.

Der Ausrichtungswert gibt an, ob eine einheitliche Skalierung erzwungen werden soll und, falls ja, welche Ausrichtungsmethode verwendet werden soll, wenn das Aspektverhältnis des {{SVGAttr("viewBox")}} nicht mit dem des Viewports übereinstimmt. `xMidYMid` ist der Standardwert. Der Ausrichtungswert muss einer der folgenden Schlüsselwortwerte sein:

- `none`

  - : Erzwingt keine einheitliche Skalierung. Skaliert den grafischen Inhalt des gegebenen Elements bei Bedarf nicht einheitlich, sodass der Begrenzungsrahmen des Elements genau mit dem Rechteck des Viewports übereinstimmt. Beachten Sie, dass, wenn `<align>` `none` ist, der optionale `<meetOrSlice>`-Wert ignoriert wird.

- `xMinYMin`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie das `<min-x>` des Elements {{SVGAttr("viewBox")}} mit dem kleinsten X-Wert des Viewports aus.
    Richten Sie das `<min-y>` des Elements {{SVGAttr("viewBox")}} mit dem kleinsten Y-Wert des Viewports aus.

- `xMidYMin`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den mittleren X-Wert des Elements {{SVGAttr("viewBox")}} mit dem mittleren X-Wert des Viewports aus.
    Richten Sie das `<min-y>` des Elements {{SVGAttr("viewBox")}} mit dem kleinsten Y-Wert des Viewports aus.

- `xMaxYMin`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie das `<min-x>+<width>` des Elements {{SVGAttr("viewBox")}} mit dem maximalen X-Wert des Viewports aus.
    Richten Sie das `<min-y>` des Elements {{SVGAttr("viewBox")}} mit dem kleinsten Y-Wert des Viewports aus.

- `xMinYMid`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie das `<min-x>` des Elements {{SVGAttr("viewBox")}} mit dem kleinsten X-Wert des Viewports aus.
    Richten Sie den mittleren Y-Wert des Elements {{SVGAttr("viewBox")}} mit dem mittleren Y-Wert des Viewports aus.

- `xMidYMid`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den mittleren X-Wert des Elements {{SVGAttr("viewBox")}} mit dem mittleren X-Wert des Viewports aus.
    Richten Sie den mittleren Y-Wert des Elements {{SVGAttr("viewBox")}} mit dem mittleren Y-Wert des Viewports aus. Dies ist der Standardwert.

- `xMaxYMid`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie das `<min-x>+<width>` des Elements {{SVGAttr("viewBox")}} mit dem maximalen X-Wert des Viewports aus.
    Richten Sie den mittleren Y-Wert des Elements {{SVGAttr("viewBox")}} mit dem mittleren Y-Wert des Viewports aus.

- `xMinYMax`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie das `<min-x>` des Elements {{SVGAttr("viewBox")}} mit dem kleinsten X-Wert des Viewports aus.
    Richten Sie das `<min-y>+<height>` des Elements {{SVGAttr("viewBox")}} mit dem maximalen Y-Wert des Viewports aus.

- `xMidYMax`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie den mittleren X-Wert des Elements {{SVGAttr("viewBox")}} mit dem mittleren X-Wert des Viewports aus.
    Richten Sie das `<min-y>+<height>` des Elements {{SVGAttr("viewBox")}} mit dem maximalen Y-Wert des Viewports aus.

- `xMaxYMax`

  - : Erzwingt eine einheitliche Skalierung.
    Richten Sie das `<min-x>+<width>` des Elements {{SVGAttr("viewBox")}} mit dem maximalen X-Wert des Viewports aus.
    Richten Sie das `<min-y>+<height>` des Elements {{SVGAttr("viewBox")}} mit dem maximalen Y-Wert des Viewports aus.

Die folgenden zwei Schlüsselwörter bestimmen, wie das SVG relativ zu den Grenzen des Containers skaliert werden soll. Die Angabe des `meet` oder `slice` Referenzes ist optional und, falls angegeben, muss es eines von zwei Schlüsselwörtern sein. `meet` ist der Standardwert.

- `meet`

  - : Skaliert die Grafik so, dass:

    - Das Aspektverhältnis erhalten bleibt.
    - Das gesamte {{SVGAttr("viewBox")}} innerhalb des Viewports sichtbar ist.
    - Das {{SVGAttr("viewBox")}} so weit wie möglich vergrößert wird, während die anderen Kriterien eingehalten werden.

    In diesem Fall, wenn das Aspektverhältnis der Grafik nicht mit dem des Viewports übereinstimmt, wird ein Teil des Viewports über die Grenzen des {{SVGAttr("viewBox")}} hinausgehen (d.h. der Bereich, in den das {{SVGAttr("viewBox")}} gezeichnet wird, ist kleiner als der Viewport).

- `slice`

  - : Skaliert die Grafik so, dass:

    - Das Aspektverhältnis erhalten bleibt.
    - Der gesamte Viewport vom {{SVGAttr("viewBox")}} abgedeckt wird.
    - Das {{SVGAttr("viewBox")}} so weit wie möglich verkleinert wird, während die anderen Kriterien eingehalten werden.

    In diesem Fall, wenn das Aspektverhältnis des {{SVGAttr("viewBox")}} nicht mit dem des Viewports übereinstimmt, wird ein Teil des {{SVGAttr("viewBox")}} über die Grenzen des Viewports hinausgehen (d.h. der Bereich, in den das {{SVGAttr("viewBox")}} gezeichnet wird, ist größer als der Viewport).

## Beispiele

### Nutzung von `meet` wenn Breite > Höhe

Dieses Beispiel zeigt die Verwendung von `meet`, wenn die `width` des Elements größer als seine `height` ist. Es präsentiert drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMid`, `xMinYMid` und `xMaxYMid`.

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

```html
<svg viewBox="-1 -1 202 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
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

### Nutzung von `slice` wenn Breite > Höhe

Dieses Beispiel zeigt die Verwendung von `slice`, wenn die `width` des Elements größer als seine `height` ist. Es präsentiert drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMin`, `xMidYMid` und `xMidYMax`.

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

```html
<svg viewBox="-1 -1 202 57" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
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

### Nutzung von `meet` wenn Höhe > Breite

Dieses Beispiel zeigt die Verwendung von `meet`, wenn die `height` des Elements größer als seine `width` ist. Es präsentiert drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMin`, `xMidYMid` und `xMidYMax`.

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

```html
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
  <rect x=0" y="0" width="30" height="75">
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

### Nutzung von `slice` wenn Höhe > Breite

Dieses Beispiel zeigt die Verwendung von `slice`, wenn die `height` des Elements größer als seine `width` ist. Es präsentiert drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMinYMid`, `xMidYMid` und `xMaxYMid`.

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

```html
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
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

### Nutzung des `none` Ausrichtungswertes

Dieses Beispiel zeigt ein Element mit dem Ausrichtungswert `none`.

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

```html
<svg viewBox="-1 -1 192 62" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
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

Für {{SVGElement('feImage')}} definiert `preserveAspectRatio`, wie das referenzierte Bild in das durch das `<feImage>` Element definierte Rechteck passen soll.

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

Für {{SVGElement('image')}} definiert `preserveAspectRatio`, wie das referenzierte Bild in das durch das `<image>` Element definierte Rechteck passen soll.

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

Für {{SVGElement('marker')}} gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um in den Viewport des Elements zu passen.

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

Für {{SVGElement('pattern')}} gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um in den Viewport des Elements zu passen.

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

Für {{SVGElement('svg')}} gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um in den Viewport des Elements zu passen.

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

Für {{SVGElement('symbol')}} gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um in den Viewport des Elements zu passen.

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

Für {{SVGElement('view')}} gibt `preserveAspectRatio` an, ob eine einheitliche Skalierung durchgeführt werden muss, um in den Viewport des Elements zu passen.

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
