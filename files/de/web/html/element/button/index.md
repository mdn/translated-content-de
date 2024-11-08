---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTMLSidebar}}

Das **`<button>`**-Element [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder einer anderen unterstützenden Technologie aktiviert wird. Einmal aktiviert, führt es eine Aktion aus, wie das Absenden eines [Forms](/de/docs/Learn/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "user agent")}} läuft, aber Sie können das Aussehen der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`

  - : Dieses Boolean-Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Steuerelement `<button>` kontrolliert wird, angegeben über das Attribut `commandfor`. Die möglichen Werte sind:

    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
    - `"show-popover"`
      - : Der Button zeigt ein verborgenes Popover an. Wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn versucht wird, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen angezeigten und verborgenen Zuständen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem kontrollierten Element aus.

- `commandfor` {{experimental_inline}}
  - : Verwandelt ein {{htmlelement("button")}}-Element in einen Button, der das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert an.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem der Button verknüpft werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` mit seinem übergeordneten `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers des Buttons. Hat keine Wirkung, wenn es keinen Formularbesitzer gibt.
- `formenctype`

  - : Wenn der Button ein Absende-Button ist (es ist innerhalb/verbunden mit einem `<form>` und hat nicht `type="button"`), gibt an, wie die abgesendeten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Element/input#type)-Attributen zu `file` zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für reale Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Absende-Button ist (es ist innerhalb/verbunden mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Methods) an, die zur Übermittlung des Formulars verwendet wird. Mögliche Werte:

    - `post`: Die Daten aus dem Formular werden im Hauptteil der HTTP-Anfrage an den Server gesendet. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}, wie zum Beispiel Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button den [dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er verbunden ist, und die Formulardaten nicht übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Absende-Button ist, gibt dieses Boolean-Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)-Elementen verfügbar.

- `formtarget`

  - : Wenn der Button ein Absende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder standardisiertes, unterstrich-separiertes Schlüsselwort, das angibt, wo die Antwort auf das Absenden des Formulars angezeigt werden soll. Dies ist der `name` eines _Browsing-Kontexts_ (eines Tabs, Fensters oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Laden Sie die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden Sie die Antwort in einen neuen unbenannten Browsing-Kontext — in der Regel ein neuer Tab oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing-Kontext (das heißt, den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option genauso wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button verwendet wird, um das Formular abzusenden.

- `popovertarget`

  - : Verwandelt ein `<button>`-Element in einen Popover-Steuerknopf; nimmt die ID des Popover-Elements als Wert an, das gesteuert werden soll. Siehe die [Popover API](/de/docs/Web/API/Popover_API)-Startseite für weitere Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein Popover-Element ausgeführt werden soll, das von einem Steuer-`<button>` gesteuert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn versucht wird, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button zeigt ein verborgenes Popover an. Wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen angezeigten und verborgenen Zuständen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerknopf ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons im Zusammenhang mit einem `<form>` nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er standardmäßig gedrückt wird. Es können clientseitige Skripte für die Ereignisse des Elements lauschen, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird beim Absenden des Formulars mit diesem Button zu den Serverparametern übermittelt.

## Anmerkungen

Ein Absende-Button mit dem Attribut `formaction` gesetzt, aber ohne ein zugeordnetes Formular macht nichts. Sie müssen einen Formularbesitzer festlegen, indem Sie ihn entweder in ein `<form>` einfügen oder das Attribut `form` auf die ID des Formulars setzen.

Die `<button>`-Elemente sind viel einfacher zu gestalten als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudoelemente für komplexe Darstellung.

Wenn Ihre Buttons nicht dazu verwendet werden, Formulardaten an einen Server zu senden, sollten Sie sicherstellen, dass das `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu senden und die (nicht vorhandene) Antwort zu laden, wobei möglicherweise der aktuelle Stand des Dokuments zerstört wird.

Obwohl `<button type="button">` kein Standardverhalten hat, können Ereignis-Handler programmiert werden, um Verhalten auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn/JavaScript) ausführen, wie z.B. das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen Benutzeragenten Buttons als `display: flow-root`, was einen neuen [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder wie Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbol-Buttons

Buttons, die nur ein Symbol anzeigen, verfügen nicht über einen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologien, wie Screenreader, die beim Parsen des Dokuments und Generieren [eines Barrierefreiheitsbaums](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) darauf zugreifen. Unterstützende Technologien nutzen dann den Barrierefreiheitsbaum, um Dokumenteninhalte zu navigieren und zu manipulieren.

Um einem Symbol-Button einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>`-Element ein, das die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine zugängliche Methode, eine [Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, ihn aber trotzdem für unterstützende Technologien parsierbar zu halten.

Es ist jedoch erwähnenswert, dass sichtbarer Button-Text Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Symbols vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technisch versiert sind oder möglicherweise andere kulturelle Interpretationen des vom Button verwendeten Symbols haben.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verstehen von WCAG, Leitlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verstehen des Erfolgskriteriums 4.1.2 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Steuerungsproblemen und Menschen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verstehen von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiver Inhalte — einschließlich Buttons — in enger visueller Nähe zueinander sollten Platz zwischen ihnen haben. Diese Abstände sind vorteilhaft für Menschen, die motorische Steuerungsprobleme erleben, die versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) zu verwenden. Weitere Informationen finden Sie in den Informationen zur [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role).

### Button-Stile

Es ist am besten, den Standardfokus-Ring für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast aufweist**, damit Menschen mit Sehschwächen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, aber nur, wenn die Heuristiken des Benutzeragenten bestimmen, dass der Fokus hervorgehoben werden soll, wie zum Beispiel, wenn ein `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund verglichen wird, auf dem der Button platziert ist. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66 Pixel und {{cssxref("font-weight", "bold")}} oder größer, oder 24 Pixel oder größer.)

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verstehen von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typen dazu führt, dass er (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem angeklickten Button den Fokus, aber [Safari macht dies bewusst nicht](https://webkit.org/b/22261#c68).

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
          >absendbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularverknüpft</a
        >
        Element, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>
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
