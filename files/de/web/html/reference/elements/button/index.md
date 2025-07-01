---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Nach der Aktivierung führt es eine Aktion aus, wie zum Beispiel das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User Agent")}} läuft. Sie können das Erscheinungsbild der Buttons jedoch mit [CSS](/de/docs/Web/CSS) ändern.

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

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`
  - : Dieses boolesche Attribut gibt an, dass der Button beim Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem von einem Steuer-`<button>` gesteuerten Element ausgeführt werden soll, angegeben durch das `commandfor`-Attribut. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem Dialogelement.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem Dialogelement.
    - `"request-close"`
      - : Der Button fordert das Schließen eines {{htmlelement("dialog")}}-Elements an. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem Dialogelement.
    - `"show-popover"`
      - : Der Button zeigt einen versteckten Popover an. Wenn Sie versuchen, einen bereits sichtbaren Popover anzuzeigen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button verbirgt einen sichtbaren Popover. Wenn Sie versuchen, einen bereits verborgenen Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt einen Popover zwischen sichtbar und verborgen. Wenn der Popover verborgen ist, wird er angezeigt; wenn der Popover sichtbar ist, wird er verborgen. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehlsbutton, das das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: er kann weder gedrückt noch fokussiert werden.
- `form`
  - : Das {{HTMLElement("form")}}-Element, das dem Button zugeordnet werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` seinem Vorgänger-`<form>`-Element zugeordnet, wenn vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verbinden, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button bereitgestellten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Tut nichts, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Submit-Button ist (innerhalb/verbunden mit einem `<form>` und nicht `type="button"` hat), gibt er an, wie die Formulardaten kodiert werden sollen, die übermittelt werden. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen, die auf `file` gesetzt sind, zu übermitteln.
    - `text/plain`: Zur Problemlösung spezifiziert; sollte nicht für die echte Formularübermittlung verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`
  - : Wenn der Button ein Submit-Button ist (innerhalb/verbunden mit einem `<form>` und nicht `type="button"` hat), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die zur Übermittlung des Formulars verwendet wird. Mögliche Werte:
    - `post`: Die Daten des Formulars werden im Body der HTTP-Anfrage gesendet, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`- URL des Formulars angehängt, bei der ein `?` als Trennzeichen dient, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie etwa Suchformulare.
    - `dialog`: Diese Methode gibt an, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verbunden ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Submit-Button ist, gibt dieses boolesche Attribut an, dass das Formular bei der Übermittlung nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut steht auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen zur Verfügung.

- `formtarget`
  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisierter, mit einem Unterstrich vorangestellter Schlüsselwort, das angibt, wo die Antwort auf die Übermittlung des Formulars angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort im gleichen Browsing-Kontext wie der aktuelle. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einem neuen nicht benannten Browsing-Kontext — normalerweise ein neuer Tab oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort im übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort im obersten Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option wie `_self`.

