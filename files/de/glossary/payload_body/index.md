---
title: Payload body
slug: Glossary/Payload_body
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{GlossarySidebar}}

Der **Payload-Body** einer HTTP-Nachricht ist der _Informationsteil_ ("Nutzlast") der Daten, die im HTTP-Nachrichtenkörper gesendet werden (falls vorhanden), bevor die [Transfer-Encoding](/de/docs/Web/HTTP/Headers/Transfer-Encoding) angewendet wird. Wenn kein Transfer-Encoding verwendet wird, sind der _Payload-Body_ und der _Nachrichtenkörper_ identisch!

Zum Beispiel enthält der Nachrichtenkörper in dieser Antwort nur den Payload-Body: "Mozilla Developer Network":

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

Im Gegensatz dazu verwendet die nachstehende Antwort _Transfer-Encoding_, um den Payload-Body in Teile zu kodieren. Der gesendete Payload-Body (Informationen) ist immer noch "Mozilla Developer Network", aber der Nachrichtenkörper enthält zusätzliche Daten, um die Teile zu trennen:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

Für weitere Informationen siehe [RFC 7230, Abschnitt 3.3: Nachrichtenkörper](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3) und [RFC 7230, Abschnitt 3.3.1: Transfer-Encoding](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.1).
