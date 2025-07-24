---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: fc37858b298a5e81a455084bf91477fcbf3f3ab7
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

Die **`highlightsFromPoint()`** Methode des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Interfaces gibt ein Array von Objekten zurück, die die benutzerdefinierten Hervorhebungen darstellen, die an einem bestimmten Punkt innerhalb des Ansichtsfensters angewendet wurden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punktes innerhalb des Ansichtsfensters, von dem die Informationen über benutzerdefinierte Hervorhebungen zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punktes innerhalb des Ansichtsfensters, von dem die Informationen über benutzerdefinierte Hervorhebungen zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die enthalten können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt innerhalb von Schattenwurzeln im Array existieren, werden ebenfalls im Rückgabewert enthalten sein, zusätzlich zu denen, die im Licht-DOM vorhanden sind. Standardmäßig werden Hervorhebungen innerhalb von Schattenwurzeln nicht zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult`-Objekten, die die benutzerdefinierten Hervorhebungen darstellen, die an dem durch die `x` und `y` Parameter angegebenen Punkt im Ansichtsfenster angewendet werden.

Jedes `HighlightHitResult`-Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten, die die Bereiche darstellen, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn keine benutzerdefinierten Hervorhebungen an dem angegebenen Punkt angewendet werden oder der angegebene Punkt außerhalb des Ansichtsfensters liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgabe von benutzerdefinierten Hervorhebungen an der Position des Mauszeigers

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Absatz von Text anwenden. Diese benutzerdefinierten Hervorhebungen können sich überlappen. Wenn der Benutzer den Absatz doppelt anklickt, verwenden wir die Methode `highlightsFromPoint()`, um den Inhalt der benutzerdefinierten Hervorhebungen zurückzugeben, die sich an den Koordinaten des Mauszeigers bei dem Doppelklick befinden.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} Element, das Text enthält, auf den Sie benutzerdefinierte Hervorhebungen anwenden können, und ein {{htmlelement("section")}} Element, in das wir die hervorgehobenen Textfragmente ausgeben werden.

```html live-sample___highlights-from-point-example
<h1>highlightsFromPoint() demo</h1>
<p class="highlightable-text">
  When you select a section of text then press "h" on the keyboard, the text you
  selected will be given a custom highlight. Multiple highlights will be colored
  yellow, red, and blue, in that order. When you double-click on a highlighted
  section of text, that section will be outputted at the bottom of the UI. If
  multiple highlights overlap the section, you'll see multiple text sections
  outputted.
</p>
<h2>Highlighted text at point</h2>
<section></section>
```

#### CSS

Im CSS definieren wir Stile für drei benutzerdefinierte Hervorhebungen namens `highlight1`, `highlight2` und `highlight3`. Wir wählen jede benutzerdefinierte Hervorhebung, indem wir ihren Namen an das {{cssxref("::highlight()")}} Pseudoelement übergeben und ihnen die Hintergrundfarben Gelb, Rot und Blau zuweisen.

```css hidden live-sample___highlights-from-point-example
* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
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
  background-color: #eee;
  border: 2px solid #ddd;
  border-radius: 5px;
}

.instructions {
  font-size: 0.8rem;
}
```

```css live-sample___highlights-from-point-example
:root::highlight(highlight1) {
  background-color: rgb(255 255 0 / 0.5);
}

:root::highlight(highlight2) {
  background-color: rgb(255 0 0 / 0.5);
}

:root::highlight(highlight3) {
  background-color: rgb(0 0 255 / 0.75);
  color: white;
}
```

#### JavaScript

Das Skript für dieses Beispiel hat zwei verschiedene Funktionalitätsbereiche: Zuerst müssen wir benutzerdefinierte Hervorhebungen erstellen und auf unseren Inhalt anwenden, dann können wir die Methode `highlightsFromPoint()` verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Erstellen und Anwenden von benutzerdefinierten Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, beginnen wir damit, Verweise auf das `<p>`-Element und dessen enthaltenen Textknoten zu erhalten. Wir erstellen dann eine Variable namens `highlightCount`, die anfänglich auf `1` gesetzt ist und verwendet wird, um später zu bestimmen, welche benutzerdefinierte Hervorhebung angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als Nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignishandler, der eine benutzerdefinierte Hervorhebung auf jeden ausgewählten Text anwendet, wenn die <kbd>h</kbd>-Taste auf der Tastatur gedrückt wird. Darin beginnen wir damit, den ausgewählten Text mit [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu erfassen und ihn mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) in einen [`Range`](/de/docs/Web/API/Range) umzuwandeln.

Wir überprüfen, ob die [`startContainer`](/de/docs/Web/API/Range/startContainer) und [`endContainer`](/de/docs/Web/API/Range/endContainer) des `selectedRange`-Objekts beide gleich dem Absatz `textNode` sind, um sicherzustellen, dass wir keine bereichsübergreifenden Hervorhebungen zulassen. Wenn ja, setzen wir den benutzerdefinierten `highlightName`, den wir auf den `selectedRange` anwenden möchten, auf `highlight${highlightCount++}`. Da wir `highlightCount` erhöhen, fügen wir eine Prüfung ein - wenn es `4` erreicht, setzen wir es zurück auf `1`. Dies bewirkt, dass die verfügbaren Hervorhebungen in der Reihenfolge durchlaufen werden, wie sie festgelegt sind.

Schließlich erstellen wir für den `keydown` Ereignishandler ein neues `highlight` Objekt mit dem [`Highlight()`](/de/docs/Web/API/Highlight/Highlight) Konstruktor, indem wir den zuvor erstellten `selectedRange` übergeben. Wir setzen dann mit der Methode [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) die gewählte benutzerdefinierte Hervorhebung, die in `highlightName` referenziert wird, auf `highlight`.

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

##### Rückgabe von benutzerdefinierten Hervorhebungen von einem Punkt

Da wir jetzt die Möglichkeit haben, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die Methode `highlightsFromPoint()` verwenden, um die an einem bestimmten Punkt angewendeten benutzerdefinierten Hervorhebungen zurückzugeben.

Wir erhalten einen Verweis auf unser `<section>`-Element, dann definieren wir eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event) Ereignishandlerfunktion, um den hervorgehobenen Text an der Mauszeigerposition auszugeben, wenn das Ereignis ausgelöst wird. Innerhalb des Handlers übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()` Aufruf, leeren den Inhalt des `<section>`-Elements und durchlaufen dann jedes Highlight im `highlights` Array.

Für jedes `highlight` erfassen wir den ersten Bereich im [`ranges`](#ranges) Array (es gibt in diesem Fall immer nur einen Bereich in jedem Highlight), erhalten dann den exakten hervorgehobenen String mit [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen ihn in das `innerHTML` des `<section>`-Elements ein, innerhalb eines `<article>` Elements.

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

{{EmbedLiveSample("highlights-from-point-example", "100%", "600")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API Modul](/de/docs/Web/CSS/CSS_custom_highlight_API)
