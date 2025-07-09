---
title: "`<form>`: Das Formularelement"
slug: Web/HTML/Reference/Elements/form
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<form>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Abschnitt eines Dokuments, der interaktive Steuerungen zum Übermitteln von Informationen enthält.

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

Es ist möglich, die {{cssxref(':valid')}} und {{cssxref(':invalid')}} CSS-[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) zu verwenden, um ein `<form>`-Element basierend darauf zu stylen, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{deprecated_inline}}
  - : Komma-separierte [Inhaltstypen](/de/docs/Web/SVG/Guides/Content_type), die der Server akzeptiert.

    > [!NOTE]
    > **Dieses Attribut ist veraltet und sollte nicht mehr verwendet werden.** Stattdessen verwenden Sie das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut auf `<input type=file>`-Elementen.

- `accept-charset`
  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}. Die Spezifikation erlaubt einen einzelnen wertunabhängigen Wert von `"UTF-8"`, was die Allgegenwärtigkeit dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als komma- oder leerzeichengetrennte Liste angegeben werden).

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, wie. Weitere Informationen finden Sie auf der Seite des globalen Attributs [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Gibt an, ob Eingabefelder standardmäßig automatisch vom Browser vervollständigt werden können. `autocomplete`-Attribute auf Formularelementen überschreiben es auf `<form>`. Mögliche Werte:
    - `off`: Der Browser sollte Einträge nicht automatisch vervollständigen. (Browser neigen dazu, dies für vermutete Anmeldeformulare zu ignorieren. Siehe [Verwaltung der automatischen Vervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser kann Einträge automatisch vervollständigen.

- `name`
  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenfolge sein und muss innerhalb der `form`-Elemente der Formularsammlung eindeutig sein, in der es sich befindet, falls vorhanden. Der Name wird zu einer Eigenschaft der [`Window`](/de/docs/Web/API/Window)-, [`Document`](/de/docs/Web/API/Document)- und [`document.forms`](/de/docs/Web/API/Document/forms)-Objekte, die eine Referenz auf das Formularelement enthält.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Kontrolliert die Annotationen und welche Arten von Links das Formular erstellt. Annotationen umfassen [`external`](/de/docs/Web/HTML/Reference/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Reference/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Reference/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel#noreferrer). Link-Typen umfassen [`help`](/de/docs/Web/HTML/Reference/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Reference/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Reference/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Reference/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Reference/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Wert ist eine leerzeichengetrennte Liste dieser enumerierten Werte.

### Attribute für die Formularübermittlung

Die folgenden Attribute steuern das Verhalten bei der Formularübermittlung.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Reference/Elements/button#formaction)-Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`
  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich zu Debugging-Zwecken.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Reference/Elements/button#formenctype)-Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben werden.

- `method`
  - : Die [HTTP](/de/docs/Web/HTTP)-Methode zur Übermittlung des Formulars.
    Die einzigen erlaubten Methoden/Werte sind (unabhängig von der Großschreibung):
    - `post`: Die {{HTTPMethod("POST")}}-Methode; Formulardaten werden als [Anforderungskörper](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}}-Methode; Formulardaten werden an die `action`-URL mit einem `?`-Separator angehängt. Diese Methode sollte verwendet werden, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat.
    - `dialog`: Wenn das Formular in einem {{HTMLElement("dialog")}} ist, schließt es den Dialog und verursacht, dass ein `submit`-Ereignis bei der Übermittlung ausgelöst wird, ohne Daten zu übermitteln oder das Formular zu löschen.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Reference/Elements/button#formmethod)-Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben.

- `novalidate`
  - : Dieses boolesche Attribut gibt an, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn dieses Attribut nicht gesetzt ist (und das Formular daher validiert wird), kann dies durch ein [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/button#formnovalidate)-Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element, das zum Formular gehört, überschrieben werden.
- `target`
  - : Gibt an, wo die Antwort nach der Übermittlung des Formulars angezeigt werden soll. Es ist ein Name/Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder iframe). Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self` (Standard): In den gleichen Browsing-Kontext laden wie den aktuellen.
    - `_blank`: In einen neuen unbenannten Browsing-Kontext laden. Dies erzeugt dasselbe Verhalten wie das Setzen von [`rel="noopener"`](#rel), das [`window.opener`](/de/docs/Web/API/Window/opener) nicht festlegt.
    - `_parent`: In den übergeordneten Browsing-Kontext des aktuellen laden. Wenn kein Elternteil vorhanden ist, verhält sich wie `_self`.
    - `_top`: In den obersten Browsing-Kontext laden (d.h. der Browsing-Kontext, der ein Vorfahren des aktuellen ist und keinen Elternteil hat). Wenn kein Elternteil vorhanden ist, verhält sich wie `_self`.
    - `_unfencedTop`: Lädt die Antwort von einem Formular in einem eingebetteten [fenced frame](/de/docs/Web/API/Fenced_frame_API) in den obersten Rahmen (d.h. über die Wurzel des fenced frame hinaus, anders als andere reservierte Ziele). Nur innerhalb von fenced frames verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Reference/Elements/button#formtarget)-Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">greifbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, jedoch keine <code>&#x3C;form></code>-Elemente enthaltend
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der startende als auch der endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
        akzeptiert
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
- Andere Elemente, die bei der Erstellung von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Abrufen einer Liste der Elemente im Formular: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Formularrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
