---
title: Nutzlastkörper
slug: Glossary/Payload_body
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{GlossarySidebar}}

Der **Nutzlastkörper** (payload body) einer HTTP-Nachricht ist der _Informationsteil_ ("Nutzlast") der Daten, die im HTTP-Nachrichtenkörper gesendet werden (falls vorhanden), bevor die [Transfer-Codierung](/de/docs/Web/HTTP/Headers/Transfer-Encoding) angewendet wird. Wenn keine Transfer-Codierung verwendet wird, sind der _Nutzlastkörper_ und der _Nachrichtenkörper_ identisch!

Beispielsweise enthält in dieser Antwort der Nachrichtenkörper nur den Nutzlastkörper: "Mozilla Developer Network":

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

Im Gegensatz dazu verwendet die folgende Antwort eine _Transfer-Codierung_, um den Nutzlastkörper in Stücke zu codieren. Die gesendete Nutzlast (Information) ist immer noch "Mozilla Developer Network", aber der Nachrichtenkörper enthält zusätzliche Daten, um die Stücke zu trennen:

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
