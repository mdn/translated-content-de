---
title: Sec-CH-Viewport-Height header
short-title: Sec-CH-Viewport-Height
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Height
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{SecureContext_header}}{{SeeCompatTable}}

Der HTTP-**`Sec-CH-Viewport-Height`**-{{Glossary("request_header", "Request-Header")}} ist ein [Client-Hint für Geräte](/de/docs/Web/HTTP/Guides/Client_hints), der die Layout-Viewport-Höhe des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt. Der Wert wird auf die nächste höhere ganze Zahl aufgerundet (d.h. Deckwert).

Der Hint kann zusammen mit anderen bildschirmbezogenen Hints genutzt werden, um Bilder bereitzustellen, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmhöhe nicht benötigt werden. Wenn der `Sec-CH-Viewport-Height`-Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Ein Server muss sich dafür entscheiden, den `Sec-CH-Viewport-Height`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Antwort-Header sendet. Server, die sich dafür entscheiden, geben diesen in der Regel auch im {{HTTPHeader("Vary")}}-Header an, der Caches darüber informiert, dass der Server je nach dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

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
Sec-CH-Viewport-Height: <number>
```

## Direktiven

- `<number>`
  - : Die Höhe des Viewports des Benutzers in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, auf die nächste ganze Zahl aufgerundet.

## Beispiele

### Verwendung von Sec-CH-Viewport-Height

Ein Server muss zuerst optieren, um den `Sec-CH-Viewport-Height`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet, der die Direktive `Sec-CH-Viewport-Height` beinhaltet.

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

- [Benutzerfreundlichkeit und Entwicklererfahrung verbessern mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Gerät und responsive Bild-Client-Hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
