---
title: Observe-Browsing-Topics header
short-title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Der HTTP-**`Observe-Browsing-Topics`**-{{Glossary("response_header", "Antwort-Header")}} wird verwendet, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Seite (d.h. der Seite, auf der die Werbetechnologie wie ein {{HTMLElement("iframe")}} eingebettet ist) abgeleitet werden, wie sie in der Antwort auf eine durch eine [Funktion, die die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) erstellte Anfrage beobachtet werden. Der Browser wird diese Themen anschließend verwenden, um die wichtigsten Themen für den aktuellen Benutzer für zukünftige Zeiträume zu berechnen.

Weitere Details finden Sie in [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

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
  - : Eine Zeichenfolge, die erklärt, dass die aus der URL der aufrufenden Seite abgeleiteten Themen von Interesse (d.h. der Seite, auf der die Werbetechnologie `<iframe>` eingebettet ist) als beobachtet gekennzeichnet sind. Der Browser wird diese Themen anschließend verwenden, um die Themen von Interesse für einen Benutzer in zukünftigen Zeiträumen zu berechnen.

## Spezifikationen

Diese Funktion ist kein Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
