---
title: Verwenden der EditContext-API
slug: Web/API/EditContext_API/Guide
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{DefaultAPISidebar("EditContext API")}}

Die **[EditContext API](/de/docs/Web/API/EditContext_API)** kann verwendet werden, um Rich-Text-Editoren im Web zu erstellen, die erweiterte Texteingabeerfahrungen unterstützen, wie z. B. {{glossary("Input Method Editor")}} (IME)-Komposition, Emoji-Auswahl oder andere plattformspezifische, bearbeitungsbezogene Benutzeroberflächenoberflächen.

Dieser Artikel beschreibt die notwendigen Schritte zum Erstellen eines Texteditors mit der EditContext-API. In diesem Leitfaden werden Sie die wichtigsten Schritte durchgehen, die erforderlich sind, um einen einfachen HTML-Code-Editor zu erstellen, der die Syntax des Codes beim Eingeben hervorhebt und die IME-Komposition unterstützt.

## Endgültiger Code und Live-Demo

Um den endgültigen Code zu sehen, schauen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor) auf GitHub an. Es ist eine gute Idee, den Quellcode offen zu halten, während Sie lesen, da das Tutorial nur die wichtigsten Teile des Codes zeigt.

Der Quellcode ist in den folgenden Dateien organisiert:

- [index.html](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/index.html) enthält das Editor-Benutzerschnittstellenelement und lädt den erforderlichen CSS- und JavaScript-Code für die Demo.
- [styles.css](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/styles.css) enthält die Stile für die Editor-Benutzerschnittstelle.
- [editor.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/editor.js) enthält den JavaScript-Code, der die Editor-Benutzerschnittstelle einrichtet, den HTML-Code rendert und Benutzereingaben verarbeitet.
- [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) enthält den JavaScript-Code, der den HTML-Code in separate Token aufteilt, wie z. B. öffnende Tags, schließende Tags und Textknoten.
- [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) enthält den JavaScript-Code, der zwischen den Zeichenoffsets, die die EditContext-API verwendet, und den DOM-Knoten, die der Browser für Textselektionen verwendet, konvertiert.

Um die Live-Demo zu nutzen, öffnen Sie [Edit Context API: HTML editor demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) in einem Browser, der die EditContext-API unterstützt.

## Erstellung der Editor-Benutzerschnittstelle

Der erste Schritt besteht darin, die Benutzeroberfläche für den Editor zu erstellen. Der Editor ist ein {{HTMLElement("div")}}-Element mit dem [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)-Attribut, das auf `false` gesetzt ist, um die Rechtschreibprüfung zu deaktivieren:

```html
<div id="html-editor" spellcheck="false"></div>
```

Um das Editorelement zu stylen, wird der folgende CSS-Code verwendet. Der Code sorgt dafür, dass der Editor den gesamten Ansichtsbereich ausfüllt und scrollt, wenn zu viel Inhalt vorhanden ist, um hineinzupassen. Die {{cssxref("white-space")}}-Eigenschaft wird ebenfalls verwendet, um Leerzeichenzeichen zu erhalten, die im HTML-Eingabetext gefunden wurden, und die {{cssxref("tab-size")}}-Eigenschaft wird verwendet, um Tabulatorzeichen als zwei Leerzeichen zu rendern. Schließlich werden einige Standardhintergrund-, Text- und Caret-Farben gesetzt:

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

Um ein Element im Web bearbeitbar zu machen, verwendet man meistens ein {{HTMLElement("input")}}-Element, ein {{HTMLElement("textarea")}}-Element oder das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut.

