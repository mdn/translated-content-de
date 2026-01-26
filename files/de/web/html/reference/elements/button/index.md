---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

Das **`<button>`**-[HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Sobald es aktiviert ist, führt es eine Aktion aus, wie beispielsweise das Absenden eines [Forms](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "User-Agent")}} läuft, aber Sie können das Erscheinungsbild der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`
  - : Dieses boolesche Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem Element ausgeführt werden soll, das von einem Steuer-`<button>` gesteuert wird, das über das `commandfor`-Attribut angegeben ist. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modaldialog an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem `<dialog>`-Element.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis auf einem {{htmlelement("dialog")}}-Element aus, um den Browser darum zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis. Dies unterscheidet sich vom `close`-Befehl, indem Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das `cancel`-Ereignis aufrufen können, um zu verhindern, dass das `<dialog>` geschlossen wird. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem `<dialog>`-Element.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Wertes von `show` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button versteckt ein angezeigt Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Wertes von `hide` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button schaltet ein Popover zwischen angezeigt und versteckt um. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Setzen eines Wertes von `toggle` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert senden das [`CommandEvent`](/de/docs/Web/API/CommandEvent) an das gesteuerte Element.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehls-Button um, der ein bestimmtes interaktives Element steuert, indem er den im Button-Attribut [`command`](#command) angegebenen Befehl ausführt. Das `commandfor`-Attribut nimmt die ID des zu steuernden Elements als Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann weder gedrückt noch fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, mit dem der Button verknüpft werden soll (sein _Formularinhaber_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` mit seinem Vorfahren `<form>`-Element verbunden, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`-Elementen an beliebiger Stelle im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularinhabers des Buttons. Führt nichts aus, wenn kein Formularinhaber vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Submit-Button ist (es ist innerhalb/verknüpft mit einem `<form>` und hat nicht `type="button"`), gibt an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird zum Übermitteln von {{HTMLElement("input")}}-Elementen mit ihren [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributen verwendet, die auf `file` gesetzt sind.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularinhabers des Buttons.

- `formmethod`
  - : Wenn der Button ein Submit-Button ist (es ist innerhalb/verknüpft mit einem `<form>` und hat nicht `type="button"`), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die zum Übermitteln des Formulars verwendet wird. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im HTTP-Request-Body enthalten, wenn sie an den Server gesendet werden. Verwenden Sie diese, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie z.B. Anmeldeinformationen.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Seiteneffekte")}} hat, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularinhabers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Submit-Button ist, gibt dieses boolesche Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularinhabers des Buttons.

    Dieses Attribut ist auch bei [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein benutzerdefinierter Name oder ein standardisierter, unterstrichpräfigierter Schlüsselwort, das angibt, wo die Antwort vom Übermitteln des Formulars angezeigt werden soll. Dies ist der `name` eines _Browsing-Kontextes_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularinhabers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie der aktuelle. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext — üblicherweise ein neues Tab oder Fenster, abhängig von den Browser-Einstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den Eltern-Browsing-Kontext des aktuellen. Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Eltern hat). Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.

- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<button>`-Element als **Interessen-Auslöser**. Sein Wert ist die `id` eines Zielelements, das auf irgendeine Weise beeinflusst wird (normalerweise gezeigt oder versteckt), wenn Interesse an dem Auslöser-Element gezeigt oder verloren wird (z.B. durch Hoveren/Ent-Hovern oder Fokussieren/Unfokussieren). Weitere Details und Beispiele finden Sie unter [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers).

