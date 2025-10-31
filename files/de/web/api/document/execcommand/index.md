---
title: "Dokumentation: execCommand()-Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!NOTE]
> Obwohl die `execCommand()`-Methode veraltet ist, gibt es noch einige gültige Anwendungsfälle, für die es derzeit keine brauchbaren Alternativen gibt. Beispielsweise erhalten im Gegensatz zur direkten DOM-Manipulation Änderungen, die durch `execCommand()` vorgenommen werden, den Rückgängig-Puffer (Bearbeitungsverlauf). Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch testen, ob die Browser-Kompatibilität gewährleistet ist, z. B. durch die Verwendung von [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige davon bieten Zugriff auf die Zwischenablage, während andere zur Bearbeitung von [Formular-Eingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (im [Design-Modus](/de/docs/Web/API/Document/designMode)) gedacht sind.

Um Zugriff auf die Zwischenablage zu erhalten, wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen.

Die meisten Befehle beeinflussen die [Selektion](/de/docs/Web/API/Selection) des Dokuments. Einige Befehle (Fett, Kursiv, etc.) formatieren den momentan ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile (einrücken) betreffen. Nur das derzeit aktivierte bearbeitbare Element kann geändert werden, aber einige Befehle (z. B. `copy`) können auch ohne ein bearbeitbares Element arbeiten.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration das Auslösen der [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verursachen oder auch nicht. Wenn sie ausgelöst werden, laufen die Ereignis-Handler, bevor `execCommand()` zurückkehrt. Autoren müssen vorsichtig bei solchen rekursiven Aufrufen sein, besonders wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus wirkt sich dies stattdessen auf die Hintergrundfarbe des umgebenden Blocks aus. Dies erfordert einen Wert als {{cssxref("&lt;color&gt;")}}-Wertstring.
    - `bold`
      - : Schaltet Fett für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen true/false-Wert als Argument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie sie in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}}-String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das auch ein Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen Browsern, und seine Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, mit dem absolut positionierte Elemente verschoben werden können. Der Greifer ist standardmäßig deaktiviert seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Tabellenzeilen-/Spalteneinfüge- und -löschsteuerungen. Die Steuerungen sind seit Firefox 64 standardmäßig deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe bei Bildern, Tabellen und absolut positionierten Elementen sowie anderen Größen änderbaren Objekten. Die Griffe sind seit Firefox 64 standardmäßig deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügestelle. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Dies erfordert eine ganze Zahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder an der Einfügestelle. Dies erfordert einen hexadezimalen Farbwert-String als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Block-Level-Element um die Zeile ein, die die aktuelle Auswahl enthält, und ersetzt das Blockelement, das die Zeile enthält, falls vorhanden (in Firefox, {{HTMLElement("blockquote")}} ist die Ausnahme — es wird jedes enthaltene Blockelement umschließen). Erfordert einen Tag-Name-String als Wertargument. Praktisch alle Block-Level-Elemente können verwendet werden. (Legacy Edge unterstützt nur Heading-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern eingeschlossen sein müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://de.wikipedia.org/wiki/Cursor), identisch mit dem Drücken der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder Einfügestellenzeile hinzu. Erfordert den Tag-Name-String als Wertargument (z. B. `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert einen Farbwert-String als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Einrücken der Zeile, die die Auswahl oder Einfügestelle enthält. In Firefox, wenn die Auswahl mehrere Zeilen auf unterschiedlichen Ebenen der Einrückung umfasst, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei Teile teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügestelle ein oder ersetzt die Auswahl.
    - `insertHTML`
      - : Fügt einen HTML-String an der Einfügestelle ein (löscht Auswahl). Erfordert einen gültigen HTML-String als Wertargument.
    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind die gleichen wie für `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [punktierte ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den gegebenen Klartext an der Einfügestelle ein (löscht Auswahl).
    - `italic`
      - : Schaltet Kursiv für die Auswahl oder an der Einfügestelle ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder Einfügestelle.
    - `justifyFull`
      - : Rechtfertigt die Auswahl oder Einfügestelle vollständig.
    - `justifyLeft`
      - : Richtet die Auswahl oder Einfügestelle linksbündig aus.
    - `justifyRight`
      - : Richtet die Auswahl oder Einfügestelle rechtsbündig aus.
    - `outdent`
      - : Verringert die Einrückung der Zeile, die die Auswahl oder Einfügestelle enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl). Deaktiviert für Web-Inhalte.
    - `redo`
      - : Wiederherstellt den vorherigen Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichen für die Auswahl oder an der Einfügestelle ein/aus.
    - `subscript`
      - : Schaltet [tiefgestellt](/de/docs/Web/HTML/Reference/Elements/sub) an/aus für die Auswahl oder an der Einfügestelle.
    - `superscript`
      - : Schaltet [hochgestellt](/de/docs/Web/HTML/Reference/Elements/sup) an/aus für die Auswahl oder an der Einfügestelle.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Reference/Elements/u) an/aus für die Auswahl oder an der Einfügestelle.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankersymbol](/de/docs/Web/HTML/Reference/Elements/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert ein boolesches true/false-Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (das heißt, verwenden Sie `false` für die Verwendung von CSS,
        > `true` für die Verwendung von HTML). Dies wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` ändert/generiert `style`-Attribute im Markup, false generiert präsentationale Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verknüpfungsverhalten des Browsers.

- `showDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die Standardbenutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur dann `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Browserunterstützung vor dem Aufrufen eines Befehls zu überprüfen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr grundlegende HTML-Editoren, einen unter Verwendung eines {{HTMLElement("textarea")}}-Elements und einen unter Verwendung eines {{HTMLElement("pre")}}-Elements mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

Ein Klick auf die Schaltflächen "Fett" oder "Kursiv" fügt die entsprechenden Tags in das Element ein, wobei `insertText` verwendet wird, um den Bearbeitungsverlauf zu erhalten, sodass der Benutzer die Aktion rückgängig machen kann.

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

Diese Funktion ist Teil keiner aktuellen Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- MDN Beispiel: [execCommands supported in your browser](https://mdn.github.io/dom-examples/execcommand/)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
- [`document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
