---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: f29e825161ee6776a395cd846f8570686f784341
---

Das **`<button>`**-Element in [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das von einem Benutzer durch eine Maus, Tastatur, Finger, Sprachbefehl oder andere unterstützende Technologien aktiviert wird. Nach der Aktivierung führt es dann eine Aktion aus, wie das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft. Sie können jedoch das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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
  - : Dieses boolesche Attribut gibt an, dass der Button beim Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die bei einem vom Steuerungs-`<button>`-Element durch `commandfor` gesteuerten Element ausgeführt werden soll. Mögliche Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modal. Wenn das Dialogfeld bereits modal ist, wird keine Aktion unternommen. Dies ist ein deklaratives Äquivalent eines Aufrufs der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf das `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn das Dialog bereits geschlossen ist, wird keine Aktion unternommen. Dies ist ein deklaratives Äquivalent eines Aufrufs der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf das `<dialog>`-Element.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Element auf einem {{htmlelement("dialog")}}-Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis. Dies unterscheidet sich vom `close`-Befehl dadurch, dass Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das `cancel`-Ereignis anwenden können, um das Schließen des `<dialog>` zu verhindern. Wenn das Dialog bereits geschlossen ist, wird keine Aktion unternommen. Dies ist ein deklaratives Äquivalent eines Aufrufs der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf das `<dialog>`-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details. Dies ist äquivalent zur Einstellung eines Werts von `show` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf das Popover-Element.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion unternommen. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details. Dies ist äquivalent zur Einstellung eines Werts von `hide` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf das Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen angezeigt und versteckt. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für mehr Details. Dies ist äquivalent zur Einstellung eines Werts von `toggle` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf das Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehlsschaltfläche um, die ein bestimmtes interaktives Element kontrolliert, indem der im Button-`command`-Attribut angegebene Befehl ausgeführt wird. Das `commandfor`-Attribut nimmt die ID des zu kontrollierenden Elements als Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann weder geklickt noch fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem der Button assoziiert ist (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` mit seinem Vorfahren-`<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut erlaubt es Ihnen, `<button>`-Elemente überall im Dokument mit `<form>`-Elementen zu assoziieren, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element außer Kraft setzen.

- `formaction`
  - : Die URL, die die vom Button eingereichten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Tut nichts, wenn es keinen Formularbesitzer gibt.
- `formenctype`
  - : Wenn der Button ein Submit-Button ist (er ist innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt er an, wie die Formulardaten, die eingereicht werden, zu kodieren sind. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen, die auf `file` gesetzt sind, einzureichen.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlung verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`
  - : Wenn der Button ein Submit-Button ist (er ist innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die zur Übermittlung des Formulars verwendet wird. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im Hauptteil der HTTP-Anfrage an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular vertrauliche Informationen enthält, wie z. B. Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, getrennt durch ein `?`, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er assoziiert ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Submit-Button ist, gibt dieses boolesche Attribut an, dass das Formular bei der Übermittlung nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein normiertes, mit einem Unterstrich vorangestelltes Schlüsselwort, das angibt, wo die Antwort auf die Übermittlung des Formulars angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, ein Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext – normalerweise ein neuer Tab oder ein Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (d.h. einen Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.

- `name`
  - : Der Name des Buttons, eingereicht als ein Paar mit dem `value` des Buttons als Teil der Formulardaten, wenn dieser Button zur Übermittlung des Formulars verwendet wird.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in eine Popover-Steuerungsschaltfläche um; nimmt die ID des Popover-Elements, das es steuern soll, als seinen Wert. Die Herstellung einer Beziehung zwischen einem Popover und seiner Aufrufer-Schaltfläche durch das `popovertarget`-Attribut hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturfokussierungsreihenfolge, wenn es angezeigt wird. Dadurch wird das Popover für Tastatur- und Assistenztechnologie-(AT)-Benutzer zugänglicher (siehe auch [Popover accessibility features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr praktisch macht, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die an einem durch eine Steuerungs-`<button>`-Element gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion unternommen.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen angezeigt und versteckt. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerungs-Schaltfläche ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` assoziiert sind, nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten tendiert dazu, Benutzer zu irritieren.)
    - `button`: Der Button hat kein Standardverhalten und führt standardmäßig keine Aktion aus, wenn er gedrückt wird. Es können clientseitige Skripte eingerichtet werden, um auf Ereignisse des Elements zu reagieren, die auftreten, wenn die Ereignisse passieren.

- `value`
  - : Definiert den mit dem `name` des Buttons assoziierten Wert, wenn dieser mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in Parametern gesendet, wenn das Formular mit diesem Button übermittelt wird.

## Anmerkungen

Ein Submit-Button mit dem Attribut `formaction`, aber ohne ein zugeordnetes Formular, macht nichts. Sie müssen einen Formularbesitzer festlegen, indem Sie ihn entweder in ein `<form>` einbetten oder das Attribut `form` auf die id des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und die {{Cssxref("::after")}}- und {{Cssxref("::before")}}-Pseudoelemente für eine komplexe Darstellung verwenden.

Wenn Ihre Buttons nicht dazu gedacht sind, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler programmiert werden, um Aktionen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie etwa das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User Agents Buttons als `display: flow-root`, was einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder des Buttons horizontal und vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder entsprechend als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbolbuttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "barrierefreien Namen")}}_. Barrierefreie Namen bieten Informationen für unterstützende Technologien, wie Screenreader, zum Zugriff, wenn sie das Dokument analysieren und [einen Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erstellen. Unterstützende Technologie nutzt dann den Barrierefreiheitsbaum, um Seiteninhalt zu navigieren und zu manipulieren.

Um einem Symbolbutton einen barrierefreien Namen zu geben, setzen Sie Text in das `<button>`-Element, das die Funktionalität des Buttons kurz und bündig beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine barrierefreie Möglichkeit, dies zu tun, die Verwendung [einer Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/), um ihn visuell von der Anzeige zu entfernen, aber für unterstützende Technologien zugänglich zu halten.

Es ist jedoch anzumerken, dass das Belassen des Buttontextes sichtbar Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Symbols vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die technisch nicht versiert sind oder unterschiedliche kulturelle Interpretationen des Symbols haben, das der Button verwendet.

- [Was ist ein barrierefreier Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verstehen von WCAG, Erklärung der Richtlinie 4.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verstehen von Erfolgskriterium 4.1.2 | W3C Erklärung von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft verschiedenen Menschen, einschließlich Menschen mit motorischen Steuerungsproblemen und Menschen, die nicht präzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verstehen von Erfolgskriterium 2.5.5: Zielgröße | W3C Verstehen von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiver Inhalte – einschließlich Buttons – die in enger visueller Nähe zueinander platziert sind, sollten durch Leerzeichen getrennt werden. Diese Abstände sind vorteilhaft für Menschen, die motorische Steuerungsprobleme haben, und die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesenbutton-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standardfokusring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit Sehbehinderungen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}}-Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, wenn die Heuristik des User-Agents bestimmt, dass der Fokus hervorgehoben werden sollte, wie z. B. wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Der Farbkontrastwert wird durch den Vergleich der Leuchtkraft der Buttontext- und Hintergrundfarbwerte mit der Hintergrundfarbe, auf der der Button platziert ist, bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer definiert.)

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verstehen von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen von Erfolgskriterium 1.4.3 | W3C Erklärung von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Buttontypen dazu führt, dass dieser (standardmäßig) den Fokus erhält, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button den Fokus, aber [Safari tut dies nicht, absichtlich](https://webkit.org/b/22261#c68).

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
          >Fließinhalt</a
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
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >einreichbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >form-associated</a
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
        aber es darf keine
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elements</a> ist, kann es auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
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
