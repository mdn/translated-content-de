---
title: Sec-CH-Viewport-Width header
short-title: Sec-CH-Viewport-Width
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Width
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SecureContext_header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-Viewport-Width`** {{Glossary("request_header", "Anforderungs-Header")}} ist ein [Client-Hinweis des Geräts](/de/docs/Web/HTTP/Guides/Client_hints), der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt. Der Wert wird auf die kleinste folgende Ganzzahl aufgerundet (d.h. auf den Deckenwert).

Der Hinweis kann mit anderen bildschirmbezogenen Hinweisen genutzt werden, um Bilder bereitzustellen, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden. Wenn der `Sec-CH-Viewport-Width`-Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Ein Server muss zustimmen, den `Sec-CH-Viewport-Width`-Header vom Client zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet. Server, die sich dafür entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}} Header an, der Caches darüber informiert, dass der Server möglicherweise unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage sendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Die Breite des Viewports des Benutzers in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, auf die nächste Ganzzahl aufgerundet.

## Beispiele

### Verwendung von Sec-CH-Viewport-Width

Ein Server muss zuerst der Empfang des `Sec-CH-Viewport-Width`-Headers zustimmen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Sec-CH-Viewport-Width` sendet.

```http
Accept-CH: Sec-CH-Viewport-Width
```

In nachfolgenden Anfragen könnte der Client den `Sec-CH-Viewport-Width`-Header senden:

```http
Sec-CH-Viewport-Width: 320
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte- und responsive Bild-Client-Hinweise
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
