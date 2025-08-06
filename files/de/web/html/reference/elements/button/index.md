---
title: "<button>: Das Buttonelement"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<button>`**-Element [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das durch einen Benutzer, sei es mit einer Maus, Tastatur, einem Finger, Sprachbefehl oder anderen unterstützenden Technologien aktiviert wird. Nach der Aktivierung führt es eine Aktion aus, wie z. B. das Absenden eines [Forms](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der dem der Plattform, auf der der {{Glossary("user_agent", "User Agent")}} ausgeführt wird, ähnelt. Sie können jedoch das Erscheinungsbild der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`
  - : Dieses boolesche Attribut legt fest, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird, angegeben durch das `commandfor`-Attribut. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode auf dem Dialogelement.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode auf dem Dialogelement.
    - `"request-close"`
      - : Der Button fordert das Schließen eines {{htmlelement("dialog")}}-Elements an. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)-Methode auf dem Dialogelement.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details. Dies ist äquivalent zu [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`. Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Methode auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion durchgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details. Dies ist äquivalent zu [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`. Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)-Methode auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen Anzeigen und Verstecken. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details. Dies ist äquivalent zu [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`. Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehlsbutton um, der das angegebene interaktive Element steuert; der Wert des Attributs ist die ID des zu kontrollierenden Elements. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann damit nicht gedrückt oder fokussiert werden.
- `form`
  - : Das {{HTMLElement("form")}}-Element, mit dem der Button verknüpft werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` mit seinem Vorfahren-`<form>`-Element verknüpft, sofern vorhanden.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button gesendeten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Tut nichts, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Absende-Button ist (er befindet sich in/verknüpft mit einem `<form>` und hat nicht `type="button"`), gibt er an, wie die Formulardaten, die gesendet werden, kodiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen zu senden, die auf `file` gesetzt sind.
    - `text/plain`: Als Hilfe zum Debuggen angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`
  - : Wenn der Button ein Absende-Button ist (er befindet sich in/verknüpft mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) zur Übermittlung des Formulars an. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im Hauptteil der HTTP-Anfrage enthalten, wenn sie an den Server gesendet wird. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button den [dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verknüpft ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Absende-Button ist, gibt dieses boolesche Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es gesendet wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut steht auch auf den [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen zur Verfügung.

- `formtarget`
  - : Wenn der Button ein Absende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrich-vorangestelltes Schlüsselwort, das angibt, wo die Antwort vom Übermitteln des Formulars angezeigt werden soll. Dies ist der `name` eines oder das Schlüsselwort für ein _browsing context_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Laden Sie die Antwort im selben Browsing-Kontext wie derzeit. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden Sie die Antwort in einen neuen unbenannten Browsing-Kontext — normalerweise ein neues Tab oder Fenster, abhängig von den Einstellungen des Benutzers.
    - `_parent`: Laden Sie die Antwort im übergeordneten Browsing-Kontext des aktuellen. Gibt es kein übergeordnetes Element, verhält sich diese Option genauso wie `_self`.
    - `_top`: Laden Sie die Antwort im obersten Browsing-Kontext (d.h. dem Browsing-Kontext, der ein Vorfahre des aktuellen ist und kein übergeordnetes Element hat). Gibt es kein übergeordnetes Element, verhält sich diese Option genauso wie `_self`.

- `name`
  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten gesendet wird, wenn dieser Button verwendet wird, um das Formular abzusenden.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in einen Popover-Steuerungsbutton um; der Wert des Attributs ist die ID des zu kontrollierenden Popover-Elements. Die Etablierung einer Beziehung zwischen einem Popover und seinem auslösenden Button durch das `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokusnavigation, wenn es angezeigt wird. Dadurch wird das Popover für Tastatur- und Unterstützungstechnologie-Benutzer (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, wodurch es sehr praktisch wird, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem Popover-Element ausgeführt werden soll, das von einem Steuerungs-`<button>` kontrolliert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen Anzeigen und Verstecken wechseln. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungsbutton ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verknüpft sind, nicht angegeben oder wenn das Attribut leer oder ungültig ist.
    - `reset`: Der Button setzt alle Steuerungen auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Nutzer zu irritieren.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird. Er kann Client-seitige Skripte haben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn er mit den Formulardaten gesendet wird. Dieser Wert wird an den Server in Parametern übermittelt, wenn das Formular mit diesem Button gesendet wird.

## Hinweise

Ein Absende-Button mit gesetztem `formaction`-Attribut, aber ohne ein zugehöriges Formular, tut nichts. Sie müssen einen Formularbesitzer setzen, entweder indem Sie es in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht zur Übermittlung von Formulardaten an einen Server verwendet werden, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie z. B. das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen Benutzeragenten Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) schafft und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als flex- oder raster-Container definiert ist, verhalten sich die Kinder als flex- oder raster-Elemente. Ein auf `display: inline` gesetzter Button wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "Zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologien, wie Bildschirmlesegeräte, um darauf zuzugreifen, wenn sie das Dokument analysieren und [einen Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>`-Element ein, das die Funktionalität des Buttons kurz beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es eine zugängliche Methode, [eine Kombination aus CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn optisch vom Bildschirm zu entfernen, aber von unterstützenden Technologien weiterhin analysierbar zu halten.

Es ist jedoch erwähnenswert, dass es hilfreich sein kann, den Text des Buttons sichtbar zu lassen, um Personen zu unterstützen, die mit der Bedeutung des Icons möglicherweise nicht vertraut sind oder den Zweck des Buttons nicht verstehen. Dies ist besonders wichtig für Menschen, die technologisch nicht versiert sind oder möglicherweise unterschiedliche kulturelle Interpretationen des verwendeten Icons haben.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis der WCAG, Guideline 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft verschiedenen Personen, einschließlich Personen mit motorischen Kontrollproblemen und Personen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktiven Inhalten - einschließlich Buttons - die in unmittelbarer visueller Nähe zueinander platziert sind, sollten Abstand haben, der sie voneinander trennt. Dieser Abstand kommt Personen zugute, die unter motorischen Kontrollproblemen leiden oder versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Statusinformationen

Um den Status eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den standardmäßigen Fokusring von Elementen, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genug Kontrast hat**, damit Personen mit Sehschwächen ihn wahrnehmen können und Personen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}}-Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des Benutzeragenten bestimmen, dass der Fokus hervorgehoben werden sollte, wie z. B. wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund bestimmt, auf dem der Button platziert ist. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer oder 24px oder größer.)

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Buttontypen dazu führt, dass dieser (standardmäßig) fokussiert wird, hängt vom Browser und Betriebssystem ab. Die meisten Browser geben einem angeklickten Button den Fokus, aber [Safari tut dies nicht, absichtlich](https://webkit.org/b/22261#c68).

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
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
          >etikettierbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >sendbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, fühlbarer Inhalt.
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
        > vorhanden sein. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, kann es auch
   null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
