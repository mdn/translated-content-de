---
title: Early-Data header
short-title: Early-Data
slug: Web/HTTP/Reference/Headers/Early-Data
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{SeeCompatTable}}

Der HTTP-**`Early-Data`**-{{Glossary("request_header", "Anforderungsheader")}} wird von einem Vermittler gesetzt, um anzuzeigen, dass die Anfrage in [TLS early data](/de/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3) übermittelt wurde, und gibt auch an, dass der Vermittler den {{HTTPStatus("425", "425 Too Early")}}-Statuscode versteht.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglicht frühe Daten (auch bekannt als Zero-Round-Trip-Zeit-[(0-RTT)-Daten](/de/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)) dem Client, Daten an einen Server in der ersten Round-Trip-Verbindung zu senden, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten.
Dies reduziert die Latenz bei wiederholten Verbindungen zwischen einem Client und Server, hat jedoch Sicherheitsimplikationen, da frühe Daten anfällig für Replay-Angriffe sind.

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

Ein Client, der frühe Daten verwenden möchte, kann HTTP-Anfragen sofort nach dem Senden des TLS `ClientHello` senden.
Das Senden einer Anfrage in frühen Daten impliziert, dass der Client bereit ist, eine Anfrage als Antwort auf einen {{HTTPStatus("425", "425 Too Early")}}-Statuscode zu wiederholen, daher wird der `Early-Data`-Header nicht eingeschlossen:

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
