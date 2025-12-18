---
title: Sec-CH-DPR header
short-title: Sec-CH-DPR
slug: Web/HTTP/Reference/Headers/Sec-CH-DPR
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-DPR`** {{Glossary("request_header", "Request-Header")}} bietet [Client-Hinweise für Geräte](/de/docs/Web/HTTP/Guides/Client_hints) über das Pixelverhältnis (DPR) des Client-Geräts.
Dieses Verhältnis ist die Anzahl der physischen Geräte-Pixel, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Der Hinweis ist nützlich, um Bildquellen auszuwählen, die am besten zur Pixeldichte eines Bildschirms passen.
Das ist ähnlich der Rolle, die `x`-Deskriptoren im `<img>` [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut spielen, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Erscheint der `Sec-CH-DPR`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

Server, die sich für den `Sec-CH-DPR`-Client-Hinweis entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Caches mitzuteilen, dass der Server je nach Headerwert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
Sec-CH-DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Pixelverhältnis des Client-Geräts.

## Beispiele

Ein Server muss zunächst einwilligen, den `Sec-CH-DPR`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Sec-CH-DPR` sendet.

```http
Accept-CH: Sec-CH-DPR
```

Bei nachfolgenden Anfragen könnte der Client dann den `Sec-CH-DPR`-Header an den Server senden:

```http
Sec-CH-DPR: 2.0
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geräte-Client-Hinweise
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
