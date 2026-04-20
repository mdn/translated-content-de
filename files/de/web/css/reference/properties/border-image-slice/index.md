---
title: "`border-image-slice` CSS property"
short-title: border-image-slice
slug: Web/CSS/Reference/Properties/border-image-slice
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS)-Eigenschaft teilt das Bild, das durch {{cssxref("border-image-source")}} angegeben ist, in Regionen auf. Diese Regionen bilden die Bestandteile eines Elements, das eine [Randbild](/de/docs/Web/CSS/Reference/Properties/border-image) hat.

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

Die `border-image-slice`-Eigenschaft kann mit einem bis vier `<number-percentage>`-Werten angegeben werden, die die Position jedes Bildausschnitts darstellen. Negative Werte sind ungültig; Werte, die ihre entsprechende Dimension überschreiten, werden auf `100%` geklammert.

- Wenn **eine** Position angegeben wird, werden alle vier Ausschnitte im gleichen Abstand von ihren jeweiligen Seiten erstellt.
- Wenn **zwei** Positionen angegeben werden, erstellt der erste Wert Ausschnitte, die von **oben und unten** gemessen werden, der zweite erstellt Ausschnitte, die von **links und rechts** gemessen werden.
- Wenn **drei** Positionen angegeben werden, erstellt der erste Wert einen Ausschnitt, der von **oben** gemessen wird, der zweite erstellt Ausschnitte, die von **links und rechts** gemessen werden, der dritte erstellt einen Ausschnitt, der von **unten** gemessen wird.
- Wenn **vier** Positionen angegeben werden, erstellen sie Ausschnitte, die in folgender Reihenfolge gemessen werden: **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

Der optionale `fill`-Wert kann, wenn er verwendet wird, überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Für Vektorbilder ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, daher sind Prozentangaben in diesen Fällen allgemein vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randversatz als Prozentsatz der Größe des Quellbildes dar: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt den mittleren Bildbereich und zeigt ihn wie ein Hintergrundbild an, aber über dem eigentlichen {{cssxref("background")}} gestapelt. Seine Breite und Höhe werden an die oberen und linken Bildbereiche angepasst.

## Beschreibung

Der Prozess des Zuschneidens erstellt insgesamt neun Regionen: vier Ecken, vier Kanten und einen mittleren Bereich. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Regionen.

![Die neun Regionen, die durch die border-image- oder border-image-slice-Eigenschaften definiert werden](border-image-slice.png)

Das obige Diagramm veranschaulicht die Position jeder Region.

- Bereiche 1-4 sind Eckregionen. Jede wird einmal verwendet, um die Ecken des endgültigen Randbildes zu bilden.
- Bereiche 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/border-image-repeat), um im endgültigen Randbild den Abmessungen des Elements zu entsprechen.
- Bereich 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, aber er wird wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Regionen verwendet werden, um das endgültige Randbild zu bilden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Randbreite und -ausschnitt

Das folgende Beispiel zeigt ein `<div>` mit einem Randbild darauf. Das Quellbild für die Ränder ist folgendes:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher wird durch das Setzen von 30 Pixeln als Wert sowohl für {{cssxref("border-width")}} als auch für `border-image-slice` vollständige und ziemlich scharfe Diamanten in Ihrem Rand erreicht:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der beiden oben genannten Eigenschaften dynamisch ändern können, damit Sie den Effekt schätzen können, den sie haben:

`border-image-slice` verändert die Größe des Bildausschnitts, der für jeden Rand und jede Randecke verwendet wird (sowie den Inhaltsbereich, wenn das Schlüsselwort `fill` verwendet wird) — das Variieren weg von 30 führt dazu, dass der Rand etwas unregelmäßig aussieht, kann aber interessante Effekte haben.

`border-width`: Ändert die Breite des Rands. Die Größe des abgetasteten Bildes wird an die Breite des Randes angepasst, was bedeutet, dass, wenn die Breite größer als der Ausschnitt ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden natürlich ein SVG-Bild).

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
- [Randbilder in CSS: Ein Schlüsselbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
