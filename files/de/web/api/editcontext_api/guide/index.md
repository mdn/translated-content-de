---
title: Verwenden der EditContext-API
slug: Web/API/EditContext_API/Guide
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{DefaultAPISidebar("EditContext API")}}

Die **[EditContext API](/de/docs/Web/API/EditContext_API)** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die erweiterte Texteingabeerlebnisse unterstützen, wie z. B. die {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Komposition, Emoji-Auswahl oder andere plattformabhängige, bearbeitungsbezogene Benutzeroberflächen.

Dieser Artikel behandelt die notwendigen Schritte, um einen Texteditor mit der EditContext-API zu erstellen. In diesem Leitfaden überprüfen Sie die Hauptschritte zur Erstellung eines einfachen HTML-Code-Editors, der die Syntax des Codes während der Eingabe hervorhebt und die IME-Komposition unterstützt.

## Endgültiger Code und Live-Demo

Um den endgültigen Code zu sehen, schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor) auf GitHub an. Es ist eine gute Idee, den Quellcode offen zu halten, während Sie lesen, da das Tutorial nur die wichtigsten Teile des Codes zeigt.

Der Quellcode ist in die folgenden Dateien organisiert:

- [index.html](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/index.html) enthält das Element der Editor-Oberfläche und lädt den notwendigen CSS- und JavaScript-Code für die Demo.
- [styles.css](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/styles.css) enthält die Stile für die Editor-Oberfläche.
- [editor.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/editor.js) enthält den JavaScript-Code, der die Editor-Oberfläche einrichtet, den HTML-Code rendert und Benutzereingaben verarbeitet.
- [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) enthält den JavaScript-Code, der den HTML-Code in separate Tokens aufteilt, wie z. B. öffnende Tags, schließende Tags und Textknoten.
- [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) enthält den JavaScript-Code, der zwischen den Zeichen-Offests, die die EditContext-API verwendet, und den DOM-Knoten, die der Browser für Textauswahlen verwendet, konvertiert.

Um die Live-Demo zu verwenden, öffnen Sie [Edit Context API: HTML editor demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) in einem Browser, der die EditContext-API unterstützt.

## Erstellen der Editor-Oberfläche

Der erste Schritt besteht darin, die Benutzeroberfläche für den Editor zu erstellen. Der Editor ist ein {{HTMLElement("div")}}-Element, bei dem das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut auf `false` gesetzt ist, um die Rechtschreibprüfung zu deaktivieren:

```html
<div id="html-editor" spellcheck="false"></div>
```

Um das Editor-Element zu stylen, wird der folgende CSS-Code verwendet. Der Code sorgt dafür, dass der Editor den gesamten Ansichtsbereich füllt und scrollt, wenn der Inhalt zu groß ist, um hineinzupassen. Die {{cssxref("white-space")}}-Eigenschaft wird verwendet, um Leerzeichen zu erhalten, die im HTML-Text-Eingabetext gefunden werden, und die {{cssxref("tab-size")}}-Eigenschaft wird verwendet, um Tab-Zeichen als zwei Leerzeichen darzustellen. Schließlich werden einige Standard-Hintergrund-, Text- und Caret-Farben festgelegt:

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

## Den Editor editierbar machen

Um ein Element im Web editierbar zu machen, verwendet man meist ein {{HTMLElement("input")}}-Element, ein {{HTMLElement("textarea")}}-Element oder das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut.

Mit der EditContext-API können Sie jedoch andere Elementtypen ohne die Verwendung eines Attributs editierbar machen. Um die Liste der Elemente zu sehen, die mit der EditContext-API verwendet werden können, lesen Sie [Mögliche Elemente](/de/docs/Web/API/HTMLElement/editContext#possible_elements) auf der Webseite der `editContext`-Eigenschaft von HTMLElement.

Um den Editor editierbar zu machen, erstellt die Demo-App eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz, übergibt dem Konstruktor einige anfängliche HTML-Texte und setzt dann die [`editContext`](/de/docs/Web/API/HTMLElement/editContext)-Eigenschaft des Editor-Elements auf die `EditContext`-Instanz:

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

Diese Codezeilen machen das Editor-Element fokussierbar. Das Eingeben von Text in das Element löst das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event)-Ereignis auf der `EditContext`-Instanz aus.

