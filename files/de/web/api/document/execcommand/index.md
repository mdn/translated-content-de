---
title: "Dokument: execCommand() Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 744655f60c1e697b0abccd4a64047113f678eda3
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!NOTE]
> Obwohl die `execCommand()` Methode veraltet ist, gibt es noch einige gültige Anwendungsfälle, die noch keine brauchbaren Alternativen haben. Zum Beispiel erhalten im Gegensatz zur direkten DOM-Manipulation durch `execCommand()` vorgenommene Änderungen den Undo-Puffer (Bearbeitungshistorie). Für diese Anwendungsfälle können Sie diese Methode weiterhin nutzen, sollten jedoch die plattformübergreifende Kompatibilität sicherstellen, z.B. durch Verwendung von [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported).

Die **`execCommand`** Methode implementiert mehrere verschiedene Befehle. Einige davon ermöglichen den Zugriff auf die Zwischenablage, während andere für die Bearbeitung von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Elemente oder gesamte Dokumente (wenn im [Design-Modus](/de/docs/Web/API/Document/designMode)) sind.

Für den Zugriff auf die Zwischenablage wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) über `execCommand()` empfohlen.

Die meisten Befehle beeinflussen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Beispielsweise formatieren einige Befehle (fett, kursiv etc.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile (Einrückung) betreffen. Nur das derzeit aktive bearbeitbare Element kann bearbeitet werden, aber einige Befehle (z.B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Von `execCommand()` vorgenommene Änderungen können je nach Browser und Konfiguration [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse auslösen oder nicht. Wenn sie ausgelöst werden, laufen die Handler für die Ereignisse bevor `execCommand()` zurückkehrt. Autoren müssen bei solchen rekursiven Aufrufen vorsichtig sein, insbesondere wenn sie `execCommand()` als Antwort auf diese Ereignisse aufrufen. Seit Firefox 82 schlagen verschachtelte `execCommand()` Aufrufe immer fehl, siehe [Fehler 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls spezifiziert. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss` Modus beeinflusst er stattdessen die Hintergrundfarbe des umgebenden Blocks. Dies erfordert einen {{cssxref("&lt;color&gt;")}} Wert-String als Wertargument.
    - `bold`
      - : Schaltet Fett für die Auswahl oder an der Einfügestelle ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen booleschen true/false als Wertargument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen für das Aktivieren dieses Verhaltens variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, jedoch nur, wenn eine Auswahl vorhanden ist. Erfordert einen {{Glossary("URI", "URI")}} String als Wertargument für das `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiv ist, variiert zwischen Browsern, und die Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungsdetails.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}} Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der verwendet wird, wenn neue Absätze in bearbeitbaren Textbereichen erstellt werden.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, der es erlaubt, absolut positionierte Elemente zu bewegen. Der Greifer ist standardmäßig deaktiviert seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerungsmöglichkeiten zur Zeilen-/Spalteneinfügung und -löschung in Tabellen. Die Steuerungen sind standardmäßig deaktiviert seit Firefox 64 ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenänderungshandhaben für Bilder, Tabellen und absolut positionierte Elemente und andere skalierbare Objekte. Die Handhaben sind seit Firefox 64 standardmäßig deaktiviert ([Firefox Bug 1490641](https://bugzil.la/1490641)).
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügestelle. Erfordert einen Schriftartnamen-String (wie `"Arial"`) als Wertargument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügestelle. Erfordert eine ganze Zahl von `1` bis `7` als Wertargument.
    - `foreColor`
      - : Ändert eine Schriftfarbe für die Auswahl oder an der Einfügestelle. Erfordert einen Hexadezimal-Farbwert-String als Wertargument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile, die die aktuelle Auswahl enthält, hinzu und ersetzt das Blockelement, das die Linie enthält, falls eines existiert (in Firefox ist {{HTMLElement("blockquote")}} die Ausnahme — es wird jedes umgebende Blockelement umschließen). Erfordert einen Tag-Namen-String als Wertargument. Praktisch alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur die Überschriftstags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern eingeschlossen werden müssen, z.B. `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der [Cursor](https://en.wikipedia.org/wiki/Cursor_%28computers%29)-Position, identisch mit der Betätigung der Entfernen-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder Einfügestellenlinie hinzu. Erfordert den Tag-Namen-String als Wertargument (d.h. `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `hiliteColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügestelle. Erfordert einen Farbwert-String als Wertargument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt ein {{HTMLElement("big")}} Tag um die Auswahl oder an der Einfügestelle hinzu.
    - `indent`
      - : Rückt die Linie, die die Auswahl oder den Einfügepunkt enthält, ein. In Firefox, wenn die Auswahl mehrere Zeilen auf verschiedenen Einrückungsebenen umfasst, werden nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Enter-Taste ein {{HTMLElement("br")}} Element einfügt oder das aktuelle Blockelement in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}} Element an der Einfügestelle ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder einen HTML-Markup-String an der Einfügestelle ein (löscht die Auswahl). Dies erfordert gültigen HTML-Markup.

        > [!WARNING]
        > Die Eingabe wird als HTML geparst und in das DOM geschrieben.
        > Solche APIs werden als [Einfügungssenken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer kam.
        >
        > Sie können dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
        > Weitere Informationen finden Sie in der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).

    - `insertImage`
      - : Fügt ein Bild an der Einfügestelle ein (löscht die Auswahl). Erfordert einen URL-String für die `src` des Bildes als Wertargument. Die Anforderungen für diese Zeichenfolge sind die gleichen wie bei `createLink`.
    - `insertLineBreak`
      - : Löscht die Auswahl und ersetzt sie durch ein [Zeilenumbruch-Element](/de/docs/Web/HTML/Reference/Elements/br).
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügestelle.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügestelle.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile hinzu.
    - `insertText`
      - : Fügt den angegebenen Klartext an der Einfügestelle ein (löscht die Auswahl).
    - `italic`
      - : Schaltet Kursivschrift für die Auswahl oder an der Einfügestelle ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder den Einfügepunkt.
    - `justifyFull`
      - : Blocksatz für die Auswahl oder den Einfügepunkt.
    - `justifyLeft`
      - : Linksbündiger Satz der Auswahl oder des Einfügepunktes.
    - `justifyRight`
      - : Rechtssatz der Auswahl oder des Einfügepunktes.
    - `outdent`
      - : Rückt die Linie, die die Auswahl oder den Einfügepunkt enthält, aus.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügestelle ein (ersetzt die aktuelle Auswahl).

        Diese Funktion ist für _Webinhalte_ deaktiviert, wurde jedoch in einigen Browsern über die [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementiert.
        In diesen Browsern erfordert die Funktion eine {{Glossary("transient_activation", "transiente Aktivierung")}} und die Bestätigung einer Popup-Benutzeroberfläche beim Einfügen von plattformübergreifenden Inhalten.
        Weitere Informationen finden Sie in der Tabelle [Browser-Kompatibilität](#browser-kompatibilität).

    - `redo`
      - : Führt den vorherigen Rückgängigmach-Befehl erneut aus.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchgestrichen für die Auswahl oder an der Einfügestelle ein/aus.
    - `subscript`
      - : Schaltet [Tiefstellung](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder an der Einfügestelle ein/aus.
    - `superscript`
      - : Schaltet [Hochstellung](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder an der Einfügestelle ein/aus.
    - `underline`
      - : Schaltet [Unterstreichen](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder an der Einfügestelle ein/aus.
    - `undo`
      - : Macht den letzten ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Verankerungselement](/de/docs/Web/HTML/Reference/Elements/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen booleschen true/false als Wertargument.
        > [!NOTE]
        > Dieses Argument ist logisch rückwärts (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Es wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den `useCSS` Befehl. `true` modifiziert/generiert `style` Attribute im Markup, false generiert präsentationselemente.
    - `AutoUrlDetect`
      - : Ändert das Auto-Link-Verhalten des Browsers.

- `showDefaultUI`
  - : Ein boolescher Wert, der anzeigt, ob die Standardbenutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht implementiert.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist dies ein String, der diese Informationen bereitstellt. Zum Beispiel erfordert `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument benötigt wird.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur
> `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um
> die Browserunterstützung zu überprüfen, bevor ein Befehl aufgerufen wird.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}} Element und einen mit einem {{HTMLElement("pre")}} Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt.

Durch Klicken auf die Schaltflächen "Fett" oder "Kursiv" werden die entsprechenden Tags in das Element eingefügt, wobei `insertText` verwendet wird, um die Bearbeitungshistorie zu erhalten, sodass der Benutzer die Aktion rückgängig machen kann.

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

Dieses Beispiel verfügt über ein {{HTMLElement("textarea")}} Element und ein {{HTMLElement("button")}} Element, das zum Einfügen von Inhalten verwendet werden kann.

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

In Browsern, die diese Funktion mit der [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementieren, sollten Sie in der Lage sein, gleichartigen Inhalt, wie Text aus dem Textbereich, zu kopieren und dann einzufügen, um jeden ausgewählten Inhalt zu ersetzen.
Wenn Sie versuchen, plattformübergreifende Inhalte einzufügen, wie Text, der von einer anderen Seite oder einem anderen Ort kopiert wurde, müssen Sie zuerst die "Einfügen" Benutzeroberfläche auswählen, die angezeigt wird.

{{EmbedLiveSample("Using paste", 100, 300)}}

## Spezifikationen

Diese Funktion ist nicht Teil einer aktuellen Spezifikation. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

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
