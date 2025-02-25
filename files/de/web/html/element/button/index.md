---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{HTMLSidebar}}

Das **`<button>`**-[HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Nach der Aktivierung führt es dann eine Aktion aus, wie das Absenden eines [Forms](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "Benutzer-Agent")}} läuft, aber Sie können das Erscheinungsbild von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

  - : Dieses Boolean-Attribut gibt an, dass der Button beim Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command` {{experimental_inline}}

  - : Gibt die Aktion an, die auf ein durch einen Steuerungs-`<button>` gesteuertes Element ausgeführt werden soll, angegeben durch das `commandfor`-Attribut. Die möglichen Werte sind:

    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Einzelheiten.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Einzelheiten.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen Anzeige und Verbergen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Siehe [Popover API](/de/docs/Web/API/Popover_API) für weitere Einzelheiten.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor` {{experimental_inline}}
  - : Wandelt ein {{htmlelement("button")}}-Element in einen Button um, der das angegebene interaktive Element steuert; nimmt die ID des zu steuernden Elements als Wert.
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann weder gedrückt noch fokussiert werden.
- `form`

  - : Das dem Button zuzuordnende {{HTMLElement("form")}}-Element (dessen _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird der `<button>` seinem übergeordneten `<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut ermöglicht es, `<button>`-Elemente `<form>`-Elementen überall im Dokument zuzuordnen, und zwar nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers des Buttons. Tut nichts, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`

  - : Falls der Button ein Absende-Button ist (er befindet sich innerhalb/eines `<form>` zugeordnet und hat nicht `type="button"`), wird angegeben, wie die beim Absenden übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standard, falls das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihren [`type`](/de/docs/Web/HTML/Element/input#type)-Attributen auf `file` zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Falls der Button ein Absende-Button ist (er befindet sich innerhalb/einem `<form>` zugeordnet und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Methods) an, die zum Absenden des Formulars verwendet wird. Mögliche Werte:

    - `post`: Die Daten aus dem Formular werden in den Body der HTTP-Anfrage eingeschlossen, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldeinformationen.
    - `get`: Die Formulardaten werden hinter die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Seiteneffekte hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Falls der Button ein Absende-Button ist, gibt dieses Boolean-Attribut an, dass das Formular beim Absenden nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf den Elementen [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) verfügbar.

- `formtarget`

  - : Falls der Button ein Absende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisierter, unterstrichpräfixierter Schlüssel, der angibt, wo die Antwort auf das Absenden des Formulars angezeigt werden soll. Dies ist der `name` eines, oder Schlüssel für einen, _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Laden der Antwort in denselben Browsing-Kontext wie der aktuelle. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden der Antwort in einen neuen, unbenannten Browsing-Kontext – in der Regel ein neuer Tab oder ein neues Fenster, je nach den Einstellungen des Benutzers.
    - `_parent`: Laden der Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option wie `_self`.
    - `_top`: Laden der Antwort in den obersten Browsing-Kontext (also den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button verwendet wird, um das Formular abzusenden.

- `popovertarget`

  - : Wandelt ein `<button>`-Element in einen Popover-Steuerungsbutton um; nimmt die ID des zu steuernden Popover-Elements als Wert. Das Herstellen einer Beziehung zwischen einem Popover und seinem auslösenden Button mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:

    - Der Browser erstellt eine implizite Beziehung zwischen [`aria-details`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Reihenfolge der Tastaturfokus-Navigation, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie- (AT-)Benutzer besser zugänglich (siehe auch [Popover-Accessibility-Features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zu positionieren. Siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Einzelheiten.

- `popovertargetaction`

  - : Gibt die Aktion an, die auf ein durch einen Steuerungs-`<button>` gesteuertes Popover-Element ausgeführt werden soll. Mögliche Werte sind:

    - `"hide"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verborgenes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button zeigt ein verborgenes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover zu zeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wechselt ein Popover zwischen Anzeige und Verbergen. Wenn das Popover verborgen ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es verborgen. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungsbutton ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verknüpft sind, nicht angegeben ist, oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut normalerweise nichts, wenn er gedrückt wird. Er kann clientseitige Skripte besitzen, die auf die Ereignisse des Elements lauschen und bei deren Eintreten ausgelöst werden.

- `value`
  - : Definiert den mit dem `name` des Buttons verknüpften Wert, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in Parametern gesendet, wenn das Formular mit diesem Button übermittelt wird.

## Anmerkungen

Ein Absende-Button mit einem gesetzten `formaction`-Attribut, aber ohne einem zugeordneten Formular tut nichts. Sie müssen einen Formularbesitzer setzen, entweder indem Sie es in ein `<form>` platzieren oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (wie `<i>`, `<br>`, oder sogar `<img>`), und {{Cssxref("::after")}}- und {{Cssxref("::before")}}-Pseudo-Elemente für komplexe Darstellungen verwenden.

Wenn Ihre Buttons nicht zum Absenden von Formulardaten an einen Server sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls wird versucht, Formulardaten abzusenden und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Obwohl `<button type="button">` kein Standardverhalten hat, können Skript-Ereignishandler aktiviert werden, um Verhalten auszulösen. Ein aktivierter Button kann programmierbare Aktionen mithilfe von [JavaScript](/de/docs/Learn_web_development/Core/Scripting) durchführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig gestalten Benutzer-Agenten Buttons als `display: flow-root`, wodurch ein neuer [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt wird und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert werden, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als ob der Wert auf `display: inline-block` gesetzt wäre.

## Barrierefreiheit

### Symbol-Buttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Bildschirmlesegeräte, um darauf zuzugreifen, während sie das Dokument analysieren und [einen Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erzeugen. Unterstützende Technologien verwenden dann den Zugänglichkeitsbaum, um die Seiteninhalte zu navigieren und zu manipulieren.

Um einem Symbol-Button einen zugänglichen Namen zu geben, legen Sie einen Text in das `<button>`-Element, der die Funktion des Buttons prägnant beschreibt.

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

Wenn Sie den Text eines Buttons visuell verbergen möchten, ist eine zugängliche Möglichkeit, dies zu tun, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber ihn weiterhin von unterstützenden Technologien analysierbar zu halten.

Allerdings ist es erwähnenswert, dass das sichtbare Belassen des Buttontextes Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Symbols vertraut sind oder den Zweck des Buttons verstehen. Dies ist besonders wichtig für Menschen, die nicht technologisch bewandert sind oder möglicherweise unterschiedliche kulturelle Interpretationen des Symbols haben, das der Button verwendet.

- [Was ist ein zugänglicher Name? | Die Paciello Gruppe](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verstehen von WCAG, Guideline 4.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verstehen des Erfolgskriteriums 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine Fläche haben, die groß genug ist, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die unpräzise Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixeln")}} wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktiven Inhalten – einschließlich Buttons – die nah beieinander platziert sind, sollten durch Abstand getrennt sein. Dieser Abstand ist hilfreich für Menschen, die motorische Kontrollprobleme erleben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role).

### Button-Stile

Es ist am besten, nicht den Standard-Fokusring für Elemente, die den Fokus haben, zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit Sehbehinderungen ihn wahrnehmen können, und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}}-Pseudo-Klasse kann verwendet werden, um einem Element, das {{cssxref(":focus")}} hat, nur dann Stile zuzuweisen, wenn die Heuristiken des Benutzer-Agenten bestimmen, dass der Fokus hervorgehoben werden sollte, wie wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible) für weitere Informationen.

Der Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Textfarbe und der Hintergrundfarbenwerte des Buttons im Vergleich zum Hintergrund, auf dem der Button platziert ist, verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verstehen von WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typen dazu führt, dass er (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button den Fokus, aber [Safari tut dies nicht, nach Design](https://webkit.org/b/22261#c68).

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
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >einreichbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formularassoziiertes</a
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
          >Interaktiven Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
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
      <th scope="row">DOM Schnittstelle</th>
      <td>[`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
