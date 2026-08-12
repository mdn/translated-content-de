---
title: "Dokumentation: execCommand()-Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{ApiRef("DOM")}}{{deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Obwohl die `execCommand()`-Methode veraltet ist, gibt es noch einige gültige Anwendungsfälle, für die es noch keine brauchbaren Alternativen gibt. Im Gegensatz zur direkten DOM-Manipulation bewahren Änderungen, die durch `execCommand()` vorgenommen werden, zum Beispiel den Undo-Puffer (Bearbeitungshistorie). Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch die plattformübergreifende Kompatibilität durch Tests sicherstellen, beispielsweise durch die Verwendung von [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige davon bieten Zugriff auf die Zwischenablage, während andere zur Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (wenn auf [Design-Modus](/de/docs/Web/API/Document/designMode) umgeschaltet wird) gedacht sind.

Zum Zugriff auf die Zwischenablage wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen.

Die meisten Befehle wirken sich auf die [Selektion](/de/docs/Web/API/Selection) des Dokuments aus. Einige Befehle (fett, kursiv usw.) formatieren den aktuell ausgewählten Text, während andere die Selektion löschen, neue Elemente einfügen (die Selektion ersetzen) oder eine ganze Zeile betreffen (Einrückung). Nur das aktuell aktive bearbeitbare Element kann verändert werden, aber einige Befehle (z.B. `copy`) können auch ohne ein bearbeitbares Element verwendet werden.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, lösen je nach Browser und Konfiguration möglicherweise die [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse aus. Wenn ausgelöst, laufen die Handler für die Ereignisse ab, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, vor allem, wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Seit Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind angegeben:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus betrifft es stattdessen die Hintergrundfarbe des umschließenden Blocks. Dies erfordert einen {{cssxref("&lt;color&gt;")}}-Wert als Argument.
    - `bold`
      - : Schaltet die Fettschrift für die Auswahl oder an der Einfügemarke ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert ein boolesches true/false als Argument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Bedingungen für das Aktivieren dieses Verhaltens variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um zu ermitteln, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}}-String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, welches Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen den Browsern, und die Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungshinweise.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügemarke hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Anfasser, der es ermöglicht absolut positionierte Elemente zu verschieben. Der Anfasser ist seit Firefox 64 standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungen zum Einfügen und Löschen von Tabellenspalten/-zeilen. Die Steuerungen sind seit Firefox 64 standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größeänderungsgriffe an Bildern, Tabellen und absolut positionierten Elementen sowie anderen größenveränderbaren Objekten. Die Griffe sind seit Firefox 64 standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügemarke. Dies erfordert einen Schriftartnamens-String (wie `"Arial"`) als Argument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügemarke. Dies erfordert einen ganzzahligen Wert von `1` - `7` als Argument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder an der Einfügemarke. Dies erfordert einen hexadezimalen Farbwert als Argument.
    - `formatBlock`
      - : Fügt ein HTML-Block-Element um die Zeile ein, die die aktuelle Auswahl enthält, und ersetzt das Block-Element, das die Zeile enthält, falls eines vorhanden ist (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es umschließt jedes Block-Element). Erfordert einen Tag-Name als Argument. Praktisch alle Block-Elemente können verwendet werden. (Legacy Edge unterstützt nur Überschriftselemente `H1` – `H6`, `ADDRESS` und `PRE`, die in spitzen Klammern eingeschlossen sein müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der Position des [Cursors](<https://de.wikipedia.org/wiki/Cursor_(Computer)>), identisch mit der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder Einfügemarkenlinie hinzu. Erfordert den Tag-Name als Argument (z. B. `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `hiliteColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügemarke. Erfordert einen Farbwert als Argument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügemarke hinzu.
    - `indent`
      - : Einrückt die Zeile, die die Auswahl oder Einfügemarke enthält. In Firefox werden, wenn die Auswahl mehrere Zeilen mit unterschiedlichen Einrückungsebenen umfasst, nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Block-Element in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügemarke ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder einen String von HTML-Markup an der Einfügemarke ein (löscht die Auswahl).
        Dies erfordert gültiges HTML-Markup.

        > [!WARNING]
        > Die Eingabe wird als HTML geparsed und in das DOM geschrieben.
        > APIs wie diese sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können potentiell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
        >
        > Sie können dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
        > Siehe die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) für weitere Informationen.

    - `insertImage`
      - : Fügt ein Bild an der Einfügemarke ein (löscht Auswahl). Erfordert einen URL-String für das `src` des Bildes als Wertargument. Die Anforderungen für diesen String sind die gleichen wie bei `createLink`.
    - `insertLineBreak`
      - : Löscht die Auswahl und ersetzt sie durch ein [Zeilenumbruch-Element](/de/docs/Web/HTML/Reference/Elements/br).
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügemarke.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügemarke.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile ein.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügemarke ein (löscht Auswahl).
    - `italic`
      - : Schaltet Kursivschrift für die Auswahl oder an der Einfügemarke ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder Einfügemarke.
    - `justifyFull`
      - : Blocksatz der Auswahl oder Einfügemarke.
    - `justifyLeft`
      - : Linksbündiger Blocksatz der Auswahl oder Einfügemarke.
    - `justifyRight`
      - : Rechtsbündiger Blocksatz der Auswahl oder der Einfügemarke.
    - `outdent`
      - : Verringert den Einzug der Zeile mit der Auswahl oder Einfügemarke.
    - `paste`
      - : Fügt die Inhalte der Zwischenablage an der Einfügemarke ein (ersetzt die aktuelle Auswahl).

        Diese Funktion ist für _Webinhalte_ als deaktiviert angegeben, wurde jedoch über die [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) in einigen Browsern implementiert.
        In diesen Browsern erfordert die Funktion eine {{Glossary("transient_activation", "transiente Aktivierung")}} und die Bestätigung einer Popup-UI bei Einfügen von Inhalten aus fremden Ursprüngen.
        Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für weitere Informationen.

    - `redo`
      - : Wiederholt den letzten Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichen für die Auswahl oder an der Einfügemarke ein/aus.
    - `subscript`
      - : Schaltet [Tiefgestellt](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder an der Einfügemarke ein/aus.
    - `superscript`
      - : Schaltet [Hochgestellt](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder an der Einfügemarke ein/aus.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder an der Einfügemarke ein/aus.
    - `undo`
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) eines ausgewählten Hyperlinks.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert ein boolesches true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch umgekehrt (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` abgelehnt.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` ändert/erzeugt `style`-Attribute im Markup, false erzeugt präsentationelle Elemente.
    - `AutoUrlDetect`
      - : Ändert das Verhalten des Browsers beim automatischen Verlinken.

- `showDefaultUI`
  - : Ein boolescher Wert, der angibt, ob das Standard-Benutzerinterface angezeigt werden soll. Dies ist nicht in Mozilla implementiert.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist ein String, der diese Information bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur
> `true` zurück, wenn es im Rahmen einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Unterstützung des Browsers vor dem Aufruf eines Befehls zu überprüfen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element, das das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut gesetzt hat.

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

### Verwendung von paste

Dieses Beispiel hat ein {{HTMLElement("textarea")}}-Element und ein {{HTMLElement("button")}}-Element, das Sie zum Einfügen von Inhalten verwenden können.

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

In Browsern, die diese Funktion mithilfe der [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementieren, sollten Sie in der Lage sein, gleichartigen Inhalt zu kopieren, wie Text aus dem Textbereich, und diesen dann einzufügen, um den ausgewählten Inhalt zu ersetzen.
Bei dem Versuch, Inhalte aus fremdem Ursprung einzufügen, wie Text, der von einer anderen Seite oder einem anderen Ort kopiert wurde, müssen Sie zuerst die "Paste"-UI auswählen, die angezeigt wird.

{{EmbedLiveSample("Using paste", 100, 300)}}

## Spezifikationen

Diese Funktion ist nicht Teil einer aktuellen Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

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
