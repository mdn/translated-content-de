---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML) Element ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Nach der Aktivierung führt es eine Aktion aus, wie das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Schaltflächen in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} ausgeführt wird. Sie können jedoch das Erscheinungsbild der Schaltflächen mit [CSS](/de/docs/Web/CSS) ändern.

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

  - : Dieses boolesche Attribut gibt an, dass die Schaltfläche den Eingabefokus erhalten soll, wenn die Seite lädt. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einer Steuerungsschaltfläche `<button>` kontrolliert wird und über das `commandfor`-Attribut spezifiziert wird. Mögliche Werte sind:

    - `"show-modal"`
      - : Die Schaltfläche zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt.
    - `"close"`
      - : Die Schaltfläche schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
    - `"show-popover"`
      - : Die Schaltfläche zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Informationen.
    - `"hide-popover"`
      - : Die Schaltfläche verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Informationen.
    - `"toggle-popover"`
      - : Die Schaltfläche wechselt ein Popover zwischen angezeigt und verborgen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Informationen.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Schaltflächen mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem kontrollierten Element aus.

- `commandfor` {{experimental_inline}}
  - : Wandelt ein {{htmlelement("button")}}-Element in eine Schaltfläche um, die das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert an.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit der Schaltfläche interagiert: Sie kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, das mit der Schaltfläche assoziiert werden soll (ihr _Formulareigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird die `<button>` mit ihrem Vorfahr-`<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahr-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die von der Schaltfläche übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulareigentümers der Schaltfläche. Hat keine Wirkung, wenn kein Formulareigentümer existiert.
- `formenctype`

  - : Wenn die Schaltfläche eine Absende-Schaltfläche ist (sie befindet sich in einem `<form>` oder ist damit assoziiert und hat nicht `type="button"`), gibt sie an, wie die gesendeten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Element/input#type)-Attributen auf `file` gesetzt zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für die tatsächliche Formularübermittlung verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulareigentümers der Schaltfläche.

- `formmethod`

  - : Wenn die Schaltfläche eine Absende-Schaltfläche ist (sie befindet sich in einem `<form>` oder ist damit assoziiert und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Methods) an, die zum Senden des Formulars verwendet wird. Mögliche Werte:

    - `post`: Die Daten aus dem Formular sind im Hauptteil der HTTP-Anfrage enthalten, wenn sie an den Server gesendet werden. Verwenden Sie diese Methode, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z.B. Anmeldeinformationen.
    - `get`: Die Formulardaten werden der `action`-URL des Formulars mit einem `?` als Trennzeichen angehängt, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Seiteneffekte hat")}}, wie z.B. Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass die Schaltfläche den [dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem sie verknüpft ist und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulareigentümers der Schaltfläche.

- `formnovalidate`

  - : Wenn die Schaltfläche eine Absende-Schaltfläche ist, gibt dieses boolesche Attribut an, dass das Formular beim Übermitteln nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulareigentümers der Schaltfläche.

    Dieses Attribut ist auch bei den Elementen [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) verfügbar.

- `formtarget`

  - : Wenn die Schaltfläche eine Absende-Schaltfläche ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrich-sprefixiertes Schlüsselwort, das angibt, wo die Antwort vom Übermitteln des Formulars angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulareigentümers der Schaltfläche. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einem neuen unbenannten Browsing-Kontext — normalerweise ein neuer Tab oder ein Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das ist der Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Elternteil hat). Wenn es keinen gibt, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name der Schaltfläche, der als Paar mit dem `value` der Schaltfläche als Teil der Formulardaten übermittelt wird, wenn diese Schaltfläche zum Übermitteln des Formulars verwendet wird.

- `popovertarget`

  - : Wandelt ein `<button>`-Element in eine Popover-Steuerungsschaltfläche um; nimmt die ID des Popover-Elements, das gesteuert werden soll, als seinen Wert an. Weitere Einzelheiten finden Sie auf der [Popover API](/de/docs/Web/API/Popover_API) Startseite.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf einem Popover-Element ausgeführt werden soll, das von einer Steuerungsschaltfläche `<button>` kontrolliert wird. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Die Schaltfläche wechselt ein Popover zwischen ein- und ausgeblendet. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerschaltfläche ausgeführt wird.

- `type`

  - : Das Standardverhalten der Schaltfläche. Mögliche Werte sind:

    - `submit`: Die Schaltfläche übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut nicht für Schaltflächen, die mit einem `<form>` assoziiert sind, angegeben ist, oder wenn das Attribut ein leerer oder ungültiger Wert ist.
    - `reset`: Die Schaltfläche setzt alle Steuerungen auf ihre ursprünglichen Werte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, die Benutzer zu verärgern.)
    - `button`: Die Schaltfläche hat kein Standardverhalten und tut nichts, wenn sie standardmäßig gedrückt wird. Es können clientseitige Skripte hinzugefügt werden, um auf die Ereignisse des Elements zu hören, die ausgelöst werden, wenn die Ereignisse eintreten.

- `value`
  - : Definiert den Wert, der mit dem `name` der Schaltfläche verbunden ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in den Parametern gesendet, wenn das Formular mit dieser Schaltfläche übermittelt wird.

## Hinweise

Eine Absende-Schaltfläche mit dem Attribut `formaction` gesetzt, aber ohne ein zugeordnetes Formular tut nichts. Sie müssen einen Formulareigentümer festlegen, entweder indem Sie sie in einem `<form>` umschließen oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu gestalten als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und {{Cssxref("::after")}}- und {{Cssxref("::before")}}-Pseudoelemente für komplexe Darstellungen verwenden.

Wenn Ihre Schaltflächen nicht zum Übermitteln von Formulardaten an einen Server vorgesehen sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Event-Handler geskriptet werden, um Verhalten auszulösen. Eine aktivierte Schaltfläche kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) auszuführen, wie z.B. ein Element aus einer Liste zu entfernen.

Standardmäßig gestalten User Agents Schaltflächen als `display: flow-root`, was einen neuen [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder der Schaltfläche sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn die Schaltfläche als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Eine Schaltfläche, die auf `display: inline` gesetzt ist, wird so gestaltet, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbolschaltflächen

Schaltflächen, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für assistive Technologien, wie Bildschirmleser, die auf das Dokument zugreifen, um einen [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zu generieren. Assistive Technologien verwenden dann den Barrierefreiheitsbaum, um den Seiteninhalt zu navigieren und zu manipulieren.

Um einer Symbolschaltfläche einen zugänglichen Namen zu geben, fügen Sie Text im `<button>` Element ein, der die Funktionalität der Schaltfläche prägnant beschreibt.

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

Wenn Sie möchten, dass der Text der Schaltfläche visuell verborgen wird, ist eine zugängliche Möglichkeit, eine Kombination von [CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber für assistive Technologien weiterhin parsbar zu lassen.

Es sei jedoch darauf hingewiesen, dass das sichtbare Belassen des Schaltflächentextes Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Symbols vertraut sind oder die Funktion der Schaltfläche verstehen. Dies ist besonders wichtig für Menschen, die nicht technisch versiert sind oder die verschiedene kulturelle Interpretationen des von der Schaltfläche verwendeten Symbols haben.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis WCAG, Richtlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis Erfolgskriterium 4.1.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Schaltflächen sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Steuerproblemen und Menschen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixeln")}} wird empfohlen.

- [Verständnis Erfolgskriterium 2.5.5: Zielgröße | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt – einschließlich Schaltflächen – die visuell in enger Nähe zueinander platziert sind, sollten Platz zwischen sich haben. Diese Zwischenräume sind vorteilhaft für Menschen mit motorischen Steuerproblemen, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Zwischenräume können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesenknopf-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand einer Schaltfläche zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Mehr Informationen finden Sie in der Info über die [ARIA-Buttonrolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role).

### Schaltflächenstile

Es ist am besten, den Standard-Fokusring für Elemente, die im Fokus sind, nicht zu überschreiben. Wenn die Schaltflächenstile überschrieben werden, ist es wichtig, sicherzustellen, dass der Fokuszustand genug Kontrast hat, damit Menschen mit Sehbehinderungen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} nur hat, wenn die Heuristik des User Agents bestimmt, dass der Fokus hervorgehoben werden sollte, wie zum Beispiel wenn eine `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtdichte der Schaltflächentext- und Hintergrundfarbwerte mit dem Hintergrund verglichen wird, auf dem die Schaltfläche platziert ist. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbk-Kontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis Erfolgskriterium 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf eine `<button>` oder {{HTMLElement("input")}}-Schaltfläche dazu führt, dass sie (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einer angeklickten Schaltfläche den Fokus, aber [Safari tut dies absichtlich nicht](https://webkit.org/b/22261#c68).

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhalts-Kategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satz-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#interactive_content">Interaktiver Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed">gelistet</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable">etikettierbar</a>,
        und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable">übermittelbar</a>,
        <a href="/de/docs/Web/HTML/Content_categories#form-associated_content">formular-assoziiertes</a>
        Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satz-Inhalt</a>
        aber es darf kein
        <a href="/de/docs/Web/HTML/Content_categories#interactive_content">interaktiver Inhalt</a>
        vorhanden sein.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satz-Inhalt</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
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
