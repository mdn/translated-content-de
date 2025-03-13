---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML) Element ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Nach der Aktivierung führt es dann eine Aktion aus, wie etwa das Absenden eines [Forms](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "Useragent")}} läuft, aber Sie können das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

{{InteractiveExample("HTML-Demo: &lt;button&gt;", "tabbed-shorter")}}

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
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow:
    inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.styled:hover {
  background-color: rgba(255, 0, 0, 1);
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`

  - : Dieses boolesche Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut besitzen.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die für ein Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird, angegeben über das `commandfor`-Attribut. Die möglichen Werte sind:

    - `"show-modal"`
      - : Der Button wird einen {{htmlelement("dialog")}} als modal anzeigen. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt.
      - : Dies ist ein deklaratives Äquivalent zu einem Aufruf der [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) Methode auf das Dialogelement.
    - `"close"`
      - : Der Button wird ein {{htmlelement("dialog")}} Element schließen. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
      - : Dies ist ein deklaratives Äquivalent zu einem Aufruf der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode auf das Dialogelement.
    - `"request-close"`
      - : Der Button wird anfordern, ein {{htmlelement("dialog")}} Element zu schließen. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
      - : Dies ist ein deklaratives Äquivalent zu einem Aufruf der [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) Methode auf das Dialogelement.
    - `"show-popover"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details.
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`.
      - : Dies ist ein deklaratives Äquivalent zu einem Aufruf der [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Methode auf das Popover-Element.
    - `"hide-popover"`
      - : Der Button wird ein sichtbares Popover verbergen. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details.
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`.
      - : Dies ist ein deklaratives Äquivalent zu einem Aufruf der [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) Methode auf das Popover-Element.
    - `"toggle-popover"`
      - : Der Button wird ein Popover zwischen sichtbar und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es versteckt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details.
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`.
      - : Dies ist ein deklaratives Äquivalent zu einem Aufruf der [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methode auf das Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert werden das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem kontrollierten Element auslösen.

- `commandfor` {{experimental_inline}}
  - : Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
  - : Verwandelt ein {{htmlelement("button")}}-Element in einen Kommando-Button, der das angegebene interaktive Element kontrolliert; nimmt die ID des zu kontrollierenden Elements als seinen Wert.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann weder gedrückt noch fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem der Button verknüpft werden soll (sein _Formulierungsbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` mit seinem übergeordneten `<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulierungsbesitzers des Buttons. Hat keine Wirkung, wenn kein Formulierungsbesitzer vorhanden ist.
- `formenctype`

  - : Wenn der Button ein Submit-Button ist (er steht in Verbindung mit einem `<form>` und hat nicht `type="button"`), legt fest, wie die übermittelten Formulardaten codiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihrem [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf `file` übermitteln.
    - `text/plain`: Als Debugging-Hilfe angegeben; sollte nicht für die tatsächliche Formularübermittlung verwendet werden.

    Wenn dieses Attribut festgelegt ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulierungsbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Submit-Button ist (er steht in Verbindung mit einem `<form>` und hat nicht `type="button"`), legt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) fest, um das Formular zu übermitteln. Mögliche Werte:

    - `post`: Die Daten des Formulars werden im Body der HTTP-Anfrage an den Server gesendet. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Login-Daten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Separator, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode zeigt an, dass der Button den [Dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er verbunden ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulierungsbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Submit-Button ist, gibt dieses boolesche Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulierungsbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) Elementen verfügbar.

- `formtarget`

  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisierter, mit einem Unterstrich vorangestellter Schlüsselwort, das angibt, wo die Antwort auf die Formularübermittlung angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browskontext_ (einem Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulierungsbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: lädt die Antwort in denselben Browskontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: lädt die Antwort in einen neuen, unbenannten Browskontext — normalerweise ein neuer Tab oder ein neues Fenster, abhängig von den Einstellungen des Benutzers.
    - `_parent`: lädt die Antwort in den übergeordneten Browskontext des aktuellen. Wenn es keinen übergeordneten Kontex gibt, verhält sich diese Option wie `_self`.
    - `_top`: lädt die Antwort in den obersten Browskontext (d.h. den Browskontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn es keinen Elternteil gibt, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Übermitteln des Formulars verwendet wird.

- `popovertarget`

  - : Verwandelt ein `<button>`-Element in einen Popover-Steuerbutton; nimmt die ID des zu kontrollierenden Popover-Elements als seinen Wert. Das Herstellen einer Beziehung zwischen einem Popover und seinem aufrufenden Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastatur- und unterstützende Technologie-Nutzer (siehe auch [Popover Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Verankerungsreferenz zwischen den beiden, was es sehr praktisch macht, Popover relativ zu ihren Steuerungen mit [CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover Verankerungspositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die für ein durch einen Steuer-`<button>` kontrolliertes Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein sichtbares Popover verbergen. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen sichtbar und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verbunden sind, nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Nutzer zu ärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird. Es können clientseitige Skripte geschrieben werden, um auf die Ereignisse des Elements zu reagieren.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in den Parametern übergeben, wenn das Formular mit diesem Button übermittelt wird.

## Anmerkungen

Ein Submit-Button mit dem Attribut `formaction` gesetzt, aber ohne ein zugehöriges Formular, tut nichts. Sie müssen einen Formularbesitzer festlegen, entweder durch Einbettung in ein `<form>` oder indem Sie das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>`, oder sogar `<img>`) und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Darstellungen verwenden.

