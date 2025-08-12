---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

Die **`highlightsFromPoint()`**-Methode des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Interfaces gibt ein Array von Objekten zurück, die die benutzerdefinierten Hervorhebungen darstellen, die an einem bestimmten Punkt im Ansichtsfenster angewendet werden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punkts im Ansichtsfenster, von dem die Informationen zur benutzerdefinierten Hervorhebung zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punkts im Ansichtsfenster, von dem die Informationen zur benutzerdefinierten Hervorhebung zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die Folgendes beinhalten können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt innerhalb der Schattenwurzeln im Array existieren, werden ebenfalls im Rückgabewert enthalten sein, zusätzlich zu denen, die im Licht-DOM vorhanden sind. Standardmäßig werden Hervorhebungen innerhalb von Schattenwurzeln nicht zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult`-Objekten, die die benutzerdefinierten Hervorhebungen darstellen, die an dem im `x` und `y` Parameter angegebenen Punkt im Ansichtsfenster angewendet werden.

Jedes `HighlightHitResult`-Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten, die die Bereiche darstellen, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Ansichtsfensters liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgabe benutzerdefinierter Hervorhebungen an der Position des Mauszeigers

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Textabsatz anwenden. Diese benutzerdefinierten Hervorhebungen können sich überschneiden. Wenn der Benutzer auf den Absatz doppelklickt, verwenden wir die Methode `highlightsFromPoint()`, um den Inhalt der benutzerdefinierten Hervorhebungen zurückzugeben, die sich an den Mauskoodinaten des Doppelklicks befinden.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element, das Text enthält, auf den Sie benutzerdefinierte Hervorhebungen anwenden können, und ein {{htmlelement("section")}}-Element, in das wir die hervorgehobenen Textfragmente ausgeben werden.

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

Im CSS definieren wir das Styling für drei benutzerdefinierte Hervorhebungen mit den Namen `highlight1`, `highlight2` und `highlight3`. Wir wählen jede benutzerdefinierte Hervorhebung aus, indem wir ihren Namen in das {{cssxref("::highlight()")}}-Pseudo-Element übergeben und ihnen jeweils gelbe, rote und blaue Hintergrundfarben geben.

```css hidden live-sample___highlights-from-point-example
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
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

Das Skript für dieses Beispiel hat zwei unterschiedliche Funktionalitäten: Wir müssen zuerst benutzerdefinierte Hervorhebungen erstellen und auf unseren Inhalt anwenden, dann können wir die Methode `highlightsFromPoint()` verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Erstellen und Anwenden benutzerdefinierter Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, beginnen wir mit dem Abrufen von Referenzen auf das `<p>`-Element und dessen enthaltenen Textknoten. Dann erstellen wir eine Variable namens `highlightCount`, die anfänglich auf `1` gesetzt ist und die festlegt, welche benutzerdefinierte Hervorhebung später angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als Nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler, der eine benutzerdefinierte Hervorhebung auf jede ausgewählte Textstelle anwendet, wenn die Taste <kbd>h</kbd> auf der Tastatur gedrückt wird. Wir beginnen damit, den ausgewählten Text mit [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu erfassen und ihn mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) in einen [`Range`](/de/docs/Web/API/Range) zu konvertieren.

Wir überprüfen, ob sowohl das [`startContainer`](/de/docs/Web/API/Range/startContainer)- als auch das [`endContainer`](/de/docs/Web/API/Range/endContainer)-Objekt des `selectedRange` der Absatz-`textNode` sind, um sicherzustellen, dass wir keine Überkreuz-Container-Hervorhebungen zulassen. Wenn ja, setzen wir den benutzerdefinierten `highlightName`, den wir auf den `selectedRange` anwenden möchten mit `highlight${highlightCount++}`. Da wir `highlightCount` inkrementieren, fügen wir eine Überprüfung hinzu - wenn es `4` erreicht, setzen wir es auf `1` zurück. Dies hat den Effekt, die verfügbaren Hervorhebungen der Reihe nach durchzugehen, während sie festgelegt werden.

Schließlich erstellen wir für den `keydown`-Ereignishandler ein neues `highlight`-Objekt unter Verwendung des [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)-Konstruktors und übergeben ihm den zuvor erstellten `selectedRange`. Wir wenden dann die ausgewählte benutzerdefinierte Hervorhebung, die in `highlightName` referenziert wird, auf `highlight` mithilfe der Methode [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) an.

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

Jetzt, wo wir die Fähigkeit haben, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die Methode `highlightsFromPoint()` verwenden, um die benutzerdefinierten Hervorhebungen, die an einem bestimmten Punkt angewendet wurden, zurückzugeben.

Wir erfassen eine Referenz auf unser `<section>`-Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event)-Ereignishandlerroutine, um den hervorgehobenen Text an der Position des Mauszeigers auszugeben, wenn das Ereignis ausgelöst wird. Im Handler übergeben wir die aktuellen Mausekoordinaten an einen `highlightsFromPoint()`-Aufruf, leeren den Inhalt des `<section>`-Elements, und durchlaufen dann jedes Highlight im `highlights`-Array.

Für jedes `highlight` erfassen wir den ersten Bereich im [`ranges`](#ranges)-Array (in diesem Fall gibt es immer nur einen Bereich in jedem Highlight), dann holen wir uns den genauen hervorgehobenen String mit [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen ihn in das `innerHTML` des `<section>`-Elements, innerhalb eines `<article>`-Elements, ein.

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
- [CSS Custom Highlight API](/de/docs/Web/CSS/CSS_custom_highlight_API) Modul
