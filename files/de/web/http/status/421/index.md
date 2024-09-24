---
title: 421 Fehlgeleitete Anfrage
slug: Web/HTTP/Status/421
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`421 Misdirected Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass die Anfrage an einen Server geleitet wurde, der nicht in der Lage ist, eine Antwort zu erzeugen. Dies kann von einem Server gesendet werden, der nicht dafür konfiguriert ist, Antworten für die Kombination von [Schemen](/de/docs/Web/URI/Schemes) und [Authority](/de/docs/Web/URI/Authority) zu erstellen, die in der Anfrage-URI enthalten sind.

Clients können versuchen, die Anfrage über eine andere Verbindung zu wiederholen.

## Status

```http
421 Misdirected Request
```

## Beispiele

### Apache SNI-Fehler

Angenommen, folgende Anfrage wird gesendet:

```http
GET / HTTP/1.1
Host: abc.example.com
```

In Fällen wie einem Wildcard-Zertifikat (`*.example.com`) und einer wiederverwendeten Verbindung für mehrere Domains (`abc.example.com`, `def.example.com`) kann der Server mit einem 421 antworten:

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Mehrere Hosts und fehlgeleitete Anfragen](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache Server-Dokumentation
- [TLS 1.3](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication)
- [Transport Layer Security (TLS)-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/TLS)
- Apache [Fehlercode `AH02032`](https://svn.apache.org/viewvc?view=revision&revision=1705672) Implementierung
