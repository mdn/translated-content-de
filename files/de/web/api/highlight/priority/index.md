---
title: "Highlight: priority-Eigenschaft"
short-title: priority
slug: Web/API/Highlight/priority
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

{{APIRef("CSS Custom Highlight API")}}

Die `priority`-Eigenschaft des [`Highlight`](/de/docs/Web/API/Highlight)-Interfaces ist eine Zahl, die bestimmt, welche Highlight-Stile zur Lösung von Stilkonflikten in überlappenden Teilen verwendet werden sollen. Highlights mit einer höheren `priority`-Zahl haben Vorrang vor solchen mit einer niedrigeren `priority`.

Es ist möglich, [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekte zu erstellen, die sich in einem Dokument überschneiden.

Wenn überlappende Bereiche von mehreren unterschiedlichen [`Highlight`](/de/docs/Web/API/Highlight)-Objekten verwendet werden und diese Highlights mit {{cssxref("::highlight")}} Pseudoelementen gestylt werden, kann dies zu Konflikten bei den Stilen führen.

Wenn sich zwei Textbereiche überschneiden und beide mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) hervorgehoben werden und wenn beide mit der CSS-Eigenschaft `color` gestylt werden, muss der Browser entscheiden, welche Farbe für die Gestaltung des Texts im überlappenden Teil verwendet werden soll.

Falls keine `priority` festgelegt ist, haben alle Highlights die gleiche Priorität, und der Browser wählt das zuletzt registrierte Highlight, um die überlappenden Teile zu stylen.

Beachten Sie, dass alle Stile eines Highlights angewendet werden und der Browser nur Konflikte lösen muss, wenn dieselben CSS-Eigenschaften von mehreren überlappenden Highlights verwendet werden. Die Auflösung von Highlight-Stilkonflikten hängt auch nicht von der Reihenfolge ab, in der die {{cssxref("::highlight")}} Pseudoelement-Regeln im Quelltext erscheinen, oder davon, ob CSS-Eigenschaften als `!important` markiert sind.

## Wert

Eine Ganzzahl.

## Beispiele

### Standard-Priorität

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

Wie unten zu sehen ist, wird der Teil des Textknotens, in dem sich die beiden registrierten Highlights überlappen, standardmäßig in Blau angezeigt, da `highlight-2` nach `highlight-1` registriert wurde. Die Hintergrundfarbe, die von `highlight-1` definiert wird, umfasst den gesamten `range1`-Bereich, da sie nicht mit einer anderen Hintergrundfarbe im Konflikt steht.

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

Wie unten zu sehen ist, wird der Teil des Textknotens, in dem sich die beiden registrierten Highlights überlappen, standardmäßig in Blau angezeigt, da `highlight-2` nach `highlight-1` registriert wurde.

{{EmbedLiveSample("Setting priority")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft der Hervorhebung von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
