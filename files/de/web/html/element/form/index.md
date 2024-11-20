---
title: "<form>: Das Formularelement"
slug: Web/HTML/Element/form
l10n:
  sourceCommit: 56cbe48e4426172461d9297523b68716922690e5
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Dokumentenabschnitt, der interaktive Steuerelemente zum Übermitteln von Informationen enthält.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

Es ist möglich, die {{cssxref(':valid')}} und {{cssxref(':invalid')}} CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) zu verwenden, um ein `<form>`-Element zu gestalten, basierend darauf, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Durch Kommas getrennte [Inhaltstypen](/de/docs/Web/SVG/Content_type), die der Server akzeptiert.

    > **Note:** **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Stattdessen sollte das [`accept`](/de/docs/Web/HTML/Element/input#accept) Attribut auf `<input type=file>` Elementen verwendet werden.

- `accept-charset`

  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt einen einzelnen wertunabhängigen Wert von `"UTF-8"`, was die Allgegenwärtigkeit dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als durch Kommas oder Leerzeichen getrennte Liste angegeben werden).

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der Seite des globalen Attributs [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig automatisch vom Browser ausgefüllt werden können. `autocomplete` Attribute auf Formularelementen überschreiben es auf `<form>`. Mögliche Werte:

    - `off`: Der Browser darf Einträge nicht automatisch ausfüllen. (Browser neigen dazu, dies bei verdächtigen Anmeldeformularen zu ignorieren; siehe [Verwaltung von Autofill für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Einträge automatisch ausfüllen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenfolge sein und muss innerhalb der Formularelemente, in denen es sich befindet, eindeutig sein, falls vorhanden.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Steuert die Annotationen und welche Arten von Links das Formular erstellt. Zu den Annotationen gehören [`external`](/de/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Attributes/rel#noreferrer). Linktypen beinhalten [`help`](/de/docs/Web/HTML/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Attributes/rel) Wert ist eine durch Leerzeichen getrennte Liste dieser enumerierten Werte.

### Attribute zur Formularübermittlung

Die folgenden Attribute steuern das Verhalten während der Formularübermittlung.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann von einem [`formaction`](/de/docs/Web/HTML/Element/button#formaction) Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`

  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}} Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich zu Debugging-Zwecken.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype) Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP) Methode zur Übermittlung des Formulars.
    Die einzigen erlaubten Methoden/Werte sind (unabhängig von Groß-/Kleinschreibung):

    - `post`: Die {{HTTPMethod("POST")}} Methode; Formulardaten werden als [Request-Body](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}}; Formulardaten werden mit einem `?`-Separator an die `action`-URL angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat.
    - `dialog`: Wenn das Formular in einem {{HTMLElement("dialog")}} enthalten ist, schließt es den Dialog und verursacht ein `submit` Event bei der Übermittlung, ohne Daten zu übermitteln oder das Formular zu leeren.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod) Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben.

- `novalidate`
  - : Dieses boolesche Attribut gibt an, dass das Formular bei der Übermittlung nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und das Formular daher **_wird_** validiert), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Element/button#formnovalidate) Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element, das zum Formular gehört, überschrieben werden.
- `target`

  - : Gibt an, wo die Antwort nach Übermittlung des Formulars angezeigt werden soll. Es ist ein Name/Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder iframe). Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self` (Standard): In den gleichen Browsing-Kontext wie den aktuellen laden.
    - `_blank`: In einen neuen, unbenannten Browsing-Kontext laden. Dies bietet dasselbe Verhalten wie das Setzen von [`rel="noopener"`](#rel), das nicht [`window.opener`](/de/docs/Web/API/Window/opener) setzt.
    - `_parent`: In den übergeordneten Browsing-Kontext des aktuellen laden. Wenn kein übergeordneter vorhanden ist, verhält sich wie `_self`.
    - `_top`: In den obersten Browsing-Kontext laden (d. h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten hat). Wenn kein übergeordneter vorhanden ist, verhält sich wie `_self`.
    - `_unfencedTop`: Läd die Antwort eines Formulars innerhalb eines eingebetteten [fenced frame](/de/docs/Web/API/Fenced_frame_API) in das oberste Frame (d. h. über das Root des fenced frame hinausgehend, im Gegensatz zu anderen reservierten Zielen). Nur innerhalb von fenced frames verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Element/button#formtarget) Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element überschrieben werden.

## Beispiele

```html
<!-- Form which will send a GET request to the current URL -->
<form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Do you agree to the terms?</legend>
    <label><input type="radio" name="radio" value="yes" /> Yes</label>
    <label><input type="radio" name="radio" value="no" /> No</label>
  </fieldset>
</form>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">greifbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, darf jedoch keine <code>&#x3C;form></code> Elemente enthalten
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>,
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
         oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Formulare Leitfaden](/de/docs/Learn/Forms)
- Andere Elemente, die zur Erstellung von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Eine Liste der Elemente im Formular erhalten: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Formrolle](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
