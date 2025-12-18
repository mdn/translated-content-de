---
title: Sec-CH-Viewport-Width header
short-title: Sec-CH-Viewport-Width
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Width
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SecureContext_header}}{{SeeCompatTable}}

Der HTTP-**`Sec-CH-Viewport-Width`**-{{Glossary("request_header", "Anforderungsheader")}} ist ein [Geräte-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints), der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt. Der Wert wird auf die kleinste folgende ganze Zahl (d.h. Deckenwert) aufgerundet.

Der Hinweis kann zusammen mit anderen bildschirmspezifischen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen wegzulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden. Wenn der `Sec-CH-Viewport-Width`-Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Ein Server muss sich entscheiden, den `Sec-CH-Viewport-Width`-Header vom Client zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet. Server, die sich dafür entscheiden, geben dies typischerweise auch im {{HTTPHeader("Vary")}}-Header an, der Caches informiert, dass der Server unterschiedliche Antworten basierend auf dem Headerwert in einer Anforderung senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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

Ein Server muss zunächst zustimmen, den `Sec-CH-Viewport-Width`-Header zu empfangen, indem er den Antwortheader {{HTTPHeader("Accept-CH")}} mit der Direktive `Sec-CH-Viewport-Width` sendet.

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

- [Verbesserung der Nutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte-Client-Hinweise
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