Mit der EditContext-API hingegen können Sie andere Arten von Elementen ohne die Verwendung eines Attributs bearbeitbar machen. Um die Liste der Elemente zu sehen, die mit der EditContext-API verwendet werden können, siehe [Mögliche Elemente](/de/docs/Web/API/HTMLElement/editContext#possible_elements) auf der Seite zur `editContext`-Eigenschaft des HTMLElement.

Um den Editor bearbeitbar zu machen, erstellt die Demo-App eine {{domxref("EditContext")}}-Instanz, übergibt einigen anfänglichen HTML-Text an den Konstruktor, und setzt dann die {{domxref("HTMLElement.editContext", "editContext")}}-Eigenschaft des Editorelements auf die `EditContext`-Instanz:

```js
// Holen Sie sich das Editorelement aus dem DOM.
const editorEl = document.getElementById("html-editor");

// Erstellen Sie die EditContext-Instanz.
const editContext = new EditContext({
  text: "<html>\n  <body id=foo>\n    <h1 id='header'>Cool Title</h1>\n    <p class=\"wow\">hello<br/>How are you? test</p>\n  </body>\n</html>",
});

// Setzen Sie den Wert der editContext-Eigenschaft des Editors.
editorEl.editContext = editContext;
```

Diese Codezeilen machen das Editorelement fokussierbar. Das Eingeben von Text in das Element löst das {{domxref("EditContext.textupdate_event", "textupdate")}}-Ereignis auf der `EditContext`-Instanz aus.

## Text und Benutzerauswahl rendern

Um den HTML-Code mit Syntaxhervorhebung im Editor zu rendern, wenn der Benutzer Text eingibt, verwendet die Demo-App eine Funktion namens `render()`, die aufgerufen wird, wenn neuer Text eingegeben wird, wenn Zeichen gelöscht werden oder wenn die Auswahl geändert wird.

### Tokenisierung des HTML-Codes

Eines der ersten Dinge, die die `render()`-Funktion tut, ist die Tokenisierung des HTML-Textinhalts. Die Tokenisierung des HTML-Textinhalts ist notwendig, um die HTML-Syntax hervorzuheben, und beinhaltet das Lesen der HTML-Codezeichenfolge und das Bestimmen, wo jedes öffnende Tag, schließende Tag, Attribut, Kommentarknoten und Textknoten beginnt und endet.

Die Demo-App verwendet die `tokenizeHTML()`-Funktion, um dies zu erreichen, die über die Zeichenfolge iteriert, Zeichen für Zeichen, während sie eine Zustandsmaschine aufrechterhält. Sie können sich den Quellcode für die `tokenizeHTML()`-Funktion in [tokenizer.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/tokenizer.js) auf GitHub ansehen.

Die Funktion wird wie folgt in die HTML-Datei der Demo-App importiert:

```js
import { tokenizeHTML } from "./tokenizer.js";
```

### Den Text rendern

Jedes Mal, wenn die `render()`-Funktion aufgerufen wird, also wenn der Benutzer Text eingibt oder wenn sich die Auswahl ändert, entfernt die Funktion den Inhalt im Editorelement und rendert dann jedes Token als separates HTML-Element:

```js
// Speichert die Liste der HTML-Token.
let currentTokens = [];

function render(text, selectionStart, selectionEnd) {
  // Leeren Sie den Editor. Wir rendern alles neu.
  editorEl.textContent = "";

  // Tokenisieren Sie den Text.
  currentTokens = tokenizeHTML(text);

  for (const token of currentTokens) {
    // Rendern Sie jedes Token als Span-Element.
    const span = document.createElement("span");
    span.classList.add(`token-${token.type}`);
    span.textContent = token.value;

    // Fügen Sie das Span-Element dem Editor-Element hinzu.
    editorEl.appendChild(span);

    // Speichern Sie den neuen DOM-Knoten als Eigenschaft des Tokens
    // im currentTokens-Array. Wir benötigen ihn später erneut
    // in fromOffsetsToRenderedTokenNodes.
    token.node = span;
  }

  // Der Code zum Rendern der Textauswahl wird der Kürze halber weggelassen.
  // Siehe "Rendering the selection", weiter unten.
  // ...
}
```

Die EditContext-API ermöglicht es, die Art und Weise zu kontrollieren, wie der bearbeitete Text gerendert wird. Die obige Funktion rendert es mithilfe von HTML-Elementen, aber es könnte auch auf andere Weise gerendert werden, einschließlich der Darstellung in einem `<canvas>`-Element.

Die Demo-App führt die `render()`-Funktion bei Bedarf aus. Dies umfasst einmal beim Start der App und dann erneut, wenn der Benutzer Text eingibt, indem das {{domxref("EditContext.textupdate_event", "textupdate")}}-Ereignis abgehört wird:

```js
// Hören Sie das textupdate-Ereignis des EditContext ab.
// Dies teilt uns mit, wann eine Texteingabe erfolgt. Wir verwenden es, um die Ansicht neu zu rendern.
editContext.addEventListener("textupdate", (e) => {
  render(editContext.text, e.selectionStart, e.selectionEnd);
});

// Führen Sie das erste Rendering durch.
render(editContext.text, editContext.selectionStart, editContext.selectionEnd);
```

### Die Token stylen

Wie im vorherigen Codebeispiel der `render()`-Funktion zu sehen ist, wird jedem Token ein Klassenname gegeben, der dem Typ des Tokens entspricht. Die Demo-App verwendet diesen Klassennamen, um die Tokens mithilfe von CSS zu stylen, wie unten gezeigt:

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

Obwohl die Demo-App ein `<div>`-Element für den Editor verwendet, das bereits die Anzeige eines blinkenden Textcursors und das Hervorheben von Benutzerauswahlen unterstützt, erfordert die EditContext-API dennoch das Rendern der Auswahl. Dies liegt daran, dass die EditContext-API mit anderen Arten von Elementen verwendet werden kann, die diese Verhaltensweisen nicht unterstützen. Das Selbstrendern der Auswahl gibt uns auch mehr Kontrolle darüber, wie die Auswahl angezeigt wird. Schließlich wird der HTML-Inhalt des Editorelements jedes Mal, wenn die `render()`-Funktion ausgeführt wird, gelöscht, sodass jede Auswahl, die der Benutzer möglicherweise vorgenommen hat, das nächste Mal, wenn die `render()`-Funktion ausgeführt wird, verloren geht.

Um die Auswahl zu rendern, verwendet die Demo-App die Methode {{domxref("Selection.setBaseAndExtent()")}} am Ende der `render()`-Funktion. Um die Methode `setBaseAndExtent()` zu verwenden, benötigen wir ein Paar DOM-Knoten und Zeichenoffsets, die den Anfang und das Ende der Auswahl darstellen. Die EditContext-API speichert jedoch den Status für die aktuelle Auswahl nur als ein Paar von Zeichenstart- und -end-Offsets im gesamten Bearbeitungspuffer. Der Code der Demo-App verwendet eine weitere Funktion namens `fromOffsetsToSelection()`, die verwendet wird, um diese Zeichenoffsets in vier Werte zu konvertieren:

- Der DOM-Knoten, der den Anfang der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Auswahlbeginns innerhalb des Startknotens darstellt.
- Der DOM-Knoten, der das Ende der Auswahl enthält.
- Eine Zahl, die die Zeichenposition des Auswahlendes innerhalb des Endknotens darstellt.

```js
function render(text, selectionStart, selectionEnd) {
  // ...
  // Der Anfang der Render-Funktion wird der Kürze halber weggelassen.

  // Konvertieren Sie die Start-/End-Offsets in eine DOM-Auswahl.
  const { anchorNode, anchorOffset, extentNode, extentOffset } =
    fromOffsetsToSelection(selectionStart, selectionEnd);

  // Rendern Sie die Auswahl im Editorelement.
  document
    .getSelection()
    .setBaseAndExtent(anchorNode, anchorOffset, extentNode, extentOffset);
}
```

Sie können den Code für die Funktion `fromOffsetsToSelection()` in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) sehen.

