---
title: "Highlight: priority-Eigenschaft"
short-title: priority
slug: Web/API/Highlight/priority
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Es ist möglich, [`Range`](/de/docs/Web/API/Range)-Objekte zu erstellen, die sich in einem Dokument überschneiden.

Wenn sich überlappende Bereiche in mehreren verschiedenen [`Highlight`](/de/docs/Web/API/Highlight)-Objekten befinden und diese Hervorhebungen mit {{cssxref("::highlight")}}-Pseudo-Elementen gestylt werden, kann dies zu widersprüchlichen Stilen führen.

Wenn zwei Textbereiche sich überlappen und beide mit der [CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api) hervorgehoben werden, und wenn beide mit der `color`-CSS-Eigenschaft gestylt werden, muss der Browser entscheiden, welche Farbe zum Stylen des Textes im überlappenden Teil verwendet werden soll.

Standardmäßig haben alle Hervorhebungen die gleiche Priorität und der Browser wählt die zuletzt registrierte Hervorhebung, um die überlappenden Teile zu stylen.

Die `priority`-Eigenschaft der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle ist eine {{jsxref("Number")}}, die dieses Standardverhalten ändert und bestimmt, welcher Stil der Hervorhebung verwendet werden soll, um Stilkonflikte in überlappenden Bereichen zu lösen.

Beachten Sie, dass alle Stile einer Hervorhebung angewendet werden und der Browser nur Konflikte lösen muss, wenn dieselben CSS-Eigenschaften von mehreren überlappenden Hervorhebungen verwendet werden. Die Lösung von Stilkonflikten bei Hervorhebungen hängt auch nicht von der Reihenfolge ab, in der die {{cssxref("::highlight")}}-Pseudo-Elemente in der Quelle erscheinen, oder davon, ob CSS-Eigenschaften als `!important` markiert sind.

## Wert

Eine ganze Zahl.

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

Wie unten zu sehen ist, wird standardmäßig der Teil des Textknotens, in dem sich die beiden registrierten Hervorhebungen überlappen, in Blau angezeigt, da `highlight-2` nach `highlight-1` registriert wird. Die von `highlight-1` definierte Hintergrundfarbe umfasst den gesamten `range1`-Bereich, da sie nicht mit einer anderen Hintergrundfarbe in Konflikt steht.

{{EmbedLiveSample("Default priority")}}

### Priorität festlegen

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

Wie unten zu sehen ist, wird standardmäßig der Teil des Textknotens, in dem sich die beiden registrierten Hervorhebungen überlappen, in Blau angezeigt, da `highlight-2` nach `highlight-1` registriert wird.

{{EmbedLiveSample("Setting priority")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
