---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer über Maus, Tastatur, Finger, Sprachbefehl oder andere unterstützende Technologien aktiviert wird. Nach der Aktivierung führt es dann eine Aktion aus, wie z. B. das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft, aber das Aussehen der Buttons kann mit [CSS](/de/docs/Web/CSS) geändert werden.

{{InteractiveExample("HTML Demo: &lt;button&gt;", "tabbed-shorter")}}

```html interactive-example
<button class="favorite styled" type="button">Add to favorites</button>
```

```css interactive-example
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
  background-color: tomato;
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 0.2),
    rgb(0 0 0 / 0.2) 30%,
    transparent
  );
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 0.6),
    inset -2px -2px 3px rgb(0 0 0 / 0.6);
}

.styled:hover {
  background-color: red;
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 0.6),
    inset 2px 2px 3px rgb(0 0 0 / 0.6);
}
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`
  - : Dieses Boolean-Attribut gibt an, dass der Button beim Laden der Seite den Eingabe-Fokus haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Steuerungs-`<button>`-Element gesteuert wird, das über das `commandfor`-Attribut angegeben wird. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem `<dialog>`-Element.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis auf einem {{htmlelement("dialog")}}-Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis. Dies unterscheidet sich vom `close`-Befehl, da die Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem `cancel`-Ereignis aufrufen können, um zu verhindern, dass das `<dialog>` geschlossen wird. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem `<dialog>`-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn versucht wird, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ausgeführt. Weitere Einzelheiten finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Werts von `show` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button verbirgt ein sichtbares Popover. Wenn versucht wird, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt. Weitere Einzelheiten finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Werts von `hide` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen sichtbar und verborgen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es verborgen. Weitere Einzelheiten finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Werts von `toggle` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Verwandelt ein `<button>`-Element in einen Befehlsknopf, der ein bestimmtes interaktives Element steuert, indem der im Button's [`command`](#command) Attribut angegebene Befehl ausgeführt wird. Das `commandfor`-Attribut nimmt die ID des zu steuernden Elements als Wert an. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, dem der Button zugeordnet werden soll (sein _Formularinhaber_). Der Wert dieses Attributs muss die `id` eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` mit dem übergeordneten `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die von dem Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularinhabers des Buttons. Tut nichts, wenn kein Formularinhaber vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Absenden-Button ist (er ist innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt an, wie die gesendeten Formulardaten kodiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen auf `file` gesetzt zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut festgelegt ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularinhabers des Buttons.

