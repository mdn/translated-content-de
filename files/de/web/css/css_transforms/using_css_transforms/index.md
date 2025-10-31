---
title: Verwendung von CSS-Transformationen
short-title: Verwendung von Transformationen
slug: Web/CSS/CSS_transforms/Using_CSS_transforms
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Durch das Ändern des Koordinatenraums verändern **CSS-Transformationen** die Form und Position des betroffenen Inhalts, ohne den normalen Dokumentenfluss zu stören. Dieser Leitfaden bietet eine Einführung in die Verwendung von Transformationen.

CSS-Transformationen werden durch eine Reihe von CSS-Eigenschaften implementiert, die es Ihnen ermöglichen, affine lineare Transformationen auf HTML-Elemente anzuwenden. Diese Transformationen umfassen Drehung, Schrägstellung, Skalierung und Translation sowohl in der Ebene als auch im 3D-Raum.

> [!WARNING]
> Nur transformierbare Elemente können `transform`iert werden; das heißt, alle Elemente, deren Layout durch das CSS-[Box-Modell](/de/docs/Web/CSS/CSS_box_model) bestimmt wird, mit Ausnahme von: [nicht ersetzte Inline-Boxen](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#inline-level_and_block-level_boxes), [Tabellenspalten-Boxen](/de/docs/Web/HTML/Reference/Elements/col) und [Tabellenspalten-Gruppen-Boxen](/de/docs/Web/HTML/Reference/Elements/colgroup).

## CSS-Transformationseigenschaften

Zwei wichtige Eigenschaften werden zur Definition von CSS-Transformationen verwendet: {{cssxref("transform")}} (oder die einzelnen {{cssxref('translate')}}, {{cssxref('rotate')}}, und {{cssxref('scale')}} Eigenschaften) und {{cssxref("transform-origin")}}.

- {{cssxref("transform-origin")}}
  - : Gibt die Position des Ursprungs an. Standardmäßig befindet er sich in der Mitte des Elements und kann verschoben werden. Es wird von mehreren Transformationen verwendet, wie Drehungen, Skalierungen oder Schrägstellungen, die einen bestimmten Punkt als Parameter benötigen.
- {{cssxref("transform")}}
  - : Gibt die Transformationen an, die auf das Element angewendet werden sollen. Es ist eine durch Leerzeichen getrennte Liste von Transformationen, die nacheinander, wie durch die Kompositionsoperation angefordert, angewendet werden. Zusammengesetzte Transformationen werden effektiv in der Reihenfolge von rechts nach links angewendet.

## Beispiele

Hier ist ein unverändertes Bild des MDN-Logos:

![MDN Logo](logo.png)

### Drehung

Hier ist das MDN-Logo um 90 Grad von seiner unteren linken Ecke gedreht.

```html
<img src="logo.png" alt="MDN Logo" />
```

```css
img {
  rotate: 90deg;
  transform-origin: bottom left;
}
```

{{EmbedLiveSample('Rotating', 'auto', 240) }}

### Schrägstellung und Translation

Hier ist das MDN-Logo, um 10 Grad geschrägt und um 150 Pixel auf der X-Achse verschoben.

```html
<img src="logo.png" alt="MDN logo" />
```

```css
img {
  transform: skewX(10deg) translateX(150px);
  transform-origin: bottom left;
}
```

{{EmbedLiveSample('Skewing_and_translating') }}

## 3D-spezifische CSS-Eigenschaften

Das Durchführen von CSS-Transformationen im 3D-Raum ist etwas komplexer. Sie müssen damit beginnen, den 3D-Raum durch Angabe einer Perspektive zu konfigurieren, und dann müssen Sie konfigurieren, wie Ihre 2D-Elemente sich in diesem Raum verhalten.

### Perspektive

Das erste Element, das festgelegt werden muss, ist die {{cssxref("perspective")}}. Die Perspektive ist das, was uns den 3D-Eindruck vermittelt. Je weiter von der Betrachtungsperspektive die Elemente entfernt sind, desto kleiner sind sie.

#### Perspektive festlegen

Dieses Beispiel zeigt einen Würfel mit unterschiedlich eingestellter Perspektive. Wie schnell der Würfel schrumpft, wird durch die {{ cssxref("perspective") }} Eigenschaft definiert. Je kleiner ihr Wert ist, desto tiefer ist die Perspektive.

##### HTML

Das untenstehende HTML erstellt vier Kopien derselben Box, wobei die Perspektive auf unterschiedliche Werte eingestellt ist.

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
          <div class="cube perspective-250">
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
          <div class="cube perspective-350">
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
          <div class="cube perspective-500">
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
          <div class="cube perspective-650">
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

Das CSS legt Klassen fest, die verwendet werden können, um die Perspektive auf unterschiedliche Entfernungen zu setzen. Es enthält auch Klassen für die Container-Box und den Würfel selbst sowie für jede seiner Flächen.

```css
/* Shorthand classes for different perspective values */
.perspective-250 {
  perspective: 250px;
}

.perspective-350 {
  perspective: 350px;
}

.perspective-500 {
  perspective: 500px;
}

.perspective-650 {
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
  background: lime;
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

Das zweite Element, das konfiguriert werden muss, ist die Position des Betrachters mit der {{ cssxref("perspective-origin") }} Eigenschaft. Standardmäßig ist die Perspektive auf den Betrachter zentriert, was nicht immer angemessen ist.

#### Ursprung der Perspektive ändern

Dieses Beispiel zeigt Würfel mit populären `perspective-origin` Werten.

##### HTML

```html
<section>
  <figure>
    <figcaption><code>perspective-origin: top left;</code></figcaption>
    <div class="container">
      <div class="cube po-tl">
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
      <div class="cube po-tm">
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
      <div class="cube po-tr">
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
      <div class="cube po-ml">
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
      <div class="cube po-mm">
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
      <div class="cube po-mr">
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
      <div class="cube po-bl">
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
      <div class="cube po-bm">
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
      <div class="cube po-br">
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
      <div class="cube po-200200neg">
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
      <div class="cube po-200200pos">
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
      <div class="cube po-200200">
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
.po-tl {
  perspective-origin: top left;
}
.po-tm {
  perspective-origin: top;
}
.po-tr {
  perspective-origin: top right;
}
.po-ml {
  perspective-origin: left;
}
.po-mm {
  perspective-origin: 50% 50%;
}
.po-mr {
  perspective-origin: right;
}
.po-bl {
  perspective-origin: bottom left;
}
.po-bm {
  perspective-origin: bottom;
}
.po-br {
  perspective-origin: bottom right;
}
.po-200200neg {
  perspective-origin: -200% -200%;
}
.po-200200pos {
  perspective-origin: 200% 200%;
}
.po-200200 {
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
  background: lime;
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
  background-color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

##### Ergebnis

{{EmbedLiveSample('Changing_the_perspective_origin', '100%', 700)}}

Nachdem Sie dies getan haben, können Sie an dem Element im 3D-Raum arbeiten.

## Siehe auch

- Die [CSS `transform` Eigenschaft](/de/docs/Web/CSS/Reference/Properties/transform) und die [CSS `<transform-function>` Datentypen](/de/docs/Web/CSS/transform-function)
- Die einzelnen Transformations-Eigenschaften: {{cssxref('translate')}}, {{cssxref('rotate')}}, und {{cssxref('scale')}} (Es gibt keine `skew` Eigenschaft)
- [Geräteausrichtung mit 3D-Transformationen verwenden](/de/docs/Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms)
- [Einführung in CSS 3D-Transformationen](https://3dtransforms.desandro.com/) (Blog-Beitrag von David DeSandro)
- [CSS Transform Playground](https://css-transform.moro.es/) (Online-Tool zur Visualisierung von CSS-Transformationsfunktionen)
