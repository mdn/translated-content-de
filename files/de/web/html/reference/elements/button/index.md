---
title: "`<button>` HTML-Button-Element"
short-title: <button>
slug: Web/HTML/Reference/Elements/button
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<button>`** [HTML](/de/docs/Web/HTML)-Element ist ein interaktives Element, das von einem Benutzer mit einer Maus, Tastatur, Finger, Sprachbefehl oder anderen unterstützenden Technologien aktiviert wird. Nach der Aktivierung führt es eine Aktion aus, wie das Senden eines [Formulars](/de/docs/Learn_web_development/Extensions/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil angezeigt, der der Plattform entspricht, auf der der {{Glossary("user_agent", "User-Agent")}} läuft. Sie können jedoch das Aussehen der Buttons mit [CSS](/de/docs/Web/CSS) ändern.

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
  - : Dieses boolesche Attribut legt fest, dass der Button beim Laden der Seite den Eingabe-[Fokus](/de/docs/Web/API/HTMLElement/focus) haben soll. **Nur ein Element in einem Dokument kann dieses Attribut haben.**

- `command`
  - : Gibt die Aktion an, die auf einem Element durchgeführt werden soll, das von einem Steuerungs-`<button>` mit dem `commandfor`-Attribut gesteuert wird. Mögliche Werte sind:
    - `"show-modal"`
      - : Der Button zeigt ein {{htmlelement("dialog")}} als Modal an. Wenn der Dialog bereits modal ist, wird keine Aktion ausgeführt. Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) auf dem `<dialog>`-Element.
    - `"close"`
      - : Der Button schließt ein {{htmlelement("dialog")}}-Element.
        Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
        Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf dem `<dialog>`-Element.
        Wenn es in Verbindung mit dem `value`-Attribut verwendet wird, wird der Wert des Buttons als `returnValue`-Eigenschaft des Dialogs übergeben.
    - `"request-close"`
      - : Der Button löst ein [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis auf einem {{htmlelement("dialog")}}-Element aus, um den Browser zu bitten, es zu schließen, gefolgt von einem [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis.
        Dies unterscheidet sich vom `close`-Befehl, da Autoren [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem `cancel`-Ereignis aufrufen können, um zu verhindern, dass das `<dialog>` geschlossen wird.
        Wenn der Dialog bereits geschlossen ist, wird keine Aktion ausgeführt.
        Dies ist ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) auf dem `<dialog>`-Element.
        Wenn es mit dem `value`-Attribut des Buttons verwendet wird, wird der Wert als `returnValue`-Eigenschaft des Dialogs übergeben.
    - `"show-popover"`
      - : Der Button zeigt ein verstecktes Popover an. Wenn Sie versuchen, ein bereits sichtbares Popover anzuzeigen, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Festlegen eines Werts von `show` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) auf dem Popover-Element.
    - `"hide-popover"`
      - : Der Button versteckt ein sichtbares Popover. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion ausgeführt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Festlegen eines Werts von `hide` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover) auf dem Popover-Element.
    - `"toggle-popover"`
      - : Der Button schaltet ein Popover zwischen sichtbar und versteckt um. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es versteckt. Weitere Details finden Sie in der [Popover-API](/de/docs/Web/API/Popover_API). Dies entspricht dem Festlegen eines Werts von `toggle` für das [`popovertargetaction`](#popovertargetaction)-Attribut und bietet auch ein deklaratives Äquivalent zum Aufruf der Methode [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auf dem Popover-Element.
    - Benutzerdefinierte Werte
      - : Dieses Attribut kann benutzerdefinierte Werte darstellen, die mit zwei Bindestrichen (`--`) beginnen. Buttons mit einem benutzerdefinierten Wert lösen das [`CommandEvent`](/de/docs/Web/API/CommandEvent) auf dem gesteuerten Element aus.

- `commandfor`
  - : Wandelt ein `<button>`-Element in einen Befehlsbutton um, der ein gegebenes interaktives Element durch Ausgabe des im `command`-Attribut des Buttons angegebenen Befehls steuert. Das `commandfor`-Attribut nimmt die ID des zu steuernden Elements als seinen Wert. Dies ist eine allgemeinere Version von [`popovertarget`](#popovertarget).

- [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.

- [`form`](/de/docs/Web/HTML/Reference/Attributes/form)
  - : Das {{HTMLElement("form")}}-Element, das dem Button zugeordnet werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im gleichen Dokument sein. (Wenn dieses Attribut nicht gesetzt ist, ist das `<button>` mit seinem Vorfahren-`<form>`-Element verknüpft, falls vorhanden.)

    Dieses Attribut ermöglicht es Ihnen, `<button>`-Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>`-Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Buttons. Tut nichts, wenn kein Formularbesitzer vorhanden ist.

