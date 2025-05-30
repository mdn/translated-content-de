---
title: preserveAspectRatio
slug: Web/SVG/Reference/Attribute/preserveAspectRatio
l10n:
  sourceCommit: bb1ba995f354182f3d1d0ac5decbf8d67c654ad5
---

Das **`preserveAspectRatio`** Attribut gibt an, wie ein Element mit einer viewBox (die ein gegebenes {{Glossary("aspect_ratio", "Aspektverhältnis")}} bereitstellt) in einen Viewport mit einem anderen Aspektverhältnis passen muss.

Das Aspektverhältnis eines SVG-Bildes wird durch das {{SVGAttr('viewBox')}} Attribut definiert. Wenn `viewBox` also nicht gesetzt ist, hat das `preserveAspectRatio` Attribut keinen Einfluss auf das Scaling von SVG (außer im Fall des {{SVGElement('image')}} Elements, wo `preserveAspectRatio` wie unten beschrieben anders funktioniert).

## Syntax

```plain
preserveAspectRatio="<align> [<meet or slice>]"
```

Der Wert des `preserveAspectRatio` Attributs besteht aus bis zu zwei Schlüsselwörtern: einem erforderlichen Ausrichtungswert und einem optionalen `meet` oder `slice` Schlüsselwort.

Der Ausrichtungswert gibt an, ob eine einheitliche Skalierung erzwungen werden soll, und wenn ja, welche Ausrichtungsmethode verwendet werden soll, falls das Aspektverhältnis der {{SVGAttr("viewBox")}} nicht mit dem Aspektverhältnis des Viewports übereinstimmt. `xMidYMid` ist der Standardwert. Der Ausrichtungswert muss einer der folgenden Schlüsselwortwerte sein:

- `none`

  - : Erzwingt keine gleichmäßige Skalierung. Skaliert den grafischen Inhalt des gegebenen Elements ungleichmäßig, falls nötig, sodass der Begrenzungsrahmen des Elements genau mit dem Rechteck des Viewports übereinstimmt. Beachten Sie, dass, wenn `<align>` `none` ist, der optionale `<meetOrSlice>` Wert ignoriert wird.

- `xMinYMin`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet das `<min-x>` der {{SVGAttr("viewBox")}} des Elements an dem kleinsten X-Wert des Viewports aus.
    Richtet das `<min-y>` der {{SVGAttr("viewBox")}} des Elements an dem kleinsten Y-Wert des Viewports aus.

- `xMidYMin`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet den mittleren X-Wert der {{SVGAttr("viewBox")}} des Elements an dem mittleren X-Wert des Viewports aus.
    Richtet das `<min-y>` der {{SVGAttr("viewBox")}} des Elements an dem kleinsten Y-Wert des Viewports aus.

- `xMaxYMin`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet das `<min-x>+<width>` der {{SVGAttr("viewBox")}} des Elements an dem maximalen X-Wert des Viewports aus.
    Richtet das `<min-y>` der {{SVGAttr("viewBox")}} des Elements an dem kleinsten Y-Wert des Viewports aus.

- `xMinYMid`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet das `<min-x>` der {{SVGAttr("viewBox")}} des Elements an dem kleinsten X-Wert des Viewports aus.
    Richtet den mittleren Y-Wert der {{SVGAttr("viewBox")}} des Elements an dem mittleren Y-Wert des Viewports aus.

- `xMidYMid`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet den mittleren X-Wert der {{SVGAttr("viewBox")}} des Elements an dem mittleren X-Wert des Viewports aus.
    Richtet den mittleren Y-Wert der {{SVGAttr("viewBox")}} des Elements an dem mittleren Y-Wert des Viewports aus. Dies ist der Standardwert.

- `xMaxYMid`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet das `<min-x>+<width>` der {{SVGAttr("viewBox")}} des Elements an dem maximalen X-Wert des Viewports aus.
    Richtet den mittleren Y-Wert der {{SVGAttr("viewBox")}} des Elements an dem mittleren Y-Wert des Viewports aus.