## Aktualisieren der Steuergrenzen

Die EditContext-API bietet uns viel Flexibilität, um unsere eigene Texteditor-Benutzerschnittstelle zu definieren. Das bedeutet jedoch auch, dass wir einige Dinge handhaben müssen, die normalerweise vom Browser oder Betriebssystem (OS) gehandhabt werden.

Zum Beispiel müssen wir dem OS mitteilen, wo sich die bearbeitbare Textregion auf der Seite befindet. Auf diese Weise kann das OS jede Textbearbeitungs-Benutzeroberfläche, mit der der Benutzer möglicherweise Text komponiert, wie z. B. ein IME-Kompositionsfenster, korrekt positionieren.

Die Demo-App verwendet die Methode {{domxref("EditContext.updateControlBounds()")}}, indem sie ihr ein {{domxref("DOMRect")}}-Objekt bereitstellt, das die Grenzen der bearbeitbaren Textregion darstellt. Die Demo-App ruft diese Methode auf, wenn der Editor initialisiert wird, und erneut, wenn das Fenster Größenänderungen erfährt:

```js
function updateControlBounds() {
  // Holen Sie das DOMRect-Objekt für das Editorelement.
  const editorBounds = editorEl.getBoundingClientRect();

  // Aktualisieren Sie die Steuergrenzen der EditContext-Instanz.
  editContext.updateControlBounds(editorBounds);
}

// Rufen Sie die Funktion updateControlBounds auf, wenn der Editor initialisiert wird,
updateControlBounds();

// Und rufen Sie sie erneut auf, wenn das Fenster Größenänderungen erfährt.
window.addEventListener("resize", updateControlBounds);
```

