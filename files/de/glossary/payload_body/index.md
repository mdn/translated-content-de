---
title: Payload body
slug: Glossary/Payload_body
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{GlossarySidebar}}

Der HTTP-Nachrichten-**Nutzlastkörper** ist der _Informationsteil_ ("Payload") der Daten, die im HTTP-Nachrichtenkörper gesendet werden (falls vorhanden), bevor die [Transfer-Encoding](/de/docs/Web/HTTP/Headers/Transfer-Encoding) angewendet wird. Wenn keine Transfer-Encoding verwendet wird, sind der _Nutzlastkörper_ und der _Nachrichtenkörper_ identisch!

In diesem Beispiel enthält der Nachrichtenkörper nur den Nutzlastkörper: "Mozilla Developer Network":

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

Im Gegensatz dazu wird in der folgenden Antwort _Transfer-Encoding_ verwendet, um den Nutzlastkörper in Chunks zu kodieren. Der gesendete Nutzlastkörper (Information) ist weiterhin "Mozilla Developer Network", aber der Nachrichtenkörper enthält zusätzliche Daten, um die Chunks zu trennen:

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

Weitere Informationen finden Sie in [RFC 7230, Abschnitt 3.3: Message Body](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3) und [RFC 7230, Abschnitt 3.3.1: Transfer-Encoding](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.1).
