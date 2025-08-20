---
title: Verwenden der EditContext-API
slug: Web/API/EditContext_API/Guide
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{DefaultAPISidebar("EditContext API")}}

Die **[EditContext-API](/de/docs/Web/API/EditContext_API)** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die erweiterte Texteingabemöglichkeiten unterstützen, wie z.B. {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Komposition, Emoji-Picker oder andere plattformspezifische UI-Oberflächen für die Bearbeitung.

Dieser Artikel zeigt die notwendigen Schritte zum Erstellen eines Texteditors mit der EditContext-API. In diesem Leitfaden überprüfen Sie die Hauptschritte, die beim Erstellen eines einfachen HTML-Code-Editors erforderlich sind, der die Syntax des Codes beim Tippen hervorhebt und die IME-Komposition unterstützt.

## Abschließender Code und Live-Demo

Um den abschließenden Code zu sehen, schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor) auf GitHub an. Es ist eine gute Idee, den Quellcode offen zu halten, während Sie lesen, da das Tutorial nur die wichtigsten Teile des Codes zeigt.

Der Quellcode ist in folgende Dateien gegliedert:

- [index.html](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/index.html) enthält das UI-Element des Editors und lädt den notwendigen CSS- und JavaScript-Code für die Demo.
- [styles.css](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/styles.css) enthält die Styles für das UI-Element des Editors.
- [editor.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/editor.js) enthält den JavaScript-Code, der die UI des Editors einrichtet, den HTML-Code rendert und Benutzereingaben verarbeitet.
- [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) enthält den JavaScript-Code, der den HTML-Code in separate Tokens aufteilt, wie z.B. öffnende Tags, schließende Tags und Textknoten.
- [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) enthält den JavaScript-Code, der zwischen den von der EditContext-API verwendeten Zeichenoffsets und den vom Browser für Textauswahlen verwendeten DOM-Knoten konvertiert.

Um die Live-Demo zu nutzen, öffnen Sie [Edit Context API: HTML-Editor-Demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) in einem Browser, der die EditContext-API unterstützt.

## Erstellen der Editor-Nutzeroberfläche

