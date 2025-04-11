---
title: "<button>: Das Schaltflächen-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Nach der Aktivierung führt es eine Aktion aus, wie das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil angezeigt, der der Plattform entspricht, auf der der {{Glossary("user_agent", "User-Agent")}} läuft. Sie können das Erscheinungsbild von Buttons jedoch mit [CSS](/de/docs/Web/CSS) ändern.

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

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`

  - : Dieses boolesche Attribut gibt an, dass der Button beim Laden der Seite den Eingabefokus haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die auf einem Element durchgeführt werden soll, das von einem Steuer-`<button>` gesteuert wird, der über das `commandfor`-Attribut spezifiziert wird. Mögliche Werte sind:

    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode auf dem Dialogelement.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode auf dem Dialogelement.
    - `"request-close"`
      - : Der Button fordert das Schließen eines {{htmlelement("dialog")}}-Elements an. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)-Methode auf dem Dialogelement.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API).
      - : Dies ist gleichwertig mit [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Methode auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API).
      - : Dies ist gleichwertig mit [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)-Methode auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button schaltet ein Popover zwischen Anzeigemodus und verstecktem Modus um. Wenn das Popover versteckt ist, wird es angezeigt; wenn es angezeigt wird, wird es versteckt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API).
      - : Dies ist gleichwertig mit [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor` {{experimental_inline}}
  - : Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
  - : Wandelt ein `<button>`-Element in einen Befehlsknopf um, der das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann weder gedrückt noch fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, das mit dem Button assoziiert werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` mit seinem übergeordneten `<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente an `<form>`s überall im Dokument zu binden, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Hat keine Wirkung, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`

  - : Wenn der Button ein Absenden-Button ist (er befindet sich in einem `<form>`, mit diesem assoziiert und hat nicht `type="button"`), gibt dieses Attribut an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen auf `file` gesetzt zu übermitteln.
    - `text/plain`: Als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Absenden-Button ist (er befindet sich in einem `<form>`, mit diesem assoziiert und hat nicht `type="button"`), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) zur Übermittlung des Formulars an. Mögliche Werte:

    - `post`: Die Daten des Formulars werden im Body der HTTP-Anfrage gesendet, wenn sie an den Server gesendet werden. Verwenden, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie bei Suchformularen.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er assoziiert ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Absenden-Button ist, spezifiziert dieses boolesche Attribut, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`

  - : Wenn der Button ein Absenden-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrichenes Schlüsselwort, das angibt, wo die Antwort auf das Absenden des Formulars angezeigt werden soll. Dies ist der `name` eines _Browsing-Kontexts_ (ein Tab, ein Fenster oder {{HTMLElement("iframe")}}) oder ein Schlüsselwort dafür. Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self`: Lädt die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext — normalerweise ein neuer Tab oder ein neues Fenster, je nach Browser-Einstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button verwendet wird, um das Formular zu übermitteln.

- `popovertarget`

  - : Wandelt ein `<button>`-Element in einen Popover-Steuerknopf um; nimmt die ID des zu steuernden Popover-Elements als Wert. Die Etablierung einer Beziehung zwischen einem Popover und dem aufrufenden Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Assistive-Technologie-Nutzer (AT) besser zugänglich (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Anker-Referenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem von einem Steuer-`<button>` kontrollierten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen Anzeigemodus und verstecktem Modus um. Wenn das Popover versteckt ist, wird es angezeigt; wenn es angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerknopf ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` assoziiert sind, nicht angegeben ist, oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut standardmäßig nichts, wenn er gedrückt wird. Er kann client-seitige Skripte haben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den mit dem `name` des Buttons assoziierten Wert, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird bei Übermittlung des Formulars unter Verwendung dieses Buttons als Parameter an den Server übergeben.

## Hinweise

Ein Absende-Button mit dem Attribut `formaction` gesetzt, aber ohne zugeordnetes Formular, tut nichts. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie ihn in ein `<form>`-Element einwickeln oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu gestalten als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Darstellungen verwenden.

Wenn Ihre Buttons nicht zur Übermittlung von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstören könnte.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mithilfe von [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie zum Beispiel das Entfernen eines Elements aus einer Liste.

Standardmäßig stilisieren Nutzeragenten Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als flexibler oder Gittercontainer definiert ist, verhalten sich die Kinder als flexible oder Gitterelemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbol-Buttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologie, wie zum Beispiel Screenreader, um darauf zuzugreifen, wenn sie das Dokument analysieren und [einen Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erzeugen. Unterstützende Technologie verwendet dann den Barrierefreiheitsbaum, um den Seiteninhalt zu navigieren und zu manipulieren.

Um einem Symbol-Button einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>`-Element ein, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine zugängliche Möglichkeit, dies zu tun, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber von unterstützender Technologie verarbeitbar zu halten.

Es ist jedoch erwähnenswert, dass das Belassen des Button-Textes sichtbar Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Symbols vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technologisch versiert sind oder möglicherweise unterschiedliche kulturelle Interpretationen des vom Button verwendeten Symbols haben.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis von WCAG, Leitfaden zu Richtlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgs-Kriteriums 4.1.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um einfach aktiviert werden zu können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Beeinträchtigungen und Menschen, die ungenaue Formen der Eingabe verwenden, wie einen Stylus oder Finger. Eine Mindestgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgs-Kriteriums 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Buttons —, die in enger visueller Nähe zueinander platziert sind, sollten Raum haben, der sie voneinander trennt. Diese Abstände sind vorteilhaft für Menschen, die motorische Beeinträchtigungen haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Weitere Informationen finden Sie im [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokus-Ring für Elemente, die im Fokus stehen, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokus-Zustand genügend Kontrast hat**, damit Menschen mit Sehbehinderungen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des Benutzeragenten bestimmen, dass der Fokus hervorgehoben werden soll, zum Beispiel, wenn ein `<button>` den Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für weitere Informationen.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraft der Text- und Hintergrundfarbenwerte des Buttons mit der Hintergrundfarbe, auf der der Button platziert wird, bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "fett")}} oder größer oder 24px oder größer.)

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden zu Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgs-Kriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf ein `<button>` oder {{HTMLElement("input")}}-Button-Typen (standardmäßig) dazu führt, dass es den Fokus erhält, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem angeklickten Button den Fokus, aber [Safari tut dies aufgrund eines Designs nicht](https://webkit.org/b/22261#c68).

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
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
          >absendbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elements</a> ist, dann kann es auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
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
