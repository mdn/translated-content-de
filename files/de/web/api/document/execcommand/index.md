---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige von ihnen bieten Zugriff auf die Zwischenablage, während andere zum Bearbeiten von [Formular-Eingaben](/de/docs/Web/HTML/Element/input), [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (im [Design-Modus](/de/docs/Web/API/Document/designMode)) gedacht sind.

Für den Zugriff auf die Zwischenablage wird die neuere [Clipboard-API](/de/docs/Web/API/Clipboard_API) über `execCommand()` empfohlen. Allerdings gibt es keinen Ersatz für die Bearbeitungsbefehle: Im Gegensatz zu direkter DOM-Manipulation bewahren die durch `execCommand()` vorgenommenen Änderungen den Rückgängig-Puffer (Bearbeitungshistorie).

Die meisten Befehle wirken sich auf die [Auswahl](/de/docs/Web/API/Selection) des Dokuments aus. Zum Beispiel formatieren einige Befehle (fett, kursiv, etc.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die die Auswahl ersetzen) oder eine ganze Zeile betreffen (Einrückung). Nur das derzeit aktive editierbare Element kann geändert werden, aber einige Befehle (z.B. `copy`) können auch ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Die durch `execCommand()` vorgenommenen Änderungen können je nach Browser und Konfiguration {{domxref("Element/beforeinput_event", "beforeinput")}}- und {{domxref("Element/input_event", "input")}}-Ereignisse auslösen. Wenn sie ausgelöst werden, laufen die Handler für die Ereignisse, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 werden verschachtelte `execCommand()`-Aufrufe immer fehlschlagen, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`

  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind angegeben:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus wirkt es sich stattdessen auf die Hintergrundfarbe des umgebenden Blocks aus. Dies erfordert einen {{cssxref("&lt;color&gt;")}} Wert als String für das Wert-Argument.
    - `bold`
      - : Schaltet fett für die Auswahl oder den Einfügepunkt ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen Wert true/false als Wert-Argument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI")}}-String als Wert-Argument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen den Browsern, und seine Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Details zur Verwendung.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder den Einfügepunkt hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in editierbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu bewegen. Der Greifer ist seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Einfüge- und Löschsteuerungen für Tabellenzeilen/-spalten. Die Steuerungen sind seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe bei Bildern, Tabellen und absolut positionierten Elementen und anderen skalierbaren Objekten. Die Griffe sind seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder am Einfügepunkt. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wert-Argument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder am Einfügepunkt. Dies erfordert einen ganzzahligen Wert von `1` - `7` als Wert-Argument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder am Einfügepunkt. Dies erfordert einen String mit einem hexadezimalen Farbwert als Wert-Argument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile, die die aktuelle Auswahl enthält, hinzu und ersetzt das Blockelement, das die Zeile enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es wird jedes umgebende Blockelement umschließen). Erfordert einen Tag-Namen-String als Wert-Argument. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur Überschriftstag `H1` – `H6`, `ADDRESS` und `PRE`, die in spitzen Klammern, wie `"<H1>"`, umschlossen sein müssen.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://de.wikipedia.org/wiki/Cursor_%28computer%29), identisch mit dem Betätigen der Löschtaste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder die Zeile des Einfügepunkts hinzu. Erfordert den Tag-Namen-String als Wert-Argument (d.h. `"H1"`, `"H6"`). (Von Safari nicht unterstützt.)
    - `hiliteColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder am Einfügepunkt. Erfordert einen Farbwert-String als Wert-Argument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder den Einfügepunkt hinzu.
    - `indent`
      - : Einrücken der Zeile, die die Auswahl oder den Einfügepunkt enthält. In Firefox werden, wenn die Auswahl mehrere Zeilen mit unterschiedlichen Ebenen der Einrückung umfasst, nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuerung, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügestelle ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt einen HTML-String an der Einfügestelle ein (löscht die Auswahl). Erfordert einen gültigen HTML-String als Wert-Argument.
    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht die Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wert-Argument. Die Anforderungen für diesen String sind die gleichen wie bei `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Element/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [punkteungeordnete Liste](/de/docs/Web/HTML/Element/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Element/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den gegebenen Klartext an der Einfügestelle ein (löscht die Auswahl).
    - `italic`
      - : Schaltet kursiv für die Auswahl oder den Einfügepunkt ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder den Einfügepunkt.
    - `justifyFull`
      - : Randausgleich für die Auswahl oder den Einfügepunkt.
    - `justifyLeft`
      - : Linksbündige Ausrichtung der Auswahl oder des Einfügepunkts.
    - `justifyRight`
      - : Rechtsbündige Ausrichtung der Auswahl oder des Einfügepunkts.
    - `outdent`
      - : Verringert die Einrückung der Zeile, die die Auswahl oder den Einfügepunkt enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl). Für Webinhalte deaktiviert.
    - `redo`
      - : Wiederholt den vorherigen Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Markiert den gesamten Inhalt des editierbaren Bereichs.
    - `strikeThrough`
      - : Schaltet durchgestrichen für die Auswahl oder den Einfügepunkt ein/aus.
    - `subscript`
      - : Schaltet [tiefgestellt](/de/docs/Web/HTML/Element/sub) für die Auswahl oder an der Einfügestelle ein/aus.
    - `superscript`
      - : Schaltet [hochgestellt](/de/docs/Web/HTML/Element/sup) für die Auswahl oder an der Einfügestelle ein/aus.
    - `underline`
      - : Schaltet [unterstrichen](/de/docs/Web/HTML/Element/u) für die Auswahl oder an der Einfügestelle ein/aus.
    - `undo`
      - : Macht den letzten ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Element/a) aus einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen booleschen true/false als Wert-Argument.
        > [!NOTE]
        > Dieses Argument ist logisch umgekehrt (d.h., verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` als veraltet markiert.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` modifiziert/erzeugt `style`-Attribute im Markup, `false` erzeugt präsentationelle Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verknüpfungsverhalten des Browsers.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die standardmäßige Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist dies ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> **Hinweis:** `document.execCommand()` gibt nur dann
> `true` zurück, wenn es im Rahmen einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Unterstützung des Browsers zu verifizieren, bevor Sie einen Befehl aufrufen.

## Beispiele

Ein Beispiel [wie man execCommand mit contentEditable-Elementen verwendet](https://codepen.io/chrisdavidmills/full/gzYjag/) auf CodePen.

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element, bei dem das [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut gesetzt ist.

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
// Bereite Aktionsschaltflächen vor
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

// Fügt Text an der Cursorposition ein oder ersetzt den ausgewählten Text
function insertText(newText, selector) {
  const textarea = document.querySelector(selector);
  textarea.focus();

  let pasted = true;
  try {
    if (!document.execCommand("insertText", false, newText)) {
      pasted = false;
    }
  } catch (e) {
    console.error("Fehler erfasst:", e);
    pasted = false;
  }

  if (!pasted) {
    console.error("Einfügen nicht erfolgreich, execCommand nicht unterstützt");
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
- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
