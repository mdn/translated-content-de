---
title: "<blockquote>: Das Blockzitat-Element"
slug: Web/HTML/Reference/Elements/blockquote
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<blockquote>`** [HTML](/de/docs/Web/HTML) Element gibt an, dass der eingeschlossene Text ein erweitertes Zitat ist. Üblicherweise wird dies visuell durch Einrückungen dargestellt (siehe [Hinweise](#nutzungshinweise) zum Ändern). Eine URL für die Quelle des Zitats kann mit dem `cite`-Attribut angegeben werden, während eine Textdarstellung der Quelle mit dem {{HTMLElement("cite")}}-Element angegeben werden kann.

{{InteractiveExample("HTML Demo: &lt;blockquote&gt;", "tabbed-standard")}}

```html interactive-example
<div>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
  </blockquote>
  <p>—Aldous Huxley, <cite>Brave New World</cite></p>
</div>
```

```css interactive-example
div:has(> blockquote) {
  background-color: #ededed;
  margin: 10px auto;
  padding: 15px;
  border-radius: 5px;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

blockquote + p {
  text-align: right;
}
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Eine URL, die ein Quelldokument oder eine Nachricht für die zitierte Information bezeichnet. Dieses Attribut soll auf Informationen verweisen, die den Kontext oder die Referenz für das Zitat erklären.

## Nutzungshinweise

Laut der Spezifikation muss die Quellenangabe für das Zitat, sofern vorhanden, außerhalb des `<blockquote>`-Elements platziert werden.

Um die auf den zitierten Text angewendete Einrückung zu ändern, verwenden Sie die {{Glossary("CSS", "CSS")}} {{cssxref("margin-left")}} und/oder {{cssxref("margin-right")}}-Eigenschaften oder die {{cssxref("margin")}}-Kurzschreibweise.

Um kürzere Zitate inline statt in einem separaten Block einzufügen, verwenden Sie das {{HTMLElement("q")}} (Zitat)-Element.

## Beispiele

Dieses Beispiel demonstriert die Verwendung des `<blockquote>`-Elements, um eine Passage aus {{RFC(1149)}}, _A Standard for the Transmission of IP Datagrams on Avian Carriers_, zu zitieren.

```html
<blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
  <p>
    Avian carriers can provide high delay, low throughput, and low altitude
    service. The connection topology is limited to a single point-to-point path
    for each carrier, used with standard carriers, but many carriers can be used
    without significant interference with each other, outside early spring. This
    is because of the 3D ether space available to the carriers, in contrast to
    the 1D ether used by IEEE802.3. The carriers have an intrinsic collision
    avoidance system, which increases availability.
  </p>
</blockquote>
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 180)}}

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
          >Flussinhalt</a
        >, Gliederungswurzel, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch schließende Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code>
          <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents"
            >blockquote</a
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

- Das {{HTMLElement("q")}}-Element für Inline-Zitate.
- Das {{HTMLElement("cite")}}-Element für Quellangaben.
- [Das blockquote-Element](https://heydonworks.com/article/the-blockquote-element/) via heydonworks.com (2024)
