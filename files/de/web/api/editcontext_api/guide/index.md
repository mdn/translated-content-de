---
title: Verwendung der EditContext API
slug: Web/API/EditContext_API/Guide
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("EditContext API")}}

Die **[EditContext API](/de/docs/Web/API/EditContext_API)** kann genutzt werden, um auf dem Web umfangreiche Text-Editoren zu erstellen, die erweiterte Texteinführungserfahrungen unterstützen, wie zum Beispiel die {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) Komposition, Emoji-Auswahl oder andere plattformspezifische Bearbeitungs-Oberflächen.

In diesem Artikel werden die notwendigen Schritte zum Erstellen eines Texteditors mithilfe der EditContext API erläutert. In diesem Leitfaden werden Sie die Hauptschritte überprüfen, die beim Erstellen eines einfachen HTML-Codeeditors erforderlich sind, der den Code während der Eingabe hervorhebt und IME-Komposition unterstützt.

## Fertiger Code und Live-Demo

Um den fertigen Code zu sehen, schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor) auf GitHub an. Es ist eine gute Idee, den Quellcode während des Lesens offen zu halten, da das Tutorial nur die wichtigsten Teile des Codes zeigt.

Der Quellcode ist in die folgenden Dateien organisiert:

- [index.html](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/index.html) enthält das Editor-UI-Element und lädt den benötigten CSS- und JavaScript-Code für die Demo.
- [styles.css](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/styles.css) enthält die Styles für das Editor-UI.
- [editor.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/editor.js) enthält den JavaScript-Code, der das Editor-UI einrichtet, den HTML-Code rendert und Benutzereingaben verarbeitet.
- [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) enthält den JavaScript-Code, der den HTML-Code in separate Tokens wie Öffnungs-Tags, Schließ-Tags und Textknoten aufteilt.
- [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) enthält den JavaScript-Code, der zwischen den Zeichenoffsets, die die EditContext API verwendet, und den DOM-Knoten, die der Browser für Textauswahlen verwendet, konvertiert.

Um die Live-Demo zu verwenden, öffnen Sie [Edit Context API: HTML editor demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) in einem Browser, der die EditContext API unterstützt.

## Erstellung des Editor-UI

Der erste Schritt ist das Erstellen der UI für den Editor. Der Editor ist ein {{HTMLElement("div")}} Element mit dem [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) Attribut auf `false` gesetzt, um die Rechtschreibprüfung zu deaktivieren:

```html
<div id="html-editor" spellcheck="false"></div>
```

Um das Editor-Element zu stylen, wird der folgende CSS-Code verwendet. Der Code macht, dass der Editor den gesamten Viewport ausfüllt und scrollt, wenn zu viel Inhalt vorhanden ist, um zu passen. Die {{cssxref("white-space")}} Eigenschaft wird ebenfalls verwendet, um Leerzeichen im HTML-Eingabetext zu bewahren, und die {{cssxref("tab-size")}} Eigenschaft wird verwendet, um Tab-Zeichen als zwei Leerzeichen darzustellen. Schließlich werden einige Standardhintergrund-, Text- und Kursorfarben festgelegt:

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

Um ein Element im Web bearbeitbar zu machen, verwenden Sie meistens ein {{HTMLElement("input")}} Element, ein {{HTMLElement("textarea")}} Element oder das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut.

Mit der EditContext API können Sie jedoch auch andere Arten von Elementen ohne ein Attribut bearbeitbar machen. Um die Liste der Elemente zu sehen, die mit der EditContext API verwendet werden können, siehe [Mögliche Elemente](/de/docs/Web/API/HTMLElement/editContext#possible_elements) auf der Seite des HTMLElement `editContext`-Eigenschaft.

Um den Editor bearbeitbar zu machen, erstellt die Demo-App eine [`EditContext`](/de/docs/Web/API/EditContext) Instanz, die einige anfängliche HTML-Texte an den Konstruktor übergibt und dann die [`editContext`](/de/docs/Web/API/HTMLElement/editContext) Eigenschaft des Editor-Elements auf die `EditContext`-Instanz setzt:

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

Diese Codezeilen machen das Editor-Element fokussierbar. Die Eingabe von Text in das Element löst das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event) Ereignis auf der `EditContext`-Instanz aus.

## Rendern des Textes und der Benutzerselektion

