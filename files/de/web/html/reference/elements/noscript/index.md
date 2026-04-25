---
title: "`<noscript>` HTML noscript-Element"
short-title: <noscript>
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<noscript>`**-[HTML](/de/docs/Web/HTML)-Element definiert einen Abschnitt von HTML, der eingefügt wird, wenn ein Skripttyp auf der Seite nicht unterstützt wird oder wenn das Scripting im Browser momentan ausgeschaltet ist.

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

### Ergebnis mit aktiviertem Scripting

Rocks!

### Ergebnis mit deaktiviertem Scripting

[Externer Link](https://www.mozilla.org/)

Rocks!

## Nutzungshinweise

Das `<noscript>`-Element stellt seine Kinder unterschiedlich dar, je nachdem, ob Scripting aktiviert ist:

- Wenn Scripting deaktiviert ist, stellt das `<noscript>`-Element seine Kinder als [HTML-Inhalt](/de/docs/Web/API/HTMLElement) dar.
- Wenn Scripting aktiviert ist, stellt das `<noscript>`-Element seine Kinder als [Text](/de/docs/Web/API/Text) dar.

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
          >Metadateninhalt</a
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
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Wenn Scripting deaktiviert ist und wenn es ein Nachkomme des
        {{HTMLElement("head")}}-Elements ist: in beliebiger Reihenfolge null oder mehr
        {{HTMLElement("link")}}-Elemente, null oder mehr
        {{HTMLElement("style")}}-Elemente und null oder mehr
        {{HTMLElement("meta")}}-Elemente.<br />Wenn Scripting deaktiviert ist und es
        kein Nachkomme des
        {{HTMLElement("head")}}-Elements ist: jeder
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >transparente Inhalt</a
        >, aber kein <code>&#x3C;noscript></code>-Element darf unter den
        Nachkommen sein.<br />Andernfalls: Flussinhalt oder Phraseninhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert, wenn es keinen übergeordneten
        <code>&#x3C;noscript></code>-Element gibt, oder in einem
        {{HTMLElement("head")}}-Element (aber nur für ein HTML-Dokument), auch hier
        wenn es keinen übergeordneten
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