- `formmethod`
  - : Wenn der Button ein Absenden-Button ist (er ist innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) zur Übermittlung des Formulars an. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im Body der HTTP-Anfrage enthalten, wenn sie an den Server gesendet werden. Verwenden Sie diese, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z. B. Anmeldeinformationen.
    - `get`: Die Formulardaten werden der `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button den mit ihm verbundenen [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt und die Formulardaten überhaupt nicht übermittelt.

    Wenn spezifiziert, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularinhabers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Absenden-Button ist, gibt dieses Boolean-Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut festgelegt ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularinhabers des Buttons.

    Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Absenden-Button ist, ist dieses Attribut ein vom Autor definierter Name oder standardisiertes, unterstrichene Präfix-Schlüsselwort, das angibt, wo die Antwort vom Übermitteln des Formulars angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (einen Tab, ein Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut festgelegt ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularinhabers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lässt die Antwort im gleichen Browsing-Kontext wie der aktuelle anzeigen. Dies ist der Standard, wenn das Attribut nicht festgelegt ist.
    - `_blank`: Lässt die Antwort in einem neuen, unbenannten Browsing-Kontext laden — normalerweise ein neuer Tab oder ein neues Fenster, je nach Browsereinstellungen des Benutzers.
    - `_parent`: Lässt die Antwort im übergeordneten Browsing-Kontext des aktuellen anzeigen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lässt die Antwort im obersten Browsing-Kontext (d.h. der Browsing-Kontext, der ein Vorfahre des aktuellen ist, und keinen übergeordneten hat) anzeigen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.

- `interestfor` {{experimental_inline}}
  - : Definiert das `<button>`-Element als **Interessen-Auslöser**. Sein Wert ist die `id` eines Zielelements, das in irgendeiner Weise betroffen wird (normalerweise gezeigt oder verborgen), wenn Interesse an dem Auslöser-Element gezeigt oder verloren wird (zum Beispiel durch Hovern/Verlassen oder Fokussieren/Entfokussieren darauf). Weitere Einzelheiten und Beispiele finden Sie unter [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers).

- `name`
  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Absenden des Formulars verwendet wird.

- `popovertarget`
  - : Verwandelt ein `<button>`-Element in einen Popover-Steuerungsbutton; nimmt die ID des zu steuernden Popover-Elements als Wert an. Das Herstellen einer Beziehung zwischen einem Popover und seinem Auslöser-Button mithilfe des `popovertarget`-Attributs hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT)-Nutzer zugänglicher (siehe auch [Popover accessibility features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Anker-Referenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungen mithilfe von [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Einzelheiten finden Sie unter [Popover anchor positioning](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf ein Popover-Element ausgeführt werden soll, das von einem Steuerungs-`<button>` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein gezeigtes Popover verbergen. Wenn versucht wird, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn versucht wird, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen sichtbar und verborgen wechseln. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die durch den Steuerungsbutton ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut nicht für Buttons angegeben ist, die mit einem `<form>` verbunden sind, oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird. Er kann clientseitige Skripte haben, die auf Ereignisse des Elements lauschen, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verbunden ist, wenn es mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server übermittelt, wenn das Formular mit diesem Button gesendet wird.

## Anmerkungen

Ein Absende-Button mit dem gesetzten Attribut `formaction`, aber ohne ein zugeordnetes Formular, tut nichts. Sie müssen einen Formularinhaber festlegen, entweder indem Sie ihn in ein `<form>` einbinden oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können innere HTML-Inhalte hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudoelemente für komplexes Rendering.

Wenn Ihre Buttons nicht zum Übermitteln von Formulardaten an einen Server vorgesehen sind, sollten Sie sicherstellen, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, wodurch möglicherweise der aktuelle Dokumentzustand zerstört wird.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User Agents Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erzeugt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Screenreader, um darauf zuzugreifen, wenn sie das Dokument analysieren und einen [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>`-Element ein, der die Funktion des Buttons kurz beschreibt.

#### Beispiele

```html
<button name="favorite">
  <svg fill="black" viewBox="0 0 42 42">
    <path
      d="M21,1c1.081,0,5.141,12.315,6.201,13.126s13.461,1.053,13.791,2.137 c0.34,1.087-9.561,8.938-9.961,10.252c-0.409,1.307,
      3.202,13.769,2.331,14.442c-0.879,0.673-11.05-6.79-12.361-6.79 c-1.311,0-11.481,7.463-12.36,6.79c-0.871-0.674,2.739-13.136,
      2.329-14.442c-0.399-1.313-10.3-9.165-9.96-10.252 c0.33-1.084,12.731-1.326,13.791-2.137S19.91,1,21,1z"></path>
  </svg>
  Add to favorites
</button>
```

##### Ergebnis

{{EmbedLiveSample('Icon buttons')}}

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es eine zugängliche Möglichkeit, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell von der Bildschirmdarstellung zu entfernen, aber für unterstützende Technologien analysierbar zu halten.

Es ist jedoch zu beachten, dass das Sichtbarlassen des Button-Textes Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die technologisch nicht versiert sind oder unterschiedliche kulturelle Interpretationen des Icons haben, das der Button verwendet.

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Guideline 4.1 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um einfach aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Steuerungsproblemen und Personen, die ungenaue Eingabemethoden wie einen Stylus oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiver Inhalte — einschließlich Buttons — die in enger visueller Nähe zueinander platziert sind, sollten durch Platz getrennt sein. Diese Abstände sind von Nutzen für Menschen mit motorischen Steuerungsproblemen, die versehentlich das falsche interaktive Element aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Statusinformationen

