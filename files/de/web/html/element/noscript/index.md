---
title: "<noscript>: Das Noscript-Element"
slug: Web/HTML/Element/noscript
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<noscript>`** [HTML](/de/docs/Web/HTML) Element definiert einen Abschnitt von HTML, der eingefügt wird, wenn ein Skripttyp auf der Seite nicht unterstützt wird oder wenn Skripting im Browser derzeit deaktiviert ist.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#metadata_content"
          >Metadaten-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fluss-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Wenn Skripting deaktiviert ist und wenn es ein Nachfahre des
        {{HTMLElement("head")}} Elements ist: in beliebiger Reihenfolge null oder mehr
        {{HTMLElement("link")}} Elemente, null oder mehr
        {{HTMLElement("style")}} Elemente und null oder mehr
        {{HTMLElement("meta")}} Elemente.<br />Wenn Skripting deaktiviert ist und wenn es kein Nachfahre des
        {{HTMLElement("head")}} Elements ist: jeder
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
          >transparente Inhalt</a
        >, aber kein <code>&#x3C;noscript></code> Element darf unter seinen
        Nachfahren sein.<br />Andernfalls: Fluss-Inhalt oder Phrasierungs-Inhalt.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungs-Inhalt</a
        > akzeptiert, wenn es keine Vorfahren in Form eines <code>&#x3C;noscript></code> Elements gibt, oder in
        einem {{HTMLElement("head")}} Element (aber nur für ein HTML-Dokument), hier ebenfalls, wenn es keine Vorfahren
        in Form eines <code>&#x3C;noscript></code> Elements gibt.
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
