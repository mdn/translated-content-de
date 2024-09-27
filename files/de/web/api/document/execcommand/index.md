---
title: "Document: execCommand()-Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`**-Methode implementiert verschiedene Befehle. Einige davon bieten Zugriff auf die Zwischenablage, während andere zur Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Element/input), [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (wenn im [Designmodus](/de/docs/Web/API/Document/designMode)) verwendet werden.

Zum Zugriff auf die Zwischenablage wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen. Für die Bearbeitungsbefehle gibt es jedoch keinen Ersatz: Im Gegensatz zur direkten DOM-Manipulation bewahren die von `execCommand()` ausgeführten Änderungen den Undo-Puffer (Bearbeitungsverlauf).

Die meisten Befehle betreffen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Einige Befehle (fett, kursiv usw.) formatieren den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (ersetzen die Auswahl) oder eine ganze Zeile beeinflussen (Einzug). Nur das aktuell aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z.B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) auslösen oder nicht. Falls ausgelöst, werden die Behandler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, besonders wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 werden verschachtelte `execCommand()`-Aufrufe immer fehlschlagen, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`

  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus beeinflusst es stattdessen die Hintergrundfarbe des umschließenden Blocks. Es erfordert einen {{cssxref("&lt;color&gt;")}}-Wert-String als Wertargument.
    - `bold`
      - : Schaltet fettgedruckt an/aus für die Auswahl oder den Einfügepunkt.
    - `contentReadOnly`
      - : Macht das Dokument entweder schreibgeschützt oder bearbeitbar. Erfordert ein boolesches true/false als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren von einem Browser zum anderen und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um herauszufinden, ob Sie es in Ihrem Fall nutzen können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur, wenn eine Auswahl vorhanden ist. Erfordert einen [URI](/de/docs/Glossary/URI)-String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein einzelnes Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen Browsern, und seine Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder den Einfügepunkt hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist standardmäßig deaktiviert seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Zeilen-/Spalten-Einfüge- und Löschsteuerungen für Tabellen. Die Steuerungen sind standardmäßig deaktiviert seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffleisten für Bilder, Tabellen und absolut positionierte Elemente und andere veränderbare Objekte. Die Griffleisten sind standardmäßig deaktiviert seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder am Einfügepunkt. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder am Einfügepunkt. Dies erfordert einen Ganzzahlwert von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder am Einfügepunkt. Dies erfordert einen Hexadezimalwert-String als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blocklevel-Element um die Zeile ein, die die aktuelle Auswahl enthält, und ersetzt das Blockelement, das die Zeile enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es umschließt jedes enthaltene Blockelement). Erfordert einen Tag-Namen-String als Wertargument. Praktisch alle Blocklevel-Elemente können verwendet werden. (Legacy Edge unterstützt nur Überschriftstags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitzen Klammern umschlossen sein müssen, z.B. `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder eine Zeile mit Einfügepunkt hinzu. Erfordert den Tag-Namen-String als Wertargument (d.h., `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `hiliteColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder am Einfügepunkt. Erfordert einen Farbwert-String als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder am Einfügepunkt hinzu.
    - `indent`
      - : Einzieht die Zeile, die die Auswahl oder den Einfügepunkt enthält. In Firefox, wenn die Auswahl mehrere Zeilen auf verschiedenen Einzugsebenen umfasst, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element am Einfügepunkt ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt einen HTML-String am Einfügepunkt ein (löscht die Auswahl). Erfordert einen gültigen HTML-String als Wertargument.
    - `insertImage`
      - : Fügt ein Bild am Einfügepunkt ein (löscht die Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind dieselben wie bei `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Element/ol) für die Auswahl oder am Einfügepunkt.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste ohne Ordnung](/de/docs/Web/HTML/Element/ul) für die Auswahl oder am Einfügepunkt.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Element/p) um die Auswahl oder die aktuelle Zeile hinzu.
    - `insertText`
      - : Fügt den angegebenen Klartext am Einfügepunkt ein (löscht die Auswahl).
    - `italic`
      - : Schaltet kursiv an/aus für die Auswahl oder am Einfügepunkt.
    - `justifyCenter`
      - : Zentriert die Auswahl oder Einfügepunkt.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder Einfügepunkt.
    - `justifyLeft`
      - : Linksbündiger Blocksatz für die Auswahl oder Einfügepunkt.
    - `justifyRight`
      - : Rechtsbündigt die Auswahl oder den Einfügepunkt.
    - `outdent`
      - : Entfernt den Einzug der Zeile, die die Auswahl oder den Einfügepunkt enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage am Einfügepunkt ein (ersetzt die aktuelle Auswahl). Für Webinhalte deaktiviert.
    - `redo`
      - : Redo des vorherigen Undo-Befehls.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichen an/aus für die Auswahl oder am Einfügepunkt.
    - `subscript`
      - : Schaltet [Tiefstellung](/de/docs/Web/HTML/Element/sub) an/aus für die Auswahl oder am Einfügepunkt.
    - `superscript`
      - : Schaltet [Hochstellung](/de/docs/Web/HTML/Element/sup) an/aus für die Auswahl oder am Einfügepunkt.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Element/u) an/aus für die Auswahl oder am Einfügepunkt.
    - `undo`
      - : Rückgängig machen des zuletzt ausgeführten Befehls.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Element/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das erzeugte Markup um. Erfordert ein boolesches true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h., `false` verwenden, um CSS zu verwenden,
        > `true` verwenden, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` als veraltet markiert.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` ändert/erzeugt `style`-Attribute im Markup, false erzeugt präsentationale Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungsverhalten des Browsers.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die Standardbenutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist dies ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> **Hinweis:** `document.execCommand()` gibt nur dann
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht
> verwenden, um die Unterstützung des Browsers vor dem Aufruf eines Befehls zu überprüfen.

## Beispiele

Ein Beispiel für [wie man execCommand mit contentEditable-Elementen verwendet](https://codepen.io/chrisdavidmills/full/gzYjag/) auf CodePen.

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element, das mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) versehen ist.

Das Klicken auf die Schaltflächen "Bold" oder "Italic" fügt die entsprechenden Tags im Element ein, wobei `insertText` verwendet wird, um den Bearbeitungsverlauf zu erhalten, sodass der Benutzer die Aktion rückgängig machen kann.

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

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
