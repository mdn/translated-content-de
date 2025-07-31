---
title: "Dokument: execCommand()-Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!NOTE]
> Obwohl die `execCommand()`-Methode veraltet ist, gibt es immer noch einige gültige Anwendungsfälle, für die es noch keine brauchbaren Alternativen gibt. Zum Beispiel bewahren Änderungen, die durch `execCommand()` vorgenommen werden, im Gegensatz zu direkten DOM-Manipulationen den Rückgängig-Puffer (Bearbeitungshistorie). Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch die plattformübergreifende Kompatibilität testen, beispielsweise durch die Verwendung von [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige davon bieten Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (im [Design-Modus](/de/docs/Web/API/Document/designMode)) verwendet werden.

Um auf die Zwischenablage zuzugreifen, wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen.

Die meisten Befehle wirken sich auf die [Auswahl](/de/docs/Web/API/Selection) des Dokuments aus. Beispielsweise formatieren einige Befehle (fett, kursiv usw.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile beeinflussen (Einrückung). Nur das derzeit aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z.B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) auslösen oder auch nicht. Wenn sie ausgelöst werden, werden die Handler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Folgende Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus wirkt es stattdessen auf die Hintergrundfarbe des umgebenden Blocks. Dies erfordert als Wert eine {{cssxref("&lt;color&gt;")}}-Zeichenfolge.
    - `bold`
      - : Schaltet Fett-Darstellung für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert ein boolesches true/false als Wert.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen für diese Funktionalität variieren je nach Browser und haben sich über die Zeit weiterentwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur wenn eine Auswahl vorhanden ist. Erfordert eine {{Glossary("URI", "URI")}}-Zeichenfolge als Wert für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen Browsern und seine Bedingungen haben sich über die Zeit weiterentwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrennzeichen, der beim Erstellen neuer Absätze in bearbeitbaren Textbereichen verwendet wird.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist standardmäßig deaktiviert seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Einfüge- und Löschsteuerungen für Tabellenzeilen/-spalten. Die Steuerungen sind standardmäßig deaktiviert seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenanpassungsgriffe an Bildern, Tabellen und absolut positionierten Elementen sowie anderen skalierbaren Objekten. Die Griffe sind standardmäßig deaktiviert seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügestelle. Dies erfordert eine Schriftartnamen-Zeichenfolge (wie `"Arial"`) als Wert.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Dies erfordert eine ganze Zahl von `1` - `7` als Wert.
    - `foreColor`
      - : Ändert die Schriftfarbe für die Auswahl oder an der Einfügestelle. Dies erfordert eine hexadezimale Farbwertzeichenfolge als Wert.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile, die die aktuelle Auswahl enthält, hinzu und ersetzt das Blockelement, das die Zeile enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es wird jedes umgebende Blockelement umhüllen). Erfordert eine Tag-Name-Zeichenfolge als Wert. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur Überschrift-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitzen Klammern eingefasst werden müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Entfernen-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftenelement um eine Auswahl oder Einfügestellenzeile hinzu. Erfordert die Tag-Name-Zeichenfolge als Wert (z.B., `"H1"`, `"H6"`). (Nicht unterstützt von Safari.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert eine Farbwertzeichenfolge als Wert. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Einrücken der Zeile, die die Auswahl oder Einfügestelle enthält. In Firefox, wenn die Auswahl mehrere Zeilen auf verschiedenen Einzugsstufen umfasst, werden nur die am wenigsten eingezogenen Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügestelle ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt eine HTML-Zeichenfolge an der Einfügestelle ein (löscht die Auswahl). Erfordert eine gültige HTML-Zeichenfolge als Wert.
    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht die Auswahl). Erfordert eine URL-Zeichenfolge für das `src`-Attribut des Bildes als Wert. Die Anforderungen für diese Zeichenfolge sind dieselben wie für `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) mit Aufzählungszeichen für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile hinzu.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügestelle ein (löscht die Auswahl).
    - `italic`
      - : Schaltet Kursivschrift ein/aus für die Auswahl oder an der Einfügestelle.
    - `justifyCenter`
      - : Zentriert die Auswahl oder Einfügestelle.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder Einfügestelle.
    - `justifyLeft`
      - : Linksbündiger Text für die Auswahl oder Einfügestelle.
    - `justifyRight`
      - : Rechtsbündiger Text für die Auswahl oder die Einfügestelle.
    - `outdent`
      - : Reduziert die Einrückung der Zeile, die die Auswahl oder Einfügestelle enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl). Für Webinhalte deaktiviert.
    - `redo`
      - : Wiederholt den vorherigen Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichen ein/aus für die Auswahl oder an der Einfügestelle.
    - `subscript`
      - : Schaltet [Tiefstellung](/de/docs/Web/HTML/Reference/Elements/sub) ein/aus für die Auswahl oder an der Einfügestelle.
    - `superscript`
      - : Schaltet [Hochstellung](/de/docs/Web/HTML/Reference/Elements/sup) ein/aus für die Auswahl oder an der Einfügestelle.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Reference/Elements/u) ein/aus für die Auswahl oder an der Einfügestelle.
    - `undo`
      - : Macht den letzten ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das erzeugte Markup um. Erfordert ein boolesches true/false als Wert.
        > [!NOTE]
        > Dieses Argument ist logisch rückläufig (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` ändert/erzeugt `style`-Attribute im Markup, `false` erzeugt Präsentationselemente.
    - `AutoUrlDetect`
      - : Ändert das Verhalten des automatischen Verlinkens im Browser.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die Standardbenutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist dies eine Zeichenfolge, die diese Information liefert. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur `true` zurück, wenn es im Rahmen einer
> Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Unterstützung
> des Browsers vor dem Ausführen eines Befehls zu überprüfen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element, bei dem das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt ist.

Ein Klick auf die Schaltflächen "Bold" oder "Italic" fügt die entsprechenden Tags in das Element ein, wobei `insertText` verwendet wird, um die Bearbeitungshistorie zu erhalten, sodass der Benutzer die Aktion rückgängig machen kann.

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

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spec-Entwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- MDN-Beispiel: [execCommands, die in Ihrem Browser unterstützt werden](https://mdn.github.io/dom-examples/execcommand/)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
- [`document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
