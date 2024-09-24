---
title: "Highlight: Prioritätseigenschaft"
short-title: Priorität
slug: Web/API/Highlight/priority
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Es ist möglich, {{domxref("Range")}}-Objekte zu erstellen, die sich in einem Dokument überlappen.

Wenn überlappende Bereiche von mehreren verschiedenen {{domxref("Highlight")}}-Objekten verwendet werden und diese Hervorhebungen mit Hilfe von {{cssxref("::highlight")}} Pseudoelementen gestaltet werden, kann dies zu widersprüchlichen Stilen führen.

Wenn zwei Textbereiche überlappen und beide mit der {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}} hervorgehoben werden, und wenn sie beide mit der CSS-Eigenschaft `color` gestaltet werden, muss der Browser entscheiden, welche Farbe zur Gestaltung des Textes im überlappenden Teil verwendet werden soll.

Standardmäßig haben alle Hervorhebungen die gleiche Priorität und der Browser wählt die zuletzt registrierte Hervorhebung, um die überlappenden Teile zu gestalten.

Die `priority`-Eigenschaft der {{domxref("Highlight")}}-Schnittstelle ist eine {{jsxref("Number")}}, die verwendet wird, um dieses Standardverhalten zu ändern und zu bestimmen, welche Stilrichtungen der Hervorhebungen zur Behebung von Stilkonflikten bei überlappenden Teilen verwendet werden sollen.

Beachten Sie, dass alle Stile einer Hervorhebung angewandt werden und der Browser nur Konflikte lösen muss, wenn dieselben CSS-Eigenschaften von mehreren überlappenden Hervorhebungen verwendet werden. Die Behebung von Stilkonflikten bei Hervorhebungen hängt auch nicht von der Reihenfolge ab, in der die {{cssxref("::highlight")}} Pseudoelemente-Regeln im Quelltext erscheinen, oder davon, ob CSS-Eigenschaften als `!important` gekennzeichnet sind.

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

// Erstellen von zwei überlappenden Hervorhebungen
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

Wie unten zu sehen ist, wird standardmäßig der Teil des Textknotens, in dem sich die beiden registrierten Hervorhebungen überlappen, in Blau angezeigt, weil `highlight-2` nach `highlight-1` registriert wird. Die Hintergrundfarbe, die von `highlight-1` definiert wird, umfasst den gesamten `range1`, da sie mit keiner anderen Hintergrundfarbe in Konflikt steht.

{{EmbedLiveSample("Default priority")}}

### Festlegen der Priorität

#### HTML

```html
<button id="prioritize-1" type="button">Priorität 1</button>
<button id="prioritize-2" type="button">Priorität 2</button>
<button id="reset" type="button">Zurücksetzen</button>
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

// Erstellen von zwei überlappenden Hervorhebungen
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

// Schaltflächen zum Ändern der Hervorhebungspriorität hinzufügen.
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

Wie unten zu sehen ist, wird standardmäßig der Teil des Textknotens, in dem sich die beiden registrierten Hervorhebungen überlappen, in Blau angezeigt, weil `highlight-2` nach `highlight-1` registriert wird.

{{EmbedLiveSample("Setting priority")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft des Markierens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
