---
title: 421 Misdirected Request
slug: Web/HTTP/Reference/Status/421
l10n:
  sourceCommit: 3e36a67afb3dd6515281eb8a28a600028c4f8845
---

Der HTTP-Statuscode **`421 Misdirected Request`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) deutet darauf hin, dass die Anfrage an einen Server gerichtet wurde, der nicht in der Lage ist, eine Antwort zu erzeugen.
Dies kann von einem Server gesendet werden, der nicht so konfiguriert ist, dass er Antworten für die Kombination aus [Schema](/de/docs/Web/URI/Reference/Schemes) und [Authority](/de/docs/Web/URI/Reference/Authority) liefern kann, die in der Anforderungs-URI enthalten sind.

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
- [Mehrere Hosts und falsch gerichtete Anfragen](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache Server-Dokumentation
- [TLS 1.3](/de/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- [Server Name Indication (SNI)](https://de.wikipedia.org/wiki/Server_Name_Indication)
- [Konfiguration der Transport Layer Security (TLS)](/de/docs/Web/Security/Practical_implementation_guides/TLS)
