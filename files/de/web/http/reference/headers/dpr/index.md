---
title: DPR header
short-title: DPR
slug: Web/HTTP/Reference/Headers/DPR
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> Der `DPR`-Header wurde in {{HTTPHeader("Sec-CH-DPR")}} umbenannt, und der neue Name wird nun bevorzugt.

Der HTTP **`DPR`** {{Glossary("request_header", "Request-Header")}} liefert [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) zum Pixelverhältnis (DPR) des Geräts. Dieses Verhältnis ist die Anzahl physikalischer Gerätepixel, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

Der Hinweis ist nützlich, wenn Bildquellen ausgewählt werden sollen, die der Pixeldichte eines Bildschirms am besten entsprechen. Dies ist ähnlich der Rolle, die `x`-Deskriptoren im `<img>`-[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut spielen, um Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Wenn ein Server den `DPR`-Hinweis verwendet, um zu entscheiden, welche Ressource in einer Antwort gesendet wird, muss die Antwort den Header {{HTTPHeader("Content-DPR")}} enthalten. Der Client muss den Wert von `Content-DPR` für das Layout verwenden, falls dieser vom Wert im `DPR`-Header der Anfrage abweicht.

Erscheint der `DPR`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

Server, die den `DPR`-Client-Hinweis verwenden, werden ihn typischerweise auch im {{HTTPHeader("Vary")}}-Header angeben, um Caches darüber zu informieren, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.

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
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Request-Header")}}</th>
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

Ein Server muss zunächst die Annahme des `DPR`-Headers aktivieren, indem er den Antwort-Header {{HTTPHeader("Accept-CH")}} mit der Direktive `DPR` sendet.

```http
Accept-CH: DPR
```

Bei nachfolgenden Anfragen kann der Client dann den `DPR`-Header an den Server senden:

```http
DPR: 2.0
```

Wenn eine Anfrage mit dem `DPR`-Header (wie oben gezeigt) für eine Bildressource bestimmt ist, muss die Serverantwort den {{HTTPHeader("Content-DPR")}}-Header enthalten:

```http
Content-DPR: 2.0
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Client-Hinweise für Geräte
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
