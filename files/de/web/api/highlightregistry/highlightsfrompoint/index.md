---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: f314991b236fce81b712a6df59e4643de0f98449
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

Die **`highlightsFromPoint()`** Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) Schnittstelle gibt ein Array von Objekten zurück, die die benutzerdefinierten Hervorhebungen an einem bestimmten Punkt innerhalb des Viewports darstellen.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punktes innerhalb des Viewports, von dem die Informationen zu benutzerdefinierten Hervorhebungen zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punktes innerhalb des Viewports, von dem die Informationen zu benutzerdefinierten Hervorhebungen zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die folgendes beinhalten können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt innerhalb der im Array enthaltenen Shadow-Roots existieren, werden ebenfalls in den Rückgabewert einbezogen, zusätzlich zu denen im Light DOM. Standardmäßig werden Hervorhebungen innerhalb von Shadow-Roots nicht zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult` Objekten, die die benutzerdefinierten Hervorhebungen darstellen, die am durch die `x` und `y` Parameter spezifizierten Punkt im Viewport angewendet werden.

Jedes `HighlightHitResult` Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight) Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange) Objekten, die die Bereiche darstellen, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Viewports liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgabe der benutzerdefinierten Hervorhebungen an der Position des Mauszeigers

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Absatz Text anwenden. Diese benutzerdefinierten Hervorhebungen können sich überlappen. Wenn der Benutzer auf den Absatz doppelklickt, verwenden wir die Methode `highlightsFromPoint()`, um den Inhalt etwaiger benutzerdefinierter Hervorhebungen zu ermitteln, die sich an den Mauszeigerkoordinaten des Doppelklicks befinden.

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

Im CSS definieren wir das Styling für drei benutzerdefinierte Hervorhebungen namens `highlight1`, `highlight2` und `highlight3`. Wir wählen jede benutzerdefinierte Hervorhebung aus, indem wir ihren Namen in das {{cssxref("::highlight()")}} Pseudo-Element einfügen und ihnen jeweils gelbe, rote und blaue Hintergrundfarben geben.

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

Das Skript für dieses Beispiel hat zwei unterschiedliche Funktionsbereiche: Wir müssen zuerst benutzerdefinierte Hervorhebungen erstellen und auf unseren Inhalt anwenden, anschließend können wir die Methode `highlightsFromPoint()` verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Erstellen und Anwenden von benutzerdefinierten Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, beginnen wir mit dem Abrufen von Referenzen zum `<p>` Element und dessen enthaltenem Textknoten. Wir erstellen dann eine Variable namens `highlightCount`, die initial auf `1` gesetzt ist und später verwendet wird, um anzugeben, welche benutzerdefinierte Hervorhebung angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event) Event-Handler, der eine benutzerdefinierte Hervorhebung auf jeden ausgewählten Text anwendet, wenn auf der Tastatur <kbd>h</kbd> gedrückt wird. Innerhalb des Handlers beginnen wir damit, den ausgewählten Text mit [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu erfassen und in einen [`Range`](/de/docs/Web/API/Range) zu konvertieren, indem [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) verwendet wird.

Wir prüfen, ob die [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) und [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) des `selectedRange` Objekts beide gleich dem Absatz `textNode` sind, um sicherzustellen, dass keine cross-container Hervorhebung erlaubt wird. Falls dies zutrifft, setzen wir den benutzerdefinierten `highlightName`, den wir auf `selectedRange` anwenden möchten, mit `highlight${highlightCount++}`. Da wir `highlightCount` hochzählen, fügen wir eine Prüfung hinzu — wenn es `4` erreicht, setzen wir es zurück auf `1`. Dies hat den Effekt, dass die verfügbaren Hervorhebungen in der Reihenfolge durchlaufen werden, in der sie gesetzt werden.

Schließlich für den `keydown` Event-Handler erstellen wir ein neues `highlight` Objekt mit dem [`Highlight()`](/de/docs/Web/API/Highlight/Highlight) Konstruktor, wobei wir das zuvor erstellte `selectedRange` übergeben. Wir wenden dann die gewählte benutzerdefinierte Hervorhebung, die in `highlightName` referenziert wird, auf `highlight` an, indem wir die [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) Methode verwenden.

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

Jetzt, da wir die Möglichkeit haben, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die Methode `highlightsFromPoint()` verwenden, um die benutzerdefinierten Hervorhebungen, die an einem bestimmten Punkt angewendet wurden, zurückzugeben.

Wir holen uns eine Referenz zu unserem `<section>` Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event) Event-Handler-Funktion, um den hervorgehobenen Text an der Mauszeigerposition auszugeben, wenn das Ereignis feuert. Innerhalb des Handlers übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()` Aufruf, löschen den Inhalt des `<section>` Elements und durchlaufen jedes Highlight im `highlights` Array.

Für jedes `highlight` holen wir den ersten Bereich im [`ranges`](#ranges) Array (es gibt in diesem Fall immer nur einen Bereich in jeder Hervorhebung), holen die exakte hervorgehobene Zeichenkette mit [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen sie zur `innerHTML` des `<section>` Elements, innerhalb eines `<article>` Elements hinzu.

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
- [CSS Custom Highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
