---
title: transform-origin
slug: Web/CSS/transform-origin
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`transform-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung für die Transformationen eines Elements fest.

{{EmbedInteractiveExample("pages/css/transform-origin.html")}}

Der Transformationsursprung ist der Punkt, um den eine Transformation angewendet wird. Zum Beispiel ist der Transformationsursprung der [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) Funktion das Drehzentrum.

Tatsächlich umschließt diese Eigenschaft ein Paar von Verschiebungen um die anderen Transformationen des Elements. Die erste Verschiebung bewegt den Transformationsursprung zum tatsächlichen Ursprung bei <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>. Dann werden die anderen Transformationen angewendet, und da sich der Transformationsursprung bei <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math> befindet, wirken diese Transformationen um den Transformationsursprung. Schließlich wird die entgegengesetzte Verschiebung angewendet, um den Transformationsursprung an seinen ursprünglichen Ort zurückzubringen. Folglich ergibt diese Definition

```css
transform-origin: -100% 50%;
transform: rotate(45deg);
```

die gleiche Transformation wie

```css
transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
```

Von rechts nach links gelesen, ist `translate(100%, -50%)` die Verschiebung, um den Transformationsursprung zum tatsächlichen Ursprung zu bringen, `rotate(45deg)` ist die ursprüngliche Transformation, und `translate(-100%, 50%)` ist die Verschiebung, um den Transformationsursprung an seinen ursprünglichen Ort zurückzubringen.

Standardmäßig ist der Ursprungsort einer Transformation `center`.

## Syntax

```css
/* Ein-Wert-Syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-Offset | y-Offset */
transform-origin: 3cm 2px;

/* x-Offset-Schlüsselwort | y-Offset */
transform-origin: left 2px;

/* x-Offset-Schlüsselwort | y-Offset-Schlüsselwort */
transform-origin: right top;

/* y-Offset-Schlüsselwort | x-Offset-Schlüsselwort */
transform-origin: top right;

/* x-Offset | y-Offset | z-Offset */
transform-origin: 2px 30% 10px;

/* x-Offset-Schlüsselwort | y-Offset | z-Offset */
transform-origin: left 5px -3px;

/* x-Offset-Schlüsselwort | y-Offset-Schlüsselwort | z-Offset */
transform-origin: right bottom 2cm;

/* y-Offset-Schlüsselwort | x-Offset-Schlüsselwort | z-Offset */
transform-origin: bottom right 2cm;