Wenn Ihre Buttons nicht dazu gedacht sind, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht existierende) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Aktionen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen Benutzeragenten Buttons als `display: flow-root`, was einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Zugänglichkeit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Screenreader, damit sie das Dokument analysieren und [einen Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren können. Unterstützende Technologien verwenden dann den Zugänglichkeitsbaum, um die Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, fügen Sie im `<button>`-Element Text ein, der knapp die Funktionalität des Buttons beschreibt.

#### Beispiele

```html
<button name="favorite">
  <svg fill="#000000" viewBox="0 0 42 42">
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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es ein zugänglicher Weg, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, während er für unterstützende Technologien interpretiert bleibt.

Es ist jedoch erwähnenswert, dass es hilfreich sein kann, den Button-Text sichtbar zu lassen, damit Personen, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind, oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Personen, die nicht technisch versiert sind oder unterschiedliche kulturelle Interpretationen des Icons haben, das der Button verwendet.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis für WCAG, Erklärung der Richtlinie 4.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Erklärung des Erfolgskriteriums 4.1.2 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft einer Vielzahl von Personen, einschließlich Personen mit motorischen Steuerungsproblemen und Personen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestinteraktivgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Erklärung des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis für WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Buttons — die in enger visueller Nähe zueinander platziert sind, sollten Abstand haben, der sie voneinander trennt. Dieser Abstand ist vorteilhaft für Personen, die motorische Steuerungsprobleme haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokus-Ring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, sicherzustellen, dass der Fokuszustand genug Kontrast hat, damit Personen mit Sehschwächen ihn wahrnehmen können und Personen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um einem Element, das {{cssxref(":focus")}} hat, nur dann Stile hinzuzufügen, wenn die Heuristiken des Benutzeragenten bestimmen, dass der Fokus hervorgehoben werden sollte, wie z.B. wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der Werte der Button-Schriftfarbe und der Hintergrundfarbe mit dem Hintergrund verglichen wird, auf dem der Button platziert ist. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist für Textinhalte ein Verhältnis von 4.5:1 und für großen Text 3:1 erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis für WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.3 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob ein Klick auf einen `<button>` oder {{HTMLElement("input")}}-Buttontypen ihn (standardmäßig) fokussiert, variiert je nach Browser und Betriebssystem. Die meisten Browser fokussieren einen geklickten Button, aber [Safari tut dies nicht, von Design her](https://webkit.org/b/22261#c68).

## Beispiele

```html
<button name="button">Press me</button>
```

{{ EmbedLiveSample('Example', 200, 64) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließ-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formular-assoziierter</a
        >
        Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        >
        geben.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
            >Button</a
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
