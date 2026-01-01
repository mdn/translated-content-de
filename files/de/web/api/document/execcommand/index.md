---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: e593d32ad2a2fde33cfd4d4d71b152efdc371f8e
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!NOTE]
> Obwohl die Methode `execCommand()` veraltet ist, gibt es noch einige gültige Anwendungsfälle, für die es noch keine brauchbaren Alternativen gibt. Zum Beispiel erhalten Änderungen, die durch `execCommand()` ausgeführt werden, im Gegensatz zur direkten DOM-Manipulation den Undo-Puffer (Bearbeitungsverlauf). Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch die Kompatibilität mit verschiedenen Browsern testen, beispielsweise durch Verwendung von [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`** Methode implementiert mehrere unterschiedliche Befehle. Einige von ihnen ermöglichen den Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formular-Eingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Elementen oder ganzen Dokumenten (im [Design-Modus](/de/docs/Web/API/Document/designMode)) sind.

Für den Zugriff auf die Zwischenablage wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen.

Die meisten Befehle beeinflussen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Beispielsweise formatieren einige Befehle (fett, kursiv usw.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile betreffen (Einzug). Nur das derzeit aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z. B. `copy`) können auch ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration möglicherweise [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse auslösen oder auch nicht. Wenn sie ausgelöst werden, werden die Handler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()` Aufrufe immer fehl, siehe [Fehler 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls spezifiziert. Die folgenden Befehle sind angegeben:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss` Modus beeinflusst es stattdessen die Hintergrundfarbe des enthaltenen Blocks. Dies erfordert einen {{cssxref("&lt;color&gt;")}} Wert-String, der als Wertargument übergeben wird.
    - `bold`
      - : Schaltet fett für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Macht das Inhalt-Dokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert ein boolean true/false als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, jedoch nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}} String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein einzelnes Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen Browsern, und seine Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}} Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist seit Firefox 64 ([Firefox Fehler 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen für das Einfügen und Löschen von Tabellenzeilen/-spalten. Die Steuerungen sind seit Firefox 64 ([Firefox Fehler 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Resizer-Griffe an Bildern, Tabellen und absolut positionierten Elementen und anderen größenveränderbaren Objekten. Die Griffe sind seit Firefox 64 ([Firefox Fehler 1490641](https://bugzil.la/1490641)) standardmäßig deaktiviert.
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügestelle. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Dies erfordert eine Ganzzahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder an der Einfügestelle. Dies erfordert einen hexadezimalen Farbwert-String als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile mit der aktuellen Auswahl ein und ersetzt das Blockelement, das die Zeile enthält, falls eines vorhanden ist (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es umschließt jedes enthaltene Blockelement). Erfordert einen Tag-Namen-String als Wertargument. Praktisch alle Blockelemente können verwendet werden. (Der Legacy-Edge unterstützt nur Überschriftentags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern geschrieben werden müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftenelement um eine Auswahl oder Einfügepunktzeile ein. Erfordert den Tag-Namen-String als Wertargument (d.h. `"H1"`, `"H6"`). (Wird von Safari nicht unterstützt.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert einen Farbwert-String als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}} Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Einrücken der Zeile, die die Auswahl oder den Einfügepunkt enthält. In Firefox werden, wenn die Auswahl mehrere Zeilen auf unterschiedlichen Einrückungsebenen überspannt, nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Stellt ein, ob die Eingabetaste ein {{HTMLElement("br")}} Element einfügt oder das aktuelle Blockelement in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}} Element an der Einfügestelle ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder einen HTML-Markup-String an der Einfügestelle ein (löscht die Auswahl).
        Dies erfordert ein gültiges HTML-Markup.

        > [!WARNING]
        > Die Eingabe wird als HTML geparst und in das DOM geschrieben.
        > Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
        >
        > Sie können dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
        > Siehe die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) für weitere Informationen.

    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht die Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind die gleichen wie für `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den gegebenen Klartext an der Einfügestelle ein (löscht die Auswahl).
    - `italic`
      - : Schaltet kursiv für die Auswahl oder an der Einfügestelle ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder den Einfügepunkt.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder den Einfügepunkt.
    - `justifyLeft`
      - : Linksbündigkeit der Auswahl oder des Einfügepunkts.
    - `justifyRight`
      - : Rechtsbündigkeit der Auswahl oder des Einfügepunkts.
    - `outdent`
      - : Verringert den Einzug der Zeile, die die Auswahl oder den Einfügepunkt enthält.
    - `paste`
      - : Fügt die Inhalte der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl). Für Web-Inhalte deaktiviert.
    - `redo`
      - : Wiederholt den letzten Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichen für die Auswahl oder an der Einfügestelle ein/aus.
    - `subscript`
      - : Schaltet [Tiefstellung](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder an der Einfügestelle ein/aus.
    - `superscript`
      - : Schaltet [Hochstellung](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder an der Einfügestelle ein/aus.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder an der Einfügestelle ein/aus.
    - `undo`
      - : Macht den letzten ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) aus einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert ein boolean true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` abgelehnt.
    - `styleWithCSS`
      - : Ersetzt den Befehl `useCSS`. `true` modifiziert/generiert `style` Attribute im Markup, false generiert präsentationale Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungsverhalten des Browsers.

- `showDefaultUI`
  - : Ein boolescher Wert, der anzeigt, ob die standardmäßige Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt wird oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur dann `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Browserunterstützung zu überprüfen, bevor Sie einen Befehl aufrufen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr grundlegende HTML-Editoren, einen mit einem {{HTMLElement("textarea")}} Element und einen mit einem {{HTMLElement("pre")}} Element, das das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt hat.

Durch Klicken auf die Schaltflächen "Bold" oder "Italic" werden die entsprechenden Tags im Element eingefügt und `insertText` verwendet, um den Bearbeitungsverlauf zu erhalten, damit der Benutzer die Aktion rückgängig machen kann.

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

Dieses Feature ist Teil keiner aktuellen Spezifikation und ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spec-Entwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- MDN Beispiel: [execCommands unterstützt in Ihrem Browser](https://mdn.github.io/dom-examples/execcommand/)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
- [`document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
