---
title: "<form>: Das Formularelement"
slug: Web/HTML/Reference/Elements/form
l10n:
  sourceCommit: 41018309bf920684054c0c2d81d362365b543493
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Dokumentabschnitt, der interaktive Steuerelemente für das Übermitteln von Informationen enthält.

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

Es ist möglich, die CSS [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>`-Element basierend darauf zu stylen, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{deprecated_inline}}
  - : Komma-separierte [Inhaltstypen](/de/docs/Web/SVG/Guides/Content_type), die der Server akzeptiert.

    > [!NOTE]
    > **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Stattdessen sollte das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut bei `<input type=file>`-Elementen verwendet werden.

- `accept-charset`
  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt einen einzelnen, nicht auf Groß- und Kleinschreibung achtenden Wert von `"UTF-8"`, was der Verbreitung dieser Kodierung entspricht (historisch konnten mehrere Zeichenkodierungen als komma- oder leerzeichengetrennte Liste angegeben werden).

- `autocapitalize`
  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite des globalen Attributs [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Gibt an, ob Eingabeelemente standardmäßig automatisch von der Browserautomatik vervollständigt werden können. `autocomplete`-Attribute bei Formularelementen überschreiben dies bei `<form>`. Mögliche Werte:
    - `off`: Der Browser darf Eingaben nicht automatisch vervollständigen. (Browser neigen dazu, dies bei vermuteten Anmeldeformularen zu ignorieren; siehe [Verwaltung des automatischen Ausfüllens für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser kann Eingaben automatisch vervollständigen.

- `name`
  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenfolge sein und muss in der Formularsammlung, zu der es gehört, eindeutig unter den `form`-Elementen sein, falls vorhanden. Der Name wird zu einer Eigenschaft des [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`document.forms`](/de/docs/Web/API/Document/forms)-Objekte, die eine Referenz auf das Formularelement enthält.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Bestimmt die Annotationen und welche Arten von Links das Formular erstellt. Annotationen umfassen [`external`](/de/docs/Web/HTML/Reference/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Reference/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Reference/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel#noreferrer). Linktypen umfassen [`help`](/de/docs/Web/HTML/Reference/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Reference/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Reference/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Reference/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Reference/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Wert ist eine mit Leerzeichen getrennte Liste dieser aufgezählten Werte.

### Attribute für das Absenden des Formulars

Die folgenden Attribute steuern das Verhalten beim Absenden des Formulars.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein Attribut [`formaction`](/de/docs/Web/HTML/Reference/Elements/button#formaction) bei einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` festgelegt ist.
- `enctype`
  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich zu Debuggingzwecken.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Reference/Elements/button#formenctype)-Attribute bei {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben werden.

- `method`
  - : Die [HTTP](/de/docs/Web/HTTP)-Methode, mit der das Formular übermittelt werden soll.
    Die einzigen erlaubten Methoden/Werte sind (unabhängig von Groß- und Kleinschreibung):
    - `post`: Die {{HTTPMethod("POST")}}-Methode; Formulardaten werden als [Request Body](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}}; Formulardaten werden an die `action`-URL mit einem `?`-Trenner angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}.
    - `dialog`: Wenn das Formular sich in einem {{HTMLElement("dialog")}} befindet, schließt es den Dialog und löst ein `submit`-Ereignis bei der Einreichung aus, ohne Daten zu übermitteln oder das Formular zu löschen.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Reference/Elements/button#formmethod)-Attribute bei {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben.

- `novalidate`
  - : Dieses Boolean-Attribut gibt an, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und daher das Formular **_validiert_** wird), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/button#formnovalidate)-Attribut bei einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element, das zum Formular gehört, überschrieben werden.
- `target`
  - : Gibt an, wo die Antwort nach dem Absenden des Formulars angezeigt wird. Es ist ein Name/Stichwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder iframe). Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self` (Standard): Laden in den gleichen Browsing-Kontext wie den aktuellen.
    - `_blank`: Laden in einen neuen, unbenannten Browsing-Kontext. Dies bietet dasselbe Verhalten wie die Einstellung von [`rel="noopener"`](#rel), die [`window.opener`](/de/docs/Web/API/Window/opener) nicht setzt.
    - `_parent`: Laden in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter vorhanden ist, verhält sich gleich wie `_self`.
    - `_top`: Laden in den obersten Browsing-Kontext (d.h. der Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen übergeordneten hat). Wenn kein übergeordneter vorhanden ist, verhält sich gleich wie `_self`.
    - `_unfencedTop`: Laden der Antwort von einem Formular innerhalb eines eingebetteten [fenced frame](/de/docs/Web/API/Fenced_frame_API) in den obersten Frame (d.h. über die Wurzel des Fenced Frame hinausgehend, im Gegensatz zu anderen reservierten Zielen). Nur innerhalb von Fenced Frames verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Reference/Elements/button#formtarget)-Attribut bei einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbare Inhalte</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a>, aber keine <code>&#x3C;form></code>-Elemente enthalten
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
- Abrufen einer Liste der Elemente im Formular: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Form Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
