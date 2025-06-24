---
title: Trailer header
short-title: Trailer
slug: Web/HTTP/Reference/Headers/Trailer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **Trailer** {{Glossary("request_header", "Request-")}} und {{Glossary("response_header", "Response-Header")}} ermöglicht es dem Absender, zusätzliche Felder am Ende von gestückelten Nachrichten hinzuzufügen, um Metadaten bereitzustellen, die während des Sendens des Nachrichtenkörpers dynamisch generiert werden könnten.

> [!NOTE]
> Der {{HTTPHeader("TE")}} Request-Header muss auf `trailers` gesetzt werden, um Trailer-Felder zuzulassen.

> [!WARNING]
> Entwickler können nicht über die Fetch API oder XHR auf HTTP-Trailer zugreifen.
> Darüber hinaus ignorieren Browser HTTP-Trailer, mit Ausnahme von {{HTTPHeader("Server-Timing")}}.
> Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}},
        {{Glossary("Content_header", "Content-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Trailer: header-names
```

## Direktiven

- `header-names`
  - : HTTP-Header-Felder, die im Trailer-Teil von gestückelten Nachrichten vorhanden sein werden.
    Folgende Header-Namen sind **nicht erlaubt**:
    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, und `Trailer`
    - Authentifizierungsheader (z.B., {{HTTPHeader("Authorization")}} oder {{HTTPHeader("Set-Cookie")}})
    - Nachrichtenrahmen-Header (z.B., {{HTTPHeader("Transfer-Encoding")}} und {{HTTPHeader("Content-Length")}})
    - Routing-Header (z.B., {{HTTPHeader("Host")}})
    - Request-Modifikatoren (z.B., Steuerungen und Bedingungen, wie {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, oder {{HTTPHeader("TE")}})

## Beispiele

### Server-Timing als HTTP-Trailer

Einige Browser unterstützen das Anzeigen von Servertimings in den Entwicklertools, wenn der {{HTTPHeader("Server-Timing")}} Header als Trailer gesendet wird.
Im folgenden Antwort wird der `Trailer`-Header verwendet, um anzugeben, dass ein `Server-Timing`-Header dem Antwortkörper folgen wird.
Ein Metrik `custom-metric` mit einer Dauer von `123.4` Millisekunden wird gesendet:

```http
HTTP/1.1 200 OK
Transfer-Encoding: chunked
Trailer: Server-Timing

--- response body ---
Server-Timing: custom-metric;dur=123.4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Server-Timing")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
