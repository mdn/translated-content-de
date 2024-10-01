---
title: Trailer
slug: Web/HTTP/Headers/Trailer
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **Trailer**-Response-Header ermöglicht es dem Absender, zusätzliche Felder am Ende von Chunked-Nachrichten einzufügen, um Metadaten bereitzustellen, die möglicherweise dynamisch generiert werden, während der Nachrichteninhalt gesendet wird, wie z. B. eine Integritätsprüfung der Nachricht, digitale Signaturen oder der Status der Nachbearbeitung.

> [!NOTE]
> Der {{HTTPHeader("TE")}}-Request-Header muss auf "trailers" gesetzt werden, um Trailer-Felder zuzulassen.

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
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Trailer: header-names
```

## Direktiven

- `header-names`

  - : HTTP-Headerfelder, die im Trailer-Teil von Chunked-Nachrichten vorhanden sein werden.
    Diese Headerfelder sind **nicht erlaubt**:

    - Nachrichtenrahmen-Header (z. B. {{HTTPHeader("Transfer-Encoding")}} und
      {{HTTPHeader("Content-Length")}}),
    - Routing-Header (z. B. {{HTTPHeader("Host")}}),
    - Anforderungsmodifikatoren (z. B. Steuerungen und Bedingungen, wie
      {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}} oder
      {{HTTPHeader("TE")}}),
    - Authentifizierungs-Header (z. B. {{HTTPHeader("Authorization")}} oder
      {{HTTPHeader("Set-Cookie")}}),
    - oder {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}},
      {{HTTPHeader("Content-Range")}} und `Trailer` selbst.

## Beispiele

### Chunked-Transfer-Encoding mit einem Trailer-Header

In diesem Beispiel wird der {{HTTPHeader("Expires")}}-Header am Ende der Chunked-Nachricht verwendet und dient als Trailer-Header.

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
Expires: Wed, 21 Oct 2015 07:28:00 GMT\r\n
\r\n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("TE")}}
- [Chunkierte Transfer-Codierung](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
