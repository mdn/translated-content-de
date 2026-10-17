---
title: "`<ins>`: HTML-Element für eingefügten Text"
short-title: <ins>
slug: Web/HTML/Reference/Elements/ins
l10n:
  sourceCommit: 32eceacf42b6bff41d9605298eba143cb7e199a1
---

Das **`<ins>`**-[HTML](/de/docs/Web/HTML)-Element kennzeichnet einen Textabschnitt, der einem Dokument hinzugefügt wurde. Mit dem Element {{HTMLElement("del")}} können Sie entsprechend einen Textabschnitt kennzeichnen, der aus dem Dokument gelöscht wurde.

{{InteractiveExample("HTML Demo: &lt;ins&gt;", "tabbed-standard")}}

```html interactive-example
<p>&ldquo;You're late!&rdquo;</p>
<del>
  <p>&ldquo;I apologize for the delay.&rdquo;</p>
</del>
<ins cite="../how-to-be-a-wizard.html" datetime="2018-05">
  <p>&ldquo;A wizard is never late &hellip;&rdquo;</p>
</ins>
```

```css interactive-example
del,
ins {
  display: block;
  text-decoration: none;
  position: relative;
}

del {
  background-color: #ffbbbb;
}

ins {
  background-color: #d4fcbc;
}

del::before,
ins::before {
  position: absolute;
  left: 0.5rem;
  font-family: monospace;
}

del::before {
  content: "−";
}

ins::before {
  content: "+";
}

p {
  margin: 0 1.8rem;
  font-family: "Georgia", serif;
  font-size: 1rem;
}
```

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Dieses Attribut gibt den URI einer Ressource an, die die Änderung erläutert, beispielsweise einen Link zu einem Sitzungsprotokoll oder einem Ticket in einem Fehlermanagementsystem.
- `datetime`
  - : Dieses Attribut gibt Datum und Uhrzeit der Änderung an. Sein Wert muss ein gültiges Datum mit einer optionalen Zeitangabe sein. Wenn der Wert nicht als Datum mit optionaler Zeitangabe interpretiert werden kann, ist dem Element kein Zeitstempel zugeordnet. Das Format einer Zeichenfolge ohne Zeitangabe finden Sie unter [Format einer gültigen Datumszeichenfolge](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings). Das Format einer Zeichenfolge mit Datum und Uhrzeit wird unter [Format einer gültigen lokalen Datums- und Uhrzeitzeichenfolge](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

## Beispiele

```html
<ins>This text has been inserted</ins>
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
          >Phrasing Content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow Content</a
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
          >Phrasing Content</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">insertion</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebige</td>
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

- {{HTMLElement("del")}}-Element zum Kennzeichnen von aus einem Dokument gelöschtem Text
