---
title: HTML-Formularelement `<form>`
short-title: <form>
slug: Web/HTML/Reference/Elements/form
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

Das [HTML](/de/docs/Web/HTML)-Element **`<form>`** repräsentiert einen Dokumentabschnitt, der interaktive Steuerelemente zum Übermitteln von Informationen enthält.

Es ist möglich, die CSS-[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>`-Element danach zu gestalten, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

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

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{deprecated_inline}}
  - : Durch Kommas getrennte [Inhaltstypen](/de/docs/Web/SVG/Guides/Content_type), die der Server akzeptiert.

    > [!NOTE]
    > **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Verwenden Sie stattdessen das Attribut [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) für `<input type=file>`-Elemente.

- `accept-charset`
  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt einen einzelnen Wert ohne Beachtung der Groß- und Kleinschreibung, `"UTF-8"`, was die weite Verbreitung dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als durch Kommas oder Leerzeichen getrennte Liste angegeben werden).

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Gibt an, ob Eingabeelemente ihre Werte standardmäßig automatisch durch den Browser vervollständigen lassen können. `autocomplete`-Attribute auf Formularelementen überschreiben es auf `<form>`. Mögliche Werte:
    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen. (Browser ignorieren dies bei vermuteten Anmeldeformularen häufig; siehe [Autofill für Anmeldefelder verwalten](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`
  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenkette sein und muss unter den `form`-Elementen in der Formularsammlung, der es gegebenenfalls angehört, eindeutig sein. Der Name wird zu einer Eigenschaft der Objekte [`Window`](/de/docs/Web/API/Window), [`Document`](/de/docs/Web/API/Document) und [`document.forms`](/de/docs/Web/API/Document/forms), die eine Referenz auf das Formularelement enthält.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Steuert die Anmerkungen und welche Arten von Links das Formular erstellt. Zu den Anmerkungen gehören [`external`](/de/docs/Web/HTML/Reference/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Reference/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Reference/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel#noreferrer). Zu den Linktypen gehören [`help`](/de/docs/Web/HTML/Reference/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Reference/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Reference/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Reference/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Reference/Attributes/rel#license). Der Wert von [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) ist eine durch Leerzeichen getrennte Liste dieser aufgezählten Werte.

### Attribute für die Formularübermittlung

Die folgenden Attribute steuern das Verhalten bei der Formularübermittlung.

- `action`
  - : Die URL, welche die Formularübermittlung verarbeitet. Dieser Wert kann durch ein Attribut [`formaction`](/de/docs/Web/HTML/Reference/Elements/button#formaction) auf einem {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`
  - : Wenn der Wert des Attributs `method` `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich für Debugging-Zwecke.

    Dieser Wert kann durch Attribute [`formenctype`](/de/docs/Web/HTML/Reference/Elements/button#formenctype) auf {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben werden.

- `method`
  - : Die [HTTP](/de/docs/Web/HTTP)-Methode, mit der das Formular übermittelt wird.
    Die einzigen erlaubten Methoden/Werte sind (Groß- und Kleinschreibung wird nicht berücksichtigt):
    - `post`: Die Methode {{HTTPMethod("POST")}}; Formulardaten werden als [Request-Body](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die Methode {{HTTPMethod("GET")}}; Formulardaten werden mit einem `?` als Trennzeichen an die `action`-URL angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}.
    - `dialog`: Wenn sich das Formular innerhalb eines {{HTMLElement("dialog")}} befindet, wird der Dialog geschlossen und bei der Übermittlung ein `submit`-Ereignis ausgelöst, ohne Daten zu übermitteln oder das Formular zu leeren.

    Dieser Wert wird durch Attribute [`formmethod`](/de/docs/Web/HTML/Reference/Elements/button#formmethod) auf {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben.

- `novalidate`
  - : Dieses boolesche Attribut gibt an, dass das Formular bei der Übermittlung nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und das Formular daher **_validiert wird_**), kann es durch ein Attribut [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/button#formnovalidate) auf einem zum Formular gehörenden {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden.
- `target`
  - : Gibt an, wo die Antwort nach der Formularübermittlung angezeigt werden soll. Es ist ein Name/Schlüsselwort für einen _Browsing-Kontext_ (beispielsweise einen Tab, ein Fenster oder ein iframe). Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self` (Standard): Im selben Browsing-Kontext wie dem aktuellen laden.
    - `_blank`: In einem neuen unbenannten Browsing-Kontext laden. Dies bietet dasselbe Verhalten wie das Setzen von [`rel="noopener"`](#rel), wodurch [`window.opener`](/de/docs/Web/API/Window/opener) nicht gesetzt wird.
    - `_parent`: Im übergeordneten Browsing-Kontext des aktuellen laden. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Im Browsing-Kontext der obersten Ebene laden (d.h. im Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen übergeordneten Kontext hat). Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_unfencedTop`: Die Antwort eines Formulars innerhalb eines eingebetteten [Fenced Frame](/de/docs/Web/API/Fenced_frame_API) im Frame der obersten Ebene laden (d.h. über die Wurzel des Fenced Frame hinausgehend, anders als bei anderen reservierten Zielen). Nur innerhalb von Fenced Frames verfügbar.

    Dieser Wert kann durch ein Attribut [`formtarget`](/de/docs/Web/HTML/Reference/Elements/button#formtarget) auf einem {{HTMLElement("button")}}-, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">wahrnehmbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>, jedoch ohne <code>&#x3C;form></code>-Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>
        akzeptiert
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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- Andere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Eine Liste der Elemente im Formular abrufen: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Form-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
