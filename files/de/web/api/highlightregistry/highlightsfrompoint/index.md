---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

Die **`highlightsFromPoint()`** Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle gibt ein Array von Objekten zurück, das die benutzerdefinierten Hervorhebungen darstellt, die an einem bestimmten Punkt innerhalb des Ansichtsfensters angewendet werden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punktes innerhalb des Ansichtsfensters, von dem aus die Informationen zu benutzerdefinierten Hervorhebungen zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punktes innerhalb des Ansichtsfensters, von dem aus die Informationen zu benutzerdefinierten Hervorhebungen zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die Folgendes beinhalten können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt innerhalb von Shadow Roots im Array existieren, werden ebenfalls in den Rückgabewert einbezogen, zusätzlich zu den im Light-DOM vorhandenen. Standardmäßig werden Hervorhebungen innerhalb von Shadow Roots nicht zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult`-Objekten, das die benutzerdefinierten Hervorhebungen darstellt, die an dem durch die Parameter `x` und `y` festgelegten Punkt im Ansichtsfenster angewendet werden.

Jedes `HighlightHitResult`-Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten, das die Bereiche darstellt, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Ansichtsfensters liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgabe benutzerdefinierter Hervorhebungen an der Mauszeigerposition

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Textabsatz anwenden. Diese benutzerdefinierten Hervorhebungen können sich überlappen. Wenn der Benutzer den Absatz doppelt anklickt, verwenden wir die `highlightsFromPoint()`-Methode, um den Inhalt aller benutzerdefinierten Hervorhebungen an den Mauszeigerkoordinaten des Doppelklicks zurückzugeben.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element mit Text, auf den Sie benutzerdefinierte Hervorhebungen anwenden können, und ein {{htmlelement("section")}}-Element, in das wir die hervorgehobenen Textfragmente ausgeben.

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

Im CSS definieren wir das Styling für drei benutzerdefinierte Hervorhebungen mit den Namen `highlight1`, `highlight2` und `highlight3`. Wir wählen jede benutzerdefinierte Hervorhebung aus, indem wir ihren Namen in das {{cssxref("::highlight()")}}-Pseudoelement übergeben und ihnen jeweils gelbe, rote und blaue Hintergrundfarben geben.

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

Das Skript für dieses Beispiel hat zwei unterschiedliche Funktionsbereiche: Zunächst müssen wir benutzerdefinierte Hervorhebungen erstellen und auf unseren Inhalt anwenden, dann können wir die `highlightsFromPoint()`-Methode verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Erstellung und Anwendung benutzerdefinierter Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, fangen wir an, Referenzen zum `<p>`-Element und seinem enthaltenen Textknoten zu holen. Dann erstellen wir eine Variable namens `highlightCount`, die anfänglich auf `1` gesetzt ist und später verwendet wird, um festzulegen, welche benutzerdefinierte Hervorhebung angewendet wird.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Nächstens definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler, der eine benutzerdefinierte Hervorhebung auf jeden ausgewählten Text anwendet, wenn <kbd>h</kbd> auf der Tastatur gedrückt wird. Im Inneren beginnen wir, indem wir den ausgewählten Text mit [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) holen und ihn mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) in einen [`Range`](/de/docs/Web/API/Range) umwandeln.

Wir überprüfen, ob die [`startContainer`](/de/docs/Web/API/Range/startContainer)- und [`endContainer`](/de/docs/Web/API/Range/endContainer)-Eigenschaften des `selectedRange`-Objekts beide gleich dem Absatz-`textNode` sind, um sicherzustellen, dass keine containerübergreifenden Hervorhebungen erlaubt sind. Wenn ja, setzen wir den benutzerdefinierten `highlightName`, den wir auf den `selectedRange` anwenden wollen, indem wir `highlight${highlightCount++}` verwenden. Da wir `highlightCount` erhöhen, fügen wir eine Überprüfung hinzu — wenn es `4` erreicht, setzen wir es zurück auf `1`. Dies hat den Effekt, die verfügbaren Hervorhebungen in Reihenfolge zu durchlaufen, wie sie gesetzt werden.

Schließlich erstellen wir für den `keydown`-Ereignishandler ein neues `highlight`-Objekt mit dem [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)-Konstruktor, indem wir ihm den zuvor erstellten `selectedRange` übergeben. Wir wenden dann die gewählte benutzerdefinierte Hervorhebung, die in `highlightName` referenziert wird, auf `highlight` mit der Methode [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) an.

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

Jetzt, da wir die Möglichkeit haben, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die `highlightsFromPoint()`-Methode verwenden, um die benutzerdefinierten Hervorhebungen zurückzugeben, die an einem bestimmten Punkt angewendet wurden.

Wir holen eine Referenz zu unserem `<section>`-Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event)-Ereignishandlerfunktion, um den hervorgehobenen Text an der Mauszeigerposition auszugeben, wenn das Ereignis ausgelöst wird. Im Inneren des Handlers übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()`-Aufruf, leeren den Inhalt des `<section>`-Elements und durchlaufen dann jede Hervorhebung im `highlights`-Array.

Für jede `highlight` holen wir den ersten Bereich im [`ranges`](#ranges)-Array (es gibt in diesem Fall nur einen Bereich in jeder Hervorhebung), dann erhalten wir den genauen hervorgehobenen String mit [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen ihn in das `innerHTML` des `<section>`-Elements ein, innerhalb eines `<article>`-Elements.

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
- [Das CSS Custom Highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
