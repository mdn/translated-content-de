---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 48a1966f4fb3633ab40daa544bcb267a7794afb1
---

Das **`<button>`**-Element [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderen unterstützenden Technologien aktiviert wird. Sobald es aktiviert ist, führt es eine Aktion aus, wie das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft. Sie können das Erscheinungsbild von Buttons jedoch mit [CSS](/de/docs/Web/CSS) ändern.

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
  - : Dieses boolesche Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) erhalten soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut besitzen.**

- `command`
  - : Gibt die Aktion an, die auf ein Element ausgeführt werden soll, das von einem Steuerelement-`<button>` über das `commandfor`-Attribut gesteuert wird. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion durchgeführt. Dies ist ein deklaratives Äquivalent zur Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), die auf das `<dialog>`-Element aufgerufen wird.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt. Dies ist ein deklaratives Äquivalent zur Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close), die auf das `<dialog>`-Element aufgerufen wird.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Event auf einem {{htmlelement("dialog")}}-Element aus, um den Browser aufzufordern, ihn zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Event. Dies unterscheidet sich vom `close`-Befehl darin, dass Autoren das [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) im `cancel`-Event aufrufen können, um das Schließen des `<dialog>` zu verhindern. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt. Dies ist ein deklaratives Äquivalent zur Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose), die auf das `<dialog>`-Element aufgerufen wird.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies ist gleichbedeutend mit dem Wert `show` für das [`popovertargetaction`](#popovertargetaction)-Attribut, und bietet auch ein deklaratives Äquivalent zur Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), die auf das Popover-Element aufgerufen wird.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verstecken, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies ist gleichbedeutend mit dem Wert `hide` für das [`popovertargetaction`](#popovertargetaction)-Attribut, und bietet auch ein deklaratives Äquivalent zur Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), die auf das Popover-Element aufgerufen wird.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen sichtbar und versteckt. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies ist gleichbedeutend mit dem Wert `toggle` für das [`popovertargetaction`](#popovertargetaction)-Attribut, und bietet auch ein deklaratives Äquivalent zur Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), die auf das Popover-Element aufgerufen wird.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert senden das [`CommandEvent`](/de/docs/Web/API/CommandEvent) an das gesteuerte Element.

- `commandfor`
  - : Verwandelt ein `<button>`-Element in einen Befehlsbutton, der ein gegebenes interaktives Element kontrolliert, indem es den im Button-Attribut [`command`](#command) angegebenen Befehl ausführt. Das `commandfor`-Attribut nimmt die ID des zu kontrollierenden Elements als Wert ein. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: er kann nicht gedrückt oder fokussiert werden.
- `form`
  - : Das {{HTMLElement("form")}}-Element, das mit dem Button verknüpft werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wird dieses Attribut nicht gesetzt, ist das `<button>` mit seinem übergeordneten `<form>`-Element verknüpft, sofern vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button gesendeten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Hat keine Wirkung, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Submit-Button ist (es sich in/mit einem `<form>` befindet und nicht `type="button"` hat), gibt dies an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihrem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, das auf `file` gesetzt ist, zu senden.
    - `text/plain`: Als Debugging-Hilfe vorgesehen; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben wird, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`
  - : Wenn der Button ein Submit-Button ist (es sich in/mit einem `<form>` befindet und nicht `type="button"` hat), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die zum Absenden des Formulars verwendet wird. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im Body der HTTP-Anfrage gesendet, wenn sie an den Server gesendet werden. Wird verwendet, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z.B. Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Diese Methode wird verwendet, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button den mit ihm verknüpften [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt und die Formulardaten überhaupt nicht übermittelt.

    Wird dieses Attribut festgelegt, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Submit-Button ist, gibt dieses boolesche Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut festgelegt ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, mit einem Unterstrich (`_`) versehenes Schlüsselwort, das angibt, wo die Antwort auf das Absenden des Formulars angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort eines _Browsing-Kontextes_ (ein Tab, ein Fenster oder ein {{HTMLElement("iframe")}}). Wenn dieses Attribut festgelegt ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext — normalerweise ein neuer Tab oder ein Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn kein Elternteil vorhanden ist, verhält sich diese Option genauso wie `_self`.

- `name`
  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Absenden des Formulars verwendet wird.

- `popovertarget`
  - : Verwandelt ein `<button>`-Element in einen Popover-Steuerbutton; nimmt die ID des zu steuernden Popover-Elements als Wert. Die Einrichtung einer Beziehung zwischen einem Popover und seinem auslösenden Button mittels des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Auslöser und positioniert das Popover in einer logischen Reihenfolge in der Fokussiernavigation, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT)-Benutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen über [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die auf ein Popover-Element ausgeführt werden soll, das von einem Steuerbutton `<button>` kontrolliert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits verborgenes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen sichtbar und verborgen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerbutton ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut nicht für Buttons festgelegt ist, die mit einem `<form>` verknüpft sind, oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und macht standardmäßig nichts, wenn er gedrückt wird. Er kann jedoch clientseitige Skripte auslösen, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in den Parametern übermittelt, wenn das Formular mit diesem Button gesendet wird.

## Hinweise

Ein Submit-Button mit dem Attribut `formaction`, aber ohne ein zugehöriges Formular, führt zu keiner Aktion. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie ihn in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu gestalten als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und verwenden Sie die Pseudo-Elemente {{Cssxref("::after")}} und {{Cssxref("::before")}} für komplexe Darstellungen.

Wenn Ihre Buttons nicht zum Übermitteln von Formulardaten an einen Server verwendet werden, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls werden sie versuchen, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Obwohl `<button type="button">` kein Standardverhalten hat, können Ereignis-Handler geskriptet werden, um Verhalten auszulösen. Ein aktivierter Button kann programmierbare Aktionen unter Verwendung von [JavaScript](/de/docs/Learn_web_development/Core/Scripting) durchführen, wie z.B. das Entfernen eines Elements aus einer Liste.

Standardmäßig gestalten User-Agents Buttons als `display: flow-root`, was einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder des Buttons horizontal und vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder wie Flex- oder Grid-Elemente. Ein Button, der als `display: inline` festgelegt ist, wird so gestaltet, als ob der Wert auf `display: inline-block` gesetzt wäre.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologien, wie Screenreader, wenn sie das Dokument analysieren und einen [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erstellen. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um auf Inhalte der Seite zuzugreifen und sie zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, legen Sie Text im `<button>`-Element ab, das die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es ein zugänglicher Weg, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber ihn für unterstützende Technologien analysierbar zu halten.

Es ist jedoch erwähnenswert, dass das Belassen des Button-Textes dabei helfen kann, Menschen, die möglicherweise mit der Bedeutung des Icons nicht vertraut sind oder die Funktion des Buttons nicht verstehen, zu unterstützen. Dies ist besonders wichtig für Menschen, die nicht technikaffin sind oder kulturell unterschiedliche Interpretationen des Icons, das der Button verwendet, haben.

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Leitlinien-Erklärung 4.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Geschicklichkeitsproblemen und Menschen, die ungenaue Eingabemethoden verwenden, wie z.B. einen Stift oder Finger. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Näher

Große Mengen an interaktivem Inhalt — einschließlich Buttons — die in enger visueller Nähe zueinander platziert sind, sollten durch Abstände voneinander getrennt sein. Diese Abstände sind vorteilhaft für Menschen mit motorischen Steuerungsproblemen, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Status-Informationen

Um den Status eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr darüber zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standardfokus-Ring für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit eingeschränktem Sehvermögen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}}-Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des Benutzeragents bestimmen, dass der Fokus hervorgehoben werden soll, zum Beispiel wenn ein `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft des Button-Textes und der Hintergrundfarben mit dem Hintergrund, auf dem der Button platziert ist, verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Leitlinien-Erklärung 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klick- und Fokussierung

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typ ihn (standardmäßig) fokussiert, variiert je nach Browser und Betriebssystem. Die meisten Browser geben zu einem angeklickten Button den Fokus, aber [Safari tut dies nicht, by Design](https://webkit.org/b/22261#c68).

## Beispiele

```html
<button name="button">Press me</button>
```

{{EmbedLiveSample('Example', 200, 64)}}

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
          >Textinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >markierbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formular-assoziiertes</a
        >
        Element, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiven Inhalt</a
        > enthalten. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, kann es auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
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
