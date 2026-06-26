---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: 6401be870472f3197c3a130b719952779cad639b
---

{{APIRef("CSS Custom Highlight API")}}

Die **`highlightsFromPoint()`** Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) Schnittstelle gibt ein Array von Objekten zurück, die die benutzerdefinierten Hervorhebungen darstellen, die an einem bestimmten Punkt im Ansichtsfenster angewendet werden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punktes im Ansichtsfenster, von dem benutzerdefinierte Hervorhebungsinformationen zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punktes im Ansichtsfenster, von dem benutzerdefinierte Hervorhebungsinformationen zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, zu denen gehören können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt innerhalb der im Array enthaltenen Shadow Roots existieren, werden zusätzlich zu denen im Light DOM in den Rückgabewert einbezogen. Standardmäßig werden Hervorhebungen innerhalb von Shadow Roots nicht zurückgegeben.

### Rückgabewert

Ein Array von Objekten, die die benutzerdefinierten Hervorhebungen darstellen, die an dem durch die `x`- und `y`-Parameter angegebenen Punkt im Ansichtsfenster angewendet werden.

Jedes Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight) Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange) Objekten, die die Bereiche darstellen, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Ansichtsfensters liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Abrufen benutzerdefinierter Hervorhebungen an der Mauszeigerposition

Dieses Beispiel zeigt, wie die `highlightsFromPoint()` Methode verwendet wird, um den Inhalt aller benutzerdefinierten Hervorhebungen an den Koordinaten des Mauszeigers bei Doppelklick eines Benutzers zurückzugeben.

In diesem Beispiel können mehrere benutzerdefinierte Hervorhebungen auf einen Textabsatz erstellt werden, und die Hervorhebungen können sich überlappen. Wenn der Benutzer die Taste <kbd>h</kbd> drückt, nachdem er Text ausgewählt hat, wird eine neue [`Highlight`](/de/docs/Web/API/Highlight) benannt und registriert. Dieses Beispiel unterstützt bis zu drei benutzerdefinierte Hervorhebungen gleichzeitig. Wenn der Benutzer innerhalb des hervorgehobenen Bereichs doppelklickt, wird der Inhalt aller Highlights an diesem Punkt, falls vorhanden, im Ausgabebereich angezeigt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} Element und ein {{htmlelement("section")}} Element. Die `<section>` dient als Ausgabebereich, in dem der Inhalt der doppelt geklickten Hervorhebungen angezeigt wird.

```html live-sample___highlights-from-point-example
<h1>highlightsFromPoint() demo</h1>
<h2>Highlightable content</h2>
<p class="highlightable-text">
  Select a portion of text, and then press the "h" key. The selected text gets a
  custom highlight, colored yellow, red, or blue, in that order. After the third
  highlight, each new one replaces the oldest, cycling through the colors in the
  same order. Next, double-click any highlighted text. The highlighted text will
  appear in the output. If multiple highlights overlap a section, you'll see
  multiple text sections in the output.
</p>
<h2>Text in double-clicked highlights</h2>
<section></section>
```

#### CSS

In dem CSS definieren wir das Styling für drei benutzerdefinierte Hervorhebungen namens `highlight1`, `highlight2` und `highlight3`. Wir zielen auf jede benutzerdefinierte Hervorhebung mit dem {{cssxref("::highlight()")}} Pseudo-Element, wodurch deren Hintergründe halbtransparent gelb, rot und blau sind. Wo Hervorhebungen sich überlappen, kombinieren sich die halbtransparenten Hintergründe zu einer Mischfarbe.

```css live-sample___highlights-from-point-example
::highlight(highlight1) {
  background-color: rgb(255 255 0 / 0.75);
}

::highlight(highlight2) {
  background-color: rgb(255 0 0 / 0.3);
}

::highlight(highlight3) {
  background-color: rgb(0 0 255 / 0.3);
}
```

```css hidden live-sample___highlights-from-point-example
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  max-width: 800px;
  margin: 0 auto;
}

section {
  display: flex;
  gap: 10px;
}

.highlightable-text,
article {
  padding: 10px;
  background-color: #eeeeee;
  border: 2px solid #dddddd;
  border-radius: 5px;
}
```

#### JavaScript

Dieses Beispiel hat zwei unterschiedliche Funktionsbereiche. Zuerst ermöglichen wir das Erstellen benutzerdefinierter Hervorhebungen, wenn der Benutzer die Taste <kbd>h</kbd> nach der Auswahl von Text drückt. Dann ermöglichen wir das Schreiben des hervorgehobenen Inhalts auf die Seite, wenn der Benutzer auf eine oder mehrere benutzerdefinierte Hervorhebungen doppelklickt.

