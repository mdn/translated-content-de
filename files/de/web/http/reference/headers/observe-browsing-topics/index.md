---
title: Observe-Browsing-Topics header
short-title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browserherstellern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Der HTTP **`Observe-Browsing-Topics`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Seite (d.h. der Seite, auf der die Werbetechnologie im {{HTMLElement("iframe")}} eingebettet ist) abgeleitet wurden, wie in der Antwort auf eine Anfrage, die durch ein Feature generiert wurde, das die Topics API ermöglicht. Der Browser wird diese Themen anschließend verwenden, um die wichtigsten Themen für den aktuellen Benutzer für zukünftige Epochen zu berechnen.

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
  - : Eine Zeichenfolge, die erklärt, dass Themen von Interesse, die aus der URL der aufrufenden Seite (d.h. der Seite, auf der die Werbetechnologie `<iframe>` eingebettet ist) abgeleitet wurden, als beobachtet gekennzeichnet sind. Der Browser wird diese Themen anschließend verwenden, um Themen von Interesse für einen Benutzer für zukünftige Epochen zu berechnen.

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