## Rendern des Textes und der Benutzerauswahl

Um den syntaxhervorgehobenen HTML-Code im Editor zu rendern, wenn der Benutzer Text eingibt, verwendet die Demo-App eine Funktion namens `render()`, die aufgerufen wird, wenn neuer Text eingegeben wird, Zeichen gelöscht werden oder wenn die Auswahl geändert wird.

### Tokenisieren des HTML-Codes

Eines der ersten Dinge, die die `render()`-Funktion tut, ist das Tokenisieren des HTML-Textinhalts. Das Tokenisieren des HTML-Textinhalts ist notwendig, um die HTML-Syntax hervorzuheben und umfasst das Lesen des HTML-Code-Strings und das Bestimmen, wo jedes öffnende Tag, schließende Tag, Attribut, Kommentarknoten und Textknoten beginnt und endet.

Die Demo-App verwendet die `tokenizeHTML()`-Funktion, um dies zu erreichen, die zeichenweise über den String iteriert und dabei einen Zustandsautomaten aufrechterhält. Sie können den Quellcode für die `tokenizeHTML()`-Funktion in [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) auf GitHub sehen.

Die Funktion wird in die HTML-Datei der Demo-App wie folgt importiert:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### Rendern des Textes

Immer wenn die `render()`-Funktion aufgerufen wird, was beim Texteingeben oder wenn sich die Auswahl ändert passiert, entfernt die Funktion den Inhalt im Editor-Element und rendert dann jedes Token als separates HTML-Element:

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

Die EditContext-API gibt die Möglichkeit, zu kontrollieren, wie der bearbeitete Text gerendert wird. Die obige Funktion rendert ihn mit Hilfe von HTML-Elementen, aber sie könnte ihn auch auf andere Weise rendern, einschließlich des Renderns in ein `<canvas>`-Element.

Die Demo-App führt die `render()`-Funktion bei Bedarf aus. Dies schließt einmal beim Start der App mit ein und dann erneut, wenn der Benutzer Text eingibt, indem das [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event)-Ereignis überwacht wird:

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

Wie im vorherigen Codebeispiel der `render()`-Funktion gesehen, wird jedem Token ein Klassenname zugewiesen, der dem Token-Typ entspricht. Die Demo-App verwendet diesen Klassennamen, um die Tokens mit CSS zu stylen, wie unten gezeigt:

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

### Rendern der Auswahl

Obwohl die Demo-App ein `<div>`-Element für den Editor verwendet, das bereits das Anzeigen eines blinkenden Textcursors und das Hervorheben von Benutzerauswahlen unterstützt, erfordert die EditContext-API dennoch das Rendern der Auswahl. Dies liegt daran, dass die EditContext-API mit anderen Elementtypen verwendet werden kann, die diese Verhaltensweisen nicht unterstützen. Das selbstständige Rendern der Auswahl gibt uns auch mehr Kontrolle darüber, wie die Auswahl angezeigt wird. Schließlich, da die `render()`-Funktion den HTML-Inhalt des Editor-Elements jedes Mal löscht, wenn sie ausgeführt wird, wird eine eventuell vom Benutzer vorgenommene Auswahl beim nächsten Ausführen der `render()`-Funktion verworfen.

Um die Auswahl zu rendern, verwendet die Demo-App die Methode [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) am Ende der `render()`-Funktion. Um die `setBaseAndExtent()`-Methode zu verwenden, benötigen wir ein Paar von DOM-Knoten und Zeichen-Offests, die den Anfang und das Ende der Auswahl darstellen. Die EditContext-API hält jedoch den Zustand für die aktuelle Auswahl nur als Paar von Anfangs- und Endzeichenoffests im gesamten Bearbeitungspuffer. Der Demo-App-Code verwendet eine weitere Funktion namens `fromOffsetsToSelection()`, um diese Zeichenoffests in vier Werte zu konvertieren:

- Der DOM-Knoten, der den Anfang der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Auswahlanfangs innerhalb des Startknotens darstellt.
- Der DOM-Knoten, der das Ende der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Auswahlendes innerhalb des Endknotens darstellt.

