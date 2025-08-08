---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("CSS Custom Highlight API")}}{{SeeCompatTable}}

Die **`highlightsFromPoint()`**-Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle gibt ein Array von Objekten zurück, die die benutzerdefinierten Hervorhebungen darstellen, die an einem bestimmten Punkt innerhalb des Viewports angewendet werden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punktes innerhalb des Viewports, von dem aus die Informationen zu benutzerdefinierten Hervorhebungen zurückgegeben werden.
- `y`
  - : Die y-Koordinate des Punktes innerhalb des Viewports, von dem aus die Informationen zu benutzerdefinierten Hervorhebungen zurückgegeben werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, welche folgendes beinhalten können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Benutzerdefinierte Hervorhebungen, die an dem angegebenen Punkt in Schatten-Roots existieren, die sich im Array befinden, werden ebenfalls in den Rückgabewert aufgenommen, zusätzlich zu denen, die im Licht-DOM vorhanden sind. Standardmäßig werden Hervorhebungen innerhalb von Schatten-Roots nicht zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult`-Objekten, die die benutzerdefinierten Hervorhebungen darstellen, die an dem durch die Parameter `x` und `y` im Viewport angegebenen Punkt angewendet werden.

Jedes `HighlightHitResult`-Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt, das die angewendete benutzerdefinierte Hervorhebung darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten, das die Bereiche darstellt, auf die die benutzerdefinierte Hervorhebung angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Hervorhebungen angewendet werden oder der angegebene Punkt außerhalb des Viewports liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgabe benutzerdefinierter Hervorhebungen an der Position des Mauszeigers

In diesem Beispiel können Sie benutzerdefinierte Hervorhebungen auf einen Absatz Text anwenden. Diese benutzerdefinierten Hervorhebungen können sich überlappen. Wenn der Benutzer den Absatz doppelklickt, verwenden wir die Methode `highlightsFromPoint()`, um den Inhalt aller benutzerdefinierten Hervorhebungen zurückzugeben, die sich an den Mauszeigerkoordinaten des Doppelklicks befinden.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element, das Text enthält, auf den Sie benutzerdefinierte Hervorhebungen anwenden können, sowie ein {{htmlelement("section")}}-Element, in das wir die hervorgehobenen Textfragmente ausgeben werden.

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

Im CSS definieren wir das Styling für drei benutzerdefinierte Hervorhebungen, die `highlight1`, `highlight2` und `highlight3` genannt werden. Wir wählen jede benutzerdefinierte Hervorhebung aus, indem wir ihren Namen in das {{cssxref("::highlight()")}} Pseudoelement einfügen und ihnen jeweils gelbe, rote und blaue Hintergrundfarben zuweisen.

```css hidden live-sample___highlights-from-point-example
* {
  box-sizing: border-box;
}

body {
  background-color: white;
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

Das Skript für dieses Beispiel hat zwei unterschiedliche Funktionsbereiche: Zuerst müssen wir benutzerdefinierte Hervorhebungen erstellen und auf unsere Inhalte anwenden, dann können wir die Methode `highlightsFromPoint()` verwenden, um benutzerdefinierte Hervorhebungen von einem bestimmten Punkt zurückzugeben.

##### Erstellen und Anwenden benutzerdefinierter Hervorhebungen

Um benutzerdefinierte Hervorhebungen zu erstellen, beginnen wir damit, Referenzen auf das `<p>`-Element und dessen enthaltenen Textknoten zu erhalten. Dann erstellen wir eine Variable namens `highlightCount`, die initial auf `1` gesetzt wird und später verwendet wird, um festzulegen, welche benutzerdefinierte Hervorhebung angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler, der eine benutzerdefinierte Hervorhebung auf beliebigen ausgewählten Text anwendet, wenn die Taste <kbd>h</kbd> auf der Tastatur gedrückt wird. Innen beginnen wir damit, den ausgewählten Text mithilfe von [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu erfassen und ihn mithilfe von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) in ein [`Range`](/de/docs/Web/API/Range) umzuwandeln.

Wir überprüfen, dass sowohl das [`startContainer`](/de/docs/Web/API/Range/startContainer) als auch das [`endContainer`](/de/docs/Web/API/Range/endContainer) des `selectedRange`-Objekts dem `textNode` des Absatzes entsprechen, um sicherzustellen, dass wir keine bereichsübergreifenden Hervorhebungen zulassen. Wenn dies der Fall ist, setzen wir den benutzerdefinierten `highlightName`, den wir auf das `selectedRange` anwenden möchten, mithilfe von `highlight${highlightCount++}`. Da wir `highlightCount` erhöhen, fügen wir eine Überprüfung hinzu – wenn es `4` erreicht, setzen wir es wieder auf `1`. Dies hat den Effekt, dass die verfügbaren Hervorhebungen in der genannten Reihenfolge durchlaufen werden, während sie festgelegt werden.

Schließlich erstellen wir im `keydown`-Ereignishandler ein neues `highlight`-Objekt mithilfe des [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)-Konstruktors, in den wir das zuvor erstellte `selectedRange` übergeben. Dann wenden wir die gewählte benutzerdefinierte Hervorhebung, die in `highlightName` referenziert wird, auf `highlight` mittels der [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set)-Methode an.

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

Nun, da wir die Möglichkeit haben, benutzerdefinierte Hervorhebungen zu erstellen und anzuwenden, können wir die `highlightsFromPoint()`-Methode verwenden, um die benutzerdefinierten Hervorhebungen an einem bestimmten Punkt zurückzugeben.

Wir holen eine Referenz auf unser `<section>`-Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event)-Ereignishandlerfunktion, um den hervorgehobenen Text an der Position des Mauszeigers auszugeben, wenn das Ereignis ausgelöst wird. Innerhalb des Handlers übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()`-Aufruf, leeren den Inhalt des `<section>`-Elements und durchlaufen dann jedes Highlight im `highlights`-Array.

Für jedes `highlight` erfassen wir den ersten Bereich im [`ranges`](#ranges)-Array (es gibt in diesem Fall immer nur einen Bereich in jedem Highlight), dann erhalten wir den genauen hervorgehobenen String mit [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen ihn dem `innerHTML` des `<section>`-Elements innerhalb eines `<article>`-Elements hinzu.

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
