---
title: Sec-CH-DPR header
short-title: Sec-CH-DPR
slug: Web/HTTP/Reference/Headers/Sec-CH-DPR
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP-**`Sec-CH-DPR`**-{{Glossary("request_header", "Anforderungsheader")}} liefert [Client-Hinweise zum Gerät](/de/docs/Web/HTTP/Guides/Client_hints) über das Geräte-Pixelverhältnis (DPR) des Clients.
Dieses Verhältnis gibt die Anzahl der physischen Geräte-Pixel an, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Der Hinweis ist nützlich, wenn Bildquellen ausgewählt werden sollen, die am besten zur Pixeldichte eines Bildschirms passen.
Dies ist ähnlich der Rolle, die `x`-Beschreiber im `<img>`-[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut spielen, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Erscheint der `Sec-CH-DPR` Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

Server, die sich für den `Sec-CH-DPR`-Client-Hinweis entscheiden, geben diesen in der Regel auch im {{HTTPHeader("Vary")}}-Header an, um Caches mitzuteilen, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
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
Sec-CH-DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Geräte-Pixelverhältnis des Clients.

## Beispiele

Ein Server muss zunächst dafür optieren, den `Sec-CH-DPR`-Header zu empfangen, indem er den Antwortheader {{HTTPHeader("Accept-CH")}} mit der Direktive `Sec-CH-DPR` sendet.

```http
Accept-CH: Sec-CH-DPR
```

Dann könnte der Client bei nachfolgenden Anfragen den `Sec-CH-DPR`-Header an den Server senden:

```http
Sec-CH-DPR: 2.0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Gerät- und responsive Bild-Client-Hinweise
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