- `formenctype`
  - : Wenn der Button ein Submit-Button ist (er befindet sich in einem `<form>` oder ist damit verknüpft und hat nicht `type="button"`), gibt er an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standard, wenn das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird verwendet, um {{HTMLElement("input")}}-Elemente mit ihrem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `file` zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben; sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Buttons.

- `formmethod`
  - : Wenn der Button ein Submit-Button ist (es befindet sich in einem `<form>` oder ist damit verknüpft und hat nicht `type="button"`), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) für die Übermittlung des Formulars an. Mögliche Werte:
    - `post`: Die Daten aus dem Formular werden im Körper der HTTP-Anfrage eingeschlossen, wenn sie an den Server gesendet werden. Verwenden Sie dies, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldeinformationen.
    - `get`: Die Formulardaten werden an die `action`-URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}, wie Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Reference/Elements/dialog) schließt, mit dem er verknüpft ist, und dabei überhaupt keine Formulardaten übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Buttons.

- `formnovalidate`
  - : Wenn der Button ein Submit-Button ist, gibt dieses boolesche Attribut an, dass das Formular nicht [validiert](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Buttons.

    Dieses Attribut ist auch auf [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)-Elementen verfügbar.

- `formtarget`
  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein von Autoren definierter Name oder standardisierter, mit Unterstrich prefixierter Stichwort, das angibt, wo die Antwort auf das übermittelte Formular angezeigt werden soll. Dies ist der `name` von, oder das Stichwort für, einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lade die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lade die Antwort in einen neuen, nicht benannten Browsing-Kontext – normalerweise ein neuer Tab oder ein neues Fenster, abhängig von den Browsereinstellungen des Benutzers.
    - `_parent`: Lade die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lade die Antwort in den obersten Browsing-Kontext (das heißt, den Browsing-Kontext, der ein Vorfahre des aktuellen ist und kein Elternteil hat). Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option genauso wie `_self`.

- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<button>`-Element als **Interest Invoker**. Sein Wert ist die `id` eines Zielelements, das in irgendeiner Weise (normalerweise gezeigt oder verborgen) beeinflusst wird, wenn Interesse am Invoker-Element (zum Beispiel durch Hovering/Unhovering oder Fokussierung/Entfokussierung) gezeigt oder verloren wird. Weitere Details und Beispiele finden Sie unter [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers).

- `name`
  - : Der Name des Buttons, der bei Verwendung zur Übermittlung des Formulars als Paar mit dem `value` des Buttons im Rahmen der Formulardaten übermittelt wird.

- `popovertarget`
  - : Wandelt ein `<button>`-Element in einen Popover-Control-Button um; nimmt die ID des zu steuernden Popover-Elements als Wert. Die Etablierung einer Beziehung zwischen einem Popover und seinem Invoker-Button mithilfe des `popovertarget`-Attributs hat zwei zusätzliche nützliche Effekte:
    - Der Browser erstellt eine implizite [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) und [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Beziehung zwischen Popover und Invoker und platziert das Popover in einer logischen Position in der Tastaturnavigation, wenn es angezeigt wird. Dies macht das Popover für Tastatur- und Unterstützungs-Technologie-Benutzer (AT) zugänglicher (siehe auch [Popover accessibility features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
    - Der Browser erstellt eine implizite Ankerreferenz zwischen beiden und macht es sehr bequem, Popover relativ zu ihren Steuerungselementen mit [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) zu positionieren. Weitere Details finden Sie unter [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

- `popovertargetaction`
  - : Gibt die Aktion an, die auf einem kontrollierten Popover-Element durch einen Steuerungs-`<button>` ausgeführt werden soll. Mögliche Werte sind:
    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen sichtbar und versteckt umschalten. Wenn das Popover unsichtbar ist, wird es angezeigt; wenn das Popover sichtbar ist, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die standardmäßige Aktion, die vom Steuerungsbutton ausgeführt wird.

- `type`
  - : Das Standardverhalten des Buttons. Mögliche Werte sind:
    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut nicht für Buttons angegeben ist, die mit einem `<form>` verknüpft sind, oder wenn das Attribut einen leeren oder ungültigen Wert hat.
    - `reset`: Der Button setzt alle die Steuerelemente auf ihre Anfangswerte zurück, ähnlich wie [\<input type="reset">](/de/docs/Web/HTML/Reference/Elements/input/reset). (Dieses Verhalten neigt dazu, Benutzer zu stören.)
    - `button`: Der Button hat kein Standardverhalten und macht nichts, wenn er gedrückt wird. Er kann jedoch clientseitige Skripte haben, die auf die Ereignisse des Elements lauschen, die ausgelöst werden, wenn die Ereignisse auftreten.

- `value`
  - : Definiert den mit dem `name` des Buttons assoziierten Wert, wenn er mit den Formulardaten übermittelt wird.
    Dieser Wert wird an den Server in den Parametern übergeben, wenn das Formular mithilfe dieses Buttons übermittelt wird.
    Wenn es mit den Befehlen `close` oder `request-close` verwendet wird, setzt das `value`-Attribut das [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des {{htmlelement("dialog")}}-Elements, das gesteuert wird.

## Anmerkungen

Ein Submit-Button mit dem Attribut `formaction` gesetzt, aber ohne zugeordnetes Formular macht nichts. Sie müssen einen Formularbesitzer einstellen, entweder indem Sie es in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>`-Elemente lassen sich viel einfacher stylen als {{HTMLElement("input")}}-Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und verwenden Sie {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudo-Elemente für komplexes Rendering.

Wenn Ihre Buttons nicht dazu dienen, Formulardaten an einen Server zu übermitteln, stellen Sie sicher, dass das `type`-Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) ausführen, wie z.B. das Entfernen eines Elements aus einer Liste.

Standardmäßig stylen User-Agents Buttons als `display: flow-root`, was einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) etabliert und die Kinder des Buttons sowohl horizontal als auch vertikal zentriert, solange sie nicht überfließen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Items. Ein Button, der auf `display: inline` gesetzt ist, wird stilisiert, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Icon-Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{Glossary("accessible_name", "zugänglichen Namen")}}_. Zugängliche Namen liefern Informationen für unterstützende Technologien, wie Screen Reader, auf die sie beim Parsen des Dokuments und Generieren [eines Barrierefreiheitsbaums](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) zugreifen können. Unterstützende Technologien verwenden dann den Barrierefreiheitsbaum, um Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon-Button einen zugänglichen Namen zu geben, setzen Sie Text in das `<button>`-Element, der die Funktionalität des Buttons kurz beschreibt.

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

