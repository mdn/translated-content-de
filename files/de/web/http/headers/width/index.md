---
title: Width
slug: Web/HTTP/Headers/Width
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

Der **`Width`**-Anforderungsheader für [Device Client Hints](/de/docs/Web/HTTP/Client_hints#device_client_hints) gibt die gewünschte Breite der Ressource in physischen Pixeln an — die intrinsische Größe eines Bildes. Der angegebene Pixelwert ist eine Zahl, gerundet auf die nächstgrößere ganze Zahl (d. h. Deckwert).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis ist besonders nützlich, weil er es dem Client ermöglicht, eine Ressource anzufordern, die sowohl für den Bildschirm als auch das Layout optimal ist: Dabei werden sowohl die dichtekorrigierte Breite des Bildschirms als auch die extrinsische Größe des Bildes im Layout berücksichtigt.

Wenn die gewünschte Breite der Ressource zum Zeitpunkt der Anfrage nicht bekannt ist oder die Ressource keine Anzeigebreite hat, kann das `Width` Header-Feld weggelassen werden.

Erscheint der `Width`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client Hints sind nur auf sicheren Ursprüngen (via TLS) zugänglich.
> - Ein Server muss zustimmen, den `Width`-Header vom Client zu erhalten, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet.
> - Server, die dem `Width` Client-Hinweis zustimmen, spezifizieren diesen in der Regel auch im {{HTTPHeader("Vary")}} Header. Dies informiert Caches, dass der Server je nach Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.
> - `Width` wurde aus der Client Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-width) (Responsive Image Client Hints).

## Syntax

```http
Width: <number>
```

## Anweisungen

- \<number>
  - : Die Breite der Ressource in physischen Pixeln, aufgerundet auf die nächste Ganzzahl.

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

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Device Client Hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
