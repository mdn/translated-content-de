---
title: Early-Data header
short-title: Early-Data
slug: Web/HTTP/Reference/Headers/Early-Data
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-**`Early-Data`**-{{Glossary("request_header", "Anforderungsheader")}} wird von einem Vermittler gesetzt, um anzuzeigen, dass die Anforderung in [TLS-Early-Data](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3) übermittelt wurde und auch anzeigt, dass der Vermittler den {{HTTPStatus("425", "425 Too Early")}}-Statuscode versteht.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht es Early Data (auch bekannt als Zero Round-Trip Time [(0-RTT) Data](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)) dem Client, Daten in der ersten Runde eines Verbindungsaufbaus zu einem Server zu senden, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten.
Dies reduziert die Latenz bei wiederholten Verbindungen zwischen einem Client und Server, hat jedoch sicherheitsrelevante Auswirkungen, da Early Data anfällig für Replay-Angriffe ist.

Der `Early-Data`-Header wird **nicht** vom Urheber der Anforderung (d.h. einem Browser) gesetzt.

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

### Eine GET-Anforderung mit einem Early-Data-Header

Ein Client, der Early Data verwenden möchte, kann HTTP-Anfragen sofort nach dem Senden des TLS-`ClientHello` senden.
Das Senden einer Anfrage in Early Data impliziert, dass der Client bereit ist, eine Anfrage erneut zu versuchen, wenn er als Antwort einen {{HTTPStatus("425", "425 Too Early")}}-Statuscode erhält, sodass der `Early-Data`-Header nicht enthalten ist:

```http
GET /resource HTTP/1.1
Host: example.com
```

Ein Vermittler, der eine Anfrage vor dem Abschluss des TLS-Handshakes mit seinem Client weiterleitet, sendet sie mit dem auf `1` gesetzten `Early-Data`-Header:

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
