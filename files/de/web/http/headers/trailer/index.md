---
title: Trailer
slug: Web/HTTP/Headers/Trailer
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **Trailer**-Antwortheader ermöglicht es dem Sender, zusätzliche Felder am Ende von chunked Nachrichten hinzuzufügen, um Metadaten bereitzustellen, die möglicherweise dynamisch generiert werden, während der Nachrichteninhalt gesendet wird, wie z. B. eine Nachrichten-Integritätsprüfung, eine digitale Signatur oder ein Nachbearbeitungsstatus.

> [!NOTE]
> Der {{HTTPHeader("TE")}}-Anforderungsheader muss auf "trailers" gesetzt sein, um Trailer-Felder zuzulassen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request header](/de/docs/Glossary/Request_header),
        [Response header](/de/docs/Glossary/Response_header),
        [Content header](/de/docs/Glossary/Content_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

  - : HTTP-Headerfelder, die im Trailer-Teil von chunked Nachrichten vorhanden sein werden. Diese Header-Felder sind **nicht erlaubt**:

    - Nachrichten-Rahmen-Header (z. B. {{HTTPHeader("Transfer-Encoding")}} und
      {{HTTPHeader("Content-Length")}}),
    - Routing-Header (z. B. {{HTTPHeader("Host")}}),
    - Anforderungsmodifikatoren (z. B. Steuerungen und Bedingungen, wie
      {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, oder
      {{HTTPHeader("TE")}}),
    - Authentifizierungsheader (z. B. {{HTTPHeader("Authorization")}} oder
      {{HTTPHeader("Set-Cookie")}}),
    - oder {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}},
      {{HTTPHeader("Content-Range")}} und `Trailer` selbst.

## Beispiele

### Chunked Transfer-Encoding mit einem anhängenden Header

In diesem Beispiel wird der {{HTTPHeader("Expires")}}-Header am Ende der chunked Nachricht verwendet und dient als anhängender Header.

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
- [Chunked Transfer-Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