Um den syntaxhervorgehobenen HTML-Code im Editor darzustellen, wenn der Benutzer Text eingibt, verwendet die Demo-App eine Funktion namens `render()`, die aufgerufen wird, wenn neuer Text eingegeben wird, wenn Zeichen gelöscht werden oder wenn die Auswahl geändert wird.

### Tokenisieren des HTML-Codes

Eines der ersten Dinge, die die `render()` Funktion tut, ist das Tokenisieren des HTML-Textinhalts. Das Tokenisieren des HTML-Textinhalts ist notwendig, um die HTML-Syntax hervorzuheben, und erfordert das Lesen der HTML-Code-Zeichenkette und die Feststellung, wo jedes öffnende Tag, schließende Tag, Attribut, Kommentarknoten und Textknoten beginnt und endet.

Die Demo-App verwendet die `tokenizeHTML()` Funktion, um dies zu erreichen, die die Zeichenkette Zeichen für Zeichen durchläuft und dabei einen Zustandsautomat aufrechterhält. Sie können den Quellcode für die `tokenizeHTML()` Funktion in [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) auf GitHub sehen.

Die Funktion wird wie folgt in die HTML-Datei der Demo-App importiert:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### Rendern des Textes

Jedes Mal, wenn die `render()` Funktion aufgerufen wird, also wenn der Benutzer Text eingibt oder wenn sich die Auswahl ändert, entfernt die Funktion den Inhalt im Editor-Element und rendert dann jedes Token als separates HTML-Element:

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

Die EditContext API ermöglicht es, die Art und Weise, wie der bearbeitete Text gerendert wird, zu kontrollieren. Die obige Funktion rendert ihn mithilfe von HTML-Elementen, aber sie könnte ihn auf jede andere Weise rendern, einschließlich der Darstellung in einem `<canvas>` Element.

Die Demo-App führt die `render()` Funktion bei Bedarf aus. Dies umfasst einmal, wenn die App startet und dann erneut, wenn der Benutzer Text eingibt, indem sie auf das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event) Ereignis hört:

```js
// Listen to the EditContext's textupdate event.
// This tells us when text input happens. We use it to re-render the view.
editContext.addEventListener("textupdate", (e) => {
  render(editContext.text, e.selectionStart, e.selectionEnd);
});

// Do the initial render.
render(editContext.text, editContext.selectionStart, editContext.selectionEnd);
```

### Stylen der Tokens

Wie im vorherigen Codebeispiel der `render()` Funktion gezeigt, wird jedem Token ein Klassenname gegeben, der dem Token-Typ entspricht. Die Demo-App verwendet diesen Klassennamen, um die Tokens mit CSS zu stylen, wie unten gezeigt:

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

### Rendern der Selektion

Obwohl die Demo-App ein `<div>` Element für den Editor verwendet, das bereits das Blinken des Textcursors und die Hervorhebung von Benutzerauswahlen unterstützt, erfordert die EditContext API dennoch, die Selektion zu rendern. Dies liegt daran, dass die EditContext API mit anderen Elementtypen verwendet werden kann, die diese Verhaltensweisen nicht unterstützen. Das Rendern der Selektion gibt uns auch mehr Kontrolle darüber, wie die Selektion angezeigt wird. Schließlich, da die `render()` Funktion den HTML-Inhalt des Editor-Elements jedes Mal löscht, wenn sie ausgeführt wird, geht jede Auswahl, die der Benutzer möglicherweise getroffen hat, beim nächsten Ausführen der `render()` Funktion verloren.

Um die Selektion zu rendern, verwendet die Demo-App die [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) Methode am Ende der `render()` Funktion. Um die `setBaseAndExtent()` Methode zu verwenden, benötigen wir ein Paar DOM-Knoten und Zeichenoffsets, die den Anfang und das Ende der Selektion darstellen. Die EditContext API hält den Zustand für die aktuelle Selektion jedoch nur als ein Paar von Start- und Endzeichenoffsets im gesamten Bearbeitungspuffer. Der Demo-App-Code verwendet eine weitere Funktion, `fromOffsetsToSelection()`, die diese Zeichenoffsets in vier Werte konvertiert:

