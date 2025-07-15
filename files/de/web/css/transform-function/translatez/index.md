---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`translateZ()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) positioniert ein Element entlang der z-Achse im 3D-Raum neu, d.h. näher an oder weiter weg vom Betrachter. Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{InteractiveExample("CSS Demo: translateZ()")}}

```css interactive-example-choice
transform: translateZ(0);
```

```css interactive-example-choice
transform: translateZ(42px);
```

```css interactive-example-choice
transform: translateZ(-9.7rem);
```

```css interactive-example-choice
transform: translateZ(-3ch);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

Diese Transformation wird durch eine {{cssxref("&lt;length&gt;")}} definiert, die angibt, wie weit nach innen oder außen das Element oder die Elemente sich bewegen.

In den obigen interaktiven Beispielen wurden an dem Würfel [`perspective: 550px;`](/de/docs/Web/CSS/perspective) (um einen 3D-Raum zu schaffen) und [`transform-style: preserve-3d;`](/de/docs/Web/CSS/transform-style) (damit die Kinder, die 6 Seiten des Würfels, ebenfalls im 3D-Raum positioniert sind) gesetzt.

> [!NOTE]
> `translateZ(tz)` ist äquivalent zu `translate3d(0, 0, tz)`.

## Syntax

```css
translateZ(tz)
```

### Werte

- `tz`
  - : Eine {{cssxref("&lt;length&gt;")}} die die z-Komponente des Übersetzungvektors [0, 0, tz] repräsentiert. Im [kartesischen Koordinatensystem](/de/docs/Web/CSS/transform-function#cartesian_coordinates) stellt es die Verschiebung entlang der z-Achse dar. Ein positiver Wert bewegt das Element zum Betrachter hin, ein negativer Wert weiter weg.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Homogene Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten auf <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        Diese Transformation gilt für den 3D-Raum und kann nicht auf der Ebene dargestellt werden.
      </td>
      <td>
        Eine Translation ist keine lineare Transformation in ℝ^3 und kann nicht durch eine kartesische Koordinatenmatrix dargestellt werden.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>t</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & t \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formale Syntax

{{CSSSyntax}}

## Beispiele

In diesem Beispiel werden zwei Boxen erstellt. Eine ist normal auf der Seite positioniert, ohne überhaupt übersetzt zu werden. Die zweite wird verändert, indem Perspektive angewendet wird, um einen 3D-Raum zu schaffen, und dann zum Benutzer hin bewegt wird.

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
```

### CSS

```css
div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
```

Wichtig ist hier die Klasse "moved"; sehen wir uns an, was sie bewirkt. Zuerst positioniert die Funktion [`perspective()`](/de/docs/Web/CSS/transform-function/perspective) den Betrachter relativ zur Ebene, die dort liegt, wo z=0 (im Wesentlichen die Oberfläche des Bildschirms). Ein Wert von `500px` bedeutet, dass der Benutzer sich 500 Pixel "vor" der Darstellung befindet, die sich an z=0 befindet.

Dann bewegt die Funktion `translateZ()` das Element 200 Pixel "aus dem Bildschirm heraus", zum Benutzer hin. Dies hat den Effekt, dass das Element bei Betrachtung auf einem 2D-Display größer erscheint oder bei Verwendung eines VR-Headsets oder eines anderen 3D-Displaygeräts näher wirkt.

Beachten Sie, dass das transformierte Element nicht sichtbar ist, wenn der `perspective()`-Wert kleiner als der `translateZ()`-Wert ist, wie z. B. `transform: perspective(200px) translateZ(300px);`, da es weiter entfernt als der Benutzer-Blickwinkel ist. Je kleiner der Unterschied zwischen den Perspektiven- und translateZ-Werten ist, desto näher ist der Benutzer am Element, und desto größer wird das übersetzte Element erscheinen.

> [!NOTE]
> Da die Zusammensetzung von Transformationen nicht kommutativ ist, ist die Reihenfolge, in der Sie die verschiedenen Funktionen schreiben, wichtig. Insbesondere möchten Sie im Allgemeinen `perspective()` vor `translateZ()` platzieren.

### Ergebnis

{{EmbedLiveSample("Examples", 250, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
