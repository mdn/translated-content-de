---
title: Width header
short-title: Width
slug: Web/HTTP/Reference/Headers/Width
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Width`-Header wurde als {{HTTPHeader("Sec-CH-Width")}} standardisiert, und der neue Name wird nun bevorzugt.

Der HTTP **`Width`**-{{Glossary("request_header", "Request-Header")}} ist ein [Device Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints), der die gewünschte Ressourcenbreite in physischen Pixeln angibt — die intrinsische Größe eines Bildes. Der angegebene Pixelwert ist eine Zahl, die auf die nächsthöhere ganze Zahl gerundet ist (d.h. der Deckenwert).

Der Hint wird nur bei Bildanfragen gesendet.

Der Hint ermöglicht es dem Client, eine Ressource anzufordern, die sowohl für den Bildschirm als auch das Layout optimal ist: Er berücksichtigt sowohl die dichtekorrigierte Breite des Bildschirms als auch die extrinsische Größe des Bildes im Layout.

Wenn die gewünschte Ressourcenbreite zum Zeitpunkt der Anfrage nicht bekannt ist oder die Ressource keine Anzeigebreite hat, kann das `Width`-Header-Feld weggelassen werden.
Erscheint der `Width`-Header mehr als einmal in einer Nachricht, wird das letzte Vorkommen verwendet.

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
Width: <number>
```

## Direktiven

- `<number>`
  - : Die Breite der Ressource in physischen Pixeln, auf die nächsthöhere ganze Zahl gerundet.

## Beispiele

Der Server muss zuerst zustimmen, den `Width`-Header zu empfangen, indem er die Antwort-Header {{HTTPHeader("Accept-CH")}} mit `Width` sendet.

```http
Accept-CH: Width
```

Dann kann der Client bei nachfolgenden Bildanfragen den `Width`-Header zurücksenden:

```http
Width: 1920
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Device und responsive Image Client Hints
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
