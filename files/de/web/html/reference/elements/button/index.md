---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 5a8a34c6241673e6c2a210a45f0c540f5c5f2570
---

Das **`<button>`**-[HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer durch Maus, Tastatur, Finger, Sprachbefehl oder andere unterstützende Technologien aktiviert wird. Nach der Aktivierung führt es eine Aktion aus, wie z. B. das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft. Sie können das Erscheinungsbild der Buttons jedoch mit [CSS](/de/docs/Web/CSS) ändern.

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
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
  background-color: tomato;
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 0.2),
    rgb(0 0 0 / 0.2) 30%,
    transparent
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
  - : Dieses boolesche Attribut gibt an, dass der Button bei Seitenaufruf den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) erhalten soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die bei einem vom Steuerungselement `<button>` kontrollierten Element über das `commandfor`-Attribut ausgeführt werden soll. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist eine deklarative Entsprechung zum Aufrufen der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf das `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist eine deklarative Entsprechung zum Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf das `<dialog>`-Element.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis auf einem {{htmlelement("dialog")}}-Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis. Dies unterscheidet sich vom `close`-Befehl dadurch, dass Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das `cancel`-Ereignis aufrufen können, um zu verhindern, dass sich das `<dialog>` schließt. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist eine deklarative Entsprechung zum Aufrufen der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf das `<dialog>`-Element.
    - `"show-popover"`
      - : Der Button zeigt einen verborgenen Popover an. Wenn Sie versuchen, einen bereits angezeigten Popover erneut anzuzeigen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies ist gleichbedeutend mit dem Setzen eines Werts von `show` für das Attribut [`popovertargetaction`](#popovertargetaction) und bietet auch eine deklarative Entsprechung zum Aufrufen der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf das Popover-Element.
    - `"hide-popover"`
      - : Der Button versteckt einen angezeigten Popover. Wenn Sie versuchen, einen bereits verborgenen Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies ist gleichbedeutend mit dem Setzen eines Werts von `hide` für das Attribut [`popovertargetaction`](#popovertargetaction) und bietet auch eine deklarative Entsprechung zum Aufrufen der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf das Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt einen Popover zwischen angezeigt und verborgen. Wenn der Popover verborgen ist, wird er angezeigt; wenn der Popover angezeigt wird, wird er verborgen. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies ist gleichbedeutend mit dem Setzen eines Werts von `toggle` für das Attribut [`popovertargetaction`](#popovertargetaction) und bietet auch eine deklarative Entsprechung zum Aufrufen der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf das Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem steuernden Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehls-Button um, der ein bestimmtes interaktives Element durch den im Attribut [`command`](#command) des Buttons angegebenen Befehl steuert. Das `commandfor`-Attribut nimmt die ID des zu steuernden Elements als Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, das dem Button zugeordnet werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>`-Elements im selben Dokument sein. (Falls dieses Attribut nicht gesetzt ist, wird der `<button>` seinem übergeordneten `<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Macht nichts, wenn es keinen Formularbesitzer gibt.
- `formenctype`
  - : Wenn der Button ein Submit-Button ist (er befindet sich innerhalb/ist mit einem `<form>` verbunden und hat nicht `type="button"`), gibt dies an, wie die Formulardaten kodiert werden, die übermittelt werden. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Die Standardeinstellung, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen, die auf `file` gesetzt sind, zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`
  - : Wenn der Button ein Submit-Button ist (er befindet sich innerhalb/ist mit einem `<form>` verbunden und hat nicht `type="button"`), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) zur Übermittlung des Formulars an. Mögliche Werte:
    - `post`: Die Daten des Formulars werden im Hauptteil der HTTP-Anfrage an den Server gesendet. Wird verwendet, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, z. B. Zugangsdaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angefügt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen")}} hat, wie bei Suchformularen.
    - `dialog`: Diese Methode gibt an, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verbunden ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Submit-Button ist, gibt dieses boolesche Attribut an, dass das Formular beim Absenden nicht [`validiert`](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)- und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, mit Unterstrich versehenes Schlüsselwort, das angibt, wo die Antwort auf das Übermitteln des Formulars angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lädt die Antwort im selben Browsing-Kontext wie der aktuelle. Dies ist die Standardoption, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext — normalerweise ein neuer Tab oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (also den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option wie `_self`.

- `name`
  - : Der Name des Buttons, der beim Absenden des Formulars als Paar zusammen mit dem `value` des Buttons übermittelt wird.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in einen Popover-Steuerungs-Button um; nimmt die ID des Popover-Elements an, das gesteuert werden soll. Das Herstellen einer Beziehung zwischen einem Popover und seinem Auslöser-Button mit dem `popovertarget`-Attribut hat zwei weitere nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und ordnet das Popover beim Anzeigen logisch in die Tastaturfokus-Navigationsreihenfolge ein. Dies macht das Popover für Benutzer von Tastatur und unterstützenden Technologien (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitseigenschaften](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Anker-Referenz zwischen beiden, wodurch es sehr praktisch ist, Popovers relativ zu ihren Steuerungen mit [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details.

- `popovertargetaction`
  - : Gibt die Aktion an, die bei einem durch ein Steuerungselement `<button>` kontrollierten Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button versteckt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover erneut anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen angezeigt und verborgen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die durch den Steuerungs-Button ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist die Standardoption, wenn das Attribut für Buttons, die mit einem `<form>` verbunden sind, nicht angegeben ist oder wenn das Attribut ein leerer oder ungültiger Wert ist.
    - `reset`: Der Button setzt alle Steuerungen auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten kann Benutzer verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er gedrückt wird. Es können clientseitige Skripts erstellt werden, die auf die Ereignisse des Elements hören, die beim Auftreten der Ereignisse ausgelöst werden.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird beim Absenden des Formulars mit diesem Button in Parametern an den Server übergeben.

## Hinweise

Ein Submit-Button mit dem Attribut `formaction` gesetzt, aber ohne zugeordnetes Formular, tut nichts. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie es in ein `<form>` einfügen oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente lassen sich viel einfacher stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und die Pseudoelemente {{Cssxref("::after")}} und {{Cssxref("::before")}} für eine komplexe Darstellung verwenden.

Wenn Ihre Buttons nicht dazu gedacht sind, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstören könnte.

Während `<button type="button">` kein Standardverhalten hat, können Ereignis-Handler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User-Agents Buttons als `display: flow-root`, was einen neuen [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder wie Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als ob der Wert auf `display: inline-block` gesetzt wäre.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon darstellen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologien, wie Bildschirmlesegeräte, um beim Parsen des Dokuments einen [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zu erzeugen. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um auf Seiteninhalte zuzugreifen und diese zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, fügen Sie Text im `<button>`-Element ein, der die Funktionalität des Buttons knapp beschreibt.

#### Beispiele

```html
<button name="favorite">
  <svg fill="black" viewBox="0 0 42 42">
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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es eine zugängliche Methode, eine [Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber ihn für unterstützende Technologien weiterhin parsierbar zu machen.

Allerdings ist es wichtig zu beachten, dass das Lassen des Button-Textes sichtbar Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technisch versiert sind oder unterschiedliche kulturelle Interpretationen des vom Button verwendeten Icons haben können.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 4.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft einer Vielzahl von Menschen, einschließlich Personen mit motorischen Kontrollproblemen und Personen, die ungenaue Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiver Inhalte — einschließlich Buttons —, die in enger visueller Nähe zueinander platziert sind, sollten einen Abstand zwischen sich haben. Diese Platzierung ist vorteilhaft für Menschen, die motorische Kontrollprobleme haben, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handtremor und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Statusinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Weitere Informationen finden Sie in den Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standardfokus-Ring für Elemente, die im Fokus stehen, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokusszustand genügend Kontrast hat**, damit Menschen mit Sehschwäche ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}}-Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, wenn die Algorithmen des Benutzer-Agents bestimmen, dass der Fokus hervorgehoben werden sollte, z. B. wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für weitere Informationen.

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtdichte der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund verglichen wird, auf dem der Button platziert ist. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für Großtext erforderlich. (Großtext wird als 18,66px und {{cssxref("font-weight", "bold")}} oder größer oder 24px oder größer definiert.)

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typen dazu führt, dass dieser (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem angeklickten Button den Fokus, aber [Safari tut dies nicht, aus Designgründen](https://webkit.org/b/22261#c68).

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a
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
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiert</a
        >
        Element, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        aber es darf kein
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        > vorhanden sein. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Selektorelements</a> ist, dann darf es auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
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
