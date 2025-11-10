---
title: Width header
short-title: Width
slug: Web/HTTP/Reference/Headers/Width
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> Der `Width`-Header wurde aus der Client-Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-width) (Responsive Image Client Hints).

Der HTTP **`Width`** {{Glossary("request_header", "Anforderungs-Header")}} ist ein [Device Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints), der die gewünschte Ressourcenbreite in physischen Pixeln angibt — die intrinsische Größe eines Bildes. Der angegebene Pixelwert ist eine Zahl, die auf die nächste ganze Zahl aufgerundet wird (d.h. Deckenwert).

Der Hint ermöglicht es dem Client, eine Ressource anzufordern, die sowohl für den Bildschirm als auch für das Layout optimal ist: Dabei wird sowohl die dichtekorrigierte Breite des Bildschirms als auch die extrinsische Größe des Bildes innerhalb des Layouts berücksichtigt.

Wenn die gewünschte Ressourcenbreite zum Zeitpunkt der Anforderung nicht bekannt ist oder die Ressource keine Anzeigebreite besitzt, kann das `Width`-Header-Feld weggelassen werden.
Wenn der `Width`-Header mehrmals in einer Nachricht auftritt, wird das letzte Vorkommen verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
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
Width: <number>
```

## Anweisungen

- `<number>`
  - : Die Breite der Ressource in physischen Pixeln, aufgerundet auf die nächste ganze Zahl.

## Beispiele

Der Server muss zuerst zustimmen, den `Width`-Header zu empfangen, indem er die Antwort-Header {{HTTPHeader("Accept-CH")}} sendet, die `Width` enthalten.

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
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung von Benutzerdatenschutz und Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
