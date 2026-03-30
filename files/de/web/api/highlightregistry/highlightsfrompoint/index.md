---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("CSS Custom Highlight API")}}

Die Methode **`highlightsFromPoint()`** der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle gibt ein Array von Objekten zurück, die die benutzerdefinierten Hervorhebungen darstellen, die an einem bestimmten Punkt innerhalb des Ansichtsfensters angewendet wurden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punkts innerhalb des Ansichtsfensters, von dem benutzerdefinierte Hervorhebungsinformationen zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punkts innerhalb des Ansichtsfensters, von dem benutzerdefinierte Hervorhebungsinformationen zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die Folgendes umfassen können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt innerhalb der im Array gelisteten Shadow Roots existieren, werden ebenfalls zusätzlich zu denen im Light DOM in den Rückgabewert aufgenommen. Standardmäßig werden Hervorhebungen in Shadow Roots nicht zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult`-Objekten, die die benutzerdefinierten Hervorhebungen darstellen, die am durch die Parameter `x` und `y` angegebenen Punkt im Ansichtsfenster angewendet wurden.

Jedes `HighlightHitResult`-Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten, die die Bereiche darstellen, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Ansichtsfensters liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgabe benutzerdefinierter Hervorhebungen an der Position des Mauszeigers

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Textabsatz anwenden. Diese benutzerdefinierten Hervorhebungen können sich überlappen. Wenn der Benutzer auf den Absatz doppelklickt, verwenden wir die Methode `highlightsFromPoint()`, um den Inhalt der benutzerdefinierten Hervorhebungen an den Mauszeiger-Koordinaten des Doppelklicks zurückzugeben.

#### HTML

Das Markup umfasst ein {{htmlelement("p")}}-Element, das Text enthält, auf den benutzerdefinierte Hervorhebungen angewendet werden können, und ein {{htmlelement("section")}}-Element, in das wir die hervorgehobenen Textfragmente ausgeben.

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

Im CSS definieren wir das Styling für drei benutzerdefinierte Hervorhebungen mit den Namen `highlight1`, `highlight2` und `highlight3`. Wir selektieren jede benutzerdefinierte Hervorhebung, indem wir ihren Namen in das {{cssxref("::highlight()")}} Pseudo-Element übergeben und ihnen jeweils gelbe, rote und blaue Hintergrundfarben zuweisen.

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

Das Skript für dieses Beispiel hat zwei verschiedene Funktionsbereiche: Zuerst müssen wir benutzerdefinierte Hervorhebungen erstellen und auf unsere Inhalte anwenden, dann können wir die Methode `highlightsFromPoint()` verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Erstellen und Anwenden benutzerdefinierter Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, holen wir zuerst Verweise auf das `<p>` Element und dessen enthaltenen Textknoten. Dann erstellen wir eine Variable namens `highlightCount`, die zunächst auf `1` gesetzt ist und später zur Angabe der anzuwendenden benutzerdefinierten Hervorhebung verwendet wird.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis-Handler, der eine benutzerdefinierte Hervorhebung auf einen beliebigen ausgewählten Text anwendet, wenn die Taste <kbd>h</kbd> auf der Tastatur gedrückt wird. Im Inneren beginnen wir damit, den ausgewählten Text mit [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu erfassen und ihn mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) in einen [`Range`](/de/docs/Web/API/Range) zu konvertieren.

Wir überprüfen, ob der [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) und [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) des `selectedRange`-Objekts beide dem Absatz-`textNode` entsprechen, um sicherzustellen, dass wir keine kontenuerübergreifenden Hervorhebungen zulassen. Falls ja, setzen wir den benutzerdefinierten `highlightName`, den wir auf den `selectedRange` anwenden möchten, auf `highlight${highlightCount++}`. Da wir `highlightCount` erhöhen, fügen wir eine Überprüfung hinzu — wenn es `4` erreicht, setzen wir es wieder auf `1`. Dies bewirkt, dass die verfügbaren Hervorhebungen nacheinander durchlaufen werden, wenn sie gesetzt werden.

Abschließend für den `keydown` Ereignis-Handler erstellen wir ein neues `highlight` Objekt mit dem [`Highlight()`](/de/docs/Web/API/Highlight/Highlight) Konstruktor, dem wir den zuvor erstellten `selectedRange` übergeben. Dann wenden wir die im `highlightName` referenzierte benutzerdefinierte Hervorhebung mit der [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set) Methode auf `highlight` an.

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

Da wir nun in der Lage sind, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die `highlightsFromPoint()` Methode verwenden, um die angewendeten benutzerdefinierten Hervorhebungen an einem bestimmten Punkt zurückzugeben.

Wir holen einen Verweis auf unser `<section>` Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event) Ereignis-Handler-Funktion, um die hervorgehobenen Texte an der Mauszeigerposition auszugeben, wenn das Ereignis ausgelöst wird. Innerhalb des Handlers übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()` Aufruf, leeren den Inhalt des `<section>` Elements und durchlaufen dann jedes Highlight im `highlights` Array.

Für jedes `highlight` erfassen wir den ersten Bereich im [`ranges`](#ranges) Array (es gibt nur einen Bereich in jedem Highlight in diesem Fall), dann erhalten wir den genau hervorgehobenen String mittels [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen ihn in das `innerHTML` des `<section>` Elements innerhalb eines `<article>` Elements ein.

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