- `xMinYMax`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet das `<min-x>` der {{SVGAttr("viewBox")}} des Elements an dem kleinsten X-Wert des Viewports aus.
    Richtet das `<min-y>+<height>` der {{SVGAttr("viewBox")}} des Elements an dem maximalen Y-Wert des Viewports aus.

- `xMidYMax`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet den mittleren X-Wert der {{SVGAttr("viewBox")}} des Elements an dem mittleren X-Wert des Viewports aus.
    Richtet das `<min-y>+<height>` der {{SVGAttr("viewBox")}} des Elements an dem maximalen Y-Wert des Viewports aus.

- `xMaxYMax`

  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet das `<min-x>+<width>` der {{SVGAttr("viewBox")}} des Elements an dem maximalen X-Wert des Viewports aus.
    Richtet das `<min-y>+<height>` der {{SVGAttr("viewBox")}} des Elements an dem maximalen Y-Wert des Viewports aus.

Die folgenden zwei Schlüsselwörter bestimmen, wie das SVG im Verhältnis zu den Begrenzungen des Containers skaliert werden soll. Die Angabe des `meet` oder `slice` Bezugs ist optional und, falls angegeben, muss es eines von nur zwei Schlüsselwörtern sein. `meet` ist der Standardwert.

- `meet`

  - : Skaliert die Grafik so, dass:

    - Das Aspektverhältnis beibehalten wird.
    - Die gesamte {{SVGAttr("viewBox")}} im Viewport sichtbar ist.
    - Die {{SVGAttr("viewBox")}} so weit wie möglich vergrößert wird, während dennoch die weiteren Kriterien erfüllt werden.

    In diesem Fall, wenn das Aspektverhältnis der Grafik nicht mit dem Viewport übereinstimmt, dehnt sich ein Teil des Viewports über die Grenzen der {{SVGAttr("viewBox")}} hinaus aus (d.h. der Bereich, in den die {{SVGAttr("viewBox")}} gezeichnet wird, ist kleiner als der Viewport).

- `slice`

  - : Skaliert die Grafik so, dass:

    - Das Aspektverhältnis beibehalten wird.
    - Der gesamte Viewport von der {{SVGAttr("viewBox")}} abgedeckt ist.
    - Die {{SVGAttr("viewBox")}} so weit wie möglich verkleinert wird, während dennoch die weiteren Kriterien erfüllt werden.

    In diesem Fall, wenn das Aspektverhältnis der {{SVGAttr("viewBox")}} nicht mit dem Viewport übereinstimmt, dehnt sich ein Teil der {{SVGAttr("viewBox")}} über die Grenzen des Viewports hinaus aus (d.h. der Bereich, in den die {{SVGAttr("viewBox")}} gezeichnet wird, ist größer als der Viewport).

## Beispiele

### Verwendung von `meet` wenn Breite > Höhe

Dieses Beispiel zeigt die Verwendung von `meet`, wenn die `Breite` des Elements größer ist als seine `Höhe`. Es präsentiert drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMid`, `xMinYMid` und `xMaxYMid`.

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

### Verwendung von `slice` wenn Breite > Höhe

Dieses Beispiel zeigt die Verwendung von `slice`, wenn die `Breite` des Elements größer ist als seine `Höhe`. Es präsentiert drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMin`, `xMidYMid` und `xMidYMax`.

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

### Verwendung von `meet` wenn Höhe > Breite

Dieses Beispiel zeigt die Verwendung von `meet`, wenn die `Höhe` des Elements größer ist als seine `Breite`. Es präsentiert drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMidYMin`, `xMidYMid` und `xMidYMax`.

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

### Verwendung von `slice` wenn Höhe > Breite

Dieses Beispiel zeigt die Verwendung von `slice`, wenn die `Höhe` des Elements größer ist als seine `Breite`. Es präsentiert drei Variationen mit drei verschiedenen Ausrichtungswerten: `xMinYMid`, `xMidYMid` und `xMaxYMid`.

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

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
