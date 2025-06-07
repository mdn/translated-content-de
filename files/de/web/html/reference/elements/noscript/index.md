---
title: "<noscript>: Das Noscript-Element"
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<noscript>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Abschnitt von HTML, der eingefügt wird, wenn ein Script-Typ auf der Seite nicht unterstützt wird oder wenn Skripte im Browser derzeit deaktiviert sind.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn Skripting deaktiviert ist und wenn es ein Nachfahre des
        {{HTMLElement("head")}}-Elements ist: in beliebiger Reihenfolge null oder mehr
        {{HTMLElement("link")}}-Elemente, null oder mehr
        {{HTMLElement("style")}}-Elemente und null oder mehr
        {{HTMLElement("meta")}}-Elemente.<br />Wenn Skripting deaktiviert ist und wenn es kein Nachfahre des
        {{HTMLElement("head")}}-Elements ist: jeder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >transparenter Inhalt</a
        >, aber kein <code>&#x3C;noscript></code>-Element darf unter seinen
        Nachfahren sein.<br />Andernfalls: Fließender Inhalt oder Phrasen-Inhalt.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        > akzeptiert, wenn es keine übergeordneten <code>&#x3C;noscript></code>-Elemente gibt, oder in
        einem {{HTMLElement("head")}}-Element (aber nur für ein HTML-
        Dokument), auch hier, wenn es keine übergeordneten
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
