---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 794e5772f8bd0dfbd8c33e3f2be29e572079663c
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Nach der Aktivierung führt es eine Aktion aus, wie z. B. das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft, aber Sie können das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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
  background-color: rgba(220, 0, 0, 1);
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow:
    inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.styled:hover {
  background-color: rgba(255, 0, 0, 1);
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`

  - : Dieses boolesche Attribut gibt an, dass der Button beim Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die bei einem Element ausgeführt werden soll, das von einem Steuerungsbutton `<button>` gesteuert wird, der über das Attribut `commandfor` angegeben wird. Die möglichen Werte sind:

    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem Dialog-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem Dialog-Element.
    - `"request-close"`
      - : Der Button fordert das Schließen eines {{htmlelement("dialog")}}-Elements an. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem Dialog-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover. Wenn versucht wird, ein bereits angezeigtes Popover erneut anzuzeigen, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn versucht wird, ein bereits verstecktes Popover erneut zu verbergen, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen Anzeigebetrieb und Versteckt. Wenn das Popover versteckt ist, wird es angezeigt; wenn es angezeigt wird, wird es versteckt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API).
      - : Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor` {{experimental_inline}}
  - : Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
  - : Verwandelt ein {{htmlelement("button")}}-Element in einen Kontrollbutton, der das angegebene interaktive Element steuert; nimmt die ID des zu kontrollierenden Elements als Wert.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Diese boolesche Eigenschaft verhindert, dass der Benutzer mit dem Button interagiert: er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem der Button assoziiert werden soll (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` mit seinem Vorfahren `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut erlaubt es, `<button>`-Elemente überall im Dokument `<form>`s zuzuordnen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formular-Eigentümers des Buttons. Macht nichts, wenn kein Formular-Eigentümer existiert.
- `formenctype`

  - : Wenn der Button ein Submit-Button ist (er befindet sich in einem `<form>` oder ist mit einem `<form>` assoziiert und hat nicht `type="button"`), spezifiziert, wie die Formulardaten kodiert werden, die übermittelt werden. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihrem [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf `file` gesetzt zu übermitteln.
    - `text/plain`: Als Debugging-Hilfe angegeben; sollte nicht für tatsächliche Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben wird, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formular-Eigentümers des Buttons.

- `formmethod`

  - : Wenn der Button ein Submit-Button ist (er befindet sich in einem `<form>` oder ist mit einem `<form>` assoziiert und hat nicht `type="button"`), spezifiziert dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Methods), um das Formular zu übermitteln. Mögliche Werte:

    - `post`: Die Daten des Formulars werden im Body der HTTP-Anfrage an den Server gesendet. Wird verwendet, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z. B. Login-Daten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}, wie bei Suchformularen.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er assoziiert ist, und die Formulardaten überhaupt nicht übermittelt.

    Wird dieses Attribut angegeben, überschreibt es das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formular-Eigentümers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Submit-Button ist, spezifiziert dieses boolesche Attribut, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formular-Eigentümers des Buttons.

    Dieses Attribut ist auch verfügbar für [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)-Elemente.

- `formtarget`

  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisierter, unterstrich-präfixierter Schlüsselwort, das angibt, wo die Antwort auf die Formulardaten-Übermittlung angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formular-Eigentümers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Lädt die Antwort im gleichen Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext – normalerweise ein neuer Tab oder ein neues Fenster, abhängig von den Browser-Einstellungen des Benutzers.
    - `_parent`: Lädt die Antwort im übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordnetes Element vorhanden ist, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort im obersten Browsing-Kontext (d. h. der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn kein übergeordnetes Element vorhanden ist, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Übermitteln des Formulars verwendet wird.

- `popovertarget`

  - : Verwandelt ein `<button>`-Element in einen Popover-Steuer-Button; nimmt die ID des zu steuernden Popover-Elements als Wert. Die Etablierung einer Beziehung zwischen einem Popover und seinem Auslöser-Button durch das `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite Beziehung über [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastatur-Fokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover besser zugänglich für Benutzer von Tastaturen und unterstützender Technologien (AT) (siehe auch [Popover Accessibility Features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erzeugt eine implizite Verankerungsreferenz zwischen den beiden, was es sehr praktisch macht, Popovers relativ zu ihren Steuerungselementen mithilfe von [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover anchor positioning](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem durch einen Steuerungsbutton `<button>` gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen Anzeigen und Verbergen. Wenn das Popover versteckt ist, wird es angezeigt; wenn es angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungsbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standardwert, wenn das Attribut für Buttons, die mit einem `<form>` assoziiert sind, nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten tendiert dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er standardmäßig gedrückt wird. Es können clientseitige Skripte eingerichtet werden, die auf die Ereignisse des Elements hören.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verbunden ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in Parametern gesendet, wenn das Formular mit diesem Button übermittelt wird.

## Hinweise

Ein Submit-Button mit gesetztem `formaction`-Attribut, aber ohne zugehöriges Formular, tut nichts. Sie müssen einen Formular-Eigentümer festlegen, entweder durch Einwickeln in ein `<form>` oder durch Setzen des `form`-Attributs auf die id des Formulars.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können HTML-Inhalt (wie `<i>`, `<br>` oder sogar `<img>`) einfügen und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Renderings verwenden.

Wenn Ihre Buttons nicht dazu bestimmt sind, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass deren `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Event-Handler gescriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, z. B. ein Element aus einer Liste entfernen.

Standardmäßig stylen User-Agenten Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert `display: inline-block` eingestellt.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien wie Bildschirmleser, um auf sie zuzugreifen, wenn sie das Dokument parsen und [einen Zugänglichkeitstree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologien verwenden dann den Zugänglichkeitstree, um den Seiteninhalt zu navigieren und zu bearbeiten.

Um einem Icon-Button einen zugänglichen Namen zu geben, fügen Sie im `<button>`-Element Text hinzu, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es ein zugänglicher Weg, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber für unterstützende Technologien parsbar zu halten.

Es lohnt sich jedoch zu beachten, dass der sichtbare Text des Buttons Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die technologisch nicht versiert sind oder die möglicherweise unterschiedliche kulturelle Interpretationen des vom Button verwendeten Icons haben.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Guideline 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine Fläche groß genug haben, um leicht aktiviert werden zu können. Dies hilft einer Vielzahl von Menschen, darunter Menschen mit motorischen Kontrollproblemen und Menschen, die nicht präzise Eingabeformen wie einen Stift oder Finger verwenden. Eine Mindestinteraktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktiven Inhalten - einschließlich Buttons - die in enger visueller Nähe zueinander platziert sind, sollten Abstand zwischen sich haben. Dieser Abstand ist von Vorteil für Menschen, die motorische Kontrollprobleme haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Der Abstand kann mit CSS-Eigenschaften wie {{cssxref("margin")}} erzeugt werden.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den standardmäßigen Fokusring für Elemente, die im Fokus stehen, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen, die unter Sehschwächen leiden, es wahrnehmen können und Menschen mit kognitiven Unterschieden es verstehen.

Die {{cssxref(":focus-visible")}}-Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, wenn die Heuristiken des Benutzer-Agents bestimmen, dass der Fokus hervorgehoben werden sollte, z. B. wenn ein `<button>` den Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für weitere Informationen.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraft der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um den aktuellen [Richtlinien zu den Web Content Accessibility (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typen ihn (standardmäßig) in den Fokus bringt, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button den Fokus, aber [Safari tut dies aus Design nicht](https://webkit.org/b/22261#c68).

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
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >aufgelistet</a
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
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        aber es darf kein
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
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
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
