---
title: Das HTML-Element `<noscript>`
short-title: <noscript>
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: 4b8ea679f2d55adbc1234f44583ca23a9729fbdc
---

Das [HTML](/de/docs/Web/HTML)-Element **`<noscript>`** definiert einen HTML-Abschnitt, der eingefügt wird, wenn ein auf der Seite verwendeter Skripttyp nicht unterstützt wird oder Skripting im Browser derzeit deaktiviert ist.

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Je nachdem, ob Skripting aktiviert ist, repräsentiert das `<noscript>`-Element seine Kindelemente unterschiedlich:

- Wenn Skripting deaktiviert ist, repräsentiert das `<noscript>`-Element seine Kindelemente als [HTML-Inhalt](/de/docs/Web/API/HTMLElement).
- Wenn Skripting aktiviert ist, repräsentiert das `<noscript>`-Element seine Kindelemente als [Text](/de/docs/Web/API/Text).

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
          >Formulierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Wenn Skripting deaktiviert ist und sich das Element innerhalb eines
        {{HTMLElement("head")}}-Elements befindet: in beliebiger Reihenfolge
        beliebig viele {{HTMLElement("link")}}-Elemente,
        {{HTMLElement("style")}}-Elemente und {{HTMLElement("meta")}}-Elemente.<br />Wenn Skripting
        deaktiviert ist und sich das Element nicht innerhalb eines
        {{HTMLElement("head")}}-Elements befindet: beliebiger
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >transparenter Inhalt</a
        >, wobei sich unter seinen Nachkommen kein <code>&#x3C;noscript></code>-Element
        befinden darf.<br />Andernfalls: Flussinhalt oder Formulierungsinhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Nicht zulässig; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Formulierungsinhalt</a
        > akzeptiert, sofern sich unter den Vorfahren kein
        <code>&#x3C;noscript></code>-Element befindet; außerdem ein
        {{HTMLElement("head")}}-Element (jedoch nur in einem HTML-Dokument),
        ebenfalls sofern sich unter den Vorfahren kein
        <code>&#x3C;noscript></code>-Element befindet.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> zulässig</td>
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
