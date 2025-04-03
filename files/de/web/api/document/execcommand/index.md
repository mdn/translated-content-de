---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ApiRef("DOM")}}{{deprecated_header}}

Die **`execCommand`** Methode implementiert mehrere verschiedene Befehle. Einige von ihnen bieten Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Element/input), [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Elementen oder gesamten Dokumenten (wenn in den [Designmodus](/de/docs/Web/API/Document/designMode) gewechselt wird) verwendet werden.

Für den Zugriff auf die Zwischenablage wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen. Es gibt jedoch keinen Ersatz für die Bearbeitungsbefehle: Im Gegensatz zur direkten DOM-Manipulation bewahren die von `execCommand()` durchgeführten Änderungen den Rückgängig-Puffer (Bearbeitungsverlauf).

Die meisten Befehle beeinflussen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Zum Beispiel formatieren einige Befehle (Fett, Kursiv, etc.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine gesamte Zeile beeinflussen (Einzug). Nur das aktuell aktive editierbare Element kann verändert werden, aber einige Befehle (z.B. `copy`) können ohne ein editierbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration möglicherweise die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse auslösen. Wenn sie ausgelöst werden, laufen die Handler für die Ereignisse, bevor `execCommand()` zurückkehrt. Autoren müssen vorsichtig mit solchen rekursiven Aufrufen sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Parameter

- `aCommandName`

  - : Ein String, der den Namen des auszuführenden Befehls spezifiziert. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss` Modus beeinflusst es stattdessen die Hintergrundfarbe des umschließenden Blocks. Dies erfordert einen {{cssxref("&lt;color&gt;")}} Wert-String, der als Wert-Argument übergeben wird.
    - `bold`
      - : Schaltet Fett für die Auswahl oder an der Einfügemarke ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert ein boolesches true/false als Wert-Argument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen für dieses Verhalten variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um zu bestimmen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}} String als Wert-Argument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert wird, variiert zwischen Browsern, und seine Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}} Tag um die Auswahl oder an der Einfügemarke hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist standardmäßig deaktiviert seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Tabellenzeilen-/spalteneinfüge- und -löschsteuerungen. Die Steuerungen sind standardmäßig deaktiviert seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe bei Bildern, Tabellen und absolut positionierten Elementen sowie anderen skalierbaren Objekten. Die Griffe sind standardmäßig deaktiviert seit Firefox 64 ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügemarke. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wert-Argument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügemarke. Dies erfordert eine ganze Zahl von `1` - `7` als Wert-Argument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder an der Einfügemarke. Dies erfordert einen hexadezimalen Farbwert-String als Wert-Argument.
    - `formatBlock`
      - : Fügt ein HTML-Block-Element um die Zeile ein, die die aktuelle Auswahl enthält, ersetzt das Block-Element, das die Zeile enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} eine Ausnahme — es wird jedes umschließende Block-Element umschließen). Erfordert einen Tag-Name-String als Wert-Argument. Praktisch alle Block-Elemente können verwendet werden. (Legacy Edge unterstützt nur Überschriftstags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern eingewickelt sein müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der [Einfügemarke](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch wie das Drücken der Löschen-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder Einfügemarkenlinie hinzu. Erfordert den Tag-Name-String als Wert-Argument (z.B. `"H1"`, `"H6"`). (Nicht unterstützt von Safari.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügemarke. Erfordert einen Farbwert-String als Wert-Argument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}} Tag um die Auswahl oder an der Einfügemarke hinzu.
    - `indent`
      - : Einrücken der Zeile, die die Auswahl oder Einfügemarke enthält. In Firefox, wenn die Auswahl mehrere Zeilen auf unterschiedlichen Ebenen der Einrückung umfasst, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}} Element einfügt oder das aktuelle Block-Element in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}} Element an der Einfügemarke ein oder ersetzt die Auswahl mit ihm.
    - `insertHTML`
      - : Fügt einen HTML-String an der Einfügemarke ein (löscht Auswahl). Erfordert einen gültigen HTML-String als Wert-Argument.
    - `insertImage`
      - : Fügt ein Bild an der Einfügemarke ein (löscht Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wert-Argument. Die Anforderungen für diesen String sind dieselben wie `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Element/ol) für die Auswahl oder an der Einfügemarke.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste](/de/docs/Web/HTML/Element/ul) für die Auswahl oder an der Einfügemarke.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Element/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügemarke ein (löscht Auswahl).
    - `italic`
      - : Schaltet Kursiv für die Auswahl oder an der Einfügemarke ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder die Einfügemarke.
    - `justifyFull`
      - : Blocksatz der Auswahl oder Einfügemarke.
    - `justifyLeft`
      - : Linksbündigt die Auswahl oder Einfügemarke.
    - `justifyRight`
      - : Rechtsbündigt die Auswahl oder Einfügemarke.
    - `outdent`
      - : Hebt die Einrückung der Zeile, die die Auswahl oder Einfügemarke enthält, auf.
    - `paste`
      - : Fügt die Inhalte der Zwischenablage an der Einfügemarke ein (ersetzt die aktuelle Auswahl). Für Web-Inhalte deaktiviert.
    - `redo`
      - : Stellt den letzten Rückgängig-Befehl wieder her.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichen für die Auswahl oder an der Einfügemarke ein/aus.
    - `subscript`
      - : Schaltet [Tiefgestellt](/de/docs/Web/HTML/Element/sub) für die Auswahl oder an der Einfügemarke ein/aus.
    - `superscript`
      - : Schaltet [Hochgestellt](/de/docs/Web/HTML/Element/sup) für die Auswahl oder an der Einfügemarke ein/aus.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Element/u) für die Auswahl oder an der Einfügemarke ein/aus.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Element/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup ein/aus. Erfordert ein boolesches true/false als Wert-Argument.
        > [!NOTE]
        > Dieses Argument ist logisch umgekehrt (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den `useCSS` Befehl. `true` modifiziert/generiert `style` Attribute im Markup, `false` generiert präsentationsbezogene Elemente.
    - `AutoUrlDetect`
      - : Ändert das Browser-Autolink-Verhalten.

- `aShowDefaultUI`
  - : Ein boolescher Wert, der anzeigt, ob die Standardbenutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `aValueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> **Hinweis:** `document.execCommand()` gibt nur dann
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Man kann es nicht verwenden, um
> die Browserunterstützung zu überprüfen, bevor ein Befehl aufgerufen wird.

## Beispiele

Ein Beispiel für [Anleitung zur Verwendung von execCommand mit contentEditable Elementen](https://codepen.io/chrisdavidmills/full/gzYjag/) auf CodePen.

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}} Element und einen mit einem {{HTMLElement("pre")}} Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut.

Durch Klicken auf die Schaltflächen "Bold" oder "Italic" werden die entsprechenden Tags im Element eingefügt, wobei `insertText` verwendet wird, um die Bearbeitungshistorie beizubehalten, sodass der Benutzer die Aktion rückgängig machen kann.

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
