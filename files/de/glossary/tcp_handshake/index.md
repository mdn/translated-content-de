---
title: TCP-Handshake
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

[TCP (Transmission Control Protocol)](/de/docs/Glossary/TCP) verwendet einen **Three-Way-Handshake** (auch bekannt als TCP-Handshake, Drei-Nachrichten-Handshake und/oder SYN-SYN-ACK), um eine TCP/IP-Verbindung über ein IP-basiertes Netzwerk einzurichten. Ähnlich wird ein **Four-Way-Handshake** verwendet, um die Verbindung zu beenden.

Die drei von TCP übertragenen Nachrichten, um eine TCP-Sitzung auszuhandeln und zu starten, werden SYN, _SYN-ACK_ und ACK für **SYN**chronisieren, **SYN**chronisierungs-**ACK**nowledgement und **ACK**nowledgement genannt. Der Mechanismus mit drei Nachrichten ist so konzipiert, dass zwei Computer, die Informationen hin und her übertragen möchten, die Parameter der Verbindung aushandeln können, bevor Daten wie HTTP-Browseranfragen übertragen werden.

1. Der Initiator, in der Regel der Browser, sendet ein TCP-SYNchronisierungs-Paket an den anderen Host, normalerweise den Server.
2. Der Server empfängt das SYN und sendet eine SYNchronisierungs-ACKnowledgement zurück.
3. Der Initiator empfängt das SYN-ACK des Servers und sendet ein ACKnowledgement. Der Server empfängt das ACK und die TCP-Socketverbindung ist etabliert.

Dieser Handshake-Schritt erfolgt nach einem [DNS-Lookup](/de/docs/Glossary/DNS) und vor dem [TLS](/de/docs/Glossary/TLS)-Handshake, wenn eine sichere Verbindung erstellt wird. Die Verbindung kann von jeder Seite der Verbindung unabhängig über einen Four-Way-Handshake beendet werden, wobei ein Paar von FIN (Finish) und ACK-Nachrichten unabhängig voneinander von jeder Seite gesendet und empfangen werden.

1. Der Initiator sendet ein FIN-Paket an den anderen Host.
2. Der andere Host sendet ein ACK-Paket zurück an den Initiator.
3. Nun ist die Verbindung halbgeschlossen, und der andere Host kann weiterhin Daten senden. (Zum Beispiel kann der Server das Senden von Daten an den Client abschließen, wenn der Client seine Verbindung zum Server geschlossen hat.)
4. Der andere Host sendet ein FIN-Paket an den Initiator.
5. Der Initiator sendet ein ACK-Paket zurück an den anderen Host.

## Siehe auch

- [Transport Layer Security (TLS) Protocol](/de/docs/Web/Security/Transport_Layer_Security)
- Verwandte Glossareinträge:
  - [HTTPS](/de/docs/Glossary/HTTPS)
- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) auf Wikipedia
