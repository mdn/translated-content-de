---
title: border-image-slice
slug: Web/CSS/Reference/Properties/border-image-slice
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Regionen auf. Diese Regionen bilden die Komponenten eines Elements [Rahmenbildes](/de/docs/Web/CSS/Reference/Properties/border-image).

{{InteractiveExample("CSS Demo: border-image-slice")}}

```css interactive-example-choice
border-image-slice: 30;
```

```css interactive-example-choice
border-image-slice: 30 fill;
```

```css interactive-example-choice
border-image-slice: 44;
```

```css interactive-example-choice
border-image: url("/shared-assets/images/examples/border-florid.svg") round;
border-image-slice: calc(50 / 184 * 100%) calc(80 / 284 * 100%) fill;
border-image-width: 30px 48px;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: black;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

Der Schneideprozess erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten festgelegt sind, steuern die Größe der Regionen.

![Die neun Regionen, die durch die Eigenschaften border-image oder border-image-slice definiert werden](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Rahmenbildes zu bilden.
- Zonen 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/border-image-repeat), um im endgültigen Rahmenbild den Abmessungen des Elements zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Regionen verwendet werden, um das endgültige Rahmenbild zu bilden.

## Syntax

```css
/* All sides */
border-image-slice: 30%;

/* top and bottom | left and right */
border-image-slice: 10% 30%;

/* top | left and right | bottom */
border-image-slice: 30 30% 45;

/* top | right | bottom | left */
border-image-slice: 7 12 14 5;

/* Using the `fill` keyword */
border-image-slice: 10% fill;
border-image-slice: fill 10%;

/* Global values */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: revert;
border-image-slice: revert-layer;
border-image-slice: unset;
```

Die `border-image-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jeder Bildscheibe darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben ist, werden alle vier Scheiben in gleichem Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben sind, erstellt der erste Wert Scheiben, die vom **oben und unten** gemessen werden, der zweite erstellt Scheiben, die vom **links und rechts** gemessen werden.
- Wenn **drei** Positionen angegeben sind, erstellt der erste Wert eine Scheibe, die vom **oben** gemessen wird, der zweite erstellt Scheiben, die vom **links und rechts** gemessen werden, und der dritte erstellt eine Scheibe, die vom **unten** gemessen wird.
- Wenn **vier** Positionen angegeben sind, erstellen sie Scheiben, die vom **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn) gemessen werden.

Der optionale Wert `fill`, falls verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Kantenversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Für Vektorbilder bezieht sich die Zahl auf die Größe des Elements, nicht auf die Größe des Quellbildes, daher sind in diesen Fällen Prozentsätze allgemein vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Kantenversatz als Prozentsatz der Größe des Quellbildes dar: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt die mittlere Bildregion und zeigt sie wie ein Hintergrundbild an, jedoch über dem eigentlichen {{cssxref("background")}} gestapelt. Seine Breite und Höhe sind so dimensioniert, dass sie den oberen und linken Bildregionen entsprechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Rahmenbreite und Scheibe

Das folgende Beispiel zeigt ein `<div>` mit einem Rahmenbild, das darauf eingestellt ist. Das Quellbild für die Rahmen lautet wie folgt:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher führt das Setzen von 30 Pixeln sowohl als Wert für [`border-width`](/de/docs/Web/CSS/Reference/Properties/border-width) als auch `border-image-slice` zu vollständigen und recht scharfen Diamanten in Ihrem Rahmen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der oben genannten beiden Eigenschaften dynamisch ändern können, damit Sie die Wirkung dieser Eigenschaften schätzen können:

`border-image-slice` ändert die Größe der Bildscheibe, die für jeden Rand und jede Ecke (und den Inhaltsbereich, falls das Schlüsselwort `fill` verwendet wird) verwendet wird — wenn Sie den Abstand von 30 ändern, wirkt der Rand etwas unregelmäßig, kann jedoch interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die abgetastete Bildgröße wird skaliert, um in den Rahmen zu passen. Das bedeutet, dass, wenn die Breite größer als die Scheibe ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

#### HTML

```html
<div class="wrapper">
  <div></div>
</div>

<ul>
  <li>
    <label for="width">slide to adjust <code>border-width</code></label>
    <input type="range" min="10" max="45" id="width" />
    <output id="width-output">30px</output>
  </li>
  <li>
    <label for="slice">slide to adjust <code>border-image-slice</code></label>
    <input type="range" min="10" max="45" id="slice" />
    <output id="slice-output">30</output>
  </li>
</ul>
```

#### CSS

```css
.wrapper {
  width: 400px;
  height: 300px;
}

div > div {
  width: 300px;
  height: 200px;
  border-width: 30px;
  border-style: solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png");
  border-image-slice: 30;
  border-image-repeat: round;
}

li {
  display: flex;
  place-content: center;
}
```

#### JavaScript

```js
const widthSlider = document.getElementById("width");
const sliceSlider = document.getElementById("slice");
const widthOutput = document.getElementById("width-output");
const sliceOutput = document.getElementById("slice-output");
const divElem = document.querySelector("div > div");

widthSlider.addEventListener("input", () => {
  const newValue = `${widthSlider.value}px`;
  divElem.style.borderWidth = newValue;
  widthOutput.textContent = newValue;
});

sliceSlider.addEventListener("input", () => {
  const newValue = sliceSlider.value;
  divElem.style.borderImageSlice = newValue;
  sliceOutput.textContent = newValue;
});
```

#### Ergebnis

{{EmbedLiveSample('Adjustable_border_width_and_slice', '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Illustrierte Beschreibung der 1-bis-4-Wert-Syntax](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties#tricky_edge_cases)
- [Rahmenbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
