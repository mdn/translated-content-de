---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS)-Eigenschaft teilt das Bild auf, das durch {{cssxref("border-image-source")}} angegeben wird, in Regionen. Diese Regionen bilden die Komponenten eines Elements mit [border image](/de/docs/Web/CSS/border-image).

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

Der Schneideprozess erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schneidelinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Regionen.

![Die neun durch border-image oder border-image-slice definierten Regionen](border-image-slice.png)

Das obige Diagramm veranschaulicht die Position jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Randbilds zu formen.
- Zonen 5-8 sind Kantenregionen. Diese werden im endgültigen Randbild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat), um die Dimensionen des Elements anzupassen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, wird aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}} und {{cssxref("border-image-outset")}} bestimmen, wie diese Regionen verwendet werden, um das endgültige Randbild zu bilden.

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

Die `border-image-slice`-Eigenschaft kann mit einem bis vier `<number-percentage>`-Werten angegeben werden, um die Position jedes Bildausschnitts darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **ein** Wert angegeben wird, entstehen alle vier Schnitte in gleichem Abstand von ihren jeweiligen Seiten.
- Wenn **zwei** Werte angegeben werden, erzeugt der erste Wert Schnitte, die vom **oberen und unteren** Rand gemessen werden, der zweite erzeugt Schnitte, die vom **linken und rechten** Rand gemessen werden.
- Wenn **drei** Werte angegeben werden, erzeugt der erste Wert einen Schnitt, der vom **oberen** Rand gemessen wird, der zweite erzeugt Schnitte, die vom **linken und rechten** Rand gemessen werden, der dritte erzeugt einen Schnitt, der vom **unteren** Rand gemessen wird.
- Wenn **vier** Werte angegeben werden, werden sie vom **oberen**, **rechten**, **unteren** und **linken** Rand in dieser Reihenfolge (im Uhrzeigersinn) gemessen.

Der optionale Wert `fill`, falls verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Bei Vektorbildern ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbilds, sodass in diesen Fällen prozentuale Angaben im Allgemeinen vorzuziehen sind.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randversatz als Prozentsatz der Größe des Quellbilds dar: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt die mittlere Bildregion und zeigt sie wie ein Hintergrundbild an, jedoch oberhalb des tatsächlichen {{cssxref("background")}}. Ihre Breite und Höhe sind so bemessen, dass sie zu den oberen und linken Bildregionen passen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Randbreite und Ausschnitt

Das folgende Beispiel zeigt ein `<div>` mit einem Border-Image darauf. Das Quellbild für die Ränder ist wie folgt:

![schöne, mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher wird das Festlegen von 30 Pixeln sowohl als Wert für [`border-width`](/de/docs/Web/CSS/border-width) als auch `border-image-slice` Ihnen vollständige und ziemlich scharfe Diamanten in Ihrem Rand erzeugen:

```css
border-width: 30px;
border-image-slice: 30;
```

Das sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, die es Ihnen ermöglichen, die Werte der oben genannten Eigenschaften dynamisch zu ändern, damit Sie den Effekt, den sie haben, schätzen können:

`border-image-slice` Ändert die Größe des Bildausschnitts, der für jeden Rand und jede Ecke (und den Inhaltsbereich, wenn das Schlüsselwort `fill` verwendet wird) verwendet wird – das Variieren dieses Wertes von 30 entfernt lässt den Rand etwas unregelmäßig aussehen, kann aber einige interessante Effekte haben.

`border-width`: Ändert die Breite des Randes. Die Größe des abgetasteten Bildes wird angepasst, um in den Rand zu passen, was bedeutet, dass wenn die Breite größer als der Ausschnitt ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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
  border-image: url(https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png);
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
- [Randbilder in CSS: Ein wichtiger Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
