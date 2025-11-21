---
title: Observe-Browsing-Topics header
short-title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Einzelheiten zur Ablehnung finden Sie im Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions).

Der HTTP **`Observe-Browsing-Topics`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um Themen von Interesse zu markieren, die aus der URL der aufrufenden Website (d.h. der Seite, auf der die Ad-Technologie {{HTMLElement("iframe")}} eingebettet ist) abgeleitet wurden, wie sie in der Antwort auf eine von einer [Funktion, die die Topics-API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), erzeugte Anfrage beobachtet wurde.
Der Browser wird diese Themen anschließend verwenden, um die Top-Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.

Weitere Einzelheiten finden Sie unter [Verwendung der Topics-API](/de/docs/Web/API/Topics_API/Using).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}}
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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Website (d.h. der Seite, auf der die Ad-Technologie `<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet markiert werden. Der Browser wird diese Themen anschließend verwenden, um Themen von Interesse für einen Benutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [Inoffiziellen Entwurf des Topics-API-Vorschlags](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
