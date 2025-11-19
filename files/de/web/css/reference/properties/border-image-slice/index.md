---
title: border-image-slice
slug: Web/CSS/Reference/Properties/border-image-slice
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das Bild, das durch {{cssxref("border-image-source")}} spezifiziert wird, in Bereiche. Diese Bereiche bilden die Komponenten des [Randbildes](/de/docs/Web/CSS/Reference/Properties/border-image) eines Elements.

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

Die Eigenschaft `border-image-slice` kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildabschnitts darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben ist, werden alle vier Schnitte in gleichem Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben sind, wird der erste Wert zum Erstellen der Schnitte vom **oberen und unteren**, der zweite zum Erstellen der Schnitte vom **linken und rechten** Rand verwendet.
- Wenn **drei** Positionen angegeben sind, erstellt der erste Wert einen Schnitt vom **oberen**, der zweite erstellt Schnitte vom **linken und rechten**, der dritte erstellt einen Schnitt vom **unteren** Rand.
- Wenn **vier** Positionen angegeben sind, erstellen sie Schnitte vom **oberen**, **rechten**, **unteren** und **linken** Rand in dieser Reihenfolge (im Uhrzeigersinn).

Der optionale Wert `fill`, falls verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbilds, daher sind in diesen Fällen prozentuale Angaben generell vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenversatz als Prozentsatz der Größe des Quellbilds: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt die mittlere Bildregion und zeigt sie wie ein Hintergrundbild an, jedoch über dem eigentlichen {{cssxref("background")}} gestapelt. Die Breite und Höhe werden entsprechend den oberen und linken Bildregionen angepasst.

## Beschreibung

Der Schneideprozess erzeugt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schneidelinien, die in einem gegebenen Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Regionen.

![Die neun Regionen, die durch die border-image oder border-image-slice Eigenschaften definiert werden](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Bereiche 1-4 sind Eckbereiche. Jeder wird einmal verwendet, um die Ecken des endgültigen Randbildes zu bilden.
- Bereiche 5-8 sind Kantenbereiche. Diese werden im endgültigen Randbild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/border-image-repeat), um die Abmessungen des Elements anzupassen.
- Bereich 9 ist die mittlere Region. Sie wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Regionen verwendet werden, um das endgültige Randbild zu bilden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Randbreite und Schnitt

Das folgende Beispiel zeigt ein `<div>` mit einem gesetzten Randbild. Das Quellbild für die Ränder ist wie folgt:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px groß, daher werden Sie mit dem Wert von 30 Pixeln sowohl für [`border-width`](/de/docs/Web/CSS/Reference/Properties/border-width) als auch für `border-image-slice` vollständige und ziemlich scharfe Diamanten in Ihrem Rand erhalten:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, um Ihnen die Möglichkeit zu geben, die Werte der beiden obigen Eigenschaften dynamisch zu ändern, damit Sie die Wirkung, die sie haben, schätzen können:

`border-image-slice`: Ändert die Größe des Bildausschnitts, der für jeden Rand und Randbereich (und den Inhaltsbereich, falls das `fill` Schlüsselwort verwendet wird) verwendet wird — wenn dieser Wert von 30 abweicht, sieht der Rand etwas unregelmäßig aus, kann jedoch interessante Effekte haben.

`border-width`: Ändert die Breite des Randes. Die Größe des entnommenen Bildes wird skaliert, um in den Rand zu passen, was bedeutet, dass wenn die Breite größer als der Ausschnitt ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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
- [Randbilder in CSS: Ein zentraler Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
