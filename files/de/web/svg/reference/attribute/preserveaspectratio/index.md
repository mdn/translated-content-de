---
title: preserveAspectRatio
slug: Web/SVG/Reference/Attribute/preserveAspectRatio
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

Das **`preserveAspectRatio`**-Attribut gibt an, wie ein Element mit einem bestehenden {{Glossary("aspect_ratio", "Seitenverhältnis")}} in einen Viewport mit einem anderen Seitenverhältnis passen muss.

Das Seitenverhältnis eines SVG-Bildes wird durch das {{SVGAttr('viewBox')}}-Attribut definiert. Daraus folgt, dass `preserveAspectRatio` keine Auswirkung auf die Skalierung von SVG hat, wenn `viewBox` nicht gesetzt ist (außer im Fall des {{SVGElement('image')}}-Elements, bei dem sich `preserveAspectRatio` wie unten beschrieben anders verhält).

## Syntax

```plain
preserveAspectRatio="<align> [<meet or slice>]"
```

Der Wert des `preserveAspectRatio`-Attributs besteht aus bis zu zwei Schlüsselwörtern: einem erforderlichen Ausrichtungswert und einem optionalen `meet`- oder `slice`-Schlüsselwort.

Der Ausrichtungswert gibt an, ob eine gleichmäßige Skalierung erzwungen werden soll und, wenn ja, welche Methode zur Ausrichtung verwendet werden soll, falls das Seitenverhältnis des {{SVGAttr("viewBox")}} nicht mit dem des Viewports übereinstimmt. `xMidYMid` ist der Standardwert. Der Ausrichtungswert muss einer der folgenden Schlüsselwortwerte sein:

- `none`

  - : Erzwingt keine gleichmäßige Skalierung. Skalieren Sie den grafischen Inhalt des gegebenen Elements bei Bedarf ungleichmäßig, sodass der Begrenzungsrahmen des Elements genau dem Viewport-Rechteck entspricht. Beachten Sie, dass wenn `<align>` auf `none` gesetzt ist, der optionale `<meetOrSlice>`-Wert ignoriert wird.

- `xMinYMin`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie das `<min-x>` des {{SVGAttr("viewBox")}}-Elements mit dem kleinsten X-Wert des Viewports aus.
    Richten Sie das `<min-y>` des {{SVGAttr("viewBox")}}-Elements mit dem kleinsten Y-Wert des Viewports aus.

- `xMidYMin`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie den mittleren X-Wert des {{SVGAttr("viewBox")}}-Elements mit dem mittleren X-Wert des Viewports aus.
    Richten Sie das `<min-y>` des {{SVGAttr("viewBox")}}-Elements mit dem kleinsten Y-Wert des Viewports aus.

- `xMaxYMin`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie das `<min-x>+<width>` des {{SVGAttr("viewBox")}}-Elements mit dem maximalen X-Wert des Viewports aus.
    Richten Sie das `<min-y>` des {{SVGAttr("viewBox")}}-Elements mit dem kleinsten Y-Wert des Viewports aus.

- `xMinYMid`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie das `<min-x>` des {{SVGAttr("viewBox")}}-Elements mit dem kleinsten X-Wert des Viewports aus.
    Richten Sie den mittleren Y-Wert des {{SVGAttr("viewBox")}}-Elements mit dem mittleren Y-Wert des Viewports aus.

- `xMidYMid`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie den mittleren X-Wert des {{SVGAttr("viewBox")}}-Elements mit dem mittleren X-Wert des Viewports aus.
    Richten Sie den mittleren Y-Wert des {{SVGAttr("viewBox")}}-Elements mit dem mittleren Y-Wert des Viewports aus. Dies ist der Standardwert.

- `xMaxYMid`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie das `<min-x>+<width>` des {{SVGAttr("viewBox")}}-Elements mit dem maximalen X-Wert des Viewports aus.
    Richten Sie den mittleren Y-Wert des {{SVGAttr("viewBox")}}-Elements mit dem mittleren Y-Wert des Viewports aus.

- `xMinYMax`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie das `<min-x>` des {{SVGAttr("viewBox")}}-Elements mit dem kleinsten X-Wert des Viewports aus.
    Richten Sie das `<min-y>+<height>` des {{SVGAttr("viewBox")}}-Elements mit dem maximalen Y-Wert des Viewports aus.

- `xMidYMax`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie den mittleren X-Wert des {{SVGAttr("viewBox")}}-Elements mit dem mittleren X-Wert des Viewports aus.
    Richten Sie das `<min-y>+<height>` des {{SVGAttr("viewBox")}}-Elements mit dem maximalen Y-Wert des Viewports aus.

