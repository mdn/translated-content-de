---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Einmal aktiviert, führt es dann eine Aktion aus, wie zum Beispiel das Senden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User Agent")}} läuft, aber Sie können das Erscheinungsbild von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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
  - : Dieses Boolesche Attribut gibt an, dass der Button beim Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem von einem Steuerungs-`<button>`-Element kontrollierten Element durchgeführt werden soll, das über das `commandfor`-Attribut spezifiziert wird. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als modales Fenster an. Wenn das Dialog bereits modal ist, wird keine Aktion durchgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn das Dialog bereits geschlossen ist, wird keine Aktion durchgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem `<dialog>`-Element.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis auf einem {{htmlelement("dialog")}}-Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis. Dies unterscheidet sich von dem `close`-Befehl, da Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) beim `cancel`-Ereignis aufrufen können, um zu verhindern, dass das `<dialog>` geschlossen wird. Wenn das Dialog bereits geschlossen ist, wird keine Aktion durchgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem `<dialog>`-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits sichtbares Popover zu zeigen, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen des Wertes `show` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button versteckt ein sichtbares Popover. Wenn Sie versuchen, ein bereits verstecktes Popover auszublenden, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen des Wertes `hide` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen sichtbar und versteckt. Wenn das Popover versteckt ist, wird es gezeigt; wenn das Popover sichtbar ist, wird es versteckt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen des Wertes `toggle` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) an dem gesteuerten Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehls-Button um, der ein gegebenes interaktives Element steuert, indem der in der `command`-Attribut des Buttons angegebene Befehl ausgeführt wird. Das `commandfor`-Attribut nimmt die ID des zu steuernden Elements als seinen Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: er kann nicht gedrückt oder fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem der Button verbunden werden soll (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` mit seinem Vorfahren-`<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente zu `<form>`s überall im Dokument zuzuordnen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formular-Eigentümers des Buttons. Tut nichts, wenn es keinen Formular-Eigentümer gibt.
- `formenctype`
  - : Wenn der Button ein Sende-Button ist (er befindet sich in/ist einem `<form>` zugeordnet und hat nicht `type="button"`), gibt er an, wie die gesendeten Formulardaten codiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen auf `file` gesetzt zu senden.
    - `text/plain`: Als Debugging-Hilfe spezifiziert; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut festgelegt ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formular-Eigentümers des Buttons.

- `formmethod`
  - : Wenn der Button ein Sende-Button ist (er befindet sich in/ist einem `<form>` zugeordnet und hat nicht `type="button"`), bestimmt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods), die zum Senden des Formulars verwendet wird. Mögliche Werte:
    - `post`: Die Daten aus dem Formular sind im Body des HTTP-Requests enthalten, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldeinformationen.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er assoziiert ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn festgelegt, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formular-Eigentümers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Sende-Button ist, gibt dieses Boolesche Attribut an, dass das Formular beim Senden **nicht** [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) wird. Wenn dieses Attribut festgelegt ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formular-Eigentümers des Buttons.

    Dieses Attribut ist auch für [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elemente verfügbar.

- `formtarget`
  - : Wenn der Button ein Sende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrich-prefixed Schlüsselwort, das angibt, wo die Antwort auf das Senden des Formulars angezeigt werden soll. Dies ist der `name` eines Browsing-Kontexts (ein Tab, ein Fenster oder ein {{HTMLElement("iframe")}}). Wenn dieses Attribut festgelegt ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formular-Eigentümers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht spezifiziert ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext - in der Regel ein neues Tab oder Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen Elternkontext gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternkontext hat). Wenn es keinen Elternkontext gibt, verhält sich diese Option wie `_self`.

