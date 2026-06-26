---
title: Early-Data header
short-title: Early-Data
slug: Web/HTTP/Reference/Headers/Early-Data
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{SeeCompatTable}}

Der HTTP-Anfrage-Header **`Early-Data`** wird von einem Vermittler gesetzt, um anzuzeigen, dass die Anfrage in TLS-Frühdaten übertragen wurde, und zeigt auch an, dass der Vermittler den Statuscode {{HTTPStatus("425", "425 Too Early")}} versteht.

Wenn ein Client kürzlich mit einem Server interagiert hat, ermöglichen es frühe Daten (auch bekannt als Daten mit Null-Rundreisezeit (0-RTT)), dass der Client Daten an einen Server in der ersten Rundreise einer Verbindung sendet, ohne auf den Abschluss des TLS-{{Glossary("TCP_handshake", "Handshakes")}} zu warten.
Dies reduziert die Latenzzeit bei wiederholten Verbindungen zwischen einem Client und einem Server, hat jedoch Sicherheitsimplikationen, da frühe Daten anfällig für Replay-Angriffe sind.

Der `Early-Data`-Header wird **nicht** vom Urheber der Anfrage (d.h. einem Browser) gesetzt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

Ein Client, der frühe Daten verwenden möchte, kann HTTP-Anfragen sofort nach dem Senden des TLS-`ClientHello` senden.
Das Senden einer Anfrage in frühen Daten impliziert, dass der Client bereit ist, eine Anfrage als Reaktion auf einen {{HTTPStatus("425", "425 Too Early")}}-Statuscode zu wiederholen, daher wird der `Early-Data`-Header nicht eingeschlossen:

```http
GET /resource HTTP/1.1
Host: example.com
```

Ein Vermittler, der eine Anfrage vor dem Abschluss des TLS-Handshakes mit seinem Client weiterleitet, sendet sie mit gesetztem `Early-Data`-Header auf `1`:

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
- [Replay-Angriffe auf 0-RTT](https://www.rfc-editor.org/info/rfc8446/#appendix-E.5)
