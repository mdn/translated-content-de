---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

Die Methode **`highlightsFromPoint()`** des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Interfaces gibt ein Array von Objekten zurück, das die benutzerdefinierten Hervorhebungen repräsentiert, die an einem bestimmten Punkt innerhalb des Viewports angewendet werden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punktes im Viewport, von dem aus benutzerdefinierte Hervorhebungsinformationen zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punktes im Viewport, von dem aus benutzerdefinierte Hervorhebungsinformationen zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die beinhalten können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Benutzerdefinierte Hervorhebungen, die am angegebenen Punkt innerhalb der im Array enthaltenen Shadow Roots existieren, werden ebenfalls in den Rückgabewert einbezogen, zusätzlich zu den Hervorhebungen im Light DOM. Standardmäßig werden Hervorhebungen innerhalb von Shadow Roots nicht zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult`-Objekten, das die benutzerdefinierten Hervorhebungen repräsentiert, die an dem durch die Parameter `x` und `y` angegebenen Punkt im Viewport angewendet werden.

Jedes `HighlightHitResult`-Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt, das die angewendete benutzerdefinierte Hervorhebung repräsentiert.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten, das die Bereiche repräsentiert, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Viewports liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgeben von benutzerdefinierten Hervorhebungen an der Position des Mauszeigers

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Absatz Text anwenden. Diese benutzerdefinierten Hervorhebungen können sich überlappen. Wenn der Benutzer den Absatz doppelklickt, verwenden wir die Methode `highlightsFromPoint()`, um den Inhalt aller benutzerdefinierten Hervorhebungen zurückzugeben, die an den Mauszeigerkoordinaten des Doppelklicks befinden.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element mit Text, auf den Sie benutzerdefinierte Hervorhebungen anwenden können, sowie ein {{htmlelement("section")}}-Element, in das wir die hervorgehobenen Textfragmente ausgeben werden.

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

Im CSS definieren wir das Styling für drei benutzerdefinierte Hervorhebungen mit den Namen `highlight1`, `highlight2` und `highlight3`. Wir wählen jede benutzerdefinierte Hervorhebung aus, indem wir ihren Namen in das {{cssxref("::highlight()")}} Pseudo-Element einfügen und ihnen jeweils gelbe, rote und blaue Hintergründe geben.

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

Das Skript für dieses Beispiel hat zwei unterschiedliche Funktionsbereiche: Zunächst müssen wir benutzerdefinierte Hervorhebungen erstellen und auf unseren Inhalt anwenden, dann können wir die Methode `highlightsFromPoint()` verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Erstellen und Anwenden benutzerdefinierter Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, fangen wir an, Referenzen zum `<p>`-Element und dessen enthaltenem Textknoten zu erfassen. Dann erstellen wir eine Variable namens `highlightCount`, die anfangs auf `1` gesetzt ist und später verwendet wird, um zu spezifizieren, welche benutzerdefinierte Hervorhebung angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event)-Event-Handler, der eine benutzerdefinierte Hervorhebung auf jeden ausgewählten Text anwendet, wenn <kbd>h</kbd> auf der Tastatur gedrückt wird. Innerhalb des Handlers erfassen wir den ausgewählten Text mit [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) und konvertieren ihn mithilfe von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) in einen [`Range`](/de/docs/Web/API/Range).

Wir überprüfen, ob sowohl das [`startContainer`](/de/docs/Web/API/Range/startContainer) als auch das [`endContainer`](/de/docs/Web/API/Range/endContainer) des `selectedRange`-Objekts dem `textNode` des Absatzes entsprechen, um sicherzustellen, dass keine bereichsübergreifenden Hervorhebungen zulässig sind. Wenn dies der Fall ist, setzen wir den benutzerdefinierten `highlightName`, den wir auf den `selectedRange` anwenden möchten, auf `highlight${highlightCount++}`. Da wir `highlightCount` inkrementieren, fügen wir eine Überprüfung hinzu — wenn es `4` erreicht, setzen wir es zurück auf `1`. Dies führt dazu, die verfügbaren Hervorhebungen der Reihe nach durchzugehen, wie sie gesetzt werden.

Zum Abschluss des `keydown`-Event-Handlers erstellen wir ein neues `highlight`-Objekt mit dem Konstruktor [`Highlight()`](/de/docs/Web/API/Highlight/Highlight), indem wir ihm den im Vorfeld erstellten `selectedRange` übergeben. Anschließend wenden wir die benutzerdefinierte Hervorhebung, die in `highlightName` referenziert wird, auf `highlight` mithilfe der Methode [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) an.

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

Jetzt, da wir die Möglichkeit haben, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die Methode `highlightsFromPoint()` verwenden, um die benutzerdefinierten Hervorhebungen an einem bestimmten Punkt zurückzugeben.

Wir erfassen eine Referenzauf das `<section>`-Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event)-Event-Handler-Funktion, um den hervorgehobenen Text am Mauszeiger zu ermitteln, wenn das Event ausgelöst wird. Innerhalb des Handlers übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()`-Aufruf, löschen die Inhalte des `<section>`-Elements und durchlaufen dann jedes Highlight im `highlights`-Array.

Für jedes `highlight` erfassen wir den ersten Bereich im [`ranges`](#ranges)-Array (in diesem Fall gibt es in jedem Highlight immer nur einen Bereich), erhalten dann den genau hervorgehobenen String mit [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen ihn in den `innerHTML` des `<section>`-Elements innerhalb eines `<article>`-Elements ein.

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
- [CSS custom highlight API](/de/docs/Web/CSS/CSS_custom_highlight_API) Modul
