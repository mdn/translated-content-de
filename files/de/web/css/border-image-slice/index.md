---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: e68530dbce2b661c8860e9c6a1c70b1caca5a199
---

{{CSSRef}}

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft unterteilt das Bild, das durch {{cssxref("border-image-source")}} angegeben wird, in Bereiche. Diese Bereiche bilden die Komponenten eines Elements [Border-Bildes](/de/docs/Web/CSS/border-image).

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

Der Schneidprozess erzeugt insgesamt neun Bereiche: vier Ecken, vier Kanten und einen mittleren Bereich. Vier Schnittlinien, die in einer bestimmten Entfernung von ihren jeweiligen Seiten festgelegt sind, steuern die Größe der Bereiche.

![Die neun Bereiche, die durch die Eigenschaften border-image oder border-image-slice definiert werden](border-image-slice.png)

Das obige Diagramm zeigt die Lage jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jeder wird einmal verwendet, um die Ecken des endgültigen Border-Bildes zu formen.
- Zonen 5-8 sind Kantenbereiche. Diese werden im endgültigen Border-Bild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat), um die Abmessungen des Elements anzupassen.
- Zone 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}} und {{cssxref("border-image-outset")}} bestimmen, wie diese Bereiche verwendet werden, um das endgültige Border-Bild zu formen.

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

Die `border-image-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildschnitts darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` geklammert.

- Wenn **eine** Position angegeben wird, erfolgt der Schnitt bei allen vier Seiten in derselben Entfernung von ihren jeweiligen Seiten.
- Wenn **zwei** Positionen angegeben werden, wird durch den ersten Wert der Schnitt oben und unten und durch den zweiten Wert der Schnitt links und rechts festgelegt.
- Wenn **drei** Positionen angegeben werden, erfolgt der Schnitt durch den ersten Wert oben, durch den zweiten Wert links und rechts und durch den dritten Wert unten.
- Wenn **vier** Positionen angegeben werden, erfolgt der Schnitt in der Reihenfolge (im Uhrzeigersinn) oben, rechts, unten und links.

Der optionale `fill` Wert kann, wenn verwendet, irgendwo in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Randabstand in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Bei Vektorbildern bezieht sich die Zahl auf die Größe des Elements, nicht auf die Größe des Quellbildes, daher sind in diesen Fällen in der Regel Prozentsätze vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randabstand als Prozentsatz der Größe des Quellbildes dar: die Breite des Bildes für horizontale Abstände, die Höhe für vertikale Abstände.
- `fill`
  - : Bewahrt den mittleren Bildbereich und zeigt ihn wie ein Hintergrundbild an, aber über dem eigentlichen {{cssxref("background")}} gestapelt. Seine Breite und Höhe sind so bemessen, dass sie den oberen und linken Bildbereichen entsprechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Rahmenbreite und Scheibe

Das folgende Beispiel zeigt ein `<div>` mit einem festgelegten Border-Bild. Das Quellbild für die Ränder ist wie folgt:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher führt das Setzen von 30 Pixeln als Wert sowohl für [`border-width`](/de/docs/Web/CSS/border-width) als auch für `border-image-slice` zu vollständigen und ziemlich scharfen Diamanten in Ihrem Rahmen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der oben genannten Eigenschaften dynamisch ändern können, damit Sie deren Wirkung besser verstehen:

`border-image-slice` Ändert die Größe des Bildschnitts, der für jede Kante und Ecke des Rahmens (und den Inhaltsbereich, wenn das `fill` Schlüsselwort verwendet wird) verwendet wird — eine Abweichung von 30 führt dazu, dass der Rahmen etwas unregelmäßig aussieht, kann jedoch interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die Größe des abgetasteten Bildes wird an die Breite des Rahmens angepasst, was bedeutet, dass wenn die Breite größer ist als der Schnitt, das Bild etwas verpixelt aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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
- [Rahmenbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf MDN Blog (2023)