## Handhabung von Tab, Enter und anderen Textbearbeitungstasten

Das `textupdate`-Ereignis, das im vorherigen Abschnitt verwendet wurde, wird nicht ausgelöst, wenn der Benutzer die <kbd>Tab</kbd>- oder <kbd>Enter</kbd>-Tasten drückt. Daher müssen wir diese Tasten separat handhaben.

Um sie zu handhaben, verwendet die Demo-App einen Ereignis-Listener für das {{domxref("Element.keydown_event", "keydown")}}-Ereignis auf dem Editorelement und verwendet diesen Listener, um den Textinhalt der `EditContext`-Instanz und die Auswahl zu aktualisieren, wie unten gezeigt:

```js
// Handhaben Sie Tastendrücke, die nicht bereits von der EditContext verarbeitet werden.
editorEl.addEventListener("keydown", (e) => {
  // EditContext.updateText() erwartet, dass die Start- und End-Offsets
  // in der richtigen Reihenfolge sind, aber der aktuelle Auswahlzustand
  // könnte rückwärts sein.
  const start = Math.min(editContext.selectionStart, editContext.selectionEnd);
  const end = Math.max(editContext.selectionStart, editContext.selectionEnd);

  // Handhabung der Tab-Taste.
  if (e.key === "Tab") {
    // Verhindern Sie das Standardverhalten der Tab-Taste.
    e.preventDefault();

    // Verwenden Sie die Methode EditContext.updateText, um ein Tabulatorzeichen
    // an der aktuellen Auswahlposition einzufügen.
    editContext.updateText(start, end, "\t");

    // Aktualisieren Sie die Auswahl, um sich nach dem eingefügten Tabulatorzeichen zu befinden.
    updateSelection(start + 1, start + 1);

    // Rendern Sie den Editor erneut.
    render(
      editContext.text,
      editContext.selectionStart,
      editContext.selectionEnd,
    );
  }

  // Handhabung der Enter-Taste.
  if (e.key === "Enter") {
    // Verwenden Sie die Methode EditContext.updateText, um ein Zeilenumbruchzeichen
    // an der aktuellen Auswahlposition einzufügen.
    editContext.updateText(start, end, "\n");

    // Aktualisieren Sie die Auswahl, um sich nach dem eingefügten Zeilenumbruchzeichen zu befinden.
    updateSelection(start + 1, start + 1);

    // Rendern Sie den Editor erneut.
    render(
      editContext.text,
      editContext.selectionStart,
      editContext.selectionEnd,
    );
  }
});
```

Der obige Code ruft auch die Funktion `updateSelection()` auf, um die Auswahl nach der Aktualisierung des Textinhalts zu aktualisieren. Weitere Informationen finden Sie unter [Aktualisierung des Auswahlstatus und der Auswahlgrenzen](#aktualisierung_des_auswahlstatus_und_der_auswahlgrenzen), unten.

Wir könnten den Code verbessern, indem wir andere Tastenkombinationen wie <kbd>Ctrl</kbd>+<kbd>C</kbd> und <kbd>Ctrl</kbd>+<kbd>V</kbd> zum Kopieren und Einfügen von Text oder <kbd>Ctrl</kbd>+<kbd>Z</kbd> und <kbd>Ctrl</kbd>+<kbd>Y</kbd> zum Rückgängigmachen und Wiederherstellen von Textänderungen behandeln.

## Aktualisierung des Auswahlstatus und der Auswahlgrenzen

Wie wir bereits gesehen haben, kümmert sich die `render()`-Funktion um das Rendern der aktuellen Benutzerauswahl im Editorelement. Aber die Demo-App muss auch den Auswahlstatus und die Grenzen aktualisieren, wenn der Benutzer die Auswahl ändert. Die EditContext-API macht das nicht automatisch, wieder, weil die Editor-Benutzeroberfläche auf andere Weise implementiert sein könnte, z. B. durch die Verwendung eines `<canvas>`-Elements.

Um zu wissen, wann der Benutzer die Auswahl ändert, verwendet die Demo-App das {{domxref("Document/selectionchange_event", "selectionchange")}}-Ereignis und die Methode {{domxref("Document.getSelection()")}}, die ein {{domxref("Selection")}}-Objekt bereitstellt, das uns mitteilt, wo die Auswahl des Benutzers ist. Mithilfe dieser Informationen aktualisiert die Demo-App den Auswahlstatus und die Auswahlgrenzen der EditContext-Instanz, indem sie die Methoden {{domxref("EditContext.updateSelection()")}} und {{domxref("EditContext.updateSelectionBounds()")}} verwendet. Dies wird vom OS verwendet, um das IME-Kompositionsfenster korrekt zu positionieren.

Da die EditContext-API jedoch Zeichenoffsets verwendet, um die Auswahl darzustellen, verwendet die Demo-App auch eine Funktion namens `fromSelectionToOffsets()`, die DOM-Auswahlobjekte in Zeichenoffsets umwandelt.

```js
// Hören Sie auf Auswahländerungsereignisse, um der 
// EditContext mitzuteilen, wo sie sich befindet.
document.addEventListener("selectionchange", () => {
  const selection = document.getSelection();

  // Konvertieren Sie die DOM-Auswahl in Zeichenoffsets.
  const offsets = fromSelectionToOffsets(selection, editorEl);
  if (offsets) {
    updateSelection(offsets.start, offsets.end);
  }
});

// Aktualisieren Sie die Auswahl und die Auswahlgrenzen im EditContext-Objekt.
// Dies hilft dem OS, das IME-Kompositionsfenster korrekt zu positionieren.
function updateSelection(start, end) {
  editContext.updateSelection(start, end);
  // Holen Sie sich die Grenzen der Auswahl.
  editContext.updateSelectionBounds(
    document.getSelection().getRangeAt(0).getBoundingClientRect(),
  );
}
```

Sie können den Code für die Funktion `fromSelectionToOffsets()` in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) sehen.

