---
title: border-image-slice
slug: Web/CSS/border-image-slice
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{CSSRef}}

Die **`border-image-slice`** [CSS](/de/docs/Web/CSS) Eigenschaft unterteilt das durch {{cssxref("border-image-source")}} angegebene Bild in Bereiche. Diese Bereiche bilden die Komponenten des [Randbildes](/de/docs/Web/CSS/border-image) eines Elements.

{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}

Der Schneideprozess erstellt insgesamt neun Bereiche: vier Ecken, vier Kanten und einen mittleren Bereich. Vier Schneidelinien, die in einem bestimmten Abstand von ihren jeweiligen Seiten gesetzt sind, steuern die Größe der Bereiche.

![Die neun Bereiche, die durch die Eigenschaften border-image oder border-image-slice definiert sind](border-image-slice.png)

Das obige Diagramm veranschaulicht die Lage jedes Bereichs.

- Bereiche 1-4 sind Eckbereiche. Jeder wird einmal genutzt, um die Ecken des endgültigen Randbildes zu bilden.
- Bereiche 5-8 sind Kantenbereiche. Diese werden im endgültigen Randbild [wiederholt, skaliert oder anderweitig modifiziert](/de/docs/Web/CSS/border-image-repeat), um die Dimensionen des Elements anzupassen.
- Bereich 9 ist der mittlere Bereich. Er wird standardmäßig verworfen, kann jedoch wie ein Hintergrundbild verwendet werden, wenn das Schlüsselwort `fill` gesetzt wird.

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}} und {{cssxref("border-image-outset")}} bestimmen, wie diese Bereiche genutzt werden, um das endgültige Randbild zu bilden.

## Syntax

```css
/* Alle Seiten */
border-image-slice: 30%;

/* oben und unten | links und rechts */
border-image-slice: 10% 30%;

/* oben | links und rechts | unten */
border-image-slice: 30 30% 45;

/* oben | rechts | unten | links */
border-image-slice: 7 12 14 5;

/* Verwendung des `fill`-Schlüsselwortes */
border-image-slice: 10% fill;
border-image-slice: fill 10%;

/* Globale Werte */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: revert;
border-image-slice: revert-layer;
border-image-slice: unset;
```

Die `border-image-slice` Eigenschaft kann mit einem bis vier `<number-percentage>` Werten angegeben werden, um die Position jedes Bildschnittes zu repräsentieren. Negative Werte sind ungültig; Werte, die größer als ihre entsprechende Dimension sind, werden auf `100%` begrenzt.

- Wenn **eine** Position angegeben wird, erstellt sie alle vier Schnitte im gleichen Abstand von ihren jeweiligen Seiten.
- Wenn **zwei** Positionen angegeben werden, erzeugt der erste Wert Schnitte, die von **oben und unten** gemessen werden, der zweite Wert erzeugt Schnitte, die von **links und rechts** gemessen werden.
- Wenn **drei** Positionen angegeben werden, erzeugt der erste Wert einen Schnitt, der von **oben** gemessen wird, der zweite Wert erzeugt Schnitte, die von **links und rechts** gemessen werden, der dritte Wert erzeugt einen Schnitt, der von **unten** gemessen wird.
- Wenn **vier** Positionen angegeben werden, erzeugen sie Schnitte, die von **oben**, **rechts**, **unten** und **links** gemessen werden (im Uhrzeigersinn).

Der optionale `fill` Wert kann irgendwo in der Deklaration platziert werden.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Repräsentiert einen Randversatz in _Pixeln_ für Rasterbilder und _Koordinaten_ für Vektorbilder. Für Vektorbilder ist die Zahl relativ zur Größe des Elements, nicht zur Größe des Quellbildes. Daher sind Prozentsätze in diesen Fällen im Allgemeinen vorzuziehen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Repräsentiert einen Randversatz als Prozentsatz der Größe des Quellbildes: die Breite des Bildes für horizontale Versätze, die Höhe für vertikale Versätze.
- `fill`
  - : Bewahrt den mittleren Bildbereich und zeigt ihn wie ein Hintergrundbild an, jedoch gestapelt über dem eigentlichen {{cssxref("background")}}. Seine Breite und Höhe sind so bemessen, dass sie mit den oberen und linken Bildbereichen übereinstimmen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassbare Randbreite und Slice

Das folgende Beispiel zeigt ein einfaches `<div>`, auf dem ein Randbild gesetzt ist. Das Quellbild für die Ränder ist wie folgt:

![schöne mehrfarbige Diamanten](border-diamonds.png)

Die Diamanten sind 30px breit, daher erhält man vollständige und recht klare Diamanten in Ihrem Rand, wenn Sie 30 Pixel als Wert sowohl für [`border-width`](/de/docs/Web/CSS/border-width) als auch für `border-image-slice` festlegen:

```css
border-width: 30px;
border-image-slice: 30;
```

Dies sind die Standardwerte, die wir in diesem Beispiel verwendet haben. Wir haben jedoch auch zwei Schieberegler bereitgestellt, um Ihnen zu ermöglichen, die Werte der oben genannten Eigenschaften dynamisch zu ändern und deren Wirkung zu schätzen:

`border-image-slice` Verändert die Größe des Bildausschnitts, der für jeden Rand und jede Ecke verwendet wird (und den Inhaltsbereich, falls das Schlüsselwort `fill` verwendet wird) — eine Abweichung von 30 führt dazu, dass der Rand etwas unregelmäßig aussieht, kann jedoch interessante Effekte haben.

`border-width`: Verändert die Breite des Randes. Die Größe des abgetasteten Bildes wird so skaliert, dass es in den Rand passt, was bedeutet, dass das Bild pixelig aussehen kann, wenn die Breite größer als der Slice ist (es sei denn, Sie verwenden ein SVG-Bild).

#### HTML

```html
<div class="wrapper">
  <div></div>
</div>

<ul>
  <li>
    <label for="width">Schieben zum Anpassen von <code>border-width</code></label>
    <input type="range" min="10" max="45" id="width" />
    <output id="width-output">30px</output>
  </li>
  <li>
    <label for="slice">Schieben zum Anpassen von <code>border-image-slice</code></label>
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

- [Illustrierte Beschreibung der 1-bis-4-Wert-Syntax](/de/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)
- [Randbilder in CSS: Ein zentraler Fokusbereich für Interop 2023](/en-US/blog/border-images-interop-2023/) im MDN-Blog (2023)
