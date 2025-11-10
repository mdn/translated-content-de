---
title: "Highlight: priority-Eigenschaft"
short-title: priority
slug: Web/API/Highlight/priority
l10n:
  sourceCommit: b61ec8fa49b41470e65b303e7c09c7ba8bdf2d07
---

{{APIRef("CSS Custom Highlight API")}}

Die `priority`-Eigenschaft des [`Highlight`](/de/docs/Web/API/Highlight)-Interfaces ist eine Zahl, die verwendet wird, um zu bestimmen, welche Stile eines Highlights bei Stilkonflikten in überlappenden Teilen verwendet werden sollen. Highlights mit einer höheren `priority`-Nummer haben Vorrang gegenüber solchen mit einer niedrigeren `priority`.

Es ist möglich, [`Range`](/de/docs/Web/API/Range)-Objekte zu erstellen, die in einem Dokument überlappen.

Wenn überlappende Bereiche von mehreren verschiedenen [`Highlight`](/de/docs/Web/API/Highlight)-Objekten verwendet werden und wenn diese Highlights mit {{cssxref("::highlight")}}-Pseudo-Elementen gestylt werden, kann dies zu widersprüchlichen Stilen führen.

Wenn sich zwei Textbereiche überlappen und beide mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) hervorgehoben werden und wenn sie beide mit der CSS-Eigenschaft `color` gestylt sind, muss der Browser entscheiden, welche Farbe für die Gestaltung des Textes im überlappenden Teil verwendet werden soll.

Wenn keine `priority` festgelegt ist, haben alle Highlights die gleiche Priorität, und der Browser wählt das am zuletzt registrierte Highlight, um die überlappenden Teile zu gestalten.

Beachten Sie, dass alle Stile eines Highlights angewendet werden und der Browser nur Konflikte lösen muss, wenn dieselben CSS-Eigenschaften von mehreren überlappenden Highlights verwendet werden. Die Auflösung von Highlight-Stilkonflikten hängt auch nicht von der Reihenfolge ab, in der die {{cssxref("::highlight")}}-Pseudo-Elemente im Quellcode erscheinen, oder davon, ob CSS-Eigenschaften als `!important` markiert sind.

## Wert

Eine Ganzzahl.

## Beispiele

### Standardpriorität

#### HTML

```html
<p>Time is an illusion. Lunchtime doubly so.</p>
```

#### CSS

```css
::highlight(highlight-2) {
  color: blue;
}

::highlight(highlight-1) {
  color: white;
  background: orange;
}
```

#### JavaScript

```js
const text = document.querySelector("p").firstChild;

// Create two overlapping highlights
const range1 = new Range();
range1.setStart(text, 5);
range1.setEnd(text, 25);

const range2 = new Range();
range2.setStart(text, 15);
range2.setEnd(text, 35);

const highlight1 = new Highlight(range1);
const highlight2 = new Highlight(range2);

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);
```

#### Ergebnis

Wie unten zu sehen ist, wird standardmäßig der Teil des Textknotens, in dem sich die beiden registrierten Highlights überlappen, in Blau angezeigt, da `highlight-2` nach `highlight-1` registriert wird. Die von `highlight-1` definierte Hintergrundfarbe umfasst den gesamten `range1`-Bereich, da sie nicht mit einer anderen Hintergrundfarbe in Konflikt steht.

{{EmbedLiveSample("Default priority")}}

### Priorität setzen

#### HTML

```html
<button id="prioritize-1" type="button">Prioritize 1</button>
<button id="prioritize-2" type="button">Prioritize 2</button>
<button id="reset" type="button">Reset</button>
<p>Time is an illusion. Lunchtime doubly so.</p>
```

#### CSS

```css
::highlight(highlight-1) {
  background-color: blue;
  color: white;
}

::highlight(highlight-2) {
  background-color: orange;
}
```

#### JavaScript

```js
const text = document.querySelector("p").firstChild;

// Create two overlapping highlights
const range1 = new Range();
range1.setStart(text, 5);
range1.setEnd(text, 25);

const range2 = new Range();
range2.setStart(text, 15);
range2.setEnd(text, 35);

const highlight1 = new Highlight(range1);
const highlight2 = new Highlight(range2);

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);

// Add buttons to change the highlight priority.
const prioritize1 = document.querySelector("#prioritize-1");
const prioritize2 = document.querySelector("#prioritize-2");
const reset = document.querySelector("#reset");

prioritize1.addEventListener("click", () => {
  highlight1.priority = 1;
  highlight2.priority = 0;
});

prioritize2.addEventListener("click", () => {
  highlight1.priority = 0;
  highlight2.priority = 1;
});

reset.addEventListener("click", () => {
  highlight1.priority = 0;
  highlight2.priority = 0;
});
```

#### Ergebnis

Wie unten zu sehen ist, wird standardmäßig der Teil des Textknotens, in dem sich die beiden registrierten Highlights überlappen, in Blau angezeigt, da `highlight-2` nach `highlight-1` registriert wird.

{{EmbedLiveSample("Setting priority")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
