---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{CSSRef}}

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Bereiche auf. Diese Bereiche bilden die Komponenten eines [Randbildes](/de/docs/Web/CSS/border-image) eines Elements.

{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}

Der Schneideprozess erstellt insgesamt neun Bereiche: vier Ecken, vier Kanten und einen mittleren Bereich. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Bereiche.

![Die neun Bereiche, die durch die Eigenschaften border-image oder border-image-slice definiert werden](border-image-slice.png)

Das obige Diagramm zeigt die Lage jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jeder wird einmal verwendet, um die Ecken des endgültigen Randbildes zu bilden.
- Zonen 5-8 sind Kantenbereiche. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat) im endgültigen Randbild, um die Abmessungen des Elements anzupassen.
- Zone 9 ist der mittlere Bereich. Dieser wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}} und {{cssxref("border-image-outset")}} bestimmen, wie diese Bereiche verwendet werden, um das endgültige Randbild zu bilden.

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

Die `border-image-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildschnitzes darzustellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **ein** Wert angegeben wird, erstellt er alle vier Schnitte im gleichen Abstand von ihren jeweiligen Seiten.
- Wenn **zwei** Werte angegeben werden, erstellt der erste Wert Schnitte vom **oberen und unteren** Rand aus, der zweite Wert erstellt Schnitte vom **linken und rechten** Rand aus.
- Wenn **drei** Werte angegeben werden, erstellt der erste Wert einen Schnitt vom **oberen** Rand aus, der zweite erstellt Schnitte vom **linken und rechten** Rand aus, der dritte erstellt einen Schnitt vom **unteren** Rand aus.
- Wenn **vier** Werte angegeben werden, erstellen sie Schnitte vom **oberen**, **rechten**, **unteren** und **linken** Rand in dieser Reihenfolge (im Uhrzeigersinn).

Der optionale `fill` Wert, falls verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Stellt einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder dar. Bei Vektorbildern ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, daher sind in diesen Fällen Prozentsätze in der Regel vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Stellt einen Randversatz als Prozentsatz der Größe des Quellbildes dar: die Breite des Bildes für horizontale Versätze, die Höhe des Bildes für vertikale Versätze.
- `fill`
  - : Erhält den mittleren Bildbereich und zeigt ihn wie ein Hintergrundbild an, jedoch über dem tatsächlichen {{cssxref("background")}}. Seine Breite und Höhe sind so bemessen, dass sie den oberen und linken Bildbereichen entsprechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Rahmenbreite und Scheibe

Das folgende Beispiel zeigt ein einfaches `<div>` mit einem gesetzten Randbild. Das Quellbild für die Ränder sieht wie folgt aus:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher führt das Setzen von 30 Pixeln als Wert für sowohl [`border-width`](/de/docs/Web/CSS/border-width) als auch `border-image-slice` dazu, dass Sie komplette und relativ scharfe Diamanten in Ihrem Rahmen erhalten:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Allerdings haben wir auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der obigen beiden Eigenschaften dynamisch ändern können, um den Effekt, den sie haben, zu schätzen:

`border-image-slice`: Ändert die Größe des Bildschnitzes, der für jeden Rahmen und die Rahmenecke verwendet wird (sowie den Inhaltsbereich, wenn das Schlüsselwort `fill` verwendet wird) — wenn dieser Wert von 30 abweicht, sieht der Rahmen etwas unregelmäßig aus, kann aber interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die Stichprobengröße des Bildes wird so skaliert, dass es in den Rahmen passt, was bedeutet, dass, wenn die Breite größer als der Schnitt ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden natürlich ein SVG-Bild).

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

- [Illustrierte Beschreibung der 1-bis-4-Werte-Syntax](/de/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)
- [Randbilder in CSS: Ein zentraler Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
