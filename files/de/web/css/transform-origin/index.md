---
title: transform-origin
slug: Web/CSS/transform-origin
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`transform-origin`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Ursprung für die Transformationen eines Elements fest.

{{EmbedInteractiveExample("pages/css/transform-origin.html")}}

Der Transformationsursprung ist der Punkt, um den eine Transformation angewendet wird. Zum Beispiel ist der Transformationsursprung der Funktion [`rotate()`](/de/docs/Web/CSS/transform-function/rotate) das Rotationszentrum.

Tatsächlich umschließt diese Eigenschaft eine Paarung von Verschiebungen um die anderen Transformationen eines Elements. Die erste Verschiebung bewegt den Transformationsursprung zur wahren Ursprungspunktsposition bei <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>. Dann werden die anderen Transformationen angewendet und, da sich der Transformationsursprung bei <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math> befindet, wirken diese Transformationen um diesen Transformationsursprung. Schließlich wird die entgegengesetzte Verschiebung angewendet, um den Transformationsursprung an seinen ursprünglichen Ort zurückzubringen. Folglich ergibt diese Definition

```css
transform-origin: -100% 50%;
transform: rotate(45deg);
```

die gleiche Transformation wie

```css
transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
```

Von rechts nach links gelesen, ist `translate(100%, -50%)` die Verschiebung, um den Transformationsursprung zum wahren Ursprung zu bewegen, `rotate(45deg)` ist die ursprüngliche Transformation und `translate(-100%, 50%)` ist die Verschiebung, um den Transformationsursprung an seinen ursprünglichen Ort zurückzubringen.

Standardmäßig liegt der Ursprung einer Transformation bei `center`.

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

Die Eigenschaft `transform-origin` kann mit einem, zwei oder drei Werten angegeben werden, wobei jeder Wert einen Versatz darstellt. Nicht explizit definierte Versätze werden auf ihre entsprechenden [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value) zurückgesetzt.

Falls nur ein Wert als {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} definiert wird, repräsentiert er den horizontalen Versatz.

Falls zwei oder mehr Werte definiert werden und kein Wert ein Schlüsselwort ist oder das einzige verwendete Schlüsselwort `center` ist, repräsentiert der erste Wert den horizontalen Versatz und der zweite den vertikalen Versatz.

- Syntax mit einem Wert:

  - Der Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder eines der Schlüsselwörter `left`, `center`, `right`, `top` und `bottom` sein.

- Syntax mit zwei Werten:

  - Ein Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder eines der Schlüsselwörter `left`, `center` und `right` sein.
  - Der andere Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder eines der Schlüsselwörter `top`, `center` und `bottom` sein.

- Syntax mit drei Werten:

  - Die ersten beiden Werte entsprechen der Syntax mit zwei Werten.
  - Der dritte Wert muss ein {{cssxref("&lt;length&gt;")}} sein. Er repräsentiert immer den Z-Versatz.

### Werte

- _x-offset_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der beschreibt, wie weit vom linken Rand der Box der Transformationsursprung gesetzt wird.
- _offset-keyword_
  - : Ist eines der Schlüsselwörter `left`, `right`, `top`, `bottom` oder `center`, das den entsprechenden Versatz beschreibt.
- _y-offset_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der beschreibt, wie weit vom oberen Rand der Box der Transformationsursprung gesetzt wird.
- _x-offset-keyword_
  - : Ist eines der Schlüsselwörter `left`, `right` oder `center`, das beschreibt, wie weit vom linken Rand der Box der Transformationsursprung gesetzt wird.
- _y-offset-keyword_
  - : Ist eines der Schlüsselwörter `top`, `bottom` oder `center`, das beschreibt, wie weit vom oberen Rand der Box der Transformationsursprung gesetzt wird.
- _z-offset_
  - : Ist ein {{cssxref("&lt;length&gt;")}} (und niemals ein {{cssxref("&lt;percentage&gt;")}}, da dies die Anweisung ungültig machen würde), der beschreibt, wie weit vom Auge des Benutzers der z=0-Ursprung gesetzt ist.

Die Schlüsselwörter sind praktische Kurzformen und entsprechen den folgenden {{cssxref("&lt;percentage&gt;")}}-Werten:

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
> Der Anfangswert von `transform-origin` ist `0 0` für alle SVG-Elemente außer den Wurzel-`<svg>`-Elementen und `<svg>`-Elementen, die ein direktes Kind eines [foreignObject](/de/docs/Web/SVG/Element/foreignObject) sind, deren `transform-origin` `50% 50%` entspricht, wie bei anderen CSS-Elementen. Weitere Informationen finden Sie im Attribut [SVG transform-origin](/de/docs/Web/SVG/Attribute/transform-origin).

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Demonstration verschiedener Transformationswerte

Dieses Beispiel zeigt die Auswirkungen der Auswahl verschiedener `transform-origin`-Werte für eine Vielzahl von Transformationsfunktionen.

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
- SVG-Attribut {{SVGAttr("transform-origin")}}
- <https://css-tricks.com/almanac/properties/t/transform-origin/>
