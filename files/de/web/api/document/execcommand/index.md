---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`** Methode implementiert mehrere verschiedene Befehle. Einige von ihnen bieten Zugriff auf die Zwischenablage, während andere zur Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (wenn sie in den [Design-Modus](/de/docs/Web/API/Document/designMode) versetzt werden) dienen.

Zum Zugriff auf die Zwischenablage wird die neuere [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) anstelle von `execCommand()` empfohlen. Es gibt jedoch keinen Ersatz für die Bearbeitungsbefehle: Anders als bei direkter DOM-Manipulation bewahren die mit `execCommand()` durchgeführten Änderungen den Rückgängig-Puffer (Bearbeitungshistorie).

Die meisten Befehle beeinflussen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Einige Befehle (fett, kursiv usw.) formatieren beispielsweise den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile beeinflussen (Einrückung). Nur das derzeit aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z. B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) auslösen oder auch nicht. Wenn ausgelöst, werden die Handler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 werden verschachtelte `execCommand()`-Aufrufe immer fehlschlagen, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`

  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus wirkt es sich stattdessen auf die Hintergrundfarbe des umgebenden Blocks aus. Dies erfordert einen {{cssxref("&lt;color&gt;")}}-Wert als Wertargument.
    - `bold`
      - : Schaltet fett für die Auswahl oder am Einfügepunkt ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen Wert true/false als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen für dieses Verhalten variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, jedoch nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}}-String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerraum sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen Browsern, und seine Bedingungen haben sich über die Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder am Einfügepunkt hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrennzeichen, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu bewegen. Der Greifer ist standardmäßig seit Firefox 64 deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen für das Einfügen und Löschen von Tabellenzeilen/-spalten. Die Steuerungen sind standardmäßig seit Firefox 64 deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe für Bilder, Tabellen, absolut positionierte Elemente und andere anpassbare Objekte. Die Griffe sind standardmäßig seit Firefox 64 deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftnamen für die Auswahl oder am Einfügepunkt. Dies erfordert einen Schriftnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder am Einfügepunkt. Dies erfordert eine ganze Zahl von `1` bis `7` als Wertargument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder am Einfügepunkt. Dies erfordert einen hexadezimalen Farbwert-String als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Linie, die die aktuelle Auswahl enthält, hinzu und ersetzt das Blockelement, das die Linie enthält, wenn eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es wird jedes enthaltene Blockelement umschließen). Erfordert einen Tag-Namen-String als Wertargument. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur Überschriftstags `H1`–`H6`, `ADDRESS` und `PRE`, die in Klammern gesetzt werden müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://de.wikipedia.org/wiki/Cursor_%28Computers%29), identisch mit dem Drücken der Entfernen-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder Einfügepunktzeile hinzu. Erfordert den Tag-Namen-String als Wertargument (d.h. `"H1"`, `"H6"`). (Nicht unterstützt von Safari.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder am Einfügepunkt. Erfordert einen Farbwert-String als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder am Einfügepunkt hinzu.
    - `indent`
      - : Einrückung der Linie, die die Auswahl oder den Einfügepunkt enthält. In Firefox, wenn die Auswahl mehrere Zeilen auf verschiedenen Einrückungsniveau umfasst, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei Teile teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element am Einfügepunkt ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt einen HTML-String am Einfügepunkt ein (löscht die Auswahl). Erfordert einen gültigen HTML-String als Wertargument.
    - `insertImage`
      - : Fügt ein Bild am Einfügepunkt ein (löscht die Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind die gleichen wie bei `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder am Einfügepunkt.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder am Einfügepunkt.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile hinzu.
    - `insertText`
      - : Fügt den angegebenen Klartext am Einfügepunkt ein (löscht die Auswahl).
    - `italic`
      - : Schaltet kursiv für die Auswahl oder am Einfügepunkt ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder den Einfügepunkt.
    - `justifyFull`
      - : Blocksatz der Auswahl oder des Einfügepunkts.
    - `justifyLeft`
      - : Linksbündiger Satz der Auswahl oder des Einfügepunkts.
    - `justifyRight`
      - : Rechtsbündiger Satz der Auswahl oder des Einfügepunkts.
    - `outdent`
      - : Hängt die Einrückung der Linie ab, die die Auswahl oder den Einfügepunkt enthält.
    - `paste`
      - : Fügt die Inhalte der Zwischenablage am Einfügepunkt ein (ersetzt die aktuelle Auswahl). Für Webinhalte deaktiviert.
    - `redo`
      - : Wiederholt den letzten Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen von der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichung für die Auswahl oder am Einfügepunkt ein/aus.
    - `subscript`
      - : Schaltet [Tiefgestellt](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder am Einfügepunkt ein/aus.
    - `superscript`
      - : Schaltet [Hochgestellt](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder am Einfügepunkt ein/aus.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder am Einfügepunkt ein/aus.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) aus einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen booleschen Wert true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logischerweise rückwärts (d.h. verwenden Sie `false` für CSS,
        > `true` für HTML). Dies wurde zugunsten von `styleWithCSS` abgelehnt.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` modifiziert/generiert `style`-Attribute im Markup, false generiert präsentationelle Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungsverhalten des Browsers.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die Standardbenutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> **Hinweis:** `document.execCommand()` gibt nur
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Unterstützung des Browsers zu überprüfen, bevor ein Befehl aufgerufen wird.

## Beispiele

Ein Beispiel für eine [Anleitung zur Verwendung von execCommand mit contentEditable-Elementen](https://codepen.io/chrisdavidmills/full/gzYjag/) auf CodePen.

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element, bei dem das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut gesetzt ist.

Klicken auf die Schaltflächen "Fett" oder "Kursiv" fügt die entsprechenden Tags in das Element ein und verwendet `insertText`, um den Bearbeitungsverlauf zu erhalten, sodass der Benutzer die Aktion rückgängig machen kann.

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

- [Zwischenablage-API](/de/docs/Web/API/Clipboard_API)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
