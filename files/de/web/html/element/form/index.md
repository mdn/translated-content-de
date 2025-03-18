---
title: "<form>: Das Formularelement"
slug: Web/HTML/Element/form
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Dokumentabschnitt, der interaktive Steuerungen zur Übermittlung von Informationen enthält.

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

Es ist möglich, die CSS [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>` Element basierend darauf zu stylen, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Komma-getrennte [Inhaltstypen](/de/docs/Web/SVG/Guides/Content_type), die der Server akzeptiert.

    > **Hinweis:** **Dieses Attribut wurde als veraltet erklärt und sollte nicht verwendet werden.** Stattdessen verwenden Sie das [`accept`](/de/docs/Web/HTML/Element/input#accept) Attribut in `<input type=file>` Elementen.

- `accept-charset`

  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt einen einzelnen, nicht groß- und kleinschreibungsempfindlichen Wert von `"UTF-8"`, was die Allgegenwärtigkeit dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als Komma- oder Leerzeichen-getrennte Liste angegeben werden).

- `autocapitalize`

  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und in welcher Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig automatisch durch den Browser vervollständigt werden können. `autocomplete` Attribute in Formularelementen überschreiben das im `<form>`. Mögliche Werte:

    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen. (Browser neigen dazu, dies bei vermuteten Login-Formularen zu ignorieren; siehe [Verwalten von Autofill für Login-Felder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht der leere String sein und muss eindeutig innerhalb der `form` Elemente in der Formulareingebung sein, falls vorhanden.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Bestimmt die Annotationen und welche Arten von Links das Formular erstellt. Annotationen umfassen [`external`](/de/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Attributes/rel#noreferrer). Linktypen umfassen [`help`](/de/docs/Web/HTML/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Attributes/rel) Wert ist eine durch Leerzeichen getrennte Liste dieser enumerierten Werte.

### Attribute für das Absenden des Formulars

Die folgenden Attribute steuern das Verhalten beim Absenden des Formulars.

- `action`

  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann von einem [`formaction`](/de/docs/Web/HTML/Element/button#formaction) Attribut in einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.

- `enctype`

  - : Wenn der Wert des `method` Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}} Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich für Debug-Zwecke.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype) Attribute in {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP) Methode, mit der das Formular übermittelt wird.
    Die einzig erlaubten Methoden/Werte sind (nicht groß- und kleinschreibungsempfindlich):

    - `post`: Die {{HTTPMethod("POST")}} Methode; Formulardaten werden als [Anfrageinhalt](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}} Methode; Formulardaten werden an die `action` URL mit einem `?` Separator angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}.
    - `dialog`: Wenn sich das Formular in einem {{HTMLElement("dialog")}} befindet, schließt das Dialog und löst ein `submit` Ereignis bei der Übermittlung aus, ohne Daten zu senden oder das Formular zu leeren.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod) Attribute in {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben.

- `novalidate`

  - : Dieses boolesche Attribut gibt an, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und das Formular **_ist_** daher validiert), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Element/button#formnovalidate) Attribut in einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element, das zum Formular gehört, überschrieben werden.

- `target`

  - : Gibt an, wo die Antwort nach der Übermittlung des Formulars angezeigt werden soll. Es ist ein Name/Schlüsselwort für einen _Browsing-Kontext_ (z.B. Tab, Fenster, oder iframe). Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Lädt in denselben Browsing-Kontext wie der aktuelle.
    - `_blank`: Lädt in einen neuen, unbenannten Browsing-Kontext. Dies bietet das gleiche Verhalten wie das Setzen von [`rel="noopener"`](#rel), das [`window.opener`](/de/docs/Web/API/Window/opener) nicht setzt.
    - `_parent`: Lädt in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Lädt in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_unfencedTop`: Lädt die Antwort eines Formulars innerhalb eines eingebetteten [Eingezäunten Rahmens](/de/docs/Web/API/Fenced_frame_API) in den obersten Rahmen (d.h. über das Ende des eingegrenzten Rahmens hinaus, anders als bei anderen reservierten Zielen). Nur innerhalb von eingegrenzten Rahmen verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Element/button#formtarget) Attribut in einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element überschrieben werden.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>, jedoch ohne <code>&#x3C;form></code> Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließenden Inhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role">search</a></code>,
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
         oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
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
- Abrufen einer Liste von Elementen im Formular: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Form-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
