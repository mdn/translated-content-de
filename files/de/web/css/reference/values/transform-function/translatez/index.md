---
title: translateZ()
slug: Web/CSS/Reference/Values/transform-function/translateZ
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`translateZ()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) verschiebt ein Element entlang der z-Achse im dreidimensionalen Raum, d. h. näher an den Betrachter heran oder weiter von ihm weg. Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

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

Diese Transformation wird durch ein {{cssxref("&lt;length&gt;")}} definiert, welches angibt, wie weit das Element oder die Elemente einwärts oder auswärts bewegt werden.

In den obigen interaktiven Beispielen wurde [`perspective: 550px;`](/de/docs/Web/CSS/Reference/Properties/perspective) (um einen 3D-Raum zu schaffen) und [`transform-style: preserve-3d;`](/de/docs/Web/CSS/Reference/Properties/transform-style) (damit die Kinder, die 6 Seiten des Würfels, auch im 3D-Raum positioniert sind) auf den Würfel gesetzt.

> [!NOTE]
> `translateZ(tz)` ist gleichwertig mit
> `translate3d(0, 0, tz)`.

## Syntax

```css
translateZ(tz)
```

### Werte

- `tz`
  - : Ein {{cssxref("&lt;length&gt;")}} das die z-Komponente des Übersetzungsvektors [0, 0, tz] darstellt. Im [kartesischen Koordinatensystem](/de/docs/Web/CSS/Reference/Values/transform-function#cartesian_coordinates) stellt es eine Verschiebung entlang der z-Achse dar. Ein positiver Wert bewegt das
    Element näher an den Betrachter heran, und ein negativer Wert weiter weg.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/Reference/Values/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
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
        Eine Übersetzung ist keine lineare Transformation in ℝ^3 und kann nicht mit einer kartesischen Matrix dargestellt werden.
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

In diesem Beispiel werden zwei Boxen erstellt. Eine ist normal auf der Seite positioniert, ohne überhaupt übersetzt zu werden. Die
zweite wird durch Anwenden von Perspektive verändert, um einen 3D-Raum zu schaffen, und dann zum Benutzer hin bewegt.

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

Worauf es hier wirklich ankommt, ist die Klasse "moved"; sehen wir uns an, was sie macht. Zuerst positioniert die
[`perspective()`](/de/docs/Web/CSS/Reference/Values/transform-function/perspective) Funktion den
Betrachter relativ zur Ebene, die sich dort befindet, wo z=0 ist (im Wesentlichen der Bildschirmoberfläche). Ein Wert von
`500px` bedeutet, dass der Benutzer 500 Pixel "vor" der Grafik ist, die sich bei z=0 befindet.

Dann verschiebt die `translateZ()` Funktion das Element 200 Pixel "aus der Tiefe" des Bildschirms, in Richtung des Betrachters.
Dies hat zur Folge, dass das Element, wenn es auf einem 2D-Display betrachtet wird, größer erscheint, oder wenn es mit einem VR-Headset oder einem anderen 3D-Display-Gerät betrachtet wird, näher erscheint.

Beachten Sie, dass wenn der `perspective()` Wert kleiner als der `translateZ()` Wert ist, wie zum Beispiel
`transform: perspective(200px) translateZ(300px);` das transformierte Element nicht sichtbar ist, da es außerhalb des Sichtfeldes des Benutzers liegt. Je kleiner der Unterschied zwischen den Perspektiv- und translateZ-Werten ist, desto näher ist der Benutzer am Element und desto größer erscheint das übersetzte Element.

> [!NOTE]
> Da die Zusammensetzung von Transformationen nicht kommutativ ist, ist die Reihenfolge, in der Sie die verschiedenen Funktionen schreiben, wichtig. Insbesondere in der Regel möchten Sie, dass `perspective()` vor `translateZ()` steht.

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
