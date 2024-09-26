---
title: Viewport-Width
slug: Web/HTTP/Headers/Viewport-Width
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

Der **`Viewport-Width`** [device client hint](/de/docs/Web/HTTP/Client_hints) Request-Header gibt die Layout-Viewport-Breite des Clients in {{Glossary("CSS pixel","CSS-Pixel")}} an. Der Wert wird auf die kleinste folgende ganze Zahl aufgerundet (d.h. Obergrenze).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis kann zusammen mit anderen bildschirm-spezifischen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.

Wenn der `Viewport-Width`-Header mehrmals in einer Nachricht erscheint, wird die letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client Hints sind nur auf sicheren Ursprüngen (über TLS) zugänglich.
> - Ein Server muss sich dafür entscheiden, den `Viewport-Width`-Header vom Client zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header sendet.
> - Server, die sich für den `Viewport-Width`-Client-Hint entscheiden, werden ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header angeben. Dies informiert Caches, dass der Server je nach Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.
> - `Viewport-Width` wurde aus der ursprünglichen Client-Hints-Spezifikation im [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

## Syntax

```http
Viewport-Width: <number>
```

## Direktiven

- \<number>
  - : Die Breite des Viewports des Benutzers in {{Glossary("CSS pixel","CSS-Pixel")}}, aufgerundet auf die nächste ganze Zahl.

## Beispiele

Ein Server muss sich zuerst dafür entscheiden, den `Viewport-Width`-Header zu erhalten, indem er den Response-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Viewport-Width` sendet.

```http
Accept-CH: Viewport-Width
```

Dann könnte der Client bei nachfolgenden Anfragen den `Viewport-Width`-Header zurücksenden:

```http
Viewport-Width: 320
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte-Client-Hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
