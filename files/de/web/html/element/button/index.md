---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML) Element ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, einem Finger, Sprachbefehl oder einer anderen unterstützenden Technologie aktiviert wird. Einmal aktiviert, führt es dann eine Aktion aus, wie zum Beispiel das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "Benutzeragent")}} läuft, aber Sie können das Erscheinungsbild von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`

  - : Dieses boolesche Attribut gibt an, dass der Button beim Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Kontroll-`<button>` gesteuert wird, das über das Attribut `commandfor` spezifiziert wird. Die möglichen Werte sind:

    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn ein bereits angezeigtes Popover angezeigt werden soll, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn versucht wird, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen Anzeigen und Verbergen. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert senden das [`CommandEvent`](/de/docs/Web/API/CommandEvent) an das gesteuerte Element.

- `commandfor` {{experimental_inline}}
  - : Wandelt ein {{htmlelement("button")}} Element in einen Button um, der das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}} Element, mit dem der Button verbunden werden soll (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` mit seinem übergeordneten `<form>` Element verbunden, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>` Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulareigentümers des Buttons. Macht nichts, wenn kein Formulareigentümer vorhanden ist.
- `formenctype`

  - : Wenn der Button ein Absenden-Button ist (er befindet sich in/ist mit einem `<form>` verbunden und hat nicht `type="button"`), gibt er an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}} Elemente mit ihrem [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf `file` eingestellt zu übermitteln.
    - `text/plain`: Angegeben als Debugging-Hilfe; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulareigentümers des Buttons.

- `formmethod`

  - : Wenn der Button ein Absenden-Button ist (er befindet sich in/ist mit einem `<form>` verbunden und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Methods) an, die zur Übermittlung des Formulars verwendet wird. Mögliche Werte:

    - `post`: Die Daten aus dem Formular werden im Hauptteil der HTTP-Anfrage an den Server gesendet. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldeinformationen.
    - `get`: Die Formulardaten werden der `action` URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button das mit ihm verbundene [Dialog](/de/docs/Web/HTML/Element/dialog) schließt und die Formulardaten überhaupt nicht überträgt.

    Ist dieses Attribut angegeben, überschreibt es das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulareigentümers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Absenden-Button ist, gibt dieses boolesche Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulareigentümers des Buttons.

    Dieses Attribut ist auch verfügbar für [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) Elemente.

- `formtarget`

  - : Wenn der Button ein Absenden-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrichenes Schlüsselwort, das angibt, wo die Antwort zur Formularübermittlung angezeigt werden soll. Dies ist der `name` eines Browserkontextes (ein Tab, Fenster oder {{HTMLElement("iframe")}}) oder ein Schlüsselwort dafür. Ist dieses Attribut angegeben, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulareigentümers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Die Antwort wird im selben Browserkontext wie der aktuelle geladen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Die Antwort wird in einem neuen unbenannten Browserkontext geladen - üblicherweise in einem neuen Tab oder Fenster, abhängig von den Einstellungen des Benutzers.
    - `_parent`: Die Antwort wird in den übergeordneten Browserkontext des aktuellen geladen. Wenn es keinen Elternteil gibt, verhält sich diese Option wie `_self`.
    - `_top`: Die Antwort wird im obersten Browserkontext geladen (also dem Browserkontext, der ein Vorfahre des aktuellen ist und keinen Vater hat). Wenn es keinen Elternteil gibt, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übergeben wird, wenn dieser Button zur Übermittlung des Formulars verwendet wird.

- `popovertarget`

  - : Wandelt ein `<button>` Element in einen Popover-Kontrollbutton um; nimmt die ID des zu steuernden Popover-Elements als Wert. Siehe die [Popover API](/de/docs/Web/API/Popover_API) Landingpage für weitere Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf einem Popover-Element ausgeführt werden soll, das von einem Kontroll-`<button>` gesteuert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn versucht wird, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn versucht wird, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen Anzeigen und Verbergen. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Kontrollbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verknüpft sind, nicht angegeben ist, oder wenn das Attribut leer oder ungültig ist.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu ärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut ohne weiteres nichts, wenn er gedrückt wird. Er kann clientseitig Skripte haben, die auf die Ereignisselemente reagieren, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons assoziiert ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in Parametern übergeben, wenn das Formular unter Verwendung dieses Buttons abgesendet wird.

## Hinweise

Ein Absenden-Button mit dem Attribut `formaction` gesetzt, aber ohne ein zugeordnetes Formular, tut nichts. Sie müssen einen Formulareigentümer setzen, entweder indem Sie es in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>` Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}} Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und die {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudoelemente für komplexe Darstellungen verwenden.

Wenn Ihre Buttons nicht für das Absenden von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass deren `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was den aktuellen Zustand des Dokuments möglicherweise zerstören könnte.

Obwohl `<button type="button">` kein Standardverhalten hat, können Event-Handler geskriptet werden, um Verhalten auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie etwa das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen Benutzeragenten Buttons als `display: flow-root`, was einen neuen [block formatting context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Rasterbehälter definiert ist, verhalten sich die Kinder als Flex- oder Rasterelemente. Ein Button, der auf `display: inline` gesetzt ist, wird gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbolbuttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Bildschirmlesegeräte, um darauf zuzugreifen, wenn sie das Dokument parsen und [einen Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologien verwenden dann den Zugänglichkeitsbaum, um den Seiteninhalt zu navigieren und zu manipulieren.

Um einem Symbolbutton einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>` Element ein, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine zugängliche Methode, dies zu tun, [eine Kombination von CSS-Eigenschaften zu verwenden](https://www.a11yproject.com/posts/how-to-hide-content/), um ihn visuell vom Bildschirm zu entfernen, aber für unterstützende Technologien weiterhin lesbar zu halten.

Es sei jedoch darauf hingewiesen, dass das Sichtbarlassen des Button-Textes Menschen helfen kann, die nicht mit der Bedeutung des Symbols vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technologisch versiert sind oder unterschiedliche kulturelle Interpretationen des Symbols haben, das der Button verwendet.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Richtlinien 4.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgscriteriums 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichende Fläche haben, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Steuerproblemen und Personen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS Pixeln")}} wird empfohlen.

- [Verständnis des Erfolgscriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Buttons — die visuell nahe beieinander platziert sind, sollten Abstand zwischen sich haben. Diese Abstände sind vorteilhaft für Menschen, die motorische Steuerprobleme haben und versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Problem mit den großen Buttons - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) zu verwenden, nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) . Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokusrahmen für Elemente mit Fokus nicht zu überschreiben. Wenn die Styles der Buttons überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genug Kontrast hat**, damit Menschen mit Sehbehinderungen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristik des Benutzeragents feststellt, dass der Fokus hervorgehoben werden sollte, z. B. wenn ein `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Verhältnis des Farbkontrasts wird durch den Vergleich der Leuchtkraft der Text- und Hintergrundfarbwerte des Buttons mit dem Hintergrund bestimmt, auf dem der Button platziert ist. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als ab 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder ab 24px oder größer.)

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Richtlinien 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgscriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Button-Typen dazu führt, dass er (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem Button, der geklickt wird, den Fokus, aber [Safari nicht, aus Designgründen](https://webkit.org/b/22261#c68).

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierter Inhalt</a
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
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Formulierter Inhalt</a
        >
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tags weglassen</th>
      <td>Keine, sowohl die Start- als auch die End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >formulierter Inhalt</a
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
