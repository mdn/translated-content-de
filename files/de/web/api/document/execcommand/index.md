---
title: "Dokument: execCommand()-Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige von ihnen bieten Zugriff auf die Zwischenablage, während andere zum Bearbeiten von [Formulareingaben](/de/docs/Web/HTML/Element/input), [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Elementen oder gesamten Dokumenten (wenn in den [Design-Modus](/de/docs/Web/API/Document/designMode) gewechselt wird) dienen.

Für den Zugriff auf die Zwischenablage wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) über `execCommand()` empfohlen. Es gibt jedoch keinen Ersatz für die Bearbeitungsbefehle: Anders als bei direkter DOM-Manipulation bewirken Änderungen, die durch `execCommand()` vorgenommen werden, dass der Rückgängig-Puffer (Bearbeitungshistorie) erhalten bleibt.

Die meisten Befehle wirken sich auf die [Auswahl](/de/docs/Web/API/Selection) des Dokuments aus. Zum Beispiel formatieren einige Befehle (kursiv, fett usw.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzend) oder eine gesamte Zeile betreffen (Einrückung). Nur das derzeit aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z. B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Events auslösen oder auch nicht. Falls ausgelöst, werden die Handler für die Events ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Events aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Fehler 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`

  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind festgelegt:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus wird stattdessen die Hintergrundfarbe des umgebenden Blocks beeinflusst. Dies erfordert einen {{cssxref("&lt;color&gt;")}}-Wertstring als Wertargument.
    - `bold`
      - : Schaltet Fett für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Schaltet das Inhaltsdokument entweder auf schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen Wert true/false als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen für dieses Verhalten sind in verschiedenen Browsern unterschiedlich und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, jedoch nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}}-String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das ein Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert wird, variiert zwischen den Browsern und die Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen zum Einfügen und Löschen von Tabellenzeilen/-spalten. Die Steuerungen sind seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe für Bilder, Tabellen und absolut positionierte Elemente sowie andere skalierbare Objekte. Die Griffe sind seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügestelle. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Dies erfordert eine Ganzzahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert die Schriftfarbe für die Auswahl oder an der Einfügestelle. Dies erfordert einen hexadezimalen Farbwertstring als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile ein, die die aktuelle Auswahl enthält, und ersetzt gegebenenfalls das Blockelement, das die Zeile enthält (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme – es wird jedes umschließende Blockelement umschließen). Erfordert einen Tag-Namen-String als Wertargument. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur Überschriften-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in Winkelklammern umschlossen sein müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder eine Einfügestellenzeile hinzu. Erfordert den Tag-Namen-String als Wertargument (z.B. `"H1"`, `"H6"`). (Nicht unterstützt von Safari.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert einen Farbwertstring als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Rückt die Zeile ein, die die Auswahl oder die Einfügestelle enthält. In Firefox, wenn sich die Auswahl über mehrere Zeilen auf unterschiedlichen Einrückungsebenen erstreckt, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei Teile teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügestelle ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt einen HTML-String an der Einfügestelle ein (löscht Auswahl). Erfordert einen gültigen HTML-String als Wertargument.
    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind dieselben wie für `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Element/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [ungeordnete Liste mit Aufzählungszeichen](/de/docs/Web/HTML/Element/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Element/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügestelle ein (löscht Auswahl).
    - `italic`
      - : Schaltet Kursiv für die Auswahl oder an der Einfügestelle ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder die Einfügestelle.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder die Einfügestelle.
    - `justifyLeft`
      - : Linksbündig die Auswahl oder die Einfügestelle.
    - `justifyRight`
      - : Rechtsbündig die Auswahl oder die Einfügestelle.
    - `outdent`
      - : Entfernt die Einrückung der Zeile, die die Auswahl oder die Einfügestelle enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl). Für Webinhalte deaktiviert.
    - `redo`
      - : Wiederholt den letzten Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
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
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen booleschen Wert true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch umgekehrt (d.h. `false` verwenden, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` abgeschafft.
    - `styleWithCSS`
      - : Ersetzt den Befehl `useCSS`. `true` modifiziert/generiert `style`-Attribute im Markup, false generiert präsentierende Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Link-Verhalten des Browsers.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die Standardbenutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> **Hinweis:** `document.execCommand()` gibt nur
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Browserunterstützung vor dem Aufrufen eines Befehls zu überprüfen.

## Beispiele

Ein Beispiel für eine [Anleitung zur Verwendung von execCommand mit contentEditable-Elementen](https://codepen.io/chrisdavidmills/full/gzYjag/) auf CodePen.

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr grundlegende HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable).

Durch Klicken auf die Schaltflächen "Bold" oder "Italic" werden die entsprechenden Tags in das Element eingefügt, wobei `insertText` verwendet wird, um die Bearbeitungshistorie zu erhalten, sodass der Benutzer die Aktion rückgängig machen kann.

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