Um den Status eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr darüber zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den standardmäßigen Fokus-Ring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig sicherzustellen, dass der Fokus-Zustand einen ausreichenden Kontrast hat, damit Menschen mit Sehschwächen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristik des User Agents bestimmt, dass der Fokus hervorgehoben werden sollte, wie z. B. wenn ein `<button>` den Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Text- und Hintergrundfarbwerte des Buttons mit dem Hintergrund, auf dem der Button platziert ist, verglichen wird. Um die aktuellen [Richtlinien für Barrierefreiheit im Webinhalt (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text wird definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer oder 24px oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>`- oder {{HTMLElement("input")}}-Button standardmäßig dazu führt, dass er fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem angeklickten Button den Fokus, aber [Safari nicht, aus Designgründen](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines grundlegenden Buttons

Dieses Beispiel erstellt einen anklickbaren Button. Das Attribut `type="button"` stellt sicher, dass der Button kein Standardverhalten hat. Sie können diesen Button interaktiv gestalten, indem Sie JavaScript oder Attribute wie `command` und `commandfor` verwenden.

```html
<button type="button" name="button">I'm a button</button>
```

{{EmbedLiveSample('creating_a_basic_button', 200, 64)}}

### Verwendung des `request-close`-Werts für das `command`-Attribut

Der Dialog in diesem Beispiel hat zwei Optionsfelder, die steuern, ob der Dialog geschlossen werden kann oder nicht. Wählen Sie **Ja** oder **Nein** und klicken Sie dann auf **Request to Close**, um zu versuchen, den Dialog zu schließen. Wenn **Ja** ausgewählt ist, schließt sich der Dialog; wenn **Nein** ausgewählt ist, bleibt der Dialog offen und zeigt stattdessen eine Nachricht an.

```html
<button type="button" commandfor="mydialog" command="show-modal">
  Open Dialog
</button>
<dialog id="mydialog">
  <div class="wrapper">
    <form>
      <fieldset>
        <legend>Allow this dialog to close when requested?</legend>
        <div>
          <input type="radio" id="no" name="close" value="no" checked />
          <label for="no">No</label>
        </div>
        <div>
          <input type="radio" id="yes" name="close" value="yes" />
          <label for="yes">Yes</label>
        </div>
      </fieldset>
    </form>
    <button commandfor="mydialog" command="request-close">
      Request to Close
    </button>
    <p class="warning" hidden>You must choose "Yes" to close this dialog.</p>
  </div>
</dialog>
```

```css hidden
.warning {
  color: tomato;
}
```

```js
const dialog = document.querySelector("dialog");
const radio = document.querySelector("form").elements["close"];
const warning = document.querySelector(".warning");

dialog.addEventListener("cancel", (e) => {
  if (!e.cancelable) return;
  if (radio.value === "no") {
    warning.hidden = false;
    e.preventDefault();
  } else {
    warning.hidden = true;
  }
});
```

{{EmbedLiveSample('using_the_request-close_value_for_the_command_attribute', 100, 200)}}

Der **Open Dialog**-Button öffnet das `<dialog>`-Element mit `command="show-modal"`.

Der **Request to Close**-Button hat `command="request-close"`, das das `<dialog>`-Element mit dem `commandfor="mydialog"`-Attribut anvisiert. Wenn darauf geklickt wird, fragt es das `<dialog>`, ob es geschlossen werden kann (im Gegensatz zum `command="close"`-Attribut, das das `<dialog>` sofort schließen würde). Dies überprüft, ob das `<dialog>` [`cancelable`](/de/docs/Web/API/Event/cancelable) ist, indem ein `cancel`-Ereignis verwendet wird.

Wenn das Ereignis `cancelable` ist, wird der Wert der Optionsfelder geprüft:

- Wenn auf `ja` gesetzt, wird der Dialog geschlossen.
- Wenn auf `nein` gesetzt, wird das `hidden`-Attribut auf die Warnung ausgeschaltet und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wird aufgerufen, was das Schließen des `<dialog>` verhindert.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >etikettierbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittlungsfähig</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiert</a
        >
        Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        jedoch darf es keine
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elements</a> ist, kann es auch
   null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Markierungsweglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>combobox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
