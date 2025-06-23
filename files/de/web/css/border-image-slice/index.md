---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: 2d0a686dc4734a5e3c00aee2974a00a02162f424
---

{{CSSRef}}

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Bereiche. Diese Bereiche bilden die Komponenten eines Elements [Randbild](/de/docs/Web/CSS/border-image).

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

Der Schneideprozess erzeugt insgesamt neun Bereiche: vier Ecken, vier Kanten und einen zentralen Bereich. Vier Schneidelinien, die in einem bestimmten Abstand zu ihren jeweiligen Seiten liegen, steuern die Größe der Bereiche.

![Die neun Bereiche, die durch die border-image oder border-image-slice Eigenschaften definiert werden](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jeder wird einmalig verwendet, um die Ecken des endgültigen Randbildes zu bilden.
- Zonen 5-8 sind Kantenbereiche. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat) im endgültigen Randbild, um den Abmessungen des Elements zu entsprechen.
- Zone 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}} und {{cssxref("border-image-outset")}} Eigenschaften bestimmen, wie diese Bereiche verwendet werden, um das endgültige Randbild zu bilden.

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

Die `border-image-slice` Eigenschaft kann mit einem bis zu vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildschnitts darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, werden alle vier Schnitte in gleichem Abstand zu ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben werden, erstellt der erste Wert Schnitte, die vom **obersten und untersten** gemessen werden, der zweite erstellt Schnitte, die vom **linken und rechten** gemessen werden.
- Wenn **drei** Positionen angegeben werden, erstellt der erste Wert einen Schnitt, der vom **obersten** gemessen wird, der zweite erstellt Schnitte, die vom **linken und rechten** gemessen werden, der dritte erstellt einen Schnitt, der vom **untersten** gemessen wird.
- Wenn **vier** Positionen angegeben werden, erstellen sie Schnitte gemessen vom **obersten**, **rechten**, **untersten** und **linken** in dieser Reihenfolge (im Uhrzeigersinn).

Der optionale `fill` Wert, falls verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Kantenzwischenraum in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Bei Vektorbildern ist die Zahl relativ zur Größe des Elements und nicht zur Größe des Quellbildes, daher sind Prozentsätze in diesen Fällen im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Kantenzwischenraum als Prozentsatz der Größe des Quellbildes dar: die Breite des Bildes für horizontale Zwischenräume, die Höhe für vertikale Zwischenräume.
- `fill`
  - : Bewahrt den mittleren Bildbereich und zeigt ihn wie ein Hintergrundbild an, aber über dem eigentlichen {{cssxref("background")}} gestapelt. Seine Breite und Höhe sind auf die Größe der oberen und linken Bildbereiche abgestimmt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellbare Randbreite und Schnitt

Das folgende Beispiel zeigt ein `<div>` mit einem Randbild, das darauf gesetzt ist. Das Quellbild für die Ränder ist wie folgt:

![Schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher führt das Setzen von 30 Pixeln sowohl als Wert für [`border-width`](/de/docs/Web/CSS/border-width) als auch `border-image-slice` zu vollständigen und ziemlich scharfen Diamanten in Ihrem Rand:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Allerdings haben wir auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der obigen beiden Eigenschaften dynamisch ändern können, damit Sie den Effekt, den sie haben, schätzen können:

`border-image-slice` Ändert die Größe des Bildschnitts, der für jeden Rand und jede Ecke des Rands (und den Inhaltsbereich, falls das `fill` Schlüsselwort verwendet wird) verwendet wird — wenn dieser Wert von 30 abweicht, sieht der Rand möglicherweise etwas unregelmäßig aus, kann jedoch interessante Effekte hervorrufen.

`border-width`: Ändert die Breite des Randes. Die Größe des ausgeschnittenen Bildes wird an die Breite des Randes angepasst, was bedeutet, dass, wenn die Breite größer als der Schnitt ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden natürlich ein SVG-Bild).

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

- [Illustrierte Beschreibung der 1-zu-4-Wert-Syntax](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties#tricky_edge_cases)
- [Randbilder in CSS: Ein zentraler Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
