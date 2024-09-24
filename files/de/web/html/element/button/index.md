---
title: "<button>: Das Button-Element"
slug: Web/HTML/Element/button
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<button>`** [HTML](/de/docs/Web/HTML) Element ist ein interaktives Element, das von einer Benutzerin oder einem Benutzer mit Maus, Tastatur, Finger, Sprachbefehl oder anderer unterstützender Technologie aktiviert wird. Einmal aktiviert, führt es dann eine Aktion aus, wie zum Beispiel das Absenden eines [Forms](/de/docs/Learn/Forms) oder das Öffnen eines Dialogs.

Standardmäßig werden HTML-Buttons in einem Stil dargestellt, der dem der Plattform ähnelt, auf der der {{Glossary("user agent")}} läuft, aber Sie können das Erscheinungsbild von Buttons mit [CSS](/de/docs/Web/CSS) ändern.

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `autofocus`
  - : Dieses boolesche Attribut gibt an, dass der Button bei Ladebeginn der Seite den Eingabefokus haben sollte. **Nur ein Element in einem Dokument kann dieses Attribut besitzen.**
- [`disabled`](/de/docs/Web/HTML/Attributes/disabled)
  - : Dieses boolesche Attribut verhindert, dass der Benutzer oder die Benutzerin mit dem Button interagiert: Er kann nicht gedrückt oder fokussiert werden.
- `form`

  - : Das {{HTMLElement("form")}} Element, mit dem der Button verknüpft werden soll (sein _Formularbesitzer_). Der Wert dieses Attributs muss die `id` eines `<form>` im selben Dokument sein. (Falls dieses Attribut nicht gesetzt ist, wird der `<button>` mit seinem übergeordneten `<form>` Element verknüpft, sofern vorhanden.)

    Dieses Attribut ermöglicht es, `<button>` Elemente mit `<form>`s überall im Dokument zu verknüpfen, nicht nur innerhalb eines `<form>`. Es kann auch ein übergeordnetes `<form>` Element überschreiben.

- `formaction`
  - : Die URL, die die vom Button übermittelten Informationen bearbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action) Attribut des Formularbesitzers des Buttons. Macht nichts, wenn kein Formularbesitzer vorhanden ist.
- `formenctype`

  - : Wenn der Button ein Submit-Button ist (er befindet sich innerhalb/eines `<form>` zugeordnet und hat nicht `type="button"`), gibt er an, wie die übermittelten Formulardaten kodiert werden sollen. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert, falls das Attribut nicht verwendet wird.
    - `multipart/form-data`: Wird benutzt, um {{HTMLElement("input")}} Elemente mit ihrem [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf `file` zu übermitteln.
    - `text/plain`: Wird als Debugging-Hilfe angegeben und sollte nicht für echte Formularübermittlungen verwendet werden.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des Formularbesitzers des Buttons.

- `formmethod`

  - : Wenn der Button ein Submit-Button ist (er befindet sich innerhalb/eines `<form>` zugeordnet und hat nicht `type="button"`), gibt dieses Attribut die verwendete [HTTP-Methode](/de/docs/Web/HTTP/Methods) zur Übermittlung des Formulars an. Mögliche Werte:

    - `post`: Die Daten aus dem Formular werden im Körper der HTTP-Anfrage an den Server gesendet. Verwenden, wenn das Formular Informationen enthält, die nicht öffentlich sein sollten, wie Anmeldedaten.
    - `get`: Die Formulardaten werden an die `action` URL des Formulars angehängt, mit einem `?` als Trennzeichen, und die resultierende URL wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular [keine Seiteneffekte hat](/de/docs/Glossary/Idempotent), wie zum Beispiel Suchformulare.
    - `dialog`: Diese Methode wird verwendet, um anzuzeigen, dass der Button den [Dialog](/de/docs/Web/HTML/Element/dialog) schließt, mit dem er verknüpft ist, und die Formulardaten überhaupt nicht übermittelt.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method) Attribut des Formularbesitzers des Buttons.

- `formnovalidate`

  - : Wenn der Button ein Submit-Button ist, gibt dieses boolesche Attribut an, dass das Formular nicht [validiert](/de/docs/Learn/Forms/Form_validation) wird, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut des Formularbesitzers des Buttons.

    Dieses Attribut steht auch auf [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) und [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) Elementen zur Verfügung.

- `formtarget`

  - : Wenn der Button ein Submit-Button ist, ist dieses Attribut ein vom Autor festgelegter Name oder ein standardisiertes, unterstrichenes Schlüsselwort, das angibt, wo die Antwort auf das Absenden des Formulars angezeigt werden soll. Dies ist der `name` oder das Schlüsselwort für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target) Attribut des Formularbesitzers des Buttons. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie der aktuelle. Dies ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext — in der Regel ein neuer Tab oder ein Fenster, abhängig von den Einstellungen des Benutzers oder der Benutzerin.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein Elternteil vorhanden ist, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den Browsing-Kontext auf oberster Ebene (das heißt, der Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Elternteil hat). Wenn kein Elternteil vorhanden ist, verhält sich diese Option wie `_self`.

- `name`

  - : Der Name des Buttons, der als Paar mit dem `value` des Buttons als Teil der Formulardaten übermittelt wird, wenn dieser Button zum Absenden des Formulars verwendet wird.

- `popovertarget`

  - : Wandelt ein `<button>` Element in einen Steuerungs-Button für Popover um; nimmt als Wert die ID des zu steuernden Popover-Elements. Weitere Details finden Sie auf der {{domxref("Popover API", "Popover API", "", "nocode")}} Landing Page.

- `popovertargetaction`

  - : Gibt die auf ein gesteuertes Popover-Element durch einen Steuer-`<button>` auszuführende Aktion an. Mögliche Werte sind:

    - `"hide"`
      - : Der Button wird ein angezeigtes Popover verstecken. Wenn Sie versuchen, ein bereits verstecktes Popover zu verstecken, wird keine Aktion ausgeführt.
    - `"show"`
      - : Der Button wird ein verstecktes Popover anzeigen. Wenn Sie versuchen, ein bereits angezeigtes Popover anzuzeigen, wird keine Aktion ausgeführt.
    - `"toggle"`
      - : Der Button wird ein Popover zwischen angezeigt und versteckt umschalten. Wenn das Popover versteckt ist, wird es angezeigt; wenn das Popover angezeigt wird, wird es versteckt. Wenn `popovertargetaction` weggelassen wird, ist `"toggle"` die Standardaktion, die vom Steuerungs-Button ausgeführt wird.

- `type`

  - : Das Standardverhalten des Buttons. Mögliche Werte sind:

    - `submit`: Der Button übermittelt die Formulardaten an den Server. Dies ist der Standard, wenn das Attribut für Buttons, die mit einem `<form>` verknüpft sind, nicht angegeben ist oder wenn das Attribut leer oder ungültig ist.
    - `reset`: Der Button setzt alle Steuerungselemente auf ihre Anfangswerte zurück, wie [\<input type="reset">](/de/docs/Web/HTML/Element/input/reset). (Dieses Verhalten neigt dazu, Benutzer oder Benutzerinnen zu verärgern.)
    - `button`: Der Button hat kein Standardverhalten und macht nichts, wenn er gedrückt wird. Er kann client-seitige Skripte haben, die auf die Ereignisse des Elements hören, die bei Eintreten der Ereignisse ausgelöst werden.

- `value`
  - : Definiert den Wert, der mit dem `name` des Buttons verbunden ist, wenn er mit den Formulardaten übermittelt wird. Dieser Wert wird als Parameter übergeben, wenn das Formular mit diesem Button übermittelt wird.

## Hinweise

Ein Submit-Button mit dem gesetzten Attribut `formaction`, aber ohne ein zugeordnetes Formular, macht nichts. Sie müssen einen Formulareigentümer festlegen, entweder indem Sie ihn in ein `<form>` einbetten oder das Attribut `form` auf die ID des Formulars setzen.

`<button>` Elemente sind viel einfacher zu stylen als {{HTMLElement("input")}} Elemente. Sie können inneren HTML-Inhalt hinzufügen (denken Sie an `<i>`, `<br>` oder sogar `<img>`), und {{Cssxref("::after")}} und {{Cssxref("::before")}} Pseudoelemente für komplexes Rendering verwenden.

Wenn Ihre Buttons nicht zum Übermitteln von Formulardaten an einen Server gedacht sind, sollten Sie sicherstellen, dass ihr `type` Attribut auf `button` gesetzt ist. Andernfalls versuchen sie, Formulardaten zu übermitteln und die (nicht vorhandene) Antwort zu laden, was möglicherweise den aktuellen Zustand des Dokuments zerstört.

Während `<button type="button">` kein Standardverhalten hat, können Ereignishandler geskriptet werden, um Verhaltensweisen auszulösen. Ein aktivierter Button kann programmierbare Aktionen mit [JavaScript](/de/docs/Learn/JavaScript) ausführen, wie zum Beispiel das Entfernen eines Elements aus einer Liste.

Standardmäßig gestalten Benutzeragenten Buttons als `display: flow-root`, was einen neuen [Block formatierenden Kontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) etabliert und die Kinder im Button sowohl horizontal als auch vertikal zentriert, solange sie nicht überlaufen. Wenn der Button als Flex- oder Grid-Container definiert ist, verhalten sich die Kinder als Flex- oder Grid-Items. Ein Button, der auf `display: inline` eingestellt ist, wird so gestylt, als wäre der Wert auf `display: inline-block` gesetzt.

## Barrierefreiheit

### Icon Buttons

Buttons, die nur ein Icon anzeigen, haben keinen _{{glossary("accessible name")}}_. Barrierefreie Namen bieten Informationen für unterstützende Technologien, wie Screenreadern, um darauf zuzugreifen, wenn sie das Dokument parsen und [einen Barrierefreiheit-Baum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) generieren. Unterstützende Technologien verwenden dann den Barrierefreiheit-Baum, um Seiteninhalte zu navigieren und zu manipulieren.

Um einem Icon Button einen barrierefreien Namen zu geben, fügen Sie Text im `<button>` Element ein, der die Funktionalität des Buttons prägnant beschreibt.

#### Beispiele

```html
<button name="favorite">
  <svg aria-hidden="true" viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
  </svg>
  In Favoriten aufnehmen
