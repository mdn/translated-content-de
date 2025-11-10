---
title: Trailer header
short-title: Trailer
slug: Web/HTTP/Reference/Headers/Trailer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **Trailer**-{{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwort-Header")}} erlaubt es dem Absender, zusätzliche Felder am Ende von chunked Nachrichten hinzuzufügen, um Metadaten bereitzustellen, die möglicherweise dynamisch generiert werden, während der Nachrichtenkörper gesendet wird.

> [!NOTE]
> Der {{HTTPHeader("TE")}} Anforderungs-Header muss auf `trailers` gesetzt werden, um Trailer-Felder zuzulassen.

> [!WARNING]
> Entwickler können über die Fetch API oder XHR nicht auf HTTP-Trailer zugreifen.
> Zusätzlich ignorieren Browser HTTP-Trailer, mit Ausnahme von {{HTTPHeader("Server-Timing")}}.
> Für weitere Informationen siehe [Browser-Kompatibilität](#browser-kompatibilität).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}},
        {{Glossary("Content_header", "Inhalts-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : HTTP-Header-Felder, die im Trailer-Teil von chunked Nachrichten vorhanden sein werden.
    Die folgenden Header-Namen sind **nicht erlaubt**:
    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, und `Trailer`
    - Authentifizierungs-Header (z.B. {{HTTPHeader("Authorization")}} oder {{HTTPHeader("Set-Cookie")}})
    - Nachrichten-Rahmen-Header (z.B. {{HTTPHeader("Transfer-Encoding")}} und {{HTTPHeader("Content-Length")}})
    - Routing-Header (z.B. {{HTTPHeader("Host")}})
    - Anforderungsmodifikatoren (z.B. Steuerelemente und Konditionale, wie {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, oder {{HTTPHeader("TE")}})

## Beispiele

### Server-Timing als HTTP-Trailer

Einige Browser unterstützen das Anzeigen von Server-Timing-Daten in den Entwicklerwerkzeugen, wenn der {{HTTPHeader("Server-Timing")}} Header als Trailer gesendet wird.
Im folgenden Antwortbeispiel wird der `Trailer` Header verwendet, um anzuzeigen, dass ein `Server-Timing` Header dem Antwortkörper folgen wird.
Eine Metrik `custom-metric` mit einer Dauer von `123.4` Millisekunden wird gesendet:

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
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
