---
title: Early-Data
slug: Web/HTTP/Headers/Early-Data
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{SeeCompatTable}}{{HTTPSidebar}}

Der HTTP **`Early-Data`** {{Glossary("request_header", "Request-Header")}} wird von einem Vermittler gesetzt, um anzuzeigen, dass die Anfrage in [TLS Frühdaten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3) übermittelt wurde, und zeigt auch an, dass der Vermittler den {{HTTPStatus("425", "425 Too Early")}} Statuscode versteht.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglichen Frühdaten (auch bekannt als Zero Round-Trip Time [(0-RTT) Daten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)), dass der Client Daten in der ersten Runde einer Verbindung an einen Server sendet, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshake")}} zu warten.
Dies reduziert die Latenz bei erneuten Verbindungen zwischen einem Client und Server, hat jedoch Sicherheitsimplikationen, da Frühdaten anfällig für Replay-Angriffe sind.

Der `Early-Data`-Header wird **nicht** vom Urheber der Anfrage gesetzt (d.h. einem Browser).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Early-Data: 1
```

## Beispiele

### Eine GET-Anfrage mit einem Early-Data-Header

Ein Client, der frühere Daten verwenden möchte, kann HTTP-Anfragen sofort nach dem Senden des TLS `ClientHello` senden.
Das Senden einer Anfrage in Frühdaten impliziert, dass der Client bereit ist, eine Anfrage als Antwort auf einen {{HTTPStatus("425", "425 Too Early")}} Statuscode zu wiederholen, sodass der `Early-Data`-Header nicht enthalten ist:

```http
GET /resource HTTP/1.1
Host: example.com
```

Ein Vermittler, der eine Anfrage vor Abschluss des TLS-Handshakes mit seinem Client weiterleitet, sendet sie mit dem `Early-Data`-Header auf `1` gesetzt:

```http
GET /resource HTTP/1.1
Host: example.com
Early-Data: 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus("425", "425 Too Early")}}
- [Replay-Angriffe auf 0-RTT](https://www.rfc-editor.org/rfc/rfc8446#appendix-E.5)