</button>
```

##### Ergebnis

{{EmbedLiveSample('Icon buttons')}}

Wenn Sie den Text des Buttons visuell verstecken möchten, ist es auf zugängliche Weise möglich, [eine Kombination von CSS-Eigenschaften](https://www.a11yproject.com/posts/how-to-hide-content/) zu verwenden, um ihn visuell vom Bildschirm zu entfernen, aber weiterhin von unterstützenden Technologien parsbar zu halten.

Es ist jedoch auch zu beachten, dass das Sichtbarlassen des Button-Textes Menschen helfen kann, die möglicherweise mit der Bedeutung des Icons nicht vertraut sind oder den Zweck des Buttons verstehen müssen. Dies ist besonders wichtig für Menschen, die technisch nicht versiert sind oder unterschiedliche kulturelle Interpretationen des vom Button verwendeten Icons haben können.

- [Was ist ein barrierefreier Name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Verständnis WCAG, Guideline 4.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_kompatibel_die_kompatibilität_mit_aktuellen_und_zukunftigen_benutzeragenten_einschließlich_unterstützender_technologien_maximieren)
- [Erklärung des Erfolgskriteriums 4.1.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Buttons sollten über eine ausreichend große Fläche verfügen, um einfach aktiviert werden zu können. Dies hilft einer Vielzahl von Menschen, einschließlich Menschen mit motorischen Steuerungsproblemen und Menschen, die ungenauere Eingabemethoden wie einen Stift oder Finger verwenden. Eine minimale interaktive Größe von 44×44 [CSS-Pixel](/de/docs/Glossary/CSS_pixel) wird empfohlen.

- [Erklärung des Erfolgskriteriums 2.5.5: Zielgröße | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele - Das A11Y-Projekt](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Große Mengen an interaktiven Inhalten — einschließlich Buttons — in engem visuellen Abstand zueinander sollten durch Leerraum getrennt sein. Dieser Abstand ist vorteilhaft für Menschen, die motorische Steuerungsprobleme haben und versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstand lässt sich durch CSS-Eigenschaften wie {{cssxref("margin")}} erzeugen.

- [Handzittern und das Riesen-Button-Problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA-Zustandsinformationen

Um den Zustand eines Buttons zu beschreiben, ist das richtige ARIA-Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) und nicht [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) oder [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Weitere Informationen finden Sie auf der Seite über die [ARIA-Button-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role).

### Button-Stile

Es ist am besten, den standardmäßigen Fokus-Ring für Elemente, die den Fokus haben, nicht zu überschreiben. Wenn die Button-Stile überschrieben werden, ist es wichtig, **sicherzustellen, dass der Fokuszustand genügend Kontrast hat**, damit Menschen mit geringer Sehkraft ihn wahrnehmen können und Menschen mit kognitiven Unterschieden ihn verstehen.

Die {{cssxref(":focus-visible")}} Pseudoklasse kann verwendet werden, um Stile auf ein Element anzuwenden, das {{cssxref(":focus")}} nur dann hat, wenn die Heuristiken des Benutzeragents bestimmen, dass der Fokus hervorgehoben werden sollte, wie zum Beispiel wenn ein `<button>` per Tastaturfokus erreicht wird. Weitere Informationen finden Sie unter [:focus vs :focus-visible](/de/docs/Web/CSS/:focus-visible#focus_vs_focus-visible).

Das Kontrastverhältnis der Farben wird durch den Vergleich der Leuchtkraft der Button-Text- und Hintergrundfarbenwerte mit dem Hintergrund bestimmt, auf dem sich der Button befindet. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4,5:1 für Textinhalt und 3:1 für großen Text erforderlich. (Großer Text ist definiert als 18,66px und {{cssxref("font-weight", "bold")}} oder größer, oder 24px oder größer.)

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_mache_es_benutzern_einfacher_inhalte_zu_sehen_und_zu_hören_indem_der_vordergrund_vom_hintergrund_getrennt_wird)
- [Erklärung des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Klicken und Fokus

Ob das Klicken auf einen `<button>` oder {{HTMLElement("input")}} Buttontypen ihn (standardmäßig) fokussiert, variiert je nach Browser und Betriebssystem. Die meisten Browser geben einem angeklickten Button den Fokus, aber [Safari tut dies aus Designgründen nicht](https://webkit.org/b/22261).

## Beispiele

```html
<button name="button">Drücken Sie mich</button>
```

{{ EmbedLiveSample('Example', 200, 64) }}

## Technische Übersicht

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_listed"
          >gelistet</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#form_labelable"
          >beschriftungsfähig</a
        >, und
        <a href="/de/docs/Web/HTML/Content_categories#form_submittable"
          >einsendbar</a
        >
        <a
          href="/de/docs/Web/HTML/Content_categories#form-associated_content"
          >formular-assoziiertes</a
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
        aber es darf kein
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        >
        sein
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
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
