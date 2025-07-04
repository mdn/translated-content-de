---
title: 421 Misdirected Request
slug: Web/HTTP/Reference/Status/421
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`421 Misdirected Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Anfrage an einen Server gesendet wurde, der nicht in der Lage ist, eine Antwort zu erzeugen.
Dies kann von einem Server gesendet werden, der nicht dafür konfiguriert ist, Antworten für die Kombination aus [Scheme](/de/docs/Web/URI/Reference/Schemes) und [Authority](/de/docs/Web/URI/Reference/Authority) zu erzeugen, die in der Anfrage-URI enthalten sind.

Clients können die Anfrage über eine andere Verbindung erneut senden.

## Status

```http
421 Misdirected Request
```

## Beispiele

### Apache SNI-Fehler

Gegeben die folgende Anfrage:

```http
GET / HTTP/1.1
Host: abc.example.com
```

In Fällen wie einem Wildcard-Zertifikat (`*.example.com`) und einer Verbindung, die für mehrere Domains (`abc.example.com`, `def.example.com`) wiederverwendet wird, kann der Server mit einem 421 antworten:

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Mehrere Hosts und fehlgeleitete Anfragen](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache-Server-Dokumentation
- [TLS 1.3](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication)
- [Transport Layer Security (TLS) Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/TLS)
