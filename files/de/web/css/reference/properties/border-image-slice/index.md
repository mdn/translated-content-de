---
title: "`border-image-slice` CSS property"
short-title: border-image-slice
slug: Web/CSS/Reference/Properties/border-image-slice
l10n:
  sourceCommit: edb731bcb1ee26be7a4da56cc5b79e552b78865a
---

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft teilt das durch {{cssxref("border-image-source")}} angegebene Bild in Bereiche. Diese Bereiche bilden die Komponenten des [Randbildes](/de/docs/Web/CSS/Reference/Properties/border-image) eines Elements.

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

Die Eigenschaft `border-image-slice` kann mit einem bis vier `<number-percentage>` Werten angegeben werden, die die Position jedes Bildschnitts darstellen. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben ist, werden alle vier Schnitte im gleichen Abstand von ihren jeweiligen Seiten erstellt.
- Bei **zwei** angegebenen Positionen erzeugt der erste Wert Schnitte, die vom **oberen und unteren** Rand gemessen werden, der zweite erzeugt Schnitte, die vom **linken und rechten** Rand gemessen werden.
- Bei **drei** angegebenen Positionen erzeugt der erste Wert einen Schnitt, der vom **oberen** Rand gemessen wird, der zweite erzeugt Schnitte, die vom **linken und rechten** Rand gemessen werden, der dritte erzeugt einen Schnitt, der vom **unteren** Rand gemessen wird.
- Bei **vier** angegebenen Positionen erzeugen sie Schnitte, die in folgender Reihenfolge (im Uhrzeigersinn) vom **oberen**, **rechten**, **unteren** und **linken** Rand gemessen werden.

Der optionale Wert `fill`, falls verwendet, kann überall in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Randabstand in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Bei Vektorbildern bezieht sich die Zahl auf die Größe des Elements, nicht auf die Größe des Quellbildes, daher sind in diesen Fällen Prozentsätze generell vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Randabstand als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Abstände, die Höhe für vertikale Abstände.
- `fill`
  - : Bewahrt die mittlere Bildregion und zeigt sie wie ein Hintergrundbild an, jedoch über dem eigentlichen {{cssxref("background")}} gestapelt. Seine Breite und Höhe sind so bemessen, dass sie den oberen und linken Bildregionen entsprechen.

## Beschreibung

Der Schneidevorgang erzeugt insgesamt neun Bereiche: vier Ecken, vier Kanten und eine mittlere Region. Vier Schnittlinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten verlaufen, steuern die Größe der Bereiche.

![Die neun durch die border-image oder border-image-slice Eigenschaften definierten Bereiche](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jedes Bereichs.

- Zonen 1-4 sind Eckbereiche. Jede wird einmal verwendet, um die Ecken des endgültigen Randbildes zu formen.
- Zonen 5-8 sind Randbereiche. Diese werden [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/Reference/Properties/border-image-repeat) im endgültigen Randbild, um die Abmessungen des Elements anzupassen.
- Zone 9 ist die mittlere Region. Sie wird standardmäßig verworfen, aber wie ein Hintergrundbild verwendet, wenn das Schlüsselwort `fill` gesetzt ist.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, und {{cssxref("border-image-outset")}} bestimmen, wie diese Bereiche verwendet werden, um das endgültige Randbild zu formen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellbare Randbreite und Schnitt

Das folgende Beispiel zeigt ein `<div>` mit einem darauf eingestellten Randbild. Das Quellbild für die Ränder ist wie folgt:

![Neun mehrfarbige Diamanten angeordnet in drei Reihen und drei Spalten](/shared-assets/images/examples/border-diamonds.png)

Die Diamanten im Quellbild sind 30px groß, daher erhalten Sie vollständige und recht scharfe Diamanten in Ihrem Rand, wenn Sie 30 Pixel als Wert sowohl für {{cssxref("border-width")}} als auch für `border-image-slice` einstellen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, um Ihnen zu ermöglichen, die Werte der obigen beiden Eigenschaften dynamisch zu ändern, damit Sie den Effekt, den sie haben, schätzen können:

`border-image-slice` Ändert die Größe des Bildschnitts, der für jeden Rand und jede Randecke (und den Inhaltsbereich, falls das Schlüsselwort `fill` verwendet wird) verwendet wird — wenn dieser Wert von 30 abweicht, sieht der Rand etwas unregelmäßig aus, kann aber interessante Effekte haben.

`border-width`: Ändert die Breite des Randes. Die Größe des abgetasteten Bildes wird angepasst, um in den Rand zu passen, was bedeutet, dass, wenn die Breite größer als der Schnitt ist, das Bild etwas verpixelt aussehen kann (es sei denn, Sie verwenden ein SVG-Bild).

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

- [Illustrierte Beschreibung der Syntax mit 1 bis 4 Werten](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties#tricky_edge_cases)
- [Randbilder in CSS: Ein Schwerpunktbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
