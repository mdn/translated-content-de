---
title: border-image-slice
slug: Web/CSS/Reference/Properties/border-image-slice
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das Bild, das von {{cssxref("border-image-source")}} angegeben wird, in Regionen auf. Diese Regionen bilden die Komponenten des [Randbildes](/de/docs/Web/CSS/Reference/Properties/border-image) eines Elements.

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

Der Schneideprozess erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und eine Mittelregion. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, kontrollieren die Größe der Regionen.

![Die neun durch die Eigenschaften border-image oder border-image-slice definierten Regionen](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede wird ein einziges Mal verwendet, um die Ecken des endgültigen Randbildes zu formen.
- Zonen 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/border-image-repeat) im endgültigen Randbild, um den Abmessungen des Elements zu entsprechen.
- Zone 9 ist die Mittelregion. Sie wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Regionen verwendet werden, um das endgültige Randbild zu bilden.

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

Die `border-image-slice`-Eigenschaft kann mit einem bis vier `<number-percentage>`-Werten angegeben werden, um die Position jedes Bildschnitts darzustellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension überschreiten, werden auf `100%` begrenzt.

- Wenn **ein** Wert angegeben ist, erstellt er alle vier Schnitte im gleichen Abstand von ihren jeweiligen Seiten.
- Wenn **zwei** Werte angegeben sind, erstellt der erste Wert Schnitte, die vom **oberen und unteren** Rand gemessen werden, und der zweite Wert erstellt Schnitte, die vom **linken und rechten** Rand gemessen werden.
- Wenn **drei** Werte angegeben sind, erstellt der erste Wert einen Schnitt, der vom **oberen** Rand gemessen wird, der zweite erstellt Schnitte, die vom **linken und rechten** Rand gemessen werden, und der dritte erstellt einen Schnitt, der vom **unteren** Rand gemessen wird.
- Wenn **vier** Werte angegeben sind, erstellen sie Schnitte, die in dieser Reihenfolge vom **oberen**, **rechten**, **unteren** und **linken** Rand gemessen werden (im Uhrzeigersinn).

Der optionale `fill`-Wert kann, falls verwendet, überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern bezieht sich die Zahl auf die Größe des Elements, nicht auf die Größe des Quellbildes, daher sind in diesen Fällen Prozentsätze im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randversatz als Prozentsatz der Größe des Quellbildes dar: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt die mittlere Bildregion und zeigt sie wie ein Hintergrundbild an, jedoch über dem tatsächlichen {{cssxref("background")}} gestapelt. Ihre Breite und Höhe werden dimensioniert, um den oberen und linken Bildregionen zu entsprechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Randbreite und Slice

Das folgende Beispiel zeigt ein `<div>`, auf dem ein Randbild gesetzt ist. Das Quellbild für die Ränder ist wie folgt:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px groß, daher erreichen Sie komplette und recht klare Diamanten in Ihrem Rand, indem Sie 30 Pixel als Wert sowohl für [`border-width`](/de/docs/Web/CSS/Reference/Properties/border-width) als auch für `border-image-slice` setzen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der beiden obigen Eigenschaften dynamisch ändern können, sodass Sie den Effekt, den sie haben, zu schätzen wissen:

`border-image-slice` ändert die Größe des Bildschnitts, der für jeden Rand und jede Ecke (und den Inhaltsbereich, falls das Schlüsselwort `fill` verwendet wird) verwendet wird – eine Änderung von 30 führt dazu, dass der Rand etwas unregelmäßig aussieht, kann jedoch interessante Effekte haben.

`border-width`: Ändert die Breite des Randes. Die Größe des Bildausschnitts wird skaliert, um in den Rand zu passen, was bedeutet, dass, wenn die Breite größer als der Schnitt ist, das Bild anfangen kann, etwas pixelig auszusehen (es sei denn, Sie verwenden ein SVG-Bild).

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

- [Illustrierte Beschreibung der Syntax mit 1 bis 4 Werten](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties#tricky_edge_cases)
- [Randbilder in CSS: Ein zentraler Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
