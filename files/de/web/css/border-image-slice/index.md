---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Regionen auf. Diese Regionen bilden die Komponenten eines Elements [Rahmenbild](/de/docs/Web/CSS/border-image).

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

Der Schneidevorgang erzeugt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schneidelinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten festgelegt sind, steuern die Größe der Regionen.

![Die neun Regionen, definiert durch die border-image oder border-image-slice Eigenschaften](border-image-slice.png)

Das obige Diagramm veranschaulicht die Position jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Rahmenbildes zu bilden.
- Zonen 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat), um die Dimensionen des Elements im endgültigen Rahmenbild anzupassen.
- Zone 9 ist die mittlere Region. Diese wird standardmäßig verworfen, wird jedoch wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Regionen verwendet werden, um das endgültige Rahmenbild zu formen.

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

Die `border-image-slice` Eigenschaft kann unter Verwendung von ein bis vier `<number-percentage>`-Werten angegeben werden, um die Position jeder Bildschnittlinie darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **ein** Wert angegeben wird, werden alle vier Scheiben in gleichem Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Werte angegeben werden, erstellt der erste Wert Scheiben, die vom **oberen und unteren** Rand gemessen werden, der zweite erstellt Scheiben, die vom **linken und rechten** Rand gemessen werden.
- Wenn **drei** Werte angegeben werden, erstellt der erste Wert eine Scheibe, die vom **oberen** Rand gemessen wird, der zweite erstellt Scheiben, die vom **linken und rechten** Rand gemessen werden, der dritte erstellt eine Scheibe, die vom **unteren** Rand gemessen wird.
- Wenn **vier** Werte angegeben werden, werden die Scheiben in der Reihenfolge vom **oberen**, **rechten**, **unteren** und **linken** Rand (im Uhrzeigersinn) gemessen.

Der optionale `fill` Wert, sofern verwendet, kann an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenoffset in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, sodass in diesen Fällen in der Regel Prozentsätze vorzuziehen sind.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenoffset als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Offsets, die Höhe für vertikale Offsets.
- `fill`
  - : Erhält die mittlere Bildregion und zeigt sie wie ein Hintergrundbild an, jedoch über dem tatsächlichen {{cssxref("background")}} gestapelt. Seine Breite und Höhe sind so bemessen, dass sie den oberen und linken Bildregionen entsprechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellbare Rahmenbreite und -schnitt

Das folgende Beispiel zeigt ein einfaches `<div>` mit einem darauf gesetzten Rahmenbild. Das Quellbild für die Rahmen ist wie folgt:

![nette mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher führen sowohl 30 Pixel für [`border-width`](/de/docs/Web/CSS/border-width) als auch `border-image-slice` zu vollständigen und ziemlich scharfen Diamanten in Ihrem Rahmen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Allerdings haben wir auch zwei Schieberegler bereitgestellt, die es Ihnen ermöglichen, die Werte der beiden obigen Eigenschaften dynamisch zu ändern, damit Sie den Effekt ihrer Veränderung schätzen können:

`border-image-slice` Ändert die Größe des Bildausschnitts, der für jede Rahmen- und Rahmenecke (und den Inhaltsbereich, wenn das Schlüsselwort `fill` verwendet wird) verwendet wird – wenn Sie diesen Wert von 30 ändern, sieht der Rahmen möglicherweise unregelmäßig aus, kann aber interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die gewählte Bildgröße wird skaliert, um in den Rahmen zu passen, was bedeutet, dass wenn die Breite größer als der Ausschnitt ist, das Bild leicht pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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
- [Rahmenbilder in CSS: Ein Schlüsselfokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
