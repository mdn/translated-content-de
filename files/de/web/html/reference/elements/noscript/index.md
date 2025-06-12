---
title: "<noscript>: Das Noscript-Element"
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: 36ac13b6a05a353f0c9cfe6ee117b1531f968205
---

{{HTMLSidebar}}

Das **`<noscript>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Abschnitt von HTML, der eingefügt wird, wenn ein Skripttyp auf der Seite nicht unterstützt wird oder wenn Skripting im Browser derzeit deaktiviert ist.

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="https://www.mozilla.org/">External Link</a>
</noscript>
<p>Rocks!</p>
```

### Ergebnis mit aktiviertem Skripting

Rocks!

### Ergebnis mit deaktiviertem Skripting

[Externer Link](https://www.mozilla.org/)

Rocks!

## Nutzungshinweise

Das `<noscript>`-Element stellt seine Kinder unterschiedlich dar, je nachdem, ob Skripting aktiviert ist:

- Wenn Skripting deaktiviert ist, stellt das `<noscript>`-Element seine Kinder als [HTML-Inhalt](/de/docs/Web/API/HTMLElement) dar.
- Wenn Skripting aktiviert ist, stellt das `<noscript>`-Element seine Kinder als [Text](/de/docs/Web/API/Text) dar.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Ausdrucks-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn Skripting deaktiviert ist und es ein Nachkomme des
        {{HTMLElement("head")}}-Elements ist: in beliebiger Reihenfolge null oder mehr
        {{HTMLElement("link")}}-Elemente, null oder mehr
        {{HTMLElement("style")}}-Elemente und null oder mehr
        {{HTMLElement("meta")}}-Elemente.<br />Wenn Skripting deaktiviert ist und es kein Nachkomme des
        {{HTMLElement("head")}}-Elements ist: beliebiger
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >transparenter Inhalt</a
        >, aber kein <code>&#x3C;noscript></code>-Element darf unter seinen
        Nachkommen sein.<br />Andernfalls: Fluss-Inhalt oder Ausdrucks-Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Ausdrucks-Inhalt</a
        > akzeptiert, wenn es keine Vorfahren mit <code>&#x3C;noscript></code>-Element gibt, oder in einem {{HTMLElement("head")}}-Element (aber nur für ein HTML-Dokument), auch hier, wenn es keine Vorfahren mit
        <code>&#x3C;noscript></code>-Element gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
