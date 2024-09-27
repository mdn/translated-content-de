---
title: transform-origin
slug: Web/CSS/transform-origin
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`transform-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ursprung für die Transformationen eines Elements fest.

{{EmbedInteractiveExample("pages/css/transform-origin.html")}}

Der Transformationsursprung ist der Punkt, um den eine Transformation angewendet wird. Zum Beispiel ist der Transformationsursprung der [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) Funktion das Rotationszentrum.

Effektiv umgibt diese Eigenschaft die anderen Transformationen des Elements mit einem Paar von Übersetzungen. Die erste Übersetzung bewegt den Transformationsursprung zum tatsächlichen Ursprung bei <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>. Danach werden die anderen Transformationen angewendet, und da der Transformationsursprung bei <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math> liegt, wirken diese Transformationen um den Transformationsursprung. Schließlich wird die entgegengesetzte Übersetzung angewendet, um den Transformationsursprung an seinen ursprünglichen Ort zurückzubringen. Folglich führt diese Definition

```css
transform-origin: -100% 50%;
transform: rotate(45deg);
```

zum selben Effekt wie

```css
transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
```

Wenn man von rechts nach links liest, ist `translate(100%, -50%)` die Übersetzung, um den Transformationsursprung zum tatsächlichen Ursprung zu bringen, `rotate(45deg)` die ursprüngliche Transformation, und `translate(-100%, 50%)` ist die Übersetzung, um den Transformationsursprung an seinen ursprünglichen Ort zurückzubringen.

Standardmäßig ist der Ursprung einer Transformation `center`.

## Syntax

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* Global values */
transform-origin: inherit;
transform-origin: initial;
transform-origin: revert;
transform-origin: revert-layer;
transform-origin: unset;
```

Die `transform-origin` Eigenschaft kann mit einem, zwei oder drei Werten spezifiziert werden, wobei jeder Wert einen Versatz darstellt. Nicht explizit definierte Versätze werden auf ihre entsprechenden [Initialwerte](/de/docs/Web/CSS/initial_value) zurückgesetzt.

Wenn ein einzelner {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert definiert ist, stellt er den horizontalen Versatz dar.

Wenn zwei oder mehr Werte definiert sind und entweder kein Wert ein Schlüsselwort ist oder das einzige verwendete Schlüsselwort `center` ist, dann stellt der erste Wert den horizontalen Versatz dar und der zweite den vertikalen Versatz.

- Einwertige Syntax:

  - Der Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder eines der Schlüsselwörter `left`, `center`, `right`, `top`, und `bottom` sein.

- Zweiwertige Syntax:

  - Ein Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder eines der Schlüsselwörter `left`, `center`, und `right` sein.
  - Der andere Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder eines der Schlüsselwörter `top`, `center`, und `bottom` sein.

- Dreiwertige Syntax:

  - Die ersten zwei Werte sind gleich wie bei der zweiwertigen Syntax.
  - Der dritte Wert muss ein {{cssxref("&lt;length&gt;")}} sein. Er stellt immer den Z-Versatz dar.

### Werte

- _x-offset_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und beschreibt, wie weit vom linken Rand der Box der Ursprung der Transformation gesetzt ist.
- _offset-keyword_
  - : Ist eines der Schlüsselwörter `left`, `right`, `top`, `bottom`, oder `center`, das den entsprechenden Versatz beschreibt.
- _y-offset_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und beschreibt, wie weit vom oberen Rand der Box der Ursprung der Transformation gesetzt ist.
- _x-offset-keyword_
  - : Ist eines der Schlüsselwörter `left`, `right`, oder `center`, das beschreibt, wie weit vom linken Rand der Box der Ursprung der Transformation gesetzt ist.
- _y-offset-keyword_
  - : Ist eines der Schlüsselwörter `top`, `bottom`, oder `center`, das beschreibt, wie weit vom oberen Rand der Box der Ursprung der Transformation gesetzt ist.
- _z-offset_
  - : Ist ein {{cssxref("&lt;length&gt;")}} (und niemals ein {{cssxref("&lt;percentage&gt;")}}, das die Anweisung ungültig machen würde) und beschreibt, wie weit vom Benutzerauge der z=0 Ursprung gesetzt ist.

Die Schlüsselwörter sind bequeme Kurzformen und entsprechen den folgenden {{cssxref("&lt;percentage&gt;")}} Werten:

| Schlüsselwort | Wert   |
| ------------- | ------ |
| `left`        | `0%`   |
| `center`      | `50%`  |
| `right`       | `100%` |
| `top`         | `0%`   |
| `bottom`      | `100%` |

## Formale Definition

{{CSSInfo}}

> [!NOTE]
> Der Anfangswert von `transform-origin` ist `0 0` für alle SVG-Elemente außer für Wurzel-`<svg>`-Elemente und `<svg>`-Elemente, die ein direktes Kind eines [foreignObject](/de/docs/Web/SVG/Element/foreignObject) sind und deren `transform-origin` `50% 50%` ist, wie bei anderen CSS-Elementen. Siehe das [SVG transform-origin](/de/docs/Web/SVG/Attribute/transform-origin) Attribut für weitere Informationen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Demonstration verschiedener Transformationswerte

Dieses Beispiel zeigt die Auswirkung der Wahl unterschiedlicher `transform-origin` Werte für eine Vielzahl von Transformationsfunktionen.

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
