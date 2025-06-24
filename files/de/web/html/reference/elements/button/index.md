---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Sobald es aktiviert ist, führt es eine Aktion aus, wie zum Beispiel das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft. Sie können jedoch das Aussehen von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

  - : Dieses Boolean-Attribut gibt an, dass der Button beim Laden der Seite den [Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`

  - : Gibt die Aktion an, die an einem Element, das von einem Steuerungs-`<button>` kontrolliert wird, mit dem `commandfor`-Attribut ausgeführt werden soll. Mögliche Werte sind:
    - `"show-modal"`
      - : Der Button wird ein {{htmlelement("dialog")}} als modal anzeigen. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode am Dialogelement.
    - `"close"`
      - : Der Button wird ein {{htmlelement("dialog")}}-Element schließen. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode am Dialogelement.
    - `"request-close"`
      - : Der Button wird anfordern, dass ein {{htmlelement("dialog")}}-Element geschlossen wird. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose)-Methode am Dialogelement.
    - `"show-popover"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`. Dies ist ein deklaratives Äquivalent zum Aufruf der [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)-Methode am Popover-Element.
    - `"hide-popover"`
      - : Der Button wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`. Dies ist ein deklaratives Äquivalent zum Aufruf der [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)-Methode am Popover-Element.
    - `"toggle-popover"`
      - : Der Button wird ein Popover zwischen Anzeigen und Verbergen umschalten. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es ausgeblendet. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Details. Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`. Dies ist ein deklaratives Äquivalent zum Aufruf der [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methode am Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit einem doppelten Bindestrich (`--`) versehen sind. Tasten mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) am gesteuerten Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Steuerungsbutton um, der das angegebene interaktive Element steuert; übernimmt die ID des zu steuernden Elements als Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, das mit dem Button verbunden werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<button>` mit seinem übergeordneten `<form>`-Element, falls vorhanden, verknüpft.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente mit `<form>`s im gesamten Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element ersetzen.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Tut nichts, wenn es keinen Formularbesitzer gibt.
- `formenctype`

  - : Wenn der Button ein Submit-Button ist (er ist in einem `<form>` innerhalb/verbunden und hat nicht `type="button"`), gibt er an, wie die übermittelten Formulardaten codiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihrem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `file` zu setzen.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Submit-Button ist (er ist in einem `<form>` innerhalb/verbunden und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die verwendet wird, um das Formular zu übermitteln. Mögliche Werte:

    - `post`: Die Daten aus dem Formular werden im Rumpf der HTTP-Anfrage bei der Übertragung an den Server eingebunden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z.B. Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verbunden ist, und die Formulardaten nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Submit-Button ist, gibt dieses Boolean-Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`

  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor definierter Name oder standardisiertes, unterstrich-präfixiertes Schlüsselwort, das angibt, wo die Antwort vom Absenden des Formulars angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext — normalerweise ein neuer Tab oder ein Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten hat). Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button verwendet wird, um das Formular zu senden.

- `popovertarget`

  - : Wandelt ein `<button>`-Element in einen Popover-Steuerungsbutton um; übernimmt die ID des zu steuernden Popover-Elements als Wert. Die Herstellung einer Beziehung zwischen einem Popover und seinem Auslöser-Button mittels des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover beim Anzeigen in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge. Dies macht das Popover zugänglicher für Tastatur- und unterstützende Technologie (AT)-Nutzer (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Anker-Referenz zwischen den beiden, was es sehr bequem macht, Popover mit CSS-Anker-Positionierung relativ zu ihren Steuerelementen zu positionieren. Siehe [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details.

- `popovertargetaction`

  - : Gibt die Aktion an, die an einem von einem Steuerungs-`<button>` kontrollierten Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover ausblenden. Wenn Sie versuchen, ein bereits ausgeblendetes Popover auszublenden, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen Anzeigen und Verbergen umschalten. Wenn das Popover ausgeblendet ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es ausgeblendet. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungsbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verbunden sind, nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Ausgangswerte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut von Haus aus nichts, wenn er gedrückt wird. Er kann clientseitige Skripts haben, die auf die Ereignisse des Elements lauschen, die ausgelöst werden, wenn die Ereignisse eintreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verknüpft ist, wenn es zusammen mit den Formulardaten gesendet wird. Dieser Wert wird beim Absenden des Formulars mit diesem Button als Parameter an den Server übergeben.

## Hinweise

Ein Submit-Button mit dem Attribut `formaction` gesetzt, aber ohne ein zugehöriges Formular tut nichts. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie ihn in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht zum Übermitteln von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignis-Handler geskriptet werden, um Aktionen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie z.B. das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User-Agents Buttons als `display: flow-root`, welches einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein auf `display: inline` gesetzter Button wird so gestylt, als wäre der Wert `display: inline-block`.

## Barrierefreiheit

### Symbol-Buttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "accessible name")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologie, wie Bildschirmleser, die beim Parsen des Dokuments und Erstellen [eines Zugänglichkeitsbaumes](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zugreifen können. Unterstützende Technologie verwendet dann den Zugänglichkeitsbaum, um auf den Seiteninhalt zuzugreifen und ihn zu manipulieren.

Um einem Symbol-Button einen zugänglichen Namen zu geben, setzen Sie einen Text in das `<button>`-Element, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es eine zugängliche Möglichkeit, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, ihn aber von unterstützender Technologie weiterhin parsen zu lassen.

Es ist jedoch erwähnenswert, dass das Belassen des Textes auf dem Button sichtbar Menschen helfen kann, die möglicherweise mit der Bedeutung des Symbols nicht vertraut sind oder die Funktion des Buttons nicht verstehen. Dies ist besonders wichtig für Menschen, die nicht technikaffin sind oder unterschiedliche kulturelle Interpretationen des Symbols auf dem Button haben könnten.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis der WCAG, Richtlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um einfach aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die ungenaue Eingabeformen wie einen Stift oder Finger verwenden. Eine minimale Interaktionsgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixeln")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiver Inhalte — einschließlich Buttons — die in enger visueller Nähe zueinander platziert werden, sollten durch Leerraum getrennt sein. Dieser Abstand ist für Menschen von Vorteil, die motorische Kontrollprobleme haben und versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstand kann mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokusrahmen für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand ausreichend Kontrast** hat, damit Menschen mit Sehbehinderungen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}}-Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} erhält, nur wenn die Heuristiken des Benutzer-Agents bestimmen, dass der Fokus hervorgehoben werden sollte, wie wenn ein `<button>` über Tastaturfokus verfügt. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Farbkontrastverhältnis wird verglichen, indem die Helligkeit der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund verglichen wird, auf dem der Button platziert ist. Um den aktuellen [Richtlinien für Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text wird definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf ein `<button>` oder {{HTMLElement("input")}}-Button-Typen dazu führt, dass sie (standardmäßig) fokussiert werden, variiert je nach Browser und Betriebssystem. Die meisten Browser fokussieren einen gerade geklickten Button, aber [Safari nicht, absichtlich](https://webkit.org/b/22261#c68).

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
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >verschickbar</a
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
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahl-Elements</a> ist, darf es auch ein {{htmlelement("selectedcontent")}}-Element enthalten
.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch Endtag sind zwingend erforderlich.</td>
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
