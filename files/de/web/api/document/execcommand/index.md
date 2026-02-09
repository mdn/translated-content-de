---
title: "Dokument: execCommand()-Methode"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: ddfee53c1b411219e2b1098ba3f74487221b6ee1
---

{{ApiRef("DOM")}}{{deprecated_header}}

> [!NOTE]
> Obwohl die `execCommand()`-Methode veraltet ist, gibt es noch einige gültige Anwendungsfälle, für die es noch keine tragfähigen Alternativen gibt. Zum Beispiel bewahren Änderungen, die durch `execCommand()` durchgeführt werden, im Gegensatz zur direkten DOM-Manipulation den Undo-Puffer (Bearbeitungshistorie). Für diese Anwendungsfälle können Sie diese Methode weiterhin verwenden, sollten jedoch testen, um die plattformübergreifende Kompatibilität sicherzustellen, z.B. indem Sie [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) verwenden.

Die **`execCommand`**-Methode implementiert mehrere verschiedene Befehle. Einige davon ermöglichen den Zugriff auf die Zwischenablage, während andere zum Bearbeiten von [Formulareingaben](/de/docs/Web/HTML/Reference/Elements/input), [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elementen oder ganzen Dokumenten (im [Design-Modus](/de/docs/Web/API/Document/designMode)) dienen.

Um auf die Zwischenablage zuzugreifen, wird die neuere [Clipboard API](/de/docs/Web/API/Clipboard_API) gegenüber `execCommand()` empfohlen.

Die meisten Befehle beeinflussen die [Auswahl](/de/docs/Web/API/Selection) des Dokuments. Zum Beispiel formatieren einige Befehle (fett, kursiv, usw.) den aktuell ausgewählten Text, während andere die Auswahl löschen, neue Elemente einfügen (die Auswahl ersetzen) oder eine ganze Zeile beeinflussen (Einrückung). Nur das momentan aktive bearbeitbare Element kann geändert werden, aber einige Befehle (z.B. `copy`) können ohne ein bearbeitbares Element funktionieren.

> [!NOTE]
> Änderungen, die durch `execCommand()` vorgenommen werden, können je nach Browser und Konfiguration [(]input[)und_input-input-Ereignisse](/de/docs/Web/API/Element/beforeinput_event) nicht oder nur teilweise </b></note> auslösen> . Wenn sie ausgelöst werden, werden die zugehörigen Handler vor der Rückgabe von `execCommand()` ausgeführt. Autoren müssen sich solcher rekursiven Aufrufe bewusst sein, insbesondere wenn sie `execCommand()` als Reaktion auf diese Ereignisse aufrufen. Seit Firefox 82 schlagen verschachtelte `execCommand()`-Aufrufe immer fehl, siehe [Fehler 1634262](https://bugzil.la/1634262).

## Syntax

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Parameter

- `commandName`
  - : Ein String, der den Namen des auszuführenden Befehls angibt. Die folgenden Befehle sind spezifiziert:
    - `backColor`
      - : Ändert die Hintergrundfarbe des Dokuments. Im `styleWithCss`-Modus wirkt es sich stattdessen auf die Hintergrundfarbe des enthaltenden Blocks aus. Dies erfordert einen {{cssxref("&lt;color&gt;")}}-Wert als Argument.
    - `bold`
      - : Schaltet Fettung für die Auswahl oder an der Einfügemarke ein/aus.
    - `contentReadOnly`
      - : Macht das Inhaltsdokument entweder schreibgeschützt oder bearbeitbar. Dies erfordert einen Booleschen Wert true/false als Argument.
    - `copy`
      - : Kopiert die aktuelle Auswahl in die Zwischenablage. Die Bedingungen, unter denen dieses Verhalten aktiviert ist, variieren von Browser zu Browser und haben sich im Laufe der Zeit entwickelt. Überprüfen Sie die Kompatibilitätstabelle, um festzustellen, ob Sie es in Ihrem Fall verwenden können.
    - `createLink`
      - : Erstellt einen Hyperlink aus der Auswahl, aber nur, wenn eine Auswahl vorhanden ist. Erfordert eine {{Glossary("URI", "URI")}}-Zeichenfolge als Wertargument für den `href` des Hyperlinks. Der URI muss mindestens ein Zeichen enthalten, das Leerzeichen sein kann.
    - `cut`
      - : Entfernt die aktuelle Auswahl und kopiert sie in die Zwischenablage. Wann dieses Verhalten aktiviert ist, variiert zwischen den Browsern und die Bedingungen haben sich im Laufe der Zeit entwickelt. Überprüfen Sie [die Kompatibilitätstabelle](#browser-kompatibilität) für Nutzungshinweise.
    - `decreaseFontSize`
      - : Fügt ein {{HTMLElement("small")}}-Tag um die Auswahl oder an der Einfügemarke hinzu.
    - `defaultParagraphSeparator`
      - : Ändert den Absatztrenner, der beim Erstellen neuer Absätze in bearbeitbaren Textbereichen verwendet wird.
    - `delete`
      - : Löscht die aktuelle Auswahl.
    - `enableAbsolutePositionEditor`
      - : Aktiviert oder deaktiviert den Greifer, mit dem absolut positionierte Elemente verschoben werden können. Der Greifer ist standardmäßig seit Firefox 64 ([Firefox-Fehler 1490641](https://bugzil.la/1490641)) deaktiviert.
    - `enableInlineTableEditing`
      - : Aktiviert oder deaktiviert die Steuerelemente zum Einfügen und Löschen von Tabellenzeilen/-spalten. Die Steuerelemente sind standardmäßig seit Firefox 64 ([Firefox-Fehler 1490641](https://bugzil.la/1490641)) deaktiviert.
    - `enableObjectResizing`
      - : Aktiviert oder deaktiviert die Größenanpassungsgriffe für Bilder, Tabellen und absolut positionierte Elemente sowie andere skalierbare Objekte. Die Griffe sind standardmäßig seit Firefox 64 ([Firefox-Fehler 1490641](https://bugzil.la/1490641)) deaktiviert.
    - `fontName`
      - : Ändert den Schriftartnamen für die Auswahl oder an der Einfügemarke. Dies erfordert eine Schriftartnamen-String (wie `"Arial"`) als Argument.
    - `fontSize`
      - : Ändert die Schriftgröße für die Auswahl oder an der Einfügemarke. Dies erfordert eine ganze Zahl von `1` - `7` als Argument.
    - `foreColor`
      - : Ändert die Schriftfarbe für die Auswahl oder an der Einfügemarke. Dies erfordert einen hexadezimalen Farbwert als Argument.
    - `formatBlock`
      - : Fügt ein HTML-Blockelement um die Zeile mit der aktuellen Auswahl hinzu und ersetzt dabei das Blockelement, das die Zeile enthält (in Firefox ist {{HTMLElement("blockquote")}} eine Ausnahme - es umschließt jedes enthaltende Blockelement). Erfordert einen Tag-Name-String als Argument. Nahezu alle Blockelemente können verwendet werden. (Legacy Edge unterstützt nur die Überschrift-Tags `H1` – `H6`, `ADDRESS` und `PRE`, die in spitze Klammern gesetzt sein müssen, z.B. `"<H1>"`.)
    - `forwardDelete`
      - : Löscht das Zeichen vor der [Cursorposition](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identisch mit dem Drücken der Entf-Taste auf einer Windows-Tastatur.
    - `heading`
      - : Fügt ein Überschriftselement um eine Auswahl oder Einfügemarken-Zeile hinzu. Erfordert den Tag-Namen-String als Argument (z.B. `"H1"`, `"H6"`). (Nicht von Safari unterstützt.)
    - `highlightColor`
      - : Ändert die Hintergrundfarbe für die Auswahl oder an der Einfügemarke. Erfordert einen Farbwert als Argument. `useCSS` muss `true` sein, damit dies funktioniert.
    - `increaseFontSize`
      - : Fügt einen {{HTMLElement("big")}}-Tag um die Auswahl oder an der Einfügemarke hinzu.
    - `indent`
      - : Rückt die Zeile mit der Auswahl oder Einfügemarke ein. In Firefox werden bei Auswahl mehrerer Zeilen auf verschiedenen Einrückungsebenen nur die am wenigsten eingerückten Zeilen in der Auswahl eingerückt.
    - `insertBrOnReturn`
      - : Steuert, ob die Eingabetaste ein {{HTMLElement("br")}}-Element einfügt oder das aktuelle Blockelement in zwei teilt.
    - `insertHorizontalRule`
      - : Fügt ein {{HTMLElement("hr")}}-Element an der Einfügemarke ein oder ersetzt die Auswahl damit.
    - `insertHTML`
      - : Fügt eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder HTML-Markup-String an der Einfügemarke ein (löscht Auswahl). Dies erfordert gültiges HTML-Markup.

        > [!WARNING]
        > Die Eingabe wird als HTML geparst und in das DOM geschrieben.
        > Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
        >
        > Sie können dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
        > Weitere Informationen finden Sie in der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).

    - `insertImage`
      - : Fügt ein Bild an der Einfügemarke ein (löscht Auswahl). Erfordert eine URL-String für den `src` des Bildes als Argument. Die Anforderungen an diesen String sind die gleichen wie bei `createLink`.
    - `insertOrderedList`
      - : Erstellt eine [nummerierte geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ol) für die Auswahl oder an der Einfügemarke.
    - `insertUnorderedList`
      - : Erstellt eine [Aufzählungsliste](/de/docs/Web/HTML/Reference/Elements/ul) für die Auswahl oder an der Einfügemarke.
    - `insertParagraph`
      - : Fügt einen [Absatz](/de/docs/Web/HTML/Reference/Elements/p) um die Auswahl oder die aktuelle Zeile hinzu.
    - `insertText`
      - : Fügt den angegebenen reinen Text an der Einfügemarke ein (löscht Auswahl).
    - `italic`
      - : Schaltet Kursivierung für die Auswahl oder an der Einfügemarke ein/aus.
    - `justifyCenter`
      - : Zentriert die Auswahl oder die Einfügemarke.
    - `justifyFull`
      - : Blocksatzausrichtung für die Auswahl oder die Einfügemarke.
    - `justifyLeft`
      - : Linksbündige Ausrichtung für die Auswahl oder die Einfügemarke.
    - `justifyRight`
      - : Rechtsbündige Ausrichtung für die Auswahl oder die Einfügemarke.
    - `outdent`
      - : Hängt die Zeile mit der Auswahl oder Einfügemarke aus.
    - `paste`
      - : Fügt den Inhalt der Zwischenablage an der Einfügemarke ein (ersetzt die aktuelle Auswahl).

        Diese Funktion ist für _Webinhalt_ standardmäßig deaktiviert, wurde jedoch in einigen Browsern über die [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementiert.
        In diesen Browsern erfordert die Funktion {{Glossary("transient_activation", "transiente Aktivierung")}} und die Bestätigung eines Popup-UIs beim Einfügen von Inhalten aus verschiedenen Ursprungskontexten.
        Siehe die [Browser-Kompatibilitätstabelle](/de/docs/Web/API/Document/execCommand#browser_compatibility) für weitere Informationen.

    - `redo`
      - : Wiederholt den letzten Rückgängig-Befehl.
    - `removeFormat`
      - : Entfernt alle Formatierungen aus der aktuellen Auswahl.
    - `selectAll`
      - : Wählt den gesamten Inhalt des bearbeitbaren Bereichs aus.
    - `strikeThrough`
      - : Schaltet Durchstreichung für die Auswahl oder an der Einfügemarke ein/aus.
    - `subscript`
      - : Schaltet [Tiefstelligkeit](/de/docs/Web/HTML/Reference/Elements/sub) für die Auswahl oder an der Einfügemarke ein/aus.
    - `superscript`
      - : Schaltet [Hochstelligkeit](/de/docs/Web/HTML/Reference/Elements/sup) für die Auswahl oder an der Einfügemarke ein/aus.
    - `underline`
      - : Schaltet [Unterstreichung](/de/docs/Web/HTML/Reference/Elements/u) für die Auswahl oder an der Einfügemarke ein/aus.
    - `undo`
      - : Macht den letzten ausgeführten Befehl rückgängig.
    - `unlink`
      - : Entfernt das [Ankerelement](/de/docs/Web/HTML/Reference/Elements/a) von einem ausgewählten Hyperlink.
    - `useCSS` {{Deprecated_inline}}
      - : Schaltet die Verwendung von HTML-Tags oder CSS für das generierte Markup um. Erfordert einen booleschen true/false als Argument.
        > [!NOTE]
        > Dieses Argument ist logischerweise rückwärts (d.h. verwenden Sie `false`, um CSS zu verwenden,
        > `true`, um HTML zu verwenden). Dies wurde zugunsten von `styleWithCSS` veraltet.
    - `styleWithCSS`
      - : Ersetzt den Befehl `useCSS`. `true` ändert/erzeugt `style`-Attribute im Markup, `false` erzeugt Präsentationselemente.
    - `AutoUrlDetect`
      - : Ändert das automatische Verlinkungs-Verhalten des Browsers.

- `showDefaultUI`
  - : Ein boolescher Wert, der angibt, ob die standardmäßige Benutzeroberfläche angezeigt werden soll. Dies ist in Mozilla nicht verfügbar.
- `valueArgument`
  - : Für Befehle, die ein Eingabeargument erfordern, ist dies ein String, der diese Information bereitstellt. Zum Beispiel benötigt `insertImage` die URL des einzufügenden Bildes. Geben Sie `null` an, wenn kein Argument erforderlich ist.

### Rückgabewert

Ein boolescher Wert, der `false` ist, wenn der Befehl nicht unterstützt oder deaktiviert ist.

> [!NOTE]
> `document.execCommand()` gibt nur `true` zurück, wenn es als Teil einer Benutzerinteraktion aufgerufen wird. Sie können es nicht verwenden, um die Browserunterstützung vor dem Aufruf eines Befehls zu überprüfen.

## Beispiele

### Verwendung von insertText

Dieses Beispiel zeigt zwei sehr einfache HTML-Editoren, einen mit einem {{HTMLElement("textarea")}}-Element und einen mit einem {{HTMLElement("pre")}}-Element, das das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut gesetzt hat.

Das Klicken auf die Schaltflächen "Fett" oder "Kursiv" fügt die entsprechenden Tags im Element ein, wobei `insertText` verwendet wird, um die Bearbeitungshistorie beizubehalten, sodass der Benutzer die Aktion rückgängig machen kann.

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

Dieses Beispiel enthält ein {{HTMLElement("textarea")}}-Element und ein {{HTMLElement("button")}}-Element, das verwendet werden kann, um Inhalte in dieses einzufügen.

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

In Browsern, die diese Funktion mithilfe der [Clipboard API](/de/docs/Web/API/Clipboard_API#security_considerations) implementieren, sollten Sie in der Lage sein, Inhalte aus dem gleichen Ursprungsbereich, wie Text aus dem Textbereich, zu kopieren und dann einzufügen, um den ausgewählten Inhalt zu ersetzen.
Wenn Sie versuchen, Inhalte aus fremden Ursprungskontexten einzufügen, wie z.B. Text, der von einer anderen Seite oder einem anderen Ort kopiert wurde, müssen Sie zuerst die "Einfügen"-UI auswählen, die angezeigt wird.

{{EmbedLiveSample("Using paste", 100, 300)}}

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spec-Entwurf](https://w3c.github.io/editing/docs/execCommand/).

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
