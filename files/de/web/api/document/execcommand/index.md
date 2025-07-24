---
title: "Dokument: execCommand()-Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 5de8a44520b41785e660e1f166ebeb82cda345e9
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`**-Methode implementiert verschiedene Befehle. Einige davon bieten Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elementen oder gesamten Dokumenten (wenn in den [Designmodus](/de/docs/Web/API/Document/designMode) gewechselt wird) gedacht sind.

Für den Zugriff auf die Zwischenablage wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) über `execCommand()` empfohlen. Für die Bearbeitungsbefehle gibt es jedoch keinen Ersatz: Anders als bei direkter DOM-Manipulation bleiben Änderungen mit `execCommand()` im Rückgängig-Puffer (Bearbeitungshistorie) erhalten.

Die meisten Befehle wirken sich auf die [Auswahl](/de/docs/Web/API/Selection) im Dokument aus. Einige Befehle (fett, kursiv, etc.) formatieren zum Beispiel den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (und die Auswahl ersetzen) oder eine gesamte Zeile (Einzug) beeinflussen. Nur das aktuell aktive Bearbeitungselement kann geändert werden, aber einige Befehle (z.B. `copy`) funktionieren auch ohne ein Bearbeitungselement.

> [!NOTE]
> Änderungen, die durch `execCommand()` durchgeführt werden, können abhängig vom Browser und der Konfiguration die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) auslösen oder auch nicht. Wenn sie ausgelöst werden, laufen die Handler für die Ereignisse, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind angegeben:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus betrifft dies die Hintergrundfarbe des umschließenden Blocks. Dies erfordert eine {{cssxref("&lt;color&gt;")}}-Wertzeichenfolge als Wertargument.
    - `bold`
      - : Schaltet fettgedruckt an/aus für die Auswahl oder an der Einfügeposition.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen true/false-Wert als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen für die Aktivierung dieses Verhaltens variieren von Browser zu Browser und haben sich im Laufe der Zeit geändert. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur, wenn eine Auswahl vorhanden ist. Erfordert eine {{Glossary("URI", "URI")}}-Zeichenfolge als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Der Zeitpunkt, wann dieses Verhalten aktiviert ist, variiert zwischen den Browsern, und seine Bedingungen haben sich im Laufe der Zeit geändert. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügestelle ein.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist seit Firefox 64 standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Einfügungs- und Löschsteuerungen für Tabellenzeilen und -spalten. Die Steuerungen sind seit Firefox 64 standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungshandgriffe an Bildern, Tabellen und absolut positionierten Elementen sowie anderen skalierbaren Objekten. Die Handgriffe sind seit Firefox 64 standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügeposition. Dies erfordert einen Schriftartnamen als Zeichenfolge (zum Beispiel `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügeposition. Dies erfordert eine Ganzzahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert die Schriftfarbe für die Auswahl oder an der Einfügeposition. Dies erfordert eine hexadezimale Farbwertzeichenfolge als Wertargument.
    - `formatBlock`
      - : Fügt dem Zeileninhalt der aktuellen Auswahl ein HTML-Blockelement hinzu und ersetzt das Blockelement, das die Zeile enthält, wenn eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es wird jedes umgebende Blockelement umschließen). Erfordert einen Tag-Namen als Zeichenfolge als Wertargument. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur die Überschriften-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern geschrieben werden, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftenelement um eine Auswahl oder einen Einfügepunkt ein. Erfordert den Tag-Namen als Zeichenfolge als Wertargument (das heißt `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügeposition. Erfordert eine Farbwertzeichenfolge als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügeposition ein.
    - `indent`
      - : Einzieht die Zeile, die die Auswahl oder den Einfügepunkt enthält. In Firefox werden, wenn die Auswahl mehrere Zeilen auf verschiedenen Einrückungsstufen umfasst, nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Bestimmt, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei Teile teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügeposition ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt einen HTML-String an der Einfügeposition ein (löscht die Auswahl). Erfordert einen gültigen HTML-String als Wertargument.
    - `insertImage`
      - : Fügt ein Bild an der Einfügeposition ein (löscht die Auswahl). Erfordert eine URL-Zeichenfolge für das `src` des Bildes als Wertargument. Die Anforderungen für diese Zeichenfolge sind die gleichen wie bei `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügeposition.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste ohne Reihenfolge](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügeposition.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügeposition ein (löscht die Auswahl).
    - `italic`
      - : Schaltet kursiv an/aus für die Auswahl oder an der Einfügeposition.
    - `justifyCenter`
      - : Zentriert die Auswahl oder Einfügeposition.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder Einfügeposition.
    - `justifyLeft`
      - : Linksbündigkeit für die Auswahl oder Einfügeposition.
    - `justifyRight`
      - : Rechtsbündigkeit für die Auswahl oder Einfügeposition.
    - `outdent`
      - : Rückt die Zeile aus, die die Auswahl oder den Einfügepunkt enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügeposition ein (ersetzt die aktuelle Auswahl). Für Webinhalte deaktiviert.
    - `redo`
      - : Führt den letzten Rückgängig-Befehl erneut aus.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichen an/aus für die Auswahl oder an der Einfügeposition.
    - `subscript`
      - : Schaltet [Tiefstellung](/de/docs/Web/HTML/Reference/Elements/sub) an/aus für die Auswahl oder an der Einfügeposition.
    - `superscript`
      - : Schaltet [Hochstellung](/de/docs/Web/HTML/Reference/Elements/sup) an/aus für die Auswahl oder an der Einfügeposition.
    - `underline`
      - : Schaltet [Unterstreichung](/de/docs/Web/HTML/Reference/Elements/u) an/aus für die Auswahl oder an der Einfügeposition.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet zwischen der Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen booleschen true/false-Wert als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h. verwenden Sie `false`, um CSS zu nutzen,
        > `true`, um HTML zu nutzen). Dies wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` ändert/erzeugt `style`-Attribute im Markup, `false` erzeugt präsentationelle Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungsverhalten des Browsers.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die standardmäßige Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, stellt eine Zeichenfolge diese Information bereit. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Legen Sie `null` fest, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Es kann nicht verwendet werden, um die Browserunterstützung vor dem Aufruf eines Befehls zu überprüfen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr grundlegende HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut gesetzt.

Das Klicken auf die "Bold" oder "Italic"-Buttons fügt die entsprechenden Tags in das Element ein und verwendet `insertText`, um den Bearbeitungsverlauf zu bewahren, sodass der Benutzer die Aktion rückgängig machen kann.

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
- MDN-Beispiel: [execCommands supported in your browser](https://mdn.github.io/dom-examples/execcommand/)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
