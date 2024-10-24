---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML) Element ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderen assistierenden Technologien aktiviert wird. Nach der Aktivierung führt es dann eine Aktion aus, wie das Absenden eines [Formulars](/de/docs/Learn/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} ausgeführt wird, aber Sie können das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`

  - : Dieses Boolean-Attribut gibt an, dass der Button beim Laden der Seite den Eingabe[Focus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`

  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird, angegeben über das `commandfor` Attribut. Die möglichen Werte sind:

    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modal an. Wenn das Dialogfeld bereits modal ist, wird keine Aktion ausgeführt.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}} Element. Wenn das Dialogfeld bereits geschlossen ist, wird keine Aktion ausgeführt.
    - `"show-popover"`
      - : Der Button zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen Anzeigen und Verbergen. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem kontrollierten Element aus.

- `commandfor`
  - : Verwandelt ein {{htmlelement("button")}} Element in einen Button, der das angegebene interaktive Element steuert; nimmt die ID des zu kontrollierenden Elements als Wert.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}} Element, mit dem der Button verbunden ist (sein _Formulareigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` mit seinem übergeordneten `<form>` Element, falls vorhanden, verknüpft.)

    Dieses Attribut ermöglicht es Ihnen, `<button>` Elemente mit `<form>`-Elementen irgendwo im Dokument zu verknüpfen und nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>` Element übergehen.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action) Attribut des Formulareigentümers des Buttons. Macht nichts, wenn es keinen Formulareigentümer gibt.
- `formenctype`

  - : Wenn der Button ein Submit-Button ist (innerhalb/assoziiert mit einem `<form>` und ohne `type="button"`), gibt er an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Die Standardeinstellung, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}} Elemente zu übermitteln, deren [`type`](/de/docs/Web/HTML/Element/input#type) Attribute auf `file` gesetzt sind.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für die tatsächliche Formularübermittlung verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des Formulareigentümers des Buttons.

- `formmethod`

  - : Wenn der Button ein Submit-Button ist (innerhalb/assoziiert mit einem `<form>` und ohne `type="button"`), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Methods) zum Übermitteln des Formulars an. Mögliche Werte:

    - `post`: Die Daten aus dem Formular werden im Body der HTTP-Anfrage enthalten, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Login-Daten.
    - `get`: Die Formulardaten werden an die `action` URL des Formulars angehängt, mit einem `?` als Separator, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er verbunden ist, und die Formulardaten überhaupt nicht überträgt.

    Falls spezifiziert, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method) Attribut des Formulareigentümers des Buttons.

- `formnovalidate`

  - : Ist der Button ein Submit-Button, gibt dieses Boolean-Attribut an, dass das Formular nicht [validiert](/de/docs/Learn/Forms/Form_validation) werden soll, wenn es übermittelt wird. Falls dieses Attribut spezifiziert ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut des Formulareigentümers des Buttons.

    Dieses Attribut steht auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) Elementen zur Verfügung.

- `formtarget`

  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrich-präfixiertes Schlüsselwort, das angibt, wo die Antwort auf das Absenden des Formulars angezeigt werden soll. Dies ist der `name` eines _Browsing-Kontextes_ (ein Tab, ein Fenster oder {{HTMLElement("iframe")}}) oder ein Schlüsselwort dafür. Falls dieses Attribut spezifiziert ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target) Attribut des Formulareigentümers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Lädt die Antwort in denselben Browsing-Kontext, wie der aktuelle. Dies ist die Standardeinstellung, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, namenlosen Browsing-Kontext – gewöhnlich ein neuer Tab oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Falls es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Falls es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button verwendet wird, um das Formular zu übermitteln.

- `popovertarget`

  - : Verwandelt ein `<button>` Element in einen Popover-Steuerbutton; nimmt die ID des Popover-Elements, das gesteuert werden soll, als Wert. Weitere Details finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Homepage.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf einem Popover-Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verborgenes Popover anzeigen. Wenn Sie versuchen, ein bereits sichtbares Popover zu zeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen Anzeigen und Verbergen. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von dem Steuerbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist die Standardeinstellung, wenn das Attribut nicht für Buttons, die mit einem `<form>` verbunden sind, angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre Anfangswerte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und macht nichts, wenn er gedrückt wird. Er kann client-seitige Skripte haben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verbunden ist, wenn es mit den Formulardaten eingereicht wird. Dieser Wert wird an den Server in Parametern gesendet, wenn das Formular mit diesem Button übermittelt wird.

## Anmerkungen

Ein Submit-Button mit dem Attribut `formaction` gesetzt, jedoch ohne ein zugeordnetes Formular, macht nichts. Sie müssen einen Formulareigentümer setzen, entweder indem Sie ihn in einem `<form>` umschließen oder das Attribut `form` auf die id des Formulars setzen.

`<button>` Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}} Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht zum Übermitteln von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type` Attribut auf `button` gesetzt ist. Andernfalls werden sie versuchen, Formulardaten zu übermitteln und die (nicht existierende) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn/JavaScript) ausführen, wie z.B. das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User-Agents Buttons als `display: flow-root`, was einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wird der Button als Flex- oder Grid-Container definiert, verhalten sich die Kinder als Flex- oder Grid-Items. Ein Button, der auf `display: inline` gesetzt ist, wird gestylt, als ob der Wert auf `display: inline-block` gesetzt wäre.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "accessiblen Namen")}}_. Accessible Namen liefern Informationen für assistierende Technologien, wie Screenreader, um auf sie zuzugreifen, wenn sie das Dokument parsen und [einen Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) generieren. Assistierende Technologien nutzen den Barrierefreiheitsbaum, um die Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon-Button einen accessiblen Namen zu geben, setzen Sie einen Text innerhalb des `<button>` Elements, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell verstecken möchten, ist ein zugänglicher Weg, dies zu tun, eine [Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber für assistierende Technologien parsierbar zu lassen.

Es ist jedoch erwähnenswert, dass das Belassen des Textes sichtbar Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technologisch versiert sind oder die unterschiedliche kulturelle Interpretationen des von dem Button verwendeten Icons haben könnten.

- [Was ist ein accessible Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verstehen von WCAG, Leitfaden 4.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verstehen des Erfolgskriteriums 4.1.2 | W3C WCAG 2.0 Verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, damit sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Eingabeformen wie einen Stylus oder Finger verwenden. Eine Mindestgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixeln")}} wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C WCAG 2.1 Verstehen](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Buttons — die in enger visueller Nähe zueinander platziert sind, sollten durch Abstand getrennt werden. Dieser Abstand ist vorteilhaft für Menschen, die motorische Kontrollprobleme haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Der Abstand kann mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Statusinformationen

Um den Zustand eines Buttons zu beschreiben, ist es korrekt, das ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Focus-Ring für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit Sehschwächen ihn wahrnehmen und Menschen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des User-Agents bestimmen, dass der Fokus hervorgehoben werden sollte, wie wenn ein `<button>` Tastaturfokus erhält. Für mehr Informationen sehen Sie [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund, auf dem der Button platziert ist, verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für große Texte erforderlich. (Große Texte sind definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbanalyse-Tool](https://webaim.org/resources/contrastchecker/)
- [MDN Verstehen von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C WCAG 2.0 Verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Button-Typen dazu führt, dass er (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button den Fokus, aber [Safari tut dies nicht absichtlich](https://webkit.org/b/22261#c68).

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
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgeführt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >einreichbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiert</a
        >
        Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >
        aber es darf kein
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >
        geben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Beginn- als auch End-Tag sind obligatorisch.</td>
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
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <th scope="row">DOM Schnittstelle</th>
      <td>[`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
