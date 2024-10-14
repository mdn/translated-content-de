---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 8d3f6fd3be3f87ae86fad0e8d092ace35fdf65e0
---

{{HTMLSidebar}}

Das **`<button>`**-Element [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderen unterstützenden Technologien aktiviert wird. Sobald es aktiviert wird, führt es eine Aktion aus, wie zum Beispiel das Absenden eines [Formulars](/de/docs/Learn/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil angezeigt, der der Plattform entspricht, auf der der {{Glossary("user_agent", "User-Agent")}} läuft. Sie können jedoch das Aussehen der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`
  - : Dieses Boolean-Attribut gibt an, dass der Button beim Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem der Button verknüpft werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` mit seinem Vorfahren-`<form>`-Element verknüpft, falls vorhanden.)

    Mit diesem Attribut können Sie `<button>`-Elemente an `<form>`s irgendwo im Dokument binden, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers des Buttons. Tut nichts, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`

  - : Wenn der Button ein Submit-Button ist (er befindet sich innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt an, wie die Formulardaten kodiert werden sollen, die eingereicht werden. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihrem [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf `file` zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für die tatsächliche Formulareinreichung verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Submit-Button ist (er befindet sich innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Methods) an, die zum Übermitteln des Formulars verwendet wird. Mögliche Werte:

    - `post`: Die Daten aus dem Formular werden im Body der HTTP-Anfrage an den Server gesendet. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden der `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Seiteneffekte")}} hat, wie etwa Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button den [Dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Submit-Button ist, gibt dieses Boolean-Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)-Elementen verfügbar.

- `formtarget`

  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, mit Unterstrich vorangestelltes Schlüsselwort, das angibt, wo die Antwort des Formularabsendung angezeigt werden soll. Dies ist der `name` eines Browsing-Kontextes (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self`: Lädt die Antwort im gleichen Browsing-Kontext wie den aktuellen. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einem neuen, unbenannten Browsing-Kontext — normalerweise in einem neuen Tab oder Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort im übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort im obersten Browsing-Kontext (das heißt, dem Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt, wenn dieser Button zum Absenden des Formulars verwendet wird.

- `popovertarget`

  - : Verwandelt ein `<button>`-Element in einen Popover-Steuerungsbutton; nimmt die ID des zu steuernden Popover-Elements als Wert. Weitere Details finden Sie auf der [Popover-API](/de/docs/Web/API/Popover_API)-Hauptseite.

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem von einem Steuerungs-`<button>` gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button versteckt ein sichtbares Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover. Wenn Sie versuchen, ein bereits sichtbares Popover zu zeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen sichtbar und versteckt um. Wenn das Popover versteckt ist, wird es gezeigt; wenn das Popover sichtbar ist, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungsbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standardwert, wenn das Attribut für Buttons, die mit einem `<form>` verbunden sind, nicht angegeben ist oder wenn das Attribut keinen oder einen ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird. Er kann clientseitige Skripte haben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den mit dem `name` des Buttons assoziierten Wert, wenn es mit den Formulardaten eingereicht wird. Dieser Wert wird bei der Formularabsendung mithilfe dieses Buttons in Parametern an den Server übergeben.

## Hinweise

Ein Submit-Button mit dem Attribut `formaction` gesetzt, aber ohne ein zugehöriges Formular, tut nichts. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie ihn in ein `<form>` einwickeln oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Darstellungen verwenden.

Wenn Ihre Buttons nicht zur Absenden von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass das `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht existierende) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstören kann.

Obwohl `<button type="button">` kein Standardverhalten hat, können Event-Handler geskriptet werden, um Verhalten zu triggern. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn/JavaScript) ausführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User-Agents Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Button-Kinder sowohl horizontal als auch vertikal mittig platziert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Items. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als ob der Wert auf `display: inline-block` gesetzt wäre.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Bildschirmleser, um darauf zuzugreifen, wenn sie das Dokument parsen und [einen Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um durch Seiteninhalte zu navigieren und diese zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, platzieren Sie einen Text im `<button>`-Element, der die Funktionalität des Buttons knapp beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es auf eine zugängliche Weise möglich, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber von unterstützenden Technologien weiterhin auslesbar zu lassen.

Es sei jedoch darauf hingewiesen, dass es hilfreich sein kann, den Button-Text sichtbar zu lassen, um Personen zu helfen, die möglicherweise mit der Bedeutung des Icons nicht vertraut sind oder den Zweck des Buttons nicht verstehen. Dies ist besonders wichtig für Personen, die nicht technologisch versiert sind oder unterschiedliche kulturelle Interpretationen des vom Button verwendeten Icons haben.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis für WCAG, Richtlinien 4.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert zu werden. Dies hilft verschiedenen Personen, einschließlich Menschen mit motorischen Kontrollproblemen und Personen, die nicht präzise Eingabeformen wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixeln")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis für WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Buttons — die in enger visueller Nähe zueinander platziert sind, sollten Platz dazwischen haben. Dieser Abstand ist vorteilhaft für Menschen, die motorische Kontrollprobleme haben und möglicherweise aus Versehen den falschen interaktiven Inhalt aktivieren.

Abstand kann mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das große-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role), um mehr herauszufinden.

### Button-Stile

Es ist am besten, den Standardfokus-Ring für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit eingeschränkter Sicht ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}}-Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristik des User-Agents bestimmt, dass der Fokus hervorgehoben werden sollte, wie wenn ein `<button>` den Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird durch Vergleich der Leuchtdichte der Button-Text- und Hintergrundfarbenwerte mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer oder 24px oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis für WCAG, Richtlinien 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder den {{HTMLElement("input")}}-Button-Typ ihn (standardmäßig) fokussiert, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button den Fokus, aber [Safari tut dies nicht absichtlich](https://webkit.org/b/22261#c68).

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
        > und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >einreichbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >form-assoziiertes</a
        >
        Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
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
