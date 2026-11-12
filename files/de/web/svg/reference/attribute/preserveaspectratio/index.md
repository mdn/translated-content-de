---
title: preserveAspectRatio
slug: Web/SVG/Reference/Attribute/preserveAspectRatio
l10n:
  sourceCommit: 04a0e78cf3119afe2a99e6449f6b74976654d69d
---

Das Attribut **`preserveAspectRatio`** legt fest, wie ein Element mit einer viewBox und einem bestimmten {{Glossary("aspect_ratio", "Seitenverhältnis")}} in einen Viewport mit einem anderen Seitenverhältnis eingepasst werden muss.

Das Seitenverhältnis eines SVG-Bildes wird durch das Attribut {{SVGAttr('viewBox')}} definiert. Wenn `viewBox` nicht gesetzt ist, hat `preserveAspectRatio` daher keine Auswirkung auf die Skalierung des SVGs (außer beim Element {{SVGElement('image')}}, bei dem sich `preserveAspectRatio` wie unten beschrieben anders verhält).

## Syntax

```plain
preserveAspectRatio="<align> [<meet or slice>]"
```

Der Wert des Attributs `preserveAspectRatio` besteht aus bis zu zwei Schlüsselwörtern: einem erforderlichen Ausrichtungswert und dem optionalen Schlüsselwort `meet` oder `slice`.

Der Ausrichtungswert legt fest, ob eine gleichmäßige Skalierung erzwungen wird und, falls ja, welche Ausrichtung verwendet wird, wenn das Seitenverhältnis von {{ SVGAttr("viewBox") }} nicht mit dem des Viewports übereinstimmt. `xMidYMid` ist der Standardwert. Der Ausrichtungswert muss eines der folgenden Schlüsselwörter sein:

- `none`
  - : Erzwingt keine gleichmäßige Skalierung. Der grafische Inhalt des Elements wird bei Bedarf ungleichmäßig skaliert, sodass der Begrenzungsrahmen des Elements genau mit dem Rechteck des Viewports übereinstimmt. Beachten Sie: Wenn `<align>` den Wert `none` hat, wird der optionale Wert `<meetOrSlice>` ignoriert.

- `xMinYMin`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet `<min-x>` von {{ SVGAttr("viewBox") }} des Elements am kleinsten X-Wert des Viewports aus.
    Richtet `<min-y>` von {{ SVGAttr("viewBox") }} des Elements am kleinsten Y-Wert des Viewports aus.

- `xMidYMin`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet den mittleren X-Wert von {{ SVGAttr("viewBox") }} des Elements am mittleren X-Wert des Viewports aus.
    Richtet `<min-y>` von {{ SVGAttr("viewBox") }} des Elements am kleinsten Y-Wert des Viewports aus.

- `xMaxYMin`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet `<min-x>+<width>` von {{ SVGAttr("viewBox") }} des Elements am größten X-Wert des Viewports aus.
    Richtet `<min-y>` von {{ SVGAttr("viewBox") }} des Elements am kleinsten Y-Wert des Viewports aus.

- `xMinYMid`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet `<min-x>` von {{ SVGAttr("viewBox") }} des Elements am kleinsten X-Wert des Viewports aus.
    Richtet den mittleren Y-Wert von {{ SVGAttr("viewBox") }} des Elements am mittleren Y-Wert des Viewports aus.

- `xMidYMid`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet den mittleren X-Wert von {{ SVGAttr("viewBox") }} des Elements am mittleren X-Wert des Viewports aus.
    Richtet den mittleren Y-Wert von {{ SVGAttr("viewBox") }} des Elements am mittleren Y-Wert des Viewports aus. Dies ist der Standardwert.

- `xMaxYMid`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet `<min-x>+<width>` von {{ SVGAttr("viewBox") }} des Elements am größten X-Wert des Viewports aus.
    Richtet den mittleren Y-Wert von {{ SVGAttr("viewBox") }} des Elements am mittleren Y-Wert des Viewports aus.

- `xMinYMax`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet `<min-x>` von {{ SVGAttr("viewBox") }} des Elements am kleinsten X-Wert des Viewports aus.
    Richtet `<min-y>+<height>` von {{ SVGAttr("viewBox") }} des Elements am größten Y-Wert des Viewports aus.

- `xMidYMax`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet den mittleren X-Wert von {{ SVGAttr("viewBox") }} des Elements am mittleren X-Wert des Viewports aus.
    Richtet `<min-y>+<height>` von {{ SVGAttr("viewBox") }} des Elements am größten Y-Wert des Viewports aus.

