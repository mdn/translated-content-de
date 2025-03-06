---
title: "<form>: Das Formularelement"
slug: Web/HTML/Element/form
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<form>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert einen Abschnitt eines Dokuments, der interaktive Steuerelemente zum Übermitteln von Informationen enthält.

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

Es ist möglich, die {{cssxref(':valid')}} und {{cssxref(':invalid')}} CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) zu verwenden, um ein `<form>`-Element basierend auf der Gültigkeit der [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars zu gestalten.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Durch Kommatas getrennte [Inhaltstypen](/de/docs/Web/SVG/Content_type), die der Server akzeptiert.

    > **Note:** **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Verwenden Sie stattdessen das [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut bei `<input type=file>`-Elementen.

- `accept-charset`

  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt einen einzigen ge- und kleinschreibungsunabhängigen Wert von `"UTF-8"`, was die Allgegenwart dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als komma- oder leerzeichengetrennte Liste angegeben werden).

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite zum [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)-Globalattribut.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig automatisch vom Browser ihre Werte vervollständigen können. `autocomplete`-Attribute bei Formularelementen überschreiben dies bei `<form>`. Mögliche Werte:

    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen. (Browser neigen dazu, dies bei vermuteten Anmeldeformularen zu ignorieren; siehe [Verwaltung der automatischen Vervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenfolge sein und muss einzigartig unter den `form`-Elementen in der Formularkollektion sein, in der es sich befindet, falls vorhanden.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Regelt die Anmerkungen und welche Arten von Links das Formular erstellt. Anmerkungen umfassen [`external`](/de/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Attributes/rel#noreferrer). Linktypen umfassen [`help`](/de/docs/Web/HTML/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Attributes/rel)-Wert ist eine durch Leerzeichen getrennte Liste dieser aufgezählten Werte.

### Attribute für Formularübermittlung

Die folgenden Attribute steuern das Verhalten während der Formularübermittlung.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Element/button#formaction)-Attribut bei einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`

  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://de.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich für Debugging-Zwecke.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype)-Attribute bei {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Elementen überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP)-Methode, mit der das Formular übermittelt wird.
    Die einzigen erlaubten Methoden/Werte sind (unabhängig von Groß- und Kleinschreibung):

    - `post`: Die {{HTTPMethod("POST")}}-Methode; Formulardaten werden als [Anfrageinhalt](/de/docs/Web/API/Request/body) gesendet.
    - `get` (standardmäßig): Die {{HTTPMethod("GET")}}-Methode; Formulardaten werden an die `action`-URL mit einem `?`-Trennzeichen angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte hat")}}.
    - `dialog`: Wenn das Formular in einem {{HTMLElement("dialog")}} ist, wird der Dialog geschlossen und ein `submit`-Ereignis bei der Übermittlung ausgelöst, ohne Daten zu übermitteln oder das Formular zu leeren.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod)-Attribute bei {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Elementen überschrieben.

- `novalidate`
  - : Dieses boolesche Attribut gibt an, dass das Formular bei der Übermittlung nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und das Formular daher validiert **wird**), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Element/button#formnovalidate)-Attribut bei einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Element, das zum Formular gehört, überschrieben werden.
- `target`

  - : Gibt an, wo die Antwort nach der Formularübermittlung angezeigt wird. Es ist ein Name oder Schlüsselwort für einen _Browsing-Kontext_ (z. B. Tab, Fenster oder iframe). Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (standardmäßig): In denselben Browsing-Kontext wie den aktuellen laden.
    - `_blank`: In einem neuen, unbenannten Browsing-Kontext laden. Dies bietet dasselbe Verhalten wie das Setzen von [`rel="noopener"`](#rel), was [`window.opener`](/de/docs/Web/API/Window/opener) nicht setzt.
    - `_parent`: In den übergeordneten Browsing-Kontext des aktuellen laden. Hat keine übergeordnete Ebene, verhält sich wie `_self`.
    - `_top`: In den obersten Browsing-Kontext laden (d. h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Hat keine übergeordnete Ebene, verhält sich wie `_self`.
    - `_unfencedTop`: Lädt die Antwort eines Formulars in einem eingebetteten [fenced frame](/de/docs/Web/API/Fenced_frame_API) in den obersten Frame (d. h. über das Wurzelverzeichnis des eingerahmten Rahmen hinausgehend, im Gegensatz zu anderen reservierten Zielen). Nur verfügbar in eingerahmten Rahmen.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Element/button#formtarget)-Attribut bei einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Element überschrieben werden.

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
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">greifbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>, jedoch ohne <code>&#x3C;form></code>-Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
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

- [HTML-Formularleitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- Andere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Eine Liste der Elemente im Formular abrufen: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Formrole](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
