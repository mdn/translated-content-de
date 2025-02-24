---
title: Observe-Browsing-Topics
slug: Web/HTTP/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Der HTTP **`Observe-Browsing-Topics`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Website abgeleitet wurden (d. h. die Seite, auf der die Werbetechnologie im {{HTMLElement("iframe")}} eingebettet ist), wie es in der Antwort auf eine Anfrage beobachtet wird, die durch ein [Feature, das die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generiert wird. Der Browser verwendet anschließend diese Themen, um Top-Themen für den aktuellen Nutzer für zukünftige Epochen zu berechnen.

Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Observe-Browsing-Topics: ?1
```

### Direktiven

- `?1`
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Website abgeleitet wurden (d. h. die Seite, auf der die Werbetechnologie im `<iframe>` eingebettet ist), als beobachtet markiert werden. Der Browser wird diese Themen anschließend verwenden, um die Themen von Interesse für einen Nutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
