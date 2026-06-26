---
title: Observe-Browsing-Topics header
short-title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: c807b72777506cd8aaa8d888b7a187dbc6079ca1
---

{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Der HTTP-**`Observe-Browsing-Topics`**-{{Glossary("response_header", "Response-Header")}} wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Website (d.h. der Seite, auf der die Werbetechnik-{{HTMLElement("iframe")}} eingebettet ist) abgeleitet wurden, wie sie in der Antwort auf eine durch ein Feature generierte Anfrage, das die Topics API ermöglicht, beobachtet wurden. Der Browser wird diese Themen anschließend verwenden, um Hauptthemen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.

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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Website (d.h. der Seite, auf der die Werbetechnik `<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet gekennzeichnet werden. Der Browser wird diese Themen anschließend verwenden, um Themen von Interesse für einen Benutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
