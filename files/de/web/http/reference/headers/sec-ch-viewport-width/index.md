---
title: Sec-CH-Viewport-Width header
short-title: Sec-CH-Viewport-Width
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Width
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{SecureContext_header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-Viewport-Width`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hint für Geräte](/de/docs/Web/HTTP/Guides/Client_hints), der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt. Der Wert wird auf die nächstgrößere ganze Zahl aufgerundet (d.h. Deckenwert).

Der Hint kann zusammen mit anderen bildschirmbezogenen Hints verwendet werden, um Bilder bereitzustellen, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen wegzulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden. Wenn der `Sec-CH-Viewport-Width`-Header mehrmals in einer Nachricht erscheint, wird die letzte Vorkommen verwendet.

Ein Server muss sich dafür entscheiden, den `Sec-CH-Viewport-Width`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}}-Response-Header sendet. Server, die diese Entscheidung treffen, spezifizieren diesen Header typischerweise auch im {{HTTPHeader("Vary")}}-Header, der Caches darüber informiert, dass der Server je nach Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

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
Sec-CH-Viewport-Width: <number>
```

## Direktiven

- `<number>`
  - : Die Breite des Viewports des Benutzers in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, auf die nächste ganze Zahl aufgerundet.

## Beispiele

### Verwendung von Sec-CH-Viewport-Width

Ein Server muss zuerst optieren, um den `Sec-CH-Viewport-Width`-Header zu empfangen, indem er den Response-Header {{HTTPHeader("Accept-CH")}} sendet, der die Direktive `Sec-CH-Viewport-Width` enthält.

```http
Accept-CH: Sec-CH-Viewport-Width
```

In nachfolgenden Anfragen könnte der Client den `Sec-CH-Viewport-Width`-Header senden:

```http
Sec-CH-Viewport-Width: 320
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung von Benutzer-Datenschutz und Entwicklererlebnis mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte- und responsive Bild-Client-Hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
