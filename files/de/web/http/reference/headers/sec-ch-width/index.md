---
title: Sec-CH-Width header
short-title: Sec-CH-Width
slug: Web/HTTP/Reference/Headers/Sec-CH-Width
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{SecureContext_header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-Width`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [Device Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#device_client_hints), der die gewünschte Ressourcenbreite in physischen Pixeln angibt — die intrinsische Größe eines Bildes. Der angegebene Pixelwert ist eine Zahl, die auf den kleinsten nachfolgenden ganzzahligen Wert gerundet wird (d.h. der Deckelwert).

Der Hinweis wird nur bei Bildanforderungen gesendet.

Der Hinweis ermöglicht es dem Client, eine Ressource anzufordern, die sowohl für den Bildschirm als auch für das Layout optimal ist: Er berücksichtigt sowohl die dichtekorrigierte Breite des Bildschirms als auch die extrinsische Größe des Bildes im Layout.

Wenn die gewünschte Ressourcenbreite zum Zeitpunkt der Anforderung nicht bekannt ist oder die Ressource keine Anzeigegröße hat, kann das `Sec-CH-Width`-Headerfeld weggelassen werden.
Erscheint das `Sec-CH-Width`-Headerfeld mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client Hint</a>
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
Width: <number>
```

## Direktiven

- `<number>`
  - : Die Breite der Ressource in physischen Pixeln, aufgerundet auf die nächste ganze Zahl.

## Beispiele

Der Server muss zuerst zustimmen, den `Sec-CH-Width`-Header zu empfangen, indem er die Antwortheader {{HTTPHeader("Accept-CH")}} mit `Sec-CH-Width` sendet.

```http
Accept-CH: Sec-CH-Width
```

Dann könnte der Client bei nachfolgenden Bildanforderungen den `Sec-CH-Width`-Header zurücksenden:

```http
Width: 1920
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Device- und responsive Image Client Hints
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
