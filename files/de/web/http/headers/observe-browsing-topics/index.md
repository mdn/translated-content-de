---
title: Observe-Browsing-Topics
slug: Web/HTTP/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Der HTTP **`Observe-Browsing-Topics`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um Themen von Interesse zu markieren, die aus der URL der aufrufenden Website (d. h. der Website, auf der die Ad-Technologie im {{HTMLElement("iframe")}} eingebettet ist) abgeleitet werden, wie in der Antwort auf eine Anfrage beobachtet, die von einer [Funktion, die die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wird. Der Browser wird diese Themen anschließend verwenden, um die Top-Themen für den aktuellen Nutzer für zukünftige Zeiträume zu berechnen.

Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Website (d. h. der Website, auf der die Ad-Technologie `<iframe>` eingebettet ist) abgeleitet werden, als beobachtet markiert sind. Der Browser wird diese Themen anschließend verwenden, um Themen von Interesse für einen Nutzer für zukünftige Zeiträume zu berechnen.

## Spezifikationen

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
