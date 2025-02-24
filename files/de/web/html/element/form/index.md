---
title: "<form>: Das Formularelement"
slug: Web/HTML/Element/form
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Dokumentabschnitt, der interaktive Steuerelemente zur Übermittlung von Informationen enthält.

{{InteractiveExample("HTML Demo: &lt;form&gt;", "tabbed-standard")}}

```html interactive-example
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

```css interactive-example
form.form-example {
  display: table;
}

div.form-example {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 10px;
}
```

Es ist möglich, die CSS [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>`-Element basierend darauf zu gestalten, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Durch Kommas getrennte [Inhaltstypen](/de/docs/Web/SVG/Content_type), die vom Server akzeptiert werden.

    > **Note:** **Dieses Attribut wurde veraltet und sollte nicht verwendet werden.** Stattdessen sollte das [`accept`](/de/docs/Web/HTML/Element/input#accept) Attribut auf `<input type=file>` Elementen verwendet werden.

- `accept-charset`

  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichencodierung")}}.
    Die Spezifikation erlaubt einen einzelnen, nicht zwischen Groß- und Kleinschreibung unterscheidenden Wert von `"UTF-8"`, was die Allgegenwärtigkeit dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichencodierungen als Komma- oder Leerzeichenseparierte Liste spezifiziert werden).

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig automatisch durch den Browser mit ihren Werten vervollständigt werden können. `autocomplete` Attribute auf Formularelementen überschreiben es auf `<form>`. Mögliche Werte:

    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen. (Browser neigen dazu, dies bei vermuteten Anmeldeformularen zu ignorieren; siehe [Verwaltung der automatischen Vervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields)).
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenfolge sein und muss eindeutig unter den `form` Elementen in der Formularsammlung sein, in der es sich befindet, wenn vorhanden.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Steuert die Anmerkungen und welche Arten von Links das Formular erstellt. Anmerkungen umfassen [`external`](/de/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Attributes/rel#noreferrer). Linktypen umfassen [`help`](/de/docs/Web/HTML/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Attributes/rel) Wert ist eine durch Leerzeichen getrennte Liste dieser aufgezählten Werte.

### Attribute für Formularübermittlung

Die folgenden Attribute steuern das Verhalten während der Formularübermittlung.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Element/button#formaction) Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`

  - : Wenn der Wert des `method` Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}} Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich für Debugging-Zwecke.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype) Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP) Methode, mit der das Formular übermittelt wird.
    Die einzigen erlaubten Methoden/Werte sind (Groß-/Kleinschreibung unabhängig):

    - `post`: Die {{HTTPMethod("POST")}} Methode; Formulardaten werden als [Anfrageinhalt](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}}; Formulardaten werden mit einem `?` Separator an die `action` URL angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Seiteneffekte hat")}}.
    - `dialog`: Wenn das Formular innerhalb eines {{HTMLElement("dialog")}} ist, schließt der Dialog und löst ein `submit` Ereignis bei der Übermittlung aus, ohne Daten zu übermitteln oder das Formular zu leeren.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod) Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben.

- `novalidate`
  - : Dieses Boolesche Attribut gibt an, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und daher das Formular **_ist_** validiert), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Element/button#formnovalidate) Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element, das zum Formular gehört, überschrieben werden.
- `target`

  - : Gibt an, wo die Antwort nach der Übermittlung des Formulars angezeigt werden soll. Es ist ein Name/Stichwort für einen _Browsing-Kontext_ (z. B. Tab, Fenster oder iframe). Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Laden in denselben Browsing-Kontext wie der aktuelle.
    - `_blank`: Laden in einen neuen, unbenannten Browsing-Kontext. Dies bietet das gleiche Verhalten wie das Setzen von [`rel="noopener"`](#rel), das nicht [`window.opener`](/de/docs/Web/API/Window/opener) setzt.
    - `_parent`: Laden in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein Elternteil vorhanden ist, verhält sich gleich wie `_self`.
    - `_top`: Laden in den obersten Browsing-Kontext (d. h. der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn kein Elternteil vorhanden ist, verhält sich gleich wie `_self`.
    - `_unfencedTop`: Laden der Antwort von einem Formular innerhalb eines eingebetteten [eingezäunten Rahmens](/de/docs/Web/API/Fenced_frame_API) in das oberste Frame (d. h. über das Wurzel des umzäunten Rahmens hinausgehen, im Gegensatz zu anderen reservierten Zielen). Nur innerhalb umzäunter Rahmen verfügbar.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließende Inhalte</a>,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">spürbare Inhalte</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließende Inhalte</a>, jedoch ohne <code>&#x3C;form></code> Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließende Inhalte</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- Andere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Abrufen einer Liste der Elemente im Formular: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Rollenformular](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
