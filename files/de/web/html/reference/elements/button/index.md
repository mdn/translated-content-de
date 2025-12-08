---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`<button>`**-Element im [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das durch den Benutzer per Maus, Tastatur, Finger, Sprachbefehl oder andere unterstützende Technologien aktiviert wird. Sobald es aktiviert ist, führt es eine Aktion aus, wie zum Beispiel das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User Agent")}} läuft, aber Sie können das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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
  - : Dieses boolesche Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) erhalten soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem durch ein Steuer-`<button>`-Element kontrollierten Element über das `commandfor`-Attribut ausgeführt werden soll. Mögliche Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als modales Dialogfenster an. Wenn der Dialog bereits modal ist, wird keine Aktion durchgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem `<dialog>`-Element.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis auf einem {{htmlelement("dialog")}}-Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis. Dies unterscheidet sich vom `close`-Befehl darin, dass Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das `cancel`-Ereignis aufrufen können, um das Schließen des `<dialog>` zu verhindern. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem `<dialog>`-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt. Weitere Einzelheiten finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Festlegen eines Werts von `show` für das Attribut [`popovertargetaction`](#popovertargetaction) und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion durchgeführt. Weitere Einzelheiten finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Festlegen eines Werts von `hide` für das Attribut [`popovertargetaction`](#popovertargetaction) und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button schaltet ein Popover zwischen Anzeigen und Verstecken um. Wenn das Popover versteckt ist, wird es angezeigt; wenn es angezeigt wird, wird es versteckt. Weitere Einzelheiten finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Festlegen eines Werts von `toggle` für das Attribut [`popovertargetaction`](#popovertargetaction) und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent)-Ereignis auf dem kontrollierten Element aus.

- `commandfor`
  - : Verwandelt ein `<button>`-Element in ein Befehlsschaltfläche, die ein gegebenes interaktives Element durch das Ausführen des in der [`command`](#command)-Eigenschaft der Schaltfläche angegebenen Befehls steuert. Das Attribut `commandfor` nimmt als Wert die ID des zu steuernden Elements an. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das mit der Schaltfläche zu assoziierende {{HTMLElement("form")}}-Element (dessen _Formularinhaber_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht festgelegt ist, ist das `<button>` mit seinem übergeordneten `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`s überall im Dokument zu assoziieren, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularinhabers des Buttons. Macht nichts, wenn kein Formularinhaber vorhanden ist.

- `formenctype`
  - : Wenn der Button ein Absende-Button ist (er ist innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt er an, wie die übermittelten Formulardaten codiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird zur Übermittlung von {{HTMLElement("input")}}-Elementen mit ihren als `file` festgelegten [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen verwendet.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularinhabers des Buttons.

- `formmethod`
  - : Wenn der Button ein Absende-Button ist (er ist innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die bei der Übermittlung des Formulars verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an. Mögliche Werte:
    - `post`: Die Daten aus dem Formular sind im Body der HTTP-Anforderung enthalten, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldeinformationen.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er assoziiert ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularinhabers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Absende-Button ist, gibt dieses boolesche Attribut an, dass das Formular bei der Übermittlung nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularinhabers des Buttons.

    Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Absende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder standardisiertes, mit einem Unterstrich versehenes Schlüsselwort, das angibt, wo die Antwort auf die Übermittlung des Formulars angezeigt werden soll. Dies ist der `name` eines oder ein Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularinhabers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einem neuen unbenannten Browsing-Kontext — üblicherweise ein neuer Tab oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, den Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen übergeordneten hat). Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.

- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<button>`-Element als **Interest Invoker**. Sein Wert ist die `id` eines Zielelements, das auf irgendeine Weise (normalerweise gezeigt oder versteckt) beeinflusst wird, wenn Interesse gezeigt oder verloren wird am Invoker-Element (zum Beispiel durch Hovern/Nicht-Hovern oder Fokussieren/Nicht-Fokussieren). Weitere Details und Beispiele finden Sie unter [Verwenden von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers).

- `name`
  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons bei der Übermittlung der Formulardaten gesendet wird, wenn dieser Button zur Formularübermittlung verwendet wird.

- `popovertarget`
  - : Verwandelt ein `<button>`-Element in eine Popover-Steuerschaltfläche; nimmt die ID des zu steuernden Popover-Elements als seinen Wert. Die Herstellung einer Beziehung zwischen einem Popover und seiner Aufruftaste durch das `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite Beziehung durch [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) zwischen Popover und Invoker und platziert das Popover in einer logischen Position in der Tastatur-Fokus-Navigation, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT)-Benutzer zugänglicher (siehe auch [Popover-Accessibility-Features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Informationen finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem durch ein Steuer-`<button>`-Element kontrollierten Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen Anzeigen und Verstecken um. Wenn das Popover versteckt ist, wird es angezeigt; wenn es angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerschaltfläche ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut nicht für Buttons angegeben ist, die mit einem `<form>` verbunden sind, oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut standardmäßig nichts, wenn er gedrückt wird. Es kann clientseitige Skripte geben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der beim Absenden der Formulardaten dem `name` des Buttons zugeordnet wird. Dieser Wert wird als Parameter an den Server übergeben, wenn das Formular mit diesem Button gesendet wird.

## Anmerkungen

Ein Absende-Button mit dem Attribut `formaction` festgelegt, aber ohne ein zugeordnetes Formular, tut nichts. Sie müssen einen Formularinhaber festlegen, indem Sie ihn entweder in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente lassen sich viel leichter stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudoelemente für komplexe Darstellungen.

Wenn Ihre Buttons nicht zum Senden von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu senden und die (nicht vorhandene) Antwort zu laden, möglicherweise den aktuellen Zustand des Dokuments zerstörend.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User Agents Buttons als `display: flow-root`, was einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder wie Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Icons auf Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen stellen Informationen bereit, die von unterstützenden Technologien wie Bildschirmlesern abgerufen werden, wenn sie das Dokument analysieren und [einen Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>`-Element ein, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Button-Text visuell ausblenden möchten, besteht eine zugängliche Möglichkeit darin, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn optisch vom Bildschirm zu entfernen, aber durch unterstützende Technologie parsbar zu halten.

Es ist jedoch anzumerken, dass das Sichtbarkeitenlassen des Button-Texts Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die technisch nicht versiert sind oder unterschiedliche kulturelle Interpretationen des vom Button verwendeten Icons haben können.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis WCAG, Richtlinien 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrolleinschränkungen und Menschen, die keine genauen Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Buttons — sollten nahe beieinander befindlich platziert Platz voneinander haben. Diese Abstände sind für Menschen von Vorteil, die motorische Kontrolleinschränkungen erfahren, und können versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erzeugt werden.

- [Handzittern und das Riesenknopf-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Weitere Informationen finden Sie in der Übersicht über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist ratsam, den Standardfokus-Ring für Elemente, die fokussiert sind, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig **sicherzustellen, dass der Fokuszustand ausreichend Kontrast aufweist**, damit Menschen mit Sehbehinderungen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des User Agents bestimmen, dass der Fokus hervorgehoben werden sollte, wie etwa wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_vs_focus-visible) für weitere Informationen.

Der Farbkontrastwert wird durch den Vergleich der Leuchtkraft der Button-Text- und Hintergrundfarbenwerte mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66 px und {{cssxref("font-weight", "fett")}} oder größer, oder 24 px oder größer.)

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Richtlinien 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Button-Typen dazu führt, dass dieser (standardmäßig) fokussiert wird, hängt vom Browser und Betriebssystem ab. Die meisten Browser geben einem angeklickten Button den Fokus, aber [Safari tut dies nicht absichtlich](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines einfachen Buttons

Dieses Beispiel erstellt eine klickbare Taste.
Das Attribut `type="button"` stellt sicher, dass die Schaltfläche kein Standardverhalten hat.
Sie können diesen Button interaktiv gestalten, indem Sie JavaScript oder Attribute wie `command` und `commandfor` verwenden.

```html
<button type="button" name="button">I'm a button</button>
```

{{ EmbedLiveSample('creating_a_basic_button', 200, 64) }}

### Verwendung des `request-close`-Werts für das `command`-Attribut

Der Dialog in diesem Beispiel hat zwei Optionsbuttons, die steuern, ob der Dialog geschlossen werden kann oder nicht.
Wählen Sie **Ja** oder **Nein** und klicken Sie dann auf **Anfrage zum Schließen**, um zu versuchen, den Dialog zu schließen.
Wenn **Ja** ausgewählt ist, schließt sich der Dialog; wenn **Nein** ausgewählt ist, bleibt der Dialog geöffnet und zeigt stattdessen eine Nachricht an.

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

Der **Anfrage zum Schließen**-Button hat `command="request-close"`, was das `<dialog>`-Element durch das `commandfor="mydialog"`-Attribut anvisiert. Wenn darauf geklickt wird, fragt er das `<dialog>`, ob es geschlossen werden kann (anders als das `command="close"`-Attribut, das das `<dialog>` sofort schließen würde).
Dies prüft, ob das `<dialog>` [`stornierbar`](/de/docs/Web/API/Event/cancelable) ist, indem ein `cancel`-Ereignis verwendet wird.

Wenn das Ereignis `stornierbar` ist, wird der Wert der Optionsbuttons überprüft:

- Wenn auf `ja` gesetzt, wird der Dialog geschlossen.
- Wenn auf `nein` gesetzt, wird das `hidden`-Attribut beim Warnhinweis deaktiviert und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wird aufgerufen, was den Standard-Schließvorgang des `<dialog>` verhindert.

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
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularbezogen</a
        >
        Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        aber es darf kein
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        > vorhanden sein. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, dann kann es auch null oder ein {{htmlelement("selectedcontent")}} Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
