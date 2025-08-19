---
title: "Dokument: execCommand()-Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!NOTE]
> Obwohl die `execCommand()`-Methode veraltet ist, gibt es noch einige gültige Anwendungsfälle, für die es noch keine brauchbaren Alternativen gibt. Zum Beispiel bewahren Änderungen, die von `execCommand()` durchgeführt werden, im Gegensatz zur direkten DOM-Bearbeitung den Rückgängig-Puffer (Bearbeitungshistorie). Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch die plattformübergreifende Kompatibilität testen, beispielsweise mit [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige von ihnen bieten Zugriff auf die Zwischenablage, während andere für das Bearbeiten von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Elementen oder ganzen Dokumenten (wenn in den [Design-Modus](/de/docs/Web/API/Document/designMode) gewechselt wurde) gedacht sind.

Für den Zugriff auf die Zwischenablage wird die neuere [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen.

Die meisten Befehle betreffen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Einige Befehle (fett, kursiv usw.) formatieren zum Beispiel den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile betreffen (Einrücken). Nur das derzeit aktive bearbeitbare Element kann modifiziert werden, aber einige Befehle (z.B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration möglicherweise die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) auslösen oder nicht. Falls sie ausgelöst werden, werden die Handler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Fehler 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind angegeben:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im Modus `styleWithCss` betrifft es stattdessen die Hintergrundfarbe des umgebenden Blocks. Dies erfordert einen {{cssxref("&lt;color&gt;")}}-Wert-String als Wertargument.
    - `bold`
      - : Schaltet fetten Text für die Auswahl oder den Einfügepunkt ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen true/false-Wert als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren je nach Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, jedoch nur wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}}-String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein einzelnes Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert wird, variiert zwischen den Browsern und die Bedingungen dafür haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungshinweise.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder den Einfügepunkt hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textrubriken erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der das Verschieben von absolut positionierten Elementen ermöglicht. Der Greifer ist standardmäßig seit Firefox 64 deaktiviert ([Firefox-Fehler 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen für Zeilen-/Spalteneinfügung und -löschung in Tabellen. Die Steuerungen sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Fehler 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsmarkierungen bei Bildern, Tabellen, absolut positionierten Elementen und anderen skalierbaren Objekten. Die Markierungen sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Fehler 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder den Einfügepunkt. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder den Einfügepunkt. Dies erfordert eine Ganzzahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder den Einfügepunkt. Dies erfordert einen hexadezimalen Farbwert-String als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile ein, die die aktuelle Auswahl enthält, und ersetzt das Blockelement, das die Zeile enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es wird jedes Blockelement umschließen). Dies erfordert einen Tag-Namen-String als Wertargument. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur Überschrift-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitzen Klammern eingeschlossen sein müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](<https://de.wikipedia.org/wiki/Cursor_(Computer)>), identisch mit dem Drücken der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriften-Element um eine Auswahl oder eine Einfügestellenzeile ein. Erfordert den Tag-Namen-String als Wertargument (z.B. `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder den Einfügepunkt. Erfordert einen Farbwert-String als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder den Einfügepunkt hinzu.
    - `indent`
      - : Rückt die Zeile ein, die die Auswahl oder den Einfügepunkt enthält. In Firefox wird, wenn die Auswahl mehrere Zeilen auf verschiedenen Einrückungsstufen umfasst, nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Bestimmt, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei Teile teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügestelle ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt einen HTML-String an der Einfügestelle ein (löscht die Auswahl). Dies erfordert einen gültigen HTML-String als Wertargument.
    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht die Auswahl). Dies erfordert eine URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind die gleichen wie für `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [aufzählungsartige ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügestelle ein (löscht die Auswahl).
    - `italic`
      - : Schaltet Kursivschrift für die Auswahl oder den Einfügepunkt ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder den Einfügepunkt.
    - `justifyFull`
      - : Blocksatzt die Auswahl oder den Einfügepunkt.
    - `justifyLeft`
      - : Linksbündigt die Auswahl oder den Einfügepunkt.
    - `justifyRight`
      - : Rechtsbündigt die Auswahl oder den Einfügepunkt.
    - `outdent`
      - : Hebt die Einrückung der Zeile auf, die die Auswahl oder den Einfügepunkt enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl). Für Webinhalte deaktiviert.
    - `redo`
      - : Wiederholt den vorherigen Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichung für die Auswahl oder den Einfügepunkt ein/aus.
    - `subscript`
      - : Schaltet [Tiefstellung](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder den Einfügepunkt ein/aus.
    - `superscript`
      - : Schaltet [Hochstellung](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder den Einfügepunkt ein/aus.
    - `underline`
      - : Schaltet [Unterstreichung](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder den Einfügepunkt ein/aus.
    - `undo`
      - : Macht den letzten ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Anker-Element](/de/docs/Web/HTML/Reference/Elements/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen booleschen true/false-Wert als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h. `false` verwenden, um CSS zu verwenden, `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` verworfen.
    - `styleWithCSS`
      - : Ersetzt den Befehl `useCSS`. `true` modifiziert/erzeugt `style`-Attribute im Markup, `false` erzeugt präsentative Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungsverhalten des Browsers.

- `showDefaultUI`
  - : Ein boolescher Wert, der anzeigt, ob die Standard-Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist dies ein String, der diese Information bereitstellt. Beispielsweise erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur dann `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Unterstützung durch den Browser vor der Ausführung eines Befehls zu überprüfen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr grundlegende HTML-Editoren, einen unter Verwendung eines {{HTMLElement("textarea")}}-Elements und einen mit einem {{HTMLElement("pre")}}-Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut.

Das Klicken auf die Schaltflächen "Bold" oder "Italic" fügt die entsprechenden Tags in das Element ein, wobei `insertText` verwendet wird, um die Bearbeitungshistorie zu bewahren, sodass der Benutzer die Aktion rückgängig machen kann.

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

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zwischenablage-API](/de/docs/Web/API/Clipboard_API)
- MDN-Beispiel: [execCommands supported in your browser](https://mdn.github.io/dom-examples/execcommand/)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
- [`document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
