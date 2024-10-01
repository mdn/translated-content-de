---
title: "Document: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`** Methode implementiert mehrere verschiedene Befehle. Einige davon bieten Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formularfeldern](/de/docs/Web/HTML/Element/input), [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (wenn in den [Design-Modus](/de/docs/Web/API/Document/designMode) umgeschaltet wurde) vorgesehen sind.

Um auf die Zwischenablage zuzugreifen, wird die neuere [Clipboard-API](/de/docs/Web/API/Clipboard_API) über `execCommand()` empfohlen. Für die Bearbeitungsbefehle gibt es jedoch keinen Ersatz: Im Gegensatz zur direkten DOM-Manipulation bewahren Änderungen, die durch `execCommand()` durchgeführt werden, den Rückgängig-Puffer (Bearbeitungsgeschichte).

Die meisten Befehle wirken sich auf die [Selektion](/de/docs/Web/API/Selection) des Dokuments aus. Beispielsweise formatieren einige Befehle (Fett, Kursiv usw.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Selektion ersetzen) oder eine ganze Zeile betreffen (Einrücken). Nur das derzeit aktive editierbare Element kann modifiziert werden, jedoch können einige Befehle (z.B. `copy`) ohne ein editierbares Element funktionieren.

> [!NOTE]
> Je nach Browser und Konfiguration können Änderungen, die mit `execCommand()` vorgenommen werden, die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse auslösen oder nicht. Wenn sie ausgelöst werden, werden die Handler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`

  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus beeinflusst er stattdessen die Hintergrundfarbe des umgebenden Blocks. Dies erfordert einen {{cssxref("&lt;color&gt;")}}-Wertstring als Wertargument.
    - `bold`
      - : Schaltet Fett für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder editierbar. Dies erfordert ein boolesches true/false als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen dafür, dass dieses Verhalten aktiviert ist, variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}}-String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Ab wann dieses Verhalten aktiviert ist, variiert zwischen Browsern, und seine Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in editierbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist standardmäßig seit Firefox 64 deaktiviert ([Firefox Fehler 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerelemente zum Einfügen und Löschen von Tabellenspalten/-zeilen. Die Steuerelemente sind standardmäßig seit Firefox 64 deaktiviert ([Firefox Fehler 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Griffhebel zum Vergrößern/Verkleinern von Bildern, Tabellen und absolut positionierten Elementen sowie anderen skalierbaren Objekten. Die Griffe sind standardmäßig seit Firefox 64 deaktiviert ([Firefox Fehler 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügestelle. Dies erfordert einen Schriftartnamenstring (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Dies erfordert eine ganze Zahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder an der Einfügestelle. Dies erfordert einen hexadezimalen Farbwertstring als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile mit der aktuellen Auswahl hinzu und ersetzt das Blockelement, das die Zeile enthält, falls eines vorhanden ist (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es wird ein beliebiges umgebendes Blockelement einhüllen). Erfordert einen Tag-Name-String als Wertargument. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur die Überschriften `H1` – `H6`, `ADDRESS` und `PRE`, die in Winkelklammern eingeschlossen sein müssen, wie z.B. `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Löschtaste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftenelement um eine Auswahl oder Zeile der Einfügestelle hinzu. Erfordert einen Tag-Name-String als Wertargument (z.B. `"H1"`, `"H6"`). (Nicht unterstützt von Safari.)
    - `hiliteColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert einen Farbwertstring als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Rückt die Zeile mit der Auswahl oder Einfügestelle ein. In Firefox, wenn die Auswahl mehrere Zeilen mit unterschiedlichen Einrückungen umfasst, werden nur die am wenigsten eingerückten Zeilen der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügestelle ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt einen HTML-String an der Einfügestelle ein (löscht die Auswahl). Erfordert einen gültigen HTML-String als Wertargument.
    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht die Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind identisch mit `createLink`.
    - `insertOrderedList`
      - : Erzeugt eine [nummerierte Liste](/de/docs/Web/HTML/Element/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erzeugt eine [Aufzählungsliste](/de/docs/Web/HTML/Element/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Element/p) um die Auswahl oder die aktuelle Zeile hinzu.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügestelle ein (löscht die Auswahl).
    - `italic`
      - : Schaltet Kursiv für die Auswahl oder an der Einfügestelle ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder die Einfügestelle.
    - `justifyFull`
      - : Blocksatz der Auswahl oder der Einfügestelle.
    - `justifyLeft`
      - : Linksbündiger Blocksatz der Auswahl oder der Einfügestelle.
    - `justifyRight`
      - : Rechtsbündiger Blocksatz der Auswahl oder der Einfügestelle.
    - `outdent`
      - : Macht die Einrückung der Zeile mit der Auswahl oder Einfügestelle rückgängig.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl). Für Webinhalte deaktiviert.
    - `redo`
      - : Führt den vorherigen Rückgängig-Befehl erneut aus.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des editierbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchgestrichen für die Auswahl oder an der Einfügestelle ein/aus.
    - `subscript`
      - : Schaltet [Tiefgestellt](/de/docs/Web/HTML/Element/sub) für die Auswahl oder an der Einfügestelle ein/aus.
    - `superscript`
      - : Schaltet [Hochgestellt](/de/docs/Web/HTML/Element/sup) für die Auswahl oder an der Einfügestelle ein/aus.
    - `underline`
      - : Schaltet [Unterstrichen](/de/docs/Web/HTML/Element/u) für die Auswahl oder an der Einfügestelle ein/aus.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Element/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Nutzung von HTML-Tags oder CSS für das generierte Markup um. Erfordert ein boolesches true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h., verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` abgelehnt.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` modifiziert/generiert `style`-Attribute im Markup, `false` generiert präsentationale Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungsverhalten des Browsers.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die standardmäßige Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist dies ein String, der diese Information bereitstellt. Beispielsweise erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> **Hinweis:** `document.execCommand()` gibt nur
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht
> verwenden, um die Browserunterstützung vor dem Aufrufen eines Befehls zu prüfen.

## Beispiele

Ein Beispiel für [die Verwendung von execCommand mit contentEditable-Elementen](https://codepen.io/chrisdavidmills/full/gzYjag/) auf CodePen.

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut.

Das Klicken auf die Schaltflächen "Fett" oder "Kursiv" fügt die entsprechenden Tags im Element ein, wobei `insertText` verwendet wird, um die Bearbeitungshistorie zu bewahren, sodass der Benutzer die Aktion rückgängig machen kann.

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

{{EmbedLiveSample("Using insertText", 100, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard-API](/de/docs/Web/API/Clipboard_API)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
