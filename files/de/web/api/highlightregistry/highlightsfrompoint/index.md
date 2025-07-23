---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: be4e435273b00cd15ff766b3e8e977068113fd4b
---

{{APIRef("CSS Custom Highlight API")}}

Die **`highlightsFromPoint()`** Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) Schnittstelle gibt ein Array von Objekten zurück, die die benutzerdefinierten Hervorhebungen darstellen, die an einem bestimmten Punkt innerhalb des Viewports angewendet werden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punkts innerhalb des Viewports, von dem benutzerdefinierte Hervorhebungsinformationen zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punkts innerhalb des Viewports, von dem benutzerdefinierte Hervorhebungsinformationen zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt mit Optionen, das Folgendes enthalten kann:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt innerhalb der in dem Array enthaltenen Shadow Roots existieren, werden zusätzlich zu denen im Light DOM im Rückgabewert enthalten sein. Standardmäßig werden Hervorhebungen innerhalb von Shadow Roots nicht zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult` Objekten, die die an dem durch die Parameter `x` und `y` im Viewport spezifizierten Punkt angewendeten benutzerdefinierten Hervorhebungen darstellen.

Jedes `HighlightHitResult` Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight) Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange) Objekten, die die Bereiche darstellen, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Viewports liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Benutzerdefinierte Hervorhebungen an der Position des Mauszeigers ausgeben

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Absatz Text anwenden. Diese benutzerdefinierten Hervorhebungen können sich überlappen. Wenn der Benutzer auf den Absatz doppelklickt, verwenden wir die `highlightsFromPoint()` Methode, um den Inhalt von benutzerdefinierten Hervorhebungen an den Mauszeigerkoordinaten des Doppelklicks zurückzugeben.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} Element mit Text, auf den Sie benutzerdefinierte Hervorhebungen anwenden können, und ein {{htmlelement("section")}} Element, in das wir die hervorgehobenen Textfragmente ausgeben werden.

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

Im CSS definieren wir das Styling für drei benutzerdefinierte Hervorhebungen mit den Namen `highlight1`, `highlight2` und `highlight3`. Wir wählen jede benutzerdefinierte Hervorhebung aus, indem wir ihren Namen in das {{cssxref("::highlight()")}} Pseudoelement übergeben und ihnen jeweils gelbe, rote und blaue Hintergrundfarben geben.

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

Das Skript für dieses Beispiel hat zwei unterschiedliche Funktionsbereiche: Zuerst müssen wir benutzerdefinierte Hervorhebungen erstellen und auf unseren Inhalt anwenden, dann können wir die `highlightsFromPoint()` Methode verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Benutzerdefinierte Hervorhebungen erstellen und anwenden

Um benutzerdefinierte Hervorhebungen zu erstellen, beginnen wir damit, Referenzen auf das `<p>` Element und seinen enthaltenen Textknoten zu erhalten. Dann erstellen wir eine Variable namens `highlightCount`, die initial auf `1` gesetzt ist und verwendet wird, um später zu spezifizieren, welche benutzerdefinierte Hervorhebung angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignishandler, der eine benutzerdefinierte Hervorhebung auf jeden ausgewählten Text anwendet, wenn auf der Tastatur <kbd>h</kbd> gedrückt wird. Im Inneren beginnen wir damit, den ausgewählten Text mithilfe von [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu erfassen und ihn mithilfe von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) in einen [`Range`](/de/docs/Web/API/Range) umzuwandeln.

Wir prüfen, dass die [`startContainer`](/de/docs/Web/API/Range/startContainer) und [`endContainer`](/de/docs/Web/API/Range/endContainer) des `selectedRange` Objekts beide gleich dem Textknoten `textNode` des Absatzes sind, um sicherzustellen, dass wir keine bereichsübergreifenden Hervorhebungen zulassen. Wenn dies der Fall ist, setzen wir den benutzerdefinierten `highlightName`, den wir anwenden möchten, auf den `selectedRange` mithilfe von `highlight${highlightCount++}`. Da wir `highlightCount` inkrementieren, fügen wir eine Überprüfung hinzu - wenn es `4` erreicht, setzen wir es zurück auf `1`. Dies hat den Effekt, die verfügbaren Hervorhebungen der Reihe nach durchzusortieren, wenn sie gesetzt werden.

Zum Abschluss des `keydown` Ereignishandlers erstellen wir ein neues `highlight` Objekt, indem wir den [`Highlight()`](/de/docs/Web/API/Highlight/Highlight) Konstruktor verwenden und ihm den zuvor erstellen `selectedRange` übergeben. Dann wenden wir die gewählte benutzerdefinierte Hervorhebung, die in `highlightName` referenziert ist, auf `highlight` mithilfe der [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) Methode an.

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

Jetzt, da wir in der Lage sind, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die `highlightsFromPoint()` Methode verwenden, um die benutzerdefinierten Hervorhebungen zurückzugeben, die an einem bestimmten Punkt angewendet werden.

Wir erhalten eine Referenz auf unser `<section>` Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event) Ereignishandlerfunktion, um die hervorgehobenen Texte an der Position des Mauszeigers auszugeben, wenn das Ereignis ausgelöst wird. Im Inneren der Funktion übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()` Aufruf, löschen den Inhalt des `<section>` Elements und durchlaufen dann jede Hervorhebung im `highlights` Array.

Für jede `highlight` erfassen wir den ersten Bereich im [`ranges`](#ranges) Array (es gibt in diesem Fall nur einen Bereich in jeder Hervorhebung), erhalten die genau hervorgehobene Zeichenkette mittels [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen sie dem `innerHTML` des `<section>` Elements innerhalb eines `<article>` Elements hinzu.

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
