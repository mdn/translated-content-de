---
title: 421 Misdirected Request
slug: Web/HTTP/Reference/Status/421
l10n:
  sourceCommit: 74109a487250280f5f4c1595e91dfb43efef544a
---

Der HTTP-Statuscode **`421 Misdirected Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Anfrage an einen Server gesendet wurde, der nicht in der Lage ist, eine Antwort zu geben.
Dies kann von einem Server gesendet werden, der nicht konfiguriert ist, um Antworten für die Kombination von [Scheme](/de/docs/Web/URI/Reference/Schemes) und [Autorität](/de/docs/Web/URI/Reference/Authority) zu erzeugen, die in der Anfrage-URI enthalten sind.

Clients können die Anfrage über eine andere Verbindung erneut versuchen.

## Status

```http
421 Misdirected Request
```

## Beispiele

### Apache SNI-Fehler

Angenommen, folgende Anfrage:

```http
GET / HTTP/1.1
Host: abc.example.com
```

In Fällen wie einem Wildcard-Zertifikat (`*.example.com`), bei dem eine Verbindung für mehrere Domains (`abc.example.com`, `def.example.com`) wiederverwendet wird, kann der Server mit einem 421 antworten:

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Mehrere Hosts und fehlgeleitete Anfragen](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache-Serverdokumentation
- [TLS](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication)
- [Konfiguration der Transportschichtsicherheit (TLS)](/de/docs/Web/Security/Practical_implementation_guides/TLS)
