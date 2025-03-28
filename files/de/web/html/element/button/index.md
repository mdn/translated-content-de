---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer durch Maus, Tastatur, Finger, Sprachbefehl oder andere unterstützende Technologien aktiviert wird. Einmal aktiviert, führt es eine Aktion aus, wie das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User Agent")}} läuft, aber Sie können das Erscheinungsbild von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`

  - : Dieses Boolean-Attribut gibt an, dass der Button beim Laden der Seite den Eingabefokus haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Steuerungsbutton `<button>` kontrolliert wird, angegeben über das Attribut `commandfor`. Mögliche Werte sind:

    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem Dialogelement.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem Dialogelement.
    - `"request-close"`
      - : Der Button wird anfragen, ein {{htmlelement("dialog")}}-Element zu schließen. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der Methode [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem Dialogelement.
    - `"show-popover"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt. Weitere Informationen finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API).
      - : Dies ist äquivalent zu [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der Methode [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion durchgeführt. Weitere Informationen finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API).
      - : Dies ist äquivalent zu [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der Methode [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wird ein Popover zwischen anzeigen und verbergen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Weitere Informationen finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API).
      - : Dies ist äquivalent zu [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`.
      - : Dies ist ein deklaratives Äquivalent zum Aufrufen der Methode [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert werden [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem kontrollierten Element auslösen.

- `commandfor` {{experimental_inline}}
  - : Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
  - : Verwandelt ein `<button>`-Element in einen Befehlsbutton, der das gegebene interaktive Element kontrolliert; als Wert nimmt es die ID des zu kontrollierenden Elements.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, dem der Button zugeordnet werden soll (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` mit seinem Vorfahren `<form>`-Element, falls vorhanden, assoziiert.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die Informationen bearbeitet, die vom Button übermittelt werden. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formular-Eigentümers des Buttons. Tut nichts, wenn es keinen Formular-Eigentümer gibt.
- `formenctype`

  - : Wenn der Button ein Senden-Button ist (er ist innerhalb/mit einem `<form>` assoziiert und hat nicht `type="button"`), gibt es an, wie die Formular-Daten, die gesendet werden, kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Element/input#type)-Attributen auf `file` gesetzt einzusenden.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formular-Einreichungen genutzt werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formular-Eigentümers des Buttons.

- `formmethod`

  - : Wenn der Button ein Senden-Button ist (er ist innerhalb/mit einem `<form>` assoziiert und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, mit der das Formular eingesendet wird. Mögliche Werte:

    - `post`: Die Daten aus dem Formular sind im Körper der HTTP-Anfrage enthalten, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er verbunden ist, und keine Formulardaten überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formular-Eigentümers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Senden-Button ist, gibt dieses Boolean-Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formular-Eigentümers des Buttons.

    Dieses Attribut ist auch verfügbar bei [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)-Elementen.

- `formtarget`

  - : Wenn der Button ein Senden-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrich-präfixiertes Schlüsselwort, das angibt, wo die Antwort vom Übermitteln des Formulars angezeigt werden soll. Dies ist der `name` eines _Browsing-Kontextes_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}) oder ein Schlüsselwort dafür. Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formular-Eigentümers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self`: Laden Sie die Antwort im selben Browsing-Kontext, wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden Sie die Antwort in einen neuen nicht benannten Browsing-Kontext — normalerweise ein neuer Tab oder ein neues Fenster, abhängig von den Browser-Einstellungen des Benutzers.
    - `_parent`: Laden Sie die Antwort in den Elterlichen Browsing-Kontext des aktuellen. Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahre des aktuellen ist, und keine Eltern hat). Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.

- `name`

  - : Der Name des Buttons, der bei der Nutzung dieses Buttons zum Absenden des Formulars als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird.

- `popovertarget`

  - : Wandelt ein `<button>`-Element in einen Popover-Steuerungsbutton um; nimmt die ID des zu kontrollierenden Popover-Elements als seinen Wert. Die Herstellung einer Beziehung zwischen einem Popover und seinem auslösenden Button mithilfe des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover bei Anzeige in einer logischen Position in der Tastaturnavigationsreihenfolge. Dies macht das Popover für Tastatur- und unterstützende Technologie-Nutzer (siehe auch [Popover-Accessibilitétsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)) zugänglicher.
    - Der Browser erstellt eine implizite Anker-Referenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mithilfe der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem von einem Steuerungsbutton `<button>` kontrollierten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion durchgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion durchgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen anzeigen und verbergen umschalten. Wenn das Popover verborgen ist, wird es gezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` nicht angegeben ist, ist `"toggle"` die Standardaktion, die vom Steuerungsbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut nicht für Buttons angegeben ist, die mit einem `<form>` verbunden sind, oder wenn das Attribut ein leerer oder ungültiger Wert ist.
    - `reset`: Der Button setzt alle Steuerungen auf ihre ursprünglichen Werte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu nerven.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird, sofern er nicht entsprechend programmiert wurde. Er kann clientseitige Skripte haben, die auf die Ereignisse des Elements lauschen, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons assoziiert ist, wenn er mit den Formulardaten gesendet wird. Dieser Wert wird an den Server in Parametern übergeben, wenn das Formular mit diesem Button gesendet wird.

## Hinweise

Ein Senden-Button mit gesetztem Attribut `formaction`, aber ohne ein zugehöriges Formular, tut nichts. Sie müssen einen Formulareigentümer angeben, entweder indem Sie ihn in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt (denken Sie an `<i>`, `<br>` oder sogar `<img>`) hinzufügen und {{Cssxref("::after")}}- und {{Cssxref("::before")}}-Pseudo-Elemente für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht dazu gedacht sind, Formulardaten an einen Server zu senden, stellen Sie sicher, dass das `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu senden und die (nicht existierende) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstören könnte.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhalten auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen Benutzeragenten Buttons als `display: flow-root`, das einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird gestylt, als ob der Wert auf `display: inline-block` gesetzt wäre.

## Zugänglichkeit

### Icon Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen stellen Informationen für unterstützende Technologien bereit, wie Bildschirmlesegeräte, um zuzugreifen, wenn sie das Dokument analysieren und [einen Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erzeugen. Unterstützende Technologien nutzen dann den Zugänglichkeitsbaum, um sich durch den Seiteninhalt zu navigieren und diesen zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, geben Sie Text im `<button>`-Element ein, der die Funktionalität des Buttons treffend beschreibt.

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

Wenn Sie den Text des Buttons visuell verbergen möchten, ist ein zugänglicher Weg, dies zu tun, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber ihn für unterstützende Technologien parsierbar zu halten.

Es ist jedoch erwähnenswert, dass es hilfreich sein kann, den Button-Text sichtbar zu lassen, um Personen zu unterstützen, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons nicht verstehen. Dies ist besonders wichtig für Personen, die nicht technisch versiert sind oder die möglicherweise unterschiedliche kulturelle Interpretationen des von einem Button verwendeten Icons haben.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis von WCAG, Richtlinien 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft verschiedenen Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Formen der Eingabe wie einen Stift oder Finger verwenden. Eine Mindestgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt – einschließlich Buttons – sollten in enger visueller Nähe zueinander Raum voneinander haben. Dieser Abstand ist vorteilhaft für Menschen, die motorische Kontrollprobleme erleben und versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Der Abstand kann durch CSS-Eigenschaften wie {{cssxref("margin")}} erzeugt werden.

- [Handzittern und das Problem der riesigen Buttons - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokus-Ring für Elemente, die im Fokus stehen, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, sicherzustellen, dass der Fokuszustand genügend Kontrast hat, damit Menschen mit Sehbehinderungen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann genutzt werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des Benutzeragents bestimmen, dass der Fokus hervorgehoben werden sollte, wie wenn ein `<button>` den Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für weitere Informationen.

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund, auf dem der Button platziert ist, verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Button-Typen ihn (standardmäßig) in den Fokus versetzt, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button den Fokus, aber [Safari tut dies aus Designgründen nicht](https://webkit.org/b/22261#c68).

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#labelable"
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#submittable"
          >einreichbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formular-assoziiertes</a
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
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiven Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elements</a> ist, darf es auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
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
