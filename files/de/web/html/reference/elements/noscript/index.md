---
title: "<noscript>: Das Noscript-Element"
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<noscript>`** [HTML](/de/docs/Web/HTML)-Element definiert einen HTML-Bereich, der eingefügt wird, wenn ein Skripttyp auf der Seite nicht unterstützt wird oder wenn das Skripting im Browser derzeit deaktiviert ist.

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

Das `<noscript>`-Element stellt seine Kinder unterschiedlich dar, je nachdem, ob das Skripting aktiviert ist:

- Wenn das Skripting deaktiviert ist, stellt das `<noscript>`-Element seine Kinder als [HTML-Inhalt](/de/docs/Web/API/HTMLElement) dar.
- Wenn das Skripting aktiviert ist, stellt das `<noscript>`-Element seine Kinder als [Text](/de/docs/Web/API/Text) dar.

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
          >Phrasen-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn das Skripting deaktiviert ist und wenn es ein Nachfahre des
        {{HTMLElement("head")}}-Elements ist: in beliebiger Reihenfolge, null oder mehr
        {{HTMLElement("link")}}-Elemente, null oder mehr
        {{HTMLElement("style")}}-Elemente und null oder mehr
        {{HTMLElement("meta")}}-Elemente.<br />Wenn das Skripting
        deaktiviert ist und wenn es kein Nachfahre des
        {{HTMLElement("head")}}-Elements ist: jeder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >transparente Inhalt</a
        >, aber kein <code>&#x3C;noscript></code>-Element darf unter seinen
        Nachfahren sein.<br />Andernfalls: Fluss-Inhalt oder Phrasen-Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        > akzeptiert, wenn es keine Vorfahren <code>&#x3C;noscript></code>-Elemente gibt, oder in
        einem {{HTMLElement("head")}}-Element (aber nur für ein HTML
        -Dokument), auch hier, wenn es keine Vorfahren
        <code>&#x3C;noscript></code>-Elemente gibt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
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
