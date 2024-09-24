---
title: TCP-Handshake
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

{{glossary('TCP','TCP (Transmission Control Protocol)')}} verwendet einen **drei-Wege-Handshake** (auch bekannt als TCP-Handshake, Drei-Nachrichten-Handshake oder SYN-SYN-ACK), um eine TCP/IP-Verbindung über ein IP-basiertes Netzwerk aufzubauen. Ähnlich dazu wird ein **vier-Wege-Handshake** verwendet, um die Verbindung zu beenden.

Die drei Nachrichten, die von TCP übertragen werden, um eine TCP-Sitzung zu verhandeln und zu starten, werden SYN, _SYN-ACK_ und ACK für **SYN**chronisieren, **SYN**chronisieren-**ACK**nowledgement und **ACK**nowledge genannt. Der Drei-Nachrichten-Mechanismus ist so konzipiert, dass zwei Computer, die Informationen miteinander austauschen möchten, die Parameter der Verbindung verhandeln können, bevor sie Daten, wie HTTP-Browseranfragen, übertragen.

1. Der Initiator, in der Regel der Browser, sendet ein TCP-SYNchronisieren-Paket an den anderen Host, in der Regel den Server.
2. Der Server empfängt das SYN und sendet ein SYNchronisieren-ACKnowledgement zurück.
3. Der Initiator empfängt das SYN-ACK des Servers und sendet ein ACKnowledge. Der Server empfängt ACK und die TCP-Socket-Verbindung wird hergestellt.

Dieser Handshake-Schritt erfolgt nach einem {{glossary('DNS', 'DNS-Lookup')}} und vor dem {{glossary('TLS')}}-Handshake, wenn eine sichere Verbindung erstellt wird. Die Verbindung kann unabhängig von jeder Seite der Verbindung über einen vier-Wege-Handshake beendet werden, bei dem ein Paar von FIN (Finish) und ACK-Nachrichten unabhängig voneinander von jeder Seite gesendet und empfangen wird.

1. Der Initiator sendet ein FIN-Paket an den anderen Host.
2. Der andere Host sendet ein ACK-Paket zurück an den Initiator.
3. Jetzt ist die Verbindung halb-geschlossen, und der andere Host kann noch Daten senden. (Beispielsweise kann der Server das Senden von Daten an den Client abschließen, wenn der Client seine Verbindung zum Server geschlossen hat.)
4. Der andere Host sendet ein FIN-Paket an den Initiator.
5. Der Initiator sendet ein ACK-Paket zurück an den anderen Host.

## Siehe auch

- [Transport Layer Security (TLS)-Protokoll](/de/docs/Web/Security/Transport_Layer_Security)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTPS")}}
- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) auf Wikipedia
