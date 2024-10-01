---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: ed06a82c69130a7337393cc231ab73a21c1430f3
---

{{HTMLSidebar}}

Das HTML-Element **`<button>`** ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, einem Finger, einem Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Sobald es aktiviert ist, führt es eine Aktion aus, wie das Absenden eines [Formulars](/de/docs/Learn/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} ausgeführt wird. Sie können die Darstellung der Buttons jedoch mit [CSS](/de/docs/Web/CSS) ändern.

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`
  - : Dieses boolesche Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann weder gedrückt noch fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, dem der Button zugeordnet werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` mit seinem Vorfahren `<form>`-Element, falls vorhanden, verknüpft.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente auf `<form>` in jedem Bereich des Dokuments zu beziehen, nicht nur innerhalb eines `<form>`. Es kann auch ein vorangestelltes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers des Buttons. Hat keine Wirkung, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`

  - : Wenn der Button ein Absende-Button ist (er befindet sich in/ist mit einem `<form>` verknüpft und hat nicht `type="button"`), wird angegeben, wie die abgesendeten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Element/input#type)-Attributen, die auf `file` gesetzt sind, abzusenden.
    - `text/plain`: Wird als Unterstützung für Debugging angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Absende-Button ist (er befindet sich in/ist mit einem `<form>` verknüpft und hat nicht `type="button"`), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Methods) zur Absendung des Formulars an. Mögliche Werte:

    - `post`: Die Daten aus dem Formular werden im Body der HTTP-Anfrage eingeschlossen, wenn sie an den Server übermittelt werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldeinformationen.
    - `get`: Die Formulardaten werden der `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den mit ihm verbundenen [Dialog](/de/docs/Web/HTML/Element/dialog) schließt und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Absende-Button ist, gibt dieses boolesche Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)-Elementen verfügbar.

- `formtarget`

  - : Wenn der Button ein Absende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes Stichwort mit Unterstrich, das angibt, wo die Antwort auf die Formularabsendung angezeigt wird. Dies ist der `name` einer _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Stichworte haben spezielle Bedeutungen:

    - `_self`: Lädt die Antwort im gleichen Browsing-Kontext wie der aktuelle. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einem neuen unbenannten Browsing-Kontext — normalerweise einem neuen Tab oder Fenster, abhängig von den Einstellungen des Browsers des Benutzers.
    - `_parent`: Lädt die Antwort im übergeordneten Browsing-Kontext des aktuellen. Gibt es keinen übergeordneten, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort im obersten Browsing-Kontext (d.h., den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten hat). Gibt es keinen übergeordneten, verhält sich diese Option genauso wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button verwendet wird, um das Formular abzusenden.

- `popovertarget`

  - : Wandelt ein `<button>`-Element in einen Popover-Kontrollbutton um; nimmt die ID des gesteuerten Popover-Elements als Wert. Weitere Informationen finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API)-Seite.

- `popovertargetaction`

  - : Gibt die Aktion an, die bei einem über einen Kontroll-`<button>` gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein sichtbares Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion unternommen.
    - `"show"`
      - : Der Button wird ein ausgeblendetes Popover anzeigen. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion unternommen.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen sichtbar und ausgeblendet umschalten. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die durch den Kontrollbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verknüpft sind, nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu ärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er standardmäßig gedrückt wird. Er kann clientseitige Skripte haben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn er zusammen mit den Formulardaten abgesendet wird. Dieser Wert wird an den Server in Parametern übergeben, wenn das Formular mit diesem Button ab

geschickt wird.

## Anmerkungen

Ein Absende-Button mit dem Attribut `formaction`, aber ohne zugeordnetes Formular, macht nichts. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie ihn in ein `<form>` einfügen oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und {{Cssxref("::after")}}- und {{Cssxref("::before")}}-Pseudoelemente für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht dafür gedacht sind, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass Sie ihr `type`-Attribut auf `button` setzen. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, wodurch möglicherweise der aktuelle Zustand des Dokuments zerstört wird.

Während `<button type="button">` kein Standardverhalten hat, können Skripts mit Ereignishandlern das Verhalten auslösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn/JavaScript) ausführen, wie das Entfernen eines Elements von einer Liste.

Standardmäßig stylen User-Agents Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Gitter-Container definiert ist, verhalten sich die Kinder als Flex- oder Gitter-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbol-Buttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Bildschirmleser, die auf sie zugreifen, wenn sie das Dokument analysieren und [einen Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) erzeugen. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um auf die Inhalte der Seite zuzugreifen und sie zu manipulieren.

Um einem Symbol-Button einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>`-Element ein, der die Funktionalität des Buttons prägnant beschreibt.

#### Beispiele

```html
<button name="favorite">
  <svg aria-hidden="true" viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
  </svg>
  Add to favorites
</button>
```

##### Ergebnis

{{EmbedLiveSample('Icon buttons')}}

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es ein zugänglicher Weg, eine [Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber dennoch von unterstützenden Technologien analysierbar zu halten.

Es lohnt sich jedoch zu beachten, dass das Belassen des Button-Texts Menschen helfen kann, die möglicherweise mit der Bedeutung des Symbols nicht vertraut sind oder den Zweck des Buttons nicht verstehen. Dies ist besonders wichtig für Menschen, die technologisch nicht versiert sind oder verschiedene kulturelle Interpretationen des von dem Button verwendeten Symbols haben.

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Guideline 4.1 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine Fläche haben, die groß genug ist, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Steuerungsproblemen und Menschen, die nicht präzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestinteraktivitätsgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen von interaktivem Inhalt — einschließlich Buttons — die sich in enger visueller Nähe zueinander befinden, sollten durch Raum getrennt werden. Dieser Abstand ist nützlich für Menschen mit motorischen Steuerungsproblemen, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Weitere Informationen finden Sie auf der Seite zum [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role).

### Button-Stile

Es ist am besten, den standardmäßigen Fokusring für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig **sicherzustellen, dass der Fokuszustand genug Kontrast hat**, damit Menschen mit eingeschränkter Sehfähigkeit ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}}-Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, aber nur, wenn die heuristische Analyse des User-Agents bestimmt, dass der Fokus hervorgehoben werden sollte, wie wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Kontrastverhältnis der Farben wird durch den Vergleich der Helligkeit des Button-Texts und der Hintergrundfarbe mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) gerecht zu werden, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klick und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Button-Typen diesen (standardmäßig) fokussiert, variiert je nach Browser und Betriebssystem. Die meisten Browser fokussieren einen angeklickten Button, aber [Safari tut dies nicht, aus Designgründen](https://webkit.org/b/22261#c68).

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >labelbar</a
        > und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >absendbar</a
        >
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > geben.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert.
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
