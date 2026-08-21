---
title: DPR header
short-title: DPR
slug: Web/HTTP/Reference/Headers/DPR
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `DPR`-Header wurde als {{HTTPHeader("Sec-CH-DPR")}} standardisiert und der neue Name wird jetzt bevorzugt.

Der HTTP **`DPR`** {{Glossary("request_header", "Request-Header")}} liefert [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) über das Pixelverhältnis (DPR) des Client-Geräts.
Dieses Verhältnis ist die Anzahl der physischen Gerät-Pixel, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Der Hinweis ist nützlich, um Bildquellen auszuwählen, die am besten zur Pixeldichte eines Bildschirms passen.
Dies ist ähnlich wie die Rolle, die `x`-Deskriptoren im `<img>`-[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut spielen, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Wenn ein Server den `DPR`-Hinweis verwendet, um auszuwählen, welche Ressource in einer Antwort gesendet wird, muss die Antwort den {{HTTPHeader("Content-DPR")}}-Header enthalten.
Der Client muss den Wert in `Content-DPR` für das Layout verwenden, wenn er sich vom Wert im `DPR`-Header der Anfrage unterscheidet.

Erscheint der `DPR`-Header mehr als einmal in einer Nachricht, wird das letzte Vorkommen verwendet.

Server, die sich für den `DPR`-Client-Hinweis entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Caches zu informieren, dass der Server aufgrund des Header-Werts in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
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

Ein Server muss zuerst zustimmen, den `DPR`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `DPR` sendet.

```http
Accept-CH: DPR
```

Dann kann der Client bei nachfolgenden Anfragen den `DPR`-Header an den Server senden:

```http
DPR: 2.0
```

Wenn eine Anfrage mit dem `DPR`-Header (wie oben gezeigt) für eine Bildressource erfolgt, muss die Serverantwort den {{HTTPHeader("Content-DPR")}}-Header enthalten:

```http
Content-DPR: 2.0
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geräte- und responsive Bild-Client-Hinweise
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
