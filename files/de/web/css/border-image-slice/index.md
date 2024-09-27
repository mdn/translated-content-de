---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{CSSRef}}

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Bereiche. Diese Bereiche bilden die Komponenten eines Elements [border image](/de/docs/Web/CSS/border-image).

{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}

Der Schneideprozess erzeugt insgesamt neun Regionen: vier Ecken, vier Kanten und eine mittlere Region. Vier Schneidelinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten liegen, bestimmen die Größe der Regionen.

![Die neun durch die Eigenschaften border-image oder border-image-slice definierten Regionen](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jeder Region.

- Zonen 1-4 sind Eckregionen. Jede von ihnen wird einmal verwendet, um die Ecken des endgültigen Border-Images zu bilden.
- Zonen 5-8 sind Kantenregionen. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat) im endgültigen Border-Image, um den Abmessungen des Elements zu entsprechen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, wird jedoch wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}} und {{cssxref("border-image-outset")}} bestimmen, wie diese Regionen verwendet werden, um das endgültige Border-Image zu bilden.

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

Die `border-image-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jeder Bildausschnittlinie zu repräsentieren. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, erstellt sie alle vier Schnitte in gleichem Abstand von ihren jeweiligen Seiten.
- Wenn **zwei** Positionen angegeben werden, wird der erste Wert verwendet, um Schnitte gemessen vom **oberen und unteren** Rand zu erstellen, der zweite Wert erstellt Schnitte gemessen vom **linken und rechten** Rand.
- Wenn **drei** Positionen angegeben werden, wird der erste Wert verwendet, um einen Schnitt vom **oberen** Rand zu erstellen, der zweite Wert für Schnitte gemessen vom **linken und rechten** Rand, der dritte Wert für einen Schnitt gemessen vom **unteren** Rand.
- Wenn **vier** Positionen angegeben werden, erstellen sie Schnitte gemessen vom **oberen**, **rechten**, **unteren** und **linken** Rand in dieser Reihenfolge (im Uhrzeigersinn).

Der optionale `fill`-Wert kann, falls verwendet, überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenoffset in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Für Vektorbilder ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, daher sind Prozentsätze in diesen Fällen im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenoffset als Prozentsatz der Größe des Quellbilds: die Breite des Bildes für horizontale Offsets, die Höhe für vertikale Offsets.
- `fill`
  - : Bewahrt die mittlere Bildregion und zeigt sie wie ein Hintergrundbild an, jedoch über dem eigentlichen {{cssxref("background")}} gestapelt. Breite und Höhe sind angepasst, um mit den oberen und linken Bildregionen übereinzustimmen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellbare Border-Breite und Schnitt

Das folgende Beispiel zeigt ein einfaches `<div>` mit einem Border-Image darauf. Das Quellbild für die Rahmen ist wie folgt:

![Schöne, mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px groß, daher führt das Setzen von 30 Pixeln sowohl als Wert für [`border-width`](/de/docs/Web/CSS/border-width) als auch `border-image-slice` zu kompletten und recht klaren Diamanten in Ihrem Rahmen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, um Ihnen die Möglichkeit zu geben, die Werte der beiden oben genannten Eigenschaften dynamisch zu ändern, damit Sie die Wirkung schätzen können, die sie haben:

`border-image-slice` Ändert die Größe des Bildausschnitts, der für jeden Rand und jede Ecke (sowie den Inhaltsbereich, wenn das Schlüsselwort `fill` verwendet wird) verwendet wird — eine Abweichung von 30 führt dazu, dass der Rand etwas unregelmäßig aussieht, kann jedoch interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die Größe des ausgewählten Bildes wird skaliert, um innerhalb des Rahmens zu passen, was bedeutet, dass wenn die Breite größer als der Schnitt ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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

- [Illustrierte Beschreibung der 1- bis 4-Werte-Syntax](/de/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)
- [Borderbilder in CSS: Ein Schlüsselbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
