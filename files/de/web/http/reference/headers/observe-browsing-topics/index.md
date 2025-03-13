---
title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standardpositionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Der HTTP **`Observe-Browsing-Topics`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um Interessenthemen zu kennzeichnen, die von der URL einer aufrufenden Seite (d.h. der Seite, auf der die Ad-Tech {{HTMLElement("iframe")}} eingebettet ist) abgeleitet und in der Antwort auf eine Anfrage beobachtet werden, die von einer [Funktion, die die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde. Der Browser wird diese Themen anschließend verwenden, um die Top-Themen für den aktuellen Benutzer für zukünftige Zeiträume zu berechnen.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine Zeichenfolge, die erklärt, dass Interessenthemen, die von der URL einer aufrufenden Seite (d.h. der Seite, auf der die Ad-Tech `<iframe>` eingebettet ist) abgeleitet werden, als beobachtet gekennzeichnet sind. Der Browser wird diese Themen anschließend verwenden, um Interessenthemen für einen Benutzer für zukünftige Zeiträume zu berechnen.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
