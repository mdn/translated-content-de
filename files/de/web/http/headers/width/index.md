---
title: Breite
slug: Web/HTTP/Headers/Width
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

Das **`Width`**-[device client hint](/de/docs/Web/HTTP/Client_hints#device_client_hints) Anforderungsheader-Feld gibt die gewünschte Ressourcenbreite in physischen Pixeln an – die intrinsische Größe eines Bildes. Der angegebene Pixelwert ist eine Zahl, die auf die nächsthöhere ganze Zahl aufgerundet wird (d.h. Deckenwert).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis ist besonders nützlich, da er es dem Client ermöglicht, eine Ressource anzufordern, die sowohl für den Bildschirm als auch das Layout optimal ist: Er berücksichtigt sowohl die dichtekorrigierte Breite des Bildschirms als auch die extrinsische Größe des Bildes im Layout.

Falls die gewünschte Ressourcenbreite zum Zeitpunkt der Anfrage nicht bekannt ist oder die Ressource keine Anzeigebreite hat, kann das `Width`-Header-Feld weggelassen werden.

Erscheint das `Width`-Header mehr als einmal in einer Nachricht, wird das letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client-Hinweise sind nur auf sicheren Ursprüngen (via TLS) zugänglich.
> - Ein Server muss zustimmen, den `Width`-Header vom Client zu empfangen, indem er den {{HTTPHeader("Accept-CH")}} Antwort-Header sendet.
> - Server, die sich für den `Width`-Client-Hinweis entscheiden, geben diesen in der Regel auch im {{HTTPHeader("Vary")}}-Header an. Dies informiert Caches darüber, dass der Server je nach Headerwert in einer Anfrage unterschiedliche Antworten senden kann.
> - `Width` wurde aus der Client-Hinweis-Spezifikation im [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-width) (Responsive Image Client Hints).

## Syntax

```http
Width: <number>
```

## Direktiven

- \<number>
  - : Die Breite der Ressource in physischen Pixeln, aufgerundet auf die nächste ganze Zahl.

## Beispiele

Der Server muss zuerst zustimmen, den `Width`-Header zu empfangen, indem er die Antwort-Header {{HTTPHeader("Accept-CH")}} mit `Width` sendet.

```http
Accept-CH: Width
```

Dann könnte der Client bei nachfolgenden Anfragen den `Width`-Header zurücksenden:

```http
Width: 1920
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte-Client-Hinweise

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
