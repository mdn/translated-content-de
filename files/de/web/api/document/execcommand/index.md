---
title: "Dokumentation: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("DOM")}}{{non-standard_header}}

> [!NOTE]
> Obwohl die `execCommand()` Methode veraltet ist, gibt es immer noch einige gültige Anwendungsfälle, die noch keine brauchbaren Alternativen haben. Zum Beispiel, im Gegensatz zur direkten DOM-Manipulation bewahren Änderungen, die durch `execCommand()` vorgenommen werden, den Undo-Puffer (Bearbeitungshistorie). Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch testen, um die plattformübergreifende Browser-Kompatibilität sicherzustellen, zum Beispiel durch die Verwendung von [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`** Methode implementiert mehrere verschiedene Befehle. Einige davon ermöglichen den Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Elementen oder ganzen Dokumenten (im [Designmodus](/de/docs/Web/API/Document/designMode)) gedacht sind.

Für den Zugriff auf die Zwischenablage wird die Verwendung der neueren [Clipboard API](/de/docs/Web/API/Clipboard_API) über `execCommand()` empfohlen.

Die meisten Befehle wirken sich auf die [Auswahl](/de/docs/Web/API/Selection) im Dokument aus. Beispielsweise formatieren einige Befehle (fett, kursiv usw.) den aktuell markierten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile beeinflussen (Einrückung). Nur das aktuell aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z.B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse auslösen oder nicht. Wenn sie ausgelöst werden, laufen die Handler für diese Ereignisse, bevor `execCommand()` zurückkehrt. Autoren müssen vorsichtig mit solchen rekursiven Aufrufen sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 schlagen verschachtelte `execCommand()` Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss` Modus beeinflusst er stattdessen die Hintergrundfarbe des beinhaltenden Blocks. Dies erfordert eine {{cssxref("&lt;color&gt;")}} Wertzeichenfolge, die als Wertargument übergeben wird.
    - `bold`
      - : Schaltet fett für die Auswahl oder am Einfügepunkt ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen true/false als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren von einem Browser zum anderen und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, jedoch nur, wenn eine Auswahl vorhanden ist. Erfordert eine {{Glossary("URI", "URI")}} Zeichenkette als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein einzelnes Zeichen enthalten, das ein Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen Browsern, und seine Bedingungen haben sich mit der Zeit entwickelt. Überprüfen Sie die [Kompatibilitätstabelle](#browser_kompatibilität) für Details zur Verwendung.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}} Tag um die Auswahl oder am Einfügepunkt ein.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textregionen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es ermöglicht, absolut positionierte Elemente zu verschieben. Der Greifer ist standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen für das Einfügen und Löschen von Tabellenreihen/-spalten. Die Steuerungen sind seit Firefox 64 standardmäßig deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungsgriffe für Bilder, Tabellen und absolut positionierte Elemente sowie andere skalierbare Objekte. Die Griffe sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder am Einfügepunkt. Dies erfordert eine Schriftartnamen-Zeichenkette (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder am Einfügepunkt. Dies erfordert einen ganzzahligen Wert von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder am Einfügepunkt. Dies erfordert eine hexadezimale Farbwertzeichenfolge als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Block-Level-Element um die Zeile ein, die die aktuelle Auswahl enthält, und ersetzt das Block-Element, das die Zeile enthält, falls eins existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es wird jedes beinhaltende Block-Element umschließen). Erfordert eine Tag-Name-Zeichenfolge als Wertargument. Praktisch alle Block-Level-Elemente können verwendet werden. (Legacy Edge unterstützt nur Überschriftentags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitzen Klammern eingewickelt werden müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Löschtaste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder eine Zeile am Einfügepunkt ein. Erfordert die Tag-Name-Zeichenfolge als Wertargument (d.h. `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `hiliteColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder am Einfügepunkt. Erfordert eine Farbwertzeichenfolge als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}} Tag um die Auswahl oder am Einfügepunkt ein.
    - `indent`
      - : Rückt die Zeile ein, die die Auswahl oder der Einfügepunkt enthält. In Firefox, wenn die Auswahl mehrere Zeilen auf verschiedenen Einrückungsebenen umfasst, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}} Element einfügt oder das aktuelle Block-Element in zwei aufteilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}} Element am Einfügepunkt ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder eine Zeichenkette von HTML-Markup am Einfügepunkt ein (löscht die Auswahl). Dies erfordert gültiges HTML-Markup.

        > [!WARNING]
        > Die Eingabe wird als HTML geparst und in das DOM geschrieben.
        > APIs wie diese sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
        >
        > Sie können dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenketten zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
        > Siehe die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) für weitere Informationen.

    - `insertImage`
      - : Fügt ein Bild am Einfügepunkt ein (löscht die Auswahl). Erfordert eine URL-Zeichenfolge für das `src` des Bildes als Wertargument. Die Anforderungen für diese Zeichenkette sind dieselben wie `createLink`.
    - `insertLineBreak`
      - : Löscht die Auswahl und ersetzt sie durch ein [Zeilenumbruch-Element](/de/docs/Web/HTML/Reference/Elements/br).
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder am Einfügepunkt.
    - `insertUnorderedList`
      - : Erstellt eine [aufzählende ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder am Einfügepunkt.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den gegebenen Klartext am Einfügepunkt ein (löscht die Auswahl).
    - `italic`
      - : Schaltet Kursivschrift für die Auswahl oder am Einfügepunkt ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder den Einfügepunkt.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder den Einfügepunkt.
    - `justifyLeft`
      - : Linksbündiger Text für die Auswahl oder den Einfügepunkt.
    - `justifyRight`
      - : Rechtsbündiger Text für die Auswahl oder den Einfügepunkt.
    - `outdent`
      - : Verringert die Einrückung der Zeile, die die Auswahl oder den Einfügepunkt enthält.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage am Einfügepunkt ein (ersetzt die aktuelle Auswahl).

        Diese Funktion ist für _Web-Inhalte_ als deaktiviert spezifiziert, wurde jedoch in einigen Browsern über die [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementiert.
        In diesen Browsern erfordert die Funktion {{Glossary("transient_activation", "transient activation")}} und die Bestätigung einer Popup-Benutzeroberfläche beim Einfügen von Inhalt mit Fremdursprung.
        Siehe die [Browser-Kompatibilitätstabelle](#browser_kompatibilität) für weitere Informationen.

    - `redo`
      - : Führt den vorherigen Rückgängig-Befehl erneut aus.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchgestrichen für die Auswahl oder am Einfügepunkt ein/aus.
    - `subscript`
      - : Schaltet [Tiefgestellt](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder am Einfügepunkt ein/aus.
    - `superscript`
      - : Schaltet [Hochgestellt](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder am Einfügepunkt ein/aus.
    - `underline`
      - : Schaltet [Unterstrichen](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder am Einfügepunkt ein/aus.
    - `undo`
      - : Macht den letzten ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Anker-Element](/de/docs/Web/HTML/Reference/Elements/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup ein/aus. Erfordert einen booleschen true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h. `false` verwenden, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den Befehl `useCSS`. `true` modifiziert/generiert `style` Attribute im Markup, `false` generiert Präsentationselemente.
    - `AutoUrlDetect`
      - : Ändert das Auto-Link-Verhalten des Browsers.

- `showDefaultUI`
  - : Ein boolescher Wert, der anzeigt, ob die Standard-Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur dann
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Unterstützung des Browsers zu überprüfen, bevor Sie einen Befehl aufrufen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}} Element und einen mit einem {{HTMLElement("pre")}} Element, das das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt hat.

Das Klicken auf die Schaltflächen "Bold" oder "Italic" fügt die entsprechenden Tags in das Element ein und verwendet `insertText`, um die Bearbeitungshistorie zu bewahren, damit der Benutzer die Aktion rückgängig machen kann.

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

Dieses Beispiel hat ein {{HTMLElement("textarea")}} Element und ein {{HTMLElement("button")}} Element, das Sie verwenden können, um Inhalte hinein einzufügen.

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

In Browsern, die diese Funktion mit der [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementieren, sollten Sie same-origin-Inhalte, wie Text aus dem Textbereich, kopieren und dann einfügen können, um einen ausgewählten Inhalt zu ersetzen.
Wenn Sie versuchen, Inhalte von einer anderen Seite oder einem anderen Ort einzufügen, müssen Sie zuerst die angezeigte "Paste" Benutzeroberfläche auswählen.

{{EmbedLiveSample("Using paste", 100, 300)}}

## Spezifikationen

Diese Funktion ist nicht Teil irgendeiner aktuellen Spezifikation. Sie steht nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spec-Entwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- MDN Beispiel: [execCommands in Ihrem Browser unterstützt](https://mdn.github.io/dom-examples/execcommand/)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
- [`document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
