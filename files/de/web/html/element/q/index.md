---
title: "<q>: Das Inline-Zitat-Element"
slug: Web/HTML/Element/q
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<q>`** [HTML](/de/docs/Web/HTML) Element zeigt an, dass der eingeschlossene Text ein kurzes Inline-Zitat ist. Die meisten modernen Browser implementieren dies, indem sie den Text in Anführungszeichen setzen. Dieses Element ist für kurze Zitate gedacht, die keine Absatzumbrüche erfordern; für längere Zitate verwenden Sie das {{HTMLElement("blockquote")}} Element.

{{EmbedInteractiveExample("pages/tabbed/q.html", "tabbed-shorter")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `cite`
  - : Der Wert dieses Attributs ist eine URL, die ein Quelldokument oder eine Nachricht für die zitierte Information bezeichnet. Dieses Attribut soll auf Informationen verweisen, die den Kontext oder die Referenz für das Zitat erklären.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >, fühlbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Jede</td>
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

- Das {{HTMLElement("blockquote")}} Element für lange Zitate.
- Das {{HTMLElement("cite")}} Element für Quellenangaben.
