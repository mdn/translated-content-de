---
title: Width
slug: Web/HTTP/Headers/Width
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Width`-Header wurde aus der Client-Hints-Spezifikation im [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-width) (Responsive Image Client Hints).

Der HTTP **`Width`** {{Glossary("request_header", "Request-Header")}} ist ein [Device Client Hint](/de/docs/Web/HTTP/Client_hints#device_client_hints), der die gewünschte Ressourcenbreite in physischen Pixeln angibt – die intrinsische Größe eines Bildes. Der angegebene Pixelwert ist eine Zahl, die auf die nächstfolgende ganze Zahl aufgerundet wird (d. h. Deckenwert).

Der Hint ermöglicht es dem Client, eine Ressource anzufordern, die sowohl optimal für den Bildschirm als auch für das Layout ist: unter Berücksichtigung der dichtekorrigierten Breite des Bildschirms und der extrinsischen Größe des Bildes im Layout.

Wenn die gewünschte Ressourcenbreite zum Zeitpunkt der Anforderung nicht bekannt ist oder die Ressource keine Anzeigebreite hat, kann das `Width`-Header-Feld weggelassen werden.
Wenn der `Width`-Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
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
Width: <number>
```

## Direktiven

- `<number>`
  - : Die Breite der Ressource in physischen Pixeln, aufgerundet auf die nächste ganze Zahl.

## Beispiele

Der Server muss zuerst die Empfangsbereitschaft für den `Width`-Header anzeigen, indem er die Antwortheader {{HTTPHeader("Accept-CH")}} sendet, die `Width` enthalten.

```http
Accept-CH: Width
```

Dann kann der Client bei nachfolgenden Anfragen den `Width`-Header zurücksenden:

```http
Width: 1920
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-DPR")}}, {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Viewport-Width")}} Device Client Hints
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
