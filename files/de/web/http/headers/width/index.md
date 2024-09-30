---
title: Width
slug: Web/HTTP/Headers/Width
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

Das **`Width`** [device client hint](/de/docs/Web/HTTP/Client_hints#device_client_hints) Request-Header-Feld gibt die gewünschte Ressourcenbreite in physischen Pixeln an – die intrinsische Größe eines Bildes. Der angegebene Pixelwert ist eine Zahl, die auf die nächstfolgende ganze Zahl aufgerundet wird (d.h. Deckenwert).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis ist besonders nützlich, da er dem Client ermöglicht, eine Ressource anzufordern, die sowohl für den Bildschirm als auch das Layout optimal ist: unter Berücksichtigung sowohl der dichtekorrigierten Breite des Bildschirms als auch der extrinsischen Größe des Bildes im Layout.

Wenn die gewünschte Ressourcenbreite zum Zeitpunkt der Anforderung nicht bekannt ist oder die Ressource keine Anzeigegröße hat, kann das `Width`-Header-Feld weggelassen werden.

Falls der `Width`-Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client-Hinweise sind nur über sichere Ursprünge (via TLS) zugänglich.
> - Ein Server muss sich anmelden, um den `Width`-Header vom Client zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Response-Header sendet.
> - Server, die den `Width` Client-Hinweis abonniert haben, spezifizieren ihn typischerweise auch im {{HTTPHeader("Vary")}} Header. Dies informiert Caches darüber, dass der Server möglicherweise unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage sendet.
> - `Width` wurde aus der Client-Hinweise-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-width) (Responsive Image Client Hints).

## Syntax

```http
Width: <number>
```

## Direktiven

- \<number>
  - : Die Breite der Ressource in physischen Pixeln, aufgerundet auf die nächsthöhere ganze Zahl.

## Beispiele

Der Server muss zuerst optieren, um den `Width`-Header zu erhalten, indem er die Antwort-Header {{HTTPHeader("Accept-CH")}} mit `Width` sendet.

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

- [Verbesserung der Benutzerfreundlichkeit und Entwicklererfahrung mit User-Agent Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte-Client-Hinweise

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
