---
title: DPR
slug: Web/HTTP/Headers/DPR
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `DPR`-Header wurde aus der Spezifikation der Client-Hinweise im [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr) (Responsive Image Client Hints).

Der HTTP **`DPR`** {{Glossary("request_header", "Anforderungs-Header")}} bietet [Geräte-Client-Hinweise](/de/docs/Web/HTTP/Client_hints) über das Pixelverhältnis (DPR) des Client-Geräts.
Dieses Verhältnis gibt die Anzahl der physischen Gerät-Pixel an, die einem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Der Hinweis ist nützlich, wenn Bildquellen ausgewählt werden, die der Pixeldichte eines Bildschirms am besten entsprechen.
Dies ähnelt der Rolle, die `x`-Deskriptoren im Attribut `srcset` des `<img>`-Elements spielen, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Wenn ein Server den `DPR`-Hinweis verwendet, um zu entscheiden, welche Ressource in einer Antwort gesendet wird, muss die Antwort den Header {{HTTPHeader("Content-DPR")}} enthalten.
Der Client muss den Wert in `Content-DPR` für das Layout verwenden, wenn er sich vom Wert im `DPR`-Header der Anforderung unterscheidet.
Erscheint der `DPR`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

Server, die sich für den `DPR`-Client-Hinweis entscheiden, geben diesen typischerweise auch im Header {{HTTPHeader("Vary")}} an, um Caches darüber zu informieren, dass der Server unterschiedliche Antworten basierend auf dem Headerwert in einer Anforderung senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

Ein Server muss zuerst zulassen, dass er den `DPR`-Header empfängt, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `DPR` sendet.

```http
Accept-CH: DPR
```

Dann kann der Client bei nachfolgenden Anfragen den `DPR`-Header an den Server senden:

```http
DPR: 2.0
```

Wenn eine Anfrage mit dem `DPR`-Header (wie oben gezeigt) für eine Bildressource gestellt wird, muss die Serverantwort den Header {{HTTPHeader("Content-DPR")}} enthalten:

```http
Content-DPR: 2.0
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geräte-Client-Hinweise
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
