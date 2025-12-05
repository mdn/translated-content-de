---
title: border-image-slice
slug: Web/CSS/Reference/Properties/border-image-slice
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Bereiche. Diese Bereiche bilden die Komponenten eines Elements [Border-Image](/de/docs/Web/CSS/Reference/Properties/border-image).

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

Die `border-image-slice`-Eigenschaft kann mit einem bis vier `<number-percentage>`-Werten angegeben werden, um die Position jedes Bildausschnitts zu repräsentieren. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **ein** Wert angegeben ist, erstellt er alle vier Schnitte in gleichem Abstand von ihren jeweiligen Seiten.
- Wenn **zwei** Werte angegeben sind, erstellt der erste Wert Schnitte, die von **oben und unten** gemessen werden, der zweite erstellt Schnitte, die von **links und rechts** gemessen werden.
- Wenn **drei** Werte angegeben sind, erstellt der erste Wert einen Schnitt, der von **oben** gemessen wird, der zweite erstellt Schnitte, die von **links und rechts** gemessen werden, der dritte erstellt einen Schnitt, der von **unten** gemessen wird.
- Wenn **vier** Werte angegeben sind, erstellen sie Schnitte, die in dieser Reihenfolge (im Uhrzeigersinn) von **oben**, **rechts**, **unten** und **links** gemessen werden.

Der optionale `fill`-Wert kann, wenn er verwendet wird, überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Kantenabstand in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Für Vektorbilder ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes, daher sind Prozentsätze in diesen Fällen generell vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Kantenabstand als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Abstände, die Höhe für vertikale Abstände.
- `fill`
  - : Bewahrt den mittleren Bildbereich und zeigt ihn wie ein Hintergrundbild an, aber oberhalb des eigentlichen {{cssxref("background")}}. Seine Breite und Höhe sind so dimensioniert, dass sie den oberen und linken Bildbereichen entsprechen.

## Beschreibung

Der Schneidprozess erzeugt insgesamt neun Bereiche: vier Ecken, vier Kanten und einen mittleren Bereich. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Bereiche.

![Die neun durch die border-image- oder border-image-slice-Eigenschaften definierten Bereiche](border-image-slice.png)

Das obige Diagramm zeigt die Position jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jeder wird einmal verwendet, um die Ecken des endgültigen Border-Images zu formen.
- Zonen 5-8 sind Kantenbereiche. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/border-image-repeat), um die Abmessungen des Elements im endgültigen Border-Image anzupassen.
- Zone 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Bereiche verwendet werden, um das endgültige Border-Image zu formen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellbare Randbreite und Slice

Das folgende Beispiel zeigt ein `<div>` mit einem Border-Image darauf. Das Quellbild für die Rahmen ist wie folgt:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher erhalten Sie bei der Einstellung von 30 Pixeln als Wert sowohl für {{cssxref("border-width")}} als auch `border-image-slice` vollständige und ziemlich scharfe Diamanten in Ihrem Rahmen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, mit denen Sie die Werte der beiden obigen Eigenschaften dynamisch ändern können, sodass Sie den Effekt ihrer Auswirkungen schätzen können:

`border-image-slice`: Ändert die Größe des Bildausschnitts, der für jeden Rahmen und jede Ecke (und den Inhaltsbereich, wenn das Schlüsselwort `fill` verwendet wird) verwendet wird — das Abweichen von 30 führt dazu, dass der Rahmen etwas unregelmäßig aussieht, kann aber interessante Effekte haben.

`border-width`: Ändert die Breite des Rahmens. Die Größe des abgetasteten Bildes wird skaliert, um in den Rahmen zu passen, was bedeutet, dass wenn die Breite größer als der Ausschnitt ist, das Bild etwas pixelig aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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

- [Illustrierte Beschreibung der 1-bis-4-Werte-Syntax](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties#tricky_edge_cases)
- [Border-Bilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) auf dem MDN-Blog (2023)
