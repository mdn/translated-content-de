---
title: "<form>: Das Formularelement"
slug: Web/HTML/Element/form
l10n:
  sourceCommit: 991385e7cfb9ac8589332b07aadcc4b38edea512
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Dokumentabschnitt, der interaktive Steuerungen zum Übermitteln von Informationen enthält.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

Es ist möglich, die CSS- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>` Element basierend darauf, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind, zu stylen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Durch Kommas getrennte [Inhaltstypen](/de/docs/Web/SVG/Content_type), die der Server akzeptiert.

    > **Note:** **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Stattdessen verwenden Sie das Attribut [`accept`](/de/docs/Web/HTML/Element/input#accept) an `<input type=file>` Elementen.

- `accept-charset`

  - : Durch Leerzeichen getrennte [Zeichenkodierungen](/de/docs/Glossary/character_encoding), die der Server akzeptiert. Der Browser verwendet sie in der angegebenen Reihenfolge. Der Standardwert bedeutet [die gleiche Kodierung wie die Seite](/de/docs/Web/HTTP/Headers/Content-Encoding).
    (In früheren Versionen von HTML konnten Zeichenkodierungen auch durch Kommas getrennt werden.)

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird und, wenn ja, auf welche Weise. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig automatisch vom Browser ausgefüllt werden können. `autocomplete`-Attribute an Formularelementen überschreiben dies am `<form>`. Mögliche Werte:

    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen. (Browser ignorieren dies oft bei verdächtigen Anmeldeformularen; siehe [Verwaltung des automatischen Ausfüllens für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenfolge sein und muss innerhalb der Formularelemente-Sammlung, in der es sich befindet, eindeutig sein, falls vorhanden.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Steuert die Anmerkungen und welche Arten von Links das Formular erstellt. Anmerkungen umfassen [`external`](/de/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Attributes/rel#noopener), und [`noreferrer`](/de/docs/Web/HTML/Attributes/rel#noreferrer). Linktypen umfassen [`help`](/de/docs/Web/HTML/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Attributes/rel#search), und [`license`](/de/docs/Web/HTML/Attributes/rel#license). Der Wert von [`rel`](/de/docs/Web/HTML/Attributes/rel) ist eine durch Leerzeichen getrennte Liste dieser aufgezählten Werte.

### Attribute für die Formularübermittlung

Die folgenden Attribute steuern das Verhalten während der Formularübermittlung.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Element/button#formaction)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`

  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}} Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich zu Debugging-Zwecken.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype)-Attribute an {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP)-Methode, mit der das Formular übermittelt wird.
    Die einzigen erlaubten Methoden/Werte sind (nicht case-sensitive):

    - `post`: Die {{HTTPMethod("POST")}}-Methode; Formulardaten werden als [Request-Body](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}}-Methode; Formulardaten werden an die `action`-URL mit einem `?`-Trennzeichen angehängt. Verwenden Sie diese Methode, wenn das Formular [keine Nebeneffekte hat](/de/docs/Glossary/Idempotent).
    - `dialog`: Wenn das Formular in einem {{HTMLElement("dialog")}} enthalten ist, schließt es den Dialog und löst ein `submit`-Ereignis bei der Übermittlung aus, ohne Daten zu senden oder das Formular zu leeren.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod)-Attribute an {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Elementen überschrieben.

- `novalidate`
  - : Dieses boolesche Attribut zeigt an, dass das Formular bei der Übermittlung nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und daher das Formular **_wird_** validiert), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Element/button#formnovalidate)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element, das zum Formular gehört, überschrieben werden.
- `target`

  - : Gibt an, wo die Antwort nach Übermittlung des Formulars angezeigt werden soll. Es ist ein Name/Keyword für einen _Browsing-Kontext_ (z. B. Tab, Fenster oder iframe). Die folgenden Keywords haben besondere Bedeutungen:

    - `_self` (Standard): Laden in denselben Browsing-Kontext wie der aktuelle.
    - `_blank`: Laden in einen neuen, unbenannten Browsing-Kontext. Dies bietet das gleiche Verhalten wie [`rel="noopener"`](#rel), das [`window.opener`](/de/docs/Web/API/Window/opener) nicht setzt.
    - `_parent`: Laden in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Laden in den obersten Browsing-Kontext (d. h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_unfencedTop`: Laden Sie die Antwort aus einem Formular innerhalb eines eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API) in den obersten Rahmen (d. h. sie durchqueren über die Wurzel des fenced frames hinweg, anders als andere reservierte Ziele). Nur verfügbar innerhalb von fenced frames.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Element/button#formtarget)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element überschrieben werden.

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
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">spürbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>, aber ohne <code>&#x3C;form></code>-Elemente
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
        akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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

- [HTML-Formulare Leitfaden](/de/docs/Learn/Forms)
- Andere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Abrufen einer Liste der Elemente im Formular: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Form-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
