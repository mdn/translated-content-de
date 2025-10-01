---
title: transform-origin
slug: Web/CSS/transform-origin
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

Die **`transform-origin`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt den Ursprung für die Transformationen eines Elements fest.

{{InteractiveExample("CSS Demo: transform-origin")}}

```css interactive-example-choice
transform-origin: center;
```

```css interactive-example-choice
transform-origin: top left;
```

```css interactive-example-choice
transform-origin: 50px 50px;
```

```css interactive-example-choice
/* 3D rotation with z-axis origin */
transform-origin: bottom right 60px;
```

```html interactive-example
<section id="default-example">
  <div id="example-container">
    <div id="example-element">Rotate me!</div>
    <img
      alt=""
      id="crosshair"
      src="/shared-assets/images/examples/crosshair.svg"
      width="24px" />
    <div id="static-element"></div>
  </div>
</section>
```

```css interactive-example
@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(30deg);
  }
}

@keyframes rotate3d {
  from {
    transform: rotate3d(0, 0, 0, 0);
  }

  to {
    transform: rotate3d(1, 2, 0, 60deg);
  }
}

#example-container {
  width: 160px;
  height: 160px;
  position: relative;
}

#example-element {
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: #f7ebee;
  color: black;
  font-size: 1.2rem;
  text-transform: uppercase;
}

#example-element.rotate {
  animation: rotate 1s forwards;
}

#example-element.rotate3d {
  animation: rotate3d 1s forwards;
}

#crosshair {
  width: 24px;
  height: 24px;
  opacity: 0;
  position: absolute;
}

#static-element {
  width: 100%;
  height: 100%;
  position: absolute;
  border: dotted 3px #ff1100;
}
```

```js interactive-example
const crosshair = document.getElementById("crosshair");
const el = document.getElementById("example-element");

function update() {
  const selected = document.querySelector(".selected");

  /* Restart the animation
           https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Tips */
  el.className = "";
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      el.className =
        el.style.transformOrigin.split(" ")[2] === "60px"
          ? "rotate3d"
          : "rotate";
    });
  });

  const transformOrigin = getComputedStyle(el).transformOrigin;
  const pos = transformOrigin.split(/\s+/);
  crosshair.style.left = `calc(${pos[0]} - 12px)`;
  crosshair.style.top = `calc(${pos[1]} - 12px)`;
}

const observer = new MutationObserver(() => {
  update();
});

observer.observe(el, {
  attributes: true,
  attributeFilter: ["style"],
});

update();
crosshair.style.opacity = "1";
```

Der Transformationsursprung ist der Punkt, um den eine Transformation angewendet wird. Zum Beispiel ist der Transformationsursprung der [`rotate()`](/de/docs/Web/CSS/transform-function/rotate)-Funktion der Rotationsmittelpunkt.

In der Praxis fügt diese Eigenschaft dem Element ein Paar von Übersetzungen um die anderen Transformationen des Elements hinzu. Die erste Übersetzung verschiebt den Transformationsursprung zum tatsächlichen Ursprung bei <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>. Dann werden die anderen Transformationen angewendet, und da der Transformationsursprung bei <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math> liegt, wirken diese Transformationen um den Transformationsursprung. Schließlich wird die gegenläufige Übersetzung angewendet, um den Transformationsursprung zu seinem ursprünglichen Ort zurückzubringen. Folglich ergibt diese Definition

```css
transform-origin: -100% 50%;
transform: rotate(45deg);
```

dieselbe Transformation wie

```css
transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
```

Von rechts nach links gelesen, ist `translate(100%, -50%)` die Übersetzung, um den Transformationsursprung zum eigentlichen Ursprung zu bringen, `rotate(45deg)` ist die ursprüngliche Transformation, und `translate(-100%, 50%)` ist die Übersetzung, um den Transformationsursprung zu seinem ursprünglichen Standort zurückzubringen.

Standardmäßig ist der Ursprung einer Transformation das `center`.

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

Die `transform-origin` Eigenschaft kann mit einem, zwei oder drei Werten angegeben werden, wobei jeder Wert ein Versatz darstellt. Nicht explizit definierte Versätze werden auf ihre entsprechenden [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) zurückgesetzt.

Wenn ein einzelner {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert definiert ist, repräsentiert er den horizontalen Versatz.

Wenn zwei oder mehr Werte definiert sind und entweder kein Wert ein Schlüsselwort ist, oder das einzige verwendete Schlüsselwort `center` ist, repräsentiert der erste Wert den horizontalen und der zweite den vertikalen Versatz.

- Ein-Wert-Syntax:
  - Der Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder eines der Schlüsselwörter `left`, `center`, `right`, `top` und `bottom` sein.

- Zwei-Werte-Syntax:
  - Ein Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder eines der Schlüsselwörter `left`, `center`, und `right` sein.
  - Der andere Wert muss ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder eines der Schlüsselwörter `top`, `center`, und `bottom` sein.

- Drei-Werte-Syntax:
  - Die ersten beiden Werte sind die gleichen wie bei der Zwei-Wert-Syntax.
  - Der dritte Wert muss ein {{cssxref("&lt;length&gt;")}} sein. Er repräsentiert immer den Z-Versatz.

### Werte

- _x-Versatz_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der beschreibt, wie weit vom linken Rand der Box der Ursprung der Transformation gesetzt ist.
- _Versatz-Schlüsselwort_
  - : Ist eines der `left`, `right`, `top`, `bottom`, oder `center` Schlüsselwörter, die den entsprechenden Versatz beschreiben.
- _y-Versatz_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der beschreibt, wie weit vom oberen Rand der Box der Ursprung der Transformation gesetzt ist.
- _x-Versatz-Schlüsselwort_
  - : Ist eines der `left`, `right`, oder `center` Schlüsselwörter, die beschreiben, wie weit vom linken Rand der Box der Ursprung der Transformation gesetzt ist.
- _y-Versatz-Schlüsselwort_
  - : Ist eines der `top`, `bottom`, oder `center` Schlüsselwörter, die beschreiben, wie weit vom oberen Rand der Box der Ursprung der Transformation gesetzt ist.
- _z-Versatz_
  - : Ist ein {{cssxref("&lt;length&gt;")}} (und niemals ein {{cssxref("&lt;percentage&gt;")}}, was die Anweisung ungültig machen würde), der beschreibt, wie weit vom Auge des Benutzers der z=0 Ursprung gesetzt ist.

Die Schlüsselwörter sind praktische Abkürzungen und entsprechen den folgenden {{cssxref("&lt;percentage&gt;")}} Werten:

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
> Der Anfangswert von `transform-origin` ist `0 0` für alle SVG-Elemente, außer Wurzel-`<svg>` Elemente und `<svg>` Elemente, die ein direktes Kind eines [foreignObject](/de/docs/Web/SVG/Reference/Element/foreignObject) sind, und deren `transform-origin` ist `50% 50%`, wie andere CSS-Elemente. Siehe das [SVG transform-origin](/de/docs/Web/SVG/Reference/Attribute/transform-origin) Attribut für mehr Informationen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Demonstration verschiedener Transformationswerte

Dieses Beispiel zeigt die Wirkung der Wahl verschiedener `transform-origin` Werte für eine Vielzahl von Transformationsfunktionen.

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
- SVG {{SVGAttr("transform-origin")}} Attribut
- <https://css-tricks.com/almanac/properties/t/transform-origin/>
