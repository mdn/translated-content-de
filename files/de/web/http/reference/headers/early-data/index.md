---
title: Early-Data header
short-title: Early-Data
slug: Web/HTTP/Reference/Headers/Early-Data
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{SeeCompatTable}}{{HTTPSidebar}}

Der HTTP-**`Early-Data`**-{{Glossary("request_header", "Request-Header")}} wird von einem Zwischenserver gesetzt, um anzuzeigen, dass die Anfrage in [TLS-Frühdaten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3) übermittelt wurde und dass der Zwischenserver den {{HTTPStatus("425", "425 Too Early")}}-Statuscode versteht.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht es Frühdaten (auch bekannt als null-Round-Trip-Time-[(0-RTT)-Daten](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)) dem Client, Daten an einen Server in der ersten Round-Trip-Zeit einer Verbindung zu senden, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten.
Dies reduziert die Latenzzeit bei erneuten Verbindungen zwischen einem Client und einem Server, hat jedoch Sicherheitsimplikationen, da Frühdaten anfällig für Replay-Angriffe sind.

Der `Early-Data`-Header wird **nicht** vom Urheber der Anfrage (d.h. von einem Browser) gesetzt.

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

Ein Client, der Frühdaten verwenden möchte, kann HTTP-Anfragen unmittelbar nach dem Senden des TLS-`ClientHello` senden.
Das Senden einer Anfrage in Frühdaten impliziert, dass der Client bereit ist, eine Anfrage als Antwort auf einen {{HTTPStatus("425", "425 Too Early")}}-Statuscode zu wiederholen, sodass der `Early-Data`-Header nicht enthalten ist:

```http
GET /resource HTTP/1.1
Host: example.com
```

Ein Zwischenserver, der eine Anfrage vor Abschluss des TLS-Handshakes mit seinem Client weiterleitet, sendet sie mit dem `Early-Data`-Header, der auf `1` gesetzt ist:

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
