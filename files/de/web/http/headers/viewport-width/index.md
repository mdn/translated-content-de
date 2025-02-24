---
title: Viewport-Width
slug: Web/HTTP/Headers/Viewport-Width
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Viewport-Width`-Header wurde aus der Client-Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

Der HTTP **`Viewport-Width`** {{Glossary("request_header", "Request-Header")}} ist ein [Geräte-Client-Hinweis](/de/docs/Web/HTTP/Client_hints), der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt.
Der Wert wird aufgerundet auf den nächstgrößeren ganzzahligen Wert (d. h. den Deckelwert).

Der Hinweis kann in Verbindung mit anderen bildschirm-spezifischen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen auszulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.
Erscheint der `Viewport-Width`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

Ein Server muss sich entscheiden, den `Viewport-Width`-Header vom Client zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Response-Header sendet.
Server, die sich entscheiden, werden ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header angeben, der Caches informiert, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
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
  - : Die Breite des Viewports des Benutzers in {{Glossary("CSS_pixel", "CSS-Pixel")}}, aufgerundet auf den nächsten ganzzahligen Wert.

## Beispiele

### Verwendung von Viewport-Width

Ein Server muss zunächst zustimmen, den `Viewport-Width`-Header zu erhalten, indem er den Response-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Viewport-Width` sendet.

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

- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Content-DPR")}}, {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Width")}} Geräte-Client-Hinweise
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
