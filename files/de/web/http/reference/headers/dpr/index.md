---
title: DPR header
short-title: DPR
slug: Web/HTTP/Reference/Headers/DPR
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `DPR`-Header wurde aus der Spezifikation der Client-Hints in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt.
> Der vorgeschlagene Ersatz ist [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr) (Responsive Image Client Hints).

Der HTTP-**`DPR`**-{{Glossary("request_header", "Anforderungsheader")}} liefert [Geräte-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints) über das clientseitige Pixelverhältnis (DPR).
Dieses Verhältnis ist die Anzahl der physischen Gerät-Pixel, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Der Hinweis ist nützlich, um Bildquellen auszuwählen, die der Pixeldichte eines Bildschirms am besten entsprechen.
Dies ist ähnlich wie die Rolle, die `x`-Beschreibungen im `<img>`-[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut spielen, um Benutzeragenten zu ermöglichen, ein bevorzugtes Bild auszuwählen.

Wenn ein Server den `DPR`-Hinweis verwendet, um zu entscheiden, welche Ressource in einer Antwort gesendet wird, muss die Antwort den {{HTTPHeader("Content-DPR")}}-Header enthalten.
Der Client muss den Wert in `Content-DPR` für das Layout verwenden, wenn er sich von dem Wert im `DPR`-Header der Anforderung unterscheidet.
Wenn der `DPR`-Header mehrmals in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

Server, die sich für den `DPR`-Client-Hint entscheiden, geben diesen in der Regel auch im {{HTTPHeader("Vary")}}-Header an, um Caches darüber zu informieren, dass der Server möglicherweise unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage sendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
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
DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Pixelverhältnis des Client-Geräts.

## Beispiele

Ein Server muss zuerst zustimmen, den `DPR`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet, der die Direktive `DPR` enthält.

```http
Accept-CH: DPR
```

Bei nachfolgenden Anfragen könnte der Client dann den `DPR`-Header an den Server senden:

```http
DPR: 2.0
```

Wenn eine Anfrage mit dem `DPR`-Header (wie oben gezeigt) für eine Bildressource ist, muss die Serverantwort den {{HTTPHeader("Content-DPR")}}-Header beinhalten:

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
- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
