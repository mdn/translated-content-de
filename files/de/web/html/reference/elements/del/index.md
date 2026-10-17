---
title: HTML-Element `<del>` für gelöschten Text
short-title: <del>
slug: Web/HTML/Reference/Elements/del
l10n:
  sourceCommit: 32eceacf42b6bff41d9605298eba143cb7e199a1
---

Das [HTML](/de/docs/Web/HTML)-Element **`<del>`** kennzeichnet einen Textbereich, der aus einem Dokument gelöscht wurde. Es kann beispielsweise verwendet werden, um nachverfolgte Änderungen oder Unterschiede zwischen Quellcodeversionen darzustellen. Das Element {{HTMLElement("ins")}} dient dem entgegengesetzten Zweck: Es kennzeichnet Text, der dem Dokument hinzugefügt wurde.

Dieses Element wird häufig (aber nicht zwingend) mit durchgestrichenem Text dargestellt.

{{InteractiveExample("HTML Demo: &lt;del&gt;", "tabbed-standard")}}

```html interactive-example
<blockquote>
  There is <del>nothing</del> <ins>no code</ins> either good or bad, but
  <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>
```

```css interactive-example
del {
  text-decoration: line-through;
  background-color: #ffbbbb;
  color: #555555;
}

ins {
  text-decoration: none;
  background-color: #d4fcbc;
}

blockquote {
  padding-left: 15px;
  border-left: 3px solid #d7d7db;
  font-size: 1rem;
}
```

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Eine URI für eine Ressource, die die Änderung erläutert (beispielsweise ein Sitzungsprotokoll).
- `datetime`
  - : Dieses Attribut gibt Datum und Uhrzeit der Änderung an und muss eine gültige Datumszeichenfolge mit optionaler Uhrzeit enthalten. Wenn der Wert nicht als Datum mit optionaler Uhrzeit interpretiert werden kann, ist dem Element kein Zeitstempel zugeordnet. Das Format einer Zeichenfolge ohne Uhrzeit ist unter [Datumszeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) beschrieben. Das Format einer Zeichenfolge, die sowohl Datum als auch Uhrzeit enthält, ist unter [Lokale Datums- und Uhrzeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

## Beispiele

```html
<p><del>This text has been deleted</del>, here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Alle</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLModElement`](/de/docs/Web/API/HTMLModElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Element {{HTMLElement("ins")}} zum Kennzeichnen von Einfügungen in einen Text
- Das Element {{HTMLElement("s")}} zum Durchstreichen von Text, ohne ihn als gelöscht zu kennzeichnen
