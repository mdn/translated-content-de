---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{ApiRef("DOM")}}{{deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Obwohl die `execCommand()` Methode veraltet ist, gibt es immer noch einige gültige Anwendungsfälle, für die es derzeit keine praktikablen Alternativen gibt. Zum Beispiel bleiben im Gegensatz zur direkten DOM-Manipulation die Änderungen, die durch `execCommand()` vorgenommen werden, im Rückgängig-Speicher (Bearbeitungshistorie) erhalten. Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch die Kompatibilität zwischen Browsern testen, z.B. durch Verwendung von [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`** Methode implementiert mehrere verschiedene Befehle. Einige davon ermöglichen den Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Elementen oder ganzen Dokumenten (im [Design-Modus](/de/docs/Web/API/Document/designMode)) vorgesehen sind.

Um auf die Zwischenablage zuzugreifen, wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen.

Die meisten Befehle beeinflussen die [Auswahl](/de/docs/Web/API/Selection) im Dokument. Beispielsweise formatieren einige Befehle (fett, kursiv usw.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile betreffen (Einzug). Nur das aktuell aktive bearbeitbare Element kann modifiziert werden, aber einige Befehle (z.B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können die Ereignisse [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) auslösen, abhängig vom Browser und dessen Konfiguration. Wenn sie ausgelöst werden, werden die Event-Handler ausgeführt, bevor `execCommand()` zurückkehrt. Entwickler müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()` Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss` Modus betrifft es stattdessen die Hintergrundfarbe des enthaltenden Blocks. Dies erfordert, dass ein {{cssxref("&lt;color&gt;")}} Wert-String als Wertargument übergeben wird.
    - `bold`
      - : Schaltet die Fettschrift für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Macht das Dokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen Boolean true/false als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren je nach Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}} String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen den Browsern, und die Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungshinweise.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}} Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es erlaubt, absolut positionierte Elemente zu verschieben. Der Greifer ist standardmäßig deaktiviert seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen zum Einfügen und Löschen von Tabellenspalten/-zeilen. Die Steuerungen sind standardmäßig deaktiviert seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe an Bildern, Tabellen und absolut positionierten Elementen und anderen veränderbaren Objekten. Die Griffe sind standardmäßig deaktiviert seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügestelle. Dies erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Dies erfordert eine Ganzzahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert die Schriftfarbe für die Auswahl oder an der Einfügestelle. Dies erfordert einen hexadezimalen Farbwert-String als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile hinzu, die die aktuelle Auswahl enthält, und ersetzt das Blockelement, das die Zeile enthält, falls vorhanden (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme - es wird jedes enthaltende Blockelement umschließen). Erfordert einen Tag-Namen-String als Wertargument. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur Überschriftstags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern eingeschlossen sein müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder Einfügestellenlinie hinzu. Erfordert den Tag-Namen-String als Wertargument (d.h. `"H1"`, `"H6"`). (Nicht unterstützt von Safari.)
    - `hiliteColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert einen Farbwert-String als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}} Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Einzieht die Zeile, die die Auswahl oder Einfügestelle enthält. In Firefox, wenn die Auswahl mehrere Zeilen auf verschiedenen Einzugsstufen umfasst, werden nur die am wenigsten eingezogenen Zeilen in der Auswahl eingezogen.
    - `insertBrOnReturn`
      - : Legt fest, ob die Eingabetaste ein {{HTMLElement("br")}} Element einfügt oder das aktuelle Blockelement in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}} Element an der Einfügestelle ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder einen String von HTML-Markup an der Einfügestelle ein (löscht Auswahl).
        Dies erfordert gültiges HTML-Markup.

        > [!WARNING]
        > Die Eingabe wird als HTML geparst und in das DOM geschrieben.
        > Solche APIs sind als [Injektionsempfänger](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
        >
        > Sie können dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
        > Weitere Informationen finden Sie in der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).

    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind die gleichen wie bei `createLink`.
    - `insertLineBreak`
      - : Löscht die Auswahl und ersetzt sie durch ein [Zeilenumbruch-Element](/de/docs/Web/HTML/Reference/Elements/br).
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [punktierte ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile hinzu.
    - `insertText`
      - : Fügt den angegebenen einfachen Text an der Einfügestelle ein (löscht Auswahl).
    - `italic`
      - : Schaltet Kursivschrift für die Auswahl oder an der Einfügestelle ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder Einfügestelle.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder Einfügestelle.
    - `justifyLeft`
      - : Linksbündiger Blocksatz für die Auswahl oder Einfügestelle.
    - `justifyRight`
      - : Rechtbündiger Blocksatz für die Auswahl oder die Einfügestelle.
    - `outdent`
      - : Verringert den Einzug der Zeile, die die Auswahl oder Einfügestelle enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl).

        Diese Funktion ist für _Web-Inhalte_ als deaktiviert angegeben, wurde jedoch auf einigen Browsern über die [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementiert.
        Auf diesen Browsern erfordert die Funktion {{Glossary("transient_activation", "transiente Aktivierung")}} und die Bestätigung einer Popup-Benutzeroberfläche beim Einfügen von Inhalten aus anderen Quellen.
        Weitere Informationen finden Sie in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

    - `redo`
      - : Wiederholt den letzten Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet den Durchstreichen-Effekt für die Auswahl oder an der Einfügestelle ein/aus.
    - `subscript`
      - : Schaltet [Tiefgestellt](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder an der Einfügestelle ein/aus.
    - `superscript`
      - : Schaltet [Hochgestellt](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder an der Einfügestelle ein/aus.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder an der Einfügestelle ein/aus.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) aus einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen Boolean true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` als veraltet markiert.
    - `styleWithCSS`
      - : Ersetzt den `useCSS` Befehl. `true` modifiziert/generiert `style` Attribute im Markup, `false` erzeugt präsentationale Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Linkverhalten des Browsers.

- `showDefaultUI`
  - : Ein Boolean-Wert, der angibt, ob die Standard-Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein Boolean-Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur dann
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden,
> um die Browserunterstützung vor dem Aufrufen eines Befehls zu überprüfen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr grundlegende HTML-Editoren, einen, der ein {{HTMLElement("textarea")}} Element verwendet, und einen, der ein {{HTMLElement("pre")}} Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut verwendet.

Das Klicken auf die Schaltflächen "Bold" oder "Italic" fügt die entsprechenden Tags in das Element ein, wobei `insertText` verwendet wird, um die Bearbeitungshistorie zu erhalten, sodass der Benutzer die Aktion rückgängig machen kann.

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

### Verwendung von paste

Dieses Beispiel enthält ein {{HTMLElement("textarea")}} Element und ein {{HTMLElement("button")}} Element, das Sie verwenden können, um Inhalte darin einzufügen.

#### HTML

```html
<button id="paste">Paste</button>
<hr />
<textarea id="text_box">Some text.</textarea>
```

#### JavaScript

```js
const pasteButton = document.querySelector("#paste");
const textBox = document.querySelector("#text_box");

pasteButton.addEventListener("click", () => {
  textBox.focus();

  let pasted = document.execCommand("paste", false);
  if (!pasted) {
    textBox.textContent = "paste unsuccessful, execCommand not supported";
  }
});
```

#### Ergebnis

In Browsern, die diese Funktion mit der [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementieren, sollten Sie in der Lage sein, gleichartige Inhalte wie Text aus dem Textbereich zu kopieren und dann einzufügen, um jeglichen ausgewählten Inhalt zu ersetzen.
Wenn Sie versuchen, Inhalte aus anderen Quellen einzufügen, z.B. Text, der von einer anderen Seite oder einem anderen Ort kopiert wurde, müssen Sie zuerst die im Popup angezeigte Benutzeroberfläche "Paste" auswählen.

{{EmbedLiveSample("Using paste", 100, 300)}}

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation. Sie ist nicht mehr vorgesehen, um ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- MDN-Beispiel: [execCommands in Ihrem Browser unterstützt](https://mdn.github.io/dom-examples/execcommand/)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
- [`document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
