---
title: transform
slug: Web/SVG/Attribute/transform
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`transform`** Attribut definiert eine Liste von Transformationsdefinitionen, die auf ein Element und die Kinder des Elements angewendet werden.

> [!NOTE]
> Seit SVG2 ist `transform` ein Präsentationsattribut, was bedeutet, dass es als CSS-Eigenschaft verwendet werden kann. Beachten Sie jedoch, dass es einige Unterschiede in der Syntax zwischen der CSS-Eigenschaft und dem Attribut gibt. Sehen Sie die Dokumentation für die CSS-Eigenschaft {{cssxref('transform')}} für die spezifische Syntax, die in diesem Fall zu verwenden ist.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="-40 0 150 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <g
    fill="grey"
    transform="rotate(-10 50 100)
               translate(-36 45.5)
               skewX(40)
               scale(1 0.5)">
    <path
      id="heart"
      d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
  </g>

  <use href="#heart" fill="none" stroke="red" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

In SVG 1.1 durften nur diese 16 Elemente es verwenden: {{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('defs')}}, {{SVGElement('ellipse')}}, {{SVGElement('foreignObject')}}, {{SVGElement('g')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('switch')}}, {{SVGElement('text')}} und {{SVGElement('use')}}.

Auch als ein Erbe von SVG 1.1 unterstützen {{SVGElement('linearGradient')}} und {{SVGElement('radialGradient')}} das `gradientTransform` Attribut, und {{SVGElement('pattern')}} unterstützt das `patternTransform` Attribut, die beide genauso wie das `transform` Attribut wirken.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#transform-list"
            ><code>&#x3C;transform-list></code></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Transformationsfunktionen

Die folgenden Transformationsfunktionen können vom `transform` Attribut `<transform-list>` verwendet werden.

> [!WARNING]
> Laut der Spezifikation sollten Sie auch CSS [Transformationsfunktionen](/de/docs/Web/CSS/transform-function) verwenden können. Die Kompatibilität ist jedoch nicht garantiert.

### Matrix

Die `matrix(<a> <b> <c> <d> <e> <f>)` Transformationsfunktion spezifiziert eine Transformation in Form einer Transformationsmatrix von sechs Werten. `matrix(a,b,c,d,e,f)` entspricht der Anwendung der Transformationsmatrix:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{pmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Diese ordnet Koordinaten von einem vorherigen Koordinatensystem in ein neues Koordinatensystem durch folgende Matrixgleichungen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x_{\mathrm{newCoordSys}} \\ y_{\mathrm{newCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x_{\mathrm{prevCoordSys}} \\ y_{\mathrm{prevCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x_{\mathrm{prevCoordSys}} + c y_{\mathrm{prevCoordSys}} + e \\ b x_{\mathrm{prevCoordSys}} + d y_{\mathrm{prevCoordSys}} + f \\ 1 \end{pmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="20" fill="green" />

  <!--
  Im folgenden Beispiel wenden wir die Matrix an:
  [a c e]    [3 -1 30]
  [b d f] => [1  3 40]
  [0 0 1]    [0  0  1]

  die das Rechteck wie folgt transformiert:

  obere linke Ecke: oldX=10 oldY=10
  newX = a * oldX + c * oldY + e = 3 * 10 - 1 * 10 + 30 = 50
  newY = b * oldX + d * oldY + f = 1 * 10 + 3 * 10 + 40 = 80

  obere rechte Ecke: oldX=40 oldY=10
  newX = a * oldX + c * oldY + e = 3 * 40 - 1 * 10 + 30 = 140
  newY = b * oldX + d * oldY + f = 1 * 40 + 3 * 10 + 40 = 110

  untere linke Ecke: oldX=10 oldY=30
  newX = a * oldX + c * oldY + e = 3 * 10 - 1 * 30 + 30 = 30
  newY = b * oldX + d * oldY + f = 1 * 10 + 3 * 30 + 40 = 140

  untere rechte Ecke: oldX=40 oldY=30
  newX = a * oldX + c * oldY + e = 3 * 40 - 1 * 30 + 30 = 120
  newY = b * oldX + d * oldY + f = 1 * 40 + 3 * 30 + 40 = 170
  -->
  <rect
    x="10"
    y="10"
    width="30"
    height="20"
    fill="red"
    transform="matrix(3 1 -1 3 30 40)" />
</svg>
```

{{EmbedLiveSample('Matrix', '100%', 200)}}

### Translate

Die `translate(<x> [<y>])` Transformationsfunktion verschiebt das Objekt um `x` und `y`. Wenn `y` nicht angegeben wird, wird angenommen, dass es `0` ist.

Anders ausgedrückt:

```plain
xneu = xalt + <x>
yneu = yalt + <y>
```

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Keine Translation -->
  <rect x="5" y="5" width="40" height="40" fill="green" />

  <!-- Horizontale Translation -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="blue"
    transform="translate(50)" />

  <!-- Vertikale Translation -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="red"
    transform="translate(0 50)" />

  <!-- Sowohl horizontale als auch vertikale Translation -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="yellow"
    transform="translate(50 50)" />
</svg>
```

{{EmbedLiveSample('Example_3', '100%', 200)}}

### Scale

Die `scale(<x> [<y>])` Transformationsfunktion spezifiziert eine Skalierungsoperation um `x` und `y`. Wenn `y` nicht angegeben wird, wird angenommen, dass es gleich `x` ist.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- uniforme Skalierung -->
  <circle cx="0" cy="0" r="10" fill="red" transform="scale(4)" />

  <!-- vertikale Skalierung -->
  <circle cx="0" cy="0" r="10" fill="yellow" transform="scale(1, 4)" />

  <!-- horizontale Skalierung -->
  <circle cx="0" cy="0" r="10" fill="pink" transform="scale(4, 1)" />

  <!-- Keine Skalierung -->
  <circle cx="0" cy="0" r="10" fill="black" />
</svg>
```

{{EmbedLiveSample('Scale', '100%', 200)}}

### Rotate

Die `rotate(<a> [<x> <y>])` Transformationsfunktion spezifiziert eine Rotation um `a` Grad um einen gegebenen Punkt. Falls keine optionalen Parameter `x` und `y` angegeben werden, erfolgt die Rotation um den Ursprung des aktuellen Benutzerkoordinatensystems. Wenn optionale Parameter `x` und `y` angegeben werden, erfolgt die Rotation um den Punkt `(x, y)`.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-12 -2 34 14" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="10" height="10" />

  <!-- Die Rotation wird um den Punkt 0,0 durchgeführt -->
  <rect x="0" y="0" width="10" height="10" fill="red" transform="rotate(100)" />

  <!-- Die Rotation wird um den Punkt 10,10 durchgeführt -->
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    fill="green"
    transform="rotate(100, 10, 10)" />
</svg>
```

{{EmbedLiveSample('Rotate', '100%', 200)}}

### SkewX

Die `skewX(<a>)` Transformationsfunktion spezifiziert eine Scherungstransformation entlang der x-Achse um `a` Grad.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red" transform="skewX(30)" />
</svg>
```

{{EmbedLiveSample('SkewX', '100%', 200)}}

### SkewY

Die `skewY(<a>)` Transformationsfunktion spezifiziert eine Scherungstransformation entlang der y-Achse um `a` Grad.

#### Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red" transform="skewY(30)" />
</svg>
```

{{EmbedLiveSample('SkewY', '100%', 200)}}

## Spezifikationen

{{Specifications}}