## Berechnung der Zeichenbegrenzungen

Neben der Verwendung der Methoden {{domxref("EditContext.updateControlBounds()")}} und {{domxref("EditContext.updateSelectionBounds()")}}, um dem OS zu helfen, eine Texteingabe-Benutzeroberfläche, die der Benutzer möglicherweise verwendet, korrekt zu positionieren, benötigt das OS noch eine weitere Information: die Position und Größe bestimmter Zeichen innerhalb des Editorelements.

Um dies zu tun, hört die Demo-App das {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}}-Ereignis ab, verwendet es, um die Begrenzungen einiger der Zeichen im Editorelement zu berechnen, und verwendet dann die Methode {{domxref("EditContext.updateCharacterBounds()")}}, um die Zeichenbegrenzungen zu aktualisieren.

Wie bereits zuvor festgestellt, kennt die EditContext-API nur Zeichenoffsets, was bedeutet, dass das `characterboundsupdate`-Ereignis die Start- und End-Offsets für die Zeichen bereitstellt, für die es Begrenzungen benötigt. Die Demo-App verwendet eine weitere Funktion, `fromOffsetsToRenderedTokenNodes()`, um die DOM-Elemente zu finden, in denen diese Zeichen gerendert wurden, und verwendet diese Informationen, um die erforderlichen Grenzen zu berechnen.

