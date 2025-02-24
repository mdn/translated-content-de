---
title: DPR
slug: Web/HTTP/Headers/DPR
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `DPR`-Header wurde aus der Client-Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr) (Responsive Image Client Hints).

Der HTTP-**`DPR`**-{{Glossary("request_header", "Request-Header")}} liefert [Client-Hints](/de/docs/Web/HTTP/Client_hints) über das Device-Pixelverhältnis (DPR) des Clientgeräts. Dieses Verhältnis ist die Anzahl der physischen Gerätepixel, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Dieser Hinweis ist nützlich, um Bildquellen auszuwählen, die der Pixeldichte eines Bildschirms am besten entsprechen. Dies ist ähnlich der Rolle, die `x`-Deskriptoren im `<img>`-[`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut spielen, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Wenn ein Server den `DPR`-Hinweis verwendet, um auszuwählen, welche Ressource in einer Antwort gesendet wird, muss die Antwort den {{HTTPHeader("Content-DPR")}}-Header enthalten. Der Client muss den Wert in `Content-DPR` für das Layout verwenden, wenn er sich von dem Wert im `DPR`-Header der Anfrage unterscheidet. Wenn der `DPR`-Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Server, die sich für den `DPR`-Client-Hinweis entscheiden, geben ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Caches darüber zu informieren, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Device-Pixelverhältnis des Clients.

## Beispiele

Ein Server muss zuerst dem Empfang des `DPR`-Headers zustimmen, indem er den Response-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `DPR` sendet.

```http
Accept-CH: DPR
```

Dann könnte der Client bei nachfolgenden Anfragen den `DPR`-Header an den Server senden:

```http
DPR: 2.0
```

Wenn eine Anfrage mit dem `DPR`-Header (wie oben gezeigt) für eine Bildressource ist, muss die Serverantwort den {{HTTPHeader("Content-DPR")}}-Header enthalten:

```http
Content-DPR: 2.0
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Client-Hints für Geräte
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
