---
title: Trailer header
short-title: Trailer
slug: Web/HTTP/Reference/Headers/Trailer
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **Trailer** {{Glossary("request_header", "Anfrage")}} und {{Glossary("response_header", "Antwort-Header")}} erlaubt es dem Sender, zusätzliche Felder am Ende von gechunkten Nachrichten hinzuzufügen, um Metadaten bereitzustellen, die möglicherweise während des Sendens des Nachrichtenkörpers dynamisch generiert werden.

> [!NOTE]
> Der {{HTTPHeader("TE")}} Anforderungs-Header muss auf `trailers` gesetzt werden, um Trailer-Felder zuzulassen.

> [!WARNING]
> Entwickler können nicht auf HTTP-Trailer über die Fetch-API oder XHR zugreifen.
> Zusätzlich ignorieren Browser HTTP-Trailer, mit Ausnahme von {{HTTPHeader("Server-Timing")}}.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}},
        {{Glossary("Content_header", "Inhalts-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Trailer: header-names
```

## Richtlinien

- `header-names`

  - : HTTP Header-Felder, die im Trailer-Teil von gechunkten Nachrichten vorhanden sein werden.
    Die folgenden Header-Namen sind **unzulässig**:

    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, und `Trailer`
    - Authentifizierungs-Header (z. B. {{HTTPHeader("Authorization")}} oder {{HTTPHeader("Set-Cookie")}})
    - Nachrichten-Framing-Header (z. B. {{HTTPHeader("Transfer-Encoding")}} und {{HTTPHeader("Content-Length")}})
    - Routing-Header (z. B. {{HTTPHeader("Host")}})
    - Anfragemodifikatoren (z. B. Steuerungen und Bedingungen, wie {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, oder {{HTTPHeader("TE")}})

## Beispiele

### Server-Timing als HTTP-Trailer

Einige Browser unterstützen das Anzeigen von Server-Timing-Daten in den Entwickler-Tools, wenn der {{HTTPHeader("Server-Timing")}} Header als Trailer gesendet wird.
Im folgenden Antwort wird der `Trailer` Header verwendet, um anzuzeigen, dass ein `Server-Timing` Header dem Nachrichtenkörper folgen wird.
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
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
