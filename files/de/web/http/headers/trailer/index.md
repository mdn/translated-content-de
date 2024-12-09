---
title: Trailer
slug: Web/HTTP/Headers/Trailer
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **Trailer** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwortheader")}} erlaubt es dem Absender, zusätzliche Felder am Ende von chunked Nachrichten hinzuzufügen, um Metadaten bereitzustellen, die möglicherweise während des Sendens des Nachrichtenkörpers dynamisch erzeugt werden.

> [!NOTE]
> Der {{HTTPHeader("TE")}} Anforderungsheader muss auf `trailers` gesetzt sein, um Trailer-Felder zu ermöglichen.

> [!WARNING]
> Entwickler können nicht über die Fetch API oder XHR auf HTTP-Trailer zugreifen.
> Außerdem ignorieren Browser HTTP-Trailer, mit Ausnahme des {{HTTPHeader("Server-Timing")}} Headers.
> Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwortheader")}},
        {{Glossary("Content_header", "Inhaltsheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

    - {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Range")}} und `Trailer`
    - Authentifizierungsheader (z. B. {{HTTPHeader("Authorization")}} oder {{HTTPHeader("Set-Cookie")}})
    - Nachrichtenrahmen-Header (z. B. {{HTTPHeader("Transfer-Encoding")}} und {{HTTPHeader("Content-Length")}})
    - Routing-Header (z. B. {{HTTPHeader("Host")}})
    - Anforderungsmodifikatoren (z. B. Steuerungen und Bedingungen wie {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}} oder {{HTTPHeader("TE")}})

## Beispiele

### Server-Timing als HTTP-Trailer

Einige Browser unterstützen die Anzeige von Server-Timing-Daten in den Entwicklertools, wenn der {{HTTPHeader("Server-Timing")}} Header als Trailer gesendet wird.
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
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