- `name`
  - : Der Name des Buttons, übermittelt als Paar mit dem `value` des Buttons als Teil der Formulardaten, wenn dieser Button verwendet wird, um das Formular abzusenden.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in einen Popover-Steuerschalter um; nimmt die ID des zu steuernden Popover-Elements als Wert. Das Herstellen einer Beziehung zwischen einem Popover und seinem Aufruferbutton mit dem `popovertarget`-Attribut hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Benutzer mit Tastatur und unterstützender Technologie (AT) zugänglicher (siehe auch [Popover- Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt einen impliziten Anker-Verweis zwischen den beiden, was es sehr praktisch macht, Popover relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Verankerungspositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`
  - : Gibt die auf einem Popover-Element auszuführende Aktion an, das von einem Steuer-`<button>` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button verbirgt einen sichtbaren Popover. Wenn Sie versuchen, einen bereits verborgenen Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button zeigt einen versteckten Popover an. Wenn Sie versuchen, einen bereits sichtbaren Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wechselt einen Popover zwischen sichtbar und verborgen. Wenn der Popover verborgen ist, wird er angezeigt; wenn der Popover sichtbar ist, wird er verborgen. Wenn `popovertargetaction` nicht angegeben ist, ist `"toggle"` die Standardaktion, die vom Steuer-Button ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut nicht für mit einem `<form>` verbundene Buttons angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird. Es können clientseitige Skripte die Ereignisse des Elements überwachen, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verbunden ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird bei der Einsendung des Formulars über diesen Button als Parameter an den Server übermittelt.

## Hinweise

Ein Submit-Button mit gesetztem Attribut `formaction`, der jedoch kein zugehöriges Formular hat, tut nichts. Sie müssen einen Formulareigentümer festlegen, indem Sie ihn entweder in ein `<form>` einfügen oder das Attribut `form` auf die id des Formulars setzen.

`<button>`-Elemente lassen sich viel einfacher gestalten als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und die {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für eine komplexe Darstellung verwenden.

Wenn Ihre Buttons nicht für die Übermittlung von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, wodurch möglicherweise der aktuelle Zustand des Dokuments zerstört wird.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhalten auszulösen. Ein aktivierter Button kann programmierbare Aktionen durchführen, z. B. ein Element aus einer Liste entfernen, mithilfe von [JavaScript](/de/docs/Learn_web_development/Core/Scripting).

Standardmäßig stilisieren User-Agents Buttons als `display: flow-root`, was einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) einrichtet und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, sofern sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt wird, wird wie `display: inline-block` gestylt.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologien, wie Bildschirmleser, um sie beim Parsen des Dokuments zu verwenden und [einen Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zu generieren. Unterstützende Technologien verwenden den Barrierefreiheitsbaum, um auf die Seiteninhalte zuzugreifen und sie zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, setzen Sie Text in das `<button>`-Element, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist dies auf eine zugängliche Weise möglich, indem Sie [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) verwenden, um ihn visuell vom Bildschirm zu entfernen, aber trotzdem von unterstützender Technologie parsen zu lassen.

Es ist jedoch zu beachten, dass das Belassen des Textes auf dem Button sichtbar Personen helfen kann, die möglicherweise mit der Bedeutung des Icons nicht vertraut sind oder die Funktion des Buttons nicht verstehen. Dies ist besonders wichtig für Personen, die technisch nicht versiert sind oder unterschiedliche kulturelle Interpretationen des Icons haben, das der Button verwendet.

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Leitfaden 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Erklärung des Erfolgskriteriums 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine Fläche haben, die groß genug ist, um leicht aktiviert werden zu können. Dies hilft verschiedenen Personen, einschließlich Menschen mit motorischen Kontrollproblemen und Personen, die unpräzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Erfolgskriterium 2.5.5: Zielgröße verstehen | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Eine große Menge an interaktiven Inhalten — einschließlich Buttons — die in enger visueller Nähe zueinander platziert sind, sollte Raum zwischen ihnen haben. Diese Abstände sind vorteilhaft für Menschen, die motorische Kontrollprobleme haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Der Abstand kann durch CSS-Eigenschaften wie {{cssxref("margin")}} hergestellt werden.

- [Handzittern und das Riesenbuttonproblem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Statusinformationen

Um den Status eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Weitere Informationen finden Sie in den Informationen über die [ARIA-Buttonrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standardfokus-Ring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast aufweist**, damit Menschen mit Sehbehinderungen ihn wahrnehmen können und Personen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristik des User Agents bestimmt, dass der Fokus hervorgehoben werden sollte, etwa wenn ein `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Text- und Hintergrundfarben des Buttons mit dem Hintergrund verglichen wird, auf dem der Button platziert ist. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farb-Kontrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Button-Typen dazu führt, dass sie (standardmäßig) fokussiert werden, variiert je nach Browser und Betriebssystem. Die meisten Browser rücken einen geklickten Button in den Fokus, [aber Safari tut dies absichtlich nicht](https://webkit.org/b/22261#c68).

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
          >einreichbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiven Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, dann kann es
   auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
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
