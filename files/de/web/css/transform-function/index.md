---
title: <transform-Funktion>
slug: Web/CSS/transform-function
l10n:
  sourceCommit: eed8f70c7533196f575f69a5431b9ac0e447d2b8
---

{{CSSRef}}

Der **`<transform-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Transformation, die das Erscheinungsbild eines Elements beeinflusst. Transformations[funktionen](/de/docs/Web/CSS/CSS_Functions) können ein Element in 2D oder 3D drehen, skalieren, verzerren oder verschieben. Sie wird in der Eigenschaft {{cssxref("transform")}} verwendet.

## Syntax

Der `<transform-function>` Datentyp wird mit einer der unten aufgeführten Transformationsfunktionen angegeben. Jede Funktion führt eine geometrische Operation in 2D oder 3D durch.

### Matrixtransformation

- [`matrix()`](/de/docs/Web/CSS/transform-function/matrix)
  - : Beschreibt eine homogene 2D-Transformationsmatrix.
- [`matrix3d()`](/de/docs/Web/CSS/transform-function/matrix3d)
  - : Beschreibt eine 3D-Transformation als eine 4×4 homogene Matrix.

### Perspektive

- [`perspective()`](/de/docs/Web/CSS/transform-function/perspective)
  - : Legt den Abstand zwischen dem Benutzer und der z=0 Ebene fest.

### Rotation

- [`rotate()`](/de/docs/Web/CSS/transform-function/rotate)
  - : Dreht ein Element um einen festen Punkt auf der 2D-Ebene.
- [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d)
  - : Dreht ein Element um eine feste Achse im 3D-Raum.
- [`rotateX()`](/de/docs/Web/CSS/transform-function/rotateX)
  - : Dreht ein Element um die horizontale Achse.
- [`rotateY()`](/de/docs/Web/CSS/transform-function/rotateY)
  - : Dreht ein Element um die vertikale Achse.
- [`rotateZ()`](/de/docs/Web/CSS/transform-function/rotateZ)
  - : Dreht ein Element um die z-Achse.

### Skalierung (Größenänderung)

- [`scale()`](/de/docs/Web/CSS/transform-function/scale)
  - : Skaliert ein Element nach oben oder unten auf der 2D-Ebene.
- [`scale3d()`](/de/docs/Web/CSS/transform-function/scale3d)
  - : Skaliert ein Element nach oben oder unten im 3D-Raum.
- [`scaleX()`](/de/docs/Web/CSS/transform-function/scaleX)
  - : Skaliert ein Element horizontal.
- [`scaleY()`](/de/docs/Web/CSS/transform-function/scaleY)
  - : Skaliert ein Element vertikal.
- [`scaleZ()`](/de/docs/Web/CSS/transform-function/scaleZ)
  - : Skaliert ein Element entlang der z-Achse.

### Verzerrung

- [`skew()`](/de/docs/Web/CSS/transform-function/skew)
  - : Verzerrt ein Element auf der 2D-Ebene.
- [`skewX()`](/de/docs/Web/CSS/transform-function/skewX)
  - : Verzerrt ein Element in horizontaler Richtung.
- [`skewY()`](/de/docs/Web/CSS/transform-function/skewY)
  - : Verzerrt ein Element in vertikaler Richtung.

### Verschiebung

- [`translate()`](/de/docs/Web/CSS/transform-function/translate)
  - : Verschiebt ein Element auf der 2D-Ebene.
- [`translate3d()`](/de/docs/Web/CSS/transform-function/translate3d)
  - : Verschiebt ein Element im 3D-Raum.
- [`translateX()`](/de/docs/Web/CSS/transform-function/translateX)
  - : Verschiebt ein Element horizontal.
- [`translateY()`](/de/docs/Web/CSS/transform-function/translateY)
  - : Verschiebt ein Element vertikal.
- [`translateZ()`](/de/docs/Web/CSS/transform-function/translateZ)
  - : Verschiebt ein Element entlang der z-Achse.

## Beschreibung

Verschiedene Koordinatenmodelle können verwendet werden, um die Größe und Form eines HTML-Elements sowie alle darauf angewendeten Transformationen zu beschreiben. Das am häufigsten verwendete ist das [kartesische Koordinatensystem](https://en.wikipedia.org/wiki/Cartesian_coordinate_system), obwohl manchmal auch [homogene Koordinaten](https://en.wikipedia.org/wiki/Homogeneous_coordinates) verwendet werden.

### Kartesische Koordinaten

Im kartesischen Koordinatensystem wird ein zweidimensionaler Punkt durch zwei Werte beschrieben: eine x-Koordinate (Abszisse) und eine y-Koordinate (Ordinate). Dies wird durch die Vektornotation `(x, y)` dargestellt.

![Ein kartesisches Koordinatensystem zeigt die negative Y- und positive X-Achse, beginnend vom Ursprung mit drei Punkten P1, P2 und P3 mit entsprechenden X- und Y-Werten](coord_in_r2.png)

In CSS (und den meisten Computergrafiken) repräsentiert der Ursprung `(0, 0)` die obere linke Ecke eines Elements. Positive Koordinaten liegen unterhalb und rechts des Ursprungs, während negative oberhalb und links davon liegen. Ein Punkt, der 2 Einheiten nach rechts und 5 Einheiten nach unten liegt, wäre also `(2, 5)`, während ein Punkt 3 Einheiten nach links und 12 Einheiten nach oben `(-3, -12)` wäre.

### Transformationsfunktionen

Transformationsfunktionen ändern das Erscheinungsbild eines Elements, indem sie die Werte seiner Koordinaten manipulieren. Eine lineare Transformationsfunktion wird mit einer 2×2-Matrix beschrieben, wie folgt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a & c \\ b & d \end{pmatrix}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Funktion wird auf ein Element angewendet, indem sie die Matrixmultiplikation verwendet. So ändern sich die Koordinaten basierend auf den Werten in der Matrix:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi></mtd></mtr><mtr><mtd><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX">\left( \begin{array}{cc} a & c \\ b & d \end{array} \right) \left( \begin{array}{c} x \\ y \end{array} \right) = \left( \begin{array}{c} ax + cy \\ bx + dy \end{array} \right)</annotation>
</semantics>
</math>
<!-- prettier-ignore-end -->

Es ist sogar möglich, mehrere Transformationen hintereinander anzuwenden:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd><mtd><msub><mi>c</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub></mtd><mtd><msub><mi>d</mi><mn>1</mn></msub></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd><mtd><msub><mi>c</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>2</mn></msub></mtd><mtd><msub><mi>d</mi><mn>2</mn></msub></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>b</mi><mn>2</mn></msub></mtd><mtd><msub><mi>a</mi><mn>1</mn></msub><msub><mi>c</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>d</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>d</mi><mn>1</mn></msub><msub><mi>b</mi><mn>2</mn></msub></mtd><mtd><msub><mi>b</mi><mn>1</mn></msub><msub><mi>c</mi><mn>2</mn></msub><mo>+</mo><msub><mi>d</mi><mn>1</mn></msub><msub><mi>d</mi><mn>2</mn></msub></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX">\left( \begin{array}{cc} a_1 & c_1 \\ b_1 & d_1 \end{array} \right) \left( \begin{array}{cc} a_2 & c_2 \\ b_2 & d_2 \end{array} \right) = \left( \begin{array}{cc} a_1a_2 + c_1b_2 & a_1c_2 + c_1d_2 \\ b_1a_2 + d_1b_2 & b_1c_2 + d_1d_2 \end{array} \right)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Mit dieser Notation lässt sich die Mehrheit der gebräuchlichen Transformationen beschreiben und somit auch zusammensetzen: Rotationen, Skalierung oder Verzerrung. (Tatsächlich lassen sich alle Transformationen, die lineare Funktionen sind, beschreiben.) Zusammengesetzte Transformationen werden effektiv in der Reihenfolge von rechts nach links angewendet.

Eine wichtige Transformation ist jedoch nicht linear und muss daher bei dieser Notation speziell behandelt werden: die Translation. Der Translationsvektor `(tx, ty)` muss separat als zwei zusätzliche Parameter ausgedrückt werden.

> [!NOTE]
> Obwohl sie komplizierter sind als kartesische Koordinaten, führen [homogene Koordinaten](https://en.wikipedia.org/wiki/Homogeneous_coordinates) in der [projektiven Geometrie](https://en.wikipedia.org/wiki/Projective_geometry) zu 3×3 Transformationsmatrizen und können Translationen als lineare Funktionen ausdrücken.

> [!NOTE]
> Transformationsfunktionen werden mit der `transform`-Eigenschaft verwendet, nicht jedoch mit individuellen Transformationseigenschaften-{{cssxref("translate")}}, {{cssxref("scale")}} und {{cssxref("rotate")}}.

## Beispiele

### Vergleich von Transformationsfunktionen

Das folgende Beispiel zeigt einen 3D-Würfel, der aus DOM-Elementen und Transformationen erstellt wurde, sowie ein Auswahlelement, mit dem Sie verschiedene Transformationsfunktionen auswählen können, um den Würfel zu transformieren und die Auswirkungen der verschiedenen Arten zu vergleichen.

Wählen Sie eine aus, und die Transformation wird auf den Würfel angewendet; nach 2 Sekunden kehrt der Würfel in seinen Ausgangszustand zurück. Der Ausgangszustand des Würfels ist mit `transform3d()` leicht gedreht, um Ihnen die Wirkung aller Transformationen zu zeigen.

#### HTML

```html
<main>
  <section id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </section>

  <div class="select-form">
    <label for="transfunction">Select a transform function</label>
    <select id="transfunction">
      <option selected>Choose a function</option>
      <option>rotate(360deg)</option>
      <option>rotateX(360deg)</option>
      <option>rotateY(360deg)</option>
      <option>rotateZ(360deg)</option>
      <option>rotate3d(1, 1, 1, 90deg)</option>
      <option>scale(1.5)</option>
      <option>scaleX(1.5)</option>
      <option>scaleY(1.5)</option>
      <option>scaleZ(1.5)</option>
      <option>scale3d(1, 1.5, 1.5)</option>
      <option>skew(17deg, 13deg)</option>
      <option>skewX(17deg)</option>
      <option>skewY(17deg)</option>
      <option>translate(100px, 100px)</option>
      <option>translateX(100px)</option>
      <option>translateY(100px)</option>
      <option>translateZ(100px)</option>
      <option>translate3d(50px, 50px, 50px)</option>
      <option>perspective(200px)</option>
      <option>matrix(1, 2, -1, 1, 80, 80)</option>
      <option>matrix3d(1,0,0,0,0,1,3,0,0,0,1,0,50,100,0,1.1)</option>
    </select>
  </div>
</main>
```

#### CSS

```css
main {
  width: 400px;
  height: 200px;
  padding: 50px;
  background-image: linear-gradient(135deg, white, cyan, white);
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
  transform: rotate3d(1, 1, 1, 30deg);
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
  color: #fff;
}

.front {
  background: rgb(90 90 90 / 70%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 70%);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

.select-form {
  margin-top: 50px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const example = document.querySelector("#example-element");

selectElem.addEventListener("change", () => {
  if (selectElem.value === "Choose a function") {
    return;
  } else {
    example.style.transform = `rotate3d(1, 1, 1, 30deg) ${selectElem.value}`;
    setTimeout(() => {
      example.style.transform = "rotate3d(1, 1, 1, 30deg)";
    }, 2000);
  }
});
```

#### Ergebnis

{{EmbedLiveSample('Transform_function_comparison', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("transform")}}-Eigenschaft
- Individuelle Transformationseigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}