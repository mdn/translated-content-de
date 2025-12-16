---
title: Viewport-Width header
short-title: Viewport-Width
slug: Web/HTTP/Reference/Headers/Viewport-Width
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Viewport-Width` Header wurde in {{HTTPHeader("Sec-CH-Viewport-Width")}} umbenannt und der neue Name wird nun bevorzugt.

Der HTTP **`Viewport-Width`** {{Glossary("request_header", "Request-Header")}} ist ein [Device-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints), der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} bereitstellt. Der Wert wird auf die kleinste nachfolgende ganze Zahl aufgerundet (d.h. auf den Ceiling-Wert).

Dieser Hinweis kann zusammen mit anderen bildschirmbezogenen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden. Erscheint der `Viewport-Width` Header mehr als einmal in einer Nachricht, wird der letzte Vorkommen verwendet.

Ein Server muss sich entscheiden, den `Viewport-Width` Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Response-Header sendet. Server, die sich dafür entscheiden, geben ihn typischerweise auch im {{HTTPHeader("Vary")}} Header an, welcher Caches darüber informiert, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

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
  - : Die Breite des Viewports des Nutzers in {{Glossary("CSS_pixel", "CSS-Pixel")}}, auf die nächste ganze Zahl aufgerundet.

## Beispiele

### Verwendung von Viewport-Width

Ein Server muss zuerst die Empfängnis des `Viewport-Width` Headers erlauben, indem er den Response-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Viewport-Width` sendet.

```http
Accept-CH: Viewport-Width
```

In nachfolgenden Anfragen könnte der Client den `Viewport-Width` Header senden:

```http
Viewport-Width: 320
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Device-Client-Hints
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
