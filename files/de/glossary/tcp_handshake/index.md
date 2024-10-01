---
title: TCP handshake
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

{{Glossary("TCP", "TCP (Transmission Control Protocol)")}} verwendet einen **Three-Way-Handshake** (auch bekannt als TCP-Handshake, Three-Message-Handshake und/oder SYN-SYN-ACK), um eine TCP/IP-Verbindung über ein IP-basiertes Netzwerk aufzubauen. Ebenso wird ein **Four-Way-Handshake** verwendet, um die Verbindung zu beenden.

Die drei von TCP übertragenen Nachrichten zur Aushandlung und zum Start einer TCP-Sitzung werden SYN, _SYN-ACK_ und ACK für **SYN**chronisieren, **SYN**chronisieren-**ACK**nowledgement und **ACK**nowledge genannt. Der Mechanismus mit drei Nachrichten ist so konzipiert, dass zwei Computer, die Informationen miteinander austauschen möchten, die Parameter der Verbindung aushandeln können, bevor Daten wie HTTP-Browseranfragen übertragen werden.

1. Der Initiator, in der Regel der Browser, sendet ein TCP SYNchronize-Paket an den anderen Host, normalerweise den Server.
2. Der Server empfängt das SYN und sendet ein SYNchronize-ACKnowledgement zurück.
3. Der Initiator empfängt das SYN-ACK des Servers und sendet ein ACKnowledge. Der Server empfängt das ACK und die TCP-Socket-Verbindung wird hergestellt.

Dieser Handshake-Schritt erfolgt nach einem {{Glossary("DNS", "DNS-Lookup")}} und vor dem {{Glossary("TLS", "TLS")}}-Handshake, wenn eine sichere Verbindung hergestellt wird. Die Verbindung kann unabhängig von jeder Seite der Verbindung über einen Four-Way-Handshake beendet werden, bei dem ein Paar von FIN (Finish) und ACK-Nachrichten unabhängig voneinander von jeder Seite gesendet und empfangen werden.

1. Der Initiator sendet ein FIN-Paket an den anderen Host.
2. Der andere Host sendet ein ACK-Paket zurück an den Initiator.
3. Nun ist die Verbindung halbgeschlossen, und der andere Host kann weiterhin Daten senden. (Zum Beispiel kann der Server das Senden von Daten an den Client beenden, wenn der Client seine Verbindung zum Server geschlossen hat.)
4. Der andere Host sendet ein FIN-Paket an den Initiator.
5. Der Initiator sendet ein ACK-Paket zurück an den anderen Host.

## Siehe auch

- [Transport Layer Security (TLS) protocol](/de/docs/Web/Security/Transport_Layer_Security)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTPS", "HTTPS")}}
- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) auf Wikipedia
