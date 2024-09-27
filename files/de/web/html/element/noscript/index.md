---
title: "<noscript>: Das Noscript-Element"
slug: Web/HTML/Element/noscript
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<noscript>`** [HTML](/de/docs/Web/HTML)-Element definiert einen HTML-Abschnitt, der eingefügt wird, wenn ein Skripttyp auf der Seite nicht unterstützt wird oder wenn das Skripting im Browser derzeit deaktiviert ist.

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="https://www.mozilla.org/">External Link</a>
</noscript>
<p>Rocks!</p>
```

### Ergebnis bei aktiviertem Skripting

Rocks!

### Ergebnis bei deaktiviertem Skripting

[Externer Link](https://www.mozilla.org/)

Rocks!

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadateninhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn Skripting deaktiviert ist und wenn es ein Nachkomme des
        {{HTMLElement("head")}}-Elements ist: in beliebiger Reihenfolge null oder mehr
        {{HTMLElement("link")}}-Elemente, null oder mehr
        {{HTMLElement("style")}}-Elemente, und null oder mehr
        {{HTMLElement("meta")}}-Elemente.<br />Wenn Skripting deaktiviert ist und wenn es kein Nachkomme des
        {{HTMLElement("head")}}-Elements ist: jeder
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
          >transparenter Inhalt</a
        >, aber kein <code>&#x3C;noscript></code>-Element muss unter seinen
        Nachkommen sein.<br />Andernfalls: Flussinhalte oder Phrasierungsinhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind zwingend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        > akzeptiert, wenn es keine übergeordneten <code>&#x3C;noscript></code>-Elemente gibt, oder in
        einem {{HTMLElement("head")}}-Element (jedoch nur für ein HTML
        Dokument), auch hier wenn es keine übergeordneten
        <code>&#x3C;noscript></code>-Elemente gibt.
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