Wenn Sie den Text des Buttons visuell ausblenden möchten, ist eine zugängliche Möglichkeit, dies zu tun, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um es optisch vom Bildschirm zu entfernen, aber gleichzeitig von unterstützenden Technologien parsierbar zu halten.

Es ist jedoch erwähnenswert, dass das Belassen des sichtbaren Button-Texts Menschen helfen kann, die möglicherweise mit der Bedeutung des Icons nicht vertraut sind oder den Zweck des Buttons nicht verstehen. Dies ist besonders wichtig für Menschen, die nicht technologisch versiert sind oder unterschiedliche kulturelle Interpretationen des von dem Button verwendeten Icons haben.

- [Was ist ein zugänglicher Name? | Vispero](https://vispero.com/resources/what-is-an-accessible-name/)
- [MDN Verständnis von WCAG, Richtlinie 4.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Verständnis des Erfolgskriteriums 4.1.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten eine ausreichend große Fläche haben, um leicht aktiviert werden zu können. Dies hilft verschiedenen Menschen, einschließlich Menschen mit motorischen Steuerungsproblemen und Menschen, die ungenauere Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 {{Glossary("CSS_pixel", "CSS-Pixeln")}} wird empfohlen.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen interaktiven Inhalts – einschließlich Buttons – die sich in naher visueller Nähe zueinander befinden, sollten durch Abstände getrennt sein. Diese Abstände sind nützlich für Menschen mit motorischen Steuerungsproblemen, die möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{cssxref("margin")}} erstellt werden.

- [Handzittern und das Riesenbuttonproblem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das korrekte ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zu verwenden und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Für weitere Informationen lesen Sie den Abschnitt über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role).

### Button-Stile

Es ist am besten, den Standard-Fokus-Ring für fokussierte Elemente nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokusszustand genügend Kontrast hat**, damit Menschen mit Sehbehinderungen ihn wahrnehmen können, und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudo-Klasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} hat, nur dann, wenn die Heuristiken den Fokus hervorheben sollten, z. B. wenn ein `<button>` Tastaturfokus erhält. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/Reference/Selectors/:focus-visible#focus_vs_focus-visible).

Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der Button-Text- und Hintergrundfarbwerte mit dem Hintergrund, auf dem der Button platziert ist, verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18.66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}}-Button-Typen dazu führt, dass er (standardmäßig) fokussiert wird, variiert je nach Browser und Betriebssystem. Die meisten Browser fokussieren einen geklickten Button, aber [Safari tut dies nicht, aus Designgründen](https://webkit.org/b/22261#c68).

## Beispiele

### Erstellen eines Basisbuttons

Dieses Beispiel erstellt einen anklickbaren Button.
Das `type="button"`-Attribut sorgt dafür, dass der Button kein Standardverhalten hat.
Sie können diesen Button mit JavaScript oder Attributen wie `command` und `commandfor` interaktiv machen.

```html
<button type="button" name="button">I'm a button</button>
```

{{ EmbedLiveSample('creating_a_basic_button', 200, 64) }}

### Verwendung des `request-close` Werts für das `command`-Attribut

Der Dialog in diesem Beispiel hat zwei Radio-Buttons, die steuern, ob der Dialog geschlossen werden kann oder nicht.
Wählen Sie **Ja** oder **Nein** und klicken Sie dann auf **Anfrage zum Schließen**, um zu versuchen, den Dialog zu schließen.
Wenn **Ja** gewählt ist, schließt sich der Dialog; wenn **Nein** gewählt ist, bleibt der Dialog offen und zeigt stattdessen eine Nachricht an.

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

Der **Anfrage zum Schließen**-Button hat `command="request-close"`, was über das `commandfor="mydialog"`-Attribut auf das `<dialog>`-Element abzielt. Wenn er angeklickt wird, fragt er das `<dialog>`, ob es geschlossen werden kann (im Gegensatz zum `command="close"`-Attribut, das das `<dialog>` sofort schließen würde).
Dies prüft, ob das `<dialog>` [abbrechbar](/de/docs/Web/API/Event/cancelable) ist, indem ein `cancel`-Ereignis verwendet wird.

Wenn das Ereignis `abbrechbar` ist, wird der Wert der Radio-Buttons überprüft:

- Wenn auf `ja` gesetzt, wird der Dialog geschlossen.
- Wenn auf `nein` gesetzt, wird das `hidden`-Attribut bei der Warnung ausgeschaltet und die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wird aufgerufen, was das Standardverhalten des `<dialog>` Schließens verhindert.

### Verwendung des `value`-Attributs mit dem `close`-Befehl des Dialogs

Dieses Beispiel zeigt, wie das `value`-Attribut des Buttons mit dem Befehl `close` verwendet wird, um den Wert der Eigenschaft [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) eines Dialogs zu befüllen.

Wenn entweder der **Abbrechen**- oder der **Löschen**-Button angeklickt wird, schließt sich der Dialog und setzt seinen `returnValue` auf das `value`-Attribut des Buttons.
Der `close`-Ereignis-Listener überprüft `dialog.returnValue`, um festzustellen, welche Aktion der Benutzer gewählt hat, und protokolliert das Ergebnis auf dem Bildschirm.

#### HTML

Das HTML definiert zunächst einen **Datensatz löschen**-Button, der das `commandfor`-Attribut verwendet, um den zu öffnenden Dialog anzugeben.

Innerhalb des Dialogs verwenden die **Abbrechen**- und **Löschen**-Buttons das `commandfor`-Attribut, um anzuzeigen, dass sie auf den aktuellen Dialog angewendet werden. Sie setzen auch das `command`-Attribut auf "close" und das `value`-Attribut jeweils auf "cancel" und "delete" – der Wert des ausgewählten Buttons wird automatisch in die `returnValue` des Dialogs kopiert, wenn der Button angeklickt wird.

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
          >Textinhalt</a
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
        >, and
        <a href="/de/docs/Web/HTML/Guides/Content_categories#submittable"
          >übertragbar</a
        >
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#form-associated_content"
          >formularassoziiertes</a
        >
        Element, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >
        aber es darf kein
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > sein. Wenn das <code>&lt;button&gt;</code> das erste Kind eines <a href="/de/docs/Learn_web_development/Extensions/Forms/Customizable_select">anpassbaren Selektelements</a> ist, dann kann es auch
   kein, ein oder mehrere {{htmlelement("selectedcontent")}}-Elemente enthalten.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
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
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
