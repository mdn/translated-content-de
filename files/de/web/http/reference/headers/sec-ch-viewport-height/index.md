---
title: Sec-CH-Viewport-Height header
short-title: Sec-CH-Viewport-Height
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Height
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SecureContext_header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-Viewport-Height`** {{Glossary("request_header", "Request-Header")}} ist ein [Device-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints), der die Höhe des Viewports des Clients im {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt. Der Wert wird auf die kleinste folgende ganze Zahl aufgerundet (d.h. Deckenwert).

Der Hint kann zusammen mit anderen spezifischen Bildschirm-Hints genutzt werden, um Bilder zu liefern, die für eine spezifische Bildschirmgröße optimiert sind, oder um Ressourcen auszuschließen, die für eine bestimmte Bildschirmhöhe nicht benötigt werden. Wenn der `Sec-CH-Viewport-Height`-Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Ein Server muss sich anmelden, um den `Sec-CH-Viewport-Height`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Response-Header sendet.
Server, die sich anmelden, geben ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header an, was Caches darüber informiert, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

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
  - : Die Höhe des Viewports des Nutzers in {{Glossary("CSS_pixel", "CSS-Pixel")}}, aufgerundet auf den nächsten ganzen Wert.

## Beispiele

### Verwendung von Sec-CH-Viewport-Height

Ein Server muss sich zuerst entscheiden, den `Sec-CH-Viewport-Height`-Header zu empfangen, indem er den Response-Header {{HTTPHeader("Accept-CH")}} sendet, der die Direktive `Sec-CH-Viewport-Height` enthält.

```http
Accept-CH: Sec-CH-Viewport-Height
```

In nachfolgenden Anfragen könnte der Client den `Sec-CH-Viewport-Height`-Header senden:

```http
Sec-CH-Viewport-Height: 480
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes der Nutzer und der Erfahrungen der Entwickler mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Device Client Hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
