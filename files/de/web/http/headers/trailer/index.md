---
title: Trailer
slug: Web/HTTP/Headers/Trailer
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **Trailer**-Antwort-Header ermöglicht es dem Sender, zusätzliche Felder am Ende von Chunked-Nachrichten hinzuzufügen, um Metadaten bereitzustellen, die während der Übertragung des Nachrichtenkörpers dynamisch generiert werden können, wie z.B. eine Integritätsprüfung der Nachricht, digitale Signatur oder Bearbeitungsstatus.

> [!NOTE]
> Der {{HTTPHeader("TE")}}-Anforderungs-Header muss auf "trailers" gesetzt werden, um Trailer-Felder zu erlauben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}},
        {{Glossary("Content header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

  - : HTTP-Header-Felder, die im Trailer-Teil von Chunked-Nachrichten vorhanden sein werden.
    Diese Header-Felder sind **nicht erlaubt**:

    - Nachrichtenformatierungs-Header (z.B. {{HTTPHeader("Transfer-Encoding")}} und
      {{HTTPHeader("Content-Length")}}),
    - Routing-Header (z.B. {{HTTPHeader("Host")}}),
    - Anforderungsmodifikatoren (z.B. Steuerungen und Bedingungen, wie
      {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, oder
      {{HTTPHeader("TE")}}),
    - Authentifizierungs-Header (z.B. {{HTTPHeader("Authorization")}} oder
      {{HTTPHeader("Set-Cookie")}}),
    - oder {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}},
      {{HTTPHeader("Content-Range")}}, und `Trailer` selbst.

## Beispiele

### Chunked-Transfer-Encoding mit einem abschließenden Header

In diesem Beispiel wird der {{HTTPHeader("Expires")}}-Header am Ende der Chunked-Nachricht verwendet und dient als abschließender Header.

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
- [Chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