/* Globale Werte */
transform-origin: inherit;
transform-origin: initial;
transform-origin: revert;
transform-origin: revert-layer;
transform-origin: unset;
```

Die `transform-origin` Eigenschaft kann mit einem, zwei oder drei Werten angegeben werden, wobei jeder Wert ein Offset darstellt. Offsets, die nicht explizit definiert sind, werden auf ihre entsprechenden [Anfangswerte](/de/docs/Web/CSS/initial_value) zurückgesetzt.

Wenn ein einzelner {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert definiert ist, repräsentiert dieser das horizontale Offset.

Wenn zwei oder mehr Werte definiert sind und entweder kein Wert ein Schlüsselwort ist, oder das einzige verwendete Schlüsselwort `center` ist, dann repräsentiert der erste Wert das horizontale Offset und der zweite das vertikale Offset.

- Ein-Wert-Syntax:

  - Der Wert muss eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder eines der Schlüsselwörter `left`, `center`, `right`, `top` und `bottom` sein.

- Zwei-Wert-Syntax:

  - Ein Wert muss eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder eines der Schlüsselwörter `left`, `center` und `right` sein.
  - Der andere Wert muss eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder eines der Schlüsselwörter `top`, `center` und `bottom` sein.

- Drei-Wert-Syntax:

  - Die ersten beiden Werte sind wie bei der Zwei-Wert-Syntax.
  - Der dritte Wert muss eine {{cssxref("&lt;length&gt;")}} sein. Er repräsentiert immer das Z-Offset.

### Werte

- _x-offset_
  - : Ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und beschreibt, wie weit vom linken Rand der Box der Transformationsursprung gesetzt ist.
- _offset-keyword_
  - : Ist eines der `left`, `right`, `top`, `bottom` oder `center` Schlüsselwörter und beschreibt das entsprechende Offset.
- _y-offset_
  - : Ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und beschreibt, wie weit vom oberen Rand der Box der Transformationsursprung gesetzt ist.
- _x-offset-keyword_
  - : Ist eines der `left`, `right` oder `center` Schlüsselwörter und beschreibt, wie weit vom linken Rand der Box der Transformationsursprung gesetzt ist.
- _y-offset-keyword_
  - : Ist eines der `top`, `bottom` oder `center` Schlüsselwörter und beschreibt, wie weit vom oberen Rand der Box der Transformationsursprung gesetzt ist.
- _z-offset_
  - : Ist eine {{cssxref("&lt;length&gt;")}} (und niemals ein {{cssxref("&lt;percentage&gt;")}}, was die Anweisung ungültig machen würde) und beschreibt, wie weit vom Benutzerauge der Ursprung bei z=0 gesetzt ist.

Die Schlüsselwörter sind komfortable Abkürzungen und entsprechen den folgenden {{cssxref("&lt;percentage&gt;")}} Werten:

| Schlüsselwort | Wert  |
| ------------- | ----- |
| `left`        | `0%`  |
| `center`      | `50%` |
| `right`       | `100%`|
| `top`         | `0%`  |
| `bottom`      | `100%`|

## Formale Definition

{{CSSInfo}}

> [!NOTE]
> Der Initialwert von `transform-origin` ist `0 0` für alle SVG-Elemente außer für Wurzel-`<svg>`-Elemente und `<svg>`-Elemente, die ein direktes Kind eines [foreignObject](/de/docs/Web/SVG/Element/foreignObject) sind, wobei der `transform-origin` `50% 50%` ist, wie bei anderen CSS-Elementen. Siehe das [SVG transform-origin](/de/docs/Web/SVG/Attribute/transform-origin) Attribut für mehr Informationen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Demonstration verschiedener Transformationswerte

Dieses Beispiel zeigt den Effekt der Wahl unterschiedlicher `transform-origin` Werte für eine Vielzahl von Transformationsfunktionen.

```html hidden
<div class="container">
  <div class="example">
    <div class="box box1">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: none;
  </pre>

  <div class="example">
    <div class="box box2">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
  </pre>

  <div class="example">
    <div class="box box3">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box4">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 100% 100%;
  </pre>

  <div class="example">
    <div class="box box5">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: -1em -3em;
  </pre>

  <div class="example">
    <div class="box box6">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
  </pre>

  <div class="example">
    <div class="box box7">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box8">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box9">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewX(50deg);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box10">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewY(50deg);
transform-origin: 100% -30%;
  </pre>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 20px;
}

.example {
  position: relative;
  margin: 0 2em 4em 5em;
}

.box {
  display: inline-block;
  width: 3em;
  height: 3em;
  border: solid 1px;
  background-color: palegreen;
}

.original {
  position: absolute;
  left: 0;
  opacity: 20%;
}

.box1 {
  transform: none;
}

.box2 {
  transform: rotate(30deg);
}

.box3 {
  transform: rotate(30deg);
  transform-origin: 0 0;
}

.box4 {
  transform: rotate(30deg);
  transform-origin: 100% 100%;
}

.box5 {
  transform: rotate(30deg);
  transform-origin: -1em -3em;
}

.box6 {
  transform: scale(1.7);
}

.box7 {
  transform: scale(1.7);
  transform-origin: 0 0;
}

.box8 {
  transform: scale(1.7);
  transform-origin: 100% -30%;
}

.box9 {
  transform: skewX(50deg);
  transform-origin: 100% -30%;
}

.box10 {
  transform: skewY(50deg);
  transform-origin: 100% -30%;
}
```

{{EmbedLiveSample('A_demonstration_of_various_transform_values', '', 1350) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- <https://css-tricks.com/almanac/properties/t/transform-origin/>
