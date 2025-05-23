---
title: Viewport-Width header
short-title: Viewport-Width
slug: Web/HTTP/Reference/Headers/Viewport-Width
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Viewport-Width`-Header wurde aus der Client-Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

Der HTTP **`Viewport-Width`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [Geräte-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints), der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.
Der Wert wird aufgerundet auf die kleinste nachfolgende Ganzzahl (d.h. den Deckenwert).

Der Hint kann zusammen mit anderen bildschirmbezogenen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen wegzulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.
Wenn der `Viewport-Width`-Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Ein Server muss sich entscheiden, den `Viewport-Width`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet.
Server, die sich entscheiden teilzunehmen, spezifizieren es typischerweise auch im {{HTTPHeader("Vary")}}-Header, der Caches darüber informiert, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Viewport-Width: <number>
```

## Direktiven

- `<number>`
  - : Die Breite des Viewports des Benutzers in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, aufgerundet auf die nächste Ganzzahl.

## Beispiele

### Verwendung von Viewport-Width

Ein Server muss zuerst zustimmen, den `Viewport-Width`-Header zu empfangen, indem er den Antwortheader {{HTTPHeader("Accept-CH")}} mit der Direktive `Viewport-Width` sendet.

```http
Accept-CH: Viewport-Width
```

In nachfolgenden Anfragen könnte der Client den `Viewport-Width`-Header senden:

```http
Viewport-Width: 320
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Content-DPR")}}, {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Width")}} Geräte-Client-Hints
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