```js
function render(text, selectionStart, selectionEnd) {
  // …
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

Sie können den Code für die Funktion `fromOffsetsToSelection()` in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) sehen.

## Aktualisieren der Steuerelementgrenzen

Die EditContext-API bietet uns viel Flexibilität, um unsere eigene Texteditor-Benutzeroberfläche zu definieren. Dies bedeutet jedoch auch, dass wir einige Dinge handhaben müssen, die normalerweise vom Browser oder Betriebssystem (OS) abgewickelt werden.

Zum Beispiel müssen wir dem OS mitteilen, wo sich der bearbeitbare Textbereich auf der Seite befindet. Auf diese Weise kann das OS jede Textbearbeitungs-Benutzeroberfläche, die der Benutzer möglicherweise für die Texteingabe verwendet, wie ein IME-Kompositionsfenster, korrekt positionieren.

Die Demo-App verwendet die Methode [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds), der ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt übergeben wird, das die Grenzen des bearbeitbaren Textbereichs darstellt. Die Demo-App ruft diese Methode auf, wenn der Editor initialisiert wird, und erneut, wenn das Fenster geändert wird:

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

## Verarbeiten der Tasten Tab, Enter und anderer Textbearbeitungstasten

Das zuvor verwendete `textupdate`-Ereignis wird nicht ausgelöst, wenn der Benutzer die <kbd>Tab</kbd>- oder <kbd>Enter</kbd>-Tasten drückt, daher müssen wir diese Tasten separat behandeln.

Um sie zu behandeln, verwendet die Demo-App einen Ereignis-Listener für das [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignis auf dem Editor-Element und verwendet diesen Listener, um den Textinhalt und die Auswahl der `EditContext`-Instanz zu aktualisieren, wie unten gezeigt:

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

Der obige Code ruft auch die `updateSelection()`-Funktion auf, um die Auswahl zu aktualisieren, nachdem der Textinhalt aktualisiert wurde. Weitere Informationen finden Sie unter [Aktualisieren des Auswahldzustands und der Auswahlgrenzen](#aktualisieren_des_auswahlzustands_und_der_auswahlgrenzen).

Wir könnten den Code verbessern, indem wir andere Tastenkombinationen behandeln, wie <kbd>Strg</kbd>+<kbd>C</kbd> und <kbd>Strg</kbd>+<kbd>V</kbd>, um Text zu kopieren und einzufügen, oder <kbd>Strg</kbd>+<kbd>Z</kbd> und <kbd>Strg</kbd>+<kbd>Y</kbd>, um Textänderungen rückgängig zu machen und wiederherzustellen.

## Aktualisieren des Auswahlzustands und der Auswahlgrenzen

Wie wir zuvor gesehen haben, behandelt die `render()`-Funktion das Rendern der aktuellen Benutzerauswahl im Editor-Element. Aber die Demo-App muss auch den Auswahlzustand und die Grenzen _aktualisieren_, wenn der Benutzer die Auswahl ändert. Die EditContext-API erledigt dies nicht automatisch, da die Editor-Benutzeroberfläche möglicherweise auf andere Weise implementiert wird, z. B. durch die Verwendung eines `<canvas>`-Elements.

Um zu wissen, wann der Benutzer die Auswahl ändert, verwendet die Demo-App das [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)-Ereignis und die Methode [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection), die ein [`Selection`](/de/docs/Web/API/Selection)-Objekt liefern, das uns sagt, wo sich die Auswahl des Benutzers befindet. Mit diesen Informationen aktualisiert die Demo-App den Auswahlzustand und die Auswahlgrenzen der EditContext über die Methoden [`EditContext.updateSelection()`](/de/docs/Web/API/EditContext/updateSelection) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds). Dies wird vom OS verwendet, um das IME-Kompositionsfenster korrekt zu positionieren.

Da die EditContext-API jedoch Zeichen-Offests verwendet, um die Auswahl darzustellen, verwendet die Demo-App außerdem eine Funktion, `fromSelectionToOffsets()`, die DOM-Auswahlobjekte in Zeichen-Offests umwandelt.

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

Sie können den Code für die Funktion `fromSelectionToOffsets()` in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) sehen.

## Berechnung der Zeichenbegrenzungen

Zusätzlich zur Verwendung der Methoden [`EditContext.updateControlBounds()`](/de/docs/Web/API/EditContext/updateControlBounds) und [`EditContext.updateSelectionBounds()`](/de/docs/Web/API/EditContext/updateSelectionBounds), um dem OS zu helfen, eine eventuell verwendete Textbearbeitungs-Benutzeroberfläche zu positionieren, benötigt das OS noch eine weitere Information: die Position und Größe bestimmter Zeichen innerhalb des Editor-Elements.

Um dies zu tun, hört die Demo-App auf das [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event)-Ereignis, verwendet es, um die Grenzen einiger Zeichen im Editor-Element zu berechnen, und verwendet dann die Methode [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds), um die Zeichenbegrenzungen zu aktualisieren.

Wie bereits gesehen, kennt die EditContext-API nur Zeichen-Offests, was bedeutet, dass das `characterboundsupdate`-Ereignis die Start- und Endoffests für die Zeichen angibt, für die es Grenzen benötigt. Die Demo-App verwendet eine weitere Funktion, `fromOffsetsToRenderedTokenNodes()`, um die DOM-Elemente zu finden, in denen diese Zeichen gerendert wurden, und verwendet diese Informationen, um die erforderlichen Grenzen zu berechnen.

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

Sie können den Code für die Funktion `fromOffsetsToRenderedTokenNodes()` in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) sehen.

## Anwenden von IME-Kompositionstextformatierungen

Die Demo-App geht einen letzten Schritt, um die IME-Komposition vollständig zu unterstützen. Wenn der Benutzer Text mit einem IME verfasst, kann das IME entscheiden, dass bestimmte Teile des verfassten Textes anders formatiert werden sollten, um den Kompositionszustand anzuzeigen. Zum Beispiel könnte das IME entscheiden, den Text zu unterstreichen.

Da es die Verantwortung der Demo-App ist, den Inhalt im editierbaren Textbereich zu rendern, liegt es auch in ihrer Verantwortung, die erforderlichen IME-Formatierungen anzuwenden. Die Demo-App erreicht dies, indem sie auf das [`textformatupdate`](/de/docs/Web/API/EditContext/textformatupdate_event)-Ereignis hört, um zu erfahren, wann das IME Textformate anwenden möchte, wo und welche Formate angewendet werden sollen.

Wie im folgenden Codeausschnitt gezeigt, verwendet die Demo-App das `textformatupdate`-Ereignis und die Funktion `fromOffsetsToSelection()` erneut, um den Textrahmen zu finden, den die IME-Komposition formatieren möchte:

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

Der obige Ereignishandler ruft die Funktion `addHighlight()` auf, um den Text zu formatieren. Diese Funktion verwendet die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API), um die Textformats anzuzeigen. Die CSS Custom Highlight API bietet einen Mechanismus zum Stylen beliebiger Textbereiche, indem JavaScript verwendet wird, um die Bereiche zu erstellen und CSS, um sie zu stylen. Um diese API zu verwenden, wird das {{cssxref("::highlight", "::highlight()")}}-Pseudo-Element genutzt, um die Highlight-Stile zu definieren:

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

[`Highlight`](/de/docs/Web/API/Highlight)-Instanzen werden ebenfalls erstellt, in einem Objekt gespeichert und im [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) mit Hilfe der [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)-Eigenschaft registriert:

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

Mit diesem Vorgehen verwendet die `addHighlight()`-Funktion [`Range`](/de/docs/Web/API/Range)-Objekte für die Bereichen, die gestylt werden müssen und fügt sie dem `Highlight`-Objekt hinzu:

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

Dieser Artikel zeigte Ihnen, wie Sie die EditContext-API verwenden, um einen einfachen HTML-Code-Editor zu erstellen, der die IME-Komposition und Syntaxhervorhebung unterstützt.

Den finalen Code und die Live-Demo finden Sie auf GitHub: [Live-Demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) und [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor).

Wichtiger ist, dass dieser Artikel gezeigt hat, dass die EditContext-API viel Flexibilität hinsichtlich der Benutzeroberfläche Ihres Editors bietet. Basierend auf dieser Demo könnten Sie einen ähnlichen Texteditor erstellen, der ein `<canvas>`-Element verwendet, um den syntaxhervorgehobenen HTML-Code anstelle des `<div>`-Elements zu rendern, das die Demo verwendet. Sie könnten auch ändern, wie jedes Token gerendert wird oder wie die Auswahl gerendert wird.

## Siehe auch

- [EditContext API](/de/docs/Web/API/EditContext_API)
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
