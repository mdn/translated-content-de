---
title: Early-Data
slug: Web/HTTP/Reference/Headers/Early-Data
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{HTTPSidebar}}

Der HTTP-**`Early-Data`**-{{Glossary("request_header", "Anforderungsheader")}} wird von einem Vermittler gesetzt, um anzuzeigen, dass die Anforderung in [TLS-Frühdaten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3) übermittelt wurde, und zeigt auch an, dass der Vermittler den {{HTTPStatus("425", "425 Too Early")}} Statuscode versteht.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht es Frühdaten (auch bekannt als Null-Round-Trip-Time [(0-RTT) Daten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)) dem Client, Daten an einen Server in der ersten Runde einer Verbindung zu senden, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten.
Dies verringert die Latenzzeit bei wiederholten Verbindungen zwischen einem Client und Server, hat jedoch Sicherheitsimplikationen, da Frühdaten anfällig für Replay-Angriffe sind.

Der `Early-Data`-Header wird **nicht** vom Ursprung der Anforderung (d.h. einem Browser) gesetzt.

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

Ein Client, der Frühdaten verwenden möchte, kann HTTP-Anforderungen sofort nach dem Senden des TLS-`ClientHello` senden.
Das Senden einer Anforderung in Frühdaten impliziert, dass der Client bereit ist, in Reaktion auf einen {{HTTPStatus("425", "425 Too Early")}}-Statuscode eine Anforderung zu wiederholen, sodass der `Early-Data`-Header nicht enthalten ist:

```http
GET /resource HTTP/1.1
Host: example.com
```

Ein Vermittler, der eine Anforderung vor Abschluss des TLS-Handshakes mit seinem Client weiterleitet, sendet sie mit dem auf `1` gesetzten `Early-Data`-Header:

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