- Den DOM-Knoten, der den Anfang der Selektion enthält.
- Eine Zahl, die die Zeichenposition des Selektionsanfangs innerhalb des Anfangsknotens darstellt.
- Den DOM-Knoten, der das Ende der Selektion enthält.
- Eine Zahl, die die Zeichenposition des Selektionsendes innerhalb des Endknotens darstellt.

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

Sie können den Code für die `fromOffsetsToSelection()` Funktion in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) Datei sehen.

## Aktualisierung der Kontrollgrenzen

Die EditContext API bietet uns viel Flexibilität bei der Definition unserer eigenen Texteditor-UI. Das bedeutet jedoch auch, dass wir einige Dinge handhaben müssen, die normalerweise vom Browser oder Betriebssystem (OS) verarbeitet werden.

Zum Beispiel müssen wir dem OS mitteilen, wo sich die bearbeitbare Textregion auf der Seite befindet. Auf diese Weise kann das OS jede Textbearbeitungs-Oberfläche korrekt positionieren, mit der der Benutzer Text erstellen könnte, wie etwa ein IME-Zusammensetzungsfenster.

Die Demo-App verwendet die [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds) Methode und übergibt ihr ein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt, das die Grenzen der bearbeitbaren Textregion darstellt. Die Demo-App ruft diese Methode auf, wenn der Editor initialisiert wird und erneut, wenn das Fenster geändert wird:

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

## Behandlung von Tab-, Enter- und anderen Texterneingabetasten

Das `textupdate` Ereignis, das im vorherigen Abschnitt verwendet wurde, wird nicht ausgelöst, wenn der Benutzer die <kbd>Tab</kbd> oder <kbd>Enter</kbd> Tasten drückt, daher müssen wir diese Tasten separat behandeln.

Um sie zu behandeln, verwendet die Demo-App einen Ereignislistener für das [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignis auf dem Editor-Element und verwendet diesen Listener, um den Textinhalt und die Selektion der `EditContext` Instanz zu aktualisieren, wie unten gezeigt:

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

Der obige Code ruft auch die `updateSelection()` Funktion auf, um die Selektion zu aktualisieren, nachdem der Textinhalt aktualisiert wurde. Siehe [Aktualisierung des Selektionszustands und der Selektionsgrenzen](#aktualisierung_des_selektionszustands_und_der_selektionsgrenzen) für weitere Informationen.

Wir könnten den Code verbessern, indem wir andere Tastenkombinationen behandeln, wie <kbd>Strg</kbd>+<kbd>C</kbd> und <kbd>Strg</kbd>+<kbd>V</kbd> zum Kopieren und Einfügen von Text oder <kbd>Strg</kbd>+<kbd>Z</kbd> und <kbd>Strg</kbd>+<kbd>Y</kbd> zum Rückgängig machen und Wiederherstellen von Textänderungen.

## Aktualisierung des Selektionszustands und der Selektionsgrenzen

Wie wir bereits gesehen haben, kümmert sich die `render()` Funktion um das Rendern der aktuellen Benutzerselektion im Editor-Element. Allerdings muss die Demo-App auch den Selektionszustand und die Grenzen aktualisieren, wenn der Benutzer die Selektion ändert. Die EditContext API erledigt dies nicht automatisch, wiederum, weil die Editor-UI möglicherweise anders implementiert wird, zum Beispiel durch die Verwendung eines `<canvas>` Elements.

Um zu wissen, wann der Benutzer die Selektion ändert, verwendet die Demo-App das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) Ereignis und die [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) Methode, die ein [`Selection`](/de/docs/Web/API/Selection) Objekt bereitstellen, um uns zu zeigen, wo sich die Selektion des Benutzers befindet. Mithilfe dieser Informationen aktualisiert die Demo-App den EditContext Selektionszustand und die Selektionsgrenzen, indem sie die Methoden [`EditContext.updateSelection()`](/de/docs/Web/API/EditContext/updateSelection) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds) verwendet. Dies wird vom OS verwendet, um das IME-Zusammensetzungsfenster korrekt zu positionieren.

Da die EditContext API jedoch Zeichenoffsets verwendet, um die Selektion darzustellen, verwendet die Demo-App auch eine Funktion, `fromSelectionToOffsets()`, die DOM-Selektion-Objekte in Zeichenoffsets konvertiert.

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

Sie können den Code für die `fromSelectionToOffsets()` Funktion in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) Datei sehen.