- `name`
  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten gesendet wird, wenn dieser Button zum Senden des Formulars verwendet wird.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in einen Popover-Steuerungs-Button um; nimmt die ID des zu steuernden Popover-Elements als Wert. Die Etablierung einer Beziehung zwischen einem Popover und seinem aufrufenden Button durch das `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer und platziert das Popover beim Anzeigen logisch in der Tastaturfokusnavigation. Dies macht das Popover für Tastatur- und unterstützende Technologie- (AT) Benutzer zugänglicher (siehe auch [Popover-Eigenschaften für die Barrierefreiheit](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Verankerungsreferenz zwischen den beiden, was es sehr praktisch macht, Popover relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die an einem Popover-Element durchgeführt werden soll, das von einem Steuerungs-`<button>` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover auszublenden, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits sichtbares Popover zu zeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen sichtbar und versteckt. Wenn das Popover versteckt ist, wird es gezeigt; wenn das Popover sichtbar ist, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist das Standardverhalten `"toggle"`, das vom Steuerungs-Button ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die einem `<form>` zugeordnet sind, nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er standardmäßig gedrückt wird. Er kann client-seitige Skripte enthalten, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in den Parametern übergeben, wenn das Formular mit diesem Button gesendet wird.

## Hinweise

Ein Sende-Button mit dem Attribut `formaction` gesetzt, aber ohne ein zugeordnetes Formular, tut nichts. Sie müssen einen Formular-Eigentümer festlegen, indem Sie ihn entweder in ein `<form>` einbinden oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente lassen sich viel leichter stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Gestaltung verwenden.

Wenn Ihre Buttons nicht dazu gedacht sind, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler skriptgesteuerte Aktionen auslösen. Ein aktivierter Button kann programmierbare Aktionen ausführen, z. B. ein Element aus einer Liste entfernen, mittels [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Standardmäßig stylen Benutzeragenten Buttons als `display: flow-root`, was einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erzeugt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbol-Buttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologie, wie Bildschirmlesegeräte, die beim Parsen des Dokuments einen [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologie verwendet dann den Barrierefreiheitsbaum, um den Seiteninhalt zu navigieren und zu manipulieren.

Um einem Symbol-Button einen zugänglichen Namen zu geben, platzieren Sie Text im `<button>`-Element, das die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell verstecken möchten, können Sie dies in einer zugänglichen Weise tun, indem Sie [eine Kombination aus CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) verwenden, um es visuell vom Bildschirm zu entfernen, aber es für unterstützende Technologien parsierbar zu belassen.

Es ist jedoch zu beachten, dass das Sichtbarlassen des Button-Textes Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Symbols vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technisch versiert sind oder die möglicherweise unterschiedliche kulturelle Interpretationen des von dem Button verwendeten Symbols haben.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Leitlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft einer Vielzahl von Menschen, darunter Menschen mit motorischen Kontrollproblemen und Menschen, die unpräzise Eingabegeräte wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiver Inhalte - einschließlich Buttons - die in enger visueller Nähe zueinander platziert sind, sollten durch einen Abstand getrennt sein. Dieser Abstand ist nützlich für Menschen mit motorischen Kontrollproblemen, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokusrahmen für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Personen mit eingeschränkter Sicht ihn wahrnehmen und Personen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}}-Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des Benutzeragenten bestimmen, dass der Fokus hervorgehoben werden sollte, wie wenn ein `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Der Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Button-Text- und Hintergrundfarbenwerte mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbkontrast-Kontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, erklärungen zu Leitlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf ein `<button>` oder {{HTMLElement("input")}}-Button-Typen dazu führt, dass es (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben dem Button während des Klickens den Fokus, aber [Safari tut dies aus Designgründen nicht](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines einfachen Buttons

Dieses Beispiel erstellt einen anklickbaren Button.
Das `type="button"`-Attribut stellt sicher, dass der Button kein Standardverhalten hat.
Sie können diesen Button mit JavaScript oder Attributen wie `command` und `commandfor` interaktiv gestalten.

```html
<button type="button" name="button">I'm a button</button>
```

{{ EmbedLiveSample('creating_a_basic_button', 200, 64) }}

### Verwendung des `request-close` Werts für das `command` Attribut

Der Dialog in diesem Beispiel hat zwei Optionsschaltflächen, die steuern, ob der Dialog geschlossen werden kann oder nicht.
Wählen Sie **Ja** oder **Nein** aus und klicken Sie dann auf **Anfrage zum Schließen**, um zu versuchen, den Dialog zu schließen.
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

Der **Dialog öffnen**-Button öffnet das `<dialog>`-Element mit `command="show-modal"`.

Der **Anfrage zum Schließen**-Button hat `command="request-close"`, welches das `<dialog>`-Element mit dem `commandfor="mydialog"`-Attribut anvisiert. Wenn geklickt, fragt es das `<dialog>`, ob es geschlossen werden kann (im Gegensatz zum `command="close"`-Attribut, das das `<dialog>` sofort schließen würde).
Dies prüft, ob das `<dialog>` [`cancelable`](/de/docs/Web/API/Event/cancelable) ist, mittels eines `cancel`-Ereignisses.

Wenn das Ereignis `cancelable` ist, wird der Wert der Optionsschaltflächen geprüft:

- Wenn auf `ja` gesetzt, wird das Dialog geschlossen.
- Wenn auf `nein` gesetzt, wird das `hidden`-Attribut der Warnung deaktiviert und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen, welche das Standard-Schließverhalten des `<dialog>` verhindert.

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
          >Fließinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >ausdrucksbezogene Inhalte</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktive Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistete</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbare</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbare</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziierte</a
        >
        Elemente, greifbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Ausdrucksbezogene Inhalte</a
        >
        aber es dürfen keine
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalte</a
        > enthalten sein. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elements</a> ist, kann es auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >ausdrucksbezogene Inhalte</a
        > akzeptiert.
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
