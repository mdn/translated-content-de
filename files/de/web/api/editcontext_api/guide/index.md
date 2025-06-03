---
title: Verwendung der EditContext API
slug: Web/API/EditContext_API/Guide
l10n:
  sourceCommit: 11906b6f8b1f8fd153832851431089eecb46c261
---

{{DefaultAPISidebar("EditContext API")}}

Die **[EditContext API](/de/docs/Web/API/EditContext_API)** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die erweiterte Texterfahrungen unterstützen, wie z.B. {{Glossary("Input_Method_Editor", "Input-Methoden-Editor")}} (IME) Zusammensetzung, Emoji-Auswahl oder andere plattform-spezifische Bearbeitungsbezogene UI-Oberflächen.

Dieser Artikel erläutert die notwendigen Schritte, um einen Texteditor mit der EditContext API zu erstellen. In diesem Leitfaden werden Sie die Hauptschritte überprüfen, die beim Erstellen eines einfachen HTML-Codeeditors erforderlich sind, der die Syntax des Codes beim Tippen hervorhebt und der die IME-Zusammensetzung unterstützt.

## Endgültiger Code und Live-Demo

Um den endgültigen Code zu sehen, schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor) auf GitHub an. Es ist eine gute Idee, den Quellcode beim Lesen offen zu halten, da das Tutorial nur die wichtigsten Teile des Codes zeigt.

Der Quellcode ist in folgende Dateien organisiert:

- [index.html](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/index.html) enthält das Editor-UI-Element und lädt den notwendigen CSS- und JavaScript-Code für die Demo.
- [styles.css](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/styles.css) enthält die Stile für das Editor-UI.
- [editor.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/editor.js) enthält den JavaScript-Code, der das Editor-UI einrichtet, den HTML-Code rendert und Benutzereingaben verarbeitet.
- [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) enthält den JavaScript-Code, der den HTML-Code in separate Tokens aufteilt, wie Öffnungstags, Schließungs-Tags und Textknoten.
- [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) enthält den JavaScript-Code, der zwischen den Zeichenoffsets, die die EditContext API verwendet, und den DOM-Knoten, die der Browser für Textauswahlen verwendet, konvertiert.

Um die Live-Demo zu nutzen, öffnen Sie [Edit Context API: HTML-Editor-Demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) in einem Browser, der die EditContext API unterstützt.

## Erstellen der Editor-Benutzeroberfläche