## Berechnung von Zeichenbegrenzungen

Neben der Verwendung der Methoden [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds), um dem OS bei der Positionierung einer Texterfassungsoberfläche zu helfen, gibt es noch eine weitere Information, die das OS benötigt: die Position und Größe bestimmter Zeichen innerhalb des Editor-Elements.

Dazu hört die Demo-App auf das [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event) Ereignis, verwendet es, um die Grenzen einiger Zeichen im Editor-Element zu berechnen, und verwendet dann die Methode [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds), um die Zeichenbegrenzungen zu aktualisieren.

Wie zuvor gesehen, kennt die EditContext API nur Zeichenoffsets, was bedeutet, dass das `characterboundsupdate` Ereignis die Start- und Endoffsets für die Zeichen bereitstellt, für die es Begrenzungen benötigt. Die Demo-App verwendet eine weitere Funktion, `fromOffsetsToRenderedTokenNodes()`, um die DOM-Elemente zu finden, in denen diese Zeichen gerendert wurden, und verwendet diese Informationen, um die erforderlichen Begrenzungen zu berechnen.

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

Sie können den Code für die `fromOffsetsToRenderedTokenNodes()` Funktion in der [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) Datei sehen.

## Anwenden von IME-Kompositionstextformaten

Die Demo-App durchläuft einen letzten Schritt, um die IME-Komposition vollständig zu unterstützen. Wenn der Benutzer Text mit einem IME verfasst, kann das IME entscheiden, dass bestimmte Teile des erstellten Textes anders formatiert werden sollten, um den Kompositionszustand anzuzeigen. Zum Beispiel kann das IME entscheiden, den Text zu unterstreichen.

Da es die Verantwortung der Demo-App ist, den Inhalt im bearbeitbaren Textbereich zu rendern, ist es auch ihre Verantwortung, die notwendigen IME-Formatierungen anzuwenden. Die Demo-App erreicht dies, indem sie auf das [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event) Ereignis hört, um zu erfahren, wann das IME Textformate anwenden möchte, wo und welche Formate anzuwenden sind.

Wie im folgenden Code-Snippet gezeigt, verwendet die Demo-App das `textformatupdate` Ereignis und erneut die Funktion `fromOffsetsToSelection()`, um den Textbereich zu finden, den die IME-Komposition formatieren möchte:

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

Der obige Ereignishandler ruft die Funktion namens `addHighlight()` auf, um Text zu formatieren. Diese Funktion verwendet die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API), um die Textformate darzustellen. Die CSS Custom Highlight API bietet einen Mechanismus zum Stylen von beliebigen Textbereichen, indem JavaScript verwendet wird, um die Bereiche zu erstellen, und CSS, um sie zu stylen. Um diese API zu verwenden, wird das {{cssxref("::highlight", "::highlight()")}} Pseudo-Element verwendet, um die Hervorhebungsstile zu definieren:

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

[`Highlight`](/de/docs/Web/API/Highlight)-Instanzen werden ebenfalls erstellt, in einem Objekt gespeichert und im [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) registriert, indem die [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static) Eigenschaft verwendet wird:

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

Damit verwendet die `addHighlight()` Funktion [`Range`](/de/docs/Web/API/Range) Objekte für die Bereiche, die gestylt werden müssen, und fügt sie dem `Highlight` Objekt hinzu:

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

Dieser Artikel zeigte Ihnen, wie Sie die EditContext API verwenden, um einen einfachen HTML-Codeeditor zu erstellen, der IME-Komposition und Syntaxhervorhebung unterstützt.

Den finalen Code und die Live-Demo finden Sie auf GitHub: [Live-Demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) und [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor).

Wichtiger ist, dass dieser Artikel Ihnen gezeigt hat, dass die EditContext API viel Flexibilität hinsichtlich der Benutzeroberfläche Ihres Editors bietet. Basierend auf dieser Demo könnten Sie einen ähnlichen Texteditor erstellen, der ein `<canvas>` Element verwendet, um den syntaxhervorgehobenen HTML-Code anstelle des `<div>` zu rendern, das die Demo verwendet. Sie könnten auch ändern, wie jedes Token gerendert wird oder wie die Auswahl gerendert wird.

## Siehe auch

- [EditContext API](/de/docs/Web/API/EditContext_API)
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
