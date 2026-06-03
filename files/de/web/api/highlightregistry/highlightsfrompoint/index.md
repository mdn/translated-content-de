---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: 55fa335b332f8e4068344170167f412682206131
---

{{APIRef("CSS Custom Highlight API")}}

Die **`highlightsFromPoint()`** Methode des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Interfaces gibt ein Array von Objekten zurück, die die benutzerdefinierten Hervorhebungen repräsentieren, die an einem bestimmten Punkt innerhalb des Viewports angewendet wurden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punktes innerhalb des Viewports, von dem aus Informationen über benutzerdefinierte Hervorhebungen zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punktes innerhalb des Viewports, von dem aus Informationen über benutzerdefinierte Hervorhebungen zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, einschließlich:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt innerhalb von Shadow Roots im Array existieren, werden ebenfalls in den Rückgabewert aufgenommen, zusätzlich zu denen im Light DOM. Standardmäßig werden Hervorhebungen innerhalb von Shadow Roots nicht zurückgegeben.

### Rückgabewert

Ein Array von Objekten, das die benutzerdefinierten Hervorhebungen repräsentiert, die an dem durch die `x`- und `y`-Parameter angegebenen Punkt im Viewport angewendet wurden.

Jedes Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten, die die Bereiche repräsentieren, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Viewports liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgabe benutzerdefinierter Hervorhebungen an der Position des Mauszeigers

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Absatz von Text anwenden. Diese benutzerdefinierten Hervorhebungen können sich überschneiden. Wenn der Benutzer den Absatz doppelklickt, verwenden wir die `highlightsFromPoint()`-Methode, um den Inhalt beliebiger benutzerdefinierter Hervorhebungen an den Mauszeigerkoordinaten des Doppelklicks zurückzugeben.

#### HTML

Das Markup umfasst ein {{htmlelement("p")}}-Element, das Text enthält, auf den Sie benutzerdefinierte Hervorhebungen anwenden können, und ein {{htmlelement("section")}}-Element, in das wir die hervorgehobenen Textfragmente ausgeben werden.

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

Im CSS definieren wir Stile für drei benutzerdefinierte Hervorhebungen namens `highlight1`, `highlight2` und `highlight3`. Wir wählen jede benutzerdefinierte Hervorhebung aus, indem wir ihren Namen in das {{cssxref("::highlight()")}}-Pseudoelement übergeben, und geben ihnen jeweils gelbe, rote und blaue Hintergrundfarben.

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

Das Skript für dieses Beispiel hat zwei unterschiedliche Funktionsbereiche: Zuerst müssen wir benutzerdefinierte Hervorhebungen erstellen und auf unseren Inhalt anwenden, dann können wir die `highlightsFromPoint()`-Methode verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Erstellen und Anwenden benutzerdefinierter Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, beginnen wir damit, Referenzen auf das `<p>`-Element und dessen enthaltenen Textknoten zu erfassen. Dann erstellen wir eine Variable namens `highlightCount`, die initial auf `1` gesetzt ist und später verwendet wird, um zu spezifizieren, welche benutzerdefinierte Hervorhebung angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als Nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler, der eine benutzerdefinierte Hervorhebung auf jeden ausgewählten Text anwendet, wenn <kbd>h</kbd> auf der Tastatur gedrückt wird. Im Inneren beginnen wir damit, den ausgewählten Text mit [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu erfassen und ihn in einen [`Range`](/de/docs/Web/API/Range) mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) zu konvertieren.

Wir überprüfen, ob die [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) und [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) des `selectedRange`-Objekts beide dem Absatz `textNode` entsprechen, um sicherzustellen, dass keine containerübergreifenden Hervorhebungen zugelassen werden. Ist dies der Fall, setzen wir den benutzerdefinierten `highlightName`, den wir auf den `selectedRange` anwenden möchten, auf `highlight${highlightCount++}`. Da wir `highlightCount` inkrementieren, fügen wir eine Überprüfung hinzu – wenn er `4` erreicht, setzen wir ihn auf `1` zurück. Dies hat den Effekt, die verfügbaren Hervorhebungen in der Reihenfolge durchzugehen, in der sie gesetzt werden.

Abschließend für den `keydown`-Ereignishandler erstellen wir ein neues `highlight`-Objekt unter Verwendung des [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)-Konstruktors und übergeben ihm den zuvor erstellten `selectedRange`. Dann wenden wir die gewählte benutzerdefinierte Hervorhebung, die in `highlightName` referenziert wird, auf `highlight` mittels der [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) Methode an.

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

##### Rückgabe benutzerdefinierter Hervorhebungen von einem Punkt

Da wir jetzt die Möglichkeit haben, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die `highlightsFromPoint()`-Methode verwenden, um die benutzerdefinierten Hervorhebungen zurückzugeben, die an einem bestimmten Punkt angewendet wurden.

Wir erfassen eine Referenz auf unser `<section>`-Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event)-Ereignishandlerfunktion, um die hervorgehobenen Texte an der Position des Mauszeigers auszugeben, wenn das Ereignis ausgelöst wird. Im Handler übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()`-Aufruf, löschen den Inhalt des `<section>`-Elements und durchlaufen dann jede Hervorhebung im `highlights`-Array.

Für jede `highlight` erfassen wir den ersten Bereich im [`ranges`](#ranges)-Array (es gibt in diesem Fall immer nur einen Bereich in jeder Hervorhebung), erhalten dann den exakten hervorgehobenen String mit [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen ihn dem `innerHTML` des `<section>`-Elements innerhalb eines `<article>`-Elements hinzu.

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

- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