- `xMaxYMax`

  - : Erzwingt gleichmäßige Skalierung.
    Richten Sie das `<min-x>+<width>` des {{SVGAttr("viewBox")}}-Elements mit dem maximalen X-Wert des Viewports aus.
    Richten Sie das `<min-y>+<height>` des {{SVGAttr("viewBox")}}-Elements mit dem maximalen Y-Wert des Viewports aus.

Die folgenden zwei Schlüsselwörter bestimmen, wie das SVG relativ zu den Grenzen des Containers skaliert werden soll. Die Angabe des `meet`- oder `slice`-Referenzwertes ist optional, und wenn angegeben, muss es eines der beiden Schlüsselwörter sein. `meet` ist der Standardwert.

- `meet`

  - : Skaliert die Grafik so, dass:

    - Das Seitenverhältnis erhalten bleibt.
    - Die gesamte {{SVGAttr("viewBox")}} innerhalb des Viewports sichtbar ist.
    - Die {{SVGAttr("viewBox")}} maximal vergrößert wird, während die anderen Kriterien weiterhin erfüllt sind.

    In diesem Fall, wenn das Seitenverhältnis der Grafik nicht mit dem Viewport übereinstimmt, wird ein Teil des Viewports über die Grenzen der {{SVGAttr("viewBox")}} hinausragen (d.h. der Bereich, in den die {{SVGAttr("viewBox")}} zeichnet, wird kleiner als der Viewport sein).

- `slice`

  - : Skaliert die Grafik so, dass:

    - Das Seitenverhältnis erhalten bleibt.
    - Der gesamte Viewport von der {{SVGAttr("viewBox")}} abgedeckt wird.
    - Die {{SVGAttr("viewBox")}} maximal verkleinert wird, während die anderen Kriterien weiterhin erfüllt sind.

    In diesem Fall, wenn das Seitenverhältnis der {{SVGAttr("viewBox")}} nicht mit dem Viewport übereinstimmt, wird ein Teil der {{SVGAttr("viewBox")}} über die Grenzen des Viewports hinausragen (d.h. der Bereich, in den die {{SVGAttr("viewBox")}} zeichnet, wird größer als der Viewport sein).

## Beispiele

### Nutzung von `meet`, wenn Breite > Höhe

Dieses Beispiel zeigt die Verwendung von `meet`, wenn die `width` des Elements größer als die `height` ist. Es präsentiert drei Varianten mit drei unterschiedlichen Ausrichtungswerten: `xMidYMid`, `xMinYMid` und `xMaxYMid`.

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

### Nutzung von `slice`, wenn Breite > Höhe

Dieses Beispiel zeigt die Verwendung von `slice`, wenn die `width` des Elements größer als die `height` ist. Es präsentiert drei Varianten mit drei unterschiedlichen Ausrichtungswerten: `xMidYMin`, `xMidYMid` und `xMidYMax`.

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

### Nutzung von `meet`, wenn Höhe > Breite

Dieses Beispiel zeigt die Verwendung von `meet`, wenn die `height` des Elements größer als die `width` ist. Es präsentiert drei Varianten mit drei unterschiedlichen Ausrichtungswerten: `xMidYMin`, `xMidYMid` und `xMidYMax`.

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

### Nutzung von `slice`, wenn Höhe > Breite

Dieses Beispiel zeigt die Verwendung von `slice`, wenn die `height` des Elements größer als die `width` ist. Es präsentiert drei Varianten mit drei unterschiedlichen Ausrichtungswerten: `xMinYMid`, `xMidYMid` und `xMaxYMid`.

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

### Verwendung des `none`-Ausrichtungswertes

Dieses Beispiel zeigt ein Element, bei dem der Ausrichtungswert auf `none` gesetzt ist.

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

Für {{SVGElement('feImage')}} definiert `preserveAspectRatio`, wie das referenzierte Bild in das durch das `<feImage>`-Element definierte Rechteck passen soll.

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

Für {{SVGElement('image')}} definiert `preserveAspectRatio`, wie das referenzierte Bild in das durch das `<image>`-Element definierte Rechteck passen soll.

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

Für {{SVGElement('marker')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung durchgeführt werden muss, um den Element-Viewport anzupassen.

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

Für {{SVGElement('pattern')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung durchgeführt werden muss, um den Element-Viewport anzupassen.

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

Für {{SVGElement('svg')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung durchgeführt werden muss, um den Element-Viewport anzupassen.

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

Für {{SVGElement('symbol')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung durchgeführt werden muss, um den Element-Viewport anzupassen.

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

Für {{SVGElement('view')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung durchgeführt werden muss, um den Element-Viewport anzupassen.

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
