---
title: HTML-Formularelement `<form>`
short-title: <form>
slug: Web/HTML/Reference/Elements/form
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das **`<form>`**-Element von [HTML](/de/docs/Web/HTML) stellt einen Dokumentabschnitt mit interaktiven Steuerelementen zum Übermitteln von Informationen dar.

Mit den CSS-[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} können Sie ein `<form>`-Element abhängig davon gestalten, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

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

```js interactive-example
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
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

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{deprecated_inline}}
  - : Eine durch Kommas getrennte Liste der [Inhaltstypen](/de/docs/Web/SVG/Guides/Content_type), die der Server akzeptiert.

    > [!NOTE]
    > **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Verwenden Sie stattdessen das Attribut [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) für `<input type=file>`-Elemente.

- `accept-charset`
  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt nur den einzelnen Wert `"UTF-8"` ohne Berücksichtigung der Groß- und Kleinschreibung. Dies spiegelt die weite Verbreitung dieser Kodierung wider (früher konnten mehrere Zeichenkodierungen als durch Kommas oder Leerzeichen getrennte Liste angegeben werden).

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Gibt an, ob der Browser die Werte von Eingabeelementen standardmäßig automatisch vervollständigen darf. `autocomplete`-Attribute an Formularelementen haben Vorrang vor dem Attribut am `<form>`-Element. Mögliche Werte:
    - `off`: Der Browser darf Eingaben nicht automatisch vervollständigen. (Browser ignorieren dies bei mutmaßlichen Anmeldeformularen häufig; siehe [Autofill für Anmeldefelder verwalten](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Eingaben automatisch vervollständigen.

- `name`
  - : Der Name des Formulars. Der Wert darf keine leere Zeichenfolge sein und muss innerhalb der `form`-Elemente in der zugehörigen Formularsammlung, sofern vorhanden, eindeutig sein. Der Name wird zu einer Eigenschaft der Objekte [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`document.forms`](/de/docs/Web/API/Document/forms), die eine Referenz auf das Formularelement enthält.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Steuert die Annotationen und die Arten von Links, die das Formular erstellt. Zu den Annotationen gehören [`external`](/de/docs/Web/HTML/Reference/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Reference/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Reference/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel#noreferrer). Zu den Linktypen gehören [`help`](/de/docs/Web/HTML/Reference/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Reference/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Reference/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Reference/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Reference/Attributes/rel#license). Der Wert von [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) ist eine durch Leerzeichen getrennte Liste dieser Werte.

### Attribute für die Formularübermittlung

Die folgenden Attribute steuern das Verhalten bei der Übermittlung des Formulars.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Reference/Elements/button#formaction)-Attribut an einem {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` festgelegt ist.
- `enctype`
  - : Wenn das Attribut `method` den Wert `post` hat, gibt `enctype` den [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung an. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie diesen Wert, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich für die Fehlersuche.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Reference/Elements/button#formenctype)-Attribute an {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben werden.

- `method`
  - : Die [HTTP](/de/docs/Web/HTTP)-Methode, mit der das Formular übermittelt wird.
    Zulässig sind ausschließlich die folgenden Methoden beziehungsweise Werte (ohne Berücksichtigung der Groß- und Kleinschreibung):
    - `post`: Die Methode {{HTTPMethod("POST")}}; die Formulardaten werden als [Anfragetext](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standardwert): Die Methode {{HTTPMethod("GET")}}; die Formulardaten werden mit `?` als Trennzeichen an die `action`-URL angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}.
    - `dialog`: Wenn sich das Formular innerhalb eines {{HTMLElement("dialog")}} befindet, wird der Dialog bei der Übermittlung geschlossen und ein `submit`-Ereignis ausgelöst, ohne Daten zu übermitteln oder das Formular zurückzusetzen.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Reference/Elements/button#formmethod)-Attribute an {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben.

- `novalidate`
  - : Dieses boolesche Attribut gibt an, dass das Formular bei der Übermittlung nicht validiert werden soll. Wenn das Attribut nicht gesetzt ist (und das Formular daher **_validiert wird_**), kann dies durch ein [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/button#formnovalidate)-Attribut an einem zum Formular gehörenden {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden.
- `target`
  - : Gibt an, wo die Antwort nach der Formularübermittlung angezeigt wird. Der Wert ist ein Name oder Schlüsselwort für einen _Browsing-Kontext_ (beispielsweise einen Tab, ein Fenster oder ein iframe). Die folgenden Schlüsselwörter haben eine besondere Bedeutung:
    - `_self` (Standardwert): Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies bewirkt dasselbe wie das Festlegen von [`rel="noopener"`](#rel), wodurch [`window.opener`](/de/docs/Web/API/Window/opener) nicht gesetzt wird.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen Kontexts. Wenn es keinen übergeordneten Kontext gibt, verhält sich dieser Wert wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (also den Browsing-Kontext, der ein Vorfahre des aktuellen Kontexts ist und selbst keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält sich dieser Wert wie `_self`.
    - `_unfencedTop`: Lädt die Antwort eines Formulars innerhalb eines eingebetteten [fenced frame](/de/docs/Web/API/Fenced_frame_API) in den obersten Frame (also über die Wurzel des fenced frame hinaus, anders als bei anderen reservierten Zielkontexten). Nur innerhalb von fenced frames verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Reference/Elements/button#formtarget)-Attribut an einem {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden.

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

```js hidden
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>, jedoch ohne <code>&#x3C;form></code>-Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> akzeptiert
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

- [Leitfaden für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Weitere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Liste der Elemente im Formular abrufen: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Rolle „form“](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Rolle „search“](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
