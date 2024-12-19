---
title: "<form>: Das Formulard-Element"
slug: Web/HTML/Element/form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Dokumentabschnitt, der interaktive Steuerungen zum Übermitteln von Informationen enthält.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

Es ist möglich, die CSS [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>`-Element zu stylen, basierend darauf, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Durch Kommas getrennte [Inhaltstypen](/de/docs/Web/SVG/Content_type), die der Server akzeptiert.

    > **Hinweis:** **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Verwenden Sie stattdessen das [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut bei `<input type=file>`-Elementen.

- `accept-charset`

  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt einen einzelnen nicht groß-/kleinschreibungssensitiven Wert von `"UTF-8"`, was die Allgegenwärtigkeit dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als kommagetrennte oder leerzeichengetrennte Liste angegeben werden).

- `autocapitalize`

  - : Steuert, ob eingegebener Text automatisch großgeschrieben wird, und wenn ja, in welcher Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) globale Attributseite für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig automatisch vom Browser ausgefüllt werden können. `autocomplete`-Attribute bei Formularelementen überschreiben es auf `<form>`. Mögliche Werte:

    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen. (Browser neigen dazu, dies für vermutete Login-Formulare zu ignorieren; siehe [Verwaltung des Autovervollständigens für Login-Felder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht der leere String sein und muss in der Formelsammlung, in der es sich befindet, eindeutig unter den `form`-Elementen sein, wenn vorhanden.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Steuert die Anmerkungen und welche Arten von Links das Formular erstellt. Annotationsarten beinhalten [`external`](/de/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Attributes/rel#noopener), und [`noreferrer`](/de/docs/Web/HTML/Attributes/rel#noreferrer). Linktypen beinhalten [`help`](/de/docs/Web/HTML/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Attributes/rel#search), und [`license`](/de/docs/Web/HTML/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Attributes/rel)-Wert ist eine leerzeichengetrennte Liste dieser aufgezählten Werte.

### Attribute für das Absenden des Formulars

Die folgenden Attribute steuern das Verhalten beim Absenden des Formulars.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Element/button#formaction)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`

  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich zu Debugging-Zwecken.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype)-Attribute bei {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Elementen überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP)-Methode, mit der das Formular gesendet werden soll.
    Die einzigen erlaubten Methoden/Werte sind (groß-/kleinschreibungssensitiv):

    - `post`: Die {{HTTPMethod("POST")}}-Methode; Formulardaten werden als [Anforderungstext](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}}; Formulardaten werden an die `action`-URL mit einem `?`-Trenner angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Nebeneffekte")}} hat.
    - `dialog`: Wenn das Formular in einem {{HTMLElement("dialog")}} ist, schließt den Dialog und löst ein `submit`-Ereignis beim Absenden aus, ohne Daten zu senden oder das Formular zu löschen.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod)-Attribute bei {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Elementen überschrieben.

- `novalidate`
  - : Dieses boolesche Attribut gibt an, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und das Formular daher nicht validiert wird), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Element/button#formnovalidate)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Element, das zum Formular gehört, überschrieben werden.
- `target`

  - : Gibt an, wo die Antwort nach dem Absenden des Formulars angezeigt werden soll. Es ist ein Name/Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder iframe). Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self` (Standard): Im gleichen Browsing-Kontext wie der aktuelle laden.
    - `_blank`: In einem neuen unbenannten Browsing-Kontext laden. Dies bietet das gleiche Verhalten wie das Setzen von [`rel="noopener"`](#rel), das [`window.opener`](/de/docs/Web/API/Window/opener) nicht setzt.
    - `_parent`: Im übergeordneten Browsing-Kontext des aktuellen laden. Wenn kein Elternteil vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Im übergeordneten Browsing-Kontext laden (d.h., dem Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn kein Elternteil vorhanden ist, verhält es sich wie `_self`.
    - `_unfencedTop`: Die Antwort von einem Formular innerhalb eines eingebetteten [umzäunten Frames](/de/docs/Web/API/Fenced_frame_API) in den obersten Frame laden (d.h., über die Wurzel des umzäunten Frames hinausgehen, anders als andere reservierte Ziele). Nur innerhalb umzäunter Frames verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Element/button#formtarget)-Attribut an einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Element überschrieben werden.

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">fühlbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, aber keine <code>&#x3C;form></code>-Elemente enthalten
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

- [HTML-Formularleitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- Andere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Abrufen einer Liste der Elemente im Formular: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Formularrolle](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
