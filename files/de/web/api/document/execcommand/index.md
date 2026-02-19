---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!NOTE]
> Obwohl die `execCommand()`-Methode veraltet ist, gibt es noch einige gültige Anwendungsfälle, für die es noch keine brauchbaren Alternativen gibt. Beispielsweise bewahren Änderungen, die durch `execCommand()` vorgenommen werden, im Gegensatz zur direkten DOM-Manipulation den Undo-Puffer (Bearbeitungshistorie). Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch die Browser-Kompatibilität testen, zum Beispiel mit [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige davon bieten Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (wenn auf [Design-Modus](/de/docs/Web/API/Document/designMode) umgeschaltet) sind.

Um auf die Zwischenablage zuzugreifen, wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen.

Die meisten Befehle betreffen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Beispielsweise formatieren einige Befehle (fett, kursiv usw.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile (Einrückung) betreffen. Nur das derzeit aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z. B. `copy`) können auch ohne bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können abhängig vom Browser und der Konfiguration [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse auslösen oder auch nicht. Wenn ausgelöst, werden die Handler für die Ereignisse ausgeführt, bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Ab Firefox 82 werden verschachtelte `execCommand()`-Aufrufe immer fehlschlagen, siehe [Bug 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus betrifft es stattdessen die Hintergrundfarbe des umgebenden Blocks. Dies erfordert eine {{cssxref("&lt;color&gt;")}}-Wertzeichenkette, die als Wertargument übergeben wird.
    - `bold`
      - : Schaltet fett für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen true/false-Wert als Argument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen für diese Funktion variieren je nach Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur, wenn eine Auswahl vorhanden ist. Erfordert eine {{Glossary("URI", "URI")}}-Zeichenkette als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen Browsern, und die Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für weitere Details.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es erlaubt, absolut positionierte Elemente zu bewegen. Der Greifer ist standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerelemente zur Zeilen-/Spalteneinfügung und -löschung für Tabellen. Die Steuerelemente sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Ziehpunkte auf Bildern, Tabellen und absolut positionierten Elementen und anderen veränderbaren Objekten. Die Ziehpunkte sind standardmäßig seit Firefox 64 deaktiviert ([Firefox-Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftnamen für die Auswahl oder an der Einfügestelle. Dies erfordert eine Schriftnamen-Zeichenkette (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Dies erfordert eine Ganzzahl von `1` - `7` als Wertargument.
    - `foreColor`
      - : Ändert die Schriftfarbe für die Auswahl oder an der Einfügestelle. Dies erfordert eine Zeichenkette mit einem hexadezimalen Farbwert als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile, die die aktuelle Auswahl enthält, hinzu und ersetzt das Blockelement, das die Zeile enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme – es wird jedes umgebende Blockelement umschließen). Erfordert eine Tag-Name-Zeichenkette als Wertargument. Praktisch alle Blocklevel-Elemente können verwendet werden. (Legacy Edge unterstützt nur die Heading-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern eingeschlossen sein müssen, wie `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der [Cursor](https://en.wikipedia.org/wiki/Cursor_%28computers%29)-Position, identisch mit der Betätigung der Löschen-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftenelement um eine Auswahl oder eine Zeile an der Einfügestelle hinzu. Erfordert die Tag-Name-Zeichenkette als Wertargument (z. B. `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert eine Farbwert-Zeichenkette als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Rückt die Zeile ein, die die Auswahl oder Einfügestelle enthält. In Firefox, wenn die Auswahl mehrere Zeilen mit unterschiedlichen Einrückungsebenen umfasst, werden nur die am wenigsten eingedruckten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Kontrolliert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei Teile teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügestelle hinzu oder ersetzt die Auswahl durch dieses.
    - `insertHTML`
      - : Fügt eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder eine Zeichenkette aus HTML-Markup an der Einfügestelle ein (löscht Auswahl). Dies erfordert gültiges HTML-Markup.

        > [!WARNING]
        > Die Eingabe wird als HTML geparst und in das DOM geschrieben.
        > Solche APIs sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, falls die Eingabe ursprünglich von einem Angreifer stammt.
        >
        > Sie können dieses Risiko mindern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenketten zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
        > Für mehr Informationen siehe die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).

    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht Auswahl). Erfordert eine URL-Zeichenkette für das `src` des Bildes als Wertargument. Die Anforderungen für diese Zeichenkette sind die gleichen wie `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile hinzu.
    - `insertText`
      - : Fügt den gegebenen Klartext an der Einfügestelle ein (löscht Auswahl).
    - `italic`
      - : Schaltet Kursivschrift für die Auswahl oder an der Einfügestelle ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder Einfügestelle.
    - `justifyFull`
      - : Blocksatzt die Auswahl oder Einfügestelle.
    - `justifyLeft`
      - : Linksbündelt die Auswahl oder Einfügestelle.
    - `justifyRight`
      - : Rechtsbündelt die Auswahl oder Einfügestelle.
    - `outdent`
      - : Verringert die Einrückung der Zeile, die die Auswahl oder Einfügestelle enthält.
    - `paste`
      - : Fügt die Inhalte der Zwischenablage an der Einfügestelle ein (ersetzt aktuelle Auswahl).

        Diese Funktion ist für _Webinhalte_ als deaktiviert angegeben, wurde jedoch bei einigen Browsern über die [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementiert. Auf diesen Browsern erfordert die Funktion eine {{Glossary("transient_activation", "flüchtige Aktivierung")}} und eine Bestätigung der Popup-UI beim Einfügen von Inhalten aus einer anderen Quelle. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für weitere Informationen.

    - `redo`
      - : Macht den vorherigen Rückgängig-Befehl rückgängig.
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
      - : Macht den zuletzt ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) aus einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das erzeugte Markup um. Erfordert einen booleschen true/false-Wert als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den `useCSS`-Befehl. `true` modifiziert/generiert `style`-Attribute im Markup, `false` generiert präsentationelle Elemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungsverhalten des Browsers.

- `showDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die Standardbenutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist eine Zeichenkette, die diese Informationen bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur dann
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Browserunterstützung vor dem Aufrufen eines Befehls zu überprüfen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut.

Das Klicken auf die Schaltflächen "Fett" oder "Kursiv" fügt die entsprechenden Tags in das Element ein, wobei `insertText` verwendet wird, um die Bearbeitungshistorie zu bewahren, sodass der Benutzer die Aktion rückgängig machen kann.

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

Dieses Beispiel hat ein {{HTMLElement("textarea")}}-Element und ein {{HTMLElement("button")}}-Element, das Sie verwenden können, um Inhalte einzufügen.

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

In Browsern, die diese Funktion über die [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementieren, sollten Sie in der Lage sein, gleichartigen Inhalt, wie Text aus dem Textbereich, zu kopieren und dann zum Ersetzen von ausgewähltem Inhalt einzufügen. Wenn Sie versuchen, Inhalte aus unterschiedlichen Quellen einzufügen, wie Text, der von einer anderen Seite oder einem anderen Ort kopiert wurde, müssen Sie zunächst die angezeigte "Einfügen"-Benutzeroberfläche auswählen.

{{EmbedLiveSample("Using paste", 100, 300)}}

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr vorgesehen, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- MDN Beispiel: [Von Ihrem Browser unterstützte execCommands](https://mdn.github.io/dom-examples/execcommand/)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- [`document.designMode`](/de/docs/Web/API/Document/designMode)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
- [`document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
