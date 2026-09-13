---
title: Viewport-Width header
short-title: Viewport-Width
slug: Web/HTTP/Reference/Headers/Viewport-Width
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Viewport-Width`-Header wurde als {{HTTPHeader("Sec-CH-Viewport-Width")}} standardisiert und der neue Name wird nun bevorzugt.

Der HTTP **`Viewport-Width`** {{Glossary("request_header", "Request-Header")}} ist ein [Device-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints), der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt.
Der Wert wird aufgerundet auf die kleinste folgende ganze Zahl (d.h. auf den nächsten ganzzahligen Wert).

Der Hinweis kann zusammen mit anderen bildschirmbezogenen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen wegzulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.
Erscheint der `Viewport-Width`-Header mehrmals in einer Nachricht, wird das letzte Auftreten verwendet.

Ein Server muss sich entscheiden, den `Viewport-Width`-Header vom Client zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet.
Server, die sich dafür entscheiden, werden ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header angeben, der Caches informiert, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Die Breite des Viewports des Nutzers in {{Glossary("CSS_pixel", "CSS-Pixel")}}, aufgerundet auf die nächste ganze Zahl.

## Beispiele

### Verwendung von Viewport-Width

Ein Server muss sich zuerst entscheiden, den `Viewport-Width`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet, der die Direktive `Viewport-Width` enthält.

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
- Device- und responsive Image-Client-Hints
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
