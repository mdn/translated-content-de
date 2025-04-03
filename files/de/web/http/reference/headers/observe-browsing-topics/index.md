---
title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt. Weitere Informationen zu den Ablehnungen finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions).

Der HTTP **`Observe-Browsing-Topics`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Website (d.h. der Seite, auf der die Ad-Tech {{HTMLElement("iframe")}} eingebettet ist) abgeleitet wurden, wie in der Antwort auf eine Anfrage beobachtet wird, die durch ein [Feature, das die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde. Der Browser wird diese Themen anschließend verwenden, um die Hauptthemen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.

Weitere Details finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Website (d.h. der Seite, auf der die Ad-Tech `<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet markiert sind. Der Browser wird diese Themen anschließend verwenden, um Themen von Interesse für einen Benutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
