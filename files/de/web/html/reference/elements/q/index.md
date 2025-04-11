---
title: "<q>: Das Inline-Quotation-Element"
slug: Web/HTML/Reference/Elements/q
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<q>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass der eingeschlossene Text ein kurzes Inline-Zitat ist. Die meisten modernen Browser implementieren dies, indem sie den Text in Anführungszeichen setzen. Dieses Element ist für kurze Zitate gedacht, die keine Absatzumbrüche erfordern; für längere Zitate verwenden Sie das {{HTMLElement("blockquote")}}-Element.

{{InteractiveExample("HTML Demo: &lt;q&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  When Dave asks HAL to open the pod bay door, HAL answers:
  <q
    cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
    I'm sorry, Dave. I'm afraid I can't do that.
  </q>
</p>
```

```css interactive-example
q {
  font-style: italic;
}
```

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Der Wert dieses Attributs ist eine URL, die auf ein Quelldokument oder eine Nachricht verweist, aus dem die Informationen stammen. Dieses Attribut soll auf Informationen zeigen, die den Kontext oder die Referenz für das Zitat erklären.

## Beispiele

```html
<p>
  According to Mozilla's website,
  <q cite="https://www.mozilla.org/en-US/about/history/details/">
    Firefox 1.0 was released in 2004 and became a big success.
  </q>
</p>
```

### Ergebnis

{{EmbedLiveSample('Example')}}

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließtext-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generisch</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLQuoteElement`](/de/docs/Web/API/HTMLQuoteElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("blockquote")}}-Element für lange Zitate.
- Das {{HTMLElement("cite")}}-Element für Quellenangaben.
