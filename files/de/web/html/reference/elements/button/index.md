---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, Finger, Sprachbefehl oder einer anderen unterstützenden Technologie aktiviert wird. Nach der Aktivierung führt es eine Aktion aus, wie z. B. das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft, aber Sie können das Erscheinungsbild der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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
  - : Dieses Boolean-Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Steuerelement `<button>` gesteuert wird, das über das `commandfor`-Attribut angegeben ist. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ergriffen. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button wird ein {{htmlelement("dialog")}}-Element schließen. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ergriffen. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem `<dialog>`-Element.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis auf einem {{htmlelement("dialog")}}-Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis. Dies unterscheidet sich vom `close`-Befehl dadurch, dass Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das `cancel`-Ereignis aufrufen können, um zu verhindern, dass das `<dialog>` geschlossen wird. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ergriffen. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem `<dialog>`-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ergriffen. Weitere Einzelheiten finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Wertes von `show` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button wird ein sichtbares Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover auszublenden, wird keine Aktion ergriffen. Weitere Einzelheiten finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Wertes von `hide` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button schaltet ein Popover zwischen sichtbar und verborgen um. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es ausgeblendet. Weitere Einzelheiten finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Wertes von `toggle` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen ein [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehlsbutton um, der ein bestimmtes interaktives Element steuert, indem er den im [`command`](#command)-Attribut des Buttons angegebenen Befehl ausführt. Das `commandfor`-Attribut nimmt die ID des zu steuernden Elements als Wert an. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: er kann nicht gedrückt oder fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem der Button verknüpft werden soll (seine _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<button>` mit seinem Vorfahren `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`-Elementen an beliebiger Stelle im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahre-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die Informationen verarbeitet, die vom Button übermittelt werden. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Tut nichts, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Sende-Button ist (innerhalb/assoziiert mit einem `<form>` und nicht `type="button"`), gibt an, wie die übermittelten Formulardaten kodiert werden. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen, die auf `file` gesetzt sind, zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für die tatsächliche Formularübermittlung verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`
  - : Wenn der Button ein Sende-Button ist (innerhalb/assoziiert mit einem `<form>` und nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die zur Übermittlung des Formulars verwendet wird. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im Body der HTTP-Anfrage enthalten, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z. B. Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen")}} hat, wie z. B. Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er assoziiert ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Sende-Button ist, gibt dieses Boolean-Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Sende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrichenes Schlüsselwort, das angibt, wo die Antwort auf die Formularübermittlung angezeigt werden soll. Dies ist der `name` eines oder ein Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, ein Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Die Antwort wird im selben Browsing-Kontext wie der aktuelle geladen. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist.
    - `_blank`: Die Antwort wird in einem neuen unbenannten Browsing-Kontext geladen – in der Regel ein neuer Tab oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Die Antwort wird im übergeordneten Browsing-Kontext des aktuellen geladen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option genauso wie `_self`.
    - `_top`: Die Antwort wird im obersten Browsing-Kontext geladen (also der, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option genauso wie `_self`.

- `name`
  - : Der Name des Buttons, der zusammen mit dem Wert des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Absenden des Formulars verwendet wird.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in einen Popover-Steuerbutton um; nimmt die ID des Popover-Elements an, das als Wert zu steuern ist. Die Einrichtung einer Beziehung zwischen einem Popover und seinem auslösenden Button mit dem `popovertarget`-Attribut hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologiebenutzer (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem Popover-Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover auszublenden, wird keine Aktion ergriffen.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ergriffen.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen sichtbar und verborgen um. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerbutton ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standardwert, wenn das Attribut für Buttons, die mit einem `<form>` assoziiert sind, nicht angegeben ist oder wenn das Attribut leer oder ungültig ist.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut standardmäßig nichts, wenn er gedrückt wird. Es kann clientseitige Skripte geben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse eintreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn es mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server als Parameter übermittelt, wenn das Formular mit diesem Button gesendet wird.

## Hinweise

Ein Sende-Button mit dem Attribut `formaction`, aber ohne ein zugeordnetes Formular, tut nichts. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie ihn in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneres HTML-Inhalte hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Renderings.

Wenn Ihre Buttons nicht zum Übermitteln von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstören könnte.

Während `<button type="button">` kein Standardverhalten hat, können Skript-gesteuerte Ereignishandler programmiert werden. Ein aktivierter Button kann programmierbare Aktionen ausführen, indem er [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwendet, z. B. ein Element von einer Liste entfernen.

Standardmäßig stylen User Agents Buttons als `display: flow-root`, was einen neuen [block formatting context](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Artikel. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbolische Buttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologie, wie Bildschirmleser, um beim Parsen des Dokuments und Generieren [eines Zugänglichkeitsbaums](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) darauf zuzugreifen. Unterstützende Technologie verwendet dann den Zugänglichkeitsbaum, um die Seitennavigations- und Inhaltsverarbeitungsprozesse zu navigieren und zu manipulieren.

Um einem symbolischen Button einen zugänglichen Namen zu geben, setzen Sie Text in das `<button>`-Element, das die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine zugängliche Möglichkeit, dies zu tun, eine [Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, jedoch weiterhin von unterstützender Technologie analysierbar zu machen.

Es ist jedoch erwähnenswert, dass das Halten des Textes des Buttons sichtbar Menschen helfen kann, die mit der Bedeutung des Symbols nicht vertraut sind oder den Zweck des Buttons nicht verstehen. Dies ist besonders wichtig für Personen, die nicht technologisch versiert sind oder die möglicherweise unterschiedliche kulturelle Interpretationen des Symbols haben, das der Button verwendet.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis der WCAG, Richtlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktivierbar zu sein. Dies hilft verschiedenen Menschen, einschließlich Menschen mit motorischen Problemen und Menschen, die nicht präzise Formen der Eingabe wie einen Stylus oder Finger verwenden. Eine Mindest-Interaktivgröße von 44 × 44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis der WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Buttons —, die in naher visueller Nähe zueinander platziert sind, sollten Raum dazwischen haben. Diese Abstände sind vorteilhaft für Menschen mit motorischen Problemen, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Der Abstand kann mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesenbutton-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über das [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standardfokus-Ring für Elemente mit Fokus nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast aufweist**, damit Personen mit Sehbehinderungen ihn wahrnehmen können und Personen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des User Agents bestimmen, dass der Fokus hervorgehoben werden sollte, wie bei einem `<button>`, das Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der Text- und Hintergrundfarbenwerte des Buttons mit dem Hintergrund, auf den der Button platziert ist, verglichen wird. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text wird als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer definiert.)

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Button-Typen diesen (standardmäßig) fokussiert macht, variiert je nach Browser und Betriebssystem. Die meisten Browser geben Fokus auf einen Button, der geklickt wird, aber [Safari tut dies aus Designgründen nicht](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines grundlegenden Buttons

Dieses Beispiel erstellt einen klickbaren Button.
Das Attribut `type="button"` stellt sicher, dass der Button kein Standardverhalten hat.
Sie können diesen Button mit JavaScript interaktiv machen oder mit Attributen wie `command` und `commandfor`.

```html
<button type="button" name="button">I'm a button</button>
```

{{ EmbedLiveSample('creating_a_basic_button', 200, 64) }}

### Verwendung des Wertes `request-close` für das `command`-Attribut

Der Dialog in diesem Beispiel hat zwei Optionsbuttons, die steuern, ob der Dialog geschlossen werden kann oder nicht.
Wählen Sie **Ja** oder **Nein** und klicken Sie dann auf **Anfrage zum Schließen**, um zu versuchen, den Dialog zu schließen.
Wenn **Ja** ausgewählt ist, wird der Dialog geschlossen; wenn **Nein** ausgewählt ist, bleibt der Dialog geöffnet und zeigt stattdessen eine Nachricht an.

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

{{ EmbedLiveSample('using_the_request-close_value_for_the_command_attribute', 100, 200) }}

Der **Open Dialog** Button öffnet das `<dialog>`-Element mit `command="show-modal"`.

Der **Request to Close** Button hat `command="request-close"`, das das `<dialog>`-Element mit dem Attribut `commandfor="mydialog"` anvisiert. Wenn darauf geklickt wird, fragt es das `<dialog>`, ob es geschlossen werden kann (im Gegensatz zum Attribut `command="close"`, das das `<dialog>` sofort schließen würde).
Es prüft, ob das `<dialog>` durch ein `cancel`-Ereignis [`cancelable`](/de/docs/Web/API/Event/cancelable) ist.

Wenn das Ereignis `cancelable` ist, wird der Wert der Optionsbuttons überprüft:

- Wenn auf `ja` gesetzt, wird der Dialog geschlossen.
- Wenn auf `nein` gesetzt, wird das `hidden`-Attribut auf der Warnung ausgeschaltet und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wird aufgerufen, die das Standard-Schließverhalten des `<dialog>` verhindert.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktive Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularzugehörig</a
        >
        Element, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >
        aber es darf keine
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalte</a
        > enthalten. Ist das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elements</a>, kann es null oder ein {{htmlelement("selectedcontent")}} Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
