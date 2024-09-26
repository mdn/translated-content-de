---
title: DPR
slug: Web/HTTP/Headers/DPR
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

Der **`DPR`** [Geräte-Client-Hinweis](/de/docs/Web/HTTP/Client_hints) Anfrage-Header gibt das Gerät-Pixel-Verhältnis des Clients an. Dieses Verhältnis ist die Anzahl physischer Pixel des Geräts, die jedem {{Glossary("CSS pixel")}} entsprechen.

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

Der Hinweis ist nützlich bei der Auswahl von Bildquellen, die am besten zur Pixeldichte eines Bildschirms passen. Dies ähnelt der Rolle, die `x` Deskriptoren im `<img>` [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut spielen, um Benutzeragenten zu erlauben, ein bevorzugtes Bild auszuwählen.

Wenn ein Server den `DPR` Hinweis verwendet, um auszuwählen, welche Ressource in einer Antwort gesendet wird, muss die Antwort den {{HTTPHeader("Content-DPR")}} Header enthalten. Der Client muss den Wert in `Content-DPR` für das Layout verwenden, wenn er sich vom Wert im `DPR` Header der Anfrage unterscheidet.

Erscheint der `DPR` Header mehr als einmal in einer Nachricht, wird die letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client-Hinweise sind nur auf sicheren Ursprüngen zugänglich (via TLS).
> - Ein Server muss ausdrücklich zustimmen, den `DPR` Header vom Client zu erhalten, indem er den {{HTTPHeader("Accept-CH")}} Antwortheader sendet.
> - Server, die dem `DPR` Client-Hinweis zustimmen, geben diesen typischerweise auch im {{HTTPHeader("Vary")}} Header an. Dies teilt Caches mit, dass der Server unterschiedliche Antworten basierend auf dem Headerwert in einer Anfrage senden kann.
> - `DPR` wurde aus der Client-Hinweise-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr) (Responsive Image Client Hints).

## Syntax

```http
DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Gerät-Pixel-Verhältnis des Clients.

## Beispiele

Ein Server muss zuerst zustimmen, den `DPR` Header zu empfangen, indem er den Antwortheader {{HTTPHeader("Accept-CH")}} mit der Direktive `DPR` sendet.

```http
Accept-CH: DPR
```

Dann kann der Client bei nachfolgenden Anfragen den `DPR` Header an den Server senden:

```http
DPR: 2.0
```

Wenn eine Anfrage mit dem `DPR` Header (wie oben gezeigt) für eine Bildressource erfolgt, muss die Serverantwort den {{HTTPHeader("Content-DPR")}} Header enthalten:

```http
Content-DPR: 2.0
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Geräte-Client-Hinweise

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