- `name`
  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Übermitteln des Formulars verwendet wird.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in einen Popover-Steuerbutton um; nimmt die ID des zu steuernden Popover-Elements als Wert. Durch das Etablieren einer Beziehung zwischen einem Popover und seinem Auslöser-Button mithilfe des `popovertarget`-Attributs ergeben sich zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)- und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Auslöser und platziert das Popover in einer logischen Position in der Tastatur-Fokus-Navigation, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und unterstützende Technologie-(AT)-Benutzer zugänglicher (siehe auch [Popover accessibility features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popovers relativ zu ihren Steuerelementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover anchor positioning](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem von einem Steuer-`<button>` gesteuerten Popover-Element ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button versteckt ein angezeigt Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button schaltet ein Popover zwischen angezeigt und versteckt um. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerbutton ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button sendet die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verknüpft sind, nicht angegeben ist oder wenn das Attribut leer oder ungültig ist.
    - `reset`: Der Button setzt alle Steuerungen auf ihre ursprünglichen Werte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut standardmäßig nichts, wenn er gedrückt wird. Er kann clientseitige Skripte haben, die auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons assoziiert ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird in den Parametern an den Server übermittelt, wenn das Formular mit diesem Button übermittelt wird.

## Anmerkungen

Ein Submit-Button mit dem Attribut `formaction`, aber ohne ein zugehöriges Formular, tut nichts. Sie müssen einen Formularinhaber festlegen, entweder indem Sie ihn in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können inneres HTML-Inhalte hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexe Darstellungen.

Wenn Ihre Buttons nicht für das Übermitteln von Formulardaten an einen Server gedacht sind, sollten Sie sicherstellen, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht existierende) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie z.B. das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User-Agents Buttons als `display: flow-root`, was einen neuen [Blockformatierten Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überfließen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder wie Flex- oder Grid-Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Symbolbuttons

Buttons, die nur ein Symbol anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Screenreader, um darauf zuzugreifen, wenn sie das Dokument analysieren und [einen Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erzeugen. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um Seiteninhalte zu navigieren und zu manipulieren.

Um einem Symbolbutton einen zugänglichen Namen zu geben, setzen Sie Text in das `<button>`-Element, das die Funktionalität des Buttons prägnant beschreibt.

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

##### Resultat

{{EmbedLiveSample('Icon buttons')}}

Wenn Sie den Text des Buttons visuell verstecken möchten, ist ein zugänglicher Weg dies zu tun, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber ihn für unterstützende Technologien parsierbar zu halten.

Es ist jedoch erwähnenswert, dass es hilfreich sein kann, den Button-Text sichtbar zu lassen, damit Personen, die möglicherweise nicht mit der Bedeutung des Symbols vertraut sind oder den Zweck des Buttons nicht verstehen, einen besseren Zugang haben. Dies ist besonders wichtig für Personen, die nicht technologieversiert sind oder unterschiedliche kulturelle Interpretationen des Symbols haben, das der Button verwendet.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verstehen von WCAG, Erklärung der Leitlinie 4.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verstehen des Erfolgskriteriums 4.1.2 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine Fläche haben, die groß genug ist, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Einschränkungen und Menschen, die ungenaue Eingabeformen wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verstehen von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt — einschließlich Buttons — die in enger visueller Nähe zueinander platziert werden, sollten durch Leerraum voneinander getrennt sein. Diese Abstände sind vorteilhaft für Personen, die motorische Kontrollprobleme haben und versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstände können mit CSS-Properties wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesenbutton-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### Informationen zum ARIA-Status

Um den Status eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokusring für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Personen mit Sehschwächen ihn wahrnehmen und Personen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristik des Benutzer-Agenten bestimmt, dass der Fokus hervorgehoben werden sollte, wie wenn ein `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_vs_focus-visible).

Der Farbkontrast wird durch den Vergleich der Helligkeit der Button-Text- und Hintergrundfarbenwerte mit dem Hintergrund, auf dem der Button platziert ist, bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer definiert.)

- [WebAIM: Kontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verstehen von WCAG, Erklärung der Leitlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typen dazu führt, dass er (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser geben dem geklickten Button Fokus, aber [Safari tut dies aus Designgründen nicht](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines grundlegenden Buttons

Dieses Beispiel erstellt einen anklickbaren Button. Das Attribut `type="button"` stellt sicher, dass der Button kein Standardverhalten hat. Sie können diesen Button interaktiv machen, indem Sie JavaScript oder Attribute wie `command` und `commandfor` verwenden.

```html
<button type="button" name="button">I'm a button</button>
```

{{ EmbedLiveSample('creating_a_basic_button', 200, 64) }}

### Die Verwendung des `request-close` Wertes für das `command`-Attribut

Der Dialog in diesem Beispiel hat zwei Radio-Buttons, die steuern, ob der Dialog geschlossen werden kann oder nicht. Wählen Sie **Ja** oder **Nein** aus und klicken Sie dann auf **Anfrage zum Schließen**, um zu versuchen, den Dialog zu schließen. Wenn **Ja** ausgewählt ist, wird der Dialog geschlossen; wenn **Nein** ausgewählt ist, bleibt der Dialog geöffnet und zeigt stattdessen eine Nachricht an.

```html
<button type="button" commandfor="mydialog" command="show-modal">
  Open Dialog
</button>
<dialog id="mydialog">
  <div class="wrapper">
    <form>
      <fieldset>
        <legend>Allow this dialog to close when requested?</legend>
        <div>
          <input type="radio" id="no" name="close" value="no" checked />
          <label for="no">No</label>
        </div>
        <div>
          <input type="radio" id="yes" name="close" value="yes" />
          <label for="yes">Yes</label>
        </div>
      </fieldset>
    </form>
    <button commandfor="mydialog" command="request-close">
      Request to Close
    </button>
    <p class="warning" hidden>You must choose "Yes" to close this dialog.</p>
  </div>
</dialog>
```

```css hidden
.warning {
  color: tomato;
}
```

```js
const dialog = document.querySelector("dialog");
const radio = document.querySelector("form").elements["close"];
const warning = document.querySelector(".warning");

dialog.addEventListener("cancel", (e) => {
  if (!e.cancelable) return;
  if (radio.value === "no") {
    warning.hidden = false;
    e.preventDefault();
  } else {
    warning.hidden = true;
  }
});
```

{{ EmbedLiveSample('using_the_request-close_value_for_the_command_attribute', 100, 200) }}

Der **Dialog öffnen**-Button öffnet das `<dialog>`-Element mit `command="show-modal"`.

Der **Anfrage zum Schließen**-Button hat `command="request-close"`, welches das `<dialog>`-Element mit dem `commandfor="mydialog"`-Attribut anvisiert. Wenn er angeklickt wird, fragt er das `<dialog>`, ob es geschlossen werden kann (im Gegensatz zum `command="close"`-Attribut, das das `<dialog>` sofort schließen würde). Dies überprüft, ob das `<dialog>` [`cancelable`](/de/docs/Web/API/Event/cancelable) ist, indem ein `cancel`-Ereignis verwendet wird.

Wenn das Ereignis `cancelable` ist, wird der Wert der Radio-Buttons überprüft:

- Wenn auf `ja` gesetzt, wird der Dialog geschlossen.
- Wenn auf `nein` gesetzt, wird das `hidden`-Attribut bei der Warnung ausgeschaltet und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen, was das Standardverhalten des `<dialog>` verhindert.

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
          >Fluss-Inhalt</a
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
          >beschriftbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularbezogenes</a
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
        > vorhanden sein. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, dann kann es auch null oder ein {{htmlelement("selectedcontent")}}-Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
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
