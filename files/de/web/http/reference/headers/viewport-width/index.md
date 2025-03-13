---
title: Viewport-Width
slug: Web/HTTP/Reference/Headers/Viewport-Width
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Viewport-Width`-Header wurde aus der Client-Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

Der HTTP **`Viewport-Width`** {{Glossary("request_header", "Request-Header")}} ist ein [Device Client Hint](/de/docs/Web/HTTP/Guides/Client_hints), der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} bereitstellt.
Der Wert wird auf die nächste ganze Zahl nach oben gerundet (d.h. aufgerundeter Wert).

Der Hint kann zusammen mit anderen bildschirmbezogenen Hinweisen verwendet werden, um Bilder für eine bestimmte Bildschirmgröße zu optimieren oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.
Erscheint der `Viewport-Width`-Header mehrmals in einer Nachricht, wird die letzte Vorkommen verwendet.

Ein Server muss sich entscheiden, den `Viewport-Width`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header sendet.
Server, die sich dafür entscheiden, werden ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header angeben, der Caches darüber informiert, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
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
  - : Die Breite des Viewports des Benutzers in {{Glossary("CSS_pixel", "CSS-Pixel")}}, aufgerundet auf die nächste ganze Zahl.

## Beispiele

### Verwendung von Viewport-Width

Ein Server muss zuerst die Zustimmung erteilen, den `Viewport-Width`-Header zu empfangen, indem er den Response-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Viewport-Width` sendet.

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

- [Verbesserung der Privatsphäre der Benutzer und der Entwicklungserfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Content-DPR")}}, {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Width")}} Device-Client-Hints
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
