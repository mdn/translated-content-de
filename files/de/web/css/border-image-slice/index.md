---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Regionen. Diese Regionen bilden die Bestandteile eines Elements [Rahmenbildes](/de/docs/Web/CSS/border-image).

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
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

Der Schneideprozess erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Regionen.

![Die neun von den Eigenschaften border-image oder border-image-slice definierten Regionen](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Rahmenbildes zu bilden.
- Zonen 5-8 sind Kantenregionen. Diese werden im endgültigen Rahmenbild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat), um den Abmessungen des Elements zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}} und {{cssxref("border-image-outset")}} bestimmen, wie diese Regionen verwendet werden, um das endgültige Rahmenbild zu bilden.

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

Die `border-image-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildslices darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben ist, werden alle vier Slices im gleichen Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben sind, erstellt der erste Wert Slices, die von **oben und unten** gemessen werden, der zweite erstellt Slices, die von **links und rechts** gemessen werden.
- Wenn **drei** Positionen angegeben sind, erstellt der erste Wert ein Slice, das von **oben** gemessen wird, der zweite erstellt Slices, die von **links und rechts** gemessen werden, der dritte erstellt ein Slice, das von **unten** gemessen wird.
- Wenn **vier** Positionen angegeben sind, erstellen sie Slices, die in dieser Reihenfolge (im Uhrzeigersinn) von **oben**, **rechts**, **unten** und **links** gemessen werden.

Der optionale `fill` Wert, falls verwendet, kann an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenabstand in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern bezieht sich die Zahl auf die Größe des Elements, nicht auf die Größe des Quellbilds, daher sind Prozentsätze in diesen Fällen allgemein vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenabstand als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Abstände, die Höhe für vertikale Abstände.
- `fill`
  - : Bewahrt die mittlere Bildregion und zeigt sie wie ein Hintergrundbild, jedoch über dem tatsächlichen {{cssxref("background")}} gestapelt. Seine Breite und Höhe werden angepasst, um den oberen und linken Bildregionen zu entsprechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellbare Rahmenbreite und Slice

Das folgende Beispiel zeigt ein `<div>` mit einem Rahmenbild darauf. Das Quellbild für die Rahmen ist folgendes:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher ergibt das Setzen von 30 Pixeln als Wert sowohl für [`border-width`](/de/docs/Web/CSS/border-width) als auch für `border-image-slice` vollständige und ziemlich klare Diamanten in Ihrem Rahmen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der beiden oben genannten Eigenschaften dynamisch ändern können, damit Sie die Wirkung schätzen können:

`border-image-slice` Ändert die Größe des Bildslices, das für jede Grenze und Ecke (und den Inhaltsbereich, wenn das Schlüsselwort `fill` verwendet wird) verwendet wird — das Variieren dieses Werts von 30 führt dazu, dass der Rahmen etwas unregelmäßig aussieht, kann jedoch einige interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die Größe des gesampelten Bildes wird angepasst, um in den Rahmen zu passen, was bedeutet, dass, wenn die Breite größer als das Slice ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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
  border-image: url(/shared-assets/images/examples/border-diamonds.png);
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

- [Illustrierte Beschreibung der 1-bis-4-Wert-Syntax](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties#tricky_edge_cases)
- [Rahmenbilder in CSS: Ein Schlüsselfokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