- `xMaxYMax`
  - : Erzwingt eine gleichmäßige Skalierung.
    Richtet `<min-x>+<width>` von {{ SVGAttr("viewBox") }} des Elements am größten X-Wert des Viewports aus.
    Richtet `<min-y>+<height>` von {{ SVGAttr("viewBox") }} des Elements am größten Y-Wert des Viewports aus.

Die folgenden beiden Schlüsselwörter bestimmen, wie das SVG im Verhältnis zu den Grenzen seines Containers skaliert wird. Die Angabe von `meet` oder `slice` ist optional. Wenn Sie einen Wert angeben, muss es eines dieser beiden Schlüsselwörter sein. `meet` ist der Standardwert.

- `meet`
  - : Skaliert die Grafik so, dass:
    - das Seitenverhältnis erhalten bleibt;
    - die gesamte {{ SVGAttr("viewBox") }} im Viewport sichtbar ist;
    - die {{ SVGAttr("viewBox") }} so weit wie möglich vergrößert wird, ohne die anderen Kriterien zu verletzen.

    Wenn das Seitenverhältnis der Grafik nicht mit dem des Viewports übereinstimmt, reicht ein Teil des Viewports über die Grenzen der {{ SVGAttr("viewBox") }} hinaus. Der Bereich, in dem die {{ SVGAttr("viewBox") }} dargestellt wird, ist also kleiner als der Viewport.

- `slice`
  - : Skaliert die Grafik so, dass:
    - das Seitenverhältnis erhalten bleibt;
    - der gesamte Viewport von der {{ SVGAttr("viewBox") }} abgedeckt wird;
    - die {{ SVGAttr("viewBox") }} so weit wie möglich verkleinert wird, ohne die anderen Kriterien zu verletzen.

    Wenn das Seitenverhältnis der {{ SVGAttr("viewBox") }} nicht mit dem des Viewports übereinstimmt, reicht ein Teil der {{ SVGAttr("viewBox") }} über die Grenzen des Viewports hinaus. Der Bereich, in dem die {{ SVGAttr("viewBox") }} dargestellt wird, ist also größer als der Viewport.

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

Bei {{SVGElement('feImage')}} legt `preserveAspectRatio` fest, wie das referenzierte Bild in das vom Element `<feImage>` definierte Rechteck eingepasst wird.

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

Bei {{SVGElement('image')}} legt `preserveAspectRatio` fest, wie das referenzierte Bild in das vom Element `<image>` definierte Rechteck eingepasst wird.

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

Bei {{SVGElement('marker')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung erforderlich ist, um das Element an den Viewport anzupassen.

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

Bei {{SVGElement('pattern')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung erforderlich ist, um das Element an den Viewport anzupassen.

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

Bei {{SVGElement('svg')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung erforderlich ist, um das Element an den Viewport anzupassen.

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

Bei {{SVGElement('symbol')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung erforderlich ist, um das Element an den Viewport anzupassen.

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

Bei {{SVGElement('view')}} gibt `preserveAspectRatio` an, ob eine gleichmäßige Skalierung erforderlich ist, um das Element an den Viewport anzupassen.

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

## Beispiele

### `meet` verwenden, wenn width > height

Dieses Beispiel zeigt die Verwendung von `meet`, wenn `width` des Elements größer als `height` ist. Es zeigt drei Varianten mit den Ausrichtungswerten `xMidYMid`, `xMinYMid` und `xMaxYMid`.

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

### `slice` verwenden, wenn width > height

Dieses Beispiel zeigt die Verwendung von `slice`, wenn `width` des Elements größer als `height` ist. Es zeigt drei Varianten mit den Ausrichtungswerten `xMidYMin`, `xMidYMid` und `xMidYMax`.

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

### `meet` verwenden, wenn height > width

Dieses Beispiel zeigt die Verwendung von `meet`, wenn `height` des Elements größer als `width` ist. Es zeigt drei Varianten mit den Ausrichtungswerten `xMidYMin`, `xMidYMid` und `xMidYMax`.

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

### `slice` verwenden, wenn height > width

Dieses Beispiel zeigt die Verwendung von `slice`, wenn `height` des Elements größer als `width` ist. Es zeigt drei Varianten mit den Ausrichtungswerten `xMinYMid`, `xMidYMid` und `xMaxYMid`.

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

{{EmbedLiveSample('using_slice_when_height_width', '100%', 200)}}

### Den Ausrichtungswert `none` verwenden

Dieses Beispiel zeigt ein Element, dessen Ausrichtungswert auf `none` gesetzt ist.

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

## Spezifikationen

{{Specifications}}
