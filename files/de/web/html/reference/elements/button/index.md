---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<button>`**-[HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer durch Maus, Tastatur, Finger, Sprachbefehl oder andere unterstützende Technologien aktiviert wird. Sobald es aktiviert ist, führt es eine Aktion aus, wie das Abschicken eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft, jedoch können Sie das Erscheinungsbild von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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
  background-color: rgb(220 0 0);
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 0.2),
    rgb(0 0 0 / 0.2) 30%,
    rgb(0 0 0 / 0)
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

Diese Elementattribute beinhalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`
  - : Dieses Boolean-Attribut gibt an, dass der Button den Eingabefokus haben sollte, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem von einem Steuer-`<button>` kontrollierten Element ausgeführt werden soll, angegeben durch das `commandfor`-Attribut. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem Dialog-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem Dialog-Element.
    - `"request-close"`
      - : Der Button fordert das Schließen eines {{htmlelement("dialog")}}-Elements an. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem Dialog-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button schaltet ein Popover zwischen sichtbar und verborgen um. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) gekennzeichnet sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Verwandelt ein `<button>`-Element in einen Befehlsbutton, das das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass Benutzer mit dem Button interagieren: er kann nicht gedrückt oder fokussiert werden.
- `form`
  - : Das {{HTMLElement("form")}}-Element, das mit dem Button assoziiert werden soll (sein _Form Owner_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<button>` mit seinem Vorfahren `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht das Verknüpfen von `<button>`-Elementen mit `<form>`-Elementen überall im Dokument, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Form-Owners des Buttons. Tut nichts, wenn kein Form-Owner vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Submit-Button ist (innerhalb/verknüpft mit einem `<form>` und nicht `type="button"` hat), wird angegeben, wie die abgeschickten Formulardaten codiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen auf `file` zu setzen.
    - `text/plain`: Als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Form-Owners des Buttons.

- `formmethod`
  - : Wenn der Button ein Submit-Button ist (innerhalb/verknüpft mit einem `<form>` und nicht `type="button"` hat), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) zur Übermittlung des Formulars an. Mögliche Werte:
    - `post`: Die Daten des Formulars werden im Body der HTTP-Anfrage zur Übermittlung an den Server eingefügt. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldeinformationen.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Seiteneffekte")}} hat, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verbunden ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Form-Owners des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Submit-Button ist, gibt dieses Boolean-Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut gesetzt ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Form-Owners des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) verfügbar.

- `formtarget`
  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisierter, unterstrichpräfigierter Schlüsselwort, der angibt, wo die Antwort auf das Übermitteln des Formulars angezeigt werden soll. Dies ist der `name` von oder das Schlüsselwort für einen _Browsing-Kontext_ (einen Tab, ein Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Form-Owners des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Die Antwort wird im selben Browsing-Kontext wie der aktuelle geladen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Die Antwort wird in einem neuen, unbenannten Browsing-Kontext geladen – normalerweise ein neuer Tab oder ein Fenster, je nach den Einstellungen des Browsers des Benutzers.
    - `_parent`: Die Antwort wird im übergeordneten Browsing-Kontext des aktuellen geladen. Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Die Antwort wird im obersten Browsing-Kontext geladen (das heißt, der Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Eltern hat). Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.

- `name`
  - : Der Name des Buttons, übermittelt als ein Paar mit dem `value` des Buttons als Teil der Formulardaten, wenn dieser Button verwendet wird, um das Formular zu übermitteln.

- `popovertarget`
  - : Verwandelt ein `<button>`-Element in einen Popover-Steuerbutton; nimmt die ID des zu steuernden Popover-Elements als Wert. Das Etablieren einer Beziehung zwischen einem Popover und seinem auslösenden Button mithilfe des `popovertarget`-Attributs hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dadurch wird das Popover für Tastatur- und unterstützende Technologie-Benutzer (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerbeziehung zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungselementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem von einem Steuer-`<button>` kontrollierten Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button verbirgt ein angezeigt Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen sichtbar und verborgen um. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerbutton ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verknüpft sind, nicht angegeben ist oder das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre ursprünglichen Werte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut beim Drücken standardmäßig nichts. Client-seitige Skripts können auf die Ereignisse des Elements lauschen, die ausgelöst werden, wenn die Ereignisse eintreten.

- `value`
  - : Definiert den mit dem `name` des Buttons assoziierten Wert, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird beim Übermitteln des Formulars unter Verwendung dieses Buttons als Parameter an den Server gesendet.

## Anmerkungen

Ein Submit-Button mit gesetztem Attribut `formaction`, aber ohne zugeordnetes Formular tut nichts. Sie müssen einen Form-Owner festlegen, entweder durch Einbetten in ein `<form>` oder durch Setzen des Attributs `form` auf die ID des Formulars.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Rendering.

Wenn Ihre Buttons nicht zum Übermitteln von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls werden sie versuchen, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, möglicherweise zerstören Sie dadurch den aktuellen Zustand des Dokuments.

Während `<button type="button">` kein Standardverhalten hat, können Ereignis-Handler programmiert werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie etwa das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen Benutzeragenten Buttons als `display: flow-root`, was einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erzeugt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Screenreadern, um darauf zuzugreifen, wenn sie das Dokument analysieren und [einen Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Assistive Technologien verwenden dann den Zugänglichkeitsbaum, um sich durch den Seiteninhalt zu bewegen und ihn zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, platzieren Sie Text im `<button>`-Element, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es eine zugängliche Möglichkeit, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu nutzen, um ihn visuell vom Bildschirm zu entfernen, aber ihn für unterstützende Technologien durchsuchbar zu lassen.

Es ist jedoch anzumerken, dass es hilfreich sein kann, den Text des Buttons sichtbar zu lassen, um Menschen zu helfen, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technisch versiert sind oder unterschiedliche kulturelle Interpretationen des Icons verwenden.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis von WCAG, Leitfaden 4.1 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Steuerungsproblemen und Menschen, die ungenaue Formen der Eingabe verwenden, wie einen Stift oder Finger. Eine Mindestmaß für interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt – einschließlich Buttons – die in enger visueller Nähe zueinander platziert werden, sollten Abstand dazwischen haben. Dieser Abstand ist vorteilhaft für Menschen, die motorische Steuerungsprobleme erfahren, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Der Abstand kann mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesenknopf-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Weitere Informationen finden Sie in den Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den standardmäßigen Fokusring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genug Kontrast hat**, sodass Menschen mit Sehbehinderungen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} nur hat, wenn die Heuristiken des Benutzeragenten bestimmen, dass der Fokus hervorgehoben werden soll, z. B. wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund ermittelt, auf dem der Button platziert ist. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66 px und {{cssxref("font-weight", "bold")}} oder größer oder 24 px oder größer.)

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder auf {{HTMLElement("input")}}-Button-Typen dazu führt, dass er (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser fokussieren den geklickten Button, aber [Safari tut dies aus Designgründen nicht](https://webkit.org/b/22261#c68).

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktive Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgeführt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >einreichbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >form-assoziiertes</a
        >
        Element, spürbarer Inhalt.
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
          >interaktiven Inhalte</a
        > geben. Wenn der <code>&lt;button&gt;</code>-Button das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, dann kann er auch
   null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind notwendig.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>Checkbox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>Combobox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>Link</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>Menuitem</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>Menuitemcheckbox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>Menuitemradio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>Option</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>Radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>Switch</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>Tab</code></a>
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
