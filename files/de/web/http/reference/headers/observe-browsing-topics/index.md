---
title: Observe-Browsing-Topics header
short-title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Herstellern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positionen](/de/docs/Web/API/Topics_API#standards_positions).

Der HTTP **`Observe-Browsing-Topics`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Website (d.h. der Website, auf der die Werbetechnologie {{HTMLElement("iframe")}} eingebettet ist) abgeleitet wurden, wie in der Antwort auf eine Anfrage beobachtet, die von einer [Funktion, die die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde.
Der Browser wird diese Themen anschließend verwenden, um die Top-Themen für den aktuellen Nutzer für zukünftige Epochen zu berechnen.

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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Website (d.h. der Website, auf der die Werbetechnologie `<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet gekennzeichnet sind. Der Browser wird diese Themen anschließend verwenden, um zukünftige Themen von Interesse für einen Nutzer zu berechnen.

## Spezifikationen

Diese Funktion ist kein Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
