---
title: "<noscript>: Das Noscript-Element"
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<noscript>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Abschnitt von HTML, der eingefügt wird, wenn ein Skripttyp auf der Seite nicht unterstützt wird oder wenn das Scripting im Browser momentan deaktiviert ist.

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

### Ergebnis bei aktiviertem Scripting

Rocks!

### Ergebnis bei deaktiviertem Scripting

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn Scripting deaktiviert ist und es sich um einen Nachfahren des
        {{HTMLElement("head")}}-Elements handelt: in beliebiger Reihenfolge, null oder mehr
        {{HTMLElement("link")}}-Elemente, null oder mehr
        {{HTMLElement("style")}}-Elemente und null oder mehr
        {{HTMLElement("meta")}}-Elemente.<br />Wenn Scripting deaktiviert ist und es sich nicht um einen Nachfahren des
        {{HTMLElement("head")}}-Elements handelt: jeder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >transparente Inhalt</a
        >, aber kein <code>&#x3C;noscript></code>-Element darf unter seinen Nachfahren sein.<br />Andernfalls: Flussinhalt oder Phraseninhalt.
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert, wenn kein Vorfahr ein <code>&#x3C;noscript></code>-Element ist, oder in
        einem {{HTMLElement("head")}}-Element (aber nur für ein HTML-Dokument), auch hier, wenn kein Vorfahr ein
        <code>&#x3C;noscript></code>-Element ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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
