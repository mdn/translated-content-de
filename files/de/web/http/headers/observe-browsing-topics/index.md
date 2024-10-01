---
title: Observe-Browsing-Topics
slug: Web/HTTP/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions).

Der **`Observe-Browsing-Topics`** Response-Header wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Website (d.h. der Seite, auf der das Werbetechnologie-`<iframe>` eingebettet ist) abgeleitet wurden, wie im Antworttext auf eine Anfrage, die von einer [Funktion, die die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) erzeugt wurde, beobachtet. Der Browser wird diese Themen anschließend verwenden, um die Hauptthemen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.

Weitere Einzelheiten finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Website (d.h. der Seite, auf der das Werbetechnologie-`<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet markiert sind. Der Browser wird diese Themen anschließend verwenden, um Benutzerinteressen für zukünftige Epochen zu berechnen.

## Spezifikationen

Diese Funktion ist kein Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
