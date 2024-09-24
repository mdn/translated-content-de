---
title: Viewport-Breite
slug: Web/HTTP/Headers/Viewport-Width
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

Der Anforderungsheader **`Viewport-Width`** [device client hint](/de/docs/Web/HTTP/Client_hints) gibt die Layout-Viewport-Breite des Clients in {{Glossary("CSS pixel","CSS-Pixel")}} an. Der Wert wird auf die kleinste folgende ganze Zahl aufgerundet (d. h. Deckenwert).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis kann zusammen mit anderen bildschirmbezogenen Hinweisen verwendet werden, um Bilder zu liefern, die für eine bestimmte Bildschirmgröße optimiert sind, oder um Ressourcen wegzulassen, die für eine bestimmte Bildschirmbreite nicht benötigt werden.

Erscheint der `Viewport-Width`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client-Hints sind nur auf sicheren Ursprüngen (über TLS) zugänglich.
> - Ein Server muss zustimmen, den `Viewport-Width`-Header vom Client zu erhalten, indem er den Antwortheader {{HTTPHeader("Accept-CH")}} sendet.
> - Server, die dem `Viewport-Width`-Client-Hint zustimmen, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an. Dies informiert Caches, dass der Server unterschiedliche Antworten basierend auf dem Headerwert in einer Anforderung senden kann.
> - `Viewport-Width` wurde aus der ursprünglichen Client-Hints-Spezifikation im [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

## Syntax

```http
Viewport-Width: <number>
```

## Direktiven

- \<number>
  - : Die Breite des Viewports des Benutzers in {{Glossary("CSS pixel","CSS-Pixel")}}, aufgerundet auf die nächste ganze Zahl.

## Beispiele

Ein Server muss zuerst zustimmen, den `Viewport-Width`-Header zu erhalten, indem er den Antwortheader {{HTTPHeader("Accept-CH")}} mit der Direktive `Viewport-Width` sendet.

```http
Accept-CH: Viewport-Width
```

Dann kann der Client bei nachfolgenden Anfragen den `Viewport-Width`-Header zurücksenden:

```http
Viewport-Width: 320
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Gerätebezogene Client-Hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
