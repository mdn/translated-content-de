---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: af550427ce6ddc8b22dae1f6c8a109ed4a5fbd91
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das vom Nutzer mit einer Maus, Tastatur, Fingerberührung, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Sobald es aktiviert wird, führt es eine Aktion aus, wie zum Beispiel das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der dem des Plattform-User Agents entspricht, auf dem sie ausgeführt werden. Sie können jedoch das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`

  - : Dieses Boolesche Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`

  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird, angegeben über das `commandfor`-Attribut. Mögliche Werte sind:

    - `"show-modal"`
      - : Der Button wird einen {{htmlelement("dialog")}} als Modal anzeigen. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem Dialog-Element.
    - `"close"`
      - : Der Button wird ein {{htmlelement("dialog")}} Element schließen. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem Dialog-Element.
    - `"request-close"`
      - : Der Button wird versuchen, ein {{htmlelement("dialog")}} Element zu schließen. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem Dialog-Element.
    - `"show-popover"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn versucht wird, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ausgeführt. Siehe [Popover-API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button wird ein sichtbares Popover verbergen. Wenn versucht wird, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover-API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wird ein Popover zwischen sichtbar und verborgen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es verborgen. Siehe [Popover-API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`. Dies ist das deklarative Äquivalent zum Aufrufen der Methode [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Minuszeichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehlskontrollbutton um, der das angegebene interaktive Element steuert; nimmt als Wert die ID des zu steuernden Elements. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolesche Attribut verhindert, dass der Benutzer mit dem Button interagieren kann: Er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das zugehörige {{HTMLElement("form")}}-Element (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird `<button>` mit seinem Vorfahren-`<form>`-Element assoziiert, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente überall im Dokument `<form>`s zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die Informationen verarbeitet, die durch den Button übermittelt werden. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formulareigentümers des Buttons. Tut nichts, wenn es keinen Formulareigentümer gibt.
- `formenctype`

  - : Wenn der Button ein Absende-Button ist (er ist innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt er an, wie die gesendeten Formulardaten kodiert werden. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Die Standardeinstellung, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributen auf `file` gesetzt zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübertragungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulareigentümers des Buttons.

- `formmethod`

  - : Wenn der Button ein Absende-Button ist (er ist innerhalb/assoziiert mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die verwendet wird, um das Formular zu übermitteln. Mögliche Werte:

    - `post`: Die Daten des Formulars sind im Hauptteil der HTTP-Anforderung enthalten, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z. B. Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}, wie bei Suchformularen.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er assoziiert ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formulareigentümers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Absende-Button ist, gibt dieses Boolesche Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formulareigentümers des Buttons.

    Dieses Attribut ist auch verfügbar bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit).

- `formtarget`

  - : Wenn der Button ein Absende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrichenes Schlüsselwort, das angibt, wo die Antwort auf die Formularübermittlung angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (einen Tab, ein Fenster oder ein {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formulareigentümers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Lade die Antwort im gleichen Browsing-Kontext wie den aktuellen. Dies ist die Standardeinstellung, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lade die Antwort in einem neuen, unbenannten Browsing-Kontext — normalerweise ein neuer Tab oder ein Fenster, abhängig von den Einstellungen des Benutzers.
    - `_parent`: Lade die Antwort im übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option ebenso wie `_self`.
    - `_top`: Lade die Antwort im top-level Browsing-Kontext (das ist derjenige Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn es keinen Elternteil hat, verhält sich diese Option ebenso wie `_self`.

- `name`

  - : Der Name des Buttons, als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt, wenn dieser Button verwendet wird, um das Formular zu übermitteln.

- `popovertarget`

  - : Wandelt ein `<button>`-Element in einen Popover-Kontrollbutton um; nimmt die ID des zu steuernden Popover-Elements als Wert. Das Herstellen einer Beziehung zwischen einem Popover und seinem auslösenden Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastaturfokusnavigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT)-Nutzer zugänglicher (siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erzeugt eine implizite Ankerreferenz zwischen den beiden, was es sehr einfach macht, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein Popover-Element ausgeführt werden soll, das von einem Steuer-`<button>` kontrolliert wird. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein sichtbares Popover verbergen. Wenn versucht wird, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn versucht wird, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen sichtbar und verborgen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die durch den Steuerbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist die Standardeinstellung, wenn das Attribut für Buttons, die mit einem `<form>` assoziiert sind, nicht spezifiziert ist, oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerungen auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Nutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und führt standardmäßig nichts aus, wenn er gedrückt wird. Er kann clientseitige Skripte haben, die auf die Ereignisse des Elements lauschen, die ausgelöst werden, wenn die Ereignisse eintreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons assoziiert ist, wenn es zusammen mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in Parametern übergeben, wenn das Formular mit diesem Button übermittelt wird.

## Hinweise

Ein Absende-Button mit gesetztem `formaction`-Attribut, aber ohne assoziiertes Formular tut nichts. Sie müssen einen Formular-Eigentümer setzen, entweder indem Sie es in ein `<form>` einbetten oder das Attribut `form` auf die id des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneres HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexes Rendering.

Wenn Ihre Buttons nicht dazu gedacht sind, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler so programmiert werden, dass sie Verhaltensweisen auslösen. Ein aktivierter Button kann programmierbare Aktionen mithilfe von [JavaScript](/de/docs/Learn_web_development/Core/Scripting) durchführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User Agents Buttons als `display: flow-root`, welches einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Items. Ein Button, der auf `display: inline` gesetzt ist, wird gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologie, wie Bildschirmleser, auf die sie zugreifen, wenn sie das Dokument analysieren und [einen Barrierefreiheiten-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologie verwendet dann den Barrierefreiheiten-Baum, um Inhalte der Seite zu navigieren und zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, platzieren Sie Text im `<button>`-Element, der kurz und präzise die Funktionalität des Buttons beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine zugängliche Methode, eine [Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, ihn aber weiterhin für unterstützende Technologie analysierbar zu halten.

Es sei jedoch angemerkt, dass das Sichtbarlassen des Textes des Buttons Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technologisch versiert sind oder unterschiedliche kulturelle Interpretationen des von dem Button verwendeten Icons haben könnten.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis von WCAG, Leitlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine genügend große Fläche haben, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine Mindestgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touchziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiver Inhalte – einschließlich Buttons – die visuell nah beieinander liegen, sollten durch Raum getrennt sein. Diese Abstände sind vorteilhaft für Menschen, die motorische Kontrollprobleme erleben und versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erzeugt werden.

- [Handtremor und das Riesenknopf-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokusring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast besitzt**, damit Menschen mit Sehschwächen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des Benutzer-Agents bestimmen, dass der Fokus hervorgehoben werden sollte, wie zum Beispiel, wenn ein `<button>` die Tastaturfokuss bekommt. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der Buttontext- und Hintergrundfarbenwerte mit dem Hintergrund verglichen wird, auf dem der Button platziert ist. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Buttontypen standardmäßig dazu führt, dass er den Fokus erhält, hängt von Browser und Betriebssystem ab. Die meisten Browser geben einem anklickenden Button Fokus, aber [Safari tut dies absichtlich nicht](https://webkit.org/b/22261#c68).

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
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >etikettierbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formular-assoziiertes</a
        >
        Element, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        jedoch darf es keinen
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, dann kann es auch
    null oder ein {{htmlelement("selectedcontent")}} Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
