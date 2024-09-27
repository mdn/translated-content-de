---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: ed06a82c69130a7337393cc231ab73a21c1430f3
---

{{HTMLSidebar}}

Das **`<button>`**-Element in [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das durch den Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer assistiver Technologie aktiviert wird. Einmal aktiviert, führt es eine Aktion aus, wie z.B. das Absenden eines [Formulars](/de/docs/Learn/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der [User-Agent](/de/docs/Glossary/user_agent) läuft, aber Sie können das Aussehen der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`
  - : Dieses Boolean-Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem der Button verbunden werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` mit seinem Vorfahren-`<form>`-Element verbunden, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die Informationen verarbeitet, die durch den Button übermittelt werden. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers des Buttons. Macht nichts, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`

  - : Wenn der Button ein Sende-Button ist (er befindet sich innerhalb/in Verbindung mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut an, wie die gesendeten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Die Voreinstellung, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Element/input#type)-Attributen auf `file` zu setzen.
    - `text/plain`: Aus Debugging-Zwecken angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Sende-Button ist (er befindet sich innerhalb/in Verbindung mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Methods) an, die zum Übermitteln des Formulars verwendet wird. Mögliche Werte:

    - `post`: Die Daten des Formulars sind im Hauptteil der HTTP-Anfrage enthalten, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular [keine Nebenwirkungen hat](/de/docs/Glossary/Idempotent), wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er verbunden ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Sende-Button ist, gibt dieses Boolean-Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)-Elementen verfügbar.

- `formtarget`

  - : Wenn der Button ein Sende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrichenes Schlüsselwort, das angibt, wo die Antwort auf die Formularübermittlung angezeigt werden soll. Dies ist der `name` eines _Browsing-Kontexts_ (eines Tabs, Fensters oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Laden Sie die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dies ist die Voreinstellung, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden Sie die Antwort in einen neuen, unbenannten Browsing-Kontext — normalerweise einen neuen Tab oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Wenn es keinen übergeordneten gibt, verhält sich diese Option genauso wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Absenden des Formulars verwendet wird.

- `popovertarget`

  - : Verwandelt ein `<button>`-Element in einen Popover-Kontrollbutton; nimmt die ID des zu steuernden Popover-Elements als seinen Wert. Weitere Details finden Sie auf der Startseite der [Popover-API](/de/docs/Web/API/Popover_API).

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem Popover-Element durchgeführt werden soll, das von einem Kontroll-`<button>` gesteuert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen anzeigen und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Kontrollbutton durchgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist die Voreinstellung, wenn das Attribut nicht für Buttons angegeben ist, die mit einem `<form>` verbunden sind, oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird. Es können clientseitige Skripte die Ereignisse des Elements abhören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons assoziiert ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in Parametern übergeben, wenn das Formular unter Verwendung dieses Buttons übermittelt wird.

## Hinweise

Ein Sende-Button mit dem Attribut `formaction`, aber ohne ein zugehöriges Formular tut nichts. Sie müssen einen Formularbesitzer festlegen, indem Sie ihn entweder in ein `<form>` einfügen oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können innere HTML-Inhalte hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht zum Absenden von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass das Attribut `type` auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler so geskriptet werden, dass sie Verhaltensweisen auslösen. Ein aktivierter Button kann programmierbare Aktionen mithilfe von [JavaScript](/de/docs/Learn/JavaScript) ausführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User Agents Buttons als `display: flow-root`, was einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Items. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als ob der Wert auf `display: inline-block` gesetzt wäre.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _[accessible name](/de/docs/Glossary/accessible_name)_. Accessible Names bieten Informationen für assistive Technologien, wie Screenreader, um auf sie zuzugreifen, wenn sie das Dokument analysieren und [einen Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) generieren. Assistive Technologien verwenden dann den Barrierefreiheitsbaum, um Seitenelemente zu navigieren und zu manipulieren.

Um einem Icon-Button einen Accessible Name zu geben, platzieren Sie Text im `<button>`-Element, das die Funktionalität des Buttons kurz beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine barrierefreie Methode, dies zu tun, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber für assistive Technologien lesbar zu halten.

Es ist jedoch erwähnenswert, dass das Belassen des sichtbaren Texts hilfreich sein kann für Menschen, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons nicht verstehen. Dies ist besonders wichtig für Menschen, die nicht technisch versiert sind oder unterschiedliche kulturelle Interpretationen des Icons verwenden.

- [Was ist ein Accessible Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Guideline 4.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Erklärung der Erfolgskriterien 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht zu aktivieren zu sein. Dies hilft verschiedenen Menschen, einschließlich solche mit motorischen Kontrolleinschränkungen und Menschen, die ungenaue Eingabemethoden verwenden, wie Stift oder Finger. Eine minimale interaktive Größe von 44×44 [CSS-Pixeln](/de/docs/Glossary/CSS_pixel) wird empfohlen.

- [Erklärung des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiven Inhalts — einschließlich Buttons — die visuell nah beieinander platziert sind, sollten durch Leerzeichen getrennt sein. Dieser Abstand ist vorteilhaft für Menschen, die motorische Probleme haben, die möglicherweise das falsche interaktive Element aktivieren.

Abstände können durch CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das riesige-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Weitere Informationen finden Sie im Artikel über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role).

### Button-Stile

Es ist am besten, den Standardfokusring für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit Sehschwächen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Styles auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des User Agents bestimmen, dass der Fokus hervorgehoben werden sollte, z.B. wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für weitere Informationen.

Das Kontrastverhältnis der Farbe wird durch den Vergleich der Helligkeit der Hintergrundfarbenwerte des Button-Textes und -Hintergrundes mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66 px und {{cssxref("font-weight", "bold")}} oder größer, oder 24 px oder größer.)

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder die {{HTMLElement("input")}}-Button-Typen dazu führt, dass sie (standardmäßig) fokussiert werden, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button Fokus, aber [Safari tut dies nicht, aus Designgründen](https://webkit.org/b/22261#c68).

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >kennzeichnend</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >form-assoziiertes</a
        >
        Element, erfassbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        , aber es darf kein
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >
        vorhanden sein.
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
          >Phrasierungsinhalt</a
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
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
