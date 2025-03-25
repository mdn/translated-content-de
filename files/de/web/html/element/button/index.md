---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML) Element ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, einem Finger, einem Sprachbefehl oder einer anderen unterstützenden Technologie aktiviert wird. Sobald es aktiviert ist, führt es eine Aktion aus, wie etwa das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der dem der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft, aber Sie können das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`

  - : Dieses Boolesche Attribut gibt an, dass der Button bei Laden der Seite den Eingabefokus erhält. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die an einem Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird, angegeben durch das Attribut `commandfor`. Die möglichen Werte sind:

    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) am Dialog-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}} Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) am Dialog-Element.
    - `"request-close"`
      - : Der Button fordert das Schließen eines {{htmlelement("dialog")}} Elements an. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) am Dialog-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn versucht wird, ein bereits gezeigtens Popover anzuzeigen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) am Popover-Element.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtens Popover. Wenn versucht wird, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) am Popover-Element.
    - `"toggle-popover"`
      - : Der Button schaltet ein Popover zwischen angezeigt und versteckt um. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) am Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert erzeugen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) am kontrollierten Element.

- `commandfor` {{experimental_inline}}
  - : Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
  - : Wandelt ein `<button>` Element in einen Kommandobutton um, der das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}} Element, das mit dem Button assoziiert werden soll (dessen _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` mit seinem Vorfahren `<form>` Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>` Elemente überall im Dokument mit `<form>`s zu assoziieren, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>` Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action) Attribut des Formularbesitzers des Buttons. Tut nichts, wenn es keinen Formularbesitzer gibt.
- `formenctype`

  - : Wenn der Button ein Submit-Button ist (er befindet sich in einem `<form>` oder ist damit assoziiert und hat nicht `type="button"`), gibt er an, wie die Formulardaten kodiert werden sollen, die übermittelt werden. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Die Standardeinstellung, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}} Elemente mit ihren [`type`](/de/docs/Web/HTML/Element/input#type) Attributen auf `file` gesetzt zu übermitteln.
    - `text/plain`: Wird als Debugginghilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut spezifiziert ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Submit-Button ist (er befindet sich in einem `<form>` oder ist damit assoziiert und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die zum Übermitteln des Formulars verwendet wird. Mögliche Werte:

    - `post`: Die Daten aus dem Formular sind im Body der HTTP-Anfrage enthalten, wenn sie an den Server gesendet werden. Verwenden Sie diese Methode, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z.B. Anmeldeinformationen.
    - `get`: Die Formulardaten werden mit einem `?` als Trennzeichen an die `action`-URL des Formulars angehängt, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}, wie z.B. Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er assoziiert ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method) Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Submit-Button ist, gibt dieses Boolesche Attribut an, dass das Formular bei Übermittlung nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut des Formularbesitzers des Buttons.

    Dieses Attribut steht auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) Elementen zur Verfügung.

- `formtarget`

  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, mit Unterstrich vorangestelltes Schlüsselwort, das angibt, wo die Antwort des Formulars angezeigt werden soll. Dies ist der `name`-Wert oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, ein Fenster oder ein {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target) Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist die Standardeinstellung, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext — in der Regel einen neuen Tab oder ein Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Gibt es keinen Eltern, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Gibt es keinen Eltern, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Übermitteln des Formulars verwendet wird.

- `popovertarget`

  - : Wandelt ein `<button>` Element in einen Popover-Steuerbutton um; nimmt die ID des zu steuernden Popover-Elements als Wert. Die Etablierung einer Beziehung zwischen einem Popover und dessen auslösendem Button mit dem `popovertarget` Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastatur-Fokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover zugänglicher für Tastatur- und unterstützende Technologiebenutzer (AT) (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr praktisch macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem Popover-Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtens Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen angezeigt und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist die Standardeinstellung, wenn das Attribut bei Buttons, die mit einem `<form>` assoziiert sind, nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu nerven.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird. Client-seitige Skripte können jedoch so konfiguriert werden, dass sie auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse eintreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons assoziiert ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird beim Übermitteln des Formulars mit diesem Button als Parameter an den Server übergeben.

## Hinweise

Ein Submit-Button mit gesetztem Attribut `formaction`, aber ohne assoziiertes Formular tut nichts. Sie müssen einen Formularinhaber definieren, entweder indem Sie es in ein `<form>` einfügen oder das Attribut `form` auf die ID des Formulars setzen.

`<button>` Elemente sind viel einfacher zu gestalten als {{HTMLElement("input")}} Elemente. Sie können HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Darstellungen.

Wenn Ihre Buttons nicht zur Übermittlung von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type` Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht existierende) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignis-Handler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierte Aktionen ausführen, indem [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwendet wird, wie z.B. das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User-Agenten Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder des Buttons horizontal und vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder wie Flex- oder Grid-Items. Ein Button, der auf `display: inline` gesetzt ist, wird gestylt, als ob der Wert auf `display: inline-block` gesetzt ist.

## Zugänglichkeit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologien, wie Bildschirmleser, um darauf zuzugreifen, wenn sie das Dokument analysieren und [einen Zugänglichkeitsbaum generieren](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis). Unterstützende Technologien verwenden dann den Zugänglichkeitsbaum, um die Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, geben Sie Text im `<button>` Element ein, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, können Sie eine zugängliche Möglichkeit verwenden, indem [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) verwendet wird, um ihn visuell vom Bildschirm zu entfernen, ihn aber dennoch von unterstützender Technologie parsierbar zu halten.

Es ist jedoch erwähnenswert, dass das Sichtlassen des Buttontexts Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Personen, die technisch nicht versiert sind oder die möglicherweise unterschiedliche kulturelle Interpretationen des Icons haben, das der Button verwendet.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis von WCAG, Erklärungen zur Richtlinie 4.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert zu werden. Dies hilft eine Vielzahl von Personen, einschließlich Personen mit motorischen Steuerungsproblemen und Personen, die ungenaue Eingabemethoden wie einen Stylus oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Buttons — die in naher visueller Nähe zueinander platziert sind, sollten durch Abstand getrennt sein. Dieser Abstand ist vorteilhaft für Menschen, die motorische Steuerungsprobleme haben, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handtremor und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr darüber zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Am besten ist es, den Standard-Fokusrahmen für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit Sehschwäche ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, aber nur, wenn die Heuristik des User-Agents bestimmt, dass der Fokus hervorgehoben werden soll, wie z.B. wenn ein `<button>` den Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Erklärungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Button-Typen dazu führt, dass er (standardmäßig) den Fokus erhält, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button den Fokus, aber [Safari tut dies nicht, aus Designgründen](https://webkit.org/b/22261#c68).

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Wortlaut-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >etikettierbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#submittable"
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >form-assoziierte</a
        >
        Elemente, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Wortlaut-Inhalt</a
        >
        nur es darf keinen
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        >
        geben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Wortlaut-Inhalt</a
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