##### Erstellen und Anwenden benutzerdefinierter Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, beginnen wir damit, Referenzen zum `<p>` Element und dessen enthaltenen Textknoten zu erhalten. Wir erstellen auch eine Variable namens `highlightCount`, die initial auf `1` gesetzt ist und dazu verwendet wird, festzulegen, welche benutzerdefinierte Hervorhebung später angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Wenn der Benutzer die Taste <kbd>h</kbd> drückt, nachdem er Text ausgewählt hat, müssen wir ein neues [`Highlight`](/de/docs/Web/API/Highlight) Objekt registrieren und benennen, wodurch bis zu drei benutzerdefinierte Hervorhebungen gleichzeitig unterstützt werden. Dazu definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignishandler, der eine benutzerdefinierte Hervorhebung auf jeden ausgewählten Text anwendet, wenn <kbd>h</kbd> auf der Tastatur gedrückt wird. Dazu greifen wir zunächst auf den ausgewählten Text mit [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu und konvertieren ihn mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) in einen [`Range`](/de/docs/Web/API/Range).

Wir überprüfen, dass die [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) und [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) des `selectedRange` Objekts beide gleich dem `textNode` des Absatzes sind, um sicherzustellen, dass wir keine bereichsübergreifenden Hervorhebungen zulassen. Wenn ja, setzen wir den benutzerdefinierten `highlightName`, den wir auf den `selectedRange` anwenden möchten, mit `highlight${highlightCount++}`. Da wir `highlightCount` inkrementieren, aber nur drei Hervorhebungen haben, setzen wir, wenn der Zähler `4` erreicht, ihn wieder auf `1` zurück, um effektiv durch die verfügbaren Hervorhebungen in der festgelegten Reihenfolge zu wechseln.

Schließlich erstellen wir für den `keydown` Ereignishandler ein neues `highlight` Objekt mit dem [`Highlight()`](/de/docs/Web/API/Highlight/Highlight) Konstruktor und übergeben ihm den zuvor erstellten `selectedRange`. Dann wenden wir die gewählte benutzerdefinierte Hervorhebung, die in `highlightName` referenziert ist, auf `highlight` mit der [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) Methode an.

```js live-sample___highlights-from-point-example
window.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    const selection = window.getSelection();
    const selectedRange = selection.getRangeAt(0);
    if (
      selectedRange.startContainer === textNode &&
      selectedRange.endContainer === textNode
    ) {
      const highlightName = `highlight${highlightCount++}`;
      if (highlightCount === 4) {
        highlightCount = 1;
      }
      const highlight = new Highlight(selectedRange);
      CSS.highlights.set(highlightName, highlight);
    }
  }
});
```

##### Benutzerdefinierte Hervorhebungen von einem Punkt zurückgeben

Nun, da wir benutzerdefinierte Hervorhebungen erstellen und anwenden können, können wir die `highlightsFromPoint()` Methode verwenden, um die benutzerdefinierten Hervorhebungen an einem bestimmten Punkt zurückzugeben.

Wir greifen auf unser `<section>` Element zu, dann definieren wir eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event) Ereignishandlermethode, um den hervorgehobenen Text an der Mauszeigerposition auszugeben, wenn das Ereignis ausgelöst wird. Innerhalb des Handlers übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()` Aufruf, löschen die Inhalte des `<section>` Elements und durchlaufen dann jedes Highlight im `highlights` Array.

Für jedes `highlight` greifen wir auf den ersten Bereich im [`ranges`](#ranges) Array zu (es gibt in diesem Fall immer nur einen Bereich in jedem Highlight), dann erhalten wir die exakte hervorgehobene Zeichenfolge mit [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen sie dem `innerHTML` des `<section>` Elements innerhalb eines `<article>` Elements hinzu.

```js live-sample___highlights-from-point-example
const section = document.querySelector("section");

pElem.addEventListener("dblclick", (event) => {
  const highlights = CSS.highlights.highlightsFromPoint(
    event.clientX,
    event.clientY,
  );

  section.innerHTML = "";
  for (highlight of highlights) {
    const range = highlight.ranges[0];
    const textSelection = range.toString();
    section.innerHTML += `<article>${textSelection}</article>`;
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Examples", "100%", "600")}}

Um eine Hervorhebung zu erstellen, drücken Sie die Taste <kbd>h</kbd>, nachdem Sie Text ausgewählt haben. Sie können bis zu drei Hervorhebungen erstellen. Doppelklicken Sie auf die erstellten Hervorhebungen, vorzugsweise dort, wo sie sich überlappen, um den Inhalt der angeklickten Hervorhebungen auf die Seite zu schreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS custom highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