Der erste Schritt ist das Erstellen der Benutzeroberfläche für den Editor. Der Editor ist ein {{HTMLElement("div")}}-Element mit dem [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut, das auf `false` gesetzt ist, um die Rechtschreibprüfung zu deaktivieren:

```html
<div id="html-editor" spellcheck="false"></div>
```

Um das Editor-Element zu stylen, wird der folgende CSS-Code verwendet. Der Code macht, dass der Editor den gesamten Ansichtsbereich ausfüllt und scrollt, wenn zu viel Inhalt vorhanden ist, um zu passen. Die {{cssxref("white-space")}}-Eigenschaft wird ebenfalls verwendet, um Leerzeichenzeichen zu erhalten, die im HTML-Eingabetext gefunden wurden, und die {{cssxref("tab-size")}}-Eigenschaft wird verwendet, um Tabulator-Zeichen als zwei Leerzeichen zu rendern. Schließlich werden einige Standardhintergrund-, Text- und Cursorfarben festgelegt:

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
  background: #000;
  line-height: 1.6;
  color: red;
}
```

## Den Editor bearbeitbar machen

Um ein Element im Web bearbeitbar zu machen, verwenden Sie meistens ein {{HTMLElement("input")}}-Element, ein {{HTMLElement("textarea")}}-Element oder das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut.

Mit der EditContext API können Sie jedoch andere Arten von Elementen ohne Verwendung eines Attributs bearbeitbar machen. Um die Liste der Elemente zu sehen, die mit der EditContext API verwendet werden können, sehen Sie [Mögliche Elemente](/de/docs/Web/API/HTMLElement/editContext#possible_elements) auf der `editContext`-Eigenschaftsseite des HTMLElement.

Um den Editor bearbeitbar zu machen, erstellt die Demo-App eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz, übergibt dem Konstruktor einigen anfänglichen HTML-Text und setzt dann die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft des Editor-Elements auf die `EditContext`-Instanz:

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

Diese Codezeilen machen das Editor-Element fokussierbar. Das Eingeben von Text im Element löst das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event)-Ereignis auf der `EditContext`-Instanz aus.

## Rendering des Textes und der Benutzerauswahl

Um den syntaxhervorgehobenen HTML-Code im Editor zu rendern, wenn der Benutzer Text eingibt, verwendet die Demo-App eine Funktion namens `render()`, die aufgerufen wird, wenn neuer Text eingegeben wird, Zeichen gelöscht werden oder wenn die Auswahl geändert wird.

### Tokenisieren des HTML-Codes

Eines der ersten Dinge, die die `render()`-Funktion tut, ist das Tokenisieren des HTML-Textinhalts. Das Tokenisieren des HTML-Textinhalts ist notwendig, um die HTML-Syntax hervorzuheben, und beinhaltet das Lesen der HTML-Code-Zeichenfolge und das Bestimmen, wo jedes Öffnungstag, Schließungs-Tag, Attribut, Kommentar-Knoten und Textknoten beginnt und endet.

Die Demo-App verwendet die `tokenizeHTML()`-Funktion, um dies zu erreichen, die Zeichen für Zeichen über die Zeichenfolge iteriert, während sie einen Zustandsautomaten aufrechterhält. Sie können den Quellcode für die `tokenizeHTML()`-Funktion in [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) auf GitHub sehen.

Die Funktion wird wie folgt in die Demo-App HTML-Datei importiert:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### Rendering des Textes

Jedes Mal, wenn die `render()`-Funktion aufgerufen wird, was bei der Eingabe von Text oder bei Änderungen der Auswahl der Fall ist, entfernt die Funktion den Inhalt im Editor-Element und rendert dann jedes Token als separates HTML-Element:

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

Die EditContext API ermöglicht die Kontrolle darüber, wie der bearbeitete Text gerendert wird. Die obige Funktion rendert diesen durch die Verwendung von HTML-Elementen, könnte ihn aber auch auf andere Weise rendern, einschließlich des Renders in ein `<canvas>`-Element.

Die Demo-App führt die `render()`-Funktion bei Bedarf aus. Dazu gehört einmal beim Start der App und dann erneut, wenn der Benutzer Text eingibt, indem auf das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event)-Ereignis gehört wird:

```js
// Listen to the EditContext's textupdate event.
// This tells us when text input happens. We use it to re-render the view.
editContext.addEventListener("textupdate", (e) => {
  render(editContext.text, e.selectionStart, e.selectionEnd);
});

