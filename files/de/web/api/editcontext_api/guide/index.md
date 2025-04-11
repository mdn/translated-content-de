---
title: Verwendung der EditContext API
slug: Web/API/EditContext_API/Guide
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("EditContext API")}}

Die **[EditContext API](/de/docs/Web/API/EditContext_API)** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die fortgeschrittene Texteingabe-Erlebnisse unterstützen, wie z. B. die Komposition über einen {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME), Emoji-Auswahl oder andere plattformabhängige Editieroberflächen.

Dieser Artikel beschreibt die notwendigen Schritte zur Erstellung eines Texteditors mit der EditContext API. In diesem Leitfaden werden die wichtigsten Schritte zum Erstellen eines einfachen HTML-Code-Editors erläutert, der die Syntax des Codes beim Tippen hervorhebt und die IME-Komposition unterstützt.

## Finaler Code und Live-Demo

Um den finalen Code zu sehen, schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor) auf GitHub an. Es ist eine gute Idee, den Quellcode offen zu halten, während Sie lesen, da das Tutorial nur die wichtigsten Teile des Codes zeigt.

Der Quellcode ist in folgende Dateien organisiert:

- [index.html](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/index.html) enthält das Editor-UI-Element und lädt den erforderlichen CSS- und JavaScript-Code für die Demo.
- [styles.css](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/styles.css) enthält die Styles für die Editor-UI.
- [editor.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/editor.js) enthält den JavaScript-Code, der die Editor-UI einrichtet, den HTML-Code rendert und Benutzereingaben verarbeitet.
- [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) enthält den JavaScript-Code, der den HTML-Code in separate Tokens aufteilt, wie Öffnungstag, Schließtag und Textknoten.
- [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) enthält den JavaScript-Code, der zwischen den Zeichen-Offsets, die die EditContext API verwendet, und den DOM-Knoten, die der Browser für Textauswahlen verwendet, konvertiert.

Um die Live-Demo zu verwenden, öffnen Sie [Edit Context API: HTML editor demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) in einem Browser, der die EditContext API unterstützt.

## Erstellen der Editor-UI

Der erste Schritt besteht darin, die UI für den Editor zu erstellen. Der Editor ist ein {{HTMLElement("div")}}-Element mit dem [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) Attribut auf `false` gesetzt, um die Rechtschreibprüfung zu deaktivieren:

```html
<div id="html-editor" spellcheck="false"></div>
```

Um das Editor-Element zu stylen, wird der folgende CSS-Code verwendet. Der Code sorgt dafür, dass der Editor den gesamten Anzeigebereich ausfüllt und scrollt, wenn zu viel Inhalt vorhanden ist, um zu passen. Die {{cssxref("white-space")}}-Eigenschaft wird ebenfalls verwendet, um Leerzeichenzeichen, die im HTML-Eingabetext gefunden werden, beizubehalten, und die {{cssxref("tab-size")}}-Eigenschaft sorgt dafür, dass Tabulatorzeichen als zwei Leerzeichen dargestellt werden. Schließlich werden einige Standardhintergrund-, Text- und Caret-Farben festgelegt:

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

Um ein Element im Web bearbeitbar zu machen, verwendet man in der Regel ein {{HTMLElement("input")}}-Element, ein {{HTMLElement("textarea")}}-Element oder das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut.

Mit der EditContext API können Sie jedoch andere Arten von Elementen bearbeitbar machen, ohne ein Attribut zu verwenden. Um die Liste der Elemente zu sehen, die mit der EditContext API verwendet werden können, siehe [Mögliche Elemente](/de/docs/Web/API/HTMLElement/editContext#possible_elements) auf der Seite der HTMLElement `editContext`-Eigenschaft.

Um den Editor bearbeitbar zu machen, erstellt die Demo-App eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz, übergibt einige initiale HTML-Texte an den Konstruktor und setzt dann die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft des Editor-Elements zur `EditContext`-Instanz:

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

Diese Codezeilen machen das Editor-Element fokusierbar. Wenn Text in das Element eingegeben wird, wird das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event)-Ereignis auf der `EditContext`-Instanz ausgelöst.

## Text und Benutzerauswahl rendern

Um den syntaxhervorgehobenen HTML-Code im Editor zu rendern, wenn der Benutzer Text eingibt, verwendet die Demo-App eine Funktion namens `render()`, die aufgerufen wird, wenn neuer Text eingegeben wird, Zeichen gelöscht werden oder wenn die Auswahl geändert wird.

