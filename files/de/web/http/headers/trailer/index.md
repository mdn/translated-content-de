---
title: Trailer
slug: Web/HTTP/Headers/Trailer
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der **Trailer**-Antwortkopf ermöglicht es dem Absender, zusätzliche Felder am Ende von Chunk-Nachrichten zu inkludieren, um Metadaten bereitzustellen, die während des Sendens des Nachrichtenkörpers dynamisch generiert werden könnten, wie z. B. eine Integritätsprüfung der Nachricht, eine digitale Signatur oder ein Nachverarbeitungsstatus.

> [!NOTE]
> Der {{HTTPHeader("TE")}}-Anforderungskopf muss auf "trailers" gesetzt werden, um Trailer-Felder zuzulassen.

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

  - : HTTP-Headerfelder, die im Trailer-Abschnitt von Chunk-Nachrichten vorhanden sein werden. Diese Headerfelder sind **nicht erlaubt**:

    - Nachrichten-Rahmen-Header (z.B. {{HTTPHeader("Transfer-Encoding")}} und
      {{HTTPHeader("Content-Length")}}),
    - Routing-Header (z.B. {{HTTPHeader("Host")}}),
    - Anforderungs-Modifikatoren (z.B. Steuerungen und Bedingungen, wie
      {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Max-Forwards")}}, oder
      {{HTTPHeader("TE")}}),
    - Authentifizierungs-Header (z.B. {{HTTPHeader("Authorization")}} oder
      {{HTTPHeader("Set-Cookie")}}),
    - oder {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}},
      {{HTTPHeader("Content-Range")}}, und `Trailer` selbst.

## Beispiele

### Chunked Transfer Encoding mit einem nachgestellten Header

In diesem Beispiel wird der {{HTTPHeader("Expires")}}-Header am Ende der Chunk-Nachricht verwendet und dient als nachgestellter Header.

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Entwickler\r\n
7\r\n
Netzwerk\r\n
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
- [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
