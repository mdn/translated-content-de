---
title: DPR
slug: Web/HTTP/Headers/DPR
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

Der **`DPR`** [device client hint](/de/docs/Web/HTTP/Client_hints) Request-Header gibt das Geräte-Pixelverhältnis des Clientgeräts an. Dieses Verhältnis ist die Anzahl physischer Gerät-Pixel, die jedem {{Glossary("CSS pixel")}} entsprechen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis ist nützlich, wenn es darum geht, Bildquellen auszuwählen, die der Pixeldichte eines Bildschirms am besten entsprechen. Dies ist ähnlich der Funktion, die `x` Deskriptoren im `<img>` [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut spielen, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Wenn ein Server den `DPR`-Hinweis verwendet, um auszuwählen, welche Ressource in einer Antwort gesendet wird, muss die Antwort den {{HTTPHeader("Content-DPR")}} Header enthalten. Der Client muss den Wert in `Content-DPR` für das Layout verwenden, wenn er sich vom Wert im `DPR` Header der Anfrage unterscheidet.

Wenn der `DPR`-Header mehr als einmal in einer Nachricht erscheint, wird das letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client-Hinweise sind nur auf sicheren Ursprüngen (über TLS) zugänglich.
> - Ein Server muss sich dafür entscheiden, den `DPR`-Header vom Client zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet.
> - Server, die sich für den `DPR`-Client-Hinweis entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}} Header an. Dies informiert Caches darüber, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.
> - `DPR` wurde aus der Client-Hinweise-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr) (Responsive Image Client Hints).

## Syntax

```http
DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Geräte-Pixelverhältnis des Clients.

## Beispiele

Ein Server muss zuerst dafür optieren, den `DPR`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Anweisung `DPR` sendet.

```http
Accept-CH: DPR
```

Dann kann der Client bei nachfolgenden Anfragen den `DPR`-Header an den Server senden:

```http
DPR: 2.0
```

Wenn eine Anfrage mit dem `DPR`-Header (wie oben gezeigt) für eine Bild-Ressource ist, muss die Serverantwort den {{HTTPHeader("Content-DPR")}} Header enthalten:

```http
Content-DPR: 2.0
```

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte-Client-Hinweise

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
