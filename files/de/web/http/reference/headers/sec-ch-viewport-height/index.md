---
title: Sec-CH-Viewport-Height header
short-title: Sec-CH-Viewport-Height
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Height
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

{{SecureContext_header}}

Der HTTP **`Sec-CH-Viewport-Height`** {{Glossary("request_header", "Request-Header")}} ist ein [Device Client Hint](/de/docs/Web/HTTP/Guides/Client_hints), der die Höhe des Layout Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt. Der Wert wird auf die nächstfolgende ganze Zahl aufgerundet (d.h. Deckenwert).

Der Hint kann zusammen mit anderen, bildschirmbezogenen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen wegzulassen, die nicht für eine bestimmte Bildschirmhöhe erforderlich sind. Wenn der `Sec-CH-Viewport-Height` Header mehrmals in einer Nachricht erscheint, wird die letzte Vorkommen verwendet.

Ein Server muss sich entscheiden, den `Sec-CH-Viewport-Height` Header vom Client zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet. Server, die sich dafür entscheiden, geben ihn typischerweise auch im {{HTTPHeader("Vary")}} Header an, der Caches darüber informiert, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

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
Sec-CH-Viewport-Height: <number>
```

## Direktiven

- `<number>`
  - : Die Höhe des Viewports des Nutzers in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, auf die nächstgelegene ganze Zahl aufgerundet.

## Beispiele

### Nutzung von Sec-CH-Viewport-Height

Ein Server muss zunächst zustimmen, den `Sec-CH-Viewport-Height` Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Sec-CH-Viewport-Height` sendet.

```http
Accept-CH: Sec-CH-Viewport-Height
```

In nachfolgenden Anfragen könnte der Client den `Sec-CH-Viewport-Height` Header senden:

```http
Sec-CH-Viewport-Height: 480
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Benutzerdatenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Device Client Hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
