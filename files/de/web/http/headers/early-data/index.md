---
title: Early-Data
slug: Web/HTTP/Headers/Early-Data
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{SeeCompatTable}}{{HTTPSidebar}}

Der HTTP-**`Early-Data`**-{{Glossary("request_header", "Request-Header")}} wird von einem Zwischenserver gesetzt, um anzuzeigen, dass die Anfrage in [TLS Early Data](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3) übertragen wurde und dass der Zwischenserver den {{HTTPStatus("425", "425 Too Early")}} Statuscode versteht.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht frühe Daten (auch bekannt als Zero Round-Trip Time [(0-RTT) Daten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)) dem Client, in der ersten Rundreise einer Verbindung Daten an einen Server zu senden, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten.
Dies verringert die Latenz bei wiederholten Verbindungen zwischen einem Client und einem Server, hat jedoch Sicherheitsimplikationen, da frühe Daten anfällig für Replay-Angriffe sind.

Der `Early-Data`-Header wird **nicht** vom Ersteller der Anfrage (d. h. einem Browser) gesetzt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

Ein Client, der frühe Daten verwenden möchte, kann HTTP-Anfragen unmittelbar nach dem Versand des TLS-`ClientHello` senden.
Das Versenden einer Anfrage in frühen Daten impliziert, dass der Client bereit ist, eine Anfrage als Antwort auf einen {{HTTPStatus("425", "425 Too Early")}}-Statuscode erneut zu senden, sodass der `Early-Data`-Header nicht enthalten ist:

```http
GET /resource HTTP/1.1
Host: example.com
```

Ein Zwischenserver, der eine Anfrage vor Abschluss des TLS-Handshakes mit seinem Client weiterleitet, sendet sie mit dem auf `1` gesetzten `Early-Data`-Header:

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