Der erste Schritt besteht darin, die Nutzeroberfläche für den Editor zu erstellen. Der Editor ist ein {{HTMLElement("div")}}-Element mit dem [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut, das auf `false` gesetzt ist, um die Rechtschreibprüfung zu deaktivieren:

```html
<div id="html-editor" spellcheck="false"></div>
```

Um das Editorelement zu gestalten, wird der folgende CSS-Code verwendet. Der Code lässt den Editor den gesamten Viewport ausfüllen und scrollt, wenn es zu viel Inhalt gibt, um hineinzupassen. Die {{cssxref("white-space")}}-Eigenschaft wird ebenfalls verwendet, um Leerraumzeichen im eingegebenen HTML-Text zu erhalten, und die {{cssxref("tab-size")}}-Eigenschaft wird verwendet, um Tabulatorzeichen als zwei Leerzeichen darzustellen. Schließlich werden einige Standardfarben für Hintergrund, Text und Kursor gesetzt:

```css
#html-editor {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow: auto;
  white-space: pre;
  tab-size: 2;
  caret-color: red;
  background: black;
  line-height: 1.6;
  color: red;
}
```

## Den Editor bearbeitbar machen

Um ein Element im Web bearbeitbar zu machen, verwenden Sie meistens ein {{HTMLElement("input")}}-Element, ein {{HTMLElement("textarea")}}-Element oder das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut.

Mit der EditContext-API können Sie jedoch auch andere Arten von Elementen bearbeitbar machen, ohne ein Attribut zu verwenden. Um die Liste der Elemente zu sehen, die mit der EditContext-API verwendet werden können, sehen Sie sich [Mögliche Elemente](/de/docs/Web/API/HTMLElement/editContext#possible_elements) auf der Eigenschaftsseite `editContext` des HTMLElements an.

Um den Editor bearbeitbar zu machen, erstellt die Demo-App eine Instanz von [`EditContext`](/de/docs/Web/API/EditContext), übergibt dem Konstruktor etwas initialen HTML-Text und setzt dann die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft des Editorelements auf die `EditContext`-Instanz:

```js
// Retrieve the editor element from the DOM.
const editorEl = document.getElementById("html-editor");

// Create the EditContext instance.
const editContext = new EditContext({
  text: "<html>\n  <body id=foo>\n    <h1 id='header'>Cool Title</h1>\n    <p class=\"wow\">hello<br/>How are you? test</p>\n  </body>\n</html>",
});

// Set the editor's editContext property value.
editorEl.editContext = editContext;
```

Diese Codezeilen machen das Editorelement fokussierbar. Das Eingeben von Text in das Element löst das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event)-Ereignis auf der `EditContext`-Instanz aus.

## Den Text und die Benutzerauswahl rendern

Um den syntaxhervorgehobenen HTML-Code im Editor zu rendern, wenn der Benutzer Text eingibt, verwendet die Demo-App eine Funktion namens `render()`, die aufgerufen wird, wenn neuer Text eingegeben wird, wenn Zeichen gelöscht werden oder wenn die Auswahl geändert wird.

### Den HTML-Code tokenisieren

Eines der ersten Dinge, die die `render()`-Funktion macht, ist das Tokenisieren des HTML-Textinhalts. Das Tokenisieren des HTML-Textinhalts ist erforderlich, um die HTML-Syntax hervorzuheben, und beinhaltet das Lesen der HTML-Code-Zeichenfolge und das Bestimmen, wo jedes öffnende Tag, schließende Tag, Attribut, Kommentar-Knoten und Text-Knoten beginnt und endet.

Die Demo-App verwendet die Funktion `tokenizeHTML()`, um dies zu erreichen, die die Zeichenfolge Zeichen für Zeichen durchläuft und dabei eine Zustandmaschine aufrechterhält. Den Quellcode für die Funktion `tokenizeHTML()` finden Sie in [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) auf GitHub.

Die Funktion wird in die HTML-Datei der Demo-App wie folgt importiert:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### Den Text rendern

Immer wenn die `render()`-Funktion aufgerufen wird, also wenn der Benutzer Text eingibt oder wenn sich die Auswahl ändert, entfernt die Funktion den Inhalt im Editorelement und rendert dann jedes Token als separates HTML-Element:

```js
// Stores the list of HTML tokens.
let currentTokens = [];

function render(text, selectionStart, selectionEnd) {
  // Empty the editor. We're re-rendering everything.
  editorEl.textContent = "";

  // Tokenize the text.
  currentTokens = tokenizeHTML(text);

  for (const token of currentTokens) {
    // Render each token as a span element.
    const span = document.createElement("span");
    span.classList.add(`token-${token.type}`);
    span.textContent = token.value;

    // Attach the span to the editor element.
    editorEl.appendChild(span);

    // Store the new DOM node as a property of the token
    // in the currentTokens array. We will need it again
    // later in fromOffsetsToRenderedTokenNodes.
    token.node = span;
  }

  // Code to render the text selection is omitted for brevity.
  // See "Rendering the selection", below.
  // …
}
```

Die EditContext-API gibt die Möglichkeit, die Art und Weise zu steuern, wie der bearbeitete Text gerendert wird. Die obige Funktion rendert ihn durch die Verwendung von HTML-Elementen, aber es könnte auch in jeder anderen Weise gerendert werden, einschließlich indem es in ein `<canvas>`-Element gerendert wird.

Die Demo-App führt die `render()`-Funktion bei Bedarf aus. Dies beinhaltet einmal, wenn die App startet, und dann erneut, wenn der Benutzer Text eingibt, indem sie auf das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event)-Ereignis hört:

```js
// Listen to the EditContext's textupdate event.
// This tells us when text input happens. We use it to re-render the view.
editContext.addEventListener("textupdate", (e) => {
  render(editContext.text, e.selectionStart, e.selectionEnd);
});

// Do the initial render.
render(editContext.text, editContext.selectionStart, editContext.selectionEnd);
```

### Die Tokens gestalten

Wie im vorherigen Codebeispiel zur `render()`-Funktion zu sehen, wird jedem Token ein Klassenname zugewiesen, der dem Typ des Tokens entspricht. Die Demo-App verwendet diesen Klassennamen, um die Tokens mit CSS wie unten gezeigt zu gestalten:

```css
.token-openTagStart,
.token-openTagEnd,
.token-closeTagStart,
.token-closeTagEnd,
.token-selfClose {
  background: rgb(7 53 92);
  margin: 0 2px;
  color: white;
  border-radius: 0.25rem;
}

.token-equal {
  color: white;
}

.token-tagName {
  font-weight: bold;
  color: rgb(117 186 242);
}

.token-attributeName {
  color: rgb(207 81 198);
}

.token-attributeValue {
  font-style: italic;
  color: rgb(127 230 127);
  border: 1px dashed #8c8c8c;
  border-width: 1px 0;
}

.token-quoteStart,
.token-quoteEnd {
  font-weight: bold;
  color: rgb(127 230 127);
  border: 1px solid #8c8c8c;
  border-width: 1px 0 1px 1px;
  border-radius: 0.25rem 0 0 0.25rem;
}

.token-quoteEnd {
  border-width: 1px 1px 1px 0;
  border-radius: 0 0.25rem 0.25rem 0;
}

.token-text {
  color: #6a6a6a;
  padding: 0 0.25rem;
}
```

### Die Auswahl rendern

Obwohl die Demo-App ein `<div>`-Element für den Editor verwendet, das bereits die Anzeige eines blinkenden Textcursors und das Hervorheben von Benutzerauswahlen unterstützt, erfordert die EditContext-API dennoch das Rendern der Auswahl. Dies liegt daran, dass die EditContext-API mit anderen Arten von Elementen verwendet werden kann, die diese Verhaltensweisen nicht unterstützen. Das Rendern der Auswahl selbst gibt uns außerdem mehr Kontrolle darüber, wie die Auswahl angezeigt wird. Schließlich wird aufgrund der Tatsache, dass die `render()`-Funktion den HTML-Inhalt des Editorelements jedes Mal löscht, wenn sie ausgeführt wird, jede Auswahl, die der Benutzer gemacht haben könnte, das nächste Mal, wenn die `render()`-Funktion ausgeführt wird, verloren.

Um die Auswahl zu rendern, verwendet die Demo-App die Methode [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) am Ende der `render()`-Funktion. Um die Methode `setBaseAndExtent()` zu verwenden, benötigen wir ein Paar von DOM-Knoten und Zeichenoffsets, die den Beginn und das Ende der Auswahl darstellen. Die EditContext-API speichert den Status für die aktuelle Auswahl jedoch nur als Paar von Start- und Endzeichenoffsets im gesamten Bearbeitungsspeicher. Der Demo-App-Code verwendet eine weitere Funktion namens `fromOffsetsToSelection()`, um diese Zeichenoffsets in vier Werte zu konvertieren:

- Der DOM-Knoten, der den Anfang der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Auswahlbeginns innerhalb des Anfängerknotens darstellt.
- Der DOM-Knoten, der das Ende der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Auswahlendes innerhalb des Endknotens darstellt.

```js
function render(text, selectionStart, selectionEnd) {
  // …
  // The beginning of the render function is omitted for brevity.

  // Convert the start/end offsets to a DOM selection.
  const { anchorNode, anchorOffset, extentNode, extentOffset } =
    fromOffsetsToSelection(selectionStart, selectionEnd, editorEl);

  // Render the selection in the editor element.
  document
    .getSelection()
    .setBaseAndExtent(anchorNode, anchorOffset, extentNode, extentOffset);
}
```

Den Code für die Funktion `fromOffsetsToSelection()` finden Sie in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js).

## Die Steuerungsgrenzen aktualisieren

Die EditContext-API bietet uns eine hohe Flexibilität, um unsere eigene Texteditor-Nutzeroberfläche zu definieren. Dies bedeutet jedoch auch, dass wir einige Dinge selbst handhaben müssen, die normalerweise vom Browser oder Betriebssystem (OS) gehandhabt werden.

Zum Beispiel müssen wir dem OS mitteilen, wo sich der bearbeitbare Textbereich auf der Seite befindet. Auf diese Weise kann das OS jede Texteingabe-Nutzeroberfläche, die der Benutzer zum Schreiben von Text verwendet, wie z.B. ein IME-Kompositionsfenster, korrekt positionieren.

Die Demo-App verwendet die Methode [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds), um ihr ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt zu übergeben, das die Grenzen des bearbeitbaren Textbereichs darstellt. Die Demo-App ruft diese Methode auf, wenn der Editor initialisiert wird, und erneut, wenn das Fenster in der Größe verändert wird:

