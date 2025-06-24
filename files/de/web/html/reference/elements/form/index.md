---
title: "<form>: Das Form-Element"
slug: Web/HTML/Reference/Elements/form
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar}}

Das **`<form>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert einen Dokumentabschnitt, der interaktive Steuerungen zum Übermitteln von Informationen enthält.

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

Es ist möglich, die CSS [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(':valid')}} und {{cssxref(':invalid')}} zu verwenden, um ein `<form>`-Element basierend darauf zu stylen, ob die [`elements`](/de/docs/Web/API/HTMLFormElement/elements) innerhalb des Formulars gültig sind.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `accept` {{deprecated_inline}}

  - : Kommagetrennte [Inhaltstypen](/de/docs/Web/SVG/Guides/Content_type), die der Server akzeptiert.

    > [!NOTE] > **Dieses Attribut ist veraltet und sollte nicht mehr verwendet werden.** Stattdessen sollte das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut auf `<input type=file>` Elementen verwendet werden.

- `accept-charset`

  - : Die vom Server akzeptierte {{Glossary("character_encoding", "Zeichenkodierung")}}.
    Die Spezifikation erlaubt einen einzigen, nicht case-sensitiven Wert von `"UTF-8"`, was die Allgegenwärtigkeit dieser Kodierung widerspiegelt (historisch konnten mehrere Zeichenkodierungen als kommagetrennte oder leerzeichengetrennte Liste angegeben werden).

- `autocapitalize`

  - : Bestimmt, ob eingegebener Text automatisch großgeschrieben wird und, falls ja, auf welche Weise. Siehe die [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) globale Attributseite für weitere Informationen.

- [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)

  - : Gibt an, ob Eingabeelemente standardmäßig ihre Werte automatisch vom Browser vervollständigen lassen können. `autocomplete`-Attribute in Formularelementen überschreiben es auf `<form>`. Mögliche Werte:
    - `off`: Der Browser darf Einträge nicht automatisch vervollständigen (Browser neigen dazu, dies für vermutete Login-Formulare zu ignorieren; siehe [Verwalten des Autofills für Login-Felder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields)).
    - `on`: Der Browser darf Einträge automatisch vervollständigen.

- `name`

  - : Der Name des Formulars. Der Wert darf nicht die leere Zeichenkette sein und muss eindeutig unter den `form`-Elementen in der Formularsammlung sein, in der es sich befindet, falls vorhanden.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Bestimmt die Anmerkungen und welche Arten von Links das Formular erstellt. Anmerkungen beinhalten [`external`](/de/docs/Web/HTML/Reference/Attributes/rel#external), [`nofollow`](/de/docs/Web/HTML/Reference/Attributes/rel#nofollow), [`opener`](/de/docs/Web/HTML/Reference/Attributes/rel#opener), [`noopener`](/de/docs/Web/HTML/Reference/Attributes/rel#noopener), und [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel#noreferrer). Linktypen inkludieren [`help`](/de/docs/Web/HTML/Reference/Attributes/rel#help), [`prev`](/de/docs/Web/HTML/Reference/Attributes/rel#prev), [`next`](/de/docs/Web/HTML/Reference/Attributes/rel#next), [`search`](/de/docs/Web/HTML/Reference/Attributes/rel#search), und [`license`](/de/docs/Web/HTML/Reference/Attributes/rel#license). Der [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Wert ist eine leerzeichengetrennte Liste dieser aufgezählten Werte.

### Attribute für das Absenden von Formularen

Die folgenden Attribute steuern das Verhalten beim Absenden des Formulars.

- `action`
  - : Die URL, die die Formularübermittlung verarbeitet. Dieser Wert kann durch ein [`formaction`](/de/docs/Web/HTML/Reference/Elements/button#formaction)-Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden. Dieses Attribut wird ignoriert, wenn `method="dialog"` gesetzt ist.
- `enctype`

  - : Wenn der Wert des `method`-Attributs `post` ist, ist `enctype` der [MIME-Typ](https://de.wikipedia.org/wiki/Media_Type) der Formularübermittlung. Mögliche Werte:

    - `application/x-www-form-urlencoded`: Der Standardwert.
    - `multipart/form-data`: Verwenden Sie dies, wenn das Formular {{HTMLElement("input")}}-Elemente mit `type=file` enthält.
    - `text/plain`: Nützlich für Debugging-Zwecke.

    Dieser Wert kann durch [`formenctype`](/de/docs/Web/HTML/Reference/Elements/button#formenctype)-Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben werden.

- `method`

  - : Die [HTTP](/de/docs/Web/HTTP)-Methode zum Absenden des Formulars.
    Die einzigen zulässigen Methoden/Werte sind (Groß-/Kleinschreibung wird nicht berücksichtigt):

    - `post`: Die {{HTTPMethod("POST")}}-Methode; Formulardaten werden als [Anfragekörper](/de/docs/Web/API/Request/body) gesendet.
    - `get` (Standard): Die {{HTTPMethod("GET")}}-Methode; Formulardaten werden an die `action`-URL mit einem `?`-Trennzeichen angehängt. Verwenden Sie diese Methode, wenn das Formular {{Glossary("Idempotent", "keine Seiteneffekte hat")}}.
    - `dialog`: Wenn das Formular innerhalb eines {{HTMLElement("dialog")}} ist, schließt es den Dialog und löst ein `submit`-Ereignis bei der Übermittlung aus, ohne Daten zu übermitteln oder das Formular zu löschen.

    Dieser Wert wird durch [`formmethod`](/de/docs/Web/HTML/Reference/Elements/button#formmethod)-Attribute auf {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Elementen überschrieben.

- `novalidate`
  - : Dieses boolesche Attribut zeigt an, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut nicht gesetzt ist (und das Formular daher **_validiert wird_**), kann es durch ein [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/button#formnovalidate)-Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element, das zum Formular gehört, überschrieben werden.
- `target`

  - : Gibt an, wo die Antwort nach dem Absenden des Formulars angezeigt werden soll. Es ist ein Name/Keyword für einen _Browsing-Kontext_ (z.B. Tab, Fenster oder iframe). Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (Standard): Wird in denselben Browsing-Kontext wie der aktuelle geladen.
    - `_blank`: Wird in einem neuen nicht benannten Browsing-Kontext geladen. Dies bietet dasselbe Verhalten wie das Setzen von [`rel="noopener"`](#rel), welches [`window.opener`](/de/docs/Web/API/Window/opener) nicht setzt.
    - `_parent`: Wird in den übergeordneten Browsing-Kontext des aktuellen geladen. Wenn kein Eltern vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Wird in den obersten Browsing-Kontext geladen (d.h. der Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Eltern hat). Wenn kein Eltern vorhanden ist, verhält es sich wie `_self`.
    - `_unfencedTop`: Lädt die Antwort eines Formulars innerhalb eines eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API) in das oberste Frame (d.h. über die Wurzel des fenced frames hinweg, im Gegensatz zu anderen reservierten Zielen). Nur innerhalb von fenced frames verfügbar.

    Dieser Wert kann durch ein [`formtarget`](/de/docs/Web/HTML/Reference/Elements/button#formtarget)-Attribut auf einem {{HTMLElement("button")}}, [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), oder [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)-Element überschrieben werden.

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

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">fühlbare Inhalte</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a>, aber keine <code>&#x3C;form></code>-Elemente enthalten
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind zwingend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a> akzeptiert
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

- [HTML-Formulare-Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- Andere Elemente, die beim Erstellen von Formularen verwendet werden: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Eine Liste der Elemente im Formular erhalten: [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements)
- [ARIA: Form-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Suchrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
