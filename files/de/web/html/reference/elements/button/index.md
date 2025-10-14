---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 7307f1c0d3ac3ff499467f7a280fb3172e48e27f
---

Das **`<button>`**-Element [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das durch einen Benutzer mit einer Maus, Tastatur, Finger, Sprachbefehl oder anderen unterstützenden Technologien aktiviert wird. Einmal aktiviert, führt es dann eine Aktion aus, wie z. B. das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "Benutzeragent")}} läuft. Sie können jedoch das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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
  - : Dieses boolesche Attribut gibt an, dass der Button beim Laden der Seite den Eingabefokus haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem von einem Steuer-`<button>`-Element kontrollierten Element durchgeführt werden soll, das über das `commandfor`-Attribut angegeben wird. Mögliche Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als modales Dialogfenster. Wenn das Dialogfenster bereits modal ist, erfolgt keine Aktion. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn das Dialog geschlossen ist, erfolgt keine Aktion. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem `<dialog>`-Element.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis für ein {{htmlelement("dialog")}}-Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis. Dies unterscheidet sich vom `close`-Befehl darin, dass Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) beim `cancel`-Ereignis aufrufen können, um zu verhindern, dass das `<dialog>` geschlossen wird. Wenn das Dialog bereits geschlossen ist, erfolgt keine Aktion. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem `<dialog>`-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, erfolgt keine Aktion. Weitere Informationen finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht der Einstellung eines Wertes von `show` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, erfolgt keine Aktion. Weitere Informationen finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht der Einstellung eines Wertes von `hide` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button schaltet ein Popover zwischen Anzeigen und Verbergen um. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Weitere Informationen finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht der Einstellung eines Wertes von `toggle` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) beim gesteuerten Element aus.

