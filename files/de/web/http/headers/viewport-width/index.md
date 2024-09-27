---
title: Viewport-Width
slug: Web/HTTP/Headers/Viewport-Width
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

Der **`Viewport-Width`** [device client hint](/de/docs/Web/HTTP/Client_hints) Request-Header übermittelt die Layout-Viewport-Breite des Clients in [CSS-Pixel](/de/docs/Glossary/CSS_pixel). Der Wert wird auf die nächsthöhere ganze Zahl aufgerundet (d.h. aufgerundeter Wert).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis kann zusammen mit anderen bildschirmspezifischen Hinweisen verwendet werden, um Bilder für eine bestimmte Bildschirmgröße zu optimieren oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.

Erscheint der `Viewport-Width`-Header mehr als einmal in einer Nachricht, wird das letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client Hints sind nur auf sicheren Ursprüngen (via TLS) zugänglich.
> - Ein Server muss sich entscheiden, den `Viewport-Width`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet.
> - Server, die sich für den `Viewport-Width` Client Hint entscheiden, geben ihn typischerweise auch im {{HTTPHeader("Vary")}} Header an. Dies informiert Caches darüber, dass der Server möglicherweise unterschiedliche Antworten basierend auf dem Headerwert in einer Anfrage sendet.
> - `Viewport-Width` wurde aus der ursprünglichen Client Hints Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

## Syntax

```http
Viewport-Width: <number>
```

## Direktiven

- \<number>
  - : Die Breite des Benutzer-Viewports in [CSS-Pixel](/de/docs/Glossary/CSS_pixel), auf die nächsthöhere ganze Zahl aufgerundet.

## Beispiele

Ein Server muss zunächst zustimmen, den `Viewport-Width`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Viewport-Width` sendet.

```http
Accept-CH: Viewport-Width
```

Dann kann der Client bei nachfolgenden Anfragen den `Viewport-Width` Header zurücksenden:

```http
Viewport-Width: 320
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte-Client-Hinweise

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
