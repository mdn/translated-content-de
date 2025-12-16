---
title: Sec-CH-DPR header
short-title: Sec-CH-DPR
slug: Web/HTTP/Reference/Headers/Sec-CH-DPR
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

{{SecureContext_Header}}

Der HTTP **`Sec-CH-DPR`** {{Glossary("request_header", "Anforderungs-Header")}} liefert [Geräte-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) über das Pixelverhältnis (DPR) des Client-Geräts. Dieses Verhältnis ist die Anzahl physischer Gerätepixel, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Dieser Hinweis ist nützlich, um Bildquellen auszuwählen, die am besten zur Pixeldichte eines Bildschirms passen. Dies ist ähnlich der Rolle, die `x`-Deskriptoren im `<img>`-[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut spielen, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Erscheint der `Sec-CH-DPR`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

Server, die sich für den `Sec-CH-DPR`-Client-Hinweis entscheiden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}} Header an, um Caches darüber zu informieren, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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

Ein Server muss zuerst zustimmen, den `Sec-CH-DPR`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} sendet, der die Direktive `Sec-CH-DPR` enthält.

```http
Accept-CH: Sec-CH-DPR
```

Dann könnte der Client bei nachfolgenden Anfragen den `Sec-CH-DPR`-Header an den Server senden:

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
- [Verbesserung der Benutzerprivatsphäre und des Entwicklererlebnisses mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
