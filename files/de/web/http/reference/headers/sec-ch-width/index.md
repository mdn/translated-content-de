---
title: Sec-CH-Width header
short-title: Sec-CH-Width
slug: Web/HTTP/Reference/Headers/Sec-CH-Width
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{SecureContext_header}}

Der HTTP-**`Sec-CH-Width`**-{{Glossary("request_header", "Request-Header")}} ist ein [Device Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints), der die gewünschte Breite der Ressource in physischen Pixeln angibt – die intrinsische Größe eines Bildes. Der bereitgestellte Pixelwert ist eine Zahl, die auf die nächsthöhere ganze Zahl gerundet wird (d.h. Deckenwert).

Der Hinweis wird nur bei Bildanfragen gesendet.

Der Hinweis ermöglicht es dem Client, eine Ressource anzufordern, die sowohl für den Bildschirm als auch für das Layout optimal ist: Es wird sowohl die dichtekorrigierte Breite des Bildschirms als auch die extrinsische Größe des Bildes innerhalb des Layouts berücksichtigt.

Wenn die gewünschte Ressourcenbreite zum Zeitpunkt der Anfrage nicht bekannt ist oder die Ressource keine Anzeigebreite hat, kann das `Sec-CH-Width`-Header-Feld weggelassen werden.
Wenn der `Sec-CH-Width`-Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

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
Width: <number>
```

## Direktiven

- `<number>`
  - : Die Breite der Ressource in physischen Pixeln, aufgerundet auf die nächste ganze Zahl.

## Beispiele

Der Server muss zuerst zustimmen, den `Sec-CH-Width`-Header zu empfangen, indem er die Antwort-Header {{HTTPHeader("Accept-CH")}} mit `Sec-CH-Width` sendet.

```http
Accept-CH: Sec-CH-Width
```

Dann könnte der Client bei nachfolgenden Bildanfragen den `Sec-CH-Width`-Header zurücksenden:

```http
Width: 1920
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geräte- und responsive Bild-Client-Hinweise
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
