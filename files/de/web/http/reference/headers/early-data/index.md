---
title: Early-Data header
short-title: Early-Data
slug: Web/HTTP/Reference/Headers/Early-Data
l10n:
  sourceCommit: 74109a487250280f5f4c1595e91dfb43efef544a
---

{{SeeCompatTable}}

Der HTTP **`Early-Data`** {{Glossary("request_header", "Anforderungsheader")}} wird von einem Vermittler gesetzt, um anzuzeigen, dass die Anfrage in TLS-Frühdaten übertragen wurde, und zeigt auch an, dass der Vermittler den {{HTTPStatus("425", "425 Too Early")}} Statuscode versteht.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglichen es Frühdaten (auch bekannt als Zero-Round-Trip-Time (0-RTT) Daten) dem Client, Daten in der ersten Runde der Verbindung an einen Server zu senden, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten. Dies reduziert die Latenz bei wiederholten Verbindungen zwischen einem Client und Server, hat jedoch sicherheitsrelevante Implikationen, da Frühdaten anfällig für Replay-Angriffe sind.

Der `Early-Data`-Header wird **nicht** vom Urheber der Anfrage gesetzt (d.h. einem Browser).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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

Ein Client, der Frühdaten verwenden möchte, kann HTTP-Anfragen sofort nach dem Senden des TLS `ClientHello` senden. Das Senden einer Anfrage in Frühdaten impliziert, dass der Client bereit ist, eine Anfrage im Antwort auf einen {{HTTPStatus("425", "425 Too Early")}} Statuscode zu wiederholen, sodass der `Early-Data`-Header nicht inkludiert wird:

```http
GET /resource HTTP/1.1
Host: example.com
```

Ein Vermittler, der eine Anfrage vor Abschluss des TLS-Handshakes mit seinem Client weiterleitet, sendet sie mit dem `Early-Data`-Header, der auf `1` gesetzt ist:

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
