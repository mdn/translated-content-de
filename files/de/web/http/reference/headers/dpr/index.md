---
title: DPR
slug: Web/HTTP/Reference/Headers/DPR
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `DPR`-Header wurde aus der Client-Hints-Spezifikation im [Draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr) (Responsive Image Client Hints).

Der HTTP **`DPR`** {{Glossary("request_header", "Request-Header")}} liefert [Geräte-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints) über das Pixelverhältnis (DPR) des Client-Geräts.
Dieses Verhältnis ist die Anzahl der physischen Gerätepixel, die einem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Der Hinweis ist nützlich beim Auswählen von Bildquellen, die am besten zur Pixeldichte eines Bildschirms passen.
Dies ist ähnlich der Rolle, die `x` Deskriptoren im `<img>`-Attribut [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) spielen, um den Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Wenn ein Server den `DPR`-Hinweis verwendet, um zu entscheiden, welche Ressource in einer Antwort gesendet wird, muss die Antwort den {{HTTPHeader("Content-DPR")}}-Header enthalten.
Der Client muss den Wert von `Content-DPR` für das Layout verwenden, wenn er vom Wert im `DPR`-Header der Anfrage abweicht.
Wenn der `DPR`-Header mehrmals in einer Nachricht vorkommt, wird das letzte Vorkommen verwendet.

Server, die sich für den `DPR`-Client-Hint entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Caches darüber zu informieren, dass der Server je nach Headerwert in einer Anfrage unterschiedliche Antworten senden kann.

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
DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Pixelverhältnis des Client-Geräts.

## Beispiele

Ein Server muss zunächst zustimmen, den `DPR`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `DPR` sendet.

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

- Geräte-Client-Hints
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbessern der Benutzerfreundlichkeit und Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