### Tokenisierung des HTML-Codes

Eines der ersten Dinge, die die `render()`-Funktion tut, ist das Tokenisieren des HTML-Textinhalts. Die Tokenisierung des HTML-Textinhalts ist notwendig, um die HTML-Syntax hervorzuheben und beinhaltet das Lesen des HTML-Code-Strings und das Bestimmen, wo jedes Öffnungs-Tag, Schließ-Tag, Attribut, Kommentarknoten und Textknoten beginnt und endet.

Die Demo-App verwendet die `tokenizeHTML()`-Funktion, um dies zu erreichen, indem sie den String Zeichen für Zeichen durchgeht, während sie einen Zustandsautomaten pflegt. Sie können den Quellcode für die `tokenizeHTML()`-Funktion in [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) auf GitHub sehen.

Die Funktion wird in die HTML-Datei der Demo-App wie folgt importiert:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### Text rendern

Immer wenn die `render()`-Funktion aufgerufen wird, also wenn der Benutzer Text eingibt oder sich die Auswahl ändert, entfernt die Funktion den Inhalt im Editor-Element und rendert dann jedes Token als separates HTML-Element:

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
  // ...
}
```

Die EditContext API gibt die Möglichkeit, die Art und Weise, wie der bearbeitete Text dargestellt wird, zu kontrollieren. Die obige Funktion rendert ihn, indem sie HTML-Elemente verwendet, aber es könnte auch auf jede andere Weise dargestellt werden, einschließlich der Darstellung in einem `<canvas>`-Element.

Die Demo-App führt die `render()`-Funktion bei Bedarf aus. Dies beinhaltet einmal beim Start der App und dann erneut, wenn der Benutzer Text eingibt, indem das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event)-Ereignis überwacht wird:

```js
// Listen to the EditContext's textupdate event.
// This tells us when text input happens. We use it to re-render the view.
editContext.addEventListener("textupdate", (e) => {
  render(editContext.text, e.selectionStart, e.selectionEnd);
});

