---
title: "HighlightRegistry: highlightsFromPoint() Methode"
short-title: highlightsFromPoint()
slug: Web/API/HighlightRegistry/highlightsFromPoint
l10n:
  sourceCommit: 7609247efad08c302a7d375786db3c8339f003bd
---

{{APIRef("CSS Custom Highlight API")}}

Die **`highlightsFromPoint()`** Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle gibt ein Array von Objekten zurück, die die benutzerdefinierten Highlights darstellen, die an einem bestimmten Punkt innerhalb des Viewports angewendet werden.

## Syntax

```js-nolint
highlightsFromPoint(x, y)
highlightsFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die x-Koordinate des Punktes innerhalb des Viewports, von dem aus Informationen zu benutzerdefinierten Highlights zurückgegeben werden sollen.
- `y`
  - : Die y-Koordinate des Punktes innerhalb des Viewports, von dem aus Informationen zu benutzerdefinierten Highlights zurückgegeben werden sollen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die Folgendes umfassen können:
    - `shadowRoots`
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Benutzerdefinierte Highlights, die an dem angegebenen Punkt innerhalb der im Array enthaltenen Shadow Roots existieren, werden ebenfalls in den Rückgabewert einbezogen, zusätzlich zu denen im Light DOM. Standardmäßig werden keine Highlights innerhalb von Shadow Roots zurückgegeben.

### Rückgabewert

Ein Array von `HighlightHitResult`-Objekten, die die benutzerdefinierten Highlights darstellen, die am im `x` und `y`-Parameter angegebenen Punkt im Viewport angewendet werden.

Jedes `HighlightHitResult`-Objekt enthält die folgenden Eigenschaften:

- `highlight`
  - : Ein [`Highlight`](/de/docs/Web/API/Highlight)-Objekt, das das angewendete benutzerdefinierte Highlight darstellt.
- `ranges`
  - : Ein Array von [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekten, die die Bereiche darstellen, auf die das benutzerdefinierte Highlight angewendet wird.

Wenn an dem angegebenen Punkt keine benutzerdefinierten Highlights angewendet werden oder der angegebene Punkt außerhalb des Viewports liegt, gibt die Methode ein leeres Array zurück.

## Beispiele

### Ausgabe der benutzerdefinierten Highlights an der Position des Mauszeigers

In diesem Beispiel können Sie benutzerdefinierte Highlights auf einen Absatz Text anwenden. Diese benutzerdefinierten Highlights können sich überlappen. Wenn der Benutzer den Absatz doppelt anklickt, verwenden wir die `highlightsFromPoint()`-Methode, um den Inhalt aller benutzerdefinierten Highlights zurückzugeben, die sich an den Mauszeigerkoordinaten des Doppelklicks befinden.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element, das Text enthält, auf den Sie benutzerdefinierte Highlights anwenden können, und ein {{htmlelement("section")}}-Element, in das wir die hervorgehobenen Textfragmente ausgeben werden.

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

Im CSS definieren wir das Styling für drei benutzerdefinierte Highlights mit den Namen `highlight1`, `highlight2` und `highlight3`. Wir wählen jedes benutzerdefinierte Highlight aus, indem wir seinen Namen in das {{cssxref("::highlight()")}}-Pseudo-Element übergeben und ihnen jeweils gelbe, rote und blaue Hintergrundfarben zuweisen.

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

Das Skript für dieses Beispiel hat zwei verschiedene Funktionsbereiche: Zuerst müssen wir benutzerdefinierte Highlights erstellen und auf unseren Inhalt anwenden, dann können wir die `highlightsFromPoint()`-Methode verwenden, um benutzerdefinierte Highlights von einem bestimmten Punkt zurückzugeben.

##### Erstellen und Anwenden von benutzerdefinierten Highlights

Um benutzerdefinierte Highlights zu erstellen, fangen wir an, Referenzen auf das `<p>`-Element und seinen enthaltenen Textknoten zu erfassen. Wir erstellen dann eine Variable namens `highlightCount`, die anfänglich auf `1` gesetzt ist und verwendet wird, um später anzugeben, welches benutzerdefinierte Highlight angewendet werden soll.

```js live-sample___highlights-from-point-example
const pElem = document.querySelector(".highlightable-text");
const textNode = pElem.firstChild;
let highlightCount = 1;
```

Als nächstes definieren wir einen [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignishandler, der ein benutzerdefiniertes Highlight auf jeden ausgewählten Text anwendet, wenn <kbd>h</kbd> auf der Tastatur gedrückt wird. Im Inneren beginnen wir, den ausgewählten Text mithilfe von [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) zu erfassen und in eine [`Range`](/de/docs/Web/API/Range) mithilfe von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) zu konvertieren.

Wir prüfen, ob die [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) und [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) des `selectedRange`-Objekts beide gleich dem Absatz-`textNode` sind, um sicherzustellen, dass keine bereichsübergreifenden Highlights erlaubt sind. Falls ja, setzen wir den benutzerdefinierten `highlightName`, den wir auf den `selectedRange` anwenden möchten, auf `highlight${highlightCount++}`. Da wir `highlightCount` inkrementieren, fügen wir eine Überprüfung hinzu — wenn er `4` erreicht, setzen wir ihn wieder auf `1`. Dies hat den Effekt, die verfügbaren Highlights nacheinander in der Reihenfolge anzuwenden, in der sie gesetzt werden.

Schließlich erstellen wir für den `keydown`-Ereignishandler ein neues `highlight`-Objekt mithilfe des [`Highlight()`](/de/docs/Web/API/Highlight/Highlight)-Konstruktors und übergeben ihm das früher erstellte `selectedRange`. Wir wenden dann das ausgewählte benutzerdefinierte Highlight, das in `highlightName` referenziert wird, auf `highlight` unter Verwendung der [`HighlightRegistry.set()`](/de/docs/Web/API/HighlightRegistry/set)-Methode an.

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

##### Zurückgeben von benutzerdefinierten Highlights von einem Punkt

Jetzt, da wir die Fähigkeit haben, benutzerdefinierte Highlights zu erstellen und anzuwenden, können wir die `highlightsFromPoint()`-Methode verwenden, um die benutzerdefinierten Highlights zurückzugeben, die an einem bestimmten Punkt angewendet werden.

Wir erfassen eine Referenz auf unser `<section>`-Element und definieren dann eine [`dblclick`](/de/docs/Web/API/Element/dblclick_event) Ereignishandlerfunktion, um den hervorgehobenen Text an der Mauszeigerposition auszugeben, wenn das Ereignis ausgelöst wird. Im Inneren des Handlers übergeben wir die aktuellen Mauskoordinaten in einen `highlightsFromPoint()`-Aufruf, leeren den Inhalt des `<section>`-Elements und durchlaufen dann jedes Highlight im `highlights`-Array.

Für jedes `highlight` erfassen wir den ersten Bereich im [`ranges`](#ranges)-Array (es gibt in diesem Fall immer nur einen Bereich in jedem Highlight), dann erhalten wir den genau hervorgehobenen String mithilfe von [`Range.toString()`](/de/docs/Web/API/Range/toString) und fügen ihn in das `innerHTML` des `<section>`-Elements ein, innerhalb eines `<article>`-Elements.

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
- [CSS custom highlight API](/de/docs/Web/CSS/Guides/Custom_highlight_API) Modul
