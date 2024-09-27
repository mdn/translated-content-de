---
title: Verwendung von CSS-Transforms
slug: Web/CSS/CSS_transforms/Using_CSS_transforms
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Durch die Änderung des Koordinatenraums ändern **CSS-Transforms** die Form und Position des betroffenen Inhalts, ohne den normalen Dokumentfluss zu stören. Dieser Leitfaden bietet eine Einführung in die Verwendung von Transforms.

CSS-Transforms werden mithilfe eines Satzes von CSS-Eigenschaften implementiert, mit denen Sie affine lineare Transformationen auf HTML-Elemente anwenden können. Diese Transformationen umfassen Drehung, Verzerrung, Skalierung und Verschiebung sowohl in der Ebene als auch im 3D-Raum.

> [!WARNING]
> Nur transformierbare Elemente können `transform`iert werden; das heißt, alle Elemente, deren Layout durch das CSS-[Box-Modell](/de/docs/Web/CSS/CSS_box_model) geregelt wird, mit Ausnahme von: [nicht ersetzte Inline-Boxen](/de/docs/Web/CSS/Visual_formatting_model#inline-level_and_block-level_boxes), [Tabellenspalten-Boxen](/de/docs/Web/HTML/Element/col) und [Tabellenspalten-Gruppen-Boxen](/de/docs/Web/HTML/Element/colgroup).

## CSS-Transform-Eigenschaften

Zwei wichtige Eigenschaften definieren CSS-Transforms: {{cssxref("transform")}} (oder die einzelnen {{cssxref('translate')}}, {{cssxref('rotate')}}, und {{cssxref('scale')}} Eigenschaften) und {{cssxref("transform-origin")}}.

- {{cssxref("transform-origin")}}
  - : Gibt die Position des Ursprungs an. Standardmäßig befindet er sich in der Mitte des Elements und kann verschoben werden. Er wird von mehreren Transforms verwendet, wie Rotationen, Skalierungen oder Verzerrungen, die einen bestimmten Punkt als Parameter benötigen.
- {{cssxref("transform")}}
  - : Gibt die auf das Element anzuwendenden Transforms an. Es ist eine durch Leerzeichen getrennte Liste von Transforms, die nacheinander angewendet werden, wie durch die Kompositionsoperation angefordert. Zusammengesetzte Transforms werden in der Reihenfolge von rechts nach links effektiv angewendet.

## Beispiele

Hier ist ein unverändertes Bild des MDN-Logos:

![MDN Logo](logo.png)

### Drehen

Hier ist das MDN-Logo um 90 Grad von seiner unteren linken Ecke gedreht.

```html
<img
  style="rotate: 90deg;
      transform-origin: bottom left;"
  src="logo.png"
  alt="MDN Logo" />
```

{{EmbedLiveSample('Rotating', 'auto', 240) }}

### Verzerren und verschieben

Hier ist das MDN-Logo, um 10 Grad verzerrt und um 150 Pixel auf der X-Achse verschoben.

```html
<img
  style="transform: skewX(10deg) translateX(150px);
            transform-origin: bottom left;"
  src="logo.png"
  alt="MDN logo" />
```

{{EmbedLiveSample('Skewing_and_translating') }}

## 3D-spezifische CSS-Eigenschaften

Das Durchführen von CSS-Transformationen im 3D-Raum ist etwas komplexer. Sie müssen zunächst den 3D-Raum konfigurieren, indem Sie ihm eine Perspektive geben, dann müssen Sie konfigurieren, wie sich Ihre 2D-Elemente in diesem Raum verhalten.

### Perspektive

Das erste zu setzende Element ist die {{cssxref("perspective")}}. Die Perspektive verleiht uns den 3D-Eindruck. Je weiter die Elemente vom Betrachter entfernt sind, desto kleiner sind sie.

#### Perspektive einstellen

Dieses Beispiel zeigt einen Würfel mit der Perspektive an verschiedenen Positionen. Wie schnell der Würfel schrumpft, wird durch die {{ cssxref("perspective") }}-Eigenschaft definiert. Je kleiner ihr Wert ist, desto tiefer ist die Perspektive.

##### HTML

Der untenstehende HTML-Code erstellt vier Kopien derselben Box, mit der Perspektive auf unterschiedliche Werte gesetzt.

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code></th>
      <th><code>perspective: 350px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers250">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers350">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th><code>perspective: 500px;</code></th>
      <th><code>perspective: 650px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers500">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers650">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

##### CSS

Das CSS definiert Klassen, die verwendet werden können, um die Perspektive auf unterschiedliche Entfernungen einzustellen. Es enthält auch Klassen für die Containerbox und den Würfel selbst sowie für jede seiner Flächen.

```css
/* Shorthand classes for different perspective values */
.pers250 {
  perspective: 250px;
}

.pers350 {
  perspective: 350px;
}

.pers500 {
  perspective: 500px;
}

.pers650 {
  perspective: 650px;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 200px;
  height: 200px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
  backface-visibility: visible;
}

/* Define each face based on direction */
.front {
  background: rgb(0 0 0 / 30%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 255 0 / 100%);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(196 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 196 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(196 196 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(196 0 196 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Make the table a little nicer */
th,
p,
td {
  background-color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

##### Ergebnis

{{EmbedLiveSample('Setting_perspective', 660, 700)}}

Das zweite Element, das konfiguriert werden muss, ist die Position des Betrachters, mit der {{ cssxref("perspective-origin") }}-Eigenschaft. Standardmäßig konzentriert sich die Perspektive auf den Betrachter, was nicht immer angemessen ist.

#### Die Ursprungsperspektive ändern

Dieses Beispiel zeigt Würfel mit gängigen `perspective-origin`-Werten.

##### HTML

```html
<section>
  <figure>
    <figcaption><code>perspective-origin: top left;</code></figcaption>
    <div class="container">
      <div class="cube potl">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: top;</code></figcaption>
    <div class="container">
      <div class="cube potm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: top right;</code></figcaption>
    <div class="container">
      <div class="cube potr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: left;</code></figcaption>
    <div class="container">
      <div class="cube poml">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 50% 50%;</code></figcaption>
    <div class="container">
      <div class="cube pomm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: right;</code></figcaption>
    <div class="container">
      <div class="cube pomr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom left;</code></figcaption>
    <div class="container">
      <div class="cube pobl">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom;</code></figcaption>
    <div class="container">
      <div class="cube pobm">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: bottom right;</code></figcaption>
    <div class="container">
      <div class="cube pobr">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: -200% -200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200neg">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 200% 200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200pos">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>

  <figure>
    <figcaption><code>perspective-origin: 200% -200%;</code></figcaption>
    <div class="container">
      <div class="cube po200200">
        <div class="face front">1</div>
        <div class="face back">2</div>
        <div class="face right">3</div>
        <div class="face left">4</div>
        <div class="face top">5</div>
        <div class="face bottom">6</div>
      </div>
    </div>
  </figure>
</section>
```

##### CSS

```css
/* perspective-origin values (unique per example) */
.potl {
  perspective-origin: top left;
}
.potm {
  perspective-origin: top;
}
.potr {
  perspective-origin: top right;
}
.poml {
  perspective-origin: left;
}
.pomm {
  perspective-origin: 50% 50%;
}
.pomr {
  perspective-origin: right;
}
.pobl {
  perspective-origin: bottom left;
}
.pobm {
  perspective-origin: bottom;
}
.pobr {
  perspective-origin: bottom right;
}
.po200200neg {
  perspective-origin: -200% -200%;
}
.po200200pos {
  perspective-origin: 200% 200%;
}
.po200200 {
  perspective-origin: 200% -200%;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 300px;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
  backface-visibility: visible;
}

/* Define each face based on direction */
.front {
  background: rgb(0 0 0 / 30%);
  transform: translateZ(50px);
}
.back {
  background: rgb(0 255 0 / 100%);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  background: rgb(196 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: rgb(0 0 196 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  background: rgb(196 196 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: rgb(196 0 196 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Make the layout a little nicer */
section {
  background-color: #eee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

##### Ergebnis

{{EmbedLiveSample('Changing_the_perspective_origin', '100%', 700)}}

Sobald Sie dies getan haben, können Sie an dem Element im 3D-Raum arbeiten.

## Siehe auch

- Die [CSS-`transform`-Eigenschaft](/de/docs/Web/CSS/transform) und die [CSS-`<transform-function>` Datentypen](/de/docs/Web/CSS/transform-function)
- Die individuellen Transform-Eigenschaften: {{cssxref('translate')}}, {{cssxref('rotate')}} und {{cssxref('scale')}} (Es gibt keine `skew`-Eigenschaft)
- [Verwendung der Geräteausrichtung mit 3D-Transforms](/de/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Einführung in CSS 3D-Transforms](https://3dtransforms.desandro.com/) (Blogbeitrag von David DeSandro)
- [CSS Transform Playground](https://css-transform.moro.es/) (Online-Tool zur Visualisierung von CSS-Transform-Funktionen)
