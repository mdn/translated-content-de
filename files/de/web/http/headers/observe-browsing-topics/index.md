---
title: Beobachten-Browsing-Themen
slug: Web/HTTP/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Einzelheiten zur Ablehnung finden Sie im Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions).

Der **`Observe-Browsing-Topics`** Antwort-Header wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL einer aufrufenden Seite abgeleitet wurden (d. h. der Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist) und im Rahmen einer Antwort auf eine Anfrage beobachtet werden, die durch ein [Feature, das die Topics-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generiert wurde. Der Browser wird diese Themen anschließend nutzen, um Top-Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.

Siehe [Verwendung der Topics-API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, abgeleitet aus der URL der aufrufenden Seite (d. h. der Seite, auf der das Ad-Tech-`<iframe>` eingebettet ist), als beobachtet gekennzeichnet werden. Der Browser wird diese Themen anschließend nutzen, um Themen von Interesse für einen Benutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
