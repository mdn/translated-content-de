---
title: DPR
slug: Web/HTTP/Headers/DPR
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

Der **`DPR`** [Device Client Hint](/de/docs/Web/HTTP/Client_hints) Request-Header gibt das Pixelverhältnis des Client-Geräts an. Dieses Verhältnis beschreibt die Anzahl physischer Gerätepixel, die jedem {{Glossary("CSS_pixel", "CSS-Pixel")}} entsprechen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Der Hinweis ist nützlich bei der Auswahl von Bildquellen, die am besten zur Pixeldichte eines Bildschirms passen. Dies ähnelt der Rolle, die `x`-Deskriptoren im `<img>`-Attribut [`srcset`](/de/docs/Web/HTML/Element/img#srcset) spielen, um den Benutzeragenten die Auswahl eines bevorzugten Bildes zu ermöglichen.

Wenn ein Server den `DPR`-Hinweis verwendet, um zu entscheiden, welche Ressource in einer Antwort gesendet wird, muss die Antwort den {{HTTPHeader("Content-DPR")}}-Header enthalten. Der Client muss den Wert in `Content-DPR` für das Layout verwenden, wenn er sich von dem Wert im `DPR`-Header der Anfrage unterscheidet.

Erscheint der `DPR`-Header mehrmals in einer Nachricht, wird das letzte Vorkommen verwendet.

> [!NOTE]
>
> - Client Hints sind nur auf sicheren Ursprüngen (über TLS) zugänglich.
> - Ein Server muss sich anmelden, um den `DPR`-Header vom Client zu erhalten, indem er den {{HTTPHeader("Accept-CH")}}-Antwortheader sendet.
> - Server, die den `DPR`-Client-Hinweis akzeptieren, geben diesen typischerweise auch im {{HTTPHeader("Vary")}}-Header an. Dies informiert Caches, dass der Server basierend auf dem Header-Wert in einer Anfrage unterschiedliche Antworten senden kann.
> - `DPR` wurde in der Client Hints-Spezifikation in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) entfernt. Der vorgeschlagene Ersatz ist [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr) (Responsive Image Client Hints).

## Syntax

```http
DPR: <number>
```

## Direktiven

- `<number>`
  - : Das Pixelverhältnis des Client-Geräts.

## Beispiele

Ein Server muss zunächst optieren, um den `DPR`-Header zu erhalten, indem er den Antwortheader {{HTTPHeader("Accept-CH")}} mit der Direktive `DPR` sendet.

```http
Accept-CH: DPR
```

Dann kann der Client bei nachfolgenden Anfragen den `DPR`-Header an den Server senden:

```http
DPR: 2.0
```

Wenn eine Anfrage mit dem `DPR`-Header (wie oben gezeigt) für eine Bildressource ist, muss die Serverantwort den Header {{HTTPHeader("Content-DPR")}} enthalten:

```http
Content-DPR: 2.0
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Device Client Hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
