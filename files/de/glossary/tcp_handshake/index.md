---
title: TCP-Handshake
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

{{Glossary("TCP", "TCP (Transmission Control Protocol)")}} verwendet einen **Three-Way-Handshake** (auch TCP-Handshake, drei Nachrichten-Handshake und/oder SYN-SYN-ACK genannt), um eine TCP/IP-Verbindung über ein IP-basiertes Netzwerk einzurichten. Ähnlich wird ein **Four-Way-Handshake** verwendet, um die Verbindung zu beenden.

Die drei Nachrichten, die von TCP übertragen werden, um eine TCP-Sitzung zu verhandeln und zu starten, werden als SYN, _SYN-ACK_ und ACK für **SYN**chronisieren, **SYN**chronisieren-**ACK**nowledge und **ACK**nowledge bezeichnet. Der Mechanismus der drei Nachrichten ist so konzipiert, dass zwei Computer, die Informationen untereinander austauschen möchten, die Parameter der Verbindung verhandeln können, bevor Daten wie HTTP-Browseranfragen übertragen werden.

1. Der Initiator, in der Regel der Browser, sendet ein TCP SYNchronize-Paket an den anderen Host, in der Regel den Server.
2. Der Server empfängt das SYN und sendet eine SYNchronize-ACKnowledgement zurück.
3. Der Initiator empfängt das SYN-ACK des Servers und sendet eine ACKnowledge. Der Server empfängt das ACK und die TCP-Socket-Verbindung ist hergestellt.

Dieser Handshake-Schritt erfolgt nach einer {{Glossary("DNS", "DNS-Abfrage")}} und vor dem {{Glossary("TLS", "TLS")}}-Handshake, wenn eine sichere Verbindung hergestellt wird. Die Verbindung kann unabhängig von jeder Seite der Verbindung über einen Four-Way-Handshake beendet werden, bei dem ein Paar von FIN (Finish) und ACK-Nachrichten unabhängig voneinander von jeder Seite gesendet und empfangen werden.

1. Der Initiator sendet ein FIN-Paket an den anderen Host.
2. Der andere Host sendet ein ACK-Paket zurück an den Initiator.
3. Nun ist die Verbindung halb geschlossen, und der andere Host kann weiterhin Daten senden. (Zum Beispiel kann der Server das Senden von Daten an den Client beenden, wenn der Client seine Verbindung zum Server geschlossen hat.)
4. Der andere Host sendet ein FIN-Paket an den Initiator.
5. Der Initiator sendet ein ACK-Paket zurück an den anderen Host.

## Siehe auch

- [Transport Layer Security (TLS)-Protokoll](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTPS", "HTTPS")}}
- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) auf Wikipedia
