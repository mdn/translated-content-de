---
title: "<blockquote>: Das Blockzitat-Element"
slug: Web/HTML/Element/blockquote
l10n:
  sourceCommit: 1915b8417cc4cc31b8fac7d94894feda88996807
---

{{HTMLSidebar}}

Das **`<blockquote>`**-[HTML](/de/docs/Web/HTML)-Element zeigt an, dass der eingeschlossene Text ein längeres Zitat ist. Üblicherweise wird dies visuell durch Einrückung dargestellt (siehe [Hinweise](#nutzungshinweise), wie man dies ändern kann). Eine URL für die Quelle des Zitats kann mit dem `cite`-Attribut angegeben werden, während eine textuelle Darstellung der Quelle mit dem {{HTMLElement("cite")}}-Element angegeben werden kann.

{{EmbedInteractiveExample("pages/tabbed/blockquote.html","tabbed-standard")}}

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `cite`
  - : Eine URL, die ein Quelldokument oder eine Nachricht für die zitierte Information angibt. Dieses Attribut soll auf Informationen verweisen, die den Kontext oder die Referenz des Zitats erklären.

## Nutzungshinweise

Laut Spezifikation muss die Zuschreibung für das Zitat, falls vorhanden, außerhalb des `<blockquote>`-Elements platziert werden.

Um die auf den zitierten Text angewendete Einrückung zu ändern, verwenden Sie die {{Glossary("CSS", "CSS")}} {{cssxref("margin-left")}} und/oder {{cssxref("margin-right")}} Eigenschaften oder die {{cssxref("margin")}} Kurzschreibweise.

Um kürzere Zitate inline anstelle eines separaten Blocks einzufügen, verwenden Sie das {{HTMLElement("q")}}-Element (Quotation).

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >, Abschnitts-Wurzel, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >.
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code>
          <a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents"
            >blockquote</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
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
- Das {{HTMLElement("cite")}}-Element für Quellennachweise.
- [The blockquote element](https://heydonworks.com/article/the-blockquote-element/) via heydonworks.com (2024)
