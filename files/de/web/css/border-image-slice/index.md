---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Bereiche auf. Diese Bereiche bilden die Komponenten des [Rahmenbildes](/de/docs/Web/CSS/border-image) eines Elements.

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

Der Teilungsprozess erstellt insgesamt neun Bereiche: vier Ecken, vier Kanten und einen mittleren Bereich. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt werden, steuern die Größe der Bereiche.

![Die neun durch die border-image oder border-image-slice Eigenschaften definierten Bereiche](border-image-slice.png)

Das obige Diagramm veranschaulicht die Position jedes Bereichs.

- Bereiche 1-4 sind Eckbereiche. Jeder wird einmal verwendet, um die Ecken des endgültigen Rahmenbildes zu formen.
- Bereiche 5-8 sind Kantenbereiche. Diese werden im endgültigen Rahmenbild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat), um die Abmessungen des Elements anzupassen.
- Bereich 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, wird jedoch wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Bereiche verwendet werden, um das endgültige Rahmenbild zu bilden.

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

Die `border-image-slice` Eigenschaft kann angegeben werden, indem ein bis vier `<number-percentage>` Werte verwendet werden, um die Position jeder Bildscheibe darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, erstellt diese vier Scheiben im gleichen Abstand von ihren jeweiligen Seiten.
- Wenn **zwei** Positionen angegeben werden, erstellt der erste Wert Scheiben, gemessen von **oben und unten**, der zweite Wert erstellt Scheiben, gemessen von **links und rechts**.
- Wenn **drei** Positionen angegeben werden, erstellt der erste Wert eine Scheibe, gemessen von **oben**, der zweite erstellt Scheiben, gemessen von **links und rechts**, der dritte erstellt eine Scheibe, gemessen von **unten**.
- Wenn **vier** Positionen angegeben werden, erstellen sie Scheiben, gemessen von **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

Der optionale `fill`-Wert, falls verwendet, kann an beliebiger Stelle in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Randversatz in _Pixel_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern ist die Zahl relativ zur Größe des Elements und nicht zur Größe des Quellbilds, sodass in diesen Fällen Prozentsätze allgemein vorzuziehen sind.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Randversatz als Prozentsatz der Größe des Quellbilds: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt den mittleren Bildbereich und zeigt ihn wie ein Hintergrundbild an, stapelt ihn jedoch über dem eigentlichen {{cssxref("background")}}. Seine Breite und Höhe sind so bemessen, dass sie den oberen und linken Bildbereichen entsprechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Rahmenbreite und -scheibe

Das folgende Beispiel zeigt ein `<div>` mit einem Rahmenbild, das darauf gesetzt ist. Das Quellbild für die Ränder ist wie folgt:

![schöne bunte Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher erhält man vollständige und recht scharfe Diamanten im Rahmen, wenn 30 Pixel als Wert sowohl für [`border-width`](/de/docs/Web/CSS/border-width) als auch für `border-image-slice` gesetzt werden:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der beiden oben genannten Eigenschaften dynamisch ändern können, damit Sie die Auswirkungen sehen können, die sie haben:

`border-image-slice` Ändert die Größe des Bildausschnitts, der für jeden Rahmen und Rahmenumfang verwendet wird (und den Inhaltsbereich, falls das Schlüsselwort `fill` verwendet wird) — eine Variation von 30 führt dazu, dass der Rahmen etwas unregelmäßig aussieht, kann jedoch interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die Größe des abgetasteten Bildes wird an die Breite des Rahmens angepasst, was bedeutet, dass das Bild, wenn die Breite größer als der Ausschnitt ist, etwas pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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

- [Illustrierte Beschreibung der 1-zu-4-Werte-Syntax](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties#tricky_edge_cases)
- [Rahmenbilder in CSS: Ein zentraler Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
