---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige von ihnen bieten Zugang zur Zwischenablage, während andere für die Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (wenn sie in den [Design-Modus](/de/docs/Web/API/Document/designMode) geschaltet sind) gedacht sind.

Um auf die Zwischenablage zuzugreifen, wird die neuere [Clipboard-API](/de/docs/Web/API/Clipboard_API) über `execCommand()` empfohlen. Allerdings gibt es keinen Ersatz für die Bearbeitungsbefehle: Im Gegensatz zur direkten DOM-Manipulation bewahren die von `execCommand()` vorgenommenen Änderungen den Undo-Puffer (Bearbeitungsverlauf) auf.

Die meisten Befehle wirken sich auf die [Selektion](/de/docs/Web/API/Selection) des Dokuments aus. Beispielsweise formatieren einige Befehle (fett, kursiv, etc.) den gegenwärtig ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder sich auf eine gesamte Zeile auswirken (Einrückung). Nur das aktuell aktive bearbeitbare Element kann verändert werden, aber einige Befehle (z.B. `copy`) können auch ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` durchgeführt werden, lösen möglicherweise die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse aus, je nach Browser und Konfiguration. Falls ausgelöst, werden die Handler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen besonders vorsichtig mit solchen rekursiven Aufrufen sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Seit Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe stets fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`

  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus beeinflusst es stattdessen die Hintergrundfarbe des enthaltenden Blocks. Dies erfordert eine {{cssxref("&lt;color&gt;")}}-Wert-Zeichenfolge als Wert-Argument.
    - `bold`
      - : Schaltet Fett für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert ein boolesches true/false als Wert-Argument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen für das Aktivieren dieses Verhaltens unterscheiden sich je nach Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}}-String als Wert-Argument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das möglicherweise ein Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert wird, variiert zwischen den Browsern, und seine Bedingungen haben sich im Laufe der Zeit weiterentwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für die Anwendungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textregionen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen zum Einfügen und Löschen von Tabellenzeilen/-spalten. Die Steuerungen sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe an Bildern, Tabellen und absolut positionierten Elementen und anderen änderbaren Objekten. Die Griffe sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftnamen für die Auswahl oder an der Einfügestelle. Dies erfordert einen Schriftnamen-String (wie `"Arial"`) als Wert-Argument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Dies erfordert eine Ganzzahl von `1` - `7` als Wert-Argument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder an der Einfügestelle. Dies erfordert einen Hexadezimal-Farbwert-String als Wert-Argument.
    - `formatBlock`
      - : Fügt ein HTML-Block-Element um die Zeile ein, die die aktuelle Auswahl enthält, und ersetzt das Block-Element, das die Zeile enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es umschließt jedes enthaltende Block-Element). Erfordert einen Tag-Namen-String als Wert-Argument. Praktisch alle Block-Elemente können verwendet werden. (Legacy Edge unterstützt nur Überschrifts-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitzen Klammern eingeschlossen werden müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen im Voraus des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29) Position, identisch mit der Betätigung der Delete-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder Einfügestelle-Zeile hinzu. Erfordert den Tag-Namen-String als Wert-Argument (d.h. `"H1"`, `"H6"`). (Nicht unterstützt von Safari.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert einen Farbwert-String als Wert-Argument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Einrücken der Zeile, die die Auswahl oder Einfügestelle enthält. In Firefox, wenn sich die Auswahl über mehrere Zeilen mit unterschiedlichen Einrückungen erstreckt, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Block-Element in zwei Teile trennt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügestelle ein oder ersetzt damit die Auswahl.
    - `insertHTML`
      - : Fügt einen HTML-String an der Einfügestelle ein (löscht die Auswahl). Erfordert einen gültigen HTML-String als Wert-Argument.
    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht die Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wert-Argument. Die Anforderungen an diesen String sind die gleichen wie bei `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügestelle ein (löscht die Auswahl).
    - `italic`
      - : Schaltet Kursiv für die Auswahl oder an der Einfügestelle ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder Einfügestelle.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder Einfügestelle.
    - `justifyLeft`
      - : Linksbündiges Justieren der Auswahl oder Einfügestelle.
    - `justifyRight`
      - : Rechtsbündiges Justieren der Auswahl oder Einfügestelle.
    - `outdent`
      - : Entfernt die Einrückung der Zeile, die die Auswahl oder Einfügestelle enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl). Für Web-Inhalte deaktiviert.
    - `redo`
      - : Führt den vorherigen Rückgängig-Befehl erneut aus.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichen für die Auswahl oder an der Einfügestelle ein/aus.
    - `subscript`
      - : Schaltet [Tiefgestellt](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder an der Einfügestelle ein/aus.
    - `superscript`
      - : Schaltet [Hochgestellt](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder an der Einfügestelle ein/aus.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder an der Einfügestelle ein/aus.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup ein oder aus. Erfordert ein boolesches true/false als Wert-Argument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` als veraltet erklärt.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` ändert/generiert `style`-Attribute im Markup, `false` generiert präsentationsbezogene Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Link-Verhalten des Browsers.

- `aShowDefaultUI`
  - : Ein Boolean-Wert, der angibt, ob die Standard-Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist es ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein Boolean-Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE] > `document.execCommand()` gibt nur dann
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Browserunterstützung zu überprüfen, bevor Sie einen Befehl aufrufen.

## Beispiele

Ein Beispiel, [wie execCommand mit contentEditable-Elementen verwendet wird](https://codepen.io/chrisdavidills/full/gzYjag/) auf CodePen.

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut.

Das Klicken auf die Schaltflächen "Bold" oder "Italic" fügt die entsprechenden Tags in das Element ein, wobei `insertText` verwendet wird, um den Bearbeitungsverlauf zu bewahren, sodass der Benutzer die Aktion rückgängig machen kann.

#### HTML

```html
<h2>textarea</h2>

<div class="actions" data-for="textarea">
  <button data-el="b">Bold</button>
  <button data-el="i">Italic</button>
</div>

<textarea class="editarea">Some text.</textarea>

<h2>contenteditable</h2>

<div class="actions" data-for="pre">
  <button data-el="b">Bold</button>
  <button data-el="i">Italic</button>
</div>

<pre contenteditable="true" class="editarea">Some text.</pre>
```

#### JavaScript

```js
// Prepare action buttons
const buttonContainers = document.querySelectorAll(".actions");

for (const buttonContainer of buttonContainers) {
  const buttons = buttonContainer.querySelectorAll("button");
  const pasteTarget = buttonContainer.getAttribute("data-for");

  for (const button of buttons) {
    const elementName = button.getAttribute("data-el");
    button.addEventListener("click", () =>
      insertText(`<${elementName}></${elementName}>`, pasteTarget),
    );
  }
}

// Inserts text at cursor, or replaces selected text
function insertText(newText, selector) {
  const textarea = document.querySelector(selector);
  textarea.focus();

  let pasted = true;
  try {
    if (!document.execCommand("insertText", false, newText)) {
      pasted = false;
    }
  } catch (e) {
    console.error("error caught:", e);
    pasted = false;
  }

  if (!pasted) {
    console.error("paste unsuccessful, execCommand not supported");
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Verwendung von insertText", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard-API](/de/docs/Web/API/Clipboard_API)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