// Do the initial render.
render(editContext.text, editContext.selectionStart, editContext.selectionEnd);
```

### Styling der Tokens

Wie im vorherigen Codebeispiel der `render()`-Funktion gezeigt, wird jedem Token ein Klassenname zugewiesen, der dem Token-Typ entspricht, den es darstellt. Die Demo-App nutzt diesen Klassennamen, um die Tokens mit CSS zu stylen, wie unten gezeigt:

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
  border-width: 1px 0 1px 0;
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

### Rendering der Auswahl

Obwohl die Demo-App ein `<div>`-Element für den Editor verwendet, welches bereits das Anzeigen eines blinkenden Textcursors und das Hervorheben von Benutzerauswahlen unterstützt, erfordert die EditContext API dennoch das Rendering der Auswahl. Dies liegt daran, dass die EditContext API auch mit anderen Arten von Elementen verwendet werden kann, die diese Fähigkeiten nicht unterstützen. Das eigene Rendering der Auswahl gibt uns auch mehr Kontrolle darüber, wie die Auswahl angezeigt wird. Schließlich wird durch das Löschen des HTML-Inhalts des Editor-Elements bei jedem Lauf der `render()`-Funktion jede Auswahl, die der Benutzer möglicherweise getroffen hat, bei jedem erneuten Ausführen der `render()`-Funktion verloren.

Um die Auswahl zu rendern, verwendet die Demo-App die [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)-Methode am Ende der `render()`-Funktion. Um die `setBaseAndExtent()`-Methode zu verwenden, benötigen wir ein Paar von DOM-Knoten und Zeichenoffsets, die den Beginn und das Ende der Auswahl darstellen. Da jedoch die EditContext API den Status der aktuellen Auswahl nur als ein Paar von Start- und Endzeichenoffsets in den gesamten Editierpuffer speichert, verwendet der Code der Demo-App eine andere Funktion, `fromOffsetsToSelection()`, die diese Zeichenoffsets in vier Werte umwandelt:

- Der DOM-Knoten, der den Start der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Startes der Auswahl innerhalb des Startknotens darstellt.
- Der DOM-Knoten, der das Ende der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Endes der Auswahl innerhalb des Endknotens darstellt.

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

Den Code für die Funktion `fromOffsetsToSelection()` finden Sie in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js)-Datei.

## Aktualisieren der Steuerelement-Grenzen

Die EditContext API gibt uns viel Flexibilität, um unsere eigene Texteditor-Benutzeroberfläche zu definieren. Dies bedeutet jedoch auch, dass wir einige Dinge selbst handhaben müssen, die normalerweise vom Browser oder Betriebssystem (OS) gehandhabt werden.

Zum Beispiel müssen wir dem Betriebssystem mitteilen, wo sich der bearbeitbare Textbereich auf der Seite befindet. Auf diese Weise kann das Betriebssystem jede textbearbeitende Oberfläche, mit der der Benutzer Text komponiert, richtig positionieren, wie z.B. ein IME-Kompositionsfenster.

Die Demo-App verwendet die [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds)-Methode, wobei sie ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt bereitstellt, das die Grenzen des bearbeitbaren Textbereichs darstellt. Die Demo-App ruft diese Methode auf, wenn der Editor initialisiert wird, und erneut, wenn das Fenster skaliert wird:

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

## Umgang mit Tab, Enter und anderen Texteingabetasten

Das im vorherigen Abschnitt verwendete `textupdate`-Ereignis wird nicht ausgelöst, wenn der Benutzer die <kbd>Tab</kbd>- oder <kbd>Enter</kbd>-Tasten drückt, daher müssen wir diese Tasten separat behandeln.

Um sie zu handhaben, verwendet die Demo-App einen Ereignis-Listener für das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf dem Editor-Element und nutzt diesen Listener, um den Textinhalt und die Auswahl der `EditContext`-Instanz zu aktualisieren, wie unten gezeigt:

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

Der oben angezeigte Code ruft auch die `updateSelection()`-Funktion auf, um die Auswahl nach der Aktualisierung des Textinhalts zu aktualisieren. Weitere Informationen finden Sie unter [Aktualisieren des Auswahl-Status und der Auswahlgrenzen](#aktualisieren_des_auswahl-status_und_der_auswahlgrenzen) weiter unten.

Wir könnten den Code verbessern, indem wir andere Tastenkombinationen wie <kbd>Strg</kbd>+<kbd>C</kbd> und <kbd>Strg</kbd>+<kbd>V</kbd> zum Kopieren und Einfügen von Text oder <kbd>Strg</kbd>+<kbd>Z</kbd> und <kbd>Strg</kbd>+<kbd>Y</kbd> zum Rückgängig machen und Wiederholen von Textänderungen behandeln.

## Aktualisieren des Auswahl-Status und der Auswahlgrenzen

Wie wir bereits gesehen haben, kümmert sich die `render()`-Funktion um das Rendering der aktuellen Benutzerauswahl im Editor-Element. Aber die Demo-App muss auch den Auswahl-Status und die Grenzen aktualisieren, wenn der Benutzer die Auswahl ändert. Die EditContext API tut dies nicht automatisch, wiederum weil die Editor-Benutzeroberfläche möglicherweise auf andere Weise implementiert wurde, zum Beispiel durch die Verwendung eines `<canvas>`-Elements.

Um zu wissen, wann der Benutzer die Auswahl ändert, verwendet die Demo-App das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)-Ereignis und die [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)-Methode, die ein [`Selection`](/de/docs/Web/API/Selection)-Objekt bereitstellt, das uns mitteilt, wo sich die Auswahl des Benutzers befindet. Mit diesen Informationen aktualisiert die Demo-App den Auswahl-Status und die Auswahlgrenzen der EditContext mit den Methoden [`EditContext.updateSelection()`](/de/docs/Web/API/EditContext/updateSelection) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds). Dies wird vom Betriebssystem verwendet, um das IME-Kompositionsfenster korrekt zu positionieren.

Da die EditContext API jedoch Zeichenoffsets verwendet, um die Auswahl darzustellen, verwendet die Demo-App auch eine Funktion, `fromSelectionToOffsets()`, die DOM-Auswahlobjekte in Zeichenoffsets konvertiert.

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

Den Code für die Funktion `fromSelectionToOffsets()` finden Sie in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js)-Datei.

## Berechnen der Zeichen-Grenzen

Zusätzlich zur Verwendung der Methoden [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds), um dem Betriebssystem zu helfen, eine Texteingabe-Benutzeroberfläche, die der Benutzer möglicherweise verwendet, zu positionieren, gibt es noch ein weiteres Informationsstück, das das Betriebssystem benötigt: die Position und Größe bestimmter Zeichen innerhalb des Editor-Elements.

Um dies zu tun, lauscht die Demo-App dem [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event)-Ereignis, verwendet es, um die Grenzen einiger der Zeichen im Editor-Element zu berechnen und verwendet dann die [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds)-Methode, um die Zeichen-Grenzen zu aktualisieren.

Wie bereits gesehen, kennt die EditContext API nur Zeichenoffsets, was bedeutet, dass das `characterboundsupdate`-Ereignis die Start- und Endoffsets für die Zeichen bereitstellt, für die sie Grenzen benötigt. Die Demo-App verwendet eine weitere Funktion, `fromOffsetsToRenderedTokenNodes()`, um die DOM-Elemente zu finden, in denen diese Zeichen gerendert wurden, und verwendet diese Informationen, um die erforderlichen Grenzen zu berechnen.

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

Den Code für die Funktion `fromOffsetsToRenderedTokenNodes()` finden Sie in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js)-Datei.

## Anwenden von IME-Kompositionstextformaten

Die Demo-App durchläuft einen letzten Schritt, um die IME-Komposition vollständig zu unterstützen. Wenn der Benutzer Text mit einem IME eingibt, kann das IME entscheiden, dass bestimmte Teile des eingegebenen Textes anders formatiert werden sollten, um den Kompositionszustand anzuzeigen. Beispielsweise könnte das IME entscheiden, den Text zu unterstreichen.

Da es in der Verantwortung der Demo-App liegt, den Inhalt im bearbeitbaren Textbereich zu rendern, liegt es auch in ihrer Verantwortung, die notwendigen IME-Formatierungen anzuwenden. Die Demo-App erreicht dies, indem sie dem [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event)-Ereignis lauscht, um zu erkennen, wann das IME Textformate anwenden möchte, wo und welche Formate anzuwenden sind.

Wie im folgenden Code-Snippet gezeigt, verwendet die Demo-App das `textformatupdate`-Ereignis und die Funktion `fromOffsetsToSelection()` erneut, um den Textbereich zu finden, den die IME-Komposition formatieren möchte:

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

Der obige Ereignishandler ruft die Funktion `addHighlight()` auf, um Text zu formatieren. Diese Funktion verwendet die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API), um die Textformate darzustellen. Die CSS Custom Highlight API bietet einen Mechanismus zum Stylen beliebiger Textranges durch die Verwendung von JavaScript zur Erstellung der Ranges und CSS zum Stylen. Um diese API zu verwenden, wird das {{cssxref("::highlight", "::highlight()")}} Pseudoelement verwendet, um die Highlight-Stile zu definieren:

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

[`Highlight`](/de/docs/Web/API/Highlight)-Instanzen werden auch erstellt, in einem Objekt gespeichert und im [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) durch die Verwendung der [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)-Eigenschaft registriert:

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

Mit diesem Mechanismus verwendet die `addHighlight()`-Funktion [`Range`](/de/docs/Web/API/Range)-Objekte für die Ranges, die gestylt werden müssen, und fügt sie dem `Highlight`-Objekt hinzu:

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

Dieser Artikel zeigte Ihnen, wie Sie die EditContext API verwenden, um einen einfachen HTML-Codeeditor zu erstellen, der die IME-Zusammensetzung und die Syntax-Hervorhebung unterstützt.

Den endgültigen Code und die Live-Demo finden Sie auf GitHub: [Live-Demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) und [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor).

Wichtig ist, dass dieser Artikel Ihnen gezeigt hat, dass die EditContext API viel Flexibilität in Bezug auf die Benutzeroberfläche Ihres Editors bietet. Basierend auf dieser Demo könnten Sie einen ähnlichen Texteditor erstellen, der ein `<canvas>`-Element verwendet, um den syntaxhervorgehobenen HTML-Code zu rendern, anstelle des `<div>`, das die Demo verwendet. Sie könnten auch ändern, wie jedes Token gerendert wird, oder wie die Auswahl gerendert wird.

## Siehe auch

- [EditContext API](/de/docs/Web/API/EditContext_API)
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