// Do the initial render.
render(editContext.text, editContext.selectionStart, editContext.selectionEnd);
```

### Die Tokens stylen

Wie im vorherigen Beispielcode der `render()`-Funktion gezeigt, erhält jedes Token einen Klassennamen, der dem Token-Typ entspricht. Die Demo-App verwendet diesen Klassennamen, um die Tokens zu stylen, indem CSS verwendet wird, wie unten gezeigt:

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

### Die Auswahl rendern

Obwohl die Demo-App ein `<div>`-Element für den Editor verwendet, das bereits das Blinken eines Text-Cursors und die Hervorhebung von Benutzerauswahlen unterstützt, erfordert es die EditContext API dennoch, die Auswahl zu rendern. Dies liegt daran, dass die EditContext API mit anderen Arten von Elementen verwendet werden kann, die diese Verhaltensweisen nicht unterstützen. Das Rendern der Auswahl selbst gibt uns auch mehr Kontrolle darüber, wie die Auswahl angezeigt wird. Schließlich wird der HTML-Inhalt des Editor-Elements jedes Mal gelöscht, wenn die `render()`-Funktion ausgeführt wird, sodass jede Auswahl, die der Benutzer möglicherweise getroffen hat, verloren geht, wenn die `render()`-Funktion erneut ausgeführt wird.

Um die Auswahl zu rendern, verwendet die Demo-App die [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)-Methode am Ende der `render()`-Funktion. Um die `setBaseAndExtent()`-Methode zu verwenden, benötigen wir ein Paar von DOM-Knoten und Zeichen-Offsets, die den Start und das Ende der Auswahl darstellen. Die EditContext API verwaltet jedoch den Zustand für die aktuelle Auswahl nur als ein Paar von Start- und Endzeichen-Offsets in den gesamten Bearbeitungspuffer. Der Code der Demo-App verwendet eine weitere Funktion namens `fromOffsetsToSelection()`, die diese Zeichen-Offsets in vier Werte umwandelt:

- Der DOM-Knoten, der den Anfang der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Auswahlstarts innerhalb des Startknotens darstellt.
- Der DOM-Knoten, der das Ende der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Auswahlsendes innerhalb des Endknotens darstellt.

```js
function render(text, selectionStart, selectionEnd) {
  // ...
  // The beginning of the render function is omitted for brevity.

  // Convert the start/end offsets to a DOM selection.
  const { anchorNode, anchorOffset, extentNode, extentOffset } =
    fromOffsetsToSelection(selectionStart, selectionEnd);

  // Render the selection in the editor element.
  document
    .getSelection()
    .setBaseAndExtent(anchorNode, anchorOffset, extentNode, extentOffset);
}
```

Sie können den Code für die `fromOffsetsToSelection()`-Funktion in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js)-Datei sehen.

## Aktualisieren der Steuergrenzen

Die EditContext API gibt uns viel Flexibilität, unsere eigene Texteditor-UI zu definieren. Allerdings bedeutet dies auch, dass wir einige Dinge selbst handhaben müssen, die normalerweise vom Browser oder Betriebssystem (OS) behandelt werden.

Zum Beispiel müssen wir dem Betriebssystem mitteilen, wo sich der bearbeitbare Textbereich auf der Seite befindet. Auf diese Weise kann das Betriebssystem jegliche Texteingabe-Oberfläche, mit der der Benutzer Text komponieren könnte, korrekt positionieren, wie z. B. ein IME-Kompositionsfenster.

Die Demo-App verwendet die [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds)-Methode und übergibt ihr ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt, das die Grenzen des bearbeitbaren Textbereichs darstellt. Die Demo-App ruft diese Methode auf, wenn der Editor initialisiert wird und erneut, wenn das Fenster in der Größe geändert wird:

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

## Umgang mit Tab, Enter und anderen Textbearbeitungstasten

Das `textupdate`-Ereignis, das im vorherigen Abschnitt verwendet wurde, wird nicht ausgelöst, wenn der Benutzer die <kbd>Tab</kbd>- oder <kbd>Enter</kbd>-Tasten drückt, daher müssen wir diese Tasten separat behandeln.

Um mit ihnen umzugehen, verwendet die Demo-App einen Ereignislistener für das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf dem Editor-Element und verwendet diesen Listener, um den Textinhalt und die Auswahl der `EditContext`-Instanz zu aktualisieren, wie unten gezeigt:

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

Der obige Code ruft auch die `updateSelection()`-Funktion auf, um die Auswahl zu aktualisieren, nachdem der Textinhalt aktualisiert wurde. Weitere Informationen finden Sie unter [Aktualisieren des Auswahlstatus und der Auswahlgrenzen](#aktualisieren_des_auswahlstatus_und_der_auswahlgrenzen).

Wir könnten den Code verbessern, indem wir andere Tastenkombinationen behandeln, wie <kbd>Strg</kbd>+<kbd>C</kbd> und <kbd>Strg</kbd>+<kbd>V</kbd> zum Kopieren und Einfügen von Text oder <kbd>Strg</kbd>+<kbd>Z</kbd> und <kbd>Strg</kbd>+<kbd>Y</kbd> zum Rückgängig machen und Wiederholen von Textänderungen.

## Aktualisieren des Auswahlstatus und der Auswahlgrenzen

Wie wir bereits gesehen haben, handelt die `render()`-Funktion das Rendern der aktuellen Benutzerauswahl im Editor-Element. Aber die Demo-App muss auch den Auswahlstatus und die Grenzen aktualisieren, wenn der Benutzer die Auswahl ändert. Die EditContext API macht dies nicht automatisch, da die Editor-UI möglicherweise auf andere Weise implementiert ist, wie zum Beispiel durch die Verwendung eines `<canvas>`-Elements.

Um zu wissen, wann der Benutzer die Auswahl ändert, verwendet die Demo-App das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)-Ereignis und die [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)-Methode, die ein [`Selection`](/de/docs/Web/API/Selection)-Objekt bereitstellt, das uns mitteilt, wo sich die Auswahl des Benutzers befindet. Anhand dieser Informationen aktualisiert die Demo-App den Auswahlstatus und die Auswahlgrenzen der EditContext API durch die Verwendung der Methoden [`EditContext.updateSelection()`](/de/docs/Web/API/EditContext/updateSelection) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds). Das wird vom OS verwendet, um das IME-Kompositionsfenster korrekt zu positionieren.

Da die EditContext API jedoch Zeichen-Offsets verwendet, um die Auswahl darzustellen, verwendet die Demo-App auch eine Funktion, `fromSelectionToOffsets()`, die DOM-Auswahlobjekte in Zeichen-Offsets konvertiert.

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

Sie können den Code für die `fromSelectionToOffsets()`-Funktion in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js)-Datei sehen.

## Charaktergrenzen berechnen

Zusätzlich zur Verwendung der Methoden [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds), um dem OS zu helfen, eine Texteingabe-Oberfläche korrekt zu positionieren, gibt es noch ein weiteres Informationsstück, das das OS benötigt: die Position und Größe bestimmter Zeichen innerhalb des Editor-Elements.

Zu diesem Zweck hört die Demo-App auf das [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event)-Ereignis, nutzt es, um die Grenzen einiger der Zeichen im Editor-Element zu berechnen, und verwendet dann die Methode [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds), um die Charaktergrenzen zu aktualisieren.

Wie bereits gesehen, kennt die EditContext API nur Zeichen-Offsets, was bedeutet, dass das `characterboundsupdate`-Ereignis die Start- und End-Offsets für die Zeichen liefert, für die es Grenzen benötigt. Die Demo-App verwendet eine weitere Funktion, `fromOffsetsToRenderedTokenNodes()`, um die DOM-Elemente zu finden, in denen diese Zeichen gerendert wurden, und nutzt diese Informationen, um die erforderlichen Grenzen zu berechnen.

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

Sie können den Code für die `fromOffsetsToRenderedTokenNodes()`-Funktion in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js)-Datei sehen.

## Anwenden von IME-Kompositionstextformaten

Die Demo-App durchläuft einen letzten Schritt, um die IME-Komposition vollständig zu unterstützen. Wenn der Benutzer Text mit einem IME komponiert, könnte das IME entscheiden, dass bestimmte Teile des Textes anders formatiert werden sollen, um den Kompositionsstatus anzuzeigen. Zum Beispiel könnte das IME entscheiden, den Text zu unterstreichen.

Da die Demo-App dafür verantwortlich ist, den Inhalt im bearbeitbaren Textbereich darzustellen, ist es auch ihre Verantwortung, die notwendigen IME-Formatierungen anzuwenden. Die Demo-App erreicht dies, indem sie auf das [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event)-Ereignis hört, um zu erfahren, wann das IME Textformate anwenden möchte, wo und welche Formate angewendet werden sollen.

Wie im folgenden Codeausschnitt gezeigt, verwendet die Demo-App das `textformatupdate`-Ereignis und die `fromOffsetsToSelection()`-Funktion erneut, um den Textbereich zu finden, den das IME für die Formatierung anwenden möchte:

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

Der obige Ereignishandler ruft die Funktion namens `addHighlight()` auf, um den Text zu formatieren. Diese Funktion nutzt die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API), um die Textformate zu rendern. Die CSS Custom Highlight API bietet einen Mechanismus zum Stylen beliebiger Textranges, indem JavaScript zum Erstellen der Ranges und CSS zum Stylen verwendet wird. Um diese API zu nutzen, wird das {{cssxref("::highlight", "::highlight()")}} Pseudoelement verwendet, um die Highlight-Stile zu definieren:

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

[`Highlight`](/de/docs/Web/API/Highlight)-Instanzen werden ebenfalls erstellt, in einem Objekt gespeichert und im [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert, indem die [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)-Eigenschaft verwendet wird:

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

Mit diesem Ansatz verwendet die Funktion `addHighlight()` [`Range`](/de/docs/Web/API/Range)-Objekte für die Bereiche, die gestylt werden müssen, und fügt sie dem `Highlight`-Objekt hinzu:

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

Dieser Artikel hat Ihnen gezeigt, wie Sie die EditContext API verwenden, um einen einfachen HTML-Code-Editor zu erstellen, der IME-Komposition und Syntaxhervorhebung unterstützt.

Den finalen Code und die Live-Demo finden Sie auf GitHub: [Live-Demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) und [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor).

Wichtiger ist, dass dieser Artikel Ihnen gezeigt hat, dass die EditContext API viel Flexibilität in Bezug auf die Benutzeroberfläche Ihres Editors bietet. Basierend auf dieser Demo könnten Sie einen ähnlichen Texteditor erstellen, der ein `<canvas>`-Element verwendet, um den syntaxhervorgehobenen HTML-Code statt des `<div>`, das die Demo verwendet, zu rendern. Sie könnten auch ändern, wie jedes Token gerendert wird oder wie die Auswahl gerendert wird.

## Siehe auch

- [EditContext API](/de/docs/Web/API/EditContext_API)
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