```js
function updateControlBounds() {
  // Get the DOMRect object for the editor element.
  const editorBounds = editorEl.getBoundingClientRect();

  // Update the control bounds of the EditContext instance.
  editContext.updateControlBounds(editorBounds);
}

// Call the updateControlBounds function when the editor is initialized,
updateControlBounds();

// And call it again when the window is resized.
window.addEventListener("resize", updateControlBounds);
```

## Handhabung von Tabulator, Enter und anderen Tasten zur Textbearbeitung

Das im vorherigen Abschnitt verwendete `textupdate`-Ereignis wird nicht ausgelöst, wenn der Benutzer die Tasten <kbd>Tab</kbd> oder <kbd>Enter</kbd> drückt, daher müssen wir diese Tasten separat behandeln.

Um sie zu handhaben, verwendet die Demo-App einen Ereignislistener für das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf dem Editorelement und verwendet diesen Listener, um den Textinhalt und die Auswahl der `EditContext`-Instanz zu aktualisieren, wie unten gezeigt:

```js
// Handle key presses that are not already handled by the EditContext.
editorEl.addEventListener("keydown", (e) => {
  // EditContext.updateText() expects the start and end offsets
  // to be in the correct order, but the current selection state
  // might be backwards.
  const start = Math.min(editContext.selectionStart, editContext.selectionEnd);
  const end = Math.max(editContext.selectionStart, editContext.selectionEnd);

  // Handling the Tab key.
  if (e.key === "Tab") {
    // Prevent the default behavior of the Tab key.
    e.preventDefault();

    // Use the EditContext.updateText method to insert a tab character
    // at the current selection position.
    editContext.updateText(start, end, "\t");

    // Update the selection to be after the inserted tab character.
    updateSelection(start + 1, start + 1);

    // Re-render the editor.
    render(
      editContext.text,
      editContext.selectionStart,
      editContext.selectionEnd,
    );
  }

  // Handling the Enter key.
  if (e.key === "Enter") {
    // Use the EditContext.updateText method to insert a newline character
    // at the current selection position.
    editContext.updateText(start, end, "\n");

    // Update the selection to be after the inserted newline character.
    updateSelection(start + 1, start + 1);

    // Re-render the editor.
    render(
      editContext.text,
      editContext.selectionStart,
      editContext.selectionEnd,
    );
  }
});
```

Der obige Code ruft auch die Funktion `updateSelection()` auf, um die Auswahl zu aktualisieren, nachdem der Textinhalt aktualisiert wurde. Siehe [Aktualisieren des Auswahlstatus und der Auswahlgrenzen](#aktualisieren_des_auswahlstatus_und_der_auswahlgrenzen) weiter unten für mehr Informationen.

Wir könnten den Code verbessern, indem wir andere Tastenkombinationen wie <kbd>Strg</kbd>+<kbd>C</kbd> und <kbd>Strg</kbd>+<kbd>V</kbd> zum Kopieren und Einfügen von Text oder <kbd>Strg</kbd>+<kbd>Z</kbd> und <kbd>Strg</kbd>+<kbd>Y</kbd> zum Rückgängigmachen und Wiederherstellen von Textänderungen behandeln.

## Aktualisieren des Auswahlstatus und der Auswahlgrenzen

Wie wir bereits gesehen haben, kümmert sich die `render()`-Funktion um das Rendern der aktuellen Benutzerauswahl im Editorelement. Aber die Demo-App muss den Auswahlstatus und die Grenzen auch _aktualisieren_, wenn der Benutzer die Auswahl ändert. Die EditContext-API macht dies nicht automatisch, da die Editor-Nutzeroberfläche möglicherweise auf andere Weise implementiert ist, z.B. durch die Verwendung eines `<canvas>`-Elements.

Um zu wissen, wann der Benutzer die Auswahl ändert, verwendet die Demo-App das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)-Ereignis und die [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)-Methode, die ein [`Selection`](/de/docs/Web/API/Selection)-Objekt bereitstellt, das uns mitteilt, wo sich die Auswahl des Benutzers befindet. Mithilfe dieser Informationen aktualisiert die Demo-App den Auswahlstatus und die Auswahlgrenzen der EditContext-API, indem sie die Methoden [`EditContext.updateSelection()`](/de/docs/Web/API/EditContext/updateSelection) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds) verwendet. Dies wird vom OS genutzt, um das IME-Kompositionsfenster korrekt zu positionieren.

