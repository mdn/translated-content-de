---
title: TCP-Handshake
slug: Glossary/TCP_handshake
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{Glossary("TCP", "TCP (Transmission Control Protocol)")}} verwendet einen **Drei-Wege-Handshake** (auch als TCP-Handshake, Drei-Nachrichten-Handshake und/oder SYN-SYN-ACK bekannt), um eine TCP/IP-Verbindung über ein IP-basiertes Netzwerk aufzubauen. Ähnlich wird ein **Vier-Wege-Handshake** verwendet, um die Verbindung zu beenden.

Die drei Nachrichten, die von TCP gesendet werden, um eine TCP-Sitzung auszuhandeln und zu starten, sind SYN, _SYN-ACK_ und ACK für **SYN**chronisieren, **SYN**chronisieren-**ACK**nowledgement und **ACK**nowledge. Der Drei-Nachrichten-Mechanismus ist so konzipiert, dass zwei Computer, die Informationen austauschen möchten, die Parameter der Verbindung verhandeln können, bevor Daten wie HTTP-Browseranfragen übertragen werden.

1. Der Initiator, normalerweise der Browser, sendet ein TCP-SYNchronize-Paket an den anderen Host, in der Regel den Server.
2. Der Server empfängt das SYN und sendet ein SYNchronize-ACKnowledgement zurück.
3. Der Initiator empfängt das SYN-ACK des Servers und sendet ein ACKnowledge. Der Server empfängt ACK und die TCP-Socket-Verbindung wird hergestellt.

Dieser Handshake-Schritt erfolgt nach einer {{Glossary("DNS", "DNS-Abfrage")}} und vor dem {{Glossary("TLS", "TLS")}}-Handshake, wenn eine sichere Verbindung erstellt wird. Die Verbindung kann unabhängig von jeder Seite der Verbindung über einen Vier-Wege-Handshake beendet werden, bei dem ein Paar von FIN (finish) und ACK-Nachrichten unabhängig von jeder Seite gesendet und empfangen werden.

1. Der Initiator sendet ein FIN-Paket an den anderen Host.
2. Der andere Host sendet ein ACK-Paket zurück an den Initiator.
3. Jetzt ist die Verbindung halbgeschlossen, und der andere Host kann weiterhin Daten senden. (Zum Beispiel kann der Server das Senden von Daten an den Client abschließen, wenn der Client seine Verbindung zum Server geschlossen hat.)
4. Der andere Host sendet ein FIN-Paket an den Initiator.
5. Der Initiator sendet ein ACK-Paket zurück an den anderen Host.

## Siehe auch

- [Transport Layer Security (TLS)-Protokoll](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTPS", "HTTPS")}}
- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) auf Wikipedia
