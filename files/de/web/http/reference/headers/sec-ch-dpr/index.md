---
title: Sec-CH-DPR header
short-title: Sec-CH-DPR
slug: Web/HTTP/Reference/Headers/Sec-CH-DPR
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{SecureContext_Header}}{{SeeCompatTable}}

Der HTTP **`Sec-CH-DPR`** {{Glossary("request_header", "Request-Header")}} liefert [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) über das Pixelverhältnis (DPR) des Client-Geräts. Dieses Verhältnis ist die Anzahl der physischen Gerätepixel, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Der Hinweis ist nützlich bei der Auswahl von Bildquellen, die am besten zur Pixeldichte eines Bildschirms passen. Dies ist ähnlich der Funktion von `x`-Deskriptoren im `<img>`-[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Erscheint der `Sec-CH-DPR`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

Server, die den `Sec-CH-DPR`-Client-Hinweis verwenden, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an, um Cache-Systeme darauf hinzuweisen, dass der Server unterschiedliche Antworten basierend auf dem Header-Wert in einer Anfrage senden kann.

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
Sec-CH-DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Pixelverhältnis des Client-Geräts.

## Beispiele

Ein Server muss zunächst zustimmen, den `Sec-CH-DPR`-Header zu empfangen, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `Sec-CH-DPR` sendet.

```http
Accept-CH: Sec-CH-DPR
```

Dann kann der Client bei nachfolgenden Anfragen den `Sec-CH-DPR`-Header an den Server senden:

```http
Sec-CH-DPR: 2.0
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Geräte- und Client-Hinweise für responsive Bilder
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