Da die EditContext-API jedoch Zeichenoffsets verwendet, um die Auswahl darzustellen, verwendet die Demo-App auch eine Funktion `fromSelectionToOffsets()`, die DOM-Auswahlobjekte in Zeichenoffsets konvertiert.

```js
// Listen to selectionchange events to let the
// EditContext know where it is.
document.addEventListener("selectionchange", () => {
  const selection = document.getSelection();

  // Convert the DOM selection into character offsets.
  const offsets = fromSelectionToOffsets(selection, editorEl);
  if (offsets) {
    updateSelection(offsets.start, offsets.end);
  }
});

// Update the selection and selection bounds in the EditContext object.
// This helps the OS position the IME composition window correctly.
function updateSelection(start, end) {
  editContext.updateSelection(start, end);
  // Get the bounds of the selection.
  editContext.updateSelectionBounds(
    document.getSelection().getRangeAt(0).getBoundingClientRect(),
  );
}
```

Den Code für die Funktion `fromSelectionToOffsets()` finden Sie in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js).

## Berechnen der Zeichenbegrenzungen

Zusätzlich zur Verwendung der Methoden [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds), um dem OS bei der Positionierung einer Texteingabe-Nutzeroberfläche zu helfen, die der Benutzer möglicherweise verwendet, benötigt das OS noch eine weitere Information: die Position und Größe bestimmter Zeichen innerhalb des Editorelements.

Um dies zu tun, hört die Demo-App auf das [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event)-Ereignis, verwendet es, um die Begrenzungen einiger der Zeichen im Editorelement zu berechnen und verwendet dann die Methode [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds), um die Zeichenbegrenzungen zu aktualisieren.

Wie vorher gesehen, kennt die EditContext-API nur Zeichenoffsets, was bedeutet, dass das `characterboundsupdate`-Ereignis die Start- und Endoffsets für die Zeichen bereitstellt, für die es Begrenzungen benötigt. Die Demo-App verwendet eine weitere Funktion, `fromOffsetsToRenderedTokenNodes()`, um die DOM-Elemente zu finden, in denen diese Zeichen gerendert wurden, und verwendet diese Informationen, um die erforderlichen Begrenzungen zu berechnen.

```js
// Listen to the characterboundsupdate event to know when character bounds
// information is needed, and which characters need bounds.
editContext.addEventListener("characterboundsupdate", (e) => {
  // Retrieve information about the token nodes in the range.
  const tokenNodes = fromOffsetsToRenderedTokenNodes(
    currentTokens,
    e.rangeStart,
    e.rangeEnd,
  );

  // Convert this information into a list of DOMRect objects.
  const charBounds = tokenNodes.map(({ node, nodeOffset, charOffset }) => {
    const range = document.createRange();
    range.setStart(node.firstChild, charOffset - nodeOffset);
    range.setEnd(node.firstChild, charOffset - nodeOffset + 1);
    return range.getBoundingClientRect();
  });

  // Let the EditContext instance know about the character bounds.
  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

Den Code für die Funktion `fromOffsetsToRenderedTokenNodes()` finden Sie in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js).

## Anwenden von Textformaten für die IME-Komposition

Die Demo-App durchläuft einen letzten Schritt, um die IME-Komposition vollständig zu unterstützen. Wenn der Benutzer Text mit einem IME komponiert, kann das IME entscheiden, dass bestimmte Teile des komponierten Textes anders formatiert werden sollen, um den Kompositionsstatus anzuzeigen. Zum Beispiel könnte das IME entscheiden, den Text zu unterstreichen.

Da es die Verantwortung der Demo-App ist, den Inhalt im bearbeitbaren Textbereich darzustellen, ist es auch ihre Verantwortung, die notwendige IME-Formatierung anzuwenden. Die Demo-App erreicht dies, indem sie das Ereignis [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event) anhört, um zu wissen, wann das IME Textformate anwenden möchte, wo und welche Formate angewendet werden sollen.

Wie im folgenden Code-Ausschnitt gezeigt, verwendet die Demo-App das `textformatupdate`-Ereignis und erneut die Funktion `fromOffsetsToSelection()`, um den Textbereich zu finden, den die IME-Komposition formatieren möchte:

```js
editContext.addEventListener("textformatupdate", (e) => {
  // Get the list of formats that the IME wants to apply.
  const formats = e.getTextFormats();

  for (const format of formats) {
    // Find the DOM selection that corresponds to the format's range.
    const selection = fromOffsetsToSelection(
      format.rangeStart,
      format.rangeEnd,
      editorEl,
    );

    // Highlight the selection with the right style and thickness.
    addHighlight(selection, format.underlineStyle, format.underlineThickness);
  }
});
```

Dieser oben erwähnte Ereignishandler ruft die Funktion `addHighlight()` auf, um den Text zu formatieren. Diese Funktion verwendet die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API), um die Textformate darzustellen. Die CSS Custom Highlight API bietet einen Mechanismus zum Stilen von willkürlichen Textbereichen, indem JavaScript verwendet wird, um die Bereiche zu erstellen, und CSS, um sie zu gestalten. Um diese API zu verwenden, wird das {{cssxref("::highlight", "::highlight()")}}-Pseudoelement verwendet, um die Hervorhebungsstile zu definieren:

```css
::highlight(ime-solid-thin) {
  text-decoration: underline 1px;
}

