---
title: Observe-Browsing-Topics
slug: Web/HTTP/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browserherstellern abgelehnt. Siehe den Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Der **`Observe-Browsing-Topics`** Antwort-Header wird verwendet, um Themen von Interesse zu markieren, die von der URL der aufrufenden Seite abgeleitet wurden (d. h. der Seite, auf der das Werbetechnologie-`<iframe>` eingebettet ist), wie in der Antwort auf eine Anfrage, die von einem [Feature, das die Topics-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), erzeugt wurde, beobachtet. Der Browser wird diese Themen anschließend verwenden, um die Hauptthemen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.

Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für mehr Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Observe-Browsing-Topics: ?1
```

### Direktiven

- `?1`
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die von der URL der aufrufenden Seite abgeleitet wurden (d. h. der Seite, auf der das Werbetechnologie-`<iframe>` eingebettet ist), als beobachtet markiert werden. Der Browser wird diese Themen anschließend verwenden, um Interessenthemen für einen Benutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
