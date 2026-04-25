---
title: "`<form>` HTML-Formular-Element"
short-title: <form>
slug: Web/HTML/Reference/Elements/form
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<form>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Dokumentabschnitt, der interaktive Steuerelemente zum Übermitteln von Informationen enthält.

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

Es ist möglich, die CSS {{cssxref(':valid')}} und {{cssxref(':invalid')}} [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) zu verwenden, um ein `<form>`-Element basierend darauf zu stylen, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{deprecated_inline}}
  - : Durch Kommas getrennte [Inhaltstypen](/de/docs/Web/SVG/Guides/Content_type), die der Server akzeptiert.

    > [!NOTE]
    > **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Verwenden Sie stattdessen das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut für `<input type=file>`-Elemente.

- `accept-charset`
  - : Die von dem Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt einen einzelnen, nicht großgeschriebenen Wert von `"UTF-8"`, der die allgemeine Verbreitung dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als durch Kommas oder Leerzeichen getrennte Liste angegeben werden).

- `autocapitalize`
  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, in welcher Weise. Weitere Informationen finden Sie auf der globalen Attributseite für [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : Gibt an, ob Eingabefelder standardmäßig automatisch von dem Browser vervollständigt werden können. `autocomplete`-Attribute an Formularelementen überschreiben es in `<form>`. Mögliche Werte:
    - `off`: Der Browser sollte Eingaben nicht automatisch vervollständigen. (Browser neigen dazu, dies bei vermuteten Anmeldeformularen zu ignorieren; siehe [Verwalten des Autofills für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser kann Eingaben automatisch vervollständigen.

- `name`
  - : Der Name des Formulars. Der Wert darf nicht leer sein und muss innerhalb der Formulare in der Formsammlung eindeutig sein, falls vorhanden. Der Name wird zu einer Eigenschaft des [`Window`](/de/docs/Web/API/Window)-, [`Document`](/de/docs/Web/API/Document)- und [`document.forms`](/de/docs/Web/API/Document/forms)-Objekts, welche eine Referenz auf das Formularelement enthält.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Steuert die Annotationen und welche Art von Links das Formular erstellt. Annotationen umfassen [`external`](/de/docs/Web/HTML/Reference/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Reference/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Reference/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel#noreferrer). Linktypen umfassen [`help`](/de/docs/Web/HTML/Reference/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Reference/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Reference/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Reference/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Reference/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Wert ist eine durch Leerzeichen getrennte Liste dieser enumerierten Werte.

### Attribute für die Formularübermittlung

Die folgenden Attribute steuern das Verhalten während der Formularübermittlung.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Reference/Elements/button#formaction)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`
  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:
    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich für Debugging-Zwecke.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Reference/Elements/button#formenctype)-Attribute an {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben werden.

- `method`
  - : Die [HTTP](/de/docs/Web/HTTP)-Methode zur Übermittlung des Formulars.
    Die einzig erlaubten Methoden/Werte sind (groß-/kleinschreibungsunabhängig):
    - `post`: Die {{HTTPMethod("POST")}}-Methode; Formulardaten werden als [Anforderungskörper](/de/docs/Web/API/Request/body) gesendet.
    - `get` (standardmäßig): Die {{HTTPMethod("GET")}}-Methode; Formulardaten werden mit einem `?`-Separator an die `action`-URL angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebenwirkungen hat")}}.
    - `dialog`: Wenn sich das Formular in einem {{HTMLElement("dialog")}} befindet, schließt es den Dialog und löst bei Übermittlung ein `submit`-Ereignis aus, ohne Daten zu übermitteln oder das Formular zu leeren.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Reference/Elements/button#formmethod)-Attribute an {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben.

- `novalidate`
  - : Dieses Boolean-Attribut gibt an, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und daher das Formular **validiert** wird), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/button#formnovalidate)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element, das zu dem Formular gehört, überschrieben werden.
- `target`
  - : Gibt an, wo die Antwort nach dem Absenden des Formulars angezeigt werden soll. Es ist ein Name/Schlüsselwort für einen _Browsing-Kontext_ (z.B. Registerkarte, Fenster oder iframe). Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self` (standardmäßig): In den gleichen Browsing-Kontext wie den aktuellen laden.
    - `_blank`: In einen neuen, unbenannten Browsing-Kontext laden. Dies ermöglicht das gleiche Verhalten wie das Setzen von [`rel="noopener"`](#rel), das [`window.opener`](/de/docs/Web/API/Window/opener) nicht setzt.
    - `_parent`: In den übergeordneten Browsing-Kontext des aktuellen laden. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: In den obersten Browsing-Kontext laden (d.h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_unfencedTop`: Lädt die Antwort aus einem Formular innerhalb eines eingebetteten [abgegrenzten Rahmens](/de/docs/Web/API/Fenced_frame_API) in den obersten Rahmen (d.h. über die Wurzel des abgegrenzten Rahmens hinausgehend, anders als andere reservierte Ziele). Nur innerhalb von abgegrenzten Rahmen verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Reference/Elements/button#formtarget)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">fühlbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>, jedoch keine <code>&#x3C;form></code>-Elemente enthaltend
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>
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

- [HTML Formular-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- Andere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Eine Liste der Elemente im Formular erhalten: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Formularrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