```js
// Hören Sie das characterboundsupdate-Ereignis ab, um zu wissen, wann Zeichenbegrenzungs-
// Informationen benötigt werden und welche Zeichen Begrenzungen benötigen.
editContext.addEventListener("characterboundsupdate", (e) => {
  // Informationen zu den Tokenknoten im Bereich abrufen.
  const tokenNodes = fromOffsetsToRenderedTokenNodes(
    currentTokens,
    e.rangeStart,
    e.rangeEnd,
  );

  // Konvertieren Sie diese Informationen in eine Liste von DOMRect-Objekten.
  const charBounds = tokenNodes.map(({ node, nodeOffset, charOffset }) => {
    const range = document.createRange();
    range.setStart(node.firstChild, charOffset - nodeOffset);
    range.setEnd(node.firstChild, charOffset - nodeOffset + 1);
    return range.getBoundingClientRect();
  });

  // Lassen Sie die EditContext-Instanz von den Zeichenbegrenzungen wissen.
  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

Sie können den Code für die Funktion `fromOffsetsToRenderedTokenNodes()` in der Datei [converter.js](https://github.com/mdn/dom-examples/blob/main/edit-context/html-editor/converter.js) sehen.

## Anwenden von IME-Kompositionstextformaten

Die Demo-App durchläuft einen letzten Schritt, um die IME-Komposition vollständig zu unterstützen. Wenn der Benutzer Text mit einem IME komponiert, kann das IME entscheiden, dass bestimmte Teile des zu komponierenden Textes anders formatiert werden sollen, um den Kompositionszustand anzuzeigen. Zum Beispiel könnte das IME entscheiden, den Text zu unterstreichen.

Da die Demo-App für das Rendern des Inhalts in der bearbeitbaren Textregion verantwortlich ist, obliegt ihr auch die Verantwortung, das erforderliche IME-Format anzuwenden. Die Demo-App erreicht dies, indem sie das {{domxref("EditContext.textformatupdate_event", "textformatupdate")}}-Ereignis abhört, um zu wissen, wann das IME Textformate anwenden möchte, wo und welche Formate anzuwenden sind.

Wie im folgenden Code-Snippet gezeigt, verwendet die Demo-App das `textformatupdate`-Ereignis und die Funktion `fromOffsetsToSelection()` erneut, um den Textbereich zu finden, den die IME-Komposition formatieren möchte:

```js
editContext.addEventListener("textformatupdate", (e) => {
  // Holen Sie sich die Liste der Formate, die das IME anwenden möchte.
  const formats = e.getTextFormats();

  for (const format of formats) {
    // Finden Sie die DOM-Auswahl, die dem Bereich des Formats entspricht.
    const selection = fromOffsetsToSelection(
      format.rangeStart,
      format.rangeEnd,
      editorEl,
    );

    // Heben Sie die Auswahl mit dem richtigen Stil und der richtigen Dicke hervor.
    addHighlight(selection, format.underlineStyle, format.underlineThickness);
  }
});
```

Der obige Ereignishandler ruft die Funktion namens `addHighlight()` auf, um den Text zu formatieren. Diese Funktion verwendet die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API), um die Textformate zu rendern. Die CSS Custom Highlight API bietet einen Mechanismus zum Stylen beliebiger Textbereiche, indem JavaScript verwendet wird, um die Bereiche zu erstellen, und CSS, um sie zu stylen. Um diese API zu verwenden, wird das {{cssxref("::highlight", "::highlight()")}}-Pseudo-Element verwendet, um die Hervorhebungsstile zu definieren:

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

/* Andere Hervorhebungen werden der Kürze halber weggelassen. */
```

{{domxref("Highlight")}}-Instanzen werden ebenfalls erstellt, in einem Objekt gespeichert und im {{domxref("HighlightRegistry")}} mithilfe der {{domxref("CSS/highlights_static", "CSS.highlights")}}-Eigenschaft registriert:

```js
// Instanzen von CSS Custom Highlight-Objekten, verwendet zum Rendern
// der IME-Kompositionstextformate.
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

Mit diesem im Blick verwendet die `addHighlight()`-Funktion {{domxref("Range")}}-Objekte für die Bereiche, die formatiert werden müssen, und fügt sie dem `Highlight`-Objekt hinzu:

```js
function addHighlight(selection, underlineStyle, underlineThickness) {
  // Holen Sie sich das richtige CSS Custom Highlight-Objekt je nach
  // Unterstreichungsstil und -dicke.
  const highlight =
    imeHighlights[
      `${underlineStyle.toLowerCase()}-${underlineThickness.toLowerCase()}`
    ];

  if (highlight) {
    // Fügen Sie dem Highlight-Objekt einen Bereich hinzu.
    const range = document.createRange();
    range.setStart(selection.anchorNode, selection.anchorOffset);
    range.setEnd(selection.extentNode, selection.extentOffset);
    highlight.add(range);
  }
}
```

## Zusammenfassung

Dieser Artikel zeigte Ihnen, wie Sie die EditContext-API verwenden, um einen einfachen HTML-Code-Editor zu erstellen, der IME-Komposition und Syntaxhervorhebung unterstützt.

Der endgültige Code und die Live-Demo sind auf GitHub zu finden: [Live-Demo](https://mdn.github.io/dom-examples/edit-context/html-editor/) und [Quellcode](https://github.com/mdn/dom-examples/tree/main/edit-context/html-editor).

Wesentlich wichtiger ist, dass dieser Artikel Ihnen zeigte, dass die EditContext-API viel Flexibilität in Bezug auf die Benutzeroberfläche Ihres Editors bietet. Basierend auf dieser Demo könnten Sie einen ähnlichen Texteditor erstellen, der ein `<canvas>`-Element verwendet, um den syntaxhervorgehobenen HTML-Code anstelle des `<div>` zu rendern, den die Demo verwendet. Sie könnten auch ändern, wie jedes Token gerendert wird oder wie die Auswahl gerendert wird.

## Siehe auch

- [EditContext API](/de/docs/Web/API/EditContext_API)
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
