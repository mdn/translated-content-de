---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: d546e97005f598df47e121cc2ec842240b0b71e6
---

Das **`<button>`**- [HTML](/de/docs/Web/HTML) Element ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert werden kann. Einmal aktiviert führt es eine Aktion aus, wie das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil präsentiert, der der Plattform ähnelt, auf der der {{Glossary("user_agent", "Benutzeragent")}} läuft, aber Sie können das Erscheinungsbild der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autofocus`
  - : Dieses boolesche Attribut gibt an, dass der Button bei Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf ein Element angewendet werden soll, das von einem Steuerungs-`<button>` über das `commandfor`-Attribut kontrolliert wird. Mögliche Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als modales Fenster an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufrufen der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) Methode auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode auf dem `<dialog>`-Element. Bei Verwendung mit dem `value`-Attribut wird der Wert des Buttons als [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft des Dialogs übergeben.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis auf einem {{htmlelement("dialog")}}-Element aus, um den Browser aufzufordern, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis. Dies unterscheidet sich vom `close`-Befehl darin, dass Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das `cancel`-Ereignis anwenden können, um zu verhindern, dass das `<dialog>` geschlossen wird. Wenn das Dialogfenster bereits geschlossen ist, wird keine Aktion ausgeführt. Dies ist das deklarative Äquivalent zum Aufrufen der [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) Methode auf dem `<dialog>`-Element. Bei Verwendung mit dem `value`-Attribut des Buttons wird der Wert als `returnValue`-Eigenschaft des Dialogs übergeben.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies ist gleichbedeutend mit dem Setzen eines Wertes von `show` für das [`popovertargetaction`](#popovertargetaction) Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Methode auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button verbirgt ein angezeigtes Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies ist gleichbedeutend mit dem Setzen eines Wertes von `hide` für das [`popovertargetaction`](#popovertargetaction) Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) Methode auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen sichtbar und versteckt. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies ist gleichbedeutend mit dem Setzen eines Wertes von `toggle` für das [`popovertargetaction`](#popovertargetaction) Attribut und bietet auch ein deklaratives Äquivalent zum Aufrufen der [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methode auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Macht ein `<button>`-Element zu einem Befehls-Button, der ein bestimmtes interaktives Element steuert, indem er den im [`command`](#command)-Attribut des Buttons angegebenen Befehl sendet. Das `commandfor`-Attribut nimmt die ID des zu steuernden Elements als Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, das dem Button zugeordnet werden soll (seinem _Formulareigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist der `<button>` seinem Vorfahren-`<form>`-Element zugeordnet, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>` Elemente mit `<form>` Elementen überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren-`<form>`-Element außer Kraft setzen.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formulareigentümers des Buttons. Hat keine Auswirkung, wenn kein Formulareigentümer vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Absende-Button ist (er befindet sich innerhalb/ist mit einem `<form>` verbunden und hat `type="button"` nicht angegeben), gibt an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihrem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `file` gesetzt zu übermitteln.
    - `text/plain`: Als Debug-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulareigentümers des Buttons.

- `formmethod`
  - : Wenn der Button ein Absende-Button ist (er befindet sich innerhalb/ist mit einem `<form>` verbunden und hat `type="button"` nicht angegeben), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, um das Formular zu übermitteln. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im Body der HTTP-Anfrage eingeschlossen, wenn sie an den Server gesendet wird. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Separator, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzugeben, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verbunden ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formulareigentümers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Absende-Button ist, gibt dieses boolesche Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut des Formulareigentümers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Absende-Button ist, ist dieses Attribut ein vom Autor definierter Name oder ein standardisiertes, unterstrichprefixiertes Schlüsselwort, das angibt, wo die Antwort auf die Formularübermittlung angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formulareigentümers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Laden Sie die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden Sie die Antwort in einen neuen, unbenannten Browsing-Kontext – normalerweise ein neuer Tab oder ein Fenster, abhängig von den Einstellungen des Benutzers.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing-Kontext (der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten hat). Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.

- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<button>`-Element als **Interesse-Invoker**. Sein Wert ist die `id` eines Ziel-Elements, das in irgendeiner Weise betroffen sein wird (normalerweise angezeigt oder verborgen), wenn Interesse an dem Invoker-Element gezeigt oder verloren wird (zum Beispiel durch Hovern/Unhovern oder Fokussieren/Unfokussieren). Weitere Details und Beispiele finden Sie unter [Verwenden von Interesse-Invokern](/de/docs/Web/API/Popover_API/Using_interest_invokers).

- `name`
  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Absenden des Formulars verwendet wird.

- `popovertarget`
  - : Macht ein `<button>`-Element zu einem Popover-Steuerungselement; nimmt die ID des Popover-Elements, das zu steuern ist, als Wert. Wenn eine Beziehung zwischen einem Popover und seinem Invoker-Button mit dem `popovertarget`-Attribut hergestellt wird, hat dies zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung zwischen Popover und Invoker und positioniert das Popover logisch in der Reihenfolge der Tastaturfokussierung, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Hilfstechnologie-Nutzer (AT) zugänglicher (siehe auch [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen den beiden, was es sehr bequem macht, Popover relativ zu ihren Steuerelementen unter Verwendung der [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf ein Popover-Element angewendet werden soll, das von einem Steuerungs-`<button>` gesteuert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verbergen. Wenn Sie versuchen, ein bereits verstecktes Popover zu verbergen, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen sichtbar und versteckt wechseln. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungs-Button ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verbunden sind, nicht angegeben ist, oder wenn das Attribut einen leeren oder ungültigen Wert aufweist.
    - `reset`: Der Button setzt alle Steuerungen auf ihre Ausgangswerte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und tut nichts, wenn er standardmäßig gedrückt wird. Er kann clientseitige Skripts haben, die auf Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der dem `name` des Buttons zugeordnet ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird beim Absenden des Formulars mit diesem Button an den Server in den Parametern übergeben. Bei Verwendung mit den Befehlen `close` oder `request-close` setzt das `value`-Attribut den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des gesteuerten {{htmlelement("dialog")}}-Elements.

## Anmerkungen

Ein Absende-Button mit gesetztem Attribut `formaction`, aber ohne zugeordnetes Formular, tut nichts. Sie müssen einen Formulareigentümer festlegen, entweder indem Sie es in ein `<form>` einfügen oder das `form`-Attribut auf die ID des Formulars setzen.

`<button>`-Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}}-Elemente. Sie können HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexes Rendern verwenden.

Wenn Ihre Buttons nicht zur Übermittlung von Formulardaten an einen Server gedacht sind, stellen Sie sicher, dass ihr `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhalten auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen Benutzeragenten Buttons als `display: flow-root`, was einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) festlegt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als flex- oder gitterbasierter Container definiert ist, verhalten sich die Kinder als flex- oder gitterbasierte Elemente. Ein Button, der auf `display: inline` gesetzt ist, wird so gestylt, als ob der Wert auf `display: inline-block` gesetzt wäre.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen bieten Informationen für unterstützende Technologien, wie Bildschirmlesegeräte, auf die zugegriffen werden kann, wenn sie das Dokument parsen und [einen Barrierefreiheitstree](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) erzeugen. Unterstützende Technologien verwenden dann den Barrierefreiheitstree, um zu navigieren und Seiteninhalte zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, fügen Sie Text in das `<button>`-Element ein, das die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist es ein zugänglicher Weg, eine [Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber von unterstützenden Technologien parsierbar zu halten.

Es ist jedoch erwähnenswert, dass das Sichtbarlassen des Button-Textes Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons vertraut sind oder die Funktion des Buttons verstehen. Dies ist besonders wichtig für Menschen, die technologisch nicht versiert sind oder die möglicherweise unterschiedliche kulturelle Interpretationen des Icons haben, das der Button verwendet.

- [Was ist ein zugänglicher Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Leitlinie 4.1-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verstehen des Erfolgskriteriums 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert zu werden. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die unpräzise Eingabeformen wie einen Stift oder Finger verwenden. Eine minimale Interaktivgröße von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiver Inhalte – einschließlich Buttons –, die in enger visueller Nähe zueinander platziert sind, sollten Abstand dazwischen haben. Diese Abstände sind vorteilhaft für Menschen, die motorische Kontrollprobleme haben, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Der Abstand kann mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Problem mit riesigen Buttons - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Um mehr zu erfahren, lesen Sie die Informationen über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokusring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genug Kontrast hat**, damit Menschen mit Sehschwächen ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, wenn die Heuristiken des Benutzeragenten bestimmen, dass der Fokus hervorgehoben werden soll, wie z.B. wenn ein `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Farbwerte des Button-Textes und Hintergrundes mit dem Hintergrund, auf dem der Button platziert ist, verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Leitlinie 1.4-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typen dazu führt, dass er (standardmäßig) den Fokus erhält, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem angeklickten Button den Fokus, aber [Safari tut es nicht, durch Design](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines einfachen Buttons

Dieses Beispiel erstellt einen anklickbaren Button.
Das `type="button"`-Attribut stellt sicher, dass der Button kein Standardverhalten hat.
Sie können diesen Button interaktiv mit JavaScript oder Attributen wie `command` und `commandfor` machen.

```html
<button type="button" name="button">I'm a button</button>
```

{{ EmbedLiveSample('creating_a_basic_button', 200, 64) }}

### Verwendung des `request-close` Wertes für das `command`-Attribut

Der Dialog in diesem Beispiel hat zwei Radiobuttons, die steuern, ob der Dialog geschlossen werden kann oder nicht.
Wählen Sie **Ja** oder **Nein** aus und klicken Sie dann auf **Request to Close**, um zu versuchen, den Dialog zu schließen.
Wenn **Ja** ausgewählt ist, wird der Dialog geschlossen; wenn **Nein** ausgewählt ist, bleibt der Dialog geöffnet und zeigt stattdessen eine Nachricht an.

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

Der **Open Dialog**-Button öffnet das `<dialog>`-Element mit `command="show-modal"`.

Der **Request to Close**-Button hat `command="request-close"`, das mit dem `<dialog>`-Element durch das `commandfor="mydialog"`-Attribut verknüpft ist. Wenn darauf geklickt wird, fragt es das `<dialog>`, ob es geschlossen werden kann (anders als das `command="close"`-Attribut, das das `<dialog>` sofort schließen würde).
Dies prüft, ob das `<dialog>` [`cancelable`](/de/docs/Web/API/Event/cancelable) ist, unter Verwendung eines `cancel`-Ereignisses.

Wenn das Ereignis `cancelable` ist, wird der Wert der Radiobuttons geprüft:

- Wenn auf `yes` gesetzt, wird der Dialog geschlossen.
- Wenn auf `no` gesetzt, wird das `hidden`-Attribut auf der Warnung deaktiviert und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wird aufgerufen, was das Standardverhalten des Schließens des `<dialog>` verhindert.

### Verwendung des `value`-Attributs mit Dialog `close`-Befehl

Dieses Beispiel zeigt, wie man das `value`-Attribut des Buttons mit dem `close`-Befehl verwendet, um den Wert der [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) Eigenschaft eines Dialogs zu füllen.

Wenn entweder der **Cancel**- oder **Delete**-Button angeklickt wird, schließt der Dialog und setzt seinen `returnValue` auf das `value`-Attribut des Buttons.
Der `close`-Ereignis-Listener prüft `dialog.returnValue`, um festzustellen, welche Aktion der Benutzer gewählt hat, und protokolliert das Ergebnis auf dem Bildschirm.

#### HTML

Das HTML definiert zuerst einen **Delete Record**-Button, der das `commandfor`-Attribut verwendet, um das zu öffnende Dialog anzugeben.

Innerhalb des Dialogs verwenden **Cancel**- und **Delete**-Buttons das `commandfor`-Attribut, um anzugeben, dass sie auf das aktuelle Dialogfenster angewendet werden.
Sie setzen auch das `command`-Attribut auf "close" und das `value`-Attribut auf "cancel" und "delete" – der Wert des ausgewählten Buttons wird automatisch in den `returnValue` des Dialogs kopiert, wenn der Button geklickt wird.

```html
<button commandfor="confirm-dialog" command="show-modal">Delete Record</button>
<dialog id="confirm-dialog">
  <header>
    <h1>Delete Record?</h1>
  </header>
  <p>Are you sure? This action cannot be undone</p>
  <footer>
    <button commandfor="confirm-dialog" command="close" value="cancel">
      Cancel
    </button>
    <button commandfor="confirm-dialog" command="close" value="delete">
      Delete
    </button>
  </footer>
</dialog>
```

```html
<pre id="log"></pre>
```

```css hidden
#log {
  height: 20px;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

#### JavaScript

Der Code verwendet einen `close`-Ereignis-Listener, um den `returnValue` des Dialogs zu protokollieren.

```js
const dialog = document.getElementById("confirm-dialog");

dialog.addEventListener("close", () => {
  switch (dialog.returnValue) {
    case "cancel":
      log("Cancel was clicked");
      break;
    case "delete":
      log("Delete was clicked");
      break;
    default:
      log("Closed with value:", dialog.returnValue);
  }
});
```

#### Ergebnisse

{{ EmbedLiveSample('using_the_value_attribute_with_dialog_close_command', 100, 200) }}

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
          >Phrasing Content</a
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
          >formularassoziiertes</a
        >
        Element, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing Content</a
        >
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Auswahlelements</a> ist, kann es auch null oder ein {{htmlelement("selectedcontent")}}
        Element enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der startende als auch der endende Tag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing Content</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
            >Button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>CheckBox</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role"><code>ComboBox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>Link</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>Menüpunkt</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>Menüpunkt Checkbox</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>Menüpunkt Radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>Option</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>Radio</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>Schalter</code></a>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>Tab</code></a>
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
