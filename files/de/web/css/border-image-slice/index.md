---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das Bild, das durch {{cssxref("border-image-source")}} spezifiziert ist, in Bereiche. Diese Bereiche bilden die Komponenten eines [Randbilds](/de/docs/Web/CSS/border-image) eines Elements.

{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}

Der Schneidvorgang erzeugt insgesamt neun Bereiche: vier Ecken, vier Kanten und einen mittleren Bereich. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Bereiche.

![Die neun durch die border-image- oder border-image-slice-Eigenschaften definierten Bereiche](border-image-slice.png)

Das obenstehende Diagramm zeigt die Lage jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jeder wird einmal verwendet, um die Ecken des endgültigen Randbilds zu formen.
- Zonen 5-8 sind Kantenbereiche. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat) im endgültigen Randbild, um die Abmessungen des Elements anzupassen.
- Zone 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Bereiche zur Bildung des endgültigen Randbilds verwendet werden.

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

Die `border-image-slice` Eigenschaft kann unter Verwendung von ein bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildschnitts darzustellen. Negative Werte sind ungültig; Werte, die größer sind als ihre entsprechende Dimension, werden auf `100%` geklammert.

- Wenn **ein** Wert angegeben ist, erstellt er vier Schnitte im gleichen Abstand von ihren jeweiligen Seiten.
- Bei **zwei** angegebenen Werten erstellt der erste Wert Schnitte gemessen von **oben und unten**, der zweite erstellt Schnitte gemessen von **links und rechts**.
- Bei **drei** angegebenen Werten erstellt der erste Wert einen Schnitt gemessen von **oben**, der zweite erstellt Schnitte gemessen von **links und rechts**, der dritte erstellt einen Schnitt gemessen von **unten**.
- Bei **vier** angegebenen Werten erstellen sie Schnitte gemessen von **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

Der optionale `fill` Wert, wenn verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbilds, daher sind Prozentsätze in diesen Fällen im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenversatz als Prozentsatz der Größe des Quellbilds: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Erhält den mittleren Bildbereich und zeigt ihn wie ein Hintergrundbild an, jedoch über dem tatsächlichen {{cssxref("background")}} gestapelt. Seine Breite und Höhe sind an die obere und linke Bildregion angepasst.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Rahmenbreite und -schnitt

Das folgende Beispiel zeigt ein einfaches `<div>` mit einem darauf gesetzten Randbild. Das Quellbild für die Rahmen ist wie folgt:

![schöne, mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher erhalten Sie vollständige und recht scharfe Diamanten in Ihrem Rahmen, wenn Sie 30 Pixel sowohl als Wert für [`border-width`](/de/docs/Web/CSS/border-width) als auch für `border-image-slice` festlegen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der beiden Eigenschaften dynamisch ändern können, damit Sie den Effekt schätzen können, den sie haben:

`border-image-slice` Ändert die Größe des Bildschnitts, der zur Verwendung in jedem Rahmen und Rahmenwinkel (und dem Inhaltsbereich, wenn das Schlüsselwort `fill` verwendet wird) entnommen wird — eine Änderung von 30 weg lässt den Rahmen etwas unregelmäßig aussehen, kann aber interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die entnommene Bildgröße wird skaliert, um in den Rahmen zu passen, was bedeutet, dass, wenn die Breite größer ist als der Schnitt, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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
- [Randbilder in CSS: Ein Schlüsselbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