- `commandfor`
  - : Macht ein `<button>`-Element zu einem Befehlsschaltfläche, um ein gegebenes interaktives Element zu steuern, indem der im Button-Attribut [`command`](#command) angegebene Befehl ausgeführt wird. Das `commandfor`-Attribut nimmt die ID des zu steuernden Elements als Wert an. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: er kann weder gedrückt noch fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das dem Button zugeordnete {{HTMLElement("form")}}-Element (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<button>` seinem Vorfahr-`<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente überall im Dokument mit `<form>`s zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahr-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die durch den Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Macht nichts, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Absende-Button ist (er befindet sich in einem `<form>` oder ist damit verknüpft und hat nicht den Typ `type="button"`), gibt er an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert, falls das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente zu übermitteln, deren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribute auf `file` gesetzt sind.
    - `text/plain`: Als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`
  - : Wenn der Button ein Absende-Button ist (er befindet sich in einem `<form>` oder ist damit verknüpft und hat nicht den Typ `type="button"`), spezifiziert dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods), die verwendet wird, um das Formular zu übermitteln. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im Body der HTTP-Anfrage an den Server gesendet. Verwenden Sie dieses Attribut, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z. B. Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Separator, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Seiteneffekte")}} hat, wie z. B. Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button das [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Absende-Button ist, gibt dieses boolesche Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Absende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrichenes Schlüsselwort, das angibt, wo die Antwort von der Formularübermittlung angezeigt werden soll. Dies ist der `name` eines Browsing-Kontexts (einer Registerkarte, eines Fensters oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext — normalerweise eine neue Registerkarte oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen übergeordneten Kontext hat). Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option wie `_self`.

- `name`
  - : Der Name des Buttons, übermittelt als Paar mit dem `value` des Buttons als Teil der Formulardaten, wenn dieser Button verwendet wird, um das Formular zu übermitteln.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in einen Popover-Steuerelement-Button um; nimmt die ID des zu steuernden Popover-Elements als Wert an. Eine Beziehung zwischen einem Popover und seinem Auslöse-Button mithilfe des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastatur-Fokussierungsnavigation, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastatur- und assistive Technologie (AT)-Benutzer (siehe auch [Popover-Accessibility-Features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizierte Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungselementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem von einem Steuer-`<button>`-Element kontrollierten Popover-Element durchgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, erfolgt keine Aktion.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, erfolgt keine Aktion.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen Anzeigen und Verbergen um. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungselement durchgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons im Zusammenhang mit einem `<form>` nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er standardmäßig gedrückt wird. Er kann clientseitige Skripte haben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der dem `name` des Buttons zugeordnet ist, wenn er zusammen mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in Parametern übergeben, wenn das Formular mit diesem Button übermittelt wird.

## Hinweise

Ein Absende-Button mit gesetztem `formaction`-Attribut, aber ohne zugehöriges Formular macht nichts. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie ihn in ein `<form>` einschließen oder das `form`-Attribut auf die ID des Formulars setzen.

`<button>`-Elemente lassen sich viel einfacher stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht dazu da sind, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht existente) Antwort zu laden, wodurch der aktuelle Zustand des Dokuments möglicherweise zerstört wird.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmable Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie z. B. das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen die Benutzeragenten Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Items. Ein auf `display: inline` gesetzter Button wird wie `display: inline-block` gestyled.

## Barrierefreiheit

### Symbol-Buttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Bildschirmleser, um darauf zuzugreifen, wenn sie das Dokument analysieren und [einen Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erzeugen. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um durch Inhalte zu navigieren und diese zu manipulieren.

Um einem Symbol-Button einen zugänglichen Namen zu geben, setzen Sie Text in das `<button>`-Element, der die Funktionalität des Buttons kurz beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine zugängliche Möglichkeit, dies zu tun, die Verwendung [einer Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/), um ihn visuell vom Bildschirm zu entfernen, aber von unterstützender Technologie analysierbar zu halten.

Es ist jedoch erwähnenswert, dass das sichtbare Belassen des Button-Texts Menschen helfen kann, die möglicherweise mit der Bedeutung des Symbols nicht vertraut sind oder den Zweck des Buttons nicht verstehen. Dies ist besonders wichtig für Menschen, die nicht technisch versiert sind oder unterschiedliche kulturelle Interpretationen des Symbols haben, das der Button verwendet.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis von WCAG, Leitfaden 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Eingabemethoden wie einen Stylus oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixeln")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Eine große Menge an interaktiven Inhalten — einschließlich Buttons — die in enger visueller Nähe zueinander platziert sind, sollte Platz zwischen sich haben. Dieser Abstand ist vorteilhaft für Menschen, die motorische Kontrollprobleme haben, und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstand kann mithilfe von CSS-Eigenschaften wie {{cssxref("margin")}} erzeugt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut, das zu verwenden ist, [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standardfokusrahmen für Elemente, die fokussiert sind, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit Sehbehinderungen ihn wahrnehmen und Menschen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Styles auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, wenn die Heuristiken des Benutzeragenten bestimmen, dass der Fokus hervorgehoben werden sollte, zum Beispiel wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Kontrastverhältnis der Farben wird durch den Vergleich der Leuchtkraft der Button-Text- und Hintergrundfarben mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbabgleich-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob ein Klick auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typs standardmäßig dazu führt, dass er fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben dem klickenden Button den Fokus, aber [Safari tut dies nicht, per Design](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines grundlegenden Buttons

Dieses Beispiel erstellt einen klickbaren Button.
Das Attribut `type="button"` sorgt dafür, dass der Button kein Standardverhalten hat.
Sie können diesen Button interaktiv machen, indem Sie JavaScript oder Attribute wie `command` und `commandfor` verwenden.

```html
<button type="button" name="button">I'm a button</button>
```

{{ EmbedLiveSample('creating_a_basic_button', 200, 64) }}

### Verwendung des `request-close`-Werts für das `command`-Attribut

Das Dialog in diesem Beispiel hat zwei Radiobuttons, die steuern, ob das Dialog geschlossen werden kann oder nicht.
Wählen Sie **Ja** oder **Nein** und klicken Sie dann auf **Request to Close**, um zu versuchen, das Dialog zu schließen.
Wenn **Ja** ausgewählt ist, schließt sich das Dialog; wenn **Nein** ausgewählt ist, bleibt das Dialog geöffnet und zeigt stattdessen eine Nachricht.

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
    return;
  }
});
```

{{ EmbedLiveSample('using_the_request-close_value_for_the_command_attribute', 100, 200) }}

Der **Open Dialog**-Button öffnet das `<dialog>`-Element mit `command="show-modal"`.

Der **Request to Close**-Button hat `command="request-close"`, das das `<dialog>`-Element mit dem Attribut `commandfor="mydialog"` anvisiert. Wenn es angeklickt wird, fragt es das `<dialog>`, ob es geschlossen werden kann (anders als das `command="close"`-Attribut, das das `<dialog>` sofort schließen würde).
Dies überprüft, ob das `<dialog>` mittels eines `cancel`-Ereignisses [`cancelable`](/de/docs/Web/API/Event/cancelable) ist.

Wenn das Ereignis `cancelable` ist, wird der Wert der Radiobuttons überprüft:

- Wenn auf `yes` gesetzt, wird das Dialog geschlossen.
- Wenn auf `no` gesetzt, wird das `hidden`-Attribut bei der Warnung deaktiviert und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen, die das standardmäßige Schließen des `<dialog>` verhindert.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">Interaktive Inhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed">gelistet</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable">beschriftbar</a> und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable">übermittelbar</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content">formularassoziiertes</a>
        Element, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalte</a>
        aber es darf keine
        <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">interaktiven Inhalte</a> geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, kann es ebenfalls
auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalte</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role">button</a></code>
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
