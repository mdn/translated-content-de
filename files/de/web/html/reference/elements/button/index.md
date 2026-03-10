---
title: "<button>: Das Button-Element"
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Das **`<button>`** [HTML](/de/docs/Web/HTML) Element ist ein interaktives Element, das von einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Einmal aktiviert führt es eine Aktion aus, wie zum Beispiel das Absenden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons im Stil der Plattform dargestellt, auf der das {{Glossary("user_agent", "User-Agent")}} läuft, aber Sie können das Aussehen der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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

Die Attribute dieses Elements schließen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- `autofocus`
  - : Dieses Boolean-Attribut gibt an, dass der Button den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll, wenn die Seite geladen wird. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die an einem Element ausgeführt werden soll, das von einem Steuer-`<button>` über das Attribut `commandfor` kontrolliert wird. Die möglichen Werte sind:
    - `"show-modal"`
      - : Der Button zeigt einen {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modaler Natur ist, wird keine Aktion durchgeführt. Dies entspricht der deklarativen Äquivalent zum Aufruf der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}} Element. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt. Dies ist ein deklaratives Äquivalent zum Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem `<dialog>`-Element. Wenn das `value`-Attribut verwendet wird, wird der Wert des Buttons als [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) Eigenschaft des Dialogs übergeben.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis auf einem {{htmlelement("dialog")}} Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis. Dies unterscheidet sich vom `close`-Befehl darin, dass Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das `cancel`-Ereignis aufrufen können, um zu verhindern, dass das `<dialog>` geschlossen wird. Wenn der Dialog bereits geschlossen ist, wird keine Aktion durchgeführt. Dies ist ein deklaratives Äquivalent zum Aufrufen der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem `<dialog>`-Element. Wenn das Attribut `value` des Buttons verwendet wird, wird der Wert als `returnValue`-Eigenschaft des Dialogs übergeben.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion durchgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht der Einstellung eines Werts von `show` für das [`popovertargetaction`](#popovertargetaction) Attribut und bietet auch eine deklarative Entsprechung zum Aufruf der [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) Methode auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button versteckt ein sichtbares Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht der Einstellung eines Werts von `hide` für das [`popovertargetaction`](#popovertargetaction) Attribut und bietet auch eine deklarative Entsprechung zum Aufrufen der [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) Methode auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button wechselt ein Popover zwischen anzeigen und verstecken. Wenn das Popover versteckt ist, wird es angezeigt und umgekehrt. Weitere Details finden Sie in der [Popover API](/de/docs/Web/API/Popover_API). Dies entspricht der Einstellung eines Werts von `toggle` für das [`popovertargetaction`](#popovertargetaction) Attribut und bietet auch eine deklarative Entsprechung zum Aufruf der [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methode auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) vorangestellt sind. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem kontrollierten Element aus.

- `commandfor`
  - : Verwandelt ein `<button>`-Element in einen Befehlsbutton, der ein gegebenes interaktives Element steuert, indem er den im [`command`](#command)-Attribut des Buttons angegebenen Befehl ausgibt. Das Attribut `commandfor` nimmt die ID des zu steuernden Elements als Wert. Dies ist eine allgemeiner Version des Attributs [`popovertarget`](#popovertarget).
- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses Boolean-Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}} Element, mit dem der Button verknüpft werden soll (sein _Formular-Eigentümer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, wird das `<button>` mit seinem Vorfahren `<form>` Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>` Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein Vorfahren `<form>` Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) Attribut des Formular-Eigentümers des Buttons. Tut nichts, wenn kein Formulareigentümer vorhanden ist.
- `formenctype`
  - : Wenn der Button ein Submit-Button ist (im `<form>` oder damit verbunden und nicht `type="button"` hat), gibt an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}} Elemente mit ihrem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf `file` gesetzt zu übermitteln.
    - `text/plain`: Als Debugging-Hilfe spezifiziert; sollte nicht für die eigentliche Formularübermittlung verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) Attribut des Formular-Eigentümers des Buttons.

- `formmethod`
  - : Wenn der Button ein Submit-Button ist (im `<form>` oder damit verbunden und nicht `type="button"` hat), gibt dieses Attribut die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) an, die zum Übermitteln des Formulars verwendet wird. Mögliche Werte:
    - `post`: Die Daten des Formulars werden in den Körper der HTTP-Anfrage einbezogen, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldeinformationen.
    - `get`: Die Formulardaten werden an die `action` URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat, wie bei Suchformularen.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verbunden ist, und die Formulardaten überhaupt nicht überträgt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) Attribut des Formular-Eigentümers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Submit-Button ist, gibt dieses Boolean-Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es gesendet wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut des Formular-Eigentümers des Buttons.

    Dieses Attribut ist auch auf den Elementen [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) verfügbar.

- `formtarget`
  - : Wenn der Button ein Submit-Button ist, gibt dieses Attribut einen vom Autor definierten Namen oder ein standardisiertes, unterstrich-präfixiertes Schlüsselwort an, das angibt, wo die Antwort vom Abschicken des Formulars angezeigt werden soll. Dies ist der `name` eines _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) Attribut des Formular-Eigentümers des Buttons. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort in dieselbe Browsing-Kontext wie die aktuelle. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext — normalerweise ein neues Tab oder Fenster, abhängig von den Einstellungen des Benutzers.
    - `_parent`: Lädt die Antwort in den Eltern-Browsing-Kontext von der aktuellen. Wenn kein Eltern vorhanden ist, verhält sich diese Option so wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahre der aktuellen ist und keinen Eltern hat). Wenn kein Eltern vorhanden ist, funktioniert diese Option genauso wie `_self`.

- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<button>` Element als **Interest Invoker**. Der Wert ist die `id` eines Ziel-Elements, das in irgendeiner Weise beeinflusst wird (normalerweise gezeigt oder verborgen), wenn Interesse am Invoker-Element gezeigt oder verloren wird (zum Beispiel durch Hover/Unhover oder Fokus/Unfokus). Weitere Details und Beispiele finden Sie unter [Verwenden von Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers).

- `name`
  - : Der Name des Buttons, übermittelt als Paar mit dem `value` des Buttons als Teil der Formulardaten, wenn dieser Button verwendet wird, um das Formular zu übermitteln.

- `popovertarget`
  - : Verwandelt ein `<button>`-Element in einen Popover-Kontrollknopf; nimmt die ID des Popover-Elements an, das es steuern soll. Die Erstellung einer Beziehung zwischen einem Popover und seinem Invoker-Knopf mit dem `popovertarget`-Attribut hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Beziehung между Popover und Invoker und platziert das Popover in einer logischen Position in der Tastaturfokus-Navigationsreihenfolge, wenn es angezeigt wird. Dies macht das Popover für Benutzer der Tastatur und unterstützender Technologien (AT) zugänglicher (siehe auch [Popover Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Anker-Verknüpfung zwischen den beiden, wodurch es sehr bequem wird, Popover relativ zu ihren Steuerungen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details zur [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die auszuführende Aktion auf einem Popover-Element an, das von einem Steuer-`<button>` kontrolliert wird. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein sichtbares Popover verstecken. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion genommen.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion genommen.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen sichtbar und verborgen umschalten. Wenn das Popover verborgen ist, wird es angezeigt; wenn es sichtbar ist, wird es verborgen. Wenn `popovertargetaction` ausgelassen wird, ist `"toggle"` die Standardaktion, die von dem Steuerknopf ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für mit einem `<form>` verbundene Buttons nicht angegeben ist oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle Steuerelemente auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und macht standardmäßig nichts, wenn er gedrückt wird. Es können clientseitige Skripte auf die Ereignisse des Elements hören, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verbunden ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird an den Server in Parametern übergeben, wenn das Formular mit diesem Button übermittelt wird. Wenn es mit den Befehlen `close` oder `request-close` verwendet wird, legt das `value`-Attribut den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des kontrollierten {{htmlelement("dialog")}} Elements fest.

## Hinweise

Ein Sende-Button mit dem Attribut `formaction` gesetzt, aber ohne zugeordnetes Formular tut nichts. Sie müssen einen Formulareigentümer festlegen, entweder indem Sie es in ein `<form>` einbetten oder das Attribut `form` auf die id des Formulars setzen.

`<button>` Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}} Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`) und die Pseudo-Elemente {{Cssxref("::after")}} und {{Cssxref("::before")}} für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht zum Übermitteln von Formulardaten an einen Server sind, stellen Sie sicher, dass deren `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Obwohl `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mithilfe von [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie zum Beispiel das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User Agents Buttons als `display: flow-root`, was einen neuen [Blockformatierungs-Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Items. Ein auf `display: inline` gesetzter Button wird gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Zugänglichkeit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologie, wie Bildschirmleser, um darauf zuzugreifen, wenn sie das Dokument analysieren und [einen Zugänglichkeitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologie verwendet dann den Zugänglichkeitsbaum, um Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, setzen Sie Text in das `<button>` Element, der die Funktionalität des Buttons prägnant beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine zugängliche Möglichkeit, dies zu tun, eine [Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber ihn für unterstützende Technologie parsbar zu halten.

Es sei jedoch darauf hingewiesen, dass das Sichtbarlassen des Button-Textes Menschen helfen kann, die möglicherweise nicht mit der Bedeutung des Icons oder der Funktion des Buttons vertraut sind. Dies ist besonders wichtig für Menschen, die technisch nicht versiert sind oder unterschiedlichen kulturellen Interpretationen des von dem Button verwendeten Icons unterliegen.

- [Was ist ein zugänglicher Name? | Vispero](https://vispero.com/resources/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Guideline 4.1-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine Fläche haben, die groß genug ist, um leicht aktiviert zu werden. Dies hilft eine Vielzahl von Menschen, einschließlich Menschen mit motorischen Kontrollproblemen und Menschen, die nicht-präzise Eingabearten wie einen Stift oder Finger verwenden. Eine Mindestinteraktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixel")}} wird empfohlen.

- [Understanding Success Criterion 2.5.5: Zielgröße | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele - Das A11Y Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktivem Inhalt – einschließlich Buttons – die in einer engen visuellen Nähe zueinander platziert sind, sollten durch Abstand getrennt sein. Dieser Abstand ist vorteilhaft für Menschen, die motorische Kontrollprobleme haben und möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstand kann durch CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesenbutton-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Zur Beschreibung des Zustands eines Buttons ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Weitere Informationen finden Sie in den Informationen über die [ARIA-Buttonrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokus-Ring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, sodass Menschen mit Sehbehinderungen ihn wahrnehmen und Menschen mit kognitiven Unterschieden ihn verstehen können.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Styles auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur wenn die Heuristiken des User-Agents bestimmen, dass der Fokus hervorgehoben werden sollte, wie zum Beispiel wenn ein `<button>` Tastaturfokus erhält. Siehe [:focus vs :focus-visible](/de/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_vs_focus-visible) für mehr Informationen.

Das Farbkontrastratio wird bestimmt, indem die Leuchtkraft der Button-Text- und Hintergrundfarbenwerte mit dem Hintergrund verglichen wird, auf dem der Button platziert ist. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist als 18.66px und {{cssxref("font-weight", "bold")}} oder größer oder 24px oder größer definiert.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf ein `<button>` oder {{HTMLElement("input")}} Button-Typen dazu führt, dass diese (standardmäßig) fokussiert werden, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem geklickten Button Fokus, aber [Safari macht dies designbedingt nicht](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines grundlegenden Buttons

Dieses Beispiel erstellt einen klickbaren Button. Das `type="button"` Attribut stellt sicher, dass der Button kein Standardverhalten hat. Sie können diesen Button mit JavaScript oder Attributen wie `command` und `commandfor` interaktiv machen.

```html
<button type="button" name="button">I'm a button</button>
```

{{EmbedLiveSample('creating_a_basic_button', 200, 64)}}

### Verwenden des `request-close`-Wertes für das `command`-Attribut

Der Dialog in diesem Beispiel hat zwei Optionsfelder, die steuern, ob der Dialog geschlossen werden kann oder nicht. Wählen Sie **Ja** oder **Nein** und klicken Sie dann auf **Anfrage zum Schließen**, um zu versuchen, den Dialog zu schließen. Wenn **Ja** ausgewählt ist, wird der Dialog geschlossen; wenn **Nein** ausgewählt ist, bleibt der Dialog offen und zeigt stattdessen eine Nachricht an.

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

{{EmbedLiveSample('using_the_request-close_value_for_the_command_attribute', 100, 200)}}

Der **Dialog öffnen**-Button öffnet das `<dialog>` Element mit `command="show-modal"`.

Der **Anfrage zum Schließen**-Button hat `command="request-close"`, das auf das `<dialog>` Element mit dem `commandfor="mydialog"` Attribut zielt. Wenn es geklickt wird, fragt es das `<dialog>`, ob es geschlossen werden kann (im Gegensatz zum `command="close"` Attribut, das das `<dialog>` sofort schließen würde). Es überprüft, ob das `<dialog>` [`cancelable`](/de/docs/Web/API/Event/cancelable) ist, indem ein `cancel` Ereignis verwendet wird.

Wenn das Ereignis `cancelable` ist, wird der Wert der Optionsfelder überprüft:

- Wenn auf `ja` gesetzt, wird der Dialog geschlossen.
- Wenn auf `nein` gesetzt, wird das `hidden` Attribut auf der Warnung ausgeschaltet und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen, die das Standard-`<dialog>`-Schließverhalten verhindert.

### Verwenden des `value` Attributs mit dem Dialog `close`-Befehl

Dieses Beispiel zeigt, wie das `value` Attribut des Buttons mit dem `close` Befehl verwendet wird, um den Wert der `returnValue` Eigenschaft eines Dialogs zu füllen.

Wenn entweder der **Abbrechen** oder der **Löschen** Knopf geklickt wird, schließt sich der Dialog und setzt seinen `returnValue` auf das `value` Attribut des Knopfes. Der `close` event listener prüft den `dialog.returnValue`, um festzustellen, welche Aktion der Benutzer gewählt hat, und protokolliert das Ergebnis auf dem Bildschirm.

#### HTML

Das HTML definiert zuerst einen **Eintrag löschen** Knopf, der das Attribut `commandfor` verwendet, um anzugeben, welcher Dialog geöffnet werden soll.

Innerhalb des Dialogs verwenden die **Abbrechen** und **Löschen** Buttons das Attribut `commandfor`, um anzuzeigen, dass sie auf den aktuellen Dialog angewendet werden. Sie setzen auch das `command` Attribut auf "close" und das `value` Attribut auf "cancel" beziehungsweise "delete" – der Wert des ausgewählten Buttons wird automatisch in dem Dialog `returnValue` kopiert, wenn der Button angeklickt wird.

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

Der Code verwendet einen `close`-Event-Listener, um den `returnValue` des Dialogs zu protokollieren.

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

{{EmbedLiveSample('using_the_value_attribute_with_dialog_close_command', 100, 200)}}

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
          >formulierter Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#listed"
          >aufgelistet</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#labelable"
          >benennbar</a
        >, und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übermittelbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >form-assoziiertes</a
        >
        Element, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierter Inhalt</a
        >
        aber es darf keinen
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > geben. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Selektions-Elements</a> ist, dann darf es auch null oder ein {{htmlelement("selectedcontent")}} Element enthalten.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >formulierbaren Inhalt</a
        > akzeptiert.
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
