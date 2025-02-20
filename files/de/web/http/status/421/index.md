---
title: 421 Misdirected Request
slug: Web/HTTP/Status/421
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`421 Misdirected Request`** für ein [Client-Fehler-Antwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass die Anfrage an einen Server gerichtet wurde, der nicht in der Lage ist, eine Antwort zu liefern. Dies kann von einem Server gesendet werden, der nicht dafür konfiguriert ist, Antworten für die Kombination aus [Scheme](/de/docs/Web/URI/Reference/Schemes) und [Authority](/de/docs/Web/URI/Reference/Authority) zu erzeugen, die in der Anfragen-URI enthalten sind.

Clients können versuchen, die Anfrage über eine andere Verbindung erneut zu senden.

## Status

```http
421 Misdirected Request
```

## Beispiele

### Apache SNI-Fehler

Angenommen, die folgende Anfrage wird gesendet:

```http
GET / HTTP/1.1
Host: abc.example.com
```

In Fällen wie einem Wildcard-Zertifikat (`*.example.com`) und einer Verbindung, die für mehrere Domains wiederverwendet wird (`abc.example.com`, `def.example.com`), kann der Server mit einem 421-Statuscode antworten:

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Mehrere Hosts und fehlgeleitete Anfragen](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected), Apache-Server-Dokumentation
- [TLS 1.3](/de/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication)
- [Transport Layer Security (TLS)-Konfiguration](/de/docs/Web/Security/Practical_implementation_guides/TLS)
- Apache [Fehlercode `AH02032`](https://svn.apache.org/viewvc?view=revision&revision=1705672) Implementierung
