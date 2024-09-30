---
title: Viewport-Width
slug: Web/HTTP/Headers/Viewport-Width
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

Der **`Viewport-Width`** [device client hint](/de/docs/Web/HTTP/Client_hints) Request-Header bietet die Layout-Viewport-Breite des Clients in [CSS-Pixel](/de/docs/Glossary/CSS_pixel). Der Wert wird auf die nächsthöhere ganze Zahl (d.h. aufgerundet) gerundet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungs-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis kann zusammen mit anderen bildschirmspezifischen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.

Wenn der `Viewport-Width`-Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client-Hinweise sind nur auf sicheren Ursprüngen (über TLS) zugänglich.
> - Ein Server muss sich entscheiden, den `Viewport-Width`-Header vom Client zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Antwort-Header sendet.
> - Server, die sich für den `Viewport-Width`-Client-Hinweis entscheiden, geben ihn normalerweise auch im {{HTTPHeader("Vary")}}-Header an. Dies informiert Caches, dass der Server möglicherweise unterschiedliche Antworten basierend auf dem Headerwert in einer Anfrage senden kann.
> - `Viewport-Width` wurde aus der ursprünglichen Client-Hints-Spezifikation im [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

## Syntax

```http
Viewport-Width: <number>
```

## Direktiven

- \<number>
  - : Die Breite des Viewports des Benutzers in [CSS-Pixel](/de/docs/Glossary/CSS_pixel), aufgerundet auf die nächste ganze Zahl.

## Beispiele

Ein Server muss zunächst entscheiden, den `Viewport-Width`-Header zu erhalten, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet, der die Direktive `Viewport-Width` enthält.

```http
Accept-CH: Viewport-Width
```

Dann kann bei nachfolgenden Anfragen der Client den `Viewport-Width`-Header zurücksenden:

```http
Viewport-Width: 320
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Device Client Hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
