---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige von ihnen bieten Zugriff auf die Zwischenablage, während andere zum Bearbeiten von [Formulareingaben](/de/docs/Web/HTML/Element/input), [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (wenn sie in den [Designmodus](/de/docs/Web/API/Document/designMode) geschaltet sind) dienen.

Zum Zugriff auf die Zwischenablage wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen. Für die Bearbeitungsbefehle gibt es jedoch keinen Ersatz: im Gegensatz zur direkten DOM-Manipulation bewahren die durch `execCommand()` durchgeführten Änderungen den Rückgängig-Puffer (Bearbeitungshistorie).

Die meisten Befehle beeinflussen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Zum Beispiel formatieren einige Befehle (fett, kursiv, usw.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile betreffen (Einrückung). Nur das aktuell aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z. B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` durchgeführt werden, können je nach Browser und Konfiguration die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse auslösen. Wenn sie ausgelöst werden, werden die Handler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`

  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus betrifft dies stattdessen die Hintergrundfarbe des umschließenden Blocks. Dies erfordert einen {{cssxref("&lt;color&gt;")}}-Wert als Wertargument.
    - `bold`
      - : Schaltet Fett-Schrift für die Auswahl oder am Einfügepunkt ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen Wert (wahr/falsch) als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, jedoch nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}}-String als Wertargument für die `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen den Browsern und seine Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder am Einfügepunkt hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn in bearbeitbaren Textbereichen neue Absätze erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen zum Einfügen und Löschen von Tabellenreihen/-spalten. Die Steuerungen sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe für Bilder, Tabellen und absolut positionierte Elemente und andere skalierbare Objekte. Die Griffe sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder am Einfügepunkt. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder am Einfügepunkt. Dies erfordert eine ganze Zahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert die Schriftfarbe für die Auswahl oder am Einfügepunkt. Dies erfordert einen hexadezimalen Farbwert-String als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Block-Level-Element um die Zeile hinzu, die die aktuelle Auswahl enthält, und ersetzt das Block-Element, das die Zeile enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme – es wird jedes umgebende Block-Element umschließen). Erfordert einen Tag-Namen-String als Wertargument. Praktisch alle Block-Level-Elemente können verwendet werden. (Legacy Edge unterstützt nur Überschrift-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern eingeschlossen sein müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen nach der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Entfernen-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschrift-Element um eine Auswahl oder Einfügepunktzeile hinzu. Erfordert den Tag-Namen-String als Wertargument (d. h. `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `hiliteColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder am Einfügepunkt. Erfordert einen Farbwert-String als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder am Einfügepunkt hinzu.
    - `indent`
      - : Rückt die Zeile ein, die die Auswahl oder den Einfügepunkt enthält. In Firefox, wenn die Auswahl mehrere Zeilen auf verschiedenen Einrückungsstufen umfasst, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei Teile teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element am Einfügepunkt hinzu oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt einen HTML-String am Einfügepunkt ein (löscht die Auswahl). Erfordert einen gültigen HTML-String als Wertargument.
    - `insertImage`
      - : Fügt ein Bild am Einfügepunkt ein (löscht die Auswahl). Erfordert einen URL-String für die `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind dieselben wie bei `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Element/ol) für die Auswahl oder am Einfügepunkt.
    - `insertUnorderedList`
      - : Erstellt eine [aufzählungszeichen-ungeordnete Liste](/de/docs/Web/HTML/Element/ul) für die Auswahl oder am Einfügepunkt.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Element/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den angegebenen Klartext am Einfügepunkt ein (löscht die Auswahl).
    - `italic`
      - : Schaltet Kursivschrift für die Auswahl oder am Einfügepunkt ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder den Einfügepunkt.
    - `justifyFull`
      - : Justiert die Auswahl oder den Einfügepunkt vollständig.
    - `justifyLeft`
      - : Justiert die Auswahl oder den Einfügepunkt linksbündig.
    - `justifyRight`
      - : Justiert die Auswahl oder den Einfügepunkt rechtsbündig.
    - `outdent`
      - : Verringert die Einrückung der Zeile, die die Auswahl oder den Einfügepunkt enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage am Einfügepunkt ein (ersetzt die aktuelle Auswahl). Für Web-Inhalte deaktiviert.
    - `redo`
      - : Führt den vorherigen Rückgängig-Befehl wieder aus.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt alle Inhalte des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichung für die Auswahl oder am Einfügepunkt ein/aus.
    - `subscript`
      - : Schaltet Tiefstellung [subscript](/de/docs/Web/HTML/Element/sub) für die Auswahl oder am Einfügepunkt ein/aus.
    - `superscript`
      - : Schaltet Hochstellung [superscript](/de/docs/Web/HTML/Element/sup) für die Auswahl oder am Einfügepunkt ein/aus.
    - `underline`
      - : Schaltet Unterstreichung [underline](/de/docs/Web/HTML/Element/u) für die Auswahl oder am Einfügepunkt ein/aus.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Element/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen booleschen Wert (wahr/falsch) als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch umgekehrt (d. h. `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` ändert/generiert `style`-Attribute im Markup, `false` generiert präsentationelle Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungsverhalten des Browsers.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der angibt, ob das Standardbenutzerinterface angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist dies ein String, der diese Information liefert. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> **Hinweis:** `document.execCommand()` gibt nur
> `true` zurück, wenn es im Rahmen einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Unterstützung durch den Browser vor dem Aufrufen eines Befehls zu überprüfen.

## Beispiele

Ein Beispiel dafür, [wie man execCommand mit contentEditable-Elementen verwendet](https://codepen.io/chrisdavidmills/full/gzYjag/) auf CodePen.

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr grundlegende HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element, das das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut gesetzt hat.

Das Klicken auf die "Fett" oder "Kursiv"-Schaltflächen fügt die entsprechenden Tags in das Element ein, wobei `insertText` verwendet wird, um die Bearbeitungsgeschichte zu bewahren, sodass der Benutzer die Aktion rückgängig machen kann.

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
