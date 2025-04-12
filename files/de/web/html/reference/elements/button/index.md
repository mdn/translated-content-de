---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: ed864defbbe9d49dd8bb0e27f3346cc53cf67d13
---

{{HTMLSidebar}}

Das **`<button>`**-Element in [HTML](/de/docs/Web/HTML) ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, einem Finger, Sprachbefehl oder anderen unterstützenden Technologien aktiviert wird. Einmal aktiviert, führt es eine Aktion aus, wie zum Beispiel das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Schaltflächen in einem Stil präsentiert, der dem der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} ausgeführt wird, aber Sie können das Aussehen der Schaltflächen mithilfe von [CSS](/de/docs/Web/CSS) ändern.

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

  - : Dieses Boolean-Attribut gibt an, dass die Schaltfläche den Eingabe[fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann diesem Attribut besitzen.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einer Kontrolle `<button>` gesteuert wird, angegeben über das `commandfor`-Attribut. Mögliche Werte sind:

    - `"show-modal"`
      - : Die Schaltfläche zeigt ein {{htmlelement("dialog")}} als Modal an. Wenn das Dialogfenster bereits modal ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) des Dialogelements.
    - `"close"`
      - : Die Schaltfläche schließt ein {{htmlelement("dialog")}}-Element. Wenn das Dialogfenster bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) des Dialogelements.
    - `"request-close"`
      - : Die Schaltfläche fordert das Schließen eines {{htmlelement("dialog")}}-Elements an. Wenn das Dialogfenster bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufruf der Methode [`.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) des Dialogelements.
    - `"show-popover"`
      - : Die Schaltfläche zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"show"`. Das ist das deklarative Äquivalent zum Aufruf der Methode [`.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) des Popover-Elements.
    - `"hide-popover"`
      - : Die Schaltfläche verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"hide"`. Das ist das deklarative Äquivalent zum Aufruf der Methode [`.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) des Popover-Elements.
    - `"toggle-popover"`
      - : Die Schaltfläche wechselt ein Popover zwischen angezeigt und verborgen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht [`popovertargetaction`](#popovertargetaction) mit dem Wert `"toggle"`. Das ist das deklarative Äquivalent zum Aufruf der Methode [`.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) des Popover-Elements.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Schaltflächen mit einem benutzerdefinierten Wert lösen ein [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor` {{experimental_inline}}
  - : Wandelt ein `<button>`-Element in eine Steuerknopfschaltfläche um, die das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert an. Das ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass Benutzer mit der Schaltfläche interagieren: Sie kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}}-Element, mit dem die Schaltfläche verknüpft werden soll (ihr _Formulardesigner_). Der Wert dieses Attributs muss die `id` eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird die `<button>` mit ihrem Vorfahr`<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente mit `<form>`-Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die von der Schaltfläche übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers der Schaltfläche. Tut nichts, wenn es keinen Formularbesitzer gibt.
- `formenctype`

  - : Wenn die Schaltfläche eine Sende-Schaltfläche ist (sie ist in/mit einem `<form>` verknüpft und hat `type="button"` nicht gesetzt), gibt an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen auf `file` gesetzt zu übermitteln.
    - `text/plain`: Als Debugging-Hilfe angegeben; sollte nicht für die tatsächliche Formularübermittlung verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers der Schaltfläche.

- `formmethod`

  - : Wenn die Schaltfläche eine Sende-Schaltfläche ist (sie ist in/mit einem `<form>` verknüpft und hat `type="button"` nicht gesetzt), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, um das Formular zu senden. Mögliche Werte:

    - `post`: Die Daten des Formulars sind im Hauptteil der HTTP-Anfrage enthalten, wenn sie an den Server gesendet werden. Verwenden Sie diese Methode, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem sie verknüpft ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers der Schaltfläche.

- `formnovalidate`

  - : Wenn die Schaltfläche eine Sende-Schaltfläche ist, gibt dieses Boolean-Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers der Schaltfläche.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`

  - : Wenn die Schaltfläche eine Sende-Schaltfläche ist, handelt es sich bei diesem Attribut um einen vom Autor definierten Namen oder ein standardisiertes, unterstrichvorgestelltes Schlüsselwort, das angibt, wo die Antwort auf die Formularübermittlung angezeigt werden soll. Dies ist der `name` eines oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, ein Fenster oder ein {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers der Schaltfläche. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self`: Lädt die Antwort in den gleichen Browsing-Kontext wie der aktuelle. Dies ist der Standard, wenn das Attribut nicht spezifiziert ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext – normalerweise ein neuer Tab oder ein Fenster, abhängig von den Einstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.

- `name`

  - : Der Name der Schaltfläche, der als Paar mit dem `value` der Schaltfläche als Teil der Formulardaten übermittelt wird, wenn diese Schaltfläche zum Absenden des Formulars verwendet wird.

- `popovertarget`

  - : Wandelt ein `<button>`-Element in eine Popover-Steuerknopfschaltfläche um; nimmt die ID des zu steuernden Popover-Elements als Wert an. Die Herstellung einer Beziehung zwischen einem Popover und seiner Aufrufschaltfläche mithilfe des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Aufrufer, und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es gezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie (AT)-Benutzer zugänglicher (siehe auch [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, wodurch es sehr bequem ist, Popover relativ zu ihren Steuerelementen mithilfe von [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Weitere Informationen finden Sie in [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`

  - : Gibt die Aktion an, die auf einem von einem Steuerknopf `<button>` gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Die Schaltfläche verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Die Schaltfläche zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Die Schaltfläche wechselt ein Popover zwischen angezeigt und verborgen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die von der Steuerknopfschaltfläche ausgeführt wird.

- `type`

  - : Das Standardverhalten der Schaltfläche. Mögliche Werte sind:

    - `submit`: Die Schaltfläche sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Schaltflächen, die mit einem `<form>` verknüpft sind, nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Die Schaltfläche setzt alle Steuerelemente auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Die Schaltfläche hat kein Standardverhalten und tut nichts, wenn sie gedrückt wird. Es können clientseitige Skripte erstellt werden, um auf die Ereignisse des Elements zu hören, die ausgelöst werden, wenn die Ereignisse eintreten.

- `value`
  - : Definiert den Wert in Verbindung mit dem `name` der Schaltfläche, wenn sie mit den Formulardaten übermittelt wird. Dieser Wert wird beim Absenden des Formulars mit dieser Schaltfläche als Parameter an den Server übergeben.

## Anmerkungen

Eine Sende-Schaltfläche mit dem Attribut `formaction` gesetzt, aber ohne ein zugehöriges Formular, tut nichts. Sie müssen einen Formularbesitzer festlegen, entweder indem Sie es in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu gestalten als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudoelemente für eine komplexe Darstellung.

Wenn Ihre Schaltflächen nicht zum Absenden von Formulardaten an einen Server gedacht sind, sollten Sie sicherstellen, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten abzusenden und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Obwohl `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhalten auszulösen. Eine aktivierte Schaltfläche kann programmierbare Aktionen ausführen, indem sie [JavaScript](/de/docs/Learn_web_development/Core/Scripting) verwendet, wie z.B. das Entfernen eines Elements aus einer Liste.

Standardmäßig gestalten User-Agents Schaltflächen als `display: flow-root`, was einen neuen [Block-Formatierungs-Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder der Schaltfläche sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn die Schaltfläche als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Eine auf `display: inline` gesetzte Schaltfläche wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbolschaltflächen

Schaltflächen, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Screenreader, um darauf zuzugreifen, wenn sie das Dokument parsen und [einen Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erzeugen. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um die Inhalte der Seite zu navigieren und zu manipulieren.

Um einer Symbolschaltfläche einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>`-Element ein, das die Funktionalität der Schaltfläche prägnant beschreibt.

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

Wenn Sie den Text der Schaltfläche visuell ausblenden möchten, ist eine zugängliche Möglichkeit, dies zu tun, [eine Kombination aus CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um sie visuell vom Bildschirm zu entfernen, aber dennoch von unterstützenden Technologien parssbar zu halten.

Es ist jedoch erwähnenswert, dass das Belassen des Schaltflächentextes sichtbar Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Symbols vertraut sind oder die Funktion der Schaltfläche verstehen. Dies ist besonders wichtig für Menschen, die nicht technologisch versiert sind oder die möglicherweise unterschiedliche kulturelle Interpretationen des Symbols haben, das die Schaltfläche verwendet.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN WCAG-Erklärung, Richtlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Erklärung des Erfolgskriteriums 4.1.2 | W3C WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Schaltflächen sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft einer Vielzahl von Personen, einschließlich Menschen mit motorischen Problemen und Menschen, die nicht präzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixeln")}} wird empfohlen.

- [Erfolgskriterium 2.5.5: Zielgröße verstehen | W3C WCAG 2.1 verstehen](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt – einschließlich Schaltflächen – die in enger visueller Nähe zueinander platziert sind, sollten Abstand zwischen ihnen haben. Dieser Abstand ist vorteilhaft für Menschen, die motorische Probleme haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} geschaffen werden.

- [Handzittern und das Problem mit großen Schaltflächen - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand einer Schaltfläche zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Schaltflächen-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Schaltflächenstile

Es ist am besten, den standardmäßigen Fokusring für Elemente, die im Fokus stehen, nicht zu überschreiben. Wenn die Schaltflächenstile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand einen ausreichenden Kontrast hat**, sodass Personen mit Sehschwäche ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}}-Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die heuristischen Verfahren des Benutzer-Agents bestimmen, dass der Fokus hervorgehoben werden sollte, z. B. wenn eine `<button>`-Schaltfläche den Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Schaltflächentext- und Hintergrundfarbwerte mit dem Hintergrund, auf dem die Schaltfläche platziert ist, bestimmt. Um den aktuellen [Richtlinien für barrierefreien Web-Inhalt (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN WCAG-Erklärung, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung des Erfolgskriteriums 1.4.3 | W3C WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klick und Fokus

Ob das Klicken auf eine `<button>`- oder {{HTMLElement("input")}}-Schaltfläche sie (standardmäßig) fokussiert, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einer geklickten Schaltfläche den Fokus, aber [Safari tut dies nicht, absichtlich](https://webkit.org/b/22261#c68).

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
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >absendbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a
        >
        aber es darf kein
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > vorhanden sein. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, dann darf es auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der startende als auch der endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a
        >
        zulässt.
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
