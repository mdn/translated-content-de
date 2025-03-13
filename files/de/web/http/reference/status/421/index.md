---
title: 421 Misdirected Request
slug: Web/HTTP/Reference/Status/421
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`421 Misdirected Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gibt an, dass die Anfrage an einen Server geleitet wurde, der nicht in der Lage ist, eine Antwort zu erzeugen.
Dies kann von einem Server gesendet werden, der nicht so konfiguriert ist, dass er Antworten für die Kombination von [Schema](/de/docs/Web/URI/Reference/Schemes) und [Autorität](/de/docs/Web/URI/Reference/Authority) erzeugt, die in der Anforderungs-URI enthalten sind.

Clients können die Anfrage über eine andere Verbindung erneut versuchen.

## Status

```http
421 Misdirected Request
```

## Beispiele

### Apache SNI-Fehler

Bei der folgenden Anfrage:

```http
GET / HTTP/1.1
Host: abc.example.com
```

In Fällen wie einem Platzhalterzertifikat (`*.example.com`) und einer Verbindung, die für mehrere Domains (`abc.example.com`, `def.example.com`) wiederverwendet wird, kann der Server mit einem 421 antworten:

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Mehrere Hosts und falsch zugewiesene Anfragen](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache Server-Dokumentation
- [TLS 1.3](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication)
- [Transport Layer Security (TLS)-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/TLS)
- Apache [Fehlercode `AH02032`](https://svn.apache.org/viewvc?view=revision&revision=1705672) Implementierung
