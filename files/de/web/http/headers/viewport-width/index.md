---
title: Viewport-Width
slug: Web/HTTP/Headers/Viewport-Width
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Viewport-Width`-Header wurde aus der Spezifikation der Client-Hints in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

Der HTTP **`Viewport-Width`** {{Glossary("request_header", "Request-Header")}} ist ein [Device Client Hint](/de/docs/Web/HTTP/Client_hints), der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
Der Wert wird auf die nächste ganze Zahl aufgerundet (d.h. auf den nächsten höheren Wert).

Der Hint kann zusammen mit anderen bildschirmbezogenen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen zu weglassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden. Wenn der `Viewport-Width`-Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Ein Server muss sich dafür entscheiden, den `Viewport-Width`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Antwort-Header sendet. Server, die sich dafür entscheiden, geben diesen Header typischerweise auch im {{HTTPHeader("Vary")}}-Header an, was Caches darüber informiert, dass der Server je nach Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Die Breite des Viewports des Nutzers in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, auf die nächste ganze Zahl aufgerundet.

## Beispiele

### Verwendung von Viewport-Width

Ein Server muss sich zuerst entscheiden, den `Viewport-Width`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Viewport-Width` sendet.

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

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Content-DPR")}}, {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Width")}} Device Client Hints
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
