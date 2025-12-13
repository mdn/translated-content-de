---
title: Observe-Browsing-Topics header
short-title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Positions der Standards](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Der HTTP **`Observe-Browsing-Topics`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um Themen von Interesse zu markieren, die aus der URL der aufrufenden Website geschlossen werden (d.h. die Website, auf der die Ad-Tech-{{HTMLElement("iframe")}} eingebettet ist), wie sie in der Antwort auf eine Anforderung beobachtet werden, die durch ein [Feature, das die Topics-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde. Der Browser wird anschließend diese Themen verwenden, um die Top-Themen für den aktuellen Nutzer für zukünftige Epochen zu berechnen.

Siehe [Verwendung der Topics-API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Observe-Browsing-Topics: ?1
```

### Direktiven

- `?1`
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Site geschlossen werden (d.h. die Seite, auf der die Ad-Tech-`<iframe>` eingebettet ist), als beobachtet markiert sind. Der Browser wird anschließend diese Themen verwenden, um Themen von Interesse für einen Nutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
