---
title: "<form>: Das Formularelement"
slug: Web/HTML/Element/form
l10n:
  sourceCommit: 991385e7cfb9ac8589332b07aadcc4b38edea512
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Dokumentabschnitt, der interaktive Steuerungen für das Übermitteln von Informationen enthält.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

Es ist möglich, die CSS [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>`-Element basierend darauf zu gestalten, ob die {{domxref("HTMLFormElement.elements", "elements")}} innerhalb des Formulars gültig sind.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Durch Kommas getrennte [Inhaltstypen](/de/docs/Web/SVG/Content_type), die der Server akzeptiert.

    > **Hinweis:** **Dieses Attribut ist veraltet und sollte nicht verwendet werden.** Verwenden Sie stattdessen das [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut bei `<input type=file>`-Elementen.

- `accept-charset`

  - : Durch Leerzeichen getrennte {{Glossary("character encoding", "Zeichenkodierungen")}}, die der Server akzeptiert. Der Browser verwendet sie in der aufgelisteten Reihenfolge. Der Standardwert bedeutet [die gleiche Kodierung wie die Seite](/de/docs/Web/HTTP/Headers/Content-Encoding).
    (In früheren Versionen von HTML konnten Zeichenkodierungen auch durch Kommas getrennt werden.)

- `autocapitalize`

  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, wie. Weitere Informationen finden Sie auf der Seite zum globalen Attribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize).

- [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig automatisch vom Browser ausgefüllt werden können. `autocomplete`-Attribute auf Formularelementen überschreiben es auf `<form>`. Mögliche Werte:

    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen. (Browsers neigen dazu, dies bei vermuteten Anmeldeformularen zu ignorieren; siehe [Verwaltung der automatischen Vervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).)
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht leer sein und muss eindeutig unter den `form`-Elementen in der enthaltenen Formularsammlung sein, falls vorhanden.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Bestimmt die Annotationen und welche Arten von Links das Formular erstellt. Annotationen umfassen [`external`](/de/docs/Web/HTML/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Attributes/rel#noopener) und [`noreferrer`](/de/docs/Web/HTML/Attributes/rel#noreferrer). Link-Typen umfassen [`help`](/de/docs/Web/HTML/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Attributes/rel#search) und [`license`](/de/docs/Web/HTML/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Attributes/rel)-Wert ist eine durch Leerzeichen getrennte Liste dieser aufgezählten Werte.

### Attribute für die Formularübermittlung

Die folgenden Attribute steuern das Verhalten während der Formularübermittlung.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Element/button#formaction)-Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` eingestellt ist.
- `enctype`

  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://en.wikipedia.org/wiki/Mime_type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich für Debugging-Zwecke.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype) Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP)-Methode, mit der das Formular übermittelt wird.
    Die einzigen erlaubten Methoden/Werte sind (groß-/kleinschreibungunabhängig):

    - `post`: Die {{HTTPMethod("POST")}}-Methode; Formulardaten als [Anfrage im Body](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}}-Methode; Formulardaten werden an die `action`-URL mit einem `?`-Trennzeichen angehängt. Verwenden Sie diese Methode, wenn das Formular [keine Nebenwirkungen hat](/de/docs/Glossary/Idempotent).
    - `dialog`: Wenn sich das Formular in einem {{HTMLElement("dialog")}} befindet, schließt den Dialog und löst ein `submit`-Ereignis ohne Datenübermittlung oder Formularbereinigung aus.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod) Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) überschrieben.

- `novalidate`
  - : Dieses Boolean-Attribut gibt an, dass das Formular bei Übermittlung nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und somit das Formular **valide** ist), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Element/button#formnovalidate) Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) Element, das zum Formular gehört, überschrieben werden.
- `target`

  - : Gibt an, wo die Antwort nach der Formularübermittlung angezeigt werden soll. Es handelt sich um einen Namen/Stichwort für einen _Browsing-Kontext_ (z.B., Tab, Fenster oder iframe). Die folgenden Stichwörter haben besondere Bedeutungen:

    - `_self` (Standard): In den gleichen Browsing-Kontext wie der aktuelle laden.
    - `_blank`: In einen neuen, unbenannten Browsing-Kontext laden. Dies bietet dasselbe Verhalten wie das Setzen von [`rel="noopener"`](#rel), das nicht [`window.opener`](/de/docs/Web/API/Window/opener) setzt.
    - `_parent`: In den übergeordneten Browsing-Kontext des aktuellen laden. Wenn kein Elternteil vorhanden ist, verhält sich wie `_self`.
    - `_top`: In den obersten Browsing-Kontext laden (d.h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn kein Elternteil vorhanden ist, verhält sich wie `_self`.
    - `_unfencedTop`: Die Antwort eines Formulars innerhalb eines eingebetteten [fenced frame](/de/docs/Web/API/Fenced_frame_API) in das oberste Frame laden (d.h., das Wurzelverzeichnis des fenced frame überschreitend, im Gegensatz zu anderen reservierten Zielorten). Nur innerhalb fenced frames verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Element/button#formtarget) Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) oder [`<input type="image">`](/de/docs/Web/HTML/Element/input/image) überschrieben werden.

## Beispiele

```html
<!-- Formular, das eine GET-Anfrage an die aktuelle URL sendet -->
<form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Speichern</button>
</form>

<!-- Formular, das eine POST-Anfrage an die aktuelle URL sendet -->
<form method="post">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Speichern</button>
</form>

<!-- Formular mit fieldset, legend und label -->
<form method="post">
  <fieldset>
    <legend>Stimmen Sie den Bedingungen zu?</legend>
    <label><input type="radio" name="radio" value="yes" /> Ja</label>
    <label><input type="radio" name="radio" value="no" /> Nein</label>
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
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">greifbarer Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, aber nicht formulierende <code>&#x3C;form></code>-Elemente
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulareinführung](/de/docs/Learn/Forms)
- Andere Elemente, die bei der Erstellung von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Abrufen einer Liste der Elemente im Formular: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Formrolle](/de/docs/Web/Accessibility/ARIA/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
