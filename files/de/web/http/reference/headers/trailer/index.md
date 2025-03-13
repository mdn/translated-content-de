---
title: Trailer
slug: Web/HTTP/Reference/Headers/Trailer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **Trailer** {{Glossary("request_header", "Anforderungs")}} und {{Glossary("response_header", "Antwort-Header")}} ermöglicht es dem Absender, am Ende von chunked Nachrichten zusätzliche Felder hinzuzufügen, um Metadaten bereitzustellen, die möglicherweise dynamisch generiert werden, während der Nachrichtenkörper gesendet wird.

> [!NOTE]
> Der {{HTTPHeader("TE")}} Anforderungs-Header muss auf `trailers` gesetzt sein, um Trailer-Felder zuzulassen.

> [!WARNING]
> Entwickler können nicht auf HTTP-Trailer über die Fetch API oder XHR zugreifen.
> Zudem ignorieren Browser HTTP-Trailer, mit Ausnahme von {{HTTPHeader("Server-Timing")}}.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

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

  - : HTTP-Headerfelder, die im Trailer-Teil von chunked Nachrichten vorhanden sein werden.
    Die folgenden Header-Namen sind **nicht erlaubt**:

    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}}, und `Trailer`
    - Authentifizierungs-Header (z. B. {{HTTPHeader("Authorization")}} oder {{HTTPHeader("Set-Cookie")}})
    - Nachrichtenrahmen-Header (z. B. {{HTTPHeader("Transfer-Encoding")}} und {{HTTPHeader("Content-Length")}})
    - Routing-Header (z. B. {{HTTPHeader("Host")}})
    - Anforderungs-Modifikatoren (z. B. Steuerungen und Bedingungen, wie {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, oder {{HTTPHeader("TE")}})

## Beispiele

### Server-Timing als HTTP-Trailer

Einige Browser unterstützen die Anzeige von Server-Timing-Daten in den Entwickler-Tools, wenn der {{HTTPHeader("Server-Timing")}} Header als Trailer gesendet wird.
In der folgenden Antwort wird der `Trailer` Header verwendet, um anzugeben, dass ein `Server-Timing` Header nach dem Antwortkörper folgen wird.
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
- [Chunked-Transfer-Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
