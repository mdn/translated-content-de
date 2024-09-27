---
title: Observe-Browsing-Topics
slug: Web/HTTP/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browserherstellern abgelehnt. Einzelheiten zur Ablehnung finden Sie im Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions).

Der **`Observe-Browsing-Topics`** Response-Header wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Seite (d.h. der Seite, auf der der Ad-Tech-`<iframe>` eingebettet ist) im Antwortcode einer Anfrage ermittelt wurden, die durch eine [Funktion, die die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde. Der Browser wird diese Themen anschließend verwenden, um die wichtigsten Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.

Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        [Response-Header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Seite (d.h. der Seite, auf der der Ad-Tech-`<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet markiert werden. Der Browser wird diese Themen anschließend verwenden, um Benutzungsthemen für einen Benutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Dieses Feature ist kein Bestandteil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
