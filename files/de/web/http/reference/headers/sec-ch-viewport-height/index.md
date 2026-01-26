---
title: Sec-CH-Viewport-Height header
short-title: Sec-CH-Viewport-Height
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Height
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SecureContext_header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-Viewport-Height`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hint für Geräte](/de/docs/Web/HTTP/Guides/Client_hints), der die Höhe des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} liefert.
Der Wert wird auf die nächstgrößere ganze Zahl aufgerundet (d.h. Deckenwert).

Der Hint kann zusammen mit anderen bildschirm-spezifischen Hints verwendet werden, um Bilder für eine bestimmte Bildschirmgröße zu optimieren oder um Ressourcen wegzulassen, die für eine bestimmte Bildschirmhöhe nicht benötigt werden.
Erscheint der `Sec-CH-Viewport-Height` Header mehr als einmal in einer Nachricht, wird das letzte Vorkommen benutzt.

Ein Server muss sich entscheiden, den `Sec-CH-Viewport-Height` Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet.
Server, die sich entscheiden, werden ihn typischerweise auch im {{HTTPHeader("Vary")}} Header spezifizieren, was Caches informiert, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert einer Anfrage senden kann.

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
  - : Die Höhe des Viewports des Benutzers in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, aufgerundet auf die nächste ganze Zahl.

## Beispiele

### Verwendung von Sec-CH-Viewport-Height

Ein Server muss sich zunächst entscheiden, den `Sec-CH-Viewport-Height` Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Sec-CH-Viewport-Height` sendet.

```http
Accept-CH: Sec-CH-Viewport-Height
```

In nachfolgenden Anfragen könnte der Client den `Sec-CH-Viewport-Height` Header senden:

```http
Sec-CH-Viewport-Height: 480
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzer-Privatsphäre und der Entwickler-Erfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte- und responsive Bild-Client-Hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