::highlight(ime-solid-thick) {
  text-decoration: underline 2px;
}

::highlight(ime-dotted-thin) {
  text-decoration: underline dotted 1px;
}

::highlight(ime-dotted-thick) {
  text-decoration: underline dotted 2px;
}

/* Other highlights are omitted for brevity. */
```

[`Highlight`](/de/docs/Web/API/Highlight)-Instanzen werden ebenfalls erstellt, in einem Objekt gespeichert und im [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) mithilfe der [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)-Eigenschaft registriert:

```js
// Instances of CSS custom Highlight objects, used to render
// the IME composition text formats.
const imeHighlights = {
  "solid-thin": null,
  "solid-thick": null,
  "dotted-thin": null,
  "dotted-thick": null,
  "dashed-thin": null,
  "dashed-thick": null,
  "wavy-thin": null,
  "wavy-thick": null,
  "squiggle-thin": null,
  "squiggle-thick": null,
};
for (const [key, value] of Object.entries(imeHighlights)) {
  imeHighlights[key] = new Highlight();
  CSS.highlights.set(`ime-${key}`, imeHighlights[key]);
}
```

Mit diesen Grundlagen verwendet die Funktion `addHighlight()` [`Range`](/de/docs/Web/API/Range)-Objekte für die Bereiche, die gestaltet werden müssen, und fügt sie dem `Highlight`-Objekt hinzu:

```js
function addHighlight(selection, underlineStyle, underlineThickness) {
  // Get the right CSS custom Highlight object depending on the
  // underline style and thickness.
  const highlight =
    imeHighlights[
      `${underlineStyle.toLowerCase()}-${underlineThickness.toLowerCase()}`
    ];

  if (highlight) {
    // Add a range to the Highlight object.
    const range = document.createRange();
    range.setStart(selection.anchorNode, selection.anchorOffset);
    range.setEnd(selection.extentNode, selection.extentOffset);
    highlight.add(range);
  }
}
```

## Zusammenfassung

Dieser Artikel zeigte Ihnen, wie Sie die EditContext-API verwenden können, um einen einfachen HTML-Code-Editor zu erstellen, der die IME-Komposition und die Syntaxhervorhebung unterstützt.

Den endgültigen Code und die Live-Demo finden Sie auf GitHub: [Live-Demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) und [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor).

Wichtiger ist, dass dieser Artikel Ihnen zeigte, dass die EditContext-API viel Flexibilität in Bezug auf die Benutzeroberfläche Ihres Editors bietet. Basierend auf dieser Demo könnten Sie einen ähnlichen Texteditor erstellen, der ein `<canvas>`-Element verwendet, um den syntaxhervorgehobenen HTML-Code anstelle des `<div>`, das die Demo verwendet, zu rendern. Sie könnten auch ändern, wie jedes Token gerendert wird oder wie die Auswahl gerendert wird.

## Siehe auch

- [EditContext API](/de/docs/Web/API/EditContext_API)
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
