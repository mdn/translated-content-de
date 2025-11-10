---
title: Viewport-Width header
short-title: Viewport-Width
slug: Web/HTTP/Reference/Headers/Viewport-Width
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Viewport-Width`-Header wurde aus der "Client Hints"-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

Der HTTP **`Viewport-Width`** {{Glossary("request_header", "Request-Header")}} ist ein [Device-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints), der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
Der Wert wird auf die nächsthöhere ganze Zahl gerundet (d.h. Deckenwert).

Der Hinweis kann zusammen mit anderen bildschirmbezogenen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.
Wenn der `Viewport-Width`-Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Ein Server muss zustimmen, den `Viewport-Width`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header sendet.
Server, die zustimmen, geben ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header an, der Caches darüber informiert, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
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
Viewport-Width: <number>
```

## Direktiven

- `<number>`
  - : Die Breite des Viewports des Nutzers in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, aufgerundet auf die nächste ganze Zahl.

## Beispiele

### Verwendung von Viewport-Width

Ein Server muss zunächst zustimmen, den `Viewport-Width`-Header zu empfangen, indem er den Response-Header {{HTTPHeader("Accept-CH")}} sendet, der die Direktive `Viewport-Width` enthält.

```http
Accept-CH: Viewport-Width
```

In nachfolgenden Anfragen kann der Client den `Viewport-Width`-Header senden:

```http
Viewport-Width: 320
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Nutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Content-DPR")}}, {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Width")}} Device Client Hints
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
