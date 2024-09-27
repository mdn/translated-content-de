---
title: "<form>: Das Form Element"
slug: Web/HTML/Element/form
l10n:
  sourceCommit: 991385e7cfb9ac8589332b07aadcc4b38edea512
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML) Element repräsentiert einen Abschnitt eines Dokuments, der interaktive Steuerelemente für die Übermittlung von Informationen enthält.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

Es ist möglich, die CSS [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>` Element basierend darauf zu stylen, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Kommagetrennte [Inhaltstypen](/de/docs/Web/SVG/Content_type), die der Server akzeptiert.

    > **Note:** **Dieses Attribut wurde als veraltet erklärt und sollte nicht verwendet werden.** Verwenden Sie stattdessen das [`accept`](/de/docs/Web/HTML/Element/input#accept) Attribut in `<input type=file>` Elementen.

- `accept-charset`

  - : Leerzeichengetrennte [Zeichenkodierungen](/de/docs/Glossary/character_encoding), die der Server akzeptiert. Der Browser verwendet sie in der Reihenfolge, in der sie aufgelistet sind. Der Standardwert bedeutet [die gleiche Kodierung wie die Seite](/de/docs/Web/HTTP/Headers/Content-Encoding). (In früheren HTML-Versionen konnten Zeichenkodierungen auch durch Kommas abgegrenzt werden.)

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite für das globale Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig automatisch vom Browser vervollständigt werden können. `autocomplete` Attribute in Formularelementen überschreiben es in `<form>`. Mögliche Werte:

    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen. (Browser neigen dazu, dies bei vermuteten Login-Formularen zu ignorieren; siehe [Verwaltung der automatischen Vervollständigung für Login-Felder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenkette sein und muss unter den `form` Elementen in der Formularkollektion, in der es sich befindet, einzigartig sein, falls vorhanden.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Steuert die Annotationen und welche Arten von Links das Formular erstellt. Zu den Annotationen gehören [`external`](/de/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Attributes/rel#noreferrer). Linktypen umfassen [`help`](/de/docs/Web/HTML/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Attributes/rel) Wert ist eine durch Leerzeichen getrennte Liste dieser aufgezählten Werte.

### Attribute für das Absenden von Formularen

Die folgenden Attribute steuern das Verhalten beim Absenden von Formularen.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Element/button#formaction) Attribut in einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`

  - : Wenn der Wert des `method` Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}} Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich zu Debugging-Zwecken.

    Dieser Wert kann durch das [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype) Attribut in {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP) Methode, mit der das Formular gesendet wird. Die einzigen erlaubten Methoden/Werte sind (Groß-/Kleinschreibung wird nicht beachtet):

    - `post`: Die {{HTTPMethod("POST")}} Methode; Formulardaten werden als [Anfragetext](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Der {{HTTPMethod("GET")}}; Formulardaten werden mit einem `?` Separator zur `action` URL hinzugefügt. Verwenden Sie diese Methode, wenn das Formular [keine Nebenwirkungen hat](/de/docs/Glossary/Idempotent).
    - `dialog`: Wenn das Formular in einem {{HTMLElement("dialog")}} enthalten ist, schließt es den Dialog und löst ein `submit` Event beim Absenden aus, ohne Daten zu übermitteln oder das Formular zu leeren.

    Dieser Wert wird überschrieben durch das [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod) Attribut in {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen.

- `novalidate`
  - : Dieses boolesche Attribut gibt an, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und das Formular daher validiert wird), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Element/button#formnovalidate) Attribut in einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element, das zum Formular gehört, überschrieben werden.
- `target`

  - : Gibt an, wo die Antwort nach dem Absenden des Formulars angezeigt wird. Es ist ein Name/Schlüsselwort für einen _Browsing-Kontext_ (z. B. Tab, Fenster oder iframe). Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Laden in denselben Browsing-Kontext wie den aktuellen.
    - `_blank`: Laden in einen neuen unbenannten Browsing-Kontext. Dies bietet dasselbe Verhalten wie das Setzen von [`rel="noopener"`](#rel), das [`window.opener`](/de/docs/Web/API/Window/opener) nicht setzt.
    - `_parent`: Laden in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein Elternkontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Laden in den obersten Browsing-Kontext (d. h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternkontext hat). Wenn kein Elternkontext vorhanden ist, verhält es sich wie `_self`.
    - `_unfencedTop`: Laden der Antwort aus einem Formular innerhalb eines eingebetteten [Fenced-Frame](/de/docs/Web/API/Fenced_frame_API) in den obersten Frame (d. h. über das Wurzel des gefenzten Rahmens hinaus traversieren, im Gegensatz zu anderen reservierten Zielen). Nur innerhalb von gefenzten Frames verfügbar.

    Dieser Wert kann überschrieben werden durch ein [`formtarget`](/de/docs/Web/HTML/Element/button#formtarget) Attribut in einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließend Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbar Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließend Inhalt</a>, jedoch ohne <code>&#x3C;form></code> Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tags weglassen</th>
      <td>Keine, sowohl Anfangs- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließend Inhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- [HTML-Formular Leitfaden](/de/docs/Learn/Forms)
- Andere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Abrufen einer Liste der Elemente im Formular: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Form Rolle](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: Suche Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